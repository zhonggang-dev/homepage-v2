/**
 * Adapter base for the viewer families that publish an in-page tool API.
 *
 * `viewer/molstar.html` and `viewer/niivue.html` install
 * `window.ScienceVisionViewerMCP` (scripts `viewer/shared/viewer-mcp-api.js`
 * plus the family's `<family>-mcp-adapter.js`). It exposes `whenReady()`,
 * `listTools()` and `callTool(name, args)`, and it is the same surface the
 * platform's own controls use (`task-mcp-controls.js` reaches for
 * `frame.contentWindow.ScienceVisionViewerMCP`).
 *
 * The two pages differ only in which tools exist and what a state means, so
 * each family supplies a `plan(state, ctx)` returning the ordered tool calls
 * that put its viewer into that state.
 *
 * Note what is *not* here: the recorded `tool`/`input` pairs. The plan is
 * derived from `state_after`, because that is the recorded outcome. The
 * argument vocabularies differ per family -- `sv3d_orbit` is absolute on
 * molstar and a delta on architecture_inspection -- so re-issuing the
 * recorded call would not reproduce the recorded state.
 */

import { frameWindow, waitFor, warnOnPage, plain } from './_frame.js';

/** The trajectory's semantic reference frame -- what "initial" means here. */
export function pageTrajectory(scope) {
  try {
    return (scope && scope.SV_TRAJ) || null;
  } catch (error) {
    return null;
  }
}

export function createMcpViewerApi(frame, options = {}) {
  const label = options.label || 'viewer';
  const plan = options.plan;
  const scope = options.scope || (typeof window !== 'undefined' ? window : null);
  const timeoutMs = Number.isFinite(options.timeoutMs) ? options.timeoutMs : 12000;
  let handle = null;
  let lastApplied = null;

  if (typeof plan !== 'function') {
    throw new Error(`${label}: an adapter needs a plan(state, ctx) function.`);
  }

  const find = () => {
    const win = frameWindow(frame);
    const api = win && win.ScienceVisionViewerMCP;
    return api && typeof api.callTool === 'function' ? api : null;
  };

  /**
   * The page reports ready before the framing has finished moving.
   *
   * Measured on `viewer/molstar.html`: a plain load answers `viewer_get_state`
   * with the camera at radius 100.0, and about 500 ms later the same direction
   * at 10.251, with no tool call in between -- `whenReady` resolves when the
   * provider is handed a viewer, not when Mol* has framed the structure. A
   * restore applied in that window is overwritten by the fit, and a read-back
   * taken there is of a camera nobody ever sees. So readiness also waits for
   * the state to stop changing.
   */
  const settle = async (api, attempts = 10, intervalMs = 120) => {
    let previous = null;
    for (let index = 0; index < attempts; index += 1) {
      let state;
      try {
        state = await api.callTool('viewer_get_state', {});
      } catch (error) {
        return null;
      }
      const fingerprint = JSON.stringify(state);
      if (previous !== null && fingerprint === previous) return state;
      previous = fingerprint;
      await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
    // Never settled: proceed rather than hold the replay forever. The harness
    // reads the viewer back, so what this misses it reports.
    return null;
  };

  const ready = async () => {
    if (handle) return handle;
    const api = await waitFor(find, { timeoutMs });
    // The page's own readiness: it resolves only once the family adapter has
    // been handed a live viewer, and rejects when loading failed outright.
    await api.whenReady();
    await settle(api);
    handle = api;
    return handle;
  };

  return {
    describe: () => ({ family: options.family || label, mechanism: 'viewer-mcp-api' }),

    /** What this family's replay follows, for the note on the task page. */
    coverage: () => options.coverage || null,

    whenReady: () => ready(),

    async apply(state) {
      const api = await ready();
      const traj = pageTrajectory(scope);
      const target = plain(state);
      const calls = plan(target, {
        initial: plain(traj && traj.initial_state),
        // What the previous step asked for. These two families expose rotation
        // only as a delta, so the plan is expressed relative to either the
        // recorded initial framing or the last requested one -- never to a
        // `viewer_reset`, see the note at the top of each family adapter.
        last: lastApplied,
      });
      const performed = [];
      for (const call of calls) {
        if (!call) continue;
        try {
          await api.callTool(call.tool, call.args || {});
        } catch (error) {
          throw new Error(`${label}: ${call.tool} failed: ${(error && error.message) || error}`);
        }
        performed.push(call.tool);
      }
      lastApplied = target;
      return performed;
    },

    /** Read the viewer back, so a test can tell movement from silence. */
    async snapshot() {
      const api = await ready();
      return api.callTool('viewer_get_state', {});
    },

    /** Called by the driver when a step could not be applied. */
    report(error) {
      warnOnPage(frame, `${label} viewer did not follow the trajectory: `
        + `${(error && error.message) || error}`);
    },
  };
}
