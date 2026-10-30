/**
 * niivue adapter -- `viewer/niivue.html` (2 of the 15 demo tasks).
 *
 * What the recorded state carries (state_after):
 *   slice_type (0..4), mode ('mpr' | 'render'), crosshair{voxel, fraction},
 *   window, level, mask{visible, opacity, present},
 *   clip{enabled, depth, azimuth_deg, elevation_deg},
 *   render{azimuth_deg, elevation_deg}, pan, dims
 *
 * What the shipped page's tool set offers: `viewer_set_view`,
 * `viewer_crosshair`, `viewer_window_level`, `viewer_visibility`,
 * `viewer_clip_plane`, `viewer_rotate` (incremental), `viewer_reset`.
 *
 * Unlike molstar, nearly everything here is absolute: `slice_type` indexes the
 * same five-member table the page uses (`axial, coronal, sagittal,
 * multiplanar, render`), the crosshair is a voxel triplet, and window/level are
 * absolute numbers. Only the 3D render angles are incremental, and the demo
 * tasks never move them (0 camera moves across both niivue trajectories), so
 * they are mapped for completeness rather than relied on.
 *
 * Ordering is load-bearing: `viewer_rotate` switches the viewer into `render`
 * mode as a side effect, so the render angles are applied FIRST and the mode
 * last, or the mode would be overwritten on every step that moves the camera.
 *
 * There is no `viewer_reset` here either -- see molstar.js. Every other field
 * this adapter touches is absolute, so a reset buys nothing, and the sibling
 * page's reset is demonstrably wrong on the shipped bundle.
 */

import { createMcpViewerApi } from './_mcp.js';
import { num, vec3 } from './_frame.js';

/** The page's SLICE table (`niivue-mcp-adapter.js`), by value. */
const SLICE_NAMES = ['axial', 'coronal', 'sagittal', 'multiplanar', 'render'];

const MASK_LAYER = 1;

function clamp(value, low, high) {
  return Math.max(low, Math.min(high, value));
}

function viewMode(state) {
  const sliceType = num(state && state.slice_type);
  if (sliceType !== undefined && SLICE_NAMES[sliceType]) return SLICE_NAMES[sliceType];
  return state && state.mode === 'render' ? 'render' : 'multiplanar';
}

export function plan(state, ctx) {
  if (!state) return [];
  const calls = [];

  // 1. Render angles first -- this tool forces the viewer into render mode.
  //    Reference is the last requested angle, or the recorded initial one on
  //    the first step; see molstar.js for why there is no viewer_reset.
  const render = state.render || {};
  const reference = (ctx && ctx.last && ctx.last.render)
    || (ctx && ctx.initial && ctx.initial.render) || {};
  const azimuth = num(render.azimuth_deg);
  const elevation = num(render.elevation_deg);
  const baseAzimuth = num(reference.azimuth_deg);
  const baseElevation = num(reference.elevation_deg);
  if (azimuth !== undefined && baseAzimuth !== undefined
      && (azimuth !== baseAzimuth || elevation !== baseElevation)) {
    calls.push({
      tool: 'viewer_rotate',
      args: {
        d_azimuth_deg: azimuth - baseAzimuth,
        d_elevation_deg: (elevation === undefined || baseElevation === undefined)
          ? 0
          : elevation - baseElevation,
        d_roll_deg: 0,
      },
    });
  }

  // 2. Which planes are on screen, then where the crosshair sits on them.
  calls.push({ tool: 'viewer_set_view', args: { mode: viewMode(state) } });

  const voxel = vec3(state.crosshair && state.crosshair.voxel);
  if (voxel && voxel.every((value) => Number.isInteger(value))) {
    calls.push({ tool: 'viewer_crosshair', args: { space: 'voxel', position: voxel } });
  }

  // 3. Display window, then the 3D clip plane.
  const width = num(state.window);
  const center = num(state.level);
  if (width !== undefined && center !== undefined && width > 0) {
    calls.push({ tool: 'viewer_window_level', args: { center, width, layer: 0 } });
  }

  const clip = state.clip;
  if (clip) {
    if (clip.enabled === false) {
      calls.push({ tool: 'viewer_clip_plane', args: { enabled: false } });
    } else {
      calls.push({
        tool: 'viewer_clip_plane',
        args: {
          enabled: true,
          depth: clamp(num(clip.depth) === undefined ? 0 : num(clip.depth), -1, 1),
          azimuth_deg: num(clip.azimuth_deg) === undefined ? 0 : num(clip.azimuth_deg),
          elevation_deg: clamp(num(clip.elevation_deg) === undefined ? 0 : num(clip.elevation_deg), -90, 90),
        },
      });
    }
  }

  // 4. The mask overlay, when this task has one. Layer 0 is the base volume;
  //    overlays start at 1, and asking for a layer that is not loaded throws.
  const mask = state.mask;
  if (mask && mask.present === true) {
    const args = { layer: MASK_LAYER };
    if (typeof mask.visible === 'boolean') args.visible = mask.visible;
    const opacity = num(mask.opacity);
    if (opacity !== undefined) args.opacity = clamp(opacity, 0, 1);
    if (Object.keys(args).length > 1) calls.push({ tool: 'viewer_visibility', args });
  }

  return calls;
}

export function createViewerApi(frame, options = {}) {
  return createMcpViewerApi(frame, {
    ...options,
    family: 'niivue',
    label: 'NiiVue',
    plan,
    coverage: {
      // Keyed so a checker can enforce the claim: every key here must be
      // compared against the live viewer, or reported as skipped with a reason.
      dimensions: {
        planes: 'the plane layout',
        crosshair: 'the crosshair',
        mask: 'the mask overlay',
        clip: 'the clip plane',
        window_level: 'the display window and level',
      },
      doesNotFollow: ['measurements (the recorded state keeps only how many there were)'],
    },
  });
}

export default createViewerApi;
