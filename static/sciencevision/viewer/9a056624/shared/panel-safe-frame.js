/**
 * Keep a fitted model clear of the viewer's floating panels.
 *
 * Both architecture viewers frame the model into the whole canvas and then draw
 * their tool and evidence panels on top of it. That is fine on a full-window
 * canvas, where the model occupies the middle and the panels sit over empty
 * background. It stops being fine when the canvas is narrow: inside the review
 * page's side-by-side workspace the canvas is ~614px wide on a 1280x800 laptop,
 * a 198px panel is a third of that, and a measured 16-18% of the model's lit
 * pixels end up behind an opaque panel -- including, on the spall-cavity task,
 * the whole left pier the reviewer is asked to inspect.
 *
 * So after a fit, nudge the camera just enough that the model's projected
 * bounding box lands inside the region no panel covers, pulling back only when
 * panning alone cannot clear it. When the model already clears the panels --
 * which is the common case on a wide canvas -- nothing changes at all.
 *
 * The correction is deliberately post-hoc: each page keeps its own framing
 * solver, and this module only ever pans and pulls back, so an authored camera
 * direction is preserved exactly.
 */

const DEFAULT_PADDING = 10;
const MIN_SAFE_EDGE = 32;
const EDGES = ['left', 'right', 'top', 'bottom'];

/**
 * Screen-space axis-aligned box of `bounds` under `camera`, in canvas pixels
 * with y growing downward.
 */
function projectBounds(THREE, camera, bounds, width, height) {
  const point = new THREE.Vector3();
  let x0 = Infinity;
  let y0 = Infinity;
  let x1 = -Infinity;
  let y1 = -Infinity;
  for (let corner = 0; corner < 8; corner += 1) {
    point.set(
      corner & 1 ? bounds.max.x : bounds.min.x,
      corner & 2 ? bounds.max.y : bounds.min.y,
      corner & 4 ? bounds.max.z : bounds.min.z,
    );
    point.project(camera);
    const x = (point.x * 0.5 + 0.5) * width;
    const y = (0.5 - point.y * 0.5) * height;
    x0 = Math.min(x0, x);
    y0 = Math.min(y0, y);
    x1 = Math.max(x1, x);
    y1 = Math.max(y1, y);
  }
  return { x0, y0, x1, y1 };
}

/**
 * Each visible panel measured as the span it would cost on each of the four
 * canvas edges, in canvas pixels. A panel that overlaps the canvas from outside
 * -- the tool panel starts above it, under the page header -- costs only the part
 * that lands on the canvas, which is what these four numbers hold.
 */
function panelSpans(canvas, panels) {
  const base = canvas.getBoundingClientRect();
  const spans = [];
  for (const panel of panels) {
    if (!panel || panel.hidden) continue;
    const style = getComputedStyle(panel);
    if (style.display === 'none' || style.visibility === 'hidden') continue;
    const box = panel.getBoundingClientRect();
    if (!(box.width > 0 && box.height > 0)) continue;
    spans.push({
      left: box.right - base.left,
      right: base.right - box.left,
      top: box.bottom - base.top,
      bottom: base.bottom - box.top,
    });
  }
  return { base, spans };
}

/** The canvas rect, inset by padding, with each panel charged to one edge. */
function safeRectFor(base, spans, assignment, padding) {
  const rect = { x0: 0, y0: 0, x1: base.width, y1: base.height };
  for (let index = 0; index < spans.length; index += 1) {
    const span = spans[index];
    switch (assignment[index]) {
      case 'left': rect.x0 = Math.max(rect.x0, span.left); break;
      case 'right': rect.x1 = Math.min(rect.x1, base.width - span.right); break;
      case 'top': rect.y0 = Math.max(rect.y0, span.top); break;
      default: rect.y1 = Math.min(rect.y1, base.height - span.bottom); break;
    }
  }
  rect.x0 += padding;
  rect.y0 += padding;
  rect.x1 -= padding;
  rect.y1 -= padding;
  return rect;
}

/**
 * Pick which edge each panel is charged to, by which choice leaves the model
 * largest.
 *
 * A panel has to be carved off one edge, not every edge it touches, or a narrow
 * canvas would be left with almost nothing. Charging it to the edge it sits
 * closest to sounds right and is not: the inspection page's tool panel is 250px
 * wide and 251px tall against the canvas, so a 7px difference decided whether the
 * correction gave up a quarter of the width or a quarter of the height -- and on a
 * wide bridge, giving up the height forced a 1.5x pull-back and shoved the model
 * into the lower half of the canvas.
 *
 * So score each assignment by how large the model can be inside the resulting
 * rect -- min(safeW/boxW, safeH/boxH), scale-invariant, so the box's
 * pre-correction size is a fine basis -- and take the best. With a handful of
 * panels the enumeration is a few dozen cases.
 */
