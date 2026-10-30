Title: EvoCode-Bench
Date: 2026-06-21
Rank: Opus-4.8: 59.1 Dataset Score
Domain: Coding
Summary: 26 multi-turn coding tasks with 227 evaluated rounds. Each task keeps the same workspace and agent session while requirements change, accumulate, and sometimes conflict.
HeaderImage: /static/images/evocodebench/logo-concept-3.png

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

:root {
    --evb-font: 'Inter', -apple-system, sans-serif;
    --evb-mono: 'JetBrains Mono', ui-monospace, monospace;
    --evb-ink: #0f172a;
    --evb-ink-soft: #334155;
    --evb-ink-muted: #64748b;
    --evb-surface: #ffffff;
    --evb-raised: #f8fafc;
    --evb-sunken: #eef2f7;
    --evb-border: #dbe4ee;
    --evb-accent: #0f766e;
    --evb-accent-light: #14b8a6;
    --evb-accent-bg: rgba(15,118,110,0.07);
    --evb-blue: #2563eb;
    --evb-blue-bg: rgba(37,99,235,0.07);
    --evb-amber: #d97706;
    --evb-amber-bg: rgba(217,119,6,0.08);
    --evb-rose: #e11d48;
    --evb-rose-bg: rgba(225,29,72,0.06);
    --evb-gold: #f59e0b;
    --evb-silver: #94a3b8;
    --evb-bronze: #d97706;
    --evb-radius: 8px;
}

.evb-page {
    font-family: var(--evb-font);
    color: var(--evb-ink);
}

