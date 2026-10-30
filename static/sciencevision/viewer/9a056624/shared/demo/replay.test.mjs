import assert from "node:assert/strict";
import test from "node:test";

import { makeReplay, trajectoryStates, DEFAULT_READY_TIMEOUT_MS } from "./replay.js";
import { coverageText, renderCoverage } from "./coverage.js";

const fakeApi = () => {
  const seen = [];
  return { seen, apply: (state) => seen.push(state) };
};

const deferredApi = () => {
  const seen = [];
  let release;
  const ready = new Promise((resolve) => { release = resolve; });
  return {
    seen,
    apply: (state) => seen.push(state),
    whenReady: () => ready,
    release: () => release(),
  };
};

const twoSteps = () => ({
  initial_state: { z: 0 },
  steps: [{ state_after: { z: 1 } }, { state_after: { z: 2 } }],
});

// The timeline position is the page's, not the array's: the task page calls
// SV_REPLAY.go(n) from show(n), where n is the 1-based step number and
// show(0) is the state before step 1. So go(n) must land on
// traj.steps[n - 1].state_after -- a driver that indexes steps[n] would put
// the viewer one step ahead of the screenshot beside it.
test("go lands on the step's state_after", () => {
  const api = fakeApi();
  const r = makeReplay(api, twoSteps());
  r.go(1);
  assert.deepEqual(api.seen.at(-1), { z: 1 });
  r.go(2);
  assert.deepEqual(api.seen.at(-1), { z: 2 });
});

test("go(0) restores the initial state", () => {
  const api = fakeApi();
  const traj = { initial_state: { z: 0 }, steps: [{ state_after: { z: 1 } }] };
  makeReplay(api, traj).go(0);
  assert.deepEqual(api.seen.at(-1), { z: 0 });
});

test("next past the end is a no-op", () => {
  const api = fakeApi();
  const traj = { initial_state: {}, steps: [{ state_after: { z: 1 } }] };
  const r = makeReplay(api, traj);
  r.go(1); const before = api.seen.length;
  r.next();
  assert.equal(api.seen.length, before);
});

test("prev before the start is a no-op", () => {
  const api = fakeApi();
  const r = makeReplay(api, twoSteps());
  r.go(0);
  r.prev();
  assert.deepEqual(api.seen, [{ z: 0 }]);
});

// The falsification guard: a driver that only moved a counter, or that
// swallowed the state, leaves `seen` short. Walk the whole timeline and
// require one delivered state per position, in order.
test("every position delivers its own state, and nothing is dropped", () => {
  const api = fakeApi();
  const traj = { initial_state: { z: 0 }, steps: [{ state_after: { z: 1 } }, { state_after: { z: 2 } }] };
  const r = makeReplay(api, traj);
  for (let n = 0; n <= 2; n += 1) r.go(n);
  assert.deepEqual(api.seen, [{ z: 0 }, { z: 1 }, { z: 2 }]);
  assert.equal(r.status().applied, 3);
  assert.equal(r.status().error, null);
});

// The failure mode this whole module exists to avoid: the timeline moves
// while the viewer is still loading, and the state is dropped on the floor.
// The viewer would then sit at its load-time framing for the whole demo while
// every screenshot advanced past it.
test("a position moved to before readiness is applied once the viewer is ready", async () => {
  const api = deferredApi();
  const r = makeReplay(api, twoSteps());
  r.go(2);
  assert.deepEqual(api.seen, [], "nothing may be applied before the viewer is ready");
  assert.equal(r.status().pending, 2);

  api.release();
  await r.whenSettled();
  assert.deepEqual(api.seen, [{ z: 2 }], "the wanted position must not be lost");
});

test("only the latest pre-ready position is applied", async () => {
  const api = deferredApi();
  const r = makeReplay(api, twoSteps());
  r.go(1);
  r.go(2);
  r.go(1);
  api.release();
  await r.whenSettled();
  assert.deepEqual(api.seen, [{ z: 1 }]);
});

