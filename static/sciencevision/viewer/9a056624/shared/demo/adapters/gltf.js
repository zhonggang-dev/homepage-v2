/**
 * gltf adapter -- `viewer/gltf.html` (2 of the 15 demo tasks).
 *
 * What the recorded state carries (state_after):
 *   camera.{position,target,up,zoom}, layers[{name,label,visible,opacity}],
 *   cutaway{axis,min_m,max_m,value_m}, view ('iso'|'top'|'front'|'side')
 *
 * The dominant operation in these two trajectories is `sv3d_toggle_layer`
 * (77 of 115 steps on `arch-dl-align-a01`), so layer visibility is the part
 * that has to work or the replay is a slideshow.
 *
 * Route for the view name: the page already renders four view buttons
 * (`#viewpresets [data-view=3d|plan|front|side]`), which is the interface it
 * exposes for exactly this, so the adapter clicks them rather than reaching
 * for the orthographic camera. The names differ between the platform and the
 * page and are translated here: iso -> 3d, top -> plan, front, side.
 *
 * Consequence, stated rather than hidden: the page's orthographic presets
 * frame the model from its own bounds, not from the recorded camera vectors,
 * so those steps land on the right axis but not on the recorded framing.
 *
 * Transform caveat, stated because it is the one thing here that could be
 * wrong for a reason no test in this repo can see: the recorded world
 * coordinates are the platform viewer's, and this page loads the same asset
 * through the same loader, but nothing in `trajectory.json` guarantees the
 * two agree on units or origin. The check is a screenshot: a restored pose
 * should look like the step's own frame.
 */

import {
  waitForHandles, applyCamera, applyVisibility, applyCutaway, drawables, readCutaway,
} from './_three.js';
import { frameWindow, warnOnPage } from './_frame.js';

/** Platform view name -> this page's preset button. */
const VIEW_BUTTON = { iso: '3d', top: 'plan', front: 'front', side: 'side' };

/**
 * The camera the page is actually rendering. `viewer/gltf.html` keeps an
 * `activeCamera` that flips to `orthoCamera` for every non-3D preset
 * (`:118`, `:325-326`, `:712`), and its `renderer.render(scene, activeCamera)`
 * is what puts pixels on screen.
 */
export function renderedCamera(handle) {
  const active = typeof handle.activeCamera === 'function' ? handle.activeCamera() : null;
  return active || handle.camera;
}

function clickPreset(frame, view) {
  const button = VIEW_BUTTON[view];
  if (!button) return false;
  const win = frameWindow(frame);
  const doc = win && win.document;
  if (!doc || typeof doc.querySelector !== 'function') return false;
  const node = doc.querySelector(`#viewpresets button[data-view="${button}"]`);
  if (!node || typeof node.click !== 'function') return false;
  node.click();
  return true;
}

export function createViewerApi(frame, options = {}) {
  const timeoutMs = Number.isFinite(options.timeoutMs) ? options.timeoutMs : 12000;
  let handle = null;

  const ready = async () => {
    if (!handle) handle = await waitForHandles(frame, timeoutMs);
    return handle;
  };

  return {
    describe: () => ({
      family: 'gltf',
      mechanism: 'page handle (three.js scene) + view preset buttons',
      unmapped: ['measurements'],
    }),

    coverage: () => ({
      dimensions: {
        camera: 'the camera pose',
        layers: 'per-layer visibility and opacity',
        cutaway: 'the cutaway plane',
      },
      doesNotFollow: ['measurements (the recorded state keeps only how many there were)',
        'the recorded framing of the plan and elevation views (the page frames those from its own bounds)'],
    }),

    whenReady: () => ready(),

    async apply(state) {
      const h = await ready();
      const summary = { view: false, camera: null, layers: null, cutaway: null };

      // Order matters: the preset decides which camera is live, so the vectors
      // are applied after it -- and to THAT camera, not to the perspective one
      // by default. On `001-arch-dl-align-a01`, 29 of 115 steps are `view:
      // "top"`, where the page renders `orthoCamera`; the earlier version moved
      // the perspective camera nobody could see and reported `camera: true`
      // while the visible frame was untouched.
      if (state && typeof state.view === 'string') summary.view = clickPreset(frame, state.view);
      if (state && state.camera) {
        const rendered = renderedCamera(h);
        summary.camera = applyCamera(h, state.camera, { viewCamera: rendered }) && {
          applied: true,
          rendered: rendered === h.orthoCamera ? 'orthographic' : 'perspective',
          // An orthographic preset frames its own scale from the model bounds,
          // so the pose matches the recording and the zoom does not.
          scale_matches_recording: rendered !== h.orthoCamera,
        };
      }

      if (state && Array.isArray(state.layers)) {
        summary.layers = applyVisibility(h, state.layers.map((layer) => ({
          name: layer && (layer.name || layer.label),
          visible: layer && layer.visible,
          opacity: layer && typeof layer.opacity === 'number' ? layer.opacity : undefined,
        })));
      }

      if (state && state.cutaway && typeof state.cutaway === 'object') {
        summary.cutaway = applyCutaway(frame, h, state.cutaway);
      }
      return summary;
    },

    /** Called by the driver when a step could not be applied. */
    report(error) {
      warnOnPage(frame, 'gltf viewer did not follow the trajectory: '
        + `${(error && error.message) || error}`);
    },

    /**
     * Read the page back, so a caller can tell movement from silence.
     *
     * `camera` is the camera being RENDERED, and `rendered` names which one,
     * so a caller comparing against the recording cannot be reading a pose
     * that is not on screen.
     */
    async snapshot() {
      const h = await ready();
      const nodes = drawables(h).map((node) => ({
        name: node.name || '',
        visible: node.visible !== false,
      }));
      const rendered = renderedCamera(h);
      return {
        camera: {
          position: Array.from(rendered.position, Number),
          target: rendered.target ? Array.from(rendered.target, Number) : null,
          up: Array.from(rendered.up, Number),
        },
        rendered: rendered === h.orthoCamera ? 'orthographic' : 'perspective',
        nodes,
        visible_nodes: nodes.filter((node) => node.visible).length,
        cutaway: readCutaway(h),
      };
    },
  };
}

export default createViewerApi;
