/**
 * Shared plumbing for the per-viewer replay adapters.
 *
 * Every adapter talks to a viewer that lives in a sibling same-origin document
 * (the task page embeds it in `<iframe id="sv-viewer">`), so "get the viewer's
 * API" always means "reach through `frame.contentWindow` for whatever that
 * page published, and wait until it is there". Nothing in this file knows a
 * single viewer family.
 */

export const POLL_INTERVAL_MS = 50;

/** The sibling document's window, or null while it is cross-origin/absent. */
export function frameWindow(frame) {
  try {
    return frame && frame.contentWindow ? frame.contentWindow : null;
  } catch (error) {
    return null;
  }
}

/** Query parameters of the embedded viewer page. */
export function frameParams(frame) {
  const win = frameWindow(frame);
  try {
    return new URLSearchParams(win.location.search);
  } catch (error) {
    return new URLSearchParams('');
  }
}

/** Poll `read()` until it returns a truthy value, or give up after `timeoutMs`. */
export function waitFor(read, { timeoutMs = 20000, intervalMs = POLL_INTERVAL_MS } = {}) {
  return new Promise((resolve, reject) => {
    const deadline = Date.now() + timeoutMs;
    const tick = () => {
      let value = null;
      try {
        value = read();
      } catch (error) {
        // The document may be mid-navigation; keep polling.
        value = null;
      }
      if (value) {
        resolve(value);
        return;
      }
      if (Date.now() >= deadline) {
        reject(new Error(`viewer interface did not appear within ${timeoutMs} ms`));
        return;
      }
      setTimeout(tick, intervalMs);
    };
    tick();
  });
}

/**
 * Show, in the page the reader is actually looking at, that the viewer did not
 * follow. A replay that quietly does nothing looks exactly like a replay that
 * works, right up until someone watches it, so this must be visible and not
 * only a console line.
 */
export function warnOnPage(frame, message) {
  let doc = null;
  try {
    doc = frame && frame.ownerDocument ? frame.ownerDocument : null;
  } catch (error) {
    doc = null;
  }
  if (!doc || typeof doc.createElement !== 'function') return;
  const existing = doc.getElementById('sv-replay-notice');
  if (existing) {
    existing.textContent = message;
    return;
  }
  const notice = doc.createElement('div');
  notice.id = 'sv-replay-notice';
  notice.setAttribute('role', 'status');
  notice.style.cssText = [
    'margin:8px 0', 'padding:10px 12px', 'border-radius:6px',
    'border:1px solid #9e6a03', 'background:#3d2300', 'color:#ffd166',
    'font:13.5px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
  ].join(';');
  notice.textContent = message;
  if (frame.parentNode) frame.parentNode.insertBefore(notice, frame);
  else doc.body.appendChild(notice);
}

/** Deep-copy a state so an adapter cannot hand the driver a shared mutable object. */
export function plain(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}

/** Finite number or undefined -- guards against nulls and JSON string drift. */
export function num(value) {
  const parsed = typeof value === 'string' ? Number(value) : value;
  return Number.isFinite(parsed) ? Number(parsed) : undefined;
}

/** Array of exactly three finite numbers, or undefined. */
export function vec3(value) {
  if (!Array.isArray(value) || value.length !== 3) return undefined;
  const out = value.map(num);
  return out.every((item) => item !== undefined) ? out : undefined;
}
