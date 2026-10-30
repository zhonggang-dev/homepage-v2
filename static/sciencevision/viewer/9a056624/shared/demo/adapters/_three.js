/**
 * Adapter base for the two plain three.js families (`occt`, `gltf`).
 *
 * `viewer/occt.html` and `viewer/gltf.html` keep their scene, camera and
 * controls in module scope and publish nothing, so there is no door to knock
 * on: the parent cannot reach a `const` inside a `<script type="module">`.
 * Each of the two pages therefore publishes one handle -- four lines at the
 * bottom of the module that already owns the objects:
 *
 *   window.ScienceVisionViewerState = { THREE, scene, camera, controls, cutaway, root };
 *
 * That is the same thing these pages already do elsewhere (`__sv_viewer`,
 * `__SV_ARCH_STATE__`, `__SV_BIM_STATE__`): the pages are served same-origin
 * and the parent is the trusted task page. Nothing runs until a parent asks,
 * and the object is inert when nothing drives it.
 *
 * Everything else lives here, so the two pages stay two lines apart rather
 * than two implementations apart.
 */

import { frameWindow, waitFor, vec3, num } from './_frame.js';

export const HANDLE_NAME = 'ScienceVisionViewerState';

export function handles(frame) {
  const win = frameWindow(frame);
  const state = win && win[HANDLE_NAME];
  return state && state.camera && state.root ? state : null;
}

export function waitForHandles(frame, timeoutMs) {
  return waitFor(() => handles(frame), { timeoutMs });
}

/**
 * Put the page's camera where the recorded state left it, exactly.
 *
 * `options.viewCamera` names the camera the page is actually rendering. gltf
 * switches between a perspective and an orthographic camera per view preset
 * (`viewer/gltf.html:118,325-326,712` render `activeCamera`), so driving only
 * the perspective one moved a camera nobody could see and then read it back as
 * proof -- the read-back agreed while the frame on screen did not.
 */
export function applyCamera(handle, camera, options = {}) {
  const position = vec3(camera && camera.position);
  const target = vec3(camera && camera.target);
  const up = vec3(camera && camera.up);
  if (!position || !target) return false;
  const view = options.viewCamera || handle.camera;
  if (!view) return false;
  const drivesControls = view === handle.camera;
  view.position.fromArray(position);
  if (up && view.up && typeof view.up.fromArray === 'function') view.up.fromArray(up);
  if (drivesControls && handle.controls && handle.controls.target) {
    handle.controls.target.fromArray(target);
  }
  if (typeof view.lookAt === 'function') {
    // An orthographic preset is not attached to any controls, so nothing else
    // aims it at the target.
    view.lookAt(target[0], target[1], target[2]);
  }
  if (typeof view.updateProjectionMatrix === 'function') view.updateProjectionMatrix();
  if (drivesControls && handle.controls && typeof handle.controls.update === 'function') {
    handle.controls.update();
  }
  if (options.onApplied) options.onApplied();
  return true;
}

/**
 * Show/hide model nodes.
 *
 * `wanted` is a list of `{name, index, visible, opacity}`, matched in this
 * order and never by guesswork:
 *
 *   1. an integer `index` -- occt numbers the meshes it built, in the order it
 *      built them, and that order was checked against the live scene graph;
 *   2. else a `name`, but only when exactly one node carries it;
 *   3. else the entry's own position in the list, for a state that has neither.
 *
 * Returns counts for all three outcomes plus `ambiguous` and `unmatched`, so
 * `matched === total` is the only thing that means "the whole state landed".
 */
export function applyVisibility(handle, wanted) {
  const empty = {
    matched: 0, total: 0, byIndex: 0, byName: 0, ambiguous: 0, outOfRange: 0, unmatched: 0,
  };
  if (!Array.isArray(wanted) || !wanted.length) return empty;
  const nodes = [];
  collectMeshes(handle.root, nodes);
  // Every node carrying a name, not just the last one. Collapsing duplicates
  // into one Map entry is how a real bug shipped: `001-hard-034` has two parts
  // labelled "Untitled/supplement to armrest" and two "Untitled/Nylon spacer
  // 01", so a name-keyed Map lost half of them -- and the summary still said
  // `matched: 32/32` because a name hit was counted as a match whether or not
  // it was unique. Read back from the live scene, 10 of 32 parts were wrong.
  const byName = new Map();
  nodes.forEach((node, position) => {
    if (!node.name) return;
    const hits = byName.get(node.name);
    if (hits) hits.push(position);
    else byName.set(node.name, [position]);
  });

  let matched = 0;
  let indexHits = 0;
  let nameHits = 0;
  let ambiguous = 0;
  let outOfRange = 0;
  let unmatched = 0;

  wanted.forEach((entry, position) => {
    if (!entry) {
      unmatched += 1;
      return;
    }
    let node = null;
    let how = null;

    // 1. An explicit position wins when the state carries one. It is exact even
    //    where labels are not: the state numbers the meshes the page built, in
    //    the order it built them, and that order was checked against the live
    //    scene graph on all four occt tasks.
    if (Number.isInteger(entry.index)) {
      if (nodes[entry.index]) {
        node = nodes[entry.index];
        how = 'index';
      } else {
        // An index the page cannot satisfy means the recorded mesh list and the
        // loaded scene disagree -- exactly the mismatch worth shouting about.
        // Deliberately NOT falling through to the label: a unique label would
        // then quietly match, and the state would look applied on the one step
        // where the two sides have drifted apart.
        outOfRange += 1;
        unmatched += 1;
        return;
      }
    } else if (entry.name) {
      // 2. Otherwise a label, but only when it identifies exactly one node.
      const hits = byName.get(entry.name);
      if (hits && hits.length === 1) {
        node = nodes[hits[0]];
        how = 'name';
      } else if (hits && hits.length > 1) {
        // Several nodes share this label and the state gives no position to
        // choose between them. Setting any of them would be a guess, and
        // guessing here is what produced a wrong scene under a green summary.
        ambiguous += 1;
        return;
      }
    } else if (nodes[position]) {
      // 3. A bare positional state with no index and no name.
      node = nodes[position];
      how = 'index';
    }

    if (!node) {
      unmatched += 1;
      return;
    }
    matched += 1;
    if (how === 'index') indexHits += 1; else nameHits += 1;
    // Exactly what the page's own cutaway rows do (`entries[idx].obj.visible
    // = checked`), so a hidden group hides everything under it and nothing
    // else is touched.
    if (typeof entry.visible === 'boolean') node.visible = entry.visible;
    if (typeof entry.opacity === 'number') applyOpacity(node, entry.opacity);
  });

  // `matched === total` is the only thing a caller may read as "the whole state
  // was applied". `ambiguous` and `unmatched` are part of the result precisely
  // so that cannot be inferred from a bare count.
  return {
    matched, total: wanted.length, byIndex: indexHits, byName: nameHits,
    ambiguous, outOfRange, unmatched,
  };
}

