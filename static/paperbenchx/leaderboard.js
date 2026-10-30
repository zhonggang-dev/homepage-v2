(() => {
  "use strict";

  const root = document.getElementById("pbx-leaderboard");
  const data = window.PBX_BLOG_LEADERBOARD;
  if (!root) return;

  const status = document.getElementById("pbx-ranking-status");
  if (!data || data.schemaVersion !== 1 || !Array.isArray(data.modules)) {
    status.textContent = "The leaderboard snapshot could not be loaded. Please reload the page.";
    return;
  }

  const chart = document.getElementById("pbx-ranking-chart");
  const rankingReadout = document.getElementById("pbx-ranking-readout");
  const processChart = document.getElementById("pbx-process-chart");
  const processReadout = document.getElementById("pbx-process-readout");
  const difficultyChart = document.getElementById("pbx-difficulty-chart");
  const difficultyReadout = document.getElementById("pbx-difficulty-readout");
  const overall = data.modules.find(module => module.id === "all");
  const fullMetric = "all:full";
  const partialMetric = "all:partial";

  const processData = {
    "GPT-6-Astra (Codex)": { modeling: 72.72, execution: 69.35, validation: 52.76, turns: 348.7 },
    "Fable 5.1": { modeling: 71.00, execution: 69.92, validation: 51.06, turns: 113.0 },
    "Fable 5": { modeling: 72.13, execution: 68.99, validation: 50.39, turns: 112.0 },
    "GPT-5.6-Sol (Codex)": { modeling: 69.85, execution: 71.23, validation: 45.29, turns: 237.8 },
    "Opus 5": { modeling: 66.99, execution: 67.16, validation: 47.76, turns: 259.2 },
    "Kimi-K3": { modeling: 62.40, execution: 60.70, validation: 42.32, turns: 185.9 },
    "Qwen3.8-Max": { modeling: 64.41, execution: 61.02, validation: 41.65, turns: 234.4 },
    "DeepSeek-V4.1-Flash": { modeling: 59.87, execution: 57.51, validation: 41.13, turns: 372.6 },
    "GLM-5.3": { modeling: 51.11, execution: 51.85, validation: 37.06, turns: 290.8 },
    "HY3": { modeling: 36.83, execution: 40.59, validation: 19.67, turns: 197.4 },
  };

  const modelStyle = {
    "GPT-6-Astra (Codex)": { label: "GPT-6-Astra|(Codex)", logo: "/static/images/roadmapbench/logos/openai.png", color: "#343b45" },
    "Fable 5.1": { label: "Fable 5.1", logo: "/static/images/roadmapbench/logos/claude.png", color: "#ce694f" },
    "Fable 5": { label: "Fable 5", logo: "/static/images/roadmapbench/logos/claude.png", color: "#d98a6a" },
    "GPT-5.6-Sol (Codex)": { label: "GPT-5.6-Sol|(Codex)", logo: "/static/images/roadmapbench/logos/openai.png", color: "#5b636e" },
    "Opus 5": { label: "Opus 5", logo: "/static/images/roadmapbench/logos/claude.png", color: "#e3a087" },
    "Kimi-K3": { label: "Kimi-K3", logo: "/static/images/roadmapbench/logos/kimi.png", color: "#4c607c" },
    "Qwen3.8-Max": { label: "Qwen3.8|-Max", logo: "/static/images/roadmapbench/logos/qwen.png", color: "#9365cf" },
    "DeepSeek-V4.1-Flash": { label: "DeepSeek|-V4.1-Flash", logo: "/static/images/roadmapbench/logos/deepseek.png", color: "#80a0ed" },
    "GLM-5.3": { label: "GLM-5.3", logo: "/static/images/swebench/logos/glm.png", color: "#447bd3" },
    "HY3": { label: "HY3", initials: "HY", color: "#6ba88c" },
  };

  const areaLabels = {
    "Antennas & arrays": "RF antennas and arrays",
    "Metasurfaces & scattering": "RF metasurfaces and scattering",
    "Filters & frequency-selective surfaces": "RF filters and FSS",
    "Integrated photonic devices": "Integrated photonic devices",
    "Photonic crystals & topological photonics": "Photonic crystals and topology",
    "Optical metasurfaces & plasmonics": "Metasurfaces and plasmonics",
    "Optical computing & signal processing": "Optical computing",
    "Optical resonators & tunable devices": "Resonators and tunable devices",
    "Computational chemistry": "Computational chemistry",
    "Computational materials science": "Computational materials science",
    "Computational biology & bioinformatics": "Computational biology",
    "Robotics & embodied AI": "Robotics and embodied AI",
  };

  function create(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function modelLogo(style, className) {
    // Keep a text marker when no logo asset is bundled.
    if (!style.logo) {
      const marker = create("span", `${className} pbx-logo-fallback`, style.initials);
      marker.setAttribute("aria-hidden", "true");
      return marker;
    }
    const logo = create("img", className);
    logo.src = style.logo;
    logo.alt = "";
    logo.loading = "lazy";
    logo.decoding = "async";
    return logo;
  }

  function metric(model, key) {
    return Number(model.metrics[key].score);
  }

  function formatScore(value) {
    return `${value.toFixed(2)}%`;
  }

  function tint(hex, amount) {
    const value = hex.replace("#", "");
    const channels = [0, 2, 4].map(offset => parseInt(value.slice(offset, offset + 2), 16));
    return `rgb(${channels.map(channel => Math.round(channel + (255 - channel) * amount)).join(", ")})`;
  }

  function renderRanking() {
    const models = overall.models
      .filter(model => modelStyle[model.name])
      .sort((left, right) => metric(right, fullMetric) - metric(left, fullMetric)
        || metric(right, partialMetric) - metric(left, partialMetric));
    const fragment = document.createDocumentFragment();
    let pinned = null;

    [60, 40, 20, 0].forEach(value => {
      const gridline = create("span", "pbx-chart-gridline");
      gridline.style.setProperty("--tick", value);
      gridline.setAttribute("aria-hidden", "true");
      fragment.append(gridline);
    });

    const columns = create("div", "pbx-chart-columns");
    models.forEach((model, index) => {
      const full = metric(model, fullMetric);
      const partial = metric(model, partialMetric);
      const style = modelStyle[model.name];
      const column = create("button", "pbx-model-column");
      column.type = "button";
      column.style.setProperty("--full", full);
      column.style.setProperty("--full-height", `${full / 65 * 100}%`);
      column.style.setProperty("--model-color", style.color);
      column.setAttribute("aria-label", `${index + 1}. ${model.name}: Full rate ${formatScore(full)}, Partial score ${formatScore(partial)}`);

      const partialBox = create("span", "pbx-model-partial", `${partial.toFixed(1)}%`);
      const logo = modelLogo(style, "pbx-model-logo");
      const fullLabel = create("span", "pbx-model-full", `${full.toFixed(1)}%`);
      const bar = create("span", "pbx-model-bar");
      const label = create("span", "pbx-model-name");
      style.label.split("|").forEach((line, lineIndex) => {
        if (lineIndex) label.append(document.createElement("br"));
        label.append(document.createTextNode(line));
      });
      column.append(partialBox, logo, fullLabel, bar, label);

      const description = `${model.name} ranks ${index + 1}: Full rate ${formatScore(full)}; Partial score ${formatScore(partial)}.`;
      const show = () => {
        columns.querySelectorAll(".is-active").forEach(item => item.classList.remove("is-active"));
        column.classList.add("is-active");
        rankingReadout.textContent = description;
      };
      const reset = () => {
        if (pinned) return;
        column.classList.remove("is-active");
        rankingReadout.textContent = "Hover, focus, or select a model to compare its Full and Partial scores.";
      };
      column.addEventListener("pointerenter", () => { if (!pinned) show(); });
      column.addEventListener("pointerleave", reset);
      column.addEventListener("focus", show);
      column.addEventListener("blur", reset);
      column.addEventListener("click", () => {
        const same = pinned === column;
        columns.querySelectorAll(".is-pinned").forEach(item => item.classList.remove("is-pinned"));
        pinned = same ? null : column;
        if (pinned) {
          pinned.classList.add("is-pinned");
          show();
        } else {
          column.classList.remove("is-active");
          rankingReadout.textContent = "Hover, focus, or select a model to compare its Full and Partial scores.";
        }
      });
      columns.append(column);
    });
    fragment.append(columns);
    chart.replaceChildren(fragment);
  }

  function renderProcess() {
    const models = overall.models
      .filter(model => modelStyle[model.name] && processData[model.name])
      .sort((left, right) => metric(right, partialMetric) - metric(left, partialMetric));
    const fragment = document.createDocumentFragment();
    let pinned = null;

    [100, 75, 50, 25, 0].forEach(value => {
      const gridline = create("span", "pbx-stage-gridline");
      gridline.dataset.value = String(value);
      gridline.setAttribute("aria-hidden", "true");
      fragment.append(gridline);
    });

    const columns = create("div", "pbx-stage-columns");
    models.forEach((model, index) => {
      const partial = metric(model, partialMetric);
      const process = processData[model.name];
      const style = modelStyle[model.name];
      const column = create("button", "pbx-stage-model");
      column.type = "button";
      column.style.setProperty("--model-color", style.color);
      column.setAttribute("aria-label", `${index + 1}. ${model.name}: Partial ${formatScore(partial)}, Modeling ${formatScore(process.modeling)}, Execution ${formatScore(process.execution)}, Validation ${formatScore(process.validation)}, ${process.turns.toFixed(1)} average interaction turns`);

      const partialLabel = create("span", "pbx-stage-partial", `${partial.toFixed(1)}%`);
      partialLabel.append(create("small", "", "Partial"));
      const bars = create("span", "pbx-stage-bars");
      ["modeling", "execution", "validation"].forEach((stage, stageIndex) => {
        const bar = create("i", `is-${stage}`);
        bar.style.height = `${process[stage]}%`;
        bar.style.backgroundColor = tint(style.color, [0.08, 0.30, 0.55][stageIndex]);
        bar.append(create("em", "", process[stage].toFixed(0)));
        bars.append(bar);
      });
      const identity = create("span", "pbx-stage-identity");
      const logo = modelLogo(style, "pbx-process-logo");
      const name = create("strong");
      style.label.split("|").forEach((line, lineIndex) => {
        if (lineIndex) name.append(document.createElement("br"));
        name.append(document.createTextNode(line));
      });
      identity.append(logo, name);
      const turns = create("span", "pbx-stage-turns", `${process.turns.toFixed(1)} turns`);
      column.append(partialLabel, bars, identity, turns);

      const gap = Math.max(process.modeling, process.execution) - process.validation;
      const description = `${model.name}: Partial ${formatScore(partial)}; Modeling ${formatScore(process.modeling)}, Execution ${formatScore(process.execution)}, Validation ${formatScore(process.validation)}; ${process.turns.toFixed(1)} average turns. Validation trails its stronger upstream stage by ${gap.toFixed(2)} points.`;
      const show = () => {
        columns.querySelectorAll(".is-active").forEach(item => item.classList.remove("is-active"));
        column.classList.add("is-active");
        processReadout.textContent = description;
      };
      const reset = () => {
        if (pinned) return;
        column.classList.remove("is-active");
        processReadout.textContent = "Select a model to inspect the gap between scientific setup, execution, and validation.";
      };
      column.addEventListener("pointerenter", () => { if (!pinned) show(); });
      column.addEventListener("pointerleave", reset);
      column.addEventListener("focus", show);
      column.addEventListener("blur", reset);
      column.addEventListener("click", () => {
        const same = pinned === column;
        columns.querySelectorAll(".is-pinned").forEach(item => item.classList.remove("is-pinned"));
        pinned = same ? null : column;
        if (pinned) {
          pinned.classList.add("is-pinned");
          show();
        } else {
          column.classList.remove("is-active");
          processReadout.textContent = "Select a model to inspect the gap between scientific setup, execution, and validation.";
        }
      });
      columns.append(column);
    });
    fragment.append(columns);
    processChart.replaceChildren(fragment);
  }

  function wireLeaderboardTabs() {
    const tabs = [...root.querySelectorAll(".pbx-leaderboard-tabs [role=tab]")];
    const panels = [
      document.getElementById("pbx-leaderboard-panel-full"),
      document.getElementById("pbx-leaderboard-panel-partial"),
    ];
    const select = view => {
      tabs.forEach(tab => {
        const active = tab.dataset.leaderboardView === view;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      panels.forEach(panel => { panel.hidden = panel.id !== `pbx-leaderboard-panel-${view}`; });
      status.textContent = view === "full"
        ? "10 agents ranked by Full rate · Partial score shown above each column"
        : "10 agents ranked by Partial score · stage scores and trimmed average turns";
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => select(tab.dataset.leaderboardView));
      tab.addEventListener("keydown", event => {
        let target;
        if (event.key === "ArrowRight") target = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") target = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") target = 0;
        if (event.key === "End") target = tabs.length - 1;
        if (target === undefined) return;
        event.preventDefault();
        tabs[target].focus();
        select(tabs[target].dataset.leaderboardView);
      });
    });
    select("full");
  }

  function renderDifficulty() {
    const areas = data.modules
      .filter(module => module.id !== "all")
      .map(module => {
        const scores = module.models
          .filter(model => modelStyle[model.name])
          .map(model => metric(model, partialMetric))
          .filter(Number.isFinite);
        const mean = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        return { label: areaLabels[module.label] || module.label, mean, difficulty: 100 - mean };
      })
      .sort((left, right) => right.difficulty - left.difficulty);
    const fragment = document.createDocumentFragment();
    let pinned = null;

    areas.forEach((area, index) => {
      const row = create("button", "pbx-difficulty-row");
      row.type = "button";
      row.style.setProperty("--difficulty", area.difficulty);
      row.style.setProperty("--difficulty-width", `${area.difficulty}%`);
      row.setAttribute("aria-label", `${index + 1}. ${area.label}: difficulty ${area.difficulty.toFixed(2)}, cross-model mean Partial score ${formatScore(area.mean)}`);
      row.append(
        create("span", "pbx-difficulty-rank", String(index + 1).padStart(2, "0")),
        create("span", "pbx-difficulty-label", area.label),
        create("span", "pbx-difficulty-track"),
        create("strong", "pbx-difficulty-value", area.difficulty.toFixed(1)),
      );
      const description = `${area.label}: difficulty ${area.difficulty.toFixed(2)}; cross-model mean Partial score ${formatScore(area.mean)}.`;
      const show = () => {
        difficultyChart.querySelectorAll(".is-active").forEach(item => item.classList.remove("is-active"));
        row.classList.add("is-active");
        difficultyReadout.textContent = description;
      };
      const reset = () => {
        if (pinned) return;
        row.classList.remove("is-active");
        difficultyReadout.textContent = "Select a research area to inspect its cross-model mean Partial score.";
      };
      row.addEventListener("pointerenter", () => { if (!pinned) show(); });
      row.addEventListener("pointerleave", reset);
      row.addEventListener("focus", show);
      row.addEventListener("blur", reset);
      row.addEventListener("click", () => {
        const same = pinned === row;
        difficultyChart.querySelectorAll(".is-pinned").forEach(item => item.classList.remove("is-pinned"));
        pinned = same ? null : row;
        if (pinned) {
          pinned.classList.add("is-pinned");
          show();
        } else {
          row.classList.remove("is-active");
          difficultyReadout.textContent = "Select a research area to inspect its cross-model mean Partial score.";
        }
      });
      fragment.append(row);
    });
    difficultyChart.replaceChildren(fragment);
  }

  root.classList.add("is-ready");
  renderRanking();
  renderProcess();
  renderDifficulty();
  wireLeaderboardTabs();
})();
