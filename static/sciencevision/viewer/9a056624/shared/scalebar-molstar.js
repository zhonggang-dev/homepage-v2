// Adaptive Angstrom scale bar for the Mol* (structure) viewer.
//
// Mol* has no built-in scale bar, so this is a DOM overlay rather than a patched
// renderer method. The length comes from camera.getPixelSize(point), which Mol*
// implements by projecting the point, stepping one pixel in x, and unprojecting
// -- so it is exact for the plane the point sits on and needs no assumptions
// about field of view, pixelScale, or devicePixelRatio.
//
// Two honesty notes, both recorded in the snapshot sidecar:
//   * Under the default perspective camera, px-per-Angstrom varies with depth.
//     We measure at the camera target plane, where the structure is centered.
//     In orthographic mode the value is exact everywhere.
//   * Angstrom is safe to assert for this bundle's structures: mmCIF
//     _atom_site.Cartn_* is Angstrom by dictionary definition, and the .xyz
//     files follow the QM9 convention.
//
// Positioned with fixed coordinates read from the canvas rect each update, so it
// never depends on Mol*'s own panel layout or stacking context.
(function installScienceVisionMolstarScaleBar() {
  'use strict';

  if (window.ScienceVisionInstallMolstarScaleBar) return;

  const OVERLAY_ID = 'sv-scalebar-molstar';
  const MARGIN_PX = 12;
  const TICK_PX = 5;

  function buildOverlay() {
    const wrap = document.createElement('div');
    wrap.id = OVERLAY_ID;
    Object.assign(wrap.style, {
      position: 'fixed',
      zIndex: '20',
      pointerEvents: 'none',
      display: 'none',
      font: '11px ui-monospace, SFMono-Regular, Menlo, monospace',
      color: '#f0f6fc',
      textShadow: '0 1px 2px rgba(0,0,0,0.9)',
      textAlign: 'center',
    });

    // Bar drawn as a bottom border plus two end ticks -- a plain div reads as a
    // progress bar, and the ticks make the endpoints unambiguous.
    const bar = document.createElement('div');
    Object.assign(bar.style, {
      position: 'relative',
      height: `${TICK_PX}px`,
      borderLeft: '2px solid #f0f6fc',
      borderRight: '2px solid #f0f6fc',
      borderBottom: '2px solid #f0f6fc',
      boxSizing: 'border-box',
    });

    const label = document.createElement('div');
    Object.assign(label.style, { marginTop: '2px', whiteSpace: 'nowrap' });

    wrap.append(bar, label);
    return { wrap, bar, label };
  }

  /**
   * Angstrom per CSS pixel at the camera target, or null if unmeasurable.
   * @param {object} camera Mol* Camera
   * @param {HTMLCanvasElement} canvas
   * @returns {number|null}
   */
  function angstromPerCssPx(camera, canvas) {
    const target = camera?.state?.target;
    const viewportWidth = Number(camera?.viewport?.width);
    const cssWidth = Number(canvas?.clientWidth);
    if (!target || !(viewportWidth > 0) || !(cssWidth > 0)) return null;
    const perViewportPx = Number(camera.getPixelSize(target));
    if (!Number.isFinite(perViewportPx) || perViewportPx <= 0) return null;
    // getPixelSize works in viewport (render-buffer) pixels; the overlay is laid
    // out in CSS pixels. Measure the ratio rather than trusting devicePixelRatio,
    // because Mol*'s pixelScale is independent of it.
    return perViewportPx * (viewportWidth / cssWidth);
  }

  /**
   * Install the Angstrom scale bar on a Mol* viewer.
   * Safe to call once per viewer; a second call is a no-op.
   *
   * @param {object} viewer the object molstar.Viewer.create() resolves to
   * @param {{targetFraction?: number}} [options]
   * @returns {{destroy: () => void}}
   */
  function install(viewer, options = {}) {
    const math = window.ScienceVisionScaleBar;
    if (!math) throw new Error('scalebar.js must load before scalebar-molstar.js');
    const plugin = viewer?.plugin;
    const canvas3d = plugin?.canvas3d;
    const camera = canvas3d?.camera;
    if (!camera || typeof camera.getPixelSize !== 'function') {
      throw new Error('scalebar-molstar: Mol* camera is unavailable');
    }
    const existing = document.getElementById(OVERLAY_ID);
    if (existing) return { destroy() {} };

    const { wrap, bar, label } = buildOverlay();
    document.body.appendChild(wrap);

    let frame = null;
    let disposed = false;

    function hide() {
      wrap.style.display = 'none';
      math.publish(null);
    }

    function render() {
      frame = null;
      if (disposed) return;
      const canvas = plugin.canvas3dContext?.canvas || document.querySelector('#viewer canvas');
      if (!canvas) return hide();
      const rect = canvas.getBoundingClientRect();
      if (!(rect.width > 0) || !(rect.height > 0)) return hide();

      const perCssPx = angstromPerCssPx(camera, canvas);
      if (perCssPx === null) return hide();
      const spanAngstrom = perCssPx * rect.width;
      const step = math.chooseStep(spanAngstrom, options.targetFraction);
      if (!step) return hide();

      const widthPx = step / perCssPx;
      // A bar wider than the canvas would be clipped and misread; drop a rung
      // rather than lie. chooseStep targets 25%, so this is a guard, not a path.
      if (widthPx > rect.width - 2 * MARGIN_PX) return hide();

      const text = math.formatLength(step, 'Å');
      bar.style.width = `${widthPx}px`;
      label.textContent = text;
      wrap.style.left = `${rect.left + MARGIN_PX}px`;
      wrap.style.top = `${rect.bottom - MARGIN_PX - TICK_PX - 16}px`;
      wrap.style.width = `${widthPx}px`;
      wrap.style.display = 'block';

      math.publish({
        unit: 'Å',
        length: step,
        label: text,
        units_declared: true,
        span: spanAngstrom,
        width_px: widthPx,
        projection: camera.state?.mode || 'unknown',
        measured_at: 'camera target plane',
      });
    }

    function schedule() {
      if (disposed || frame !== null) return;
      frame = requestAnimationFrame(render);
    }

    // didDraw fires once per rendered frame; coalescing through rAF keeps this to
    // one layout write per frame during a drag.
    const subscription = canvas3d.didDraw?.subscribe?.(schedule);
    window.addEventListener('resize', schedule);
    schedule();

    return {
      destroy() {
        disposed = true;
        if (frame !== null) cancelAnimationFrame(frame);
        window.removeEventListener('resize', schedule);
        subscription?.unsubscribe?.();
        wrap.remove();
        math.publish(null);
      },
    };
  }

  Object.defineProperty(window, 'ScienceVisionInstallMolstarScaleBar', {
    configurable: false,
    enumerable: true,
    writable: false,
    value: install,
  });
}());