/**
 * Set one opacity on every drawable under the model root.
 *
 * `occt`'s state carries a model-wide `opacity`, and the page builds one
 * material per part. Applying it is what makes that adapter's disclosure
 * ("the model opacity is followed") true; before this it was claimed and never
 * read.
 */
export function applyModelOpacity(handle, opacity) {
  if (typeof opacity !== 'number' || !Number.isFinite(opacity)) return null;
  const nodes = [];
  collectMeshes(handle.root, nodes);
  nodes.forEach((node) => applyOpacity(node, opacity));
  return { opacity: Math.max(0, Math.min(1, opacity)), nodes: nodes.length };
}

function applyOpacity(node, opacity) {
  const clamped = Math.max(0, Math.min(1, opacity));
  node.traverse((child) => {
    if (!child.material) return;
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.forEach((material) => {
      material.transparent = clamped < 1;
      material.opacity = clamped;
      material.depthWrite = clamped >= 1;
      material.needsUpdate = true;
    });
  });
}

/**
 * The opacity the page's materials are actually carrying.
 *
 * `applyModelOpacity` sets one value on every drawable, so the first one stands
 * for the model. Read back so the adapters' claim to follow the model opacity is
 * something a checker can compare rather than a sentence.
 */
export function readOpacity(handle) {
  const nodes = collectMeshes(handle && handle.root, []);
  for (const node of nodes) {
    const material = Array.isArray(node.material) ? node.material[0] : node.material;
    if (material && typeof material.opacity === 'number') return material.opacity;
  }
  return null;
}

/** The page's own cutaway sliders, in percent, keyed by axis. */
export function readCutaway(handle) {
  const panel = handle && handle.cutaway && handle.cutaway.panel;
  if (!panel || typeof panel.querySelector !== 'function') return null;
  const out = {};
  for (const axis of ['x', 'y', 'z']) {
    const input = panel.querySelector(`input[data-role="clip"][data-axis="${axis}"]`);
    if (input) out[axis] = Number(input.value);
  }
  return Object.keys(out).length ? out : null;
}

/**
 * The drawables under the model root, in the same order `applyVisibility`
 * numbers them. Exported so a read-back cannot disagree with the writer: the
 * two used to walk the tree differently, which is half of how a wrong scene
 * passed for a matched one.
 */
export function drawables(handle) {
  return collectMeshes(handle && handle.root, []);
}

/**
 * Collect drawable leaves. Groups are skipped so a named parent does not
 * shadow the meshes inside it, which is how the two pages count them too.
 */
function collectMeshes(root, out) {
  if (!root || typeof root.traverse !== 'function') return out;
  root.traverse((node) => {
    if (node.isMesh || node.isPoints || node.isLine) out.push(node);
  });
  return out;
}

/**
 * Drive the page's own cutaway control rather than re-deriving its math.
 *
 * `attachCutaway` renders one range input per axis whose value is a signed
 * percentage t in [-1, 1]; the visible side is `axis < hi - t * (hi - lo)`.
 * The recorded state gives the plane position in model units, so inverting
 * that line is all the mapping there is:
 *
 *   t = (hi - value_m) / (hi - lo)
 *
 * Setting the input and dispatching `input` reuses the page's own handler, so
 * the clip plane, the material bookkeeping and the percentage readout all stay
 * in one implementation.
 */
export function applyCutaway(frame, handle, cutaway) {
  if (!cutaway || !cutaway.axis) return { applied: false, reason: 'no cutaway in this state' };
  const axis = String(cutaway.axis);
  const low = num(cutaway.min_m);
  const high = num(cutaway.max_m);
  const value = num(cutaway.value_m);
  if (low === undefined || high === undefined || value === undefined || high === low) {
    return { applied: false, reason: 'cutaway bounds are unusable' };
  }
  const panel = handle.cutaway && handle.cutaway.panel;
  if (!panel || typeof panel.querySelector !== 'function') {
    return { applied: false, reason: 'the page has no cutaway panel' };
  }
  const input = panel.querySelector(`input[data-role="clip"][data-axis="${axis}"]`);
  if (!input) return { applied: false, reason: `no clip control for axis ${axis}` };

  const win = frameWindow(frame);
  const EventCtor = (win && win.Event) || Event;
  input.value = String(Math.max(-100, Math.min(100, ((high - value) / (high - low)) * 100)));
  input.dispatchEvent(new EventCtor('input', { bubbles: true }));
  return { applied: true, value_m: value, slider: Number(input.value) };
}
