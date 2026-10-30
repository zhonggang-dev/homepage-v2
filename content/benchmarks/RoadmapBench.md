Title: RoadmapBench
Date: 2026-06-22
Rank: 🏆 Claude-Opus-4.7: 39.1%
Domain: Coding
Summary: 115 real-world version-upgrade tasks from 17 repositories across 5 programming languages. Evaluates whether coding agents can implement substantial new functionality guided only by a multi-target specification.
HeaderImage: /static/images/roadmapbench/rob.png

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

:root {
    --rm-font: 'Inter', -apple-system, sans-serif;
    --rm-mono: 'JetBrains Mono', monospace;
    --rm-ink: #0f172a;
    --rm-ink-soft: #334155;
    --rm-ink-muted: #64748b;
    --rm-surface: #ffffff;
    --rm-raised: #f8fafc;
    --rm-sunken: #f1f5f9;
    --rm-border: #e2e8f0;
    --rm-accent: #7c3aed;
    --rm-accent-light: #a78bfa;
    --rm-accent-bg: rgba(124,58,237,0.06);
    --rm-gold: #f59e0b;
    --rm-silver: #94a3b8;
    --rm-bronze: #d97706;
    --rm-radius: 12px;
    --rm-shadow: 0 4px 16px rgba(15,23,42,0.06);
}

