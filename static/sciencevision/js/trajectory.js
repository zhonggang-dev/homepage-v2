/* Trajectory cinema. Reads window.SV_TRAJECTORIES (see web/data/trajectories.js)
   and steps through the keyframes selected from the recorded inspections. */

(function () {
  "use strict";

  var data = window.SV_TRAJECTORIES;
  var root = document.querySelector("[data-cinema]");
  if (!data || !root) return;

  var HOLD_MS = data.holdMs || 420;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var el = {
    frame: root.querySelector("[data-frame]"),
    domain: root.querySelector("[data-domain]"),
    caption: root.querySelector("[data-caption]"),
    fn: root.querySelector("[data-fn]"),
    param: root.querySelector("[data-param]"),
    mix: root.querySelector("[data-mix]"),
    task: root.querySelector("[data-task]"),
    strip: root.querySelector("[data-strip]"),
    tabs: root.querySelector("[data-tabs]"),
    counter: root.querySelector("[data-counter]"),
    toggle: root.querySelector("[data-act='toggle']"),
    prev: root.querySelector("[data-act='prev']"),
    next: root.querySelector("[data-act='next']")
  };

  var state = { seg: 0, step: 0, playing: false, timer: 0, visible: true };

  var CLASS_ORDER = ["measure", "select", "section", "view"];
  var CLASS_WORD = {
    measure: "measurement",
    select: "selection",
    section: "section",
    view: "camera"
  };

  function segment() { return data.segments[state.seg]; }
  function steps() { return segment().steps; }

  function mixSummary(plan) {
    var counts = {};
    plan.forEach(function (op) {
      counts[op.cls] = (counts[op.cls] || 0) + 1;
    });
    return CLASS_ORDER.filter(function (key) {
      return counts[key];
    }).map(function (key) {
      return counts[key] + " " + CLASS_WORD[key];
    }).join("   ·   ");
  }

  function render() {
    var seg = segment();
    var list = seg.steps;
    var item = list[state.step];

    el.frame.src = item.img;
    el.frame.alt = seg.domain + " inspection, operation " + item.seq;
    el.domain.textContent = seg.domain;
    el.caption.textContent = seg.caption;
    el.fn.textContent = item.fn;
    el.param.textContent = item.readout;
    el.mix.textContent = mixSummary(seg.plan);
    el.task.textContent = seg.task;
    el.counter.textContent = "step " + item.position + " of " + seg.total + " recorded";

    var ticks = el.strip.children;
    for (var i = 0; i < ticks.length; i++) {
      ticks[i].setAttribute("aria-current", i === state.step ? "true" : "false");
    }

    var tabs = el.tabs.children;
    for (var j = 0; j < tabs.length; j++) {
      tabs[j].setAttribute("aria-pressed", j === state.seg ? "true" : "false");
    }

    preload(1);
  }

  function preload(offset) {
    var next = state.step + offset;
    var list = steps();
    if (next >= list.length) return;
    var img = new Image();
    img.src = list[next].img;
  }

  function buildTicks() {
    el.strip.textContent = "";
    segment().plan.forEach(function (op, index) {
      var li = document.createElement("li");
      li.style.flex = "1 1 0";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sv-cinema__tick cls-" + op.cls;
      btn.style.width = "100%";
      btn.title = "operation " + op.seq + " - " + op.cls;
      btn.setAttribute("aria-label", "Jump to operation " + op.seq);
      btn.addEventListener("click", function () { jump(index); });
      li.appendChild(btn);
      el.strip.appendChild(li);
    });
  }

  function buildTabs() {
    data.segments.forEach(function (seg, index) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sv-cinema__btn";
      btn.textContent = seg.domain;
      btn.addEventListener("click", function () { openSegment(index); });
      el.tabs.appendChild(btn);
    });
  }

  function jump(index) {
    var list = steps();
    state.step = Math.max(0, Math.min(index, list.length - 1));
    render();
    restart();
  }

  function openSegment(index) {
    state.seg = index;
    state.step = 0;
    buildTicks();
    render();
    restart();
  }

  function advance() {
    state.step += 1;
    if (state.step >= steps().length) {
      state.step = 0;
      state.seg = (state.seg + 1) % data.segments.length;
      buildTicks();
    }
    render();
  }

  function stop() {
    window.clearInterval(state.timer);
    state.timer = 0;
  }

  function restart() {
    stop();
    if (!state.playing || !state.visible) return;
    state.timer = window.setInterval(advance, HOLD_MS);
  }

  function play() {
    state.playing = true;
    el.toggle.textContent = "Pause";
    el.toggle.setAttribute("aria-pressed", "true");
    restart();
  }

  function pause() {
    state.playing = false;
    el.toggle.textContent = "Play";
    el.toggle.setAttribute("aria-pressed", "false");
    stop();
  }

  el.toggle.addEventListener("click", function () {
    state.playing ? pause() : play();
  });

  el.prev.addEventListener("click", function () {
    if (state.step === 0 && state.seg > 0) { openSegment(state.seg - 1); return; }
    jump(state.step - 1);
  });

  el.next.addEventListener("click", function () {
    if (state.step === steps().length - 1) {
      openSegment((state.seg + 1) % data.segments.length);
      return;
    }
    jump(state.step + 1);
  });

  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", restart);

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      state.visible = entries[0].isIntersecting;
      restart();
    }, { threshold: 0.15 }).observe(root);
  }

  buildTabs();
  buildTicks();
  render();

  if (!reduceMotion) {
    play();
  } else {
    pause();
  }
})();
