// Viewer-specific hooks behind one interface. Phase-0 implements molstar only.

function molstarAdapter() {
  const viewer = window.__sv_viewer;
  if (!viewer) throw new Error('molstar viewer not exposed on window.__sv_viewer');
  const plugin = viewer.plugin;
  const canvas = document.querySelector('#viewer canvas');
  let lastCamEmit = 0;

  return {
    name: 'molstar',
    getCanvas() { return canvas; },
    onCameraChange(cb) {
      // Sample camera on each draw, throttled to 100ms (spec §4.1).
      plugin.canvas3d?.didDraw.subscribe(() => {
        const now = performance.now();
        if (now - lastCamEmit < 100) return;
        lastCamEmit = now;
        cb(this.getCameraSnapshot());
      });
    },
    getCameraSnapshot() {
      const s = plugin.canvas3d?.camera?.getSnapshot?.() || {};
      return { pos: s.position, target: s.target, up: s.up, fov: s.fov };
    },
    getViewMode() { return 'render'; },   // molstar single 3D mode in Phase-0
    async screenshot() {
      const helper = plugin.helpers?.viewportScreenshot;
      if (helper) {
        const img = await helper.getImageDataUri();
        return img;
      }
      return canvas.toDataURL('image/png');   // fallback
    },
  };
}

function notImplemented(name) {
  return () => { throw new Error(`${name} adapter not implemented in phase-0`); };
}

export function makeAdapter(viewerName) {
  switch (viewerName) {
    case 'molstar': return molstarAdapter();
    case 'niivue': return notImplemented('niivue')();
    case 'cornerstone': return notImplemented('cornerstone')();
    default: throw new Error(`unknown viewer: ${viewerName}`);
  }
}
