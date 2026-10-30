/**
 * occt adapter -- `viewer/occt.html` (4 of the 15 demo tasks).
 *
 * What the recorded state carries (state_after):
 *   camera.{position,target,up,zoom,mode}, parts[{index,label,visible}],
 *   cutaway{axis,min_m,max_m,value_m}, opacity, render_mode, view, reference
 *
 * All of it is absolute, including the camera vectors and the part visibility,
 * so nothing here is relative and nothing needs a convention: the same STEP
 * file tessellates to the same world coordinates in both viewers.
 *
 * What is mapped: the camera pose (which is also what a `viewer_zoom` step
 * moves -- the platform records a new position, not a new scale), per-part
 * visibility by index, the cutaway plane, and model opacity.
 *
 * What is not mapped, named rather than left to look like a bug:
 *   - `render_mode` ('shaded'). The page builds one MeshStandardMaterial per
 *     part and has no wireframe/edges control.
 *   - `reference` (the indexed mechanical reference images). The page has no
 *     reference viewer; `sv3d_set_reference_view` steps would show nothing.
 *   - measurements. `sv3d_measure` steps change `inspection.measurements`,
 *     which this page does not draw. Those steps change the camera too when
 *     the platform refits, and that part is applied.
 *
 * `apply` returns a small summary so a caller can tell "applied" from
 * "silently matched nothing" without reading the browser console.
 */

import {
  waitForHandles, applyCamera, applyVisibility, applyModelOpacity, applyCutaway,
  drawables, readOpacity, readCutaway,
} from './_three.js';
import { num, warnOnPage } from './_frame.js';

export function createViewerApi(frame, options = {}) {
  const timeoutMs = Number.isFinite(options.timeoutMs) ? options.timeoutMs : 12000;
  let handle = null;

  const ready = async () => {
    if (!handle) handle = await waitForHandles(frame, timeoutMs);
    return handle;
  };

  return {
    describe: () => ({
      family: 'occt',
      mechanism: 'page handle (three.js scene)',
      unmapped: ['render_mode', 'reference images', 'measurements'],
    }),

    coverage: () => ({
      dimensions: {
        camera: 'the camera pose',
        layers: 'whole-part visibility',
        opacity: 'the model opacity',
        cutaway: 'the cutaway plane',
      },
      doesNotFollow: ['render mode', 'reference images',
        'measurements (the recorded state keeps only how many there were)'],
    }),

    whenReady: () => ready(),

    async apply(state) {
      const h = await ready();
      const summary = { camera: false, parts: null, opacity: null, cutaway: null };
      if (state && state.camera) summary.camera = applyCamera(h, state.camera);

      if (state && Array.isArray(state.parts)) {
        summary.parts = applyVisibility(h, state.parts.map((part, position) => ({
          name: part && typeof part.label === 'string' ? part.label : null,
          // The recorded index is what the page's own mesh order matches; the
          // label is only a fallback, and `001-hard-034` has duplicate labels.
          index: num(part && part.index) === undefined ? position : num(part.index),
          visible: part && part.visible,
        })));
      }

      if (state && num(state.opacity) !== undefined) {
        summary.opacity = applyModelOpacity(h, num(state.opacity));
      }

      if (state && state.cutaway && typeof state.cutaway === 'object') {
        summary.cutaway = applyCutaway(frame, h, state.cutaway);
      }
      return summary;
    },

    /** Called by the driver when a step could not be applied. */
    report(error) {
      warnOnPage(frame, 'occt viewer did not follow the trajectory: '
        + `${(error && error.message) || error}`);
    },

    /**
     * Read the page back, so a caller can tell movement from silence.
     *
     * `parts` is walked with the same helper the writer uses, so index n here
     * is index n there.
     */
    async snapshot() {
      const h = await ready();
      const visible = drawables(h).map((node, index) => ({
        index,
        name: node.name || '',
        visible: node.visible !== false,
      }));
      return {
        camera: {
          position: Array.from(h.camera.position, Number),
          target: h.controls && h.controls.target
            ? Array.from(h.controls.target, Number) : null,
          up: Array.from(h.camera.up, Number),
        },
        parts: visible,
        opacity: readOpacity(h),
        cutaway: readCutaway(h),
      };
    },
  };
}

export default createViewerApi;
