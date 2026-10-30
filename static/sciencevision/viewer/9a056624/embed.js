/* Injected by scripts/build_viewer_bundle.py. Adds the embedded chrome and
   reports when the asset has actually loaded, so the article's loading state
   can disappear at the right moment rather than on the iframe's load event. */
(function () {
  "use strict";
  var embedded = window.self !== window.top
    || new URLSearchParams(window.location.search).get("embed") === "blog";
  if (!embedded) return;
  document.body.classList.add("sv-embedded");

  window.__svPostReady = function () {
    if (window.parent !== window) {
      window.parent.postMessage({ source: "sv-viewer", type: "ready" },
        window.location.origin);
    }
  };

  function fail(message) {
    if (window.parent !== window) {
      window.parent.postMessage({ source: "sv-viewer", type: "error",
        message: String(message || "") }, window.location.origin);
    }
  }

  window.addEventListener("error", function (event) {
    fail(event.message || event.error);
  });
  window.addEventListener("unhandledrejection", function (event) {
    fail(event.reason);
  });
})();