function bestSafeRect(base, spans, box, padding) {
  const boxWidth = Math.max(box.x1 - box.x0, 1e-6);
  const boxHeight = Math.max(box.y1 - box.y0, 1e-6);
  let best = null;
  let bestScore = -Infinity;
  const total = EDGES.length ** spans.length;
  for (let code = 0; code < total; code += 1) {
    const assignment = [];
    let rest = code;
    for (let index = 0; index < spans.length; index += 1) {
      assignment.push(EDGES[rest % EDGES.length]);
      rest = Math.floor(rest / EDGES.length);
    }
    const rect = safeRectFor(base, spans, assignment, padding);
    const safeWidth = rect.x1 - rect.x0;
    const safeHeight = rect.y1 - rect.y0;
    if (safeWidth < MIN_SAFE_EDGE || safeHeight < MIN_SAFE_EDGE) continue;
    // Never zoom in to fill a generous rect: past 1 the extra room is not a gain,
    // so cap the score there and let the larger area break the tie.
    const fit = Math.min(1, Math.min(safeWidth / boxWidth, safeHeight / boxHeight));
    const score = fit * 1e6 + safeWidth * safeHeight;
    if (score > bestScore) {
      bestScore = score;
      best = rect;
    }
  }
  // A pathological layout can leave no usable rect at all; frame into the whole
  // canvas rather than into negative space.
  return best || { x0: 0, y0: 0, x1: base.width, y1: base.height, degenerate: true };
}

/** How far, in pixels, a box must move along one axis to sit inside a span. */
function shiftFor(boxLow, boxHigh, safeLow, safeHigh) {
  const overLow = safeLow - boxLow;
  const overHigh = boxHigh - safeHigh;
  if (overLow > 0 && overHigh > 0) return 0; // too big to pan clear; zoom handles it
  if (overLow > 0) return overLow;
  if (overHigh > 0) return -overHigh;
  return 0;
}

function zoomOut(camera, target, factor) {
  if (camera.isOrthographicCamera) {
    camera.left *= factor;
    camera.right *= factor;
    camera.top *= factor;
    camera.bottom *= factor;
    camera.updateProjectionMatrix();
    return;
  }
  const offset = camera.position.clone().sub(target);
  const distance = offset.length();
  if (!distance) return;
  const pulled = distance * factor;
  camera.position.copy(target).add(offset.multiplyScalar(factor));
  camera.near = Math.max(camera.near, pulled / 4000);
  camera.far = Math.max(camera.far, pulled * 20);
  camera.updateProjectionMatrix();
}

/** World units per canvas pixel, measured on the plane through `target`. */
function worldPerPixel(camera, target, height) {
  if (camera.isOrthographicCamera) {
    return (camera.top - camera.bottom) / Math.max(height, 1);
  }
  const distance = camera.position.distanceTo(target);
  const halfFov = (camera.fov * Math.PI) / 360;
  return (2 * distance * Math.tan(halfFov)) / Math.max(height, 1);
}

/**
 * Pan (and if necessary pull back) so `bounds` projects inside the unoccluded
 * part of the canvas. Mutates `camera` and `target`; returns what it did, so a
 * caller can log or assert on it.
 */
export function frameClearOfPanels({
  THREE,
  canvas,
  camera,
  target,
  bounds,
  panels,
  padding = DEFAULT_PADDING,
  maxZoomOut = 2.5,
}) {
  const unchanged = { moved: false, panPixels: [0, 0], zoom: 1 };
  const { base, spans } = panelSpans(canvas, panels);
  const width = base.width;
  const height = base.height;
  if (!(width > 0 && height > 0) || !bounds || bounds.isEmpty()) return unchanged;
  if (!spans.length) return unchanged;

  // Callers set the camera's position and then hand orientation to OrbitControls,
  // which runs after this correction. Aim the camera here, or the projection below
  // is measured through whatever orientation the camera happened to be left in.
  camera.lookAt(target);
  camera.updateMatrixWorld();
  let box = projectBounds(THREE, camera, bounds, width, height);
  if (!Number.isFinite(box.x0) || !Number.isFinite(box.y1)) return unchanged;

  const safe = bestSafeRect(base, spans, box, padding);
  if (safe.degenerate) return unchanged;
  const safeWidth = safe.x1 - safe.x0;
  const safeHeight = safe.y1 - safe.y0;

  let zoom = 1;
  const needed = Math.max(
    (box.x1 - box.x0) / safeWidth,
    (box.y1 - box.y0) / safeHeight,
  );
  if (needed > 1) {
    zoom = Math.min(needed, maxZoomOut);
    zoomOut(camera, target, zoom);
    camera.updateMatrixWorld();
    box = projectBounds(THREE, camera, bounds, width, height);
  }

  const dx = shiftFor(box.x0, box.x1, safe.x0, safe.x1);
  const dy = shiftFor(box.y0, box.y1, safe.y0, safe.y1);
  if (!dx && !dy && zoom === 1) return unchanged;

  if (dx || dy) {
    const scale = worldPerPixel(camera, target, height);
    const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
    const up = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 1);
    // Moving the camera along +right slides the image left, and along +up slides
    // it up, so both corrections are applied with the opposite sign of the pixel
    // shift the image needs.
    const pan = right
      .multiplyScalar(-dx * scale)
      .add(up.multiplyScalar(dy * scale));
    camera.position.add(pan);
    target.add(pan);
    camera.lookAt(target);
    camera.updateMatrixWorld();
  }
  return { moved: true, panPixels: [dx, dy], zoom };
}
