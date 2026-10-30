/**
 * molstar adapter -- `viewer/molstar.html` (4 of the 15 demo tasks).
 *
 * What the recorded state carries (state_after.camera):
 *   { azimuth_deg, elevation_deg, pan_right, pan_up, zoom }
 * plus `chains[]` (per-chain visibility) and `components`.
 *
 * What the shipped page's tool set offers: `viewer_rotate` (incremental, in
 * degrees), `viewer_zoom` (a multiplicative factor), `viewer_visibility`
 * (whole structure only), `viewer_reset`, `viewer_get_state`. There is no
 * absolute camera tool and no camera vector in the recorded state, so the
 * absolute angles cannot be handed over directly.
 *
 * The route: every step is expressed as the *difference* between the step's
 * angles and the ones already requested (or the recorded `initial_state` for
 * the first step). A difference is independent of how either viewer names its
 * axes, so it survives the fact that the platform's az/el and Mol*'s are
 * different implementations of the same idea.
 *
 * There is deliberately NO `viewer_reset` here, although it exists and looks
 * like the obvious way to make each step start from a known baseline. It is
 * broken on this page: it restores `camera` as Mol* left it *before* the
 * structure was framed, i.e. position [0, 0, 100] at distance 100, where the
 * loaded framing is distance ~11.7. Measured in a browser against the shipped
 * bundle. Calling it first, as the first draft did, rendered the molecule a few
 * dozen pixels wide in the corner while every step still "moved". Tracking the
 * last requested angle gives the same idempotence without trusting that reset.
 *
 * Angle convention, stated so it can be checked: a restored image should match
 * the step's own screenshot. Measured against the shipped bundle, azimuth
 * reproduces the recorded `azimuth_deg` exactly (e.g. -52.00 vs -52); elevation
 * needs its sign flipped, and the check for that was the step screenshot, not
 * the number.
 *
 * Not mapped, and not silently: per-chain (`sv3d_set_chain_visibility`) and
 * per-component (`sv3d_set_component_visibility`) visibility. The shipped page
 * only hides whole structures, and every molstar demo task loads exactly one
 * structure -- hiding it would hide everything. `describe()` says so, and the
 * browser check reports the same. A step whose only effect is one of those --
 * `sv3d_set_chain_visibility` is step 1 of `sv-biol-bio_collision_check-0122`
 * -- yields an empty plan, and `apply` returns the empty list rather than
 * pretending.
 */

import { createMcpViewerApi } from './_mcp.js';
import { num } from './_frame.js';

// The page's `viewer_zoom` takes a FACTOR with `minimum: 0.05, maximum: 20`
// (`molstar-mcp-adapter.js`). That is not the same range as the platform
// registry's `viewer_zoom`, whose `zoom` is an absolute multiple of the
// fitting distance and runs 0.125..32 -- conflating the two clamped real steps
// by 8x, and the pose comparison in tools/demo/replay_smoke.py caught it:
// `sv-chem-chem_binding_geometry-0011` step 8 came back at 169.02 where the
// recording implied 21.02, same direction, ratio 8.04, which is the old lower
// bound. Nothing else noticed, because a clamp changes how far, not which way.
const ZOOM_FACTOR_MIN = 0.05;
const ZOOM_FACTOR_MAX = 20;

function clampZoom(factor) {
  return Math.max(ZOOM_FACTOR_MIN, Math.min(ZOOM_FACTOR_MAX, factor));
}

