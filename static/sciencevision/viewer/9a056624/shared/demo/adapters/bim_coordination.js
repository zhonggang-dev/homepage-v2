/**
 * bim_coordination adapter -- `viewer/bim_coordination.html`
 * (1 of the 15 demo tasks).
 *
 * The page's restore path takes a narrower snapshot than
 * architecture_inspection's, and it is worth being exact about what it does
 * NOT restore:
 *
 *   state.candidates[].visible -> snapshot.visible_candidates (candidate ids)
 *   state.opacity             -> snapshot.opacities (one value for all)
 *   state.ground.visible      -> snapshot.ground.visible
 *   state.envelopes.visible   -> snapshot.envelopes.enabled
 *   state.view                -> snapshot.camera.current_view
 *
 * NOT restored, and named here rather than left to look like a bug:
 *   - `state.camera.{position,target,up}`. The page's restore path ends in
 *     `setView(current_view)`, which reframes from the scene bounds, so the
 *     candidate view lands on the right axis but not on the recorded offset.
 *     The trajectory moves the camera on 7 of its 12 steps; those steps still
 *     change what is on screen through the view name.
 *   - `state.plan_underlay.visible`. The page's restore path has no case for it.
 *
 * The candidate ids are positional, exactly as the page builds them:
 * `candidate-a`, `candidate-b`, ... in load order.
 */

import { createStateRestoreApi } from './_message.js';
import { num } from './_frame.js';

const VIEW_NAMES = new Set(['iso', 'plan', 'front', 'side', 'custom']);

function candidateId(index) {
  return `candidate-${String.fromCharCode(97 + index)}`;
}

export function snapshotFor(state, ctx) {
  if (!state || typeof state !== 'object') return null;
  // The page re-checks viewer/task/session/mode on the snapshot body, not only
  // on the message envelope, and returns early without a word if they differ.
  const out = { viewer: 'bim_coordination', ...((ctx && ctx.identity) || {}) };
  let mapped = false;

  const candidates = Array.isArray(state.candidates) ? state.candidates : [];
  if (candidates.length) {
    const visible = [];
    const opacities = {};
    const opacity = num(state.opacity);
    candidates.forEach((candidate, position) => {
      const index = num(candidate && candidate.index);
      const id = candidateId(index === undefined ? position : index);
      if (candidate && candidate.visible === true) visible.push(id);
      if (opacity !== undefined) opacities[id] = opacity;
    });
    // Always sent, including empty, so the snapshot can express "no candidate
    // is visible". The page cannot act on that case -- its restore path guards
    // the whole block with `if (visible.size)` and would leave every candidate
    // showing -- but the omission here made an all-hidden state unrepresentable
    // at this layer too, which is a second place for the same fact to get lost.
    // No step in this corpus hides every candidate, so it is latent, not live.
    out.visible_candidates = visible;
    mapped = true;
    if (Object.keys(opacities).length) {
      out.opacities = opacities;
      mapped = true;
    }
  }

  if (state.ground && typeof state.ground.visible === 'boolean') {
    out.ground = { visible: state.ground.visible };
    mapped = true;
  }

  if (state.envelopes && typeof state.envelopes.visible === 'boolean') {
    out.envelopes = { enabled: state.envelopes.visible };
    mapped = true;
  }

  const view = state.view;
  if (typeof view === 'string') {
    out.camera = { current_view: VIEW_NAMES.has(view) ? view : 'custom' };
    mapped = true;
  }

  return mapped ? out : null;
}

export function createViewerApi(frame, options = {}) {
  return createStateRestoreApi(frame, {
    ...options,
    family: 'bim_coordination',
    label: 'BIM coordination',
    snapshot: snapshotFor,
    coverage: {
      dimensions: {
        view: 'the named view',
        candidates: 'which candidates are visible, and their opacity',
        ground: 'the ground plane',
        envelopes: 'the envelopes',
      },
      // The page's own restore path ends in setView(current_view), which
      // reframes from the scene bounds and has no case for camera vectors.
      // Editing that page's restoreState is out of bounds, so the gap is
      // stated on the page instead.
      doesNotFollow: ['the recorded camera position and offset (the page reframes from the view name)',
        'the plan underlay'],
    },
  });
}

export default createViewerApi;
