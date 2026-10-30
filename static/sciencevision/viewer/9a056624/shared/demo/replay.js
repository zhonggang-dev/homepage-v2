/**
 * Trajectory replay: put a 3D viewer into the state each recorded step left it in.
 *
 * This module knows nothing about any concrete viewer. It owns exactly two
 * things: the mapping from a timeline position to a state, and the discipline
 * of getting that state into the viewer once -- including when the viewer is
 * not ready yet at the moment the timeline is first moved.
 *
 * The viewer side is a thin per-family adapter (see ./adapters/) exposing:
 *
 *   apply(state)   -> void | Promise<void>   Required. Moves the viewer.
 *   whenReady()    -> Promise                Optional. Resolves when apply is
 *                                            safe; rejects when it never will be.
 *   snapshot()     -> object | Promise       Optional. Reads the viewer back,
 *                                            for verification and diagnostics.
 *   describe()     -> object                 Optional. Static metadata.
 *
 * Timeline positions are the ones the task page already uses, so the page's
 * slider, counter, screenshot and viewer stay on the same step:
 *
 *   position 0        -> traj.initial_state
 *   position n (n>=1) -> traj.steps[n - 1].state_after
 *
 * Why the states and not the recorded tool calls: `state_after` is the
 * authoritative record of where the operation left the viewer. Re-executing
 * `tool`/`input` would re-derive it, and the recorded arguments are the
 * platform's own vocabulary -- deltas on one viewer family and absolutes on
 * another -- so the same call would not mean the same thing here.
 */

import { renderCoverage } from './coverage.js';

/** How long to wait for a viewer before calling it undrivable. */
export const DEFAULT_READY_TIMEOUT_MS = 15000;

/**
 * The state sequence a timeline walks: index 0 is the state before step 1.
 *
 * @param {{initial_state?: unknown, steps?: Array<{state_after?: unknown}>}} traj
 * @returns {Array<unknown>}
 */
export function trajectoryStates(traj) {
  const steps = Array.isArray(traj && traj.steps) ? traj.steps : [];
  const initial = traj && Object.prototype.hasOwnProperty.call(traj, 'initial_state')
    ? traj.initial_state
    : null;
  return [initial, ...steps.map((step) => (step ? step.state_after : null))];
}

/**
 * Hand one state to one viewer adapter.
 *
 * @param {{apply: (state: unknown) => unknown}} viewerApi
 * @param {unknown} state
 * @returns {unknown} whatever the adapter returned
 */
export function applyState(viewerApi, state) {
  if (!viewerApi || typeof viewerApi.apply !== 'function') {
    throw new Error('Replay needs a viewer adapter with an apply(state) method.');
  }
  return viewerApi.apply(state);
}

function isThenable(value) {
  return Boolean(value) && typeof value.then === 'function';
}

/**
 * Build a replay over one trajectory and one viewer adapter.
 *
 * The returned controller is deliberately total: `go` never throws and never
 * silently drops a request. A position moved to before the viewer is ready is
 * remembered and applied as soon as it is ready (latest wins), so the viewer
 * ends up on the step the timeline shows rather than on the one it started at.
 *
 * @param {object} viewerApi
 * @param {object} traj
 * @param {{readyTimeoutMs?: number}} [options]
 */