test("a viewer that can never be driven is reported, not swallowed", async () => {
  const api = {
    seen: [],
    apply(state) { this.seen.push(state); },
    whenReady: () => Promise.reject(new Error("Mol* failed to load.")),
  };
  const r = makeReplay(api, twoSteps());
  await r.whenSettled();
  assert.deepEqual(api.seen, []);
  assert.match(r.status().error, /Mol\* failed to load/);
});

test("a viewer that never becomes ready times out instead of hanging", async () => {
  const api = {
    seen: [],
    apply(state) { this.seen.push(state); },
    whenReady: () => new Promise(() => {}),
  };
  const r = makeReplay(api, twoSteps(), { readyTimeoutMs: 20 });
  await r.whenSettled();
  assert.match(r.status().error, /not ready within 20 ms/);
});

test("an apply that rejects is recorded and does not stop later steps", async () => {
  const seen = [];
  const api = {
    apply(state) {
      seen.push(state);
      return state.z === 1 ? Promise.reject(new Error("no such chain")) : Promise.resolve();
    },
  };
  const r = makeReplay(api, twoSteps());
  r.go(1);
  await r.whenApplied();
  assert.match(r.status().error, /no such chain/);
  r.go(2);
  await r.whenApplied();
  assert.equal(seen.length, 2, "a failed step must not wedge the timeline");
});

test("out-of-range and non-integer positions are refused, not clamped", () => {
  const api = fakeApi();
  const r = makeReplay(api, twoSteps());
  assert.equal(r.go(-1), false);
  assert.equal(r.go(3), false);
  assert.equal(r.go(1.5), false);
  assert.deepEqual(api.seen, []);
});

test("trajectoryStates puts the initial state first", () => {
  const states = trajectoryStates({ initial_state: { a: 1 }, steps: [{ state_after: { a: 2 } }] });
  assert.deepEqual(states, [{ a: 1 }, { a: 2 }]);
  assert.deepEqual(trajectoryStates({}), [null], "a trajectory with no steps still has position 0");
});

test("an empty trajectory has exactly one position, the initial state", () => {
  const api = fakeApi();
  const r = makeReplay(api, { initial_state: { a: 1 }, steps: [] });
  assert.equal(r.status().total, 0);
  r.next();
  assert.deepEqual(api.seen, []);
  r.go(0);
  assert.deepEqual(api.seen, [{ a: 1 }]);
});

test("the default readiness budget is a number of milliseconds", () => {
  assert.equal(typeof DEFAULT_READY_TIMEOUT_MS, "number");
  assert.ok(DEFAULT_READY_TIMEOUT_MS > 0);
});

// A viewer that follows only part of each step leaves the panel visibly still
// for most of a task while everything beside it advances. The reader has to be
// told that on the page, so the text is asserted, not just its presence.
test("an adapter's declared limits become a sentence on the page", () => {
  const api = {
    coverage: () => ({
      follows: ["the camera pose"],
      doesNotFollow: ["measurements", "representation style"],
    }),
  };
  const text = coverageText(api);
  assert.match(text, /follows the camera pose/);
  assert.match(text, /measurements and representation style/);
  assert.match(text, /not stuck/, "it must say an unmoving panel is expected");
});

test("an adapter with no declared limits produces no note", () => {
  assert.equal(coverageText({ coverage: () => ({ follows: ["everything"] }) }), null);
  assert.equal(coverageText({}), null);
  assert.equal(coverageText(null), null);
  assert.equal(coverageText({ coverage: () => { throw new Error("boom"); } }), null);
});