.rm-hero { text-align: center; padding: 32px 0 20px; }
.rm-hero .subtitle { font-size: 1.05em; color: var(--rm-ink-muted); max-width: 720px; margin: 0 auto 20px; line-height: 1.7; }
.rm-links { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
.rm-link { display: inline-flex; align-items: center; gap: 6px; padding: 9px 18px; border: 1px solid var(--rm-border); border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none !important; transition: all .2s; }
.rm-link:hover { background: var(--rm-sunken); border-color: var(--rm-accent); }
.rm-link svg { width: 16px; height: 16px; }

.rm-stats { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin: 24px 0; }
.rm-stat { padding: 16px 10px; border: 1px solid var(--rm-border); border-radius: var(--rm-radius); text-align: center; }
.rm-stat-val { font-size: 1.7em; font-weight: 800; color: var(--rm-ink); }
.rm-stat-label { font-size: 10px; color: var(--rm-ink-muted); text-transform: uppercase; letter-spacing: .8px; margin-top: 2px; }

/* Bar chart */
.rm-chart { margin: 24px 0 20px; overflow: visible; }
.rm-chart-bars { display: flex; align-items: flex-end; justify-content: center; gap: 6px; height: 320px; min-width: 700px; border-bottom: 1px solid #e5e7eb; padding-bottom: 0; }
.rm-bar-col { display: flex; flex-direction: column; align-items: center; width: 62px; position: relative; }
.rm-bar-col:hover .rm-bar-body { filter: brightness(1.1); transform: scaleY(1.02); transform-origin: bottom; }
.rm-bar-col:hover .rm-bar-tooltip { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(-4px); }
.rm-bar-logo { width: 26px; height: 26px; object-fit: contain; margin-bottom: 4px; }
.rm-bar-body { border-radius: 4px 4px 0 0; width: 36px; transition: filter .15s, transform .15s; cursor: pointer; position: relative; }
.rm-bar-pct { position: absolute; top: 5px; left: 50%; transform: translateX(-50%); font-size: 10px; font-weight: 700; color: #fff; white-space: nowrap; }
.rm-bar-name { font-size: 10px; color: #374151; margin-top: 8px; text-align: center; line-height: 1.3; height: 28px; font-weight: 600; }
.rm-bar-tooltip { position: absolute; top: calc(100% + 28px); left: 50%; transform: translateX(-50%) translateY(0); background: rgba(15,23,42,0.95); color: #fff; padding: 8px 12px; border-radius: 8px; font-size: 11px; white-space: nowrap; opacity: 0; visibility: hidden; pointer-events: none; transition: all .15s; z-index: 50; line-height: 1.6; }
.rm-bar-tooltip::after { content:''; position:absolute; bottom:100%; left:50%; transform:translateX(-50%); border:5px solid transparent; border-bottom-color:rgba(15,23,42,0.95); }
.rm-chart-caption { text-align: center; margin-top: 10px; font-size: 11px; color: #9ca3af; }

/* Figure */
.rm-figure { margin: 36px 0; border-radius: var(--rm-radius); overflow: hidden; }
.rm-figure img { width: 100%; display: block; }
.rm-figure-caption { padding: 12px 16px; font-size: 12px; color: var(--rm-ink-muted); background: var(--rm-raised); border: 1px solid var(--rm-border); border-top: none; border-radius: 0 0 var(--rm-radius) var(--rm-radius); line-height: 1.6; }

/* Section */
.rm-section { margin: 44px 0; }
.rm-section-title { font-size: 1.25em; font-weight: 700; margin-bottom: 14px; color: var(--rm-ink); }

/* Scaffold badge */
.rm-scaffold-badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 14px; background: var(--rm-accent-bg); border: 1px solid rgba(124,58,237,0.15); border-radius: 8px; font-size: 0.9em; font-weight: 700; color: var(--rm-accent); margin-bottom: 12px; }

/* Metrics note */
.rm-metrics { font-size: 0.86em; color: var(--rm-ink-soft); line-height: 1.7; margin-bottom: 16px; padding: 12px 16px; background: var(--rm-raised); border-radius: 8px; border-left: 3px solid var(--rm-accent); }

/* Leaderboard */
.rm-table-wrap { overflow-x: auto; border: 1px solid var(--rm-border); border-radius: var(--rm-radius); margin-bottom: 24px; }
.rm-lb { width: 100%; border-collapse: collapse; font-size: 13px; }
.rm-lb thead { background: var(--rm-sunken); }
.rm-lb th { padding: 10px; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: .5px; color: var(--rm-ink-muted); border-bottom: 2px solid var(--rm-border); text-align: center; white-space: nowrap; }
.rm-lb th:nth-child(1) { width: 36px; }
.rm-lb th:nth-child(2) { text-align: left; min-width: 180px; }
.rm-lb th:nth-child(3) { padding-left: 16px; }
.rm-lb td { padding: 9px 10px; border-bottom: 1px solid var(--rm-border); text-align: center; }
.rm-lb td:nth-child(2) { text-align: left; padding-right: 20px; }
.rm-lb td:nth-child(3) { padding-left: 16px; }
.rm-lb tbody tr:hover { background: var(--rm-accent-bg); }
.rm-lb tbody tr:last-child td { border-bottom: none; }
.rm-rank { font-weight: 700; }
.rm-rank-1 { color: var(--rm-gold); }
.rm-rank-2 { color: var(--rm-silver); }
.rm-rank-3 { color: var(--rm-bronze); }
.rm-model-cell { display: flex; align-items: center; gap: 9px; }
.rm-model-logo { width: 22px; height: 22px; border-radius: 5px; object-fit: contain; }
.rm-model-name { font-weight: 600; }
.rm-model-org { font-size: 10px; color: var(--rm-ink-muted); }
.rm-bar-wrap { display: flex; align-items: center; gap: 6px; }
.rm-bar { width: 60px; height: 6px; background: var(--rm-border); border-radius: 3px; overflow: hidden; }
.rm-bar-fill { height: 100%; border-radius: 3px; background: var(--rm-accent); }
.rm-score { font-weight: 700; font-size: 12px; }
.rm-score-best { color: var(--rm-accent); }

/* Scaffold tabs */
.rm-tabs { display: flex; gap: 8px; margin-bottom: 16px; }
.rm-tab { padding: 8px 20px; font-size: 0.85em; font-weight: 600; color: var(--rm-ink-muted); cursor: pointer; border: 1px solid var(--rm-border); border-radius: 20px; transition: all .15s; user-select: none; }
.rm-tab:hover { color: var(--rm-accent); border-color: var(--rm-accent); }
.rm-tab.active { color: #fff; background: var(--rm-accent); border-color: var(--rm-accent); }
.rm-tab-panel { display: none; }
.rm-tab-panel.active { display: block; }

/* About */
.rm-about { margin: 36px 0; padding: 20px; background: var(--rm-raised); border-radius: var(--rm-radius); border: 1px solid var(--rm-border); }
.rm-about p { font-size: 0.9em; color: var(--rm-ink-soft); line-height: 1.7; margin-bottom: 12px; }
.rm-about p:last-child { margin-bottom: 0; }

.rm-footer { margin: 36px 0 16px; text-align: center; padding: 20px; border-top: 1px solid var(--rm-border); font-size: 12px; color: var(--rm-ink-muted); }

@media (max-width: 768px) {
    .rm-stats { grid-template-columns: repeat(3, 1fr); }
    .rm-lb { font-size: 11px; min-width: 600px; }
    .rm-chart-bars { min-width: 600px; }
}
@media (max-width: 480px) {
    .rm-stats { grid-template-columns: repeat(2, 1fr); }
}
</style>

<div class="rm-hero">
    <p class="subtitle">
        Can coding agents implement real version upgrades? RoadmapBench evaluates frontier models on 115 multi-target tasks spanning 17 open-source repositories and 5 programming languages.
    </p>
    <div class="rm-links">
        <a href="https://huggingface.co/datasets/UnipatAI/RoadmapBench" class="rm-link" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>Dataset</a>
        <a href="https://github.com/UniPat-AI/RoadmapBench" class="rm-link" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>GitHub</a>
        <a href="https://arxiv.org/pdf/2605.15846" class="rm-link" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>Paper</a>
    </div>
</div>

<div class="rm-stats">
    <div class="rm-stat"><div class="rm-stat-val">115</div><div class="rm-stat-label">Tasks</div></div>
    <div class="rm-stat"><div class="rm-stat-val">17</div><div class="rm-stat-label">Repositories</div></div>
    <div class="rm-stat"><div class="rm-stat-val">5</div><div class="rm-stat-label">Languages</div></div>
    <div class="rm-stat"><div class="rm-stat-val">~3.7K</div><div class="rm-stat-label">LOC / Oracle</div></div>
    <div class="rm-stat"><div class="rm-stat-val">12</div><div class="rm-stat-label">Models</div></div>
</div>

<!-- ═══ SECTION 1: LEADERBOARD ═══ -->
<div class="rm-section">
    <h2 class="rm-section-title">Leaderboard</h2>
    <p style="font-size:0.9em; color:var(--rm-ink-soft); line-height:1.6; margin-bottom:24px;">
        Below is the resolved rate across frontier models on the OpenHands scaffold. <strong>Resolved %</strong> measures the fraction of tasks where all targets pass (full reward). Hover over each bar for detailed metrics including completion score, average interaction turns, and token usage.
    </p>
    <div class="rm-chart">
        <div class="rm-chart-bars">
            <div class="rm-bar-col"><img class="rm-bar-logo" src="/static/images/roadmapbench/logos/claude.png"/><div class="rm-bar-body" style="height:234px; background:#D97757;"><span class="rm-bar-pct">39.1%</span></div><div class="rm-bar-name">Claude Opus 4.7</div><div class="rm-bar-tooltip">Completion Score: 0.692<br/>Avg Turns: 140<br/>Tokens: 44K</div></div>
            <div class="rm-bar-col"><img class="rm-bar-logo" src="/static/images/roadmapbench/logos/claude.png"/><div class="rm-bar-body" style="height:193px; background:#E8967C;"><span class="rm-bar-pct">32.2%</span></div><div class="rm-bar-name">Claude Opus 4.6</div><div class="rm-bar-tooltip">Completion Score: 0.627<br/>Avg Turns: 141<br/>Tokens: 42K</div></div>
            <div class="rm-bar-col"><img class="rm-bar-logo" src="/static/images/roadmapbench/logos/openai.png"/><div class="rm-bar-body" style="height:177px; background:#1A1A1A;"><span class="rm-bar-pct">29.6%</span></div><div class="rm-bar-name">GPT 5.4</div><div class="rm-bar-tooltip">Completion Score: 0.497<br/>Avg Turns: 171<br/>Tokens: 93K</div></div>
            <div class="rm-bar-col"><img class="rm-bar-logo" src="/static/images/roadmapbench/logos/gemini.png"/><div class="rm-bar-body" style="height:125px; background:#4285F4;"><span class="rm-bar-pct">20.9%</span></div><div class="rm-bar-name">Gemini 3.1 Pro</div><div class="rm-bar-tooltip">Completion Score: 0.439<br/>Avg Turns: 133<br/>Tokens: 26K</div></div>
            <div class="rm-bar-col"><img class="rm-bar-logo" src="/static/images/roadmapbench/logos/deepseek.png"/><div class="rm-bar-body" style="height:110px; background:#4D6BFE;"><span class="rm-bar-pct">18.3%</span></div><div class="rm-bar-name">DeepSeek V4 Pro</div><div class="rm-bar-tooltip">Completion Score: 0.486<br/>Avg Turns: 140<br/>Tokens: 64K</div></div>
            <div class="rm-bar-col"><img class="rm-bar-logo" src="/static/images/roadmapbench/logos/glm_true.png"/><div class="rm-bar-body" style="height:110px; background:#1D4ED8;"><span class="rm-bar-pct">18.3%</span></div><div class="rm-bar-name">GLM 5.1</div><div class="rm-bar-tooltip">Completion Score: 0.453<br/>Avg Turns: 163<br/>Tokens: 38K</div></div>
            <div class="rm-bar-col"><img class="rm-bar-logo" src="/static/images/roadmapbench/logos/kimi.png"/><div class="rm-bar-body" style="height:89px; background:#333333;"><span class="rm-bar-pct">14.8%</span></div><div class="rm-bar-name">Kimi K2.6</div><div class="rm-bar-tooltip">Completion Score: 0.432<br/>Avg Turns: 159<br/>Tokens: 76K</div></div>
            <div class="rm-bar-col"><img class="rm-bar-logo" src="/static/images/roadmapbench/logos/xiaomi.png"/><div class="rm-bar-body" style="height:83px; background:#FF6A00;"><span class="rm-bar-pct">13.9%</span></div><div class="rm-bar-name">Mimo V2.5 Pro</div><div class="rm-bar-tooltip">Completion Score: 0.440<br/>Avg Turns: 156<br/>Tokens: 66K</div></div>
            <div class="rm-bar-col"><img class="rm-bar-logo" src="/static/images/roadmapbench/logos/qwen.png"/><div class="rm-bar-body" style="height:73px; background:#7C3AED;"><span class="rm-bar-pct">12.2%</span></div><div class="rm-bar-name">Qwen 3.6 Plus</div><div class="rm-bar-tooltip">Completion Score: 0.424<br/>Avg Turns: 150<br/>Tokens: 47K</div></div>
            <div class="rm-bar-col"><img class="rm-bar-logo" src="/static/images/roadmapbench/logos/kimi.png"/><div class="rm-bar-body" style="height:68px; background:#555555;"><span class="rm-bar-pct">11.3%</span></div><div class="rm-bar-name">Kimi K2.5</div><div class="rm-bar-tooltip">Completion Score: 0.378<br/>Avg Turns: 110<br/>Tokens: 29K</div></div>
            <div class="rm-bar-col"><img class="rm-bar-logo" src="/static/images/roadmapbench/logos/minimax.png"/><div class="rm-bar-body" style="height:62px; background:#E84142;"><span class="rm-bar-pct">10.4%</span></div><div class="rm-bar-name">MiniMax M2.7</div><div class="rm-bar-tooltip">Completion Score: 0.332<br/>Avg Turns: 124<br/>Tokens: 38K</div></div>
            <div class="rm-bar-col"><img class="rm-bar-logo" src="/static/images/roadmapbench/logos/qwen.png"/><div class="rm-bar-body" style="height:57px; background:#7C3AED;"><span class="rm-bar-pct">9.6%</span></div><div class="rm-bar-name">Qwen 3.5 397B</div><div class="rm-bar-tooltip">Completion Score: 0.383<br/>Avg Turns: 111<br/>Tokens: 35K</div></div>
        </div>
        <div class="rm-chart-caption">Resolved Rate (%) &mdash; OpenHands scaffold &mdash; single trial per model</div>
    </div>
</div>

<!-- ═══ SECTION 2: DETAILED TABLE ═══ -->
<div class="rm-section">
    <h2 class="rm-section-title">Full Results</h2>
    <div class="rm-metrics">
        <strong>Metrics.</strong> For task <em>t</em> with <em>K</em> subtasks, each carrying a weight reflecting its complexity, the per-task reward is the weighted fraction of passed subtasks. <strong>Resolved Rate</strong> is the fraction of tasks with full reward (all subtasks pass). <strong>Completion Score</strong> averages the per-task reward across all tasks, crediting partial progress. We also report average agent turns and median output tokens per task. Single trial per model.
    </div>

    <div id="rm-panel-oh">
    <div class="rm-table-wrap">
    <table class="rm-lb">
        <thead><tr><th>#</th><th>Model</th><th>Scaffold</th><th>Resolved %</th><th>Completion Score</th><th>Turns</th><th>Tok.</th></tr></thead>
        <tbody>
            <tr><td class="rm-rank rm-rank-1">1</td><td><div class="rm-model-cell"><img class="rm-model-logo" src="/static/images/roadmapbench/logos/claude.png"/><div><div class="rm-model-name">Claude-Opus-4.7</div><div class="rm-model-org">Anthropic</div></div></div></td><td>OpenHands</td><td><div class="rm-bar-wrap"><div class="rm-bar"><div class="rm-bar-fill" style="width:100%"></div></div><span class="rm-score rm-score-best">39.1</span></div></td><td>0.692</td><td>140</td><td>44K</td></tr>
            <tr><td class="rm-rank rm-rank-2">2</td><td><div class="rm-model-cell"><img class="rm-model-logo" src="/static/images/roadmapbench/logos/claude.png"/><div><div class="rm-model-name">Claude-Opus-4.6</div><div class="rm-model-org">Anthropic</div></div></div></td><td>OpenHands</td><td><div class="rm-bar-wrap"><div class="rm-bar"><div class="rm-bar-fill" style="width:82%"></div></div><span class="rm-score">32.2</span></div></td><td>0.627</td><td>141</td><td>42K</td></tr>
            <tr><td class="rm-rank rm-rank-3">3</td><td><div class="rm-model-cell"><img class="rm-model-logo" src="/static/images/roadmapbench/logos/openai.png"/><div><div class="rm-model-name">GPT-5.4</div><div class="rm-model-org">OpenAI</div></div></div></td><td>OpenHands</td><td><div class="rm-bar-wrap"><div class="rm-bar"><div class="rm-bar-fill" style="width:76%"></div></div><span class="rm-score">29.6</span></div></td><td>0.497</td><td>171</td><td>93K</td></tr>
            <tr><td class="rm-rank">4</td><td><div class="rm-model-cell"><img class="rm-model-logo" src="/static/images/roadmapbench/logos/gemini.png"/><div><div class="rm-model-name">Gemini-3.1-Pro</div><div class="rm-model-org">Google</div></div></div></td><td>OpenHands</td><td><div class="rm-bar-wrap"><div class="rm-bar"><div class="rm-bar-fill" style="width:53%"></div></div><span class="rm-score">20.9</span></div></td><td>0.439</td><td>133</td><td>26K</td></tr>
            <tr><td class="rm-rank">5</td><td><div class="rm-model-cell"><img class="rm-model-logo" src="/static/images/roadmapbench/logos/deepseek.png"/><div><div class="rm-model-name">DeepSeek-V4-Pro</div><div class="rm-model-org">DeepSeek</div></div></div></td><td>OpenHands</td><td><div class="rm-bar-wrap"><div class="rm-bar"><div class="rm-bar-fill" style="width:47%"></div></div><span class="rm-score">18.3</span></div></td><td>0.486</td><td>140</td><td>64K</td></tr>
            <tr><td class="rm-rank">5</td><td><div class="rm-model-cell"><img class="rm-model-logo" src="/static/images/roadmapbench/logos/glm_true.png"/><div><div class="rm-model-name">GLM-5.1</div><div class="rm-model-org">Zhipu AI</div></div></div></td><td>OpenHands</td><td><div class="rm-bar-wrap"><div class="rm-bar"><div class="rm-bar-fill" style="width:47%"></div></div><span class="rm-score">18.3</span></div></td><td>0.453</td><td>163</td><td>38K</td></tr>
            <tr><td class="rm-rank">7</td><td><div class="rm-model-cell"><img class="rm-model-logo" src="/static/images/roadmapbench/logos/kimi.png"/><div><div class="rm-model-name">Kimi-K2.6</div><div class="rm-model-org">Moonshot AI</div></div></div></td><td>OpenHands</td><td><div class="rm-bar-wrap"><div class="rm-bar"><div class="rm-bar-fill" style="width:38%"></div></div><span class="rm-score">14.8</span></div></td><td>0.432</td><td>159</td><td>76K</td></tr>
            <tr><td class="rm-rank">8</td><td><div class="rm-model-cell"><img class="rm-model-logo" src="/static/images/roadmapbench/logos/xiaomi.png"/><div><div class="rm-model-name">Mimo-V2.5-Pro</div><div class="rm-model-org">Xiaomi</div></div></div></td><td>OpenHands</td><td><div class="rm-bar-wrap"><div class="rm-bar"><div class="rm-bar-fill" style="width:36%"></div></div><span class="rm-score">13.9</span></div></td><td>0.440</td><td>156</td><td>66K</td></tr>
            <tr><td class="rm-rank">9</td><td><div class="rm-model-cell"><img class="rm-model-logo" src="/static/images/roadmapbench/logos/qwen.png"/><div><div class="rm-model-name">Qwen3.6-Plus</div><div class="rm-model-org">Alibaba</div></div></div></td><td>OpenHands</td><td><div class="rm-bar-wrap"><div class="rm-bar"><div class="rm-bar-fill" style="width:31%"></div></div><span class="rm-score">12.2</span></div></td><td>0.424</td><td>150</td><td>47K</td></tr>
            <tr><td class="rm-rank">10</td><td><div class="rm-model-cell"><img class="rm-model-logo" src="/static/images/roadmapbench/logos/kimi.png"/><div><div class="rm-model-name">Kimi-K2.5</div><div class="rm-model-org">Moonshot AI</div></div></div></td><td>OpenHands</td><td><div class="rm-bar-wrap"><div class="rm-bar"><div class="rm-bar-fill" style="width:29%"></div></div><span class="rm-score">11.3</span></div></td><td>0.378</td><td>110</td><td>29K</td></tr>
            <tr><td class="rm-rank">11</td><td><div class="rm-model-cell"><img class="rm-model-logo" src="/static/images/roadmapbench/logos/minimax.png"/><div><div class="rm-model-name">MiniMax-M2.7</div><div class="rm-model-org">MiniMax</div></div></div></td><td>OpenHands</td><td><div class="rm-bar-wrap"><div class="rm-bar"><div class="rm-bar-fill" style="width:27%"></div></div><span class="rm-score">10.4</span></div></td><td>0.332</td><td>124</td><td>38K</td></tr>
            <tr><td class="rm-rank">12</td><td><div class="rm-model-cell"><img class="rm-model-logo" src="/static/images/roadmapbench/logos/qwen.png"/><div><div class="rm-model-name">Qwen3.5-397B</div><div class="rm-model-org">Alibaba</div></div></div></td><td>OpenHands</td><td><div class="rm-bar-wrap"><div class="rm-bar"><div class="rm-bar-fill" style="width:25%"></div></div><span class="rm-score">9.6</span></div></td><td>0.383</td><td>111</td><td>35K</td></tr>
        </tbody>
    </table>
    </div>
    </div>
</div>

<!-- ═══ TASK OVERVIEW ═══ -->
<div class="rm-section">
    <h2 class="rm-section-title">How It Works</h2>
    <p style="font-size:0.9em; color:var(--rm-ink-soft); line-height:1.7; margin-bottom:20px;">
        The agent receives a source-version repository snapshot and a multi-target instruction, then implements the specified functionality inside a pinned Docker environment. Evaluation is performed via weighted subtask-level tests against behaviors introduced in the target version.
    </p>
    <div class="rm-figure">
        <img src="/static/images/roadmapbench/task_overview.png" alt="Overview of a RoadmapBench task" />
        <div class="rm-figure-caption">
            <strong>Overview of a RoadmapBench task.</strong> The agent operates in a Docker environment with the repository pinned at the source version. It receives a multi-target specification describing what to implement. Tests adapted from the upstream test suite verify each target independently.
        </div>
    </div>
</div>

<!-- ═══ SECTION 3: DATASET OVERVIEW ═══ -->
<div class="rm-section">
    <h2 class="rm-section-title">Dataset Overview</h2>
    <p style="font-size:0.9em; color:var(--rm-ink-soft); line-height:1.7; margin-bottom:20px;">
        RoadmapBench covers 17 open-source repositories across 5 programming languages, organized into 5 domain groups. Oracle patches range from under 300 to over 30,000 lines changed, with a median of approximately 3,700 lines and 51 files touched per task.
    </p>
    <div class="rm-figure">
        <img src="/static/images/roadmapbench/overview.png" alt="Dataset Overview" />
        <div class="rm-figure-caption">
            <strong>(a)</strong> Task count per repository (outer ring) grouped by domain (inner ring): ML & Data (36), Web & RPC (17), ORM & Val (25), Infra & Tool (23), UI & Ren (14).
            <strong>(b)</strong> Distribution of oracle patch size (LOC) per repository. Dashed line marks median of 3,714 LOC.
        </div>
    </div>
</div>

<!-- ═══ SECTION 4: ANALYSIS ═══ -->
<div class="rm-section">
    <h2 class="rm-section-title">Analysis</h2>

    <h3 style="font-size:1.05em; font-weight:600; margin:28px 0 10px; color:var(--rm-ink);">Step Efficiency & Compute Scaling</h3>
    <p style="font-size:0.9em; color:var(--rm-ink-soft); line-height:1.7; margin-bottom:20px;">
        Frontier models (Claude-4.7, GPT-5.4) achieve 30&ndash;39% resolved with moderate step budgets. By contrast, models like GLM-5.1 and Kimi-K2.6 consume comparable or larger budgets but remain near mid-performance, indicating lower step efficiency. Most models plateau within 200 steps; Claude-4.7 is the main exception, continuing to improve beyond that threshold.
    </p>
    <div class="rm-figure">
        <img src="/static/images/roadmapbench/efficiency.png" alt="Efficiency Analysis" />
        <div class="rm-figure-caption">
            <strong>(a) Efficiency Landscape:</strong> Resolved rate vs. average agent steps. Dashed lines mark fleet averages (134 steps, 18%).
            <strong>(b) Step Budget Ablation:</strong> Cumulative resolved rate as step budget increases.
        </div>
    </div>

    <h3 style="font-size:1.05em; font-weight:600; margin:36px 0 10px; color:var(--rm-ink);">Tool Composition & Usage</h3>
    <p style="font-size:0.9em; color:var(--rm-ink-soft); line-height:1.7; margin-bottom:20px;">
        Across all models, Explore, Edit, and Execute dominate tool usage. The key differentiator is allocation: Claude-4.7 achieves the highest resolved rate with the lowest Explore ratio (35%), indicating more efficient code localization. Weaker models spend over half their budget on exploration without translating it into successful edits.
    </p>
    <div class="rm-figure">
        <img src="/static/images/roadmapbench/tool_analysis.png" alt="Tool Usage Analysis" />
        <div class="rm-figure-caption">
            <strong>(a)</strong> Tool composition per model (6 intent categories). Models sorted by resolved rate.
            <strong>(b)</strong> Per-task tool call distributions for three representative models spanning the full performance range.
        </div>
    </div>

    <h3 style="font-size:1.05em; font-weight:600; margin:36px 0 10px; color:var(--rm-ink);">Failure Mode Analysis</h3>
    <p style="font-size:0.9em; color:var(--rm-ink-soft); line-height:1.7; margin-bottom:20px;">
        As model capability decreases, the dominant failure mode shifts from Implementation Error (incorrect behavior in buildable code) to Build Error and Missing Implementation (incomplete or non-compiling code). For Claude-Opus-4.6, 58% of failures are Implementation Errors, dominated by code defects and requirement misinterpretation. For weaker models, Build Error and Missing Implementation account for over 70% of failures.
    </p>
    <div class="rm-figure">
        <img src="/static/images/roadmapbench/error_analysis.png" alt="Error Distribution" />
        <div class="rm-figure-caption">
            <strong>Error distribution for three representative models.</strong> Inner ring: category proportions. Outer ring: sub-type breakdowns. Failure mode shifts from (a) implementation correctness to (c) code construction as capability decreases.
        </div>
    </div>
</div>

<!-- ═══ ABOUT & FOOTER ═══ -->
<div class="rm-about">
    <h3 style="margin-bottom:10px; font-size:1em;">About RoadmapBench</h3>
    <p>Each task provides a repository pinned at an earlier release and a multi-target specification describing features from the target version. The agent implements these features without access to the target source code, test files, or oracle patch. Tests are adapted from official upstream test suites.</p>
    <p>Quality assurance uses attribution-driven failure classification (T-type vs M-type). Only tasks where all task-side defects are resolved are admitted, ensuring remaining failures reflect genuine model limitations.</p>
</div>

<div class="rm-footer">
    Last updated: May 8, 2026 &nbsp;|&nbsp; <a href="mailto:contact@unipat.ai">Submit your model results</a>
</div>