export function plan(state, ctx) {
  const calls = [];
  const camera = state && state.camera;
  const reference = (ctx && ctx.last && ctx.last.camera)
    || (ctx && ctx.initial && ctx.initial.camera) || {};

  const azimuth = num(camera && camera.azimuth_deg);
  const elevation = num(camera && camera.elevation_deg);
  const zoom = num(camera && camera.zoom);
  const baseAzimuth = num(reference.azimuth_deg);
  const baseElevation = num(reference.elevation_deg);
  const baseZoom = num(reference.zoom);

  const dAzimuth = (azimuth === undefined || baseAzimuth === undefined) ? 0 : azimuth - baseAzimuth;
  const dElevation = (elevation === undefined || baseElevation === undefined) ? 0 : elevation - baseElevation;
  if (Math.abs(dAzimuth) > 1e-9 || Math.abs(dElevation) > 1e-9) {
    calls.push({
      tool: 'viewer_rotate',
      args: {
        d_azimuth_deg: dAzimuth,
        // The platform's elevation and Mol*'s are opposite in sign. Two
        // independent confirmations: rotating the offset vector about the
        // camera-right axis by +d puts its y at -r*sin(d), so Mol*'s positive
        // elevation moves the camera DOWN; and rendering step 1 of
        // `sv-chem-chem_conformation-0010` (recorded elevation -52) against
        // that step's own screenshot only matches with the sign flipped --
        // without it the molecule is mirrored top-to-bottom. Azimuth needs no
        // flip: Mol*'s rotation about `up` reproduces the recorded azimuth
        // exactly (-52.00 measured).
        d_elevation_deg: -dElevation,
        d_roll_deg: 0,
      },
    });
  }

  if (zoom !== undefined && baseZoom) {
    const factor = clampZoom(zoom / baseZoom);
    if (Math.abs(factor - 1) > 1e-9) calls.push({ tool: 'viewer_zoom', args: { factor } });
  }

  // Whole-structure visibility, but ONLY when the state actually asks for
  // something other than the page's default. Every molstar state carries a
  // `structures[]` whose single entry is visible, so emitting an unconditional
  // `viewer_visibility` put a call on nearly every step -- which made an
  // otherwise unmappable step (a measurement, a chain hide) look like it had
  // done something, and undercut the "an unmappable step returns an empty list"
  // diagnostic that this family leans on.
  const structures = state && state.structures;
  if (Array.isArray(structures)) {
    structures.forEach((entry, index) => {
      if (!entry || entry.visible !== false) return;
      const selector = entry.structure_id ? { structure_id: String(entry.structure_id) }
        : (structures.length > 1 ? { structure_id: `structure-${index}` } : {});
      calls.push({ tool: 'viewer_visibility', args: { selector, visible: false } });
    });
  }

  return calls;
}

/**
 * Chain visibility is NOT mapped, and this is what the bounded attempt found.
 *
 * The recorded state hides individual chains (`chains[].visible`), and Mol*
 * groups a whole entity into one component: on `sv-biol-bio_collision_check-0122`
 * the four chains A, B, C, D live in ONE `Polymer` component, with the glycans
 * E, F in a `Carbohydrate` component. Component-granularity visibility -- the
 * only thing `StructureHierarchyManager.toggleVisibility` expresses -- therefore
 * cannot say "hide A and C but keep B and D", and a rule that shows a component
 * when any of its chains is wanted-visible silently does nothing. That was
 * measured, not assumed: the toggle does work (`isHidden` flips on the component),
 * and the rule still left every chain on screen. Reaching chain granularity means
 * rebuilding each representation's loci, which is deep Mol* state surgery and a
 * thing this adapter deliberately does not guess at.
 *
 * So molstar's replay follows the camera, and the task page says so.
 */
export function createViewerApi(frame, options = {}) {
  return createMcpViewerApi(frame, {
    ...options,
    family: 'molstar',
    label: 'Mol*',
    plan,
    coverage: {
      // Keyed so a checker can enforce the claim: every key here must be
      // compared against the live viewer or reported as skipped with a reason.
      dimensions: {
        camera: 'the camera pose (azimuth, elevation and zoom), applied as a rotation and a zoom from the loaded framing',
      },
      // Measurements change on 29 of these four tasks' 54 steps, and the
      // recorded state keeps only how many there were -- {distances, angles,
      // dihedrals} -- not which atoms. They cannot be restored from the state,
      // and re-issuing the recorded tool inputs is both forbidden by this
      // replay's contract and order-dependent (a slider jump would miss them).
      doesNotFollow: ['measurements (the recorded state keeps only how many there were)',
        'per-chain visibility (Mol* groups all four chains into one component)',
        'representation style', 'per-component visibility'],
    },
  });
}

export default createViewerApi;