const fakeDocument = () => {
  const nodes = [];
  const make = (tag) => ({
    tagName: tag, id: "", className: "", textContent: "", style: { cssText: "" },
    children: [], parentNode: null,
    remove() { const at = nodes.indexOf(this); if (at >= 0) nodes.splice(at, 1); },
  });
  return {
    nodes,
    getElementById: (id) => nodes.find((node) => node.id === id) || null,
    createElement: (tag) => make(tag),
    querySelector: (selector) => (selector === ".timeline-controls"
      ? { parentNode: { insertBefore: (node) => { node.parentNode = this; nodes.push(node); } } }
      : null),
  };
};

test("the note is inserted once and updated in place, not duplicated", () => {
  const doc = fakeDocument();
  const api = { coverage: () => ({ follows: ["the camera"], doesNotFollow: ["measurements"] }) };
  assert.ok(renderCoverage(api, { document: doc }));
  assert.equal(doc.nodes.length, 1);
  renderCoverage(api, { document: doc });
  assert.equal(doc.nodes.length, 1, "a second render must update, not append");
  assert.equal(doc.nodes[0].id, "sv-replay-coverage");
});

test("renderCoverage is a no-op without a document, so the driver stays pure", () => {
  const api = { coverage: () => ({ follows: [], doesNotFollow: ["measurements"] }) };
  assert.ok(coverageText(api));
  assert.doesNotThrow(() => renderCoverage(api, null));
  assert.doesNotThrow(() => renderCoverage(api, {}));
});

test("makeReplay declares the limits on the page it is given", () => {
  const doc = fakeDocument();
  const api = {
    apply() {},
    coverage: () => ({ follows: ["the camera"], doesNotFollow: ["measurements"] }),
  };
  makeReplay(api, twoSteps(), { scope: { document: doc } });
  assert.equal(doc.nodes.length, 1, "the note must appear when the replay is built");
  makeReplay(api, twoSteps(), { scope: { document: doc } });
  assert.equal(doc.nodes.length, 1, "and not again for a second controller");
});

test("status, snapshot and describe report the adapter, or nothing when it cannot", () => {
  const bare = makeReplay(fakeApi(), twoSteps());
  assert.equal(bare.snapshot(), null);
  assert.equal(bare.describe(), null);

  const rich = makeReplay(
    { apply() {}, snapshot: () => ({ camera: "moved" }), describe: () => ({ family: "x" }) },
    twoSteps(),
  );
  assert.deepEqual(rich.snapshot(), { camera: "moved" });
  assert.deepEqual(rich.describe(), { family: "x" });
});

// The page's own inline script wraps go() in try/catch and a failure arrives
// through a promise, so `report` is the only channel that reaches a reader.
test("a failure is handed to the adapter so the page can show it", async () => {
  const shown = [];
  const api = {
    apply: () => Promise.reject(new Error("viewer never loaded")),
    report: (error) => shown.push(String(error.message)),
  };
  const r = makeReplay(api, twoSteps());
  r.go(1);
  await r.whenApplied();
  assert.deepEqual(shown, ["viewer never loaded"]);
});

test("a report that itself throws does not wedge the timeline", async () => {
  const api = {
    apply: () => { throw new Error("boom"); },
    report: () => { throw new Error("reporting is broken too"); },
  };
  const r = makeReplay(api, twoSteps());
  r.go(1);
  assert.match(r.status().error, /boom/);
});

test("status carries what the adapter said it did, including an empty plan", async () => {
  const api = { apply: () => [] };
  const r = makeReplay(api, twoSteps());
  r.go(1);
  assert.deepEqual(r.status().last_apply, [], "an unmappable step is visible, not absorbed");

  const rich = { apply: () => ["viewer_rotate", "viewer_zoom"] };
  const r2 = makeReplay(rich, twoSteps());
  r2.go(1);
  assert.deepEqual(r2.status().last_apply, ["viewer_rotate", "viewer_zoom"]);

  const asyncApi = { apply: async () => ["viewer_reset"] };
  const r3 = makeReplay(asyncApi, twoSteps());
  r3.go(1);
  await r3.whenApplied();
  assert.deepEqual(r3.status().last_apply, ["viewer_reset"]);
});
