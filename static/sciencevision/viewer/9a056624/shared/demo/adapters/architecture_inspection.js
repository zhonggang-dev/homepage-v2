/**
 * architecture_inspection adapter -- `viewer/architecture_inspection.html`
 * (2 of the 15 demo tasks).
 *
 * The page restores absolute camera vectors, so this mapping is direct rather
 * than relative:
 *
 *   state.camera.{position,target,up} -> snapshot.camera.{position,target,up}
 *   state.layers[].{name,visible}     -> snapshot.layers{name:{visible}}
 *   state.amplification (a number)    -> snapshot.amplification.current
 *   state.cutaway.value_m             -> snapshot.cutaway.current_value_m
 *   state.view                        -> snapshot.camera.current_view
 *
 * Note the shape difference the mapping has to absorb: the trajectory records
 * `amplification` as a bare number, while the page reads
 * `snapshot.amplification.current` and ignores anything else. Handing over the
 * number unwrapped would restore every other field and silently leave the
 * deformation scale where it was -- which is half of what this task is about
 * (`sv-arch-a4-1` step 2 is exactly that operation).
 */

import { createStateRestoreApi } from './_message.js';
import { num, vec3 } from './_frame.js';

const VIEW_NAMES = new Set(['iso', 'front', 'side', 'top', 'custom']);

export function snapshotFor(state, ctx) {
  if (!state || typeof state !== 'object') return null;
  // The page re-checks viewer/task/session/mode on the snapshot body, not only
  // on the message envelope, and returns early without a word if they differ.
  const out = { viewer: 'architecture_inspection', ...((ctx && ctx.identity) || {}) };

  const camera = state.camera || {};
  const position = vec3(camera.position);
  const target = vec3(camera.target);
  const up = vec3(camera.up);
  if (position && target && up) {
    out.camera = { position, target, up };
    const view = state.view;
    out.camera.current_view = VIEW_NAMES.has(view) ? view : 'custom';
  }

  if (Array.isArray(state.layers)) {
    const layers = {};
    for (const layer of state.layers) {
      if (!layer || typeof layer.name !== 'string') continue;
      if (typeof layer.visible === 'boolean') layers[layer.name] = { visible: layer.visible };
    }
    if (Object.keys(layers).length) out.layers = layers;
  }

  const amplification = num(state.amplification);
  if (amplification !== undefined) out.amplification = { current: amplification };

  const cutValue = num(state.cutaway && state.cutaway.value_m);
  if (cutValue !== undefined) out.cutaway = { current_value_m: cutValue };

  out.notes = [];
  if (!out.camera && !out.layers && !out.amplification && !out.cutaway) return null;
  return out;
}

export function createViewerApi(frame, options = {}) {
  return createStateRestoreApi(frame, {
    ...options,
    family: 'architecture_inspection',
    label: 'architecture inspection',
    snapshot: snapshotFor,
    coverage: {
      dimensions: {
        camera: 'the camera pose',
        layers: 'layer visibility',
        view: 'the named view',
        amplification: 'the deformation scale',
        cutaway: 'the cutaway value',
      },
      // `sv3d_measure` appears in these two trajectories and the recorded state
      // keeps only a count, the same gap the other families have.
      doesNotFollow: ['measurements and annotations (the recorded state keeps only how many there were)'],
    },
    initial: () => {
      const scope = options.scope || (typeof window !== 'undefined' ? window : null);
      return scope && scope.SV_TRAJ ? scope.SV_TRAJ.initial_state : null;
    },
  });
}

export default createViewerApi;
