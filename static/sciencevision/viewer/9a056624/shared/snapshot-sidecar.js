// "Save what I am looking at" button, with a JSON sidecar next to the PNG.
//
// The PNG itself comes from window.ScienceVisionViewerScreenshot, which each
// viewer page already registers a provider for -- this module deliberately adds
// no second capture path, because two capture paths means nobody can later say
// which one produced a given expert screenshot.
//
// What this module owns is the part that makes a screenshot citable: filenames,
// the download, and a sidecar recording which task, which asset, which view mode
// and -- crucially -- what the scale bar read at that moment. A PNG of a brain
// slice with no scale and no task id is not evidence.
//
// Self-installing: a page opts in with a single <script> tag. A page that can
// supply extra context defines window.__svSnapshotMeta as a function returning an
// object; anything it returns is merged into the sidecar, last-write-wins.
(function installScienceVisionSnapshotSidecar() {
  'use strict';

  if (document.getElementById('sv-snapshot-btn')) return;

  const BUTTON_ID = 'sv-snapshot-btn';
  const TOAST_ID = 'sv-snapshot-toast';
  const UNSAFE_FILENAME_CHARS = /[^A-Za-z0-9._-]+/g;
  // Chrome and Safari drop the second of two downloads fired in the same tick.
  const DOWNLOAD_GAP_MS = 250;

  let toastTimer = null;

  function nowStamp() {
    // 2026-08-14T00-12-33Z -- filesystem-safe and chronologically sortable.
    return new Date().toISOString().replace(/\.\d{3}Z$/, 'Z').replace(/:/g, '-');
  }

  function sanitize(value, fallback) {
    const text = String(value ?? '')
      .replace(UNSAFE_FILENAME_CHARS, '_')
      .replace(/^_+|_+$/g, '');
    return text || fallback;
  }

  function basename(path) {
    return String(path ?? '').split('/').filter(Boolean).pop() || '';
  }

  function stripExtension(fileName) {
    // .nii.gz is a double extension; one greedy strip would leave ".nii".
    return String(fileName).replace(/\.nii\.gz$/i, '').replace(/\.[^.]+$/, '');
  }

  function viewerName() {
    return stripExtension(basename(location.pathname)) || 'viewer';
  }

  function downloadBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    // Revoke late: revoking in the same tick cancels the download in Safari.
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  }

  function ensureToast() {
    const existing = document.getElementById(TOAST_ID);
    if (existing) return existing;
    const el = document.createElement('div');
    el.id = TOAST_ID;
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    Object.assign(el.style, {
      position: 'fixed',
      right: '12px',
      bottom: '52px',
      zIndex: '30',
      maxWidth: '340px',
      padding: '6px 10px',
      borderRadius: '4px',
      border: '1px solid #30363d',
      background: 'rgba(13,17,23,0.94)',
      font: '11px ui-monospace, SFMono-Regular, Menlo, monospace',
      whiteSpace: 'pre-wrap',
      display: 'none',
    });
    document.body.appendChild(el);
    return el;
  }

  function toast(message, tone = 'ok') {
    const el = ensureToast();
    el.textContent = message;
    el.style.color = tone === 'error' ? '#f85149' : '#3fb950';
    el.style.display = 'block';
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.style.display = 'none'; }, tone === 'error' ? 9000 : 3500);
  }

  function pageMeta() {
    try {
      const extra = typeof window.__svSnapshotMeta === 'function' ? window.__svSnapshotMeta() : null;
      return extra && typeof extra === 'object' ? extra : {};
    } catch (err) {
      // A broken metadata hook must not cost the reviewer their screenshot.
      console.warn('[snapshot] __svSnapshotMeta threw; sidecar will omit page metadata', err);
      return { page_meta_error: String(err?.message || err) };
    }
  }

  function buildRecord() {
    const params = new URLSearchParams(location.search);
    const scale = window.ScienceVisionScaleBar?.current?.() ?? null;
    return {
      schema: 'sv.snapshot/1',
      captured_at: new Date().toISOString(),
      viewer: viewerName(),
      task_id: params.get('task') || null,
      file: params.get('file') || null,
      files: params.get('files') || null,
      overlay: params.get('overlay') || null,
      format: params.get('type') || null,
      // null means "no bar was on screen", which is itself worth recording: it
      // tells a later reader not to measure anything off this PNG.
      scale_bar: scale,
      page_url: location.href,
      ...pageMeta(),
    };
  }

  function buildStem(record) {
    const identity = record.task_id
      || stripExtension(basename(record.file))
      || record.viewer;
    return `${sanitize(identity, 'snapshot')}-${sanitize(record.view_mode || 'view', 'view')}-${nowStamp()}`;
  }

  async function capture(button) {
    const api = window.ScienceVisionViewerScreenshot;
    const idleLabel = button.textContent;
    button.disabled = true;
    button.textContent = 'saving…';
    try {
      if (!api?.captureScreenshot) throw new Error('screenshot-api.js is not loaded');
      const png = await api.captureScreenshot();
      const record = buildRecord();
      const stem = buildStem(record);

      downloadBlob(png, `${stem}.png`);
      await new Promise(resolve => setTimeout(resolve, DOWNLOAD_GAP_MS));
      downloadBlob(
        new Blob([`${JSON.stringify({ ...record, png: `${stem}.png` }, null, 2)}\n`], { type: 'application/json' }),
        `${stem}.json`,
      );

      const scaleNote = record.scale_bar
        ? `scale ${record.scale_bar.label}`
        : 'no scale bar in this view';
      toast(`saved ${stem}.png + .json\n${scaleNote}`);
    } catch (err) {
      console.error('[snapshot]', err);
      toast(`snapshot failed: ${err?.message || err}`, 'error');
    } finally {
      button.disabled = false;
      button.textContent = idleLabel;
    }
  }

  function build() {
    const button = document.createElement('button');
    button.id = BUTTON_ID;
    button.type = 'button';
    button.textContent = 'Snapshot';
    button.title = 'Save a PNG of this view plus a JSON sidecar recording task, asset and scale';
    button.disabled = true;
    Object.assign(button.style, {
      position: 'fixed',
      right: '12px',
      bottom: '12px',
      zIndex: '30',
      background: '#161b22',
      color: '#c9d1d9',
      border: '1px solid #30363d',
      padding: '5px 11px',
      borderRadius: '3px',
      font: '11px ui-monospace, SFMono-Regular, Menlo, monospace',
      cursor: 'pointer',
    });
    button.addEventListener('click', () => { void capture(button); });
    document.body.appendChild(button);

    // Stay disabled until the viewer has something to capture, so a click during
    // load cannot produce a blank PNG.
    const api = window.ScienceVisionViewerScreenshot;
    Promise.resolve(api?.whenReady?.())
      .then(() => { button.disabled = false; })
      .catch(err => {
        button.title = `Screenshot unavailable: ${err?.message || err}`;
        button.textContent = 'Snapshot n/a';
      });
    return button;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build, { once: true });
  } else {
    build();
  }
}());
