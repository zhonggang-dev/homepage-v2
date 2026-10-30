(() => {
  "use strict";

  const root = document.getElementById("analysis-diagnostics");
  if (!root) return;

  const stageData = [
    { name: "Modeling", color: "#4f82a5", p10: 0, q1: 37.92, median: 73.4, mean: 62.73, q3: 93, p90: 100 },
    { name: "Execution", color: "#d68a45", p10: 0, q1: 35.05, median: 73.5, mean: 61.83, q3: 92, p90: 100 },
    { name: "Validation", color: "#579179", p10: 0, q1: 9, median: 40, mean: 42.91, q3: 70, p90: 95.6 },
  ];

  const effortData = [
    { name: "GPT-6-Astra", turns: 348.7, score: 59.08, harness: "Codex" },
    { name: "Fable 5.1", turns: 113.0, score: 58.17, harness: "Claude Code" },
    { name: "Fable 5", turns: 112.0, score: 57.96, harness: "Claude Code" },
    { name: "GPT-5.6-Sol", turns: 237.8, score: 55.07, harness: "Codex" },
    { name: "Opus 5", turns: 259.2, score: 52.52, harness: "Claude Code" },
    { name: "Kimi-K3", turns: 185.9, score: 49.24, harness: "Claude Code" },
    { name: "Qwen3.8-Max", turns: 234.4, score: 46.76, harness: "Claude Code" },
    { name: "DeepSeek-V4.1-Flash", turns: 372.6, score: 45.47, harness: "Claude Code" },
    { name: "GLM-5.3", turns: 290.8, score: 40.78, harness: "Claude Code" },
    { name: "HY3", turns: 197.4, score: 27.53, harness: "Claude Code" },
  ];

  const phases = [
    { key: "reconstruction", label: "Reconstruction", color: "#7c8da6" },
    { key: "implementation", label: "Implementation", color: "#4f82a5" },
    { key: "execution", label: "Native execution", color: "#d68a45" },
    { key: "diagnosis", label: "Diagnosis", color: "#c35f55" },
    { key: "evidence", label: "Evidence/replay", color: "#579179" },
  ];

  const timeData = [
    { name: "GPT-6-Astra", reconstruction: 5.81, implementation: 12.49, execution: 55.38, diagnosis: 9.81, evidence: 16.50 },
    { name: "Fable 5", reconstruction: 13.58, implementation: 23.53, execution: 52.15, diagnosis: 5.98, evidence: 4.77 },
    { name: "GPT-5.6-Sol", reconstruction: 6.43, implementation: 12.85, execution: 63.29, diagnosis: 6.00, evidence: 11.43 },
    { name: "HY3", reconstruction: 6.48, implementation: 16.44, execution: 56.74, diagnosis: 13.05, evidence: 7.29 },
  ];

  const tooltip = document.getElementById("pbx-analysis-tooltip");

  function create(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function positionTooltip(target, event) {
    const rootRect = root.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    tooltip.hidden = false;
    const x = event && event.clientX ? event.clientX - rootRect.left : targetRect.left - rootRect.left + targetRect.width / 2;
    const preferredY = (event && event.clientY ? event.clientY : targetRect.top) - rootRect.top - tooltip.offsetHeight - 12;
    tooltip.style.left = `${Math.max(12, Math.min(rootRect.width - tooltip.offsetWidth - 12, x - tooltip.offsetWidth / 2))}px`;
    tooltip.style.top = `${preferredY > 8 ? preferredY : targetRect.bottom - rootRect.top + 10}px`;
  }

  function makeInteractive(target, text) {
    target.addEventListener("pointerenter", event => {
      tooltip.textContent = text;
      positionTooltip(target, event);
    });
    target.addEventListener("pointermove", event => positionTooltip(target, event));
    target.addEventListener("pointerleave", () => { tooltip.hidden = true; });
    target.addEventListener("focus", () => {
      tooltip.textContent = text;
      positionTooltip(target);
    });
    target.addEventListener("blur", () => { tooltip.hidden = true; });
  }

  function addAxis(host, values, suffix = "") {
    const axis = create("div", "pbx-analysis-axis");
    values.forEach(value => {
      const tick = create("span", "", `${value}${suffix}`);
      tick.style.left = `${value}%`;
      axis.append(tick);
    });
    host.append(axis);
  }

  function renderStages() {
    const panel = document.getElementById("pbx-analysis-panel-stages");
    const intro = create("div", "pbx-analysis-view-head");
    intro.append(create("strong", "", "Validation is the bottleneck"), create("span", "", "Stage-score distributions across 930 outcomes"));
    panel.append(intro);
    const chart = create("div", "pbx-stage-chart");
    addAxis(chart, [0, 25, 50, 75, 100], "%");
    stageData.forEach(stage => {
      const row = create("div", "pbx-stage-row");
      row.tabIndex = 0;
      const label = create("strong", "pbx-stage-label", stage.name);
      const plot = create("div", "pbx-stage-track");
      const whisker = create("span", "pbx-stage-whisker");
      whisker.style.left = `${stage.p10}%`;
      whisker.style.width = `${stage.p90 - stage.p10}%`;
      whisker.style.background = stage.color;
      const iqr = create("span", "pbx-stage-iqr");
      iqr.style.left = `${stage.q1}%`;
      iqr.style.width = `${stage.q3 - stage.q1}%`;
      iqr.style.background = stage.color;
      const median = create("span", "pbx-stage-median");
      median.style.left = `${stage.median}%`;
      median.style.borderColor = stage.color;
      const mean = create("span", "pbx-stage-mean");
      mean.style.left = `${stage.mean}%`;
      mean.style.background = stage.color;
      plot.append(whisker, iqr, median, mean);
      const value = create("strong", "pbx-stage-value", `${stage.mean.toFixed(1)}%`);
      row.append(label, plot, value);
      makeInteractive(row, `${stage.name}: mean ${stage.mean.toFixed(2)}%, median ${stage.median.toFixed(1)}%, interquartile range ${stage.q1.toFixed(1)}-${stage.q3.toFixed(1)}%.`);
      chart.append(row);
    });
    const legend = create("div", "pbx-analysis-legend");
    legend.innerHTML = '<span><i class="pbx-legend-median"></i>Median</span><span><i class="pbx-legend-mean"></i>Mean</span><span><i class="pbx-legend-range"></i>25th-75th percentile</span>';
    panel.append(chart, legend, create("p", "pbx-analysis-panel-caption", "Stage-score distributions across 930 outcomes."));
  }

  function regression(points) {
    const meanX = points.reduce((sum, point) => sum + point.turns, 0) / points.length;
    const meanY = points.reduce((sum, point) => sum + point.score, 0) / points.length;
    const numerator = points.reduce((sum, point) => sum + (point.turns - meanX) * (point.score - meanY), 0);
    const denominator = points.reduce((sum, point) => sum + (point.turns - meanX) ** 2, 0);
    return { slope: numerator / denominator, intercept: meanY - numerator / denominator * meanX };
  }

  function renderEffort() {
    const panel = document.getElementById("pbx-analysis-panel-effort");
    const intro = create("div", "pbx-analysis-view-head");
    intro.append(create("strong", "", "Longer is not necessarily better"), create("span", "", "Partial score vs. trimmed average turns"));
    const legend = create("div", "pbx-analysis-legend pbx-analysis-legend-top");
    legend.innerHTML = '<span><i class="pbx-legend-codex"></i>Codex</span><span><i class="pbx-legend-claude"></i>Claude Code</span><strong>Pearson r = -0.14</strong>';
    const frame = create("div", "pbx-scatter-frame");
    const canvas = create("div", "pbx-scatter-canvas");
    const xMin = 80, xMax = 400, yMin = 25, yMax = 62;
    [30, 40, 50, 60].forEach(value => {
      const line = create("span", "pbx-scatter-grid pbx-scatter-grid-y");
      line.style.bottom = `${(value - yMin) / (yMax - yMin) * 100}%`;
      line.append(create("em", "", String(value)));
      canvas.append(line);
    });
    [100, 200, 300, 400].forEach(value => {
      const line = create("span", "pbx-scatter-grid pbx-scatter-grid-x");
      line.style.left = `${(value - xMin) / (xMax - xMin) * 100}%`;
      line.append(create("em", "", String(value)));
      canvas.append(line);
    });
    const fit = regression(effortData);
    const x1 = 100, x2 = 400;
    const y1 = fit.slope * x1 + fit.intercept, y2 = fit.slope * x2 + fit.intercept;
    const trend = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    trend.setAttribute("class", "pbx-scatter-trend");
    trend.setAttribute("viewBox", "0 0 100 100");
    trend.setAttribute("preserveAspectRatio", "none");
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", String((x1 - xMin) / (xMax - xMin) * 100));
    line.setAttribute("x2", String((x2 - xMin) / (xMax - xMin) * 100));
    line.setAttribute("y1", String(100 - (y1 - yMin) / (yMax - yMin) * 100));
    line.setAttribute("y2", String(100 - (y2 - yMin) / (yMax - yMin) * 100));
    trend.append(line);
    canvas.append(trend);
    effortData.forEach(model => {
      const point = create("button", `pbx-scatter-point ${model.harness === "Codex" ? "is-codex" : "is-claude"}`);
      point.type = "button";
      point.style.left = `${(model.turns - xMin) / (xMax - xMin) * 100}%`;
      point.style.bottom = `${(model.score - yMin) / (yMax - yMin) * 100}%`;
      point.setAttribute("aria-label", `${model.name}: ${model.turns.toFixed(1)} average turns and ${model.score.toFixed(2)}% Partial score`);
      const label = create("span", "", model.name);
      if (model.turns > 310) label.classList.add("is-left");
      if (model.name === "Fable 5") label.classList.add("is-below");
      point.append(label);
      makeInteractive(point, `${model.name} - ${model.turns.toFixed(1)} average turns; ${model.score.toFixed(2)}% Partial score; ${model.harness}.`);
      canvas.append(point);
    });
    const yTitle = create("span", "pbx-scatter-y-title", "Partial score (%)");
    const xTitle = create("span", "pbx-scatter-x-title", "Average turns");
    frame.append(yTitle, canvas, xTitle);
    panel.append(intro, legend, frame, create("p", "pbx-analysis-panel-caption", "Partial score versus trimmed average turns."));
  }

  function renderTime() {
    const panel = document.getElementById("pbx-analysis-panel-time");
    const intro = create("div", "pbx-analysis-view-head");
    intro.append(create("strong", "", "Execution dominates tool-mediated time"), create("span", "", "50 sampled trajectories per model"));
    const legend = create("div", "pbx-analysis-legend pbx-time-legend");
    const chart = create("div", "pbx-time-chart");
    let selectedPhase = null;
    const updateHighlight = () => {
      chart.querySelectorAll(".pbx-time-segment").forEach(segment => segment.classList.toggle("is-dimmed", selectedPhase && segment.dataset.phase !== selectedPhase));
      legend.querySelectorAll("button").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.phase === selectedPhase)));
    };
    phases.forEach(phase => {
      const button = create("button", "", phase.label);
      button.type = "button";
      button.dataset.phase = phase.key;
      button.setAttribute("aria-pressed", "false");
      const swatch = create("i");
      swatch.style.background = phase.color;
      button.prepend(swatch);
      button.addEventListener("click", () => {
        selectedPhase = selectedPhase === phase.key ? null : phase.key;
        updateHighlight();
      });
      legend.append(button);
    });
    const axis = create("div", "pbx-time-axis");
    [0, 25, 50, 75, 100].forEach(value => axis.append(create("span", "", `${value}%`)));
    chart.append(axis);
    timeData.forEach(model => {
      const row = create("div", "pbx-time-row");
      row.append(create("strong", "pbx-time-label", model.name));
      const track = create("div", "pbx-time-track");
      phases.forEach(phase => {
        const segment = create("button", "pbx-time-segment");
        segment.type = "button";
        segment.dataset.phase = phase.key;
        segment.style.width = `${model[phase.key]}%`;
        segment.style.background = phase.color;
        segment.setAttribute("aria-label", `${model.name}, ${phase.label}: ${model[phase.key].toFixed(2)}% of tool-mediated time`);
        makeInteractive(segment, `${model.name} - ${phase.label}: ${model[phase.key].toFixed(2)}% of tool-mediated elapsed time.`);
        track.append(segment);
      });
      row.append(track);
      chart.append(row);
    });
    panel.append(intro, legend, chart, create("p", "pbx-analysis-panel-caption", "Mean tool-mediated time by workflow phase."));
  }

  renderStages();
  renderEffort();
  renderTime();
})();
