// Shared physical scale-bar helpers for the offline expert-review bundle.
//
// Both viewers face the same problem: pick a round physical length that occupies
// a useful fraction of the current view, then label it unambiguously. Niivue's
// built-in ruler hardcodes 100 mm (see drawRuler() in niivue.umd.js), which is
// 2-3x wider than the slice itself on the 34-59 mm hippocampus volumes this
// bundle ships, so niivue and Mol* both drive their bar length through
// chooseStep() rather than a fixed length.
//
// Classic script, not a module: every other shared/*.js these pages load is a
// global-installing IIFE, and mixing ESM in would need a second load path.
//
// Also holds the "what does the bar currently read" registry. The snapshot
// sidecar records that value, so a saved PNG can be traced back to the scale the
// reviewer was actually looking at rather than one recomputed later.
(function installScienceVisionScaleBar() {
  'use strict';

  if (window.ScienceVisionScaleBar) return;

  // 1-2-5 ladder. Rungs below 1 exist for Angstrom views, which routinely sit
  // under 10 A across when zoomed onto a ligand.
  const LADDER = Object.freeze([
    0.1, 0.2, 0.5,
    1, 2, 5,
    10, 20, 50,
    100, 200, 500,
    1000, 2000, 5000,
  ]);

  const DEFAULT_TARGET_FRACTION = 0.25;

  /**
   * Pick the ladder rung closest to `targetFraction` of the visible span.
   * Returns null for a span that is not a usable positive number, so callers can
   * skip drawing rather than render a bar of NaN width.
   *
   * @param {number} spanUnits visible extent, in the same unit as the result
   * @param {number} [targetFraction] share of the span the bar should cover
   * @returns {number|null}
   */
  function chooseStep(spanUnits, targetFraction = DEFAULT_TARGET_FRACTION) {
    const span = Number(spanUnits);
    if (!Number.isFinite(span) || span <= 0) return null;
    const fraction = Number.isFinite(targetFraction) && targetFraction > 0
      ? targetFraction
      : DEFAULT_TARGET_FRACTION;
    const ideal = span * fraction;
    if (!Number.isFinite(ideal) || ideal <= 0) return null;
    // Compare in log space: "half as wide" and "twice as wide" are equally wrong,
    // which a linear |difference| would not capture -- it would bias every choice
    // toward the larger rung.
    return LADDER.reduce(
      (best, step) => (
        Math.abs(Math.log(step / ideal)) < Math.abs(Math.log(best / ideal)) ? step : best
      ),
      LADDER[0],
    );
  }

  /**
   * Label a bar in its native unit. Deliberately does NOT auto-convert mm to cm:
   * these bars exist so an expert can judge dimensions, and a silent unit switch
   * between screenshots is exactly the kind of thing that produces a wrong call.
   *
   * @param {number} value
   * @param {string} unit
   * @returns {string}
   */
  function formatLength(value, unit) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return `? ${unit}`;
    // +toFixed drops trailing zeros: 0.50 -> 0.5, 20.00 -> 20.
    return `${+numeric.toFixed(2)} ${unit}`;
  }

  // Latest reading, published by whichever viewer adapter is installed. null
  // means "no bar on screen right now" -- a 3D volume render, or a view whose
  // extent we could not measure. The sidecar distinguishes the two cases from
  // its own metadata, so null here stays honest rather than guessing.
  let reading = null;

  /** @param {object|null} next */
  function publish(next) {
    reading = next ? Object.freeze({ ...next }) : null;
  }

  /** @returns {object|null} */
  function current() {
    return reading;
  }

  Object.defineProperty(window, 'ScienceVisionScaleBar', {
    configurable: false,
    enumerable: true,
    writable: false,
    value: Object.freeze({
      version: 1,
      LADDER,
      DEFAULT_TARGET_FRACTION,
      chooseStep,
      formatLength,
      publish,
      current,
    }),
  });
}());
