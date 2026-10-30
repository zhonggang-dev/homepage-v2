# ScienceVision interactive viewer — third-party notices

The viewer pages under `viewer/` are vendored from the ScienceVision demo bundle.
Their only changes are root-relative path rewrites and the small `embed.css` /
`embed.js` additions made by `scripts/build_viewer_bundle.py`. The third-party
libraries themselves are copied unmodified.

| Component | Version | Licence | Upstream |
|---|---|---|---|
| Mol* | 4.5.0 | MIT | https://github.com/molstar/molstar |
| NiiVue | 0.45.0 | BSD-2-Clause | https://github.com/niivue/niivue |
| three.js | 0.160.0 | MIT | https://github.com/mrdoob/three.js |
| occt-import-js | 0.0.23 | LGPL-2.1 | https://github.com/kovacsv/occt-import-js |

The full licence texts are kept beside this file under `licenses/`.

Space Mono, used by the surrounding article, is under the SIL Open Font
License 1.1 and is served by the site shell rather than this bundle.

The task assets under `demo/` are the original ScienceVision sample assets.
They are shown for inspection only; the underlying source datasets retain
their own terms.