.evb-hero { text-align: center; padding: 32px 0 18px; }
.evb-hero .subtitle { font-size: 1.05em; color: var(--evb-ink-muted); max-width: 760px; margin: 0 auto 20px; line-height: 1.7; }
.evb-links { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
.evb-link { display: inline-flex; align-items: center; gap: 6px; padding: 9px 18px; border: 1px solid var(--evb-border); border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none !important; color: var(--evb-ink) !important; transition: all .2s; }
.evb-link:hover { background: var(--evb-sunken); border-color: var(--evb-accent); }
.evb-link svg { width: 16px; height: 16px; }
.evb-link-disabled { color: var(--evb-ink-muted) !important; background: var(--evb-raised); cursor: default; }
.evb-link-disabled:hover { border-color: var(--evb-border); background: var(--evb-raised); }

.evb-stats { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin: 24px 0; }
.evb-stat { padding: 16px 10px; border: 1px solid var(--evb-border); border-radius: var(--evb-radius); text-align: center; background: #fff; }
.evb-stat-val { font-size: 1.7em; font-weight: 800; color: var(--evb-ink); }
.evb-stat-label { font-size: 10px; color: var(--evb-ink-muted); text-transform: uppercase; letter-spacing: .8px; margin-top: 2px; }

.evb-section { margin: 44px 0; }
.evb-section-title { font-size: 1.25em; font-weight: 800; margin-bottom: 14px; color: var(--evb-ink); letter-spacing: 0; }
.evb-copy { font-size: 0.9em; color: var(--evb-ink-soft); line-height: 1.7; margin-bottom: 20px; }
.evb-chip { display: inline-flex; align-items: center; gap: 8px; padding: 7px 14px; background: var(--evb-accent-bg); border: 1px solid rgba(15,118,110,0.18); border-radius: 8px; font-size: 0.9em; font-weight: 800; color: var(--evb-accent); margin-bottom: 12px; }

.evb-meta-line { font-size: 12px; color: var(--evb-ink-muted); text-transform: uppercase; letter-spacing: .6px; font-weight: 800; margin-bottom: 12px; }

.evb-chart { margin: 24px 0 20px; overflow-x: auto; overflow-y: visible; padding: 18px 0 62px; }
.evb-chart-bars { display: flex; align-items: flex-end; justify-content: center; gap: 6px; height: 348px; min-width: 790px; border-bottom: 1px solid var(--evb-border); }
.evb-bar-col { display: flex; flex-direction: column; align-items: center; width: 56px; position: relative; }
.evb-bar-col:hover .evb-bar-body { filter: brightness(1.08); transform: scaleY(1.02); transform-origin: bottom; }
.evb-bar-col:hover .evb-bar-tooltip { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(-4px); }
.evb-bar-logo { width: 25px; height: 25px; object-fit: contain; margin-bottom: 26px; border-radius: 5px; transform: translateY(-2px); }
.evb-bar-body { border-radius: 4px 4px 0 0; width: 34px; transition: filter .15s, transform .15s; cursor: pointer; position: relative; min-height: 12px; }
.evb-bar-pct { position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; font-weight: 800; color: var(--evb-ink-soft); white-space: nowrap; line-height: 1; }
.evb-bar-name { font-size: 9.5px; color: #374151; margin-top: 8px; text-align: center; line-height: 1.25; min-height: 46px; font-weight: 700; }
.evb-bar-setting { display: block; margin-top: 2px; font-size: 8.5px; font-weight: 800; color: var(--evb-ink-muted); text-transform: uppercase; letter-spacing: .2px; }
.evb-bar-tooltip { position: absolute; top: calc(100% + 42px); left: 50%; transform: translateX(-50%) translateY(0); background: rgba(15,23,42,0.96); color: #fff; padding: 8px 12px; border-radius: 8px; font-size: 11px; white-space: nowrap; opacity: 0; visibility: hidden; pointer-events: none; transition: all .15s; z-index: 50; line-height: 1.6; }
.evb-bar-tooltip::after { content:''; position:absolute; bottom:100%; left:50%; transform:translateX(-50%); border:5px solid transparent; border-bottom-color:rgba(15,23,42,0.96); }
.evb-chart-caption { text-align: center; margin-top: 10px; font-size: 11px; color: #94a3b8; }

.evb-metrics { font-size: 0.86em; color: var(--evb-ink-soft); line-height: 1.7; margin-bottom: 16px; padding: 12px 16px; background: var(--evb-raised); border-radius: 8px; border-left: 3px solid var(--evb-accent); }
.evb-metric-list { margin: 8px 0 0; padding-left: 18px; }
.evb-metric-list li { margin: 6px 0; }
.evb-metric-list strong { color: var(--evb-ink); }
.evb-table-wrap { overflow-x: auto; border: 1px solid var(--evb-border); border-radius: var(--evb-radius); margin-bottom: 24px; }
.evb-lb-controls { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 4px 0 10px; flex-wrap: wrap; }
.evb-lb-toggle { display: inline-flex; border: 1px solid var(--evb-border); border-radius: 8px; overflow: hidden; background: #fff; }
.evb-lb-toggle button { appearance: none; border: 0; background: transparent; padding: 7px 12px; font: 800 11px/1 var(--evb-font); color: var(--evb-ink-muted); text-transform: uppercase; letter-spacing: .4px; cursor: pointer; }
.evb-lb-toggle button.is-active { background: var(--evb-accent); color: #fff; }
.evb-lb-cycle { font-size: 11px; color: var(--evb-ink-muted); font-weight: 700; }
.evb-lb { width: 100%; border-collapse: collapse; font-size: 13px; }
.evb-lb thead { background: var(--evb-sunken); }
.evb-lb th { padding: 10px; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: .5px; color: var(--evb-ink-muted); border-bottom: 2px solid var(--evb-border); text-align: center; white-space: nowrap; }
.evb-lb th:nth-child(1) { width: 36px; }
.evb-lb th:nth-child(2) { text-align: left; min-width: 180px; }
.evb-lb td { padding: 9px 10px; border-bottom: 1px solid var(--evb-border); text-align: center; }
.evb-lb td:nth-child(2) { text-align: left; }
.evb-lb tbody tr:hover { background: var(--evb-accent-bg); }
.evb-lb tbody tr:last-child td { border-bottom: none; }
.evb-rank { font-weight: 800; }
.evb-rank-1 { color: var(--evb-gold); }
.evb-rank-2 { color: var(--evb-silver); }
.evb-rank-3 { color: var(--evb-bronze); }
.evb-model-cell { display: flex; align-items: center; gap: 9px; }
.evb-model-logo { width: 22px; height: 22px; border-radius: 5px; object-fit: contain; }
.evb-model-name { font-weight: 700; }
.evb-model-org { font-size: 10px; color: var(--evb-ink-muted); }
.evb-model-setting { font-size: 10px; color: var(--evb-accent); font-weight: 800; margin-top: 1px; }
.evb-score { font-weight: 800; }
.evb-score-best { color: var(--evb-accent); }
.evb-gap { color: var(--evb-amber); font-weight: 700; }
.evb-gap-neg { color: var(--evb-rose); font-weight: 700; }

.evb-figure { margin: 28px 0 36px; border-radius: var(--evb-radius); overflow: hidden; border: 1px solid var(--evb-border); background: #fff; }
.evb-figure img { width: 100%; display: block; }
.evb-figure-caption { padding: 12px 16px; font-size: 12px; color: var(--evb-ink-muted); background: var(--evb-raised); border-top: 1px solid var(--evb-border); line-height: 1.6; }

.evb-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin: 18px 0 24px; }
.evb-insight { border: 1px solid var(--evb-border); border-radius: 8px; padding: 16px; background: #fff; }
.evb-insight-title { font-size: 0.95em; font-weight: 800; color: var(--evb-ink); margin-bottom: 7px; }
.evb-insight-body { font-size: 0.86em; color: var(--evb-ink-soft); line-height: 1.65; }

.evb-taxonomy { width: 100%; border-collapse: collapse; font-size: 13px; }
.evb-taxonomy th, .evb-taxonomy td { padding: 10px 12px; border-bottom: 1px solid var(--evb-border); text-align: center; }
.evb-taxonomy th { background: var(--evb-sunken); color: var(--evb-ink-muted); font-size: 11px; text-transform: uppercase; letter-spacing: .5px; }
.evb-taxonomy td:first-child, .evb-taxonomy th:first-child { text-align: left; font-weight: 800; }
.evb-taxonomy td:nth-child(2) { text-align: left; color: var(--evb-ink-soft); min-width: 260px; }
.evb-taxonomy tr:last-child td { border-bottom: none; }

.evb-footer { margin: 36px 0 16px; text-align: center; padding: 20px; border-top: 1px solid var(--evb-border); font-size: 12px; color: var(--evb-ink-muted); }

@media (max-width: 768px) {
    .evb-stats { grid-template-columns: repeat(3, 1fr); }
    .evb-grid-2 { grid-template-columns: 1fr; }
    .evb-lb, .evb-taxonomy { font-size: 11px; min-width: 720px; }
    .evb-chart-bars { min-width: 760px; }
}
@media (max-width: 480px) {
    .evb-stats { grid-template-columns: repeat(2, 1fr); }
}
</style>

<div class="evb-page">

<div class="evb-hero">
    <div class="evb-meta-line">Iteration · Multi-turn · Harbor Official Multi-Step + Terminus-2</div>
    <p class="subtitle">
        EvoCode-Bench tests whether coding agents can keep a project working as user requests change. It evaluates agents on 26 stateful coding tasks and 227 rounds, with the same workspace and agent session preserved for 5-15 rounds.
    </p>
    <div class="evb-links">
        <a href="https://huggingface.co/datasets/UnipatAI/EvoCodeBench" class="evb-link" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>Dataset</a>
        <a href="https://github.com/UniPat-AI/EvoCodeBench" class="evb-link" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>GitHub</a>
        <a href="https://unipat-ai.github.io/EvoCodeBench/" class="evb-link" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 4v12h16V7H4zm2 2h5v5H6V9zm7 0h5v2h-5V9zm0 3h5v2h-5v-2z"/></svg>Results</a>
        <a href="https://arxiv.org/abs/2605.24110" class="evb-link" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h9l5 5v15H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v-1.5H8V12zm0 3h8v-1.5H8V15zm0 3h5v-1.5H8V18z"/></svg>Paper</a>
        <a href="https://harborframework.com/docs/tasks/multi-step" class="evb-link" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm3 3h10v2H7V9zm0 4h6v2H7v-2zm11.7-1.7 1.4 1.4-4.6 4.6-2.6-2.6 1.4-1.4 1.2 1.2 3.2-3.2z"/></svg>Scaffold</a>
        <a href="https://github.com/UniPat-AI/Terminal-X" class="evb-link" target="_blank" title="git@github.com:UniPat-AI/Terminal-X.git"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm2 3.2L7.2 8 11 11.8 7.2 15.6 6 14.4l2.6-2.6L6 9.2zM12 15h6v-1.7h-6V15z"/></svg>More Work</a>
    </div>
</div>

<div class="evb-stats">
    <div class="evb-stat"><div class="evb-stat-val">26</div><div class="evb-stat-label">Tasks</div></div>
    <div class="evb-stat"><div class="evb-stat-val">227</div><div class="evb-stat-label">Rounds</div></div>
    <div class="evb-stat"><div class="evb-stat-val">5-15</div><div class="evb-stat-label">Rounds / Task</div></div>
    <div class="evb-stat"><div class="evb-stat-val">13</div><div class="evb-stat-label">Agents</div></div>
    <div class="evb-stat"><div class="evb-stat-val">Mean</div><div class="evb-stat-label">Score Strategy</div></div>
</div>

<div class="evb-section">
    <h2 class="evb-section-title">Leaderboard</h2>
    <p class="evb-copy">
        The current leaderboard is the <strong>2026-06-25 update to the clean re-release</strong>, evaluated under the Harbor <strong>official multi-step</strong> format with one attempt per task. The main ranking mode is <strong>Dataset Score</strong>: each round is verified independently with a binary reward, each task scores <code>passed_rounds / total_rounds</code>, and the final score is the mean across the 26 tasks. Per-round, per-test-case detail for every task is available on the <a href="https://unipat-ai.github.io/EvoCodeBench/" target="_blank">interactive results site</a>. The clean evaluation trajectories are released with the <a href="https://huggingface.co/datasets/UnipatAI/EvoCodeBench" target="_blank">Hugging Face dataset</a>; each reached benchmark round includes an <code>agent/trajectory.json</code> file for auditing model behavior and Avg Rounds.
    </p>
    <div class="evb-chart">
        <div class="evb-chart-bars" id="evb-chart-bars"></div>
        <div class="evb-chart-caption" id="evb-chart-caption">Dataset score &mdash; Harbor official multi-step &mdash; one attempt per task, mean of per-round rewards</div>
    </div>
    <div class="evb-lb-controls">
        <div class="evb-lb-toggle" aria-label="Leaderboard ranking mode">
            <button type="button" class="is-active" data-evb-mode="dataset">Dataset Score</button>
            <button type="button" data-evb-mode="case">Case Score</button>
            <button type="button" data-evb-mode="perfect">Perfect Tasks</button>
        </div>
        <div class="evb-lb-cycle">Auto-rotates every 3 seconds</div>
    </div>
    <div class="evb-table-wrap">
    <table class="evb-lb">
        <thead><tr><th>#</th><th>Agent</th><th>Dataset Score</th><th>Case Score</th><th>Avg Rounds</th><th>Perfect Tasks</th><th>Reasoning</th></tr></thead>
        <tbody id="evb-leaderboard-body"></tbody>
    </table>
    </div>
    <script>
    (function(){
        var rows = [
            {name:"Claude-Opus-4.8", short:"Opus 4.8", org:"Anthropic", logo:"claude.png", color:"#D97757", dataset:59.1, caseScore:96.6, avgRounds:62.2, perfect:9, setting:"xHigh reasoning", reasoning:"xhigh reasoning effort"},
            {name:"GPT-5.5", short:"GPT 5.5", org:"OpenAI", logo:"openai.png", color:"#1A1A1A", dataset:29.5, caseScore:81.8, avgRounds:53.7, perfect:0, setting:"High reasoning", reasoning:"high reasoning effort"},
            {name:"MiniMax-M3", short:"MiniMax M3", org:"MiniMax", logo:"minimax.png", color:"#E84142", dataset:23.4, caseScore:61.5, avgRounds:123.7, perfect:2, setting:"Adaptive", reasoning:"adaptive thinking"},
            {name:"GLM-5.2", short:"GLM 5.2", org:"Zhipu AI", logo:"glm_true.png", color:"#2563EB", dataset:16.2, caseScore:47.5, avgRounds:66.3, perfect:1, setting:"Thinking", reasoning:"thinking enabled"},
            {name:"DeepSeek-V4-Pro", short:"DS V4 Pro", org:"DeepSeek", logo:"deepseek.png", color:"#4D6BFE", dataset:14.1, caseScore:61.7, avgRounds:144.1, perfect:1, setting:"High reasoning", reasoning:"high reasoning effort"},
            {name:"Kimi-K2.6", short:"Kimi K2.6", org:"Moonshot AI", logo:"kimi.png", color:"#333333", dataset:13.2, caseScore:65.7, avgRounds:117.4, perfect:0, setting:"Thinking", reasoning:"thinking enabled"},
            {name:"DeepSeek-V4-Flash", short:"DS V4 Flash", org:"DeepSeek", logo:"deepseek.png", color:"#6C83FF", dataset:12.2, caseScore:58.9, avgRounds:122.2, perfect:0, setting:"High reasoning", reasoning:"high reasoning effort"},
            {name:"Qwen3.7-Max", short:"Qwen 3.7 Max", org:"Alibaba", logo:"qwen.png", color:"#14B8A6", dataset:11.9, caseScore:67.4, avgRounds:117.1, perfect:0, setting:"Thinking", reasoning:"thinking enabled"},
            {name:"Qwen3.6-Plus", short:"Qwen 3.6", org:"Alibaba", logo:"qwen.png", color:"#0F766E", dataset:9.7, caseScore:67.7, avgRounds:115.8, perfect:0, setting:"Thinking", reasoning:"thinking enabled"},
            {name:"Kimi-K2.7-Code", short:"Kimi K2.7 Code", org:"Moonshot AI", logo:"kimi.png", color:"#555555", dataset:7.8, caseScore:45.4, avgRounds:67.5, perfect:0, setting:"Thinking", reasoning:"thinking enabled"},
            {name:"Doubao-Seed-2.1-Pro", short:"Seed 2.1 Pro", org:"ByteDance", logo:"/static/images/frontierscience/logos/seed_logo.png", color:"#EA580C", dataset:32.2, caseScore:83.0, avgRounds:117.2, perfect:3, setting:"High reasoning", reasoning:"high reasoning effort"},
            {name:"GLM-5.1", short:"GLM 5.1", org:"Zhipu AI", logo:"glm_true.png", color:"#1D4ED8", dataset:5.9, caseScore:52.5, avgRounds:88.4, perfect:0, setting:"Thinking", reasoning:"thinking enabled"},
            {name:"MiniMax-M2.7", short:"MiniMax M2.7", org:"MiniMax", logo:"minimax.png", color:"#E84142", dataset:5.1, caseScore:44.9, avgRounds:115.1, perfect:0, setting:"Reasoning split", reasoning:"reasoning split enabled"}
        ];
        var mode = "dataset";
        var body = document.getElementById("evb-leaderboard-body");
        var chart = document.getElementById("evb-chart-bars");
        var caption = document.getElementById("evb-chart-caption");
        var buttons = document.querySelectorAll("[data-evb-mode]");
        var captions = {
            dataset: "Dataset score &mdash; Harbor official multi-step &mdash; one attempt per task, mean of per-round rewards",
            case: "Case score &mdash; mean per-round test-case pass rate across tasks",
            perfect: "Perfect tasks &mdash; number of tasks solved across all rounds"
        };
        var metricLabels = {dataset: "Dataset score", case: "Case score", perfect: "Perfect tasks"};
        function esc(s){ return String(s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]; }); }
        function logoSrc(row){ return row.logo.charAt(0) === "/" ? row.logo : "/static/images/roadmapbench/logos/" + row.logo; }
        function metricValue(row, key){ return key === "case" ? row.caseScore : (key === "perfect" ? row.perfect : row.dataset); }
        function fmt(value, key){ return key === "perfect" ? value + "/26" : value.toFixed(1); }
        function render(nextMode){
            mode = nextMode;
            buttons.forEach(function(btn){ btn.classList.toggle("is-active", btn.getAttribute("data-evb-mode") === mode); });
            var key = mode === "case" ? "caseScore" : (mode === "perfect" ? "perfect" : "dataset");
            var sorted = rows.slice().sort(function(a,b){
                return (b[key] - a[key]) || (b.dataset - a.dataset);
            });
            var maxValue = Math.max.apply(null, sorted.map(function(row){ return metricValue(row, mode); })) || 1;
            chart.innerHTML = sorted.map(function(row){
                var value = metricValue(row, mode);
                var height = Math.max(12, Math.round((value / maxValue) * 240));
                return "<div class=\"evb-bar-col\"><img class=\"evb-bar-logo\" src=\"" + esc(logoSrc(row)) + "\"/>"
                    + "<div class=\"evb-bar-body\" style=\"height:" + height + "px; background:" + esc(row.color) + ";\"><span class=\"evb-bar-pct\">" + fmt(value, mode) + "</span></div>"
                    + "<div class=\"evb-bar-name\">" + esc(row.short) + "<span class=\"evb-bar-setting\">" + esc(row.setting) + "</span></div>"
                    + "<div class=\"evb-bar-tooltip\">" + metricLabels[mode] + ": " + fmt(value, mode) + "<br/>Dataset score: " + row.dataset.toFixed(1) + "<br/>Case score: " + row.caseScore.toFixed(1) + "<br/>Perfect tasks: " + row.perfect + "/26<br/>Setting: " + esc(row.reasoning) + "</div></div>";
            }).join("");
            caption.innerHTML = captions[mode];
            body.innerHTML = sorted.map(function(row, idx){
                var rank = idx + 1;
                var rankCls = rank <= 3 ? " evb-rank-" + rank : "";
                return "<tr><td class=\"evb-rank" + rankCls + "\">" + rank + "</td>"
                    + "<td><div class=\"evb-model-cell\"><img class=\"evb-model-logo\" src=\"" + esc(logoSrc(row)) + "\"/><div><div class=\"evb-model-name\">" + esc(row.name) + "</div><div class=\"evb-model-org\">" + esc(row.org) + "</div></div></div></td>"
                    + "<td class=\"evb-score" + (mode === "dataset" && rank === 1 ? " evb-score-best" : "") + "\">" + row.dataset.toFixed(1) + "</td>"
                    + "<td class=\"evb-score" + (mode === "case" && rank === 1 ? " evb-score-best" : "") + "\">" + row.caseScore.toFixed(1) + "</td>"
                    + "<td>" + row.avgRounds.toFixed(1) + "</td><td class=\"evb-score" + (mode === "perfect" && rank === 1 ? " evb-score-best" : "") + "\">" + row.perfect + " / 26</td><td>" + esc(row.reasoning) + "</td></tr>";
            }).join("");
        }
        buttons.forEach(function(btn){ btn.addEventListener("click", function(){ render(btn.getAttribute("data-evb-mode")); }); });
        render(mode);
        window.setInterval(function(){
            render(mode === "dataset" ? "case" : (mode === "case" ? "perfect" : "dataset"));
        }, 3000);
    })();
    </script>
    <div class="evb-metrics">
        <strong>Leaderboard metric definitions.</strong>
        <ul class="evb-metric-list">
            <li><strong>Dataset Score</strong> is the headline score on a 0&ndash;100 scale. For each task, compute <code>passed_rounds / total_rounds</code>, then average that task score over all 26 tasks and multiply by 100. A round earns 1 only if every required test case passes; if the chain aborts before later rounds, those unreached rounds count as 0. This is similar in spirit to MT@1 because it is one attempt per task, but it is not the legacy paper MT@1: this table uses Harbor official multi-step full-chain runs and averages binary per-round rewards within each task first.</li>
            <li><strong>Case Score</strong> is the finer-grained companion on a 0&ndash;100 scale. For each round, compute <code>passed_test_cases / total_test_cases</code>; build failures and unreached rounds count as 0. Then average over the task's rounds and over the 26 tasks. It credits partial progress that Dataset Score hides; GPT-5.5, for example, scores 29.5 on binary round rewards but 81.8 on test cases.</li>
            <li><strong>Avg Rounds</strong> is the mean number of agent-tool interactions per reached benchmark round, computed from each reached round's <code>agent/trajectory.json</code>. It is not the number of benchmark rounds in a task. If a chain stops early, missing later benchmark rounds are not included in this average, while they still count as 0 for Dataset Score and Case Score.</li>
            <li><strong>Perfect Tasks</strong> counts tasks where every benchmark round passed. A value of <code>9 / 26</code> means 9 full tasks were completed end to end, or 34.6% full-task completion.</li>
        </ul>
        The <a href="https://unipat-ai.github.io/EvoCodeBench/" target="_blank">interactive site</a> exposes the per-round and per-test-case pass rate behind every cell.
    </div>
    <p class="evb-copy" style="font-size:0.82em; border-left:3px solid var(--evb-border); padding-left:12px; color:var(--evb-ink-muted);">
        <strong>A note on evaluation integrity (results updated 2026-06-25).</strong> While auditing trajectories from our first run we found a Harbor framework issue: in the default shared multi-step mode, the previous round's grading script (<code>/tests/test.sh</code>) and reward persist into the next round's agent workspace, so an agent can read the grader from inside its own run. We observed this on 12 of 26 tasks (22 task&ndash;model pairs), concentrated in a few models. We reported it upstream (<a href="https://github.com/harbor-framework/harbor/issues/1960" target="_blank">issue #1960</a>, <a href="https://github.com/harbor-framework/harbor/pull/1961" target="_blank">fix PR #1961</a>), patched our harness, and re-ran the whole benchmark clean &mdash; the numbers above are from the patched runs and replace the leaderboard published June 13&ndash;16. Earlier v1 numbers are historical only and are not shown in the current leaderboard. Per-(task, model, round) detail and the full changelog are in the <a href="https://github.com/UniPat-AI/EvoCodeBench" target="_blank">GitHub repo</a>.
    </p>
</div>

<div class="evb-section">
    <h2 class="evb-section-title">How It Works</h2>
    <p class="evb-copy">
        Each task is a sequence of user rounds run in one persistent Docker container with one continuous agent session. At round <em>i</em>, the agent receives a new instruction, edits the same workspace, and is verified by a cumulative test suite covering all still-active requirements through round <em>i</em>. Every round runs and is scored with a binary 0/1 reward; the chain does not short-circuit, and the trial score is the mean of the per-round rewards. Because every round is scored independently, the per-round pattern is itself diagnostic of which requirements an agent can and cannot satisfy.
    </p>
</div>

<div class="evb-section">
    <h2 class="evb-section-title">Evaluation Scaffold</h2>
    <p class="evb-copy">
        EvoCode-Bench runs on the <strong>Harbor official multi-step</strong> format &mdash; the same framework used by Terminal-Bench 2.0 &mdash; using its native <code>[[steps]]</code> sequencing, a single persistent workspace, a per-step verifier, and <code>multi_step_reward_strategy = "mean"</code> aggregation. No fork is required to run a full task. Single-round fast-forward (solving a target round from a reference-completed prior state) is provided by our fork <a href="https://github.com/UniPat-AI/harbor-official-fast-forward" target="_blank">harbor-official-fast-forward</a>.
    </p>
    <div class="evb-metrics">
        <strong>Reproduce.</strong> Download the task archives and clean evaluation trajectories from <a href="https://huggingface.co/datasets/UnipatAI/EvoCodeBench" target="_blank">Hugging Face</a>, then run <code>harbor run &lt;task&gt; --agent oracle | nop | &lt;model&gt;</code>. The oracle reference solutions score 1.0 on every round; empty submissions score 0. See <a href="https://github.com/UniPat-AI/EvoCodeBench" target="_blank">github.com/UniPat-AI/EvoCodeBench</a> for the evaluation scripts and leaderboard recomputation command.
    </div>
</div>

<div class="evb-section">
    <div class="evb-metrics" style="border-left-color: var(--evb-amber); background: var(--evb-amber-bg);">
        <strong>⚠ Legacy &mdash; Paper Evaluation.</strong> Everything below is the <strong>original paper evaluation</strong>, run on the legacy <a href="https://github.com/UniPat-AI/harbor_multiturn" target="_blank"><code>harbor_multiturn</code></a> fork with the <strong>MT@4 / SR / Comp</strong> metrics (best-of-four, fail-stop). Those numbers use a different runner and a different scoring rule than the official multi-step dataset score above and are <strong>not directly comparable</strong>. They are kept here for reproducibility of the paper.
    </div>
</div>

<div class="evb-section">
    <h2 class="evb-section-title">Leaderboard (Legacy · MT@4)</h2>
    <p class="evb-copy">
        The main score is <strong>MT@4</strong>: a best-of-four fail-stop multi-round score. A round receives credit only if at least one attempt reaches that round with a workspace that still satisfies all active cumulative tests.
    </p>
    <div class="evb-chart">
        <div class="evb-chart-bars">
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/roadmapbench/logos/claude.png"/><div class="evb-bar-body" style="height:240px; background:#D97757;"><span class="evb-bar-pct">54.0</span></div><div class="evb-bar-name">Opus 4.7<span class="evb-bar-setting">High reasoning</span></div><div class="evb-bar-tooltip">MT@4: 54.0<br/>SR: 76.7<br/>Comp: 42.3%<br/>Setting: high reasoning effort</div></div>
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/roadmapbench/logos/openai.png"/><div class="evb-bar-body" style="height:233px; background:#1A1A1A;"><span class="evb-bar-pct">52.4</span></div><div class="evb-bar-name">GPT 5.5<span class="evb-bar-setting">High reasoning</span></div><div class="evb-bar-tooltip">MT@4: 52.4<br/>SR: 74.4<br/>Comp: 38.5%<br/>Setting: high reasoning effort</div></div>
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/roadmapbench/logos/claude.png"/><div class="evb-bar-body" style="height:196px; background:#E8967C;"><span class="evb-bar-pct">44.0</span></div><div class="evb-bar-name">Opus 4.6<span class="evb-bar-setting">Default</span></div><div class="evb-bar-tooltip">MT@4: 44.0<br/>SR: 78.9<br/>Comp: 34.6%<br/>Setting: default configured reasoning</div></div>
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/roadmapbench/logos/glm_true.png"/><div class="evb-bar-body" style="height:161px; background:#1D4ED8;"><span class="evb-bar-pct">36.2</span></div><div class="evb-bar-name">GLM 5.1<span class="evb-bar-setting">Thinking</span></div><div class="evb-bar-tooltip">MT@4: 36.2<br/>SR: 63.9<br/>Comp: 15.4%<br/>Setting: thinking enabled</div></div>
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/roadmapbench/logos/kimi.png"/><div class="evb-bar-body" style="height:142px; background:#333333;"><span class="evb-bar-pct">31.9</span></div><div class="evb-bar-name">Kimi K2.6<span class="evb-bar-setting">Thinking</span></div><div class="evb-bar-tooltip">MT@4: 31.9<br/>SR: 59.0<br/>Comp: 23.1%<br/>Setting: thinking enabled</div></div>
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/roadmapbench/logos/deepseek.png"/><div class="evb-bar-body" style="height:136px; background:#4D6BFE;"><span class="evb-bar-pct">30.6</span></div><div class="evb-bar-name">DS V4 Pro<span class="evb-bar-setting">High reasoning</span></div><div class="evb-bar-tooltip">MT@4: 30.6<br/>SR: 56.4<br/>Comp: 19.2%<br/>Setting: high reasoning effort</div></div>
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/roadmapbench/logos/qwen.png"/><div class="evb-bar-body" style="height:131px; background:#0F766E;"><span class="evb-bar-pct">29.4</span></div><div class="evb-bar-name">Qwen 3.6<span class="evb-bar-setting">Thinking</span></div><div class="evb-bar-tooltip">MT@4: 29.4<br/>SR: 57.3<br/>Comp: 15.4%<br/>Setting: thinking enabled</div></div>
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/roadmapbench/logos/xiaomi.png"/><div class="evb-bar-body" style="height:77px; background:#FF6A00;"><span class="evb-bar-pct">17.3</span></div><div class="evb-bar-name">MiMo V2.5<span class="evb-bar-setting">High reasoning</span></div><div class="evb-bar-tooltip">MT@4: 17.3<br/>SR: 7.9<br/>Comp: 11.5%<br/>Setting: high reasoning effort</div></div>
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/roadmapbench/logos/gemini.png"/><div class="evb-bar-body" style="height:61px; background:#4285F4;"><span class="evb-bar-pct">13.7</span></div><div class="evb-bar-name">Gemini 3.1<span class="evb-bar-setting">High reasoning</span></div><div class="evb-bar-tooltip">MT@4: 13.7<br/>SR: 46.7<br/>Comp: 11.5%<br/>Setting: high reasoning effort</div></div>
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/roadmapbench/logos/deepseek.png"/><div class="evb-bar-body" style="height:42px; background:#6C83FF;"><span class="evb-bar-pct">9.4</span></div><div class="evb-bar-name">DS V4 Flash<span class="evb-bar-setting">High reasoning</span></div><div class="evb-bar-tooltip">MT@4: 9.4<br/>SR: 46.3<br/>Comp: 0.0%<br/>Setting: high reasoning effort</div></div>
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/roadmapbench/logos/qwen.png"/><div class="evb-bar-body" style="height:22px; background:#14B8A6;"><span class="evb-bar-pct">4.6</span></div><div class="evb-bar-name">Qwen 3.5<span class="evb-bar-setting">Thinking</span></div><div class="evb-bar-tooltip">MT@4: 4.6<br/>SR: 44.1<br/>Comp: 0.0%<br/>Setting: thinking enabled</div></div>
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/roadmapbench/logos/minimax.png"/><div class="evb-bar-body" style="height:18px; background:#E84142;"><span class="evb-bar-pct">3.7</span></div><div class="evb-bar-name">MiniMax M2.7<span class="evb-bar-setting">Reasoning split</span></div><div class="evb-bar-tooltip">MT@4: 3.7<br/>SR: 30.0<br/>Comp: 0.0%<br/>Setting: reasoning split enabled</div></div>
            <div class="evb-bar-col"><img class="evb-bar-logo" src="/static/images/frontierscience/logos/doubao_logo.png"/><div class="evb-bar-body" style="height:12px; background:#6B7280;"><span class="evb-bar-pct">1.9</span></div><div class="evb-bar-name">Doubao 2.0<span class="evb-bar-setting">High reasoning</span></div><div class="evb-bar-tooltip">MT@4: 1.9<br/>SR: 23.8<br/>Comp: 0.0%<br/>Setting: high reasoning effort</div></div>
        </div>
        <div class="evb-chart-caption">MT@4 score &mdash; Harbor + Terminus-2 scaffold &mdash; four attempts per multi-round task</div>
    </div>
</div>

<div class="evb-section">
    <h2 class="evb-section-title">Full Results (Legacy · MT@4)</h2>
    <div class="evb-metrics">
        <strong>Metrics.</strong> <strong>MT@4</strong> is the four-attempt fail-stop multi-round score. <strong>SR</strong> is single-round pass rate after earlier rounds have been completed by the reference solution. <strong>Gap</strong> is SR minus MT@4, showing how much isolated round-solving overstates persistent execution. <strong>Comp</strong> is full-task completion through the final round in at least one attempt. Model sublabels show the evaluation setting from the paper appendix.
    </div>
    <div class="evb-table-wrap">
    <table class="evb-lb">
        <thead><tr><th>#</th><th>Agent</th><th>MT@4</th><th>SR</th><th>Gap</th><th>Comp</th><th>Avg Turns</th><th>Output Tok.</th></tr></thead>
        <tbody>
            <tr><td class="evb-rank evb-rank-1">1</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/roadmapbench/logos/claude.png"/><div><div class="evb-model-name">Claude-Opus-4.7-High</div><div class="evb-model-org">Anthropic</div><div class="evb-model-setting">high reasoning effort</div></div></div></td><td class="evb-score evb-score-best">54.0</td><td>76.7</td><td class="evb-gap">+22.7</td><td>42.3</td><td>590.6</td><td>50.0K</td></tr>
            <tr><td class="evb-rank evb-rank-2">2</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/roadmapbench/logos/openai.png"/><div><div class="evb-model-name">GPT-5.5-High</div><div class="evb-model-org">OpenAI</div><div class="evb-model-setting">high reasoning effort</div></div></div></td><td class="evb-score">52.4</td><td>74.4</td><td class="evb-gap">+22.0</td><td>38.5</td><td>456.3</td><td>74.1K</td></tr>
            <tr><td class="evb-rank evb-rank-3">3</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/roadmapbench/logos/claude.png"/><div><div class="evb-model-name">Claude-Opus-4.6</div><div class="evb-model-org">Anthropic</div><div class="evb-model-setting">default configured reasoning</div></div></div></td><td class="evb-score">44.0</td><td>78.9</td><td class="evb-gap">+34.9</td><td>34.6</td><td>747.5</td><td>734.2K</td></tr>
            <tr><td class="evb-rank">4</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/roadmapbench/logos/glm_true.png"/><div><div class="evb-model-name">GLM-5.1</div><div class="evb-model-org">Zhipu AI</div><div class="evb-model-setting">thinking enabled</div></div></div></td><td>36.2</td><td>63.9</td><td class="evb-gap">+27.7</td><td>15.4</td><td>859.8</td><td>104.2K</td></tr>
            <tr><td class="evb-rank">5</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/roadmapbench/logos/kimi.png"/><div><div class="evb-model-name">Kimi-K2.6</div><div class="evb-model-org">Moonshot AI</div><div class="evb-model-setting">thinking enabled</div></div></div></td><td>31.9</td><td>59.0</td><td class="evb-gap">+27.1</td><td>23.1</td><td>1155.5</td><td>92.5K</td></tr>
            <tr><td class="evb-rank">6</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/roadmapbench/logos/deepseek.png"/><div><div class="evb-model-name">DeepSeek-V4-Pro</div><div class="evb-model-org">DeepSeek</div><div class="evb-model-setting">high reasoning effort</div></div></div></td><td>30.6</td><td>56.4</td><td class="evb-gap">+25.8</td><td>19.2</td><td>1134.8</td><td>168.8K</td></tr>
            <tr><td class="evb-rank">7</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/roadmapbench/logos/qwen.png"/><div><div class="evb-model-name">Qwen3.6-Plus</div><div class="evb-model-org">Alibaba</div><div class="evb-model-setting">thinking enabled</div></div></div></td><td>29.4</td><td>57.3</td><td class="evb-gap">+27.9</td><td>15.4</td><td>629.3</td><td>103.1K</td></tr>
            <tr><td class="evb-rank">8</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/roadmapbench/logos/xiaomi.png"/><div><div class="evb-model-name">Xiaomi-MiMo-V2.5-Pro</div><div class="evb-model-org">Xiaomi</div><div class="evb-model-setting">high reasoning effort</div></div></div></td><td>17.3</td><td>7.9</td><td class="evb-gap-neg">-9.4</td><td>11.5</td><td>754.8</td><td>125.7K</td></tr>
            <tr><td class="evb-rank">9</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/roadmapbench/logos/gemini.png"/><div><div class="evb-model-name">Gemini-3.1-Pro-Preview</div><div class="evb-model-org">Google</div><div class="evb-model-setting">high reasoning effort</div></div></div></td><td>13.7</td><td>46.7</td><td class="evb-gap">+33.0</td><td>11.5</td><td>261.3</td><td>72.7K</td></tr>
            <tr><td class="evb-rank">10</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/roadmapbench/logos/deepseek.png"/><div><div class="evb-model-name">DeepSeek-V4-Flash</div><div class="evb-model-org">DeepSeek</div><div class="evb-model-setting">high reasoning effort</div></div></div></td><td>9.4</td><td>46.3</td><td class="evb-gap">+36.9</td><td>0.0</td><td>1104.7</td><td>148.7K</td></tr>
            <tr><td class="evb-rank">11</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/roadmapbench/logos/qwen.png"/><div><div class="evb-model-name">Qwen3.5-397B-A17B</div><div class="evb-model-org">Alibaba</div><div class="evb-model-setting">thinking enabled</div></div></div></td><td>4.6</td><td>44.1</td><td class="evb-gap">+39.5</td><td>0.0</td><td>587.8</td><td>53.0K</td></tr>
            <tr><td class="evb-rank">12</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/roadmapbench/logos/minimax.png"/><div><div class="evb-model-name">MiniMax-M2.7</div><div class="evb-model-org">MiniMax</div><div class="evb-model-setting">reasoning split enabled</div></div></div></td><td>3.7</td><td>30.0</td><td class="evb-gap">+26.3</td><td>0.0</td><td>600.4</td><td>59.2K</td></tr>
            <tr><td class="evb-rank">13</td><td><div class="evb-model-cell"><img class="evb-model-logo" src="/static/images/frontierscience/logos/doubao_logo.png"/><div><div class="evb-model-name">Doubao-Seed-2.0-Pro</div><div class="evb-model-org">ByteDance</div><div class="evb-model-setting">high reasoning effort</div></div></div></td><td>1.9</td><td>23.8</td><td class="evb-gap">+21.9</td><td>0.0</td><td>211.1</td><td>18.5K</td></tr>
        </tbody>
    </table>
    </div>
    <div class="evb-figure">
        <img src="/static/images/evocodebench/main_results.png" alt="EvoCode-Bench main results" />
        <div class="evb-figure-caption">
            <strong>Main results.</strong> SR measures isolated single-round success from a reference-fast-forwarded workspace; MT@4 measures whether the agent's own workspace keeps passing as rounds accumulate.
        </div>
    </div>
</div>

<div class="evb-section">
    <h2 class="evb-section-title">How It Works (Legacy · MT@4)</h2>
    <p class="evb-copy">
        Each task is a sequence of user rounds. At round <em>i</em>, the agent receives a new instruction, edits the same Docker workspace, and is evaluated by cumulative tests for all still-active requirements through round <em>i</em>. If the cumulative verifier fails, the multi-turn attempt stops and later rounds receive zero credit.
    </p>
    <div class="evb-figure">
        <img src="/static/images/evocodebench/overview.png" alt="Overview of EvoCode-Bench" />
        <div class="evb-figure-caption">
            <strong>Overview of EvoCode-Bench.</strong> Task construction pairs every round with an instruction, reference solution, and cumulative tests. MT@4 keeps one container and one agent session across rounds; SR fast-forwards to the reference state before the target round.
        </div>
    </div>
</div>

<div class="evb-section">
    <h2 class="evb-section-title">Evaluation Scaffold (Legacy · harbor_multiturn)</h2>
    <p class="evb-copy">
        The paper evaluation used <strong>harbor_multiturn</strong>, the multi-turn Harbor fork released at
        <a href="https://github.com/UniPat-AI/harbor_multiturn" target="_blank">github.com/UniPat-AI/harbor_multiturn</a>.
        The scaffold adds persistent Docker workspaces, continuous agent sessions, round-boundary verifier swaps, reference fast-forwarding for SR, snapshot/resume lineage, and fail-stop reward aggregation.
    </p>
    <div class="evb-metrics">
        <strong>Where it fits.</strong> A stock Harbor task runs one instruction followed by one verifier. EvoCode-Bench needs one task to run as a sequence of rounds. <code>harbor_multiturn</code> handles that protocol: it delivers each round instruction, preserves the workspace, swaps in cumulative tests for the current round, records <code>verifier/multiround_results.json</code>, and writes the aggregate reward used by MT@4.
    </div>
</div>

<div class="evb-section">
    <h2 class="evb-section-title">Dataset Overview</h2>
    <p class="evb-copy">
        The paper groups EvoCode-Bench tasks along two axes: <strong>interaction style</strong>, or how users communicate across rounds, and <strong>engineering activity</strong>, or what kind of code change the round asks for. Each cell reports <strong>tasks / rounds</strong>.
    </p>
    <div class="evb-table-wrap">
    <table class="evb-taxonomy">
        <thead><tr><th>Activity</th><th>Capability Measured</th><th>Explorative</th><th>Contractual</th><th>Document-Driven</th><th>Total</th></tr></thead>
        <tbody>
            <tr><td>Construction</td><td>Building a system incrementally while preserving earlier features and interfaces.</td><td>9 / 80</td><td>3 / 37</td><td>1 / 7</td><td><strong>13 / 124</strong></td></tr>
            <tr><td>Spec Evolution</td><td>Updating an implementation after a later round overturns a core assumption.</td><td>1 / 8</td><td>1 / 7</td><td>1 / 7</td><td><strong>3 / 22</strong></td></tr>
            <tr><td>Review</td><td>Improving non-functional properties such as performance, security, and observability without regression.</td><td>3 / 21</td><td>1 / 7</td><td>1 / 9</td><td><strong>5 / 37</strong></td></tr>
            <tr><td>Migration</td><td>Moving a legacy system to a new implementation style while keeping backward compatibility.</td><td>3 / 29</td><td>1 / 7</td><td>1 / 8</td><td><strong>5 / 44</strong></td></tr>
            <tr><td>Total</td><td></td><td><strong>16 / 138</strong></td><td><strong>6 / 58</strong></td><td><strong>4 / 31</strong></td><td><strong>26 / 227</strong></td></tr>
        </tbody>
    </table>
    </div>
    <div class="evb-grid-2">
        <div class="evb-insight">
            <div class="evb-insight-title">Round Length</div>
            <div class="evb-insight-body">Tasks span 5-15 rounds of evolving state, with 227 cumulative verification points. The longer tasks expose late-stage state accumulation and regression risk.</div>
        </div>
        <div class="evb-insight">
            <div class="evb-insight-title">Requirement Pressure</div>
            <div class="evb-insight-body">Rounds are annotated with non-exclusive change types: 198 extensions, 69 corrections, and 42 conflicts. In total, 110 rounds carry at least one correction or conflict.</div>
        </div>
        <div class="evb-insight">
            <div class="evb-insight-title">Technical Coverage</div>
            <div class="evb-insight-body">Tasks cover MLOps, data engineering, systems programming, scientific computing, testing and automation, infrastructure, and security.</div>
        </div>
        <div class="evb-insight">
            <div class="evb-insight-title">Behavioral Verification</div>
            <div class="evb-insight-body">Tests check observable behavior rather than the reference implementation path, so different valid internal designs can pass the same cumulative contract.</div>
        </div>
    </div>
</div>

<div class="evb-section">
    <h2 class="evb-section-title">Analysis (Legacy · Paper)</h2>

    <h3 style="font-size:1.05em; font-weight:700; margin:28px 0 10px; color:var(--evb-ink);">Single-Round Skill Does Not Imply Persistent Reliability</h3>
    <p class="evb-copy">
        SR exceeds MT@4 by 22 to 40 points for most agents. Claude-Opus-4.6 has the highest SR at 78.9, but ranks third on persistent execution at 44.0 MT@4. The reranking shows that solving an isolated round from a clean reference state is different from living with one's own earlier edits.
    </p>
    <div class="evb-figure">
        <img src="/static/images/evocodebench/sr_vs_mt_by_round.png" alt="Single-round versus multi-turn score by round" />
        <div class="evb-figure-caption">
            <strong>SR vs. MT@4 by round.</strong> SR stays comparatively stable while MT@4 falls with depth, showing the cost of accumulated workspace state.
        </div>
    </div>

    <h3 style="font-size:1.05em; font-weight:700; margin:36px 0 10px; color:var(--evb-ink);">Workspace State Drives a Large Share of Failures</h3>
    <p class="evb-copy">
        A controlled comparison shows that 57.0% of failed MT@4 round records are solvable under SR from a reference-completed state. The state penalty grows with depth: only 15.0% of round-1 MT failures are SR-solvable, rising above 80% beyond round 12.
    </p>
    <div class="evb-figure">
        <img src="/static/images/evocodebench/workspace_state_penalty.png" alt="Workspace state penalty" />
        <div class="evb-figure-caption">
            <strong>Workspace state penalty.</strong> Many multi-turn failures are not isolated instruction failures. They happen because the agent's accumulated workspace no longer satisfies the active contract.
        </div>
    </div>

    <h3 style="font-size:1.05em; font-weight:700; margin:36px 0 10px; color:var(--evb-ink);">Failure Patterns Are Tier-Dependent</h3>
    <p class="evb-copy">
        Missed active requirements dominate every tier, but the secondary modes differ. Lower-tier agents fail early: 57.4% of lower-tier trial failures occur in the first 20% of rounds. Stronger agents survive long enough for stale behavior, regressions, and conflict-resolution errors to appear.
    </p>
    <div class="evb-grid-2">
        <div class="evb-figure" style="margin:0;">
            <img src="/static/images/evocodebench/first_fail_distribution.png" alt="First failure distribution" />
            <div class="evb-figure-caption"><strong>First failure distribution.</strong> Lower-tier failures concentrate early; top-tier failures are spread deeper into trajectories.</div>
        </div>
        <div class="evb-figure" style="margin:0;">
            <img src="/static/images/evocodebench/failure_compact.png" alt="Failure mode summary" />
            <div class="evb-figure-caption"><strong>Failure modes.</strong> Regressions and stale behavior become visible only after agents build enough working functionality for later rounds to break or replace it.</div>
        </div>
    </div>

    <h3 style="font-size:1.05em; font-weight:700; margin:36px 0 10px; color:var(--evb-ink);">Failing Rounds Consume More Tokens</h3>
    <p class="evb-copy">
        At the same round index, failed trials usually produce more output tokens than passing trials. Across rounds 1-9, failing trials emit 1.1x to 3.1x as many generated tokens as passing trials at the same depth. This is a diagnostic association rather than a causal claim.
    </p>
    <div class="evb-figure">
        <img src="/static/images/evocodebench/within_round_tokens.png" alt="Within-round token usage" />
        <div class="evb-figure-caption">
            <strong>Within-round token usage.</strong> Higher effort often accompanies harder or degraded workspace states, but more output does not guarantee recovery.
        </div>
    </div>
</div>

<div class="evb-footer">
    Results updated: June 20, 2026 &nbsp;|&nbsp; <a href="https://unipat-ai.github.io/EvoCodeBench/" target="_blank">Interactive results</a> &nbsp;|&nbsp; <a href="mailto:contact@unipat.ai">Submit your model results</a>
</div>

</div>
