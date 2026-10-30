/**
 * Adapter base for the viewer families that speak the platform's parent
 * protocol.
 *
 * `viewer/architecture_inspection.html` and `viewer/bim_coordination.html`
 * implement `sciencevision.viewer_message.v1`: they post `viewer.ready` when
 * the scene is loaded, `viewer.snapshot` when asked, and they act on a
 * `state.restore` message by putting themselves into the state it carries.
 *
 * That is a better contract than anything an adapter could bolt on from
 * outside, so this base uses it as-is rather than reaching into the page.
 * Two consequences worth stating:
 *
 *  - Reach-in would not work here anyway. Neither page publishes a restore
 *    function; the message handler is the only door, and the page's restore
 *    path is only reachable through it.
 *  - A restore the page refuses is REFUSED SILENTLY: both pages return early
 *    when the snapshot's `viewer`, `task_id`, `session_id` or `mode` does not
 *    match their own, and they answer `state.restore` by posting a snapshot
 *    ONLY on the success path. So `apply` waits for that reply and rejects on
 *    timeout -- a refused restore can never look like a step that worked.
 *
 *    Note that the identity is checked TWICE, on the envelope and again on the
 *    snapshot body, so `identity` is handed to `snapshot(state, ctx)` and both
 *    adapters must spread it in. Getting this wrong is not a quiet no-op: the
 *    first browser run against the shipped pages failed all three arch-family
 *    tasks with "no reply to state.restore" for exactly this reason.
 */

import { frameWindow, frameParams, plain, warnOnPage } from './_frame.js';

export const MESSAGE_SCHEMA = 'sciencevision.viewer_message.v1';
export const PROTOCOL_VERSION = 'v1';

/** How long one readiness ping waits before the next is sent. */
export const PING_TIMEOUT_MS = 1200;

/** The identity the page compares every incoming message against. */
export function viewerIdentity(frame) {
  const params = frameParams(frame);
  const reviewOnly = params.get('mode') === 'review' || params.get('review_only') === '1';
  return {
    task_id: params.get('task_id') || params.get('task') || '',
    session_id: params.get('session_id') || 'standalone',
    mode: reviewOnly ? 'review' : 'evaluation',
  };
}

export function createStateRestoreApi(frame, options = {}) {
  const label = options.label || 'viewer';
  const buildSnapshot = options.snapshot;
  const scope = options.scope || (typeof window !== 'undefined' ? window : null);
  const timeoutMs = Number.isFinite(options.timeoutMs) ? options.timeoutMs : 10000;
  let sequence = 0;
  let ready = null;
  let readyError = null;
  const waiting = new Map();

  if (typeof buildSnapshot !== 'function') {
    throw new Error(`${label}: an adapter needs a snapshot(state, ctx) function.`);
  }
  if (!scope || typeof scope.addEventListener !== 'function') {
    throw new Error(`${label}: the parent page has no window to listen on.`);
  }

  const target = () => frameWindow(frame);
  const identity = () => viewerIdentity(frame);

  scope.addEventListener('message', (event) => {
    const win = target();
    if (!win || event.source !== win) return;
    const message = event.data;
    if (!message || typeof message !== 'object') return;
    if (message.schema_version !== MESSAGE_SCHEMA) return;

    if (message.type === 'viewer.ready') {
      if (message.complete) ready = message;
      else readyError = new Error(String(message.error || 'the viewer reported that it failed to load'));
      return;
    }
    const requestId = message.request_id;
    if (requestId && waiting.has(requestId)) {
      const settle = waiting.get(requestId);
      waiting.delete(requestId);
      settle(message);
    }
  });

  const post = (type, payload) => {
    const win = target();
    if (!win) throw new Error(`${label}: the viewer frame is gone.`);
    let origin = null;
    try {
      origin = win.location.origin;
    } catch (error) {
      origin = null;
    }
    const message = plain({
      protocol: PROTOCOL_VERSION,
      schema_version: MESSAGE_SCHEMA,
      type,
      ...identity(),
      sequence: (sequence += 1),
      ...payload,
    });
    win.postMessage(message, origin && origin !== 'null' ? origin : '*');
    return message;
  };

  const awaitReply = (requestId, what, ms) => new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      waiting.delete(requestId);
      reject(new Error(`${label}: no reply to ${what} within ${ms} ms (the viewer refused it or is not listening)`));
    }, ms);
    waiting.set(requestId, (message) => {
      clearTimeout(timer);
      resolve(message);
    });
  });

  const request = async (type, payload, what, ms = timeoutMs) => {
    const requestId = `${type}-${Date.now()}-${Math.round(Math.random() * 1e6)}`;
    const reply = awaitReply(requestId, what, ms);
    post(type, { ...payload, request_id: requestId });
    return reply;
  };

  /** A loaded scene, according to the page's own snapshot. */
  const isLoaded = typeof options.isLoaded === 'function'
    ? options.isLoaded
    : (snapshot) => !snapshot || snapshot.loaded === true;

  return {
    describe: () => ({ family: options.family || label, mechanism: MESSAGE_SCHEMA }),

    /** What this family's replay follows, for the note on the task page. */
    coverage: () => options.coverage || null,

    /**
     * Ready means "the page will answer a restore", and it is established by
     * asking rather than by waiting to be told.
     *
     * Both of these pages post `viewer.ready` exactly ONCE, from
     * `load().then(...)`. Attaching a listener and then polling the flag it
     * sets is a race against that single broadcast: measured over 5 fresh runs
     * of `001-sv-arch-a4-1`, the page became ready at 229/285 ms against a
     * driver arriving at 238/288 ms -- a ~7 ms margin that flipped run to run,
     * and 2 of the 5 runs drove the viewer zero times before the notice fired.
     *
     * A `snapshot.request` ping is proof instead of a race: the page answers it
     * from the moment its handler is installed, and the answer carries the
     * page's own `loaded` flag, which is false until the scene is really there.
     * The `viewer.ready` broadcast is still used when it does arrive -- this
     * only removes the dependence on catching it.
     */
    whenReady: async () => {
      const deadline = Date.now() + timeoutMs;
      let lastPingError = null;
      while (Date.now() < deadline) {
        if (readyError) throw readyError;
        if (ready) return true;
        try {
          const reply = await request('snapshot.request', {}, 'readiness ping',
            Math.min(PING_TIMEOUT_MS, Math.max(250, deadline - Date.now())));
          if (isLoaded(reply.snapshot)) {
            ready = reply;
            return true;
          }
          lastPingError = null;
        } catch (error) {
          lastPingError = error;
        }
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      if (readyError) throw readyError;
      throw new Error(`${label}: the viewer never reported that it was ready`
        + (lastPingError ? ` (last probe: ${lastPingError.message})` : ''));
    },

    async apply(state) {
      const snapshot = buildSnapshot(plain(state), {
        identity: identity(),
        initial: options.initial ? plain(options.initial()) : null,
      });
      if (!snapshot) {
        throw new Error(`${label}: this step's state has nothing this viewer can restore`);
      }
      const reply = await request('state.restore', { snapshot }, 'state.restore');
      return reply.snapshot ? 'state_restored' : 'state_restore_unconfirmed';
    },

    async snapshot() {
      const reply = await request('snapshot.request', {}, 'snapshot.request');
      return reply.snapshot || null;
    },

    /** Called by the driver when a step could not be applied. */
    report(cause) {
      warnOnPage(frame, `${label} viewer did not follow the trajectory: `
        + `${(cause && cause.message) || cause}`);
    },
  };
}
