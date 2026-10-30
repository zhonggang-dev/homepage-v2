// Adaptive physical scale bar for the niivue (NIfTI) viewer.
//
// Why this replaces niivue's own ruler rather than just enabling it:
// niivue 0.45's drawRuler() computes its bar width as `100 / fovMM[0] * widthPx`
// -- a hardcoded 100 mm -- and draws it through drawRuler10cm() with no label.
// Half the volumes in this bundle are 34-59 mm hippocampus crops, so the
// built-in bar would be 2-3x wider than the slice and silently clipped. The
// other extreme is a 988 mm M3D-RefSeg volume, where 100 mm is a tenth of the
// view and reads as noise.
//
// drawRuler10cm() itself is length-agnostic (it subdivides whatever span it is
// given into 10 ticks), so we keep it and only change the span -- plus add the
// label, which is the part that makes the bar safe. An unlabelled adaptive bar
// is worse than no bar: a reviewer who has seen niivue before will read it as
// 10 cm.
//
// Unit honesty: niivue does NOT rescale pixdim by the header's xyzt_units field
// (it only uses it to render the header dump), so fovMM is in whatever unit the
// header declares. We label with that unit, and mark it "assumed" when the
// header declares none -- true of the 25 M3D-RefSeg volumes in this bundle.
(function installScienceVisionNiiVueScaleBar() {
  'use strict';

  if (window.ScienceVisionInstallNiiVueScaleBar) return;

  const SLICE_TYPE_RENDER = 4;          // niivue.SLICE_TYPE.RENDER
  const SPATIAL_UNITS_MASK = 0x07;      // NIfTI xyzt_units, low 3 bits
  const UNIT_BY_CODE = Object.freeze({ 1: 'm', 2: 'mm', 3: 'µm' });
  const LABEL_SCALE = 0.5;              // relative to opts.textHeight
  const BAR_COLOR = Object.freeze([0.98, 0.98, 0.98, 0.92]);
  const BAR_WIDTH_PX = 3;

  /**
   * Spatial unit the header declares, plus whether we had to assume it.
   * @param {object} nv
   * @returns {{unit: string, declared: boolean}}
   */
  function headerUnit(nv) {
    const code = Number(nv?.volumes?.[0]?.hdr?.xyzt_units) & SPATIAL_UNITS_MASK;
    const unit = UNIT_BY_CODE[code];
    return unit ? { unit, declared: true } : { unit: 'mm', declared: false };
  }

  /**
   * First non-render tile with a measurable field of view. niivue's own
   * drawRuler() picks the same one, so the bar lands on the tile a reviewer
   * reads first in both MPR and single-slice layouts.
   * @param {object} nv
   * @returns {{lTWH: number[], fovMM: number[]}|null}
   */
  function measurableTile(nv) {
    for (const slice of nv.screenSlices || []) {
      if (slice.axCorSag === SLICE_TYPE_RENDER) continue;
      if (!Array.isArray(slice.fovMM) || slice.fovMM.length < 2) continue;
      const lTWH = slice.leftTopWidthHeight;
      if (!Array.isArray(lTWH) || lTWH.length < 4) continue;
      if (!(lTWH[2] > 0) || !(lTWH[3] > 0)) continue;
      return { lTWH, fovMM: slice.fovMM };
    }
    return null;
  }

  /**
   * Enable a labelled, adaptive scale bar on a niivue instance.
   * Safe to call once per instance; a second call is a no-op.
   *
   * @param {object} nv a constructed, attached Niivue instance
   * @param {{targetFraction?: number}} [options]
   * @returns {object} the same instance, for chaining
   */
  function install(nv, options = {}) {
    const math = window.ScienceVisionScaleBar;
    if (!math) throw new Error('scalebar.js must load before scalebar-niivue.js');
    if (!nv || typeof nv.drawRuler10cm !== 'function') {
      throw new Error('scalebar-niivue: expected a niivue instance with drawRuler10cm()');
    }
    if (nv.__svScaleBarInstalled) return nv;

    nv.opts.isRuler = true;
    nv.opts.rulerColor = [...BAR_COLOR];
    nv.opts.rulerWidth = BAR_WIDTH_PX;

    nv.drawRuler = function drawAdaptiveRuler() {
      const tile = measurableTile(this);
      if (!tile) {
        // 3D volume render: px-per-mm is not single-valued under perspective,
        // so there is no honest bar to draw. niivue.html says so in #scale-hint.
        math.publish(null);
        return;
      }
      const { lTWH, fovMM } = tile;
      const spanUnits = Number(fovMM[0]);
      const step = math.chooseStep(spanUnits, options.targetFraction);
      if (!step) {
        math.publish(null);
        return;
      }

      const { unit, declared } = headerUnit(this);
      const widthPx = (step / spanUnits) * lTWH[2];
      const label = math.formatLength(step, unit) + (declared ? '' : ' (assumed)');

      // Leave room for the label inside the tile: drawText scales by the smaller
      // canvas dimension, and drawTextBelow anchors the text top at the y we give
      // it, growing downward.
      const labelPx = this.opts.textHeight
        * Math.min(this.gl.canvas.width, this.gl.canvas.height)
        * LABEL_SCALE;
      const bottom = lTWH[1] + lTWH[3];
      const y = Math.max(
        bottom - labelPx - 2 * this.opts.rulerWidth,
        lTWH[1] + 0.5 * lTWH[3],
      );
      const x0 = lTWH[0] + 0.5 * lTWH[2] - 0.5 * widthPx;

      this.drawRuler10cm([x0, y, x0 + widthPx, y]);
      // drawTextBelow mutates its xy argument, so hand it a throwaway array.
      this.drawTextBelow([x0 + 0.5 * widthPx, y], label, LABEL_SCALE, this.opts.rulerColor);

      math.publish({
        unit,
        length: step,
        label,
        units_declared: declared,
        span: spanUnits,
        width_px: widthPx,
        subdivisions: 10,
      });
    };

    nv.__svScaleBarInstalled = true;
    return nv;
  }

  Object.defineProperty(window, 'ScienceVisionInstallNiiVueScaleBar', {
    configurable: false,
    enumerable: true,
    writable: false,
    value: install,
  });
}());