export function makeReplay(viewerApi, traj, options = {}) {
  const states = trajectoryStates(traj);
  const readyTimeoutMs = Number.isFinite(options.readyTimeoutMs)
    ? options.readyTimeoutMs
    : DEFAULT_READY_TIMEOUT_MS;

  let position = 0;
  let settled = false;
  let pending = null;      // latest position requested while not ready
  let applied = 0;
  let error = null;
  let inFlight = null;     // promise of the most recent apply, for tests/awaits
  let lastApply = null;    // what the adapter said it did, if it said anything

  const observe = (result) => {
    if (!isThenable(result)) {
      applied += 1;
      lastApply = result === undefined ? null : result;
      return result;
    }
    const tracked = Promise.resolve(result).then(
      (value) => { applied += 1; lastApply = value === undefined ? null : value; return value; },
      (cause) => {
        error = cause instanceof Error ? cause : new Error(String(cause));
        report(error);
        return undefined;
      },
    );
    inFlight = tracked;
    return tracked;
  };

  const dispatch = (n) => {
    if (!settled) {
      pending = n;
      return;
    }
    const state = states[n];
    try {
      observe(applyState(viewerApi, state));
    } catch (cause) {
      error = cause instanceof Error ? cause : new Error(String(cause));
      report(error);
    }
  };

  const go = (n) => {
    if (!Number.isInteger(n) || n < 0 || n >= states.length) return false;
    position = n;
    dispatch(n);
    return true;
  };

  const flush = () => {
    if (pending === null) return;
    const n = pending;
    pending = null;
    dispatch(n);
  };

  const fail = (cause) => {
    error = cause instanceof Error ? cause : new Error(String(cause));
    report(error);
  };

  const report = (cause) => {
    // A viewer that cannot be driven must be loud: the screenshots keep
    // advancing either way, so silence here reads as success. The page's own
    // inline script wraps go() in try/catch and the failure arrives through a
    // promise, so this is the only channel that reaches a reader -- console,
    // a machine-readable global, and, if the adapter can reach the document,
    // a visible notice next to the viewer.
    if (typeof console !== 'undefined' && console.error) {
      console.error('[sv-replay] viewer did not follow the trajectory:', cause);
    }
    if (typeof window !== 'undefined') {
      window.SV_REPLAY_ERROR = String((cause && cause.message) || cause);
    }
    if (typeof viewerApi.report === 'function') {
      try {
        viewerApi.report(cause);
      } catch (nested) {
        // Reporting must never be the thing that breaks the timeline.
      }
    }
  };

  // Declare what this family's replay does not follow, on the page, before a
  // reader has to guess whether an unmoving panel is broken.
  const scope = options.scope || (typeof window !== 'undefined' ? window : null);
  if (options.annotate !== false) {
    try {
      renderCoverage(viewerApi, scope);
    } catch (error) {
      // A note is not worth failing the replay over.
    }
  }

  const readyPromise = typeof viewerApi.whenReady === 'function'
    ? Promise.resolve()
      .then(() => withTimeout(viewerApi.whenReady(), readyTimeoutMs))
      .then(
        () => { settled = true; flush(); },
        (cause) => { fail(cause); },
      )
    : null;

  if (readyPromise) {
    readyPromise.catch(() => undefined);
  } else {
    settled = true;
  }

  return {
    go,
    next: () => go(position + 1),
    prev: () => go(position - 1),
    position: () => position,
    state: () => states[position],
    /** Resolves once readiness has been decided (never rejects). */
    whenSettled: () => (readyPromise ? readyPromise.then(() => undefined, () => undefined)
      : Promise.resolve()),
    /** Resolves when the most recent apply has finished. */
    whenApplied: () => (inFlight ? inFlight.then(() => undefined, () => undefined)
      : Promise.resolve()),
    status: () => ({
      position,
      total: states.length - 1,
      ready: settled,
      pending,
      applied,
      // A step an adapter could not map reports an empty operation list here.
      // It is not an error -- some steps genuinely have nothing this viewer
      // can show -- but it must be visible rather than assumed away.
      last_apply: lastApply,
      error: error ? String(error.message || error) : null,
    }),
    /** Read the viewer back through the adapter, when it can. */
    snapshot: () => (typeof viewerApi.snapshot === 'function' ? viewerApi.snapshot() : null),
    /** What the adapter says it is and what it can and cannot map. */
    describe: () => (typeof viewerApi.describe === 'function' ? viewerApi.describe() : null),
    /** What this family's replay follows, as declared on the page. */
    coverage: () => (typeof viewerApi.coverage === 'function' ? viewerApi.coverage() : null),
  };
}

function withTimeout(promise, ms) {
  if (!Number.isFinite(ms) || ms <= 0) return promise;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`viewer was not ready within ${ms} ms`));
    }, ms);
    Promise.resolve(promise).then(
      (value) => { clearTimeout(timer); resolve(value); },
      (cause) => { clearTimeout(timer); reject(cause); },
    );
  });
}
