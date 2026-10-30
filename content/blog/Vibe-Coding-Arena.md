Title: Introducing Vibe-Coding Arena
Date: 2026-07-25
Summary: Most existing agent benchmarks evaluate only the outcome of a single execution—whether the final result passes or fails, but this fundamentally differs from how people actually use coding agents. Vibe coding is iterative and human-in-the-loop: users inspect intermediate results, refine requirements, correct mistakes, and steer agents across multiple rounds. We introduce Vibe-Coding Arena, an evaluation system that captures this process by having humans build alongside agents and conduct fine-grained evaluations of their behavior throughout the interaction.
HeaderImage: /static/images/Vibe-Coding-Arena/hero.jpg

<style>
:root { --vca-ink:#1a1a1a; --vca-soft:#555; --vca-line:#e2e2e2; --vca-accent:#0F766E; --vca-accent-l:#CCFBF1; --vca-blue:#1565C0; --vca-warn:#B45309; --vca-bg:#fafafa; --vca-r:6px; }
.markdown:has(.vca-hero){ max-width:100%; }
@media (max-width:820px){ .markdown:has(.vca-hero){ width:100%; } }
.vca-hero{ text-align:center; padding:8px 0 22px; margin-bottom:22px; border-bottom:3px solid var(--vca-ink); }
.vca-hero .subtitle{ max-width:820px; margin:0 auto 16px; font-size:1.06em; line-height:1.75; color:var(--vca-soft); text-align:left; }
.vca-chips{ display:flex; justify-content:center; align-items:center; gap:12px; flex-wrap:wrap; margin:22px 0 4px; font-weight:600; }
.vca-chips .chip{ background:var(--vca-bg); border:1px solid var(--vca-line); border-radius:var(--vca-r); padding:10px 14px; text-align:center; }
.vca-chips .chip small{ font-weight:400; }
.vca-section{ margin:44px 0; }
.vca-kicker{ font-size:0.8em; letter-spacing:.09em; text-transform:uppercase; color:var(--vca-accent); font-weight:700; margin-bottom:4px; }
.vca-title{ font-size:1.5em; font-weight:700; border-left:4px solid var(--vca-accent); padding-left:12px; margin-bottom:6px; }
.vca-sub{ font-size:1.12em; font-weight:650; margin:30px 0 8px; color:var(--vca-ink); border-top:1px solid var(--vca-line); padding-top:18px; }
.vca-note{ font-size:0.96em; color:#333; line-height:1.78; margin-bottom:16px; }
.vca-def{ background:var(--vca-bg); border:1px solid var(--vca-line); border-left:3px solid var(--vca-blue); border-radius:var(--vca-r); padding:12px 16px; font-size:0.9em; line-height:1.7; color:#333; margin:16px 0; }
.vca-def b{ color:var(--vca-blue); }
.vca-callout{ background:var(--vca-accent-l); border-radius:var(--vca-r); padding:15px 18px; font-size:0.94em; line-height:1.78; margin:20px 0; }
.vca-caveat{ border:1px dashed var(--vca-line); border-radius:var(--vca-r); padding:10px 14px; font-size:0.85em; line-height:1.65; color:var(--vca-soft); margin:14px 0; }
.vca-card{ border:1px solid var(--vca-line); border-radius:var(--vca-r); padding:16px 18px; background:#fff; margin:18px 0; }
.vca-card h4{ margin:0 0 8px; font-size:1em; }
.vca-tbl{ width:100%; border-collapse:collapse; font-size:0.9em; margin:16px 0; }
.vca-tbl th,.vca-tbl td{ padding:8px 10px; border-bottom:1px solid var(--vca-line); text-align:left; }
.vca-tbl th{ color:var(--vca-soft); font-weight:600; }
.vca-matrix th:not(:first-child), .vca-matrix td:not(:first-child){ text-align:center; }
.vca-matrix td.gd{ background:#dcfce7; color:#15803d; font-weight:700; }
.vca-matrix td.nt{ background:#f1f5f9; color:#64748b; }
.vca-matrix td.bd{ background:#fee2e2; color:#dc2626; font-weight:700; }
.vca-bars{ margin:18px 0 6px; }
.vca-bar{ display:flex; align-items:center; gap:12px; margin:9px 0; }
.vca-bar .lbl{ width:34px; text-align:right; font-weight:700; font-size:0.95em; color:var(--vca-ink); flex-shrink:0; }
.vca-bar .lbl small{ display:block; font-weight:400; font-size:0.7em; color:var(--vca-soft); }
.vca-bar .track{ flex:1; background:var(--vca-bg); border:1px solid var(--vca-line); border-radius:var(--vca-r); height:32px; overflow:hidden; }
.vca-bar .fill{ display:flex; align-items:center; justify-content:flex-end; height:100%; color:#fff; font-weight:700; font-size:0.86em; padding-right:10px; box-sizing:border-box; white-space:nowrap; }
.vca-bar .rk{ width:20px; text-align:center; font-weight:700; font-size:0.8em; color:var(--vca-soft); flex-shrink:0; }
.vca-fig{ border:1px solid var(--vca-line); border-radius:var(--vca-r); background:#fff; padding:16px 16px 12px; margin:22px 0; }
.vca-figcap{ font-size:0.8em; color:var(--vca-soft); line-height:1.6; margin-top:12px; text-align:center; }
.vca-lyr{ flex:1; min-width:150px; border:1px solid var(--vca-line); border-top:3px solid var(--vca-accent); border-radius:var(--vca-r); padding:10px 12px; background:var(--vca-bg); }
.vca-lyr h5{ margin:0 0 5px; font-size:0.86em; color:var(--vca-ink); }
.vca-lyr p{ margin:0; font-size:0.76em; color:var(--vca-soft); line-height:1.55; }
.markdown code{ background:#eef2f6; color:var(--vca-ink); border:1px solid var(--vca-line); border-radius:4px; padding:1px 5px; font-size:0.9em; white-space:nowrap; }
.markdown pre code{ background:transparent; border:0; padding:0; }
.vca-vgrid{ display:grid; grid-template-columns:repeat(5,1fr); gap:8px; margin:4px 0 14px; }
.vca-vgrid > span{ border:1px solid var(--vca-line); border-top:2px solid #1565C0; border-radius:var(--vca-r); background:#fff; padding:8px 6px; text-align:center; font-size:0.8em; color:#333; font-weight:500; }
.vca-vgrid.tech > span{ border-top-color:#7c3aed; }
.vca-vgrid.dom > span{ border-top-color:#15803d; }
@media (max-width:600px){ .vca-vgrid{ grid-template-columns:repeat(3,1fr); } }
/* ── Floating TOC ── */
.vca-toc{ position:fixed; right:10px; top:120px; width:216px; max-width:216px; min-width:172px; max-height:calc(100vh - 160px); overflow-y:auto; padding:18px 18px 16px; background:#fff; border:1px solid var(--vca-line); border-radius:var(--vca-r); box-shadow:0 4px 18px rgba(0,0,0,0.07); z-index:100; transition:width .3s ease, right .3s ease, padding .3s ease; font-family:'Space Mono',monospace; }
.vca-toc::-webkit-scrollbar{ width:4px; }
.vca-toc::-webkit-scrollbar-track{ background:transparent; }
.vca-toc::-webkit-scrollbar-thumb{ background:var(--vca-line); border-radius:2px; }
.vca-toc-toggle{ display:flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:var(--vca-r); background:var(--vca-bg); border:1px solid var(--vca-line); cursor:pointer; margin-bottom:14px; }
.vca-toc-toggle:hover{ background:#f0f0f0; }
.vca-toc-toggle svg{ width:16px; height:16px; color:var(--vca-soft); transition:transform .3s; }
.vca-toc-title{ font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:var(--vca-soft); margin-bottom:14px; font-weight:700; }
.vca-toc-progress{ height:3px; background:var(--vca-line); border-radius:2px; margin-bottom:16px; overflow:hidden; }
.vca-toc-progress-bar{ height:100%; background:var(--vca-accent); width:0%; transition:width .1s; border-radius:2px; }
.vca-toc-list{ list-style:none; padding:0; margin:0; }
.vca-toc-item{ margin-bottom:6px; }
.vca-toc-link{ display:block; padding:8px 12px; color:var(--vca-soft); text-decoration:none !important; border-radius:var(--vca-r); border-left:2px solid transparent; line-height:1.45; font-size:13px; transition:background .15s,color .15s,border-color .15s; }
.vca-toc-link:hover, .vca-toc-link.active{ background:var(--vca-accent-l); color:var(--vca-ink); border-left-color:var(--vca-accent); font-weight:600; }
.vca-toc.collapsed{ width:40px; padding:12px; overflow:hidden; }
.vca-toc.collapsed .vca-toc-title, .vca-toc.collapsed .vca-toc-progress, .vca-toc.collapsed .vca-toc-list{ display:none; }
.vca-toc.collapsed .vca-toc-toggle{ margin-bottom:0; }
.vca-toc.collapsed .vca-toc-toggle svg{ transform:rotate(180deg); }
@media (max-width:1024px){ .vca-toc{ display:none; } }
</style>

<div class="vca-hero">
  <p class="subtitle">
    Agents now build and debug real software over many steps, with a person watching and steering. But most benchmarks judge only one thing, whether the final result passed, and miss two that decide whether an agent is actually good at this work. First, its <b>process</b>: <em>how</em> it got there, whether it planned, verified its own work, recovered from its mistakes, and reported honestly, rather than just whether the end state matched. Second, its <b>interactivity</b>: real work is a back-and-forth, where a person points out a specific flaw and hands it back, round after round, and the agent has to act on exactly that. A done-once, pass/fail test sees neither.
  </p>
  <p class="subtitle">
    <b>Vibe-Coding Arena</b> is built for exactly that setting. A human expert collaborates with the agent on a long-horizon build, supplies corrective feedback across successive rounds, and grades the development process at each step (how it recovers, how it verifies, whether it reports honestly) rather than a final pass/fail. It spans <b>~640 multi-round tasks across 13 programming languages</b>, each modeled on a real product.
  </p>
  <div class="vca-chips">
    <span class="chip">Process-awareness<br><small>outcome → full process</small></span>
    <span class="chip">Interactivity<br><small>done-once → feedback in the loop</small></span>
  </div>
  <p class="subtitle" style="font-size:0.92em; margin-top:10px;">Because the arena scores process rather than just completion, it surfaces differences a pass/fail benchmark hides: four models can all deliver the same working result and still earn very different grades, because the process is where they diverge.</p>
  <div style="max-width:700px; margin:22px auto 4px">
<div style="display:flex; align-items:stretch; gap:8px; justify-content:center; flex-wrap:wrap; text-align:left">
<div style="flex:1; min-width:150px; border:1px solid var(--vca-line); border-top:3px solid var(--vca-blue); border-radius:var(--vca-r); background:#fff; padding:10px 12px"><div style="font-weight:700; font-size:0.82em; color:var(--vca-blue)">Human</div><div style="font-size:0.78em; color:var(--vca-soft); line-height:1.45">gives the round: a new feature, or points at a specific defect</div></div>
<div style="display:flex; align-items:center; color:var(--vca-soft); font-size:1.2em; font-weight:700">→</div>
<div style="flex:1; min-width:150px; border:1px solid var(--vca-line); border-top:3px solid var(--vca-accent); border-radius:var(--vca-r); background:#fff; padding:10px 12px"><div style="font-weight:700; font-size:0.82em; color:var(--vca-accent)">Agent</div><div style="font-size:0.78em; color:var(--vca-soft); line-height:1.45">builds or fixes, within this round</div></div>
<div style="display:flex; align-items:center; color:var(--vca-soft); font-size:1.2em; font-weight:700">→</div>
<div style="flex:1; min-width:150px; border:1px solid var(--vca-line); border-top:3px solid var(--vca-warn); border-radius:var(--vca-r); background:#fff; padding:10px 12px"><div style="font-weight:700; font-size:0.82em; color:var(--vca-warn)">Grade the process</div><div style="font-size:0.78em; color:var(--vca-soft); line-height:1.45">did it recover, verify, report honestly?</div></div>
</div>
<div style="text-align:center; font-size:0.8em; color:var(--vca-soft); margin-top:10px">↻&nbsp; repeated round by round (~10+ rounds), and the grade is the whole trajectory, not the final app</div>
  </div>
</div>

<div style="margin:26px 0 0; padding:14px 20px; background:var(--vca-accent-l); border:1px solid #99e6dd; border-radius:var(--vca-r); font-size:0.95em; line-height:1.7; color:#0f5b52; text-align:center"><b>Vibe-Coding Arena is available as a recurring subscription service.</b> Contact us at <a href="mailto:contact@unipat.ai" style="color:#0f766e; font-weight:700; text-decoration:underline">contact@unipat.ai</a> for pricing and evaluating your agents.</div>

<!-- ═══════════════ RESULTS AT A GLANCE ═══════════════ -->
<div class="vca-section" id="vca-results">
  <div class="vca-kicker">results at a glance</div>
  <h2 class="vca-title">The benchmark ranking doesn't hold up</h2>

  <p class="vca-note">
    We graded four frontier models, kept anonymous as A–D, on the same 14 tasks. The headline: <b>an outcome benchmark and the process grade disagree.</b> A model can look competitive on a standard benchmark and still come out the weakest once you grade how it actually works, a gap a pass/fail score can't see.
  </p>

  <div class="vca-fig">
<div style="font-weight:700;font-size:0.82em;text-align:center;margin-bottom:2px;color:var(--vca-ink)">Outcome ranking vs. process ranking</div>
<div style="max-width:470px; margin:12px auto 4px">
<div style="margin-bottom:13px">
<div style="font-weight:700; font-size:0.8em; color:var(--vca-ink); margin-bottom:4px">SWE-bench Pro <span style="font-weight:400; color:var(--vca-soft)">· outcome</span></div>
<div style="display:flex; align-items:center; gap:8px; margin:4px 0"><span style="width:16px; text-align:right; font-weight:700; font-size:0.78em; color:#94a3b8">A</span><span style="flex:1; background:var(--vca-bg); border:1px solid var(--vca-line); border-radius:4px; height:20px; overflow:hidden"><span style="display:flex; align-items:center; justify-content:flex-end; height:100%; width:69%; background:#94a3b8; color:#fff; font-size:0.7em; font-weight:600; padding-right:7px; box-sizing:border-box">69%</span></span></div>
<div style="display:flex; align-items:center; gap:8px; margin:4px 0"><span style="width:16px; text-align:right; font-weight:700; font-size:0.78em; color:#94a3b8">D</span><span style="flex:1; background:var(--vca-bg); border:1px solid var(--vca-line); border-radius:4px; height:20px; overflow:hidden"><span style="display:flex; align-items:center; justify-content:flex-end; height:100%; width:62%; background:#94a3b8; color:#fff; font-size:0.7em; font-weight:600; padding-right:7px; box-sizing:border-box">62%</span></span></div>
<div style="display:flex; align-items:center; gap:8px; margin:4px 0"><span style="width:16px; text-align:right; font-weight:700; font-size:0.78em; color:#dc2626">C</span><span style="flex:1; background:var(--vca-bg); border:1px solid var(--vca-line); border-radius:4px; height:20px; overflow:hidden"><span style="display:flex; align-items:center; justify-content:flex-end; height:100%; width:61%; background:#dc2626; color:#fff; font-size:0.7em; font-weight:600; padding-right:7px; box-sizing:border-box">61%</span></span></div>
<div style="display:flex; align-items:center; gap:8px; margin:4px 0"><span style="width:16px; text-align:right; font-weight:700; font-size:0.78em; color:#94a3b8">B</span><span style="flex:1; background:var(--vca-bg); border:1px solid var(--vca-line); border-radius:4px; height:20px; overflow:hidden"><span style="display:flex; align-items:center; justify-content:flex-end; height:100%; width:52%; background:#94a3b8; color:#fff; font-size:0.7em; font-weight:600; padding-right:7px; box-sizing:border-box">52%</span></span></div>
</div>
<div>
<div style="font-weight:700; font-size:0.8em; color:var(--vca-ink); margin-bottom:4px">Vibe-Coding Arena <span style="font-weight:400; color:var(--vca-soft)">· process · /5</span></div>
<div style="display:flex; align-items:center; gap:8px; margin:4px 0"><span style="width:16px; text-align:right; font-weight:700; font-size:0.78em; color:#94a3b8">A</span><span style="flex:1; background:var(--vca-bg); border:1px solid var(--vca-line); border-radius:4px; height:20px; overflow:hidden"><span style="display:flex; align-items:center; justify-content:flex-end; height:100%; width:84%; background:#94a3b8; color:#fff; font-size:0.7em; font-weight:600; padding-right:7px; box-sizing:border-box">4.21</span></span></div>
<div style="display:flex; align-items:center; gap:8px; margin:4px 0"><span style="width:16px; text-align:right; font-weight:700; font-size:0.78em; color:#94a3b8">D</span><span style="flex:1; background:var(--vca-bg); border:1px solid var(--vca-line); border-radius:4px; height:20px; overflow:hidden"><span style="display:flex; align-items:center; justify-content:flex-end; height:100%; width:71%; background:#94a3b8; color:#fff; font-size:0.7em; font-weight:600; padding-right:7px; box-sizing:border-box">3.57</span></span></div>
<div style="display:flex; align-items:center; gap:8px; margin:4px 0"><span style="width:16px; text-align:right; font-weight:700; font-size:0.78em; color:#94a3b8">B</span><span style="flex:1; background:var(--vca-bg); border:1px solid var(--vca-line); border-radius:4px; height:20px; overflow:hidden"><span style="display:flex; align-items:center; justify-content:flex-end; height:100%; width:59%; background:#94a3b8; color:#fff; font-size:0.7em; font-weight:600; padding-right:7px; box-sizing:border-box">2.93</span></span></div>
<div style="display:flex; align-items:center; gap:8px; margin:4px 0"><span style="width:16px; text-align:right; font-weight:700; font-size:0.78em; color:#dc2626">C</span><span style="flex:1; background:var(--vca-bg); border:1px solid var(--vca-line); border-radius:4px; height:20px; overflow:hidden"><span style="display:flex; align-items:center; justify-content:flex-end; height:100%; width:36%; background:#dc2626; color:#fff; font-size:0.7em; font-weight:600; padding-right:7px; box-sizing:border-box">1.79</span></span></div>
</div>
</div>
<div class="vca-figcap">Look at <span style="color:#dc2626;font-weight:600">C</span>. On SWE-bench Pro it is competitive: essentially tied with D, and above B. The arena sends it to the bottom: <b>1.79</b>, far below D (3.57) and below B too, because its process is the weakest of the four, with the shakiest planning, verification, and recovery, even though it reaches the same answer. An outcome score says C is fine; the process grade says it is not. That gap, solid by results but weak in how it works, is exactly what the arena is built to catch, and the worked example below shows how.</div>
  </div>

  <details style="margin:8px 0 0">
    <summary style="cursor:pointer; color:var(--vca-accent); font-weight:600; font-size:0.92em">Per-task scores (all 14)</summary>
    <table class="vca-tbl" style="margin-top:10px">
      <thead><tr><th>task</th><th>what it builds</th><th>A</th><th>B</th><th>C</th><th>D</th></tr></thead>
      <tbody>
        <tr><td>btop-style system monitor (TUI)</td><td>Live terminal dashboard of CPU / memory / processes, with per-core graphs and a sortable process list</td><td>3</td><td>3</td><td>2</td><td>4</td></tr>
        <tr><td>Aseprite-style pixel / animation editor</td><td>Frame-by-frame sprite editor with layers, a color palette, and animation preview</td><td>3</td><td>3</td><td>2</td><td>3</td></tr>
        <tr><td>lazygit-style git TUI</td><td>Keyboard-driven terminal UI for staging, committing, branching, and viewing diffs</td><td>5</td><td>3</td><td>2</td><td>4</td></tr>
        <tr><td>Procreate-style drawing app (iOS)</td><td>Pressure-sensitive brush painting with layers on iPad / iPhone</td><td>5</td><td>4</td><td>1</td><td>3</td></tr>
        <tr><td>Google-Sheets-style collaborative spreadsheet</td><td>Multi-user grid with formulas, cell references, and live sync across clients</td><td>4</td><td>2</td><td>1</td><td>4</td></tr>
        <tr><td>terminal function plotter</td><td>Parses and plots mathematical functions as Unicode graphs in the terminal</td><td>5</td><td>4</td><td>1</td><td>5</td></tr>
        <tr><td>JupyterLab-style notebook runtime</td><td>Executes code cells against a kernel and renders rich, ordered outputs</td><td>5</td><td>3</td><td>2</td><td>4</td></tr>
        <tr><td>Flutter mind-map editor</td><td>Draggable node graph with links, pan / zoom, and editing on mobile</td><td>4</td><td>1</td><td>1</td><td>2</td></tr>
        <tr><td>Celeste-style platformer (Rust)</td><td>2D precision platformer with tight movement, collision physics, and tile levels</td><td>4</td><td>3</td><td>2</td><td>4</td></tr>
        <tr><td>GitHub-PR-style code review</td><td>Side-by-side diff view with inline comment threads and review state</td><td>5</td><td>3</td><td>3</td><td>4</td></tr>
        <tr><td>terminal Markdown presenter</td><td>Renders Markdown as a navigable slide deck inside the terminal</td><td>4</td><td>4</td><td>3</td><td>4</td></tr>
        <tr><td>GGUF inference engine, Swift (SwiftGGUF)</td><td>Pure-Swift LLM inference from GGUF weights, bit-exact to llama.cpp (the worked example below)</td><td>5</td><td>3</td><td>2</td><td>4</td></tr>
        <tr><td>Blender-style 3D mesh viewer (OpenGL / ImGui)</td><td>Loads and orbits a 3D mesh with lighting and an ImGui control panel</td><td>4</td><td>2</td><td>1</td><td>2</td></tr>
        <tr><td>Excalidraw-style whiteboard (Android)</td><td>Freehand and shape drawing canvas with selection, move, and export</td><td>3</td><td>3</td><td>2</td><td>3</td></tr>
      </tbody>
    </table>
  </details>

  <p class="vca-note">
    The rest of this note is where those grades come from: why outcome scoring misses this, how the evaluation is built, a full worked example, and where it goes next.
  </p>
</div>

<!-- ═══════════════ 1 · THE PROBLEM ═══════════════ -->
<div class="vca-section" id="vca-problem">
  <div class="vca-kicker">1 · the problem</div>
  <h2 class="vca-title">One bit throws away the trajectory</h2>

  <p class="vca-note">
    A test suite reduces a whole build to one bit: does the final state match? It says nothing about how the agent got there: whether it planned, verified, and recovered, or thrashed and claimed a success it could not back up. Yet that is most of what separates a good agent from a bad one: two agents can ship the same working app by completely different routes, and an outcome score calls them equal.
  </p>

  <div class="vca-fig">
<img src="/static/images/Vibe-Coding-Arena/agents-race.png" alt="Two agents race to the same finish line: one takes a direct two-iteration path; the other wanders through nine iterations with dead ends and detours before finishing." style="width:100%; height:auto; border-radius:var(--vca-r); display:block">
<div class="vca-figcap">Two agents reach the same finish line, a working result, but by very different routes: one goes straight there in a couple of iterations, while the other loops through dead ends and retries before it lands. An outcome score records only that both finished; the arena grades the route each took to get there.</div>
  </div>

  <p class="vca-note">
    A test suite also does not produce an observation such as "the right pane is blank for every directory." A human notices it and says so, naming a specific fault the model had not caught (information it did not have), and the next round is then graded on whether the model fixes exactly that. This signal, a correction that carries information without disclosing the intended answer, cannot be reconstructed from an outcome-only score. It is the signal the arena is built to capture.
  </p>

  <div class="vca-callout">
    The deeper problem is that an outcome pass rate combines three distinct quantities: <strong>capability</strong> (whether the model can do the task), <strong>reliability</strong> (whether a given attempt succeeds), and <strong>evaluation quality</strong> (whether the checkpoint measures the intended behavior). None can be separated from the final bit alone. Distinguishing them requires grading the process rather than the result. That is what the arena does.
  </div>
</div>

<!-- ═══════════════ 2 · WHAT WE BUILT ═══════════════ -->
<div class="vca-section" id="vca-approach">
  <div class="vca-kicker">2 · vibe-coding arena</div>
  <h2 class="vca-title">Classify the space, design the tasks, evaluate the process</h2>

  <p class="vca-note">
    The evaluation is built in three steps. First we <b>classify the space</b> of agent coding work into a taxonomy, a map of what agents are actually used for. Then domain experts <b>design tasks</b> that cover that map, each modeled on a real product. Then those tasks are run in the <b>arena</b>, where a human corrects the agent round by round and grades the development process.
  </p>

  <div class="vca-fig">
<div style="display:flex;align-items:stretch;flex-wrap:wrap;justify-content:center;gap:6px">
<div style="flex:1;min-width:180px;border:1px solid var(--vca-line);border-top:3px solid var(--vca-accent);border-radius:var(--vca-r);background:var(--vca-bg);padding:11px 13px">
<div style="font-size:0.68em;letter-spacing:.06em;text-transform:uppercase;color:var(--vca-accent);font-weight:700">Step 1 · Classify</div>
<div style="font-weight:700;font-size:0.92em;color:var(--vca-ink);margin:2px 0 4px">Map the space</div>
<div style="font-size:0.78em;color:var(--vca-soft);line-height:1.5">Sort agent coding work into a taxonomy of what agents are actually used for.</div>
<div style="font-size:0.72em;color:var(--vca-accent);font-weight:600;margin-top:7px">produces → a coverage map</div>
</div>
<div style="display:flex;align-items:center;color:var(--vca-soft);font-size:1.3em;font-weight:700">▶</div>
<div style="flex:1;min-width:180px;border:1px solid var(--vca-line);border-top:3px solid var(--vca-blue);border-radius:var(--vca-r);background:var(--vca-bg);padding:11px 13px">
<div style="font-size:0.68em;letter-spacing:.06em;text-transform:uppercase;color:var(--vca-blue);font-weight:700">Step 2 · Design</div>
<div style="font-weight:700;font-size:0.92em;color:var(--vca-ink);margin:2px 0 4px">Build the tasks</div>
<div style="font-size:0.78em;color:var(--vca-soft);line-height:1.5">Experts design tasks that cover the map, each modeled on a real product.</div>
<div style="font-size:0.72em;color:var(--vca-blue);font-weight:600;margin-top:7px">produces → ~640 multi-round tasks</div>
</div>
<div style="display:flex;align-items:center;color:var(--vca-soft);font-size:1.3em;font-weight:700">▶</div>
<div style="flex:1;min-width:180px;border:1px solid var(--vca-line);border-top:3px solid var(--vca-warn);border-radius:var(--vca-r);background:var(--vca-bg);padding:11px 13px">
<div style="font-size:0.68em;letter-spacing:.06em;text-transform:uppercase;color:var(--vca-warn);font-weight:700">Step 3 · Evaluate</div>
<div style="font-weight:700;font-size:0.92em;color:var(--vca-ink);margin:2px 0 4px">Run the arena</div>
<div style="font-size:0.78em;color:var(--vca-soft);line-height:1.5">A human corrects the agent round by round and grades the development process.</div>
<div style="font-size:0.72em;color:var(--vca-warn);font-weight:600;margin-top:7px">produces → a per-round process grade</div>
</div>
</div>
<div class="vca-figcap">The three steps of this section: classify the space of agent work, design tasks that cover it, then run them in the arena and grade the process round by round.</div>
  </div>

  <p class="vca-sub">2.1 · Classify the space of agent work</p>
  <p class="vca-note">
    We map that space from real usage, not assumptions. We take a large corpus of real user trajectories (actual sessions of people building and debugging with coding agents) and classify each along three axes: what kind of work, in what technical area, in what business domain. Counting those labels across the whole corpus turns real usage into a distribution, so the coverage map reflects what people actually do with agents. An LLM assigns the labels, since the judgment is semantic.
  </p>

  <p class="vca-note" style="margin-bottom:2px">Across the substantive sessions (one-shot lookups aside), here is the real work people bring to a coding agent, by kind of work and technical area:</p>
  <div class="vca-fig">
<div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;align-items:center">
<img src="/static/images/Vibe-Coding-Arena/usage-workmode.svg" alt="work_mode distribution across real coding-agent sessions" style="width:100%;max-width:330px">
<img src="/static/images/Vibe-Coding-Arena/usage-tech.svg" alt="tech_category distribution across real coding-agent sessions" style="width:100%;max-width:330px">
</div>
<div class="vca-figcap">Percentages are over the ~9,100 sessions left after one-shot lookups are removed; each label is the majority of three LLM runs. The grey <b>other</b> slice combines the catch-all with the categories under ~2%.</div>
  </div>

  <p class="vca-sub">2.2 · Design the tasks</p>
  <p class="vca-note">
    Guided by that map, domain experts design the tasks, choosing products that fill out the categories and turning each into something an agent must build. Every task is authored around a <b>real, existing product or specification</b>: an app from the App Store or Product Hunt, or a well-known open-source tool. The expert distills what actually makes that product hard to build: its <em>engineering core</em> (the algorithm, state machine, protocol, or systems work), not its surface UI. Tasks with no real core ("render a static screen") are deliberately excluded; every task has business logic, persistence, networking, concurrency, or a numerical / systems kernel that has to be gotten right.
  </p>

  <p class="vca-note">
    Each task comes in one of two forms. A <b>multi-round</b> task is decomposed into roughly ten natural engineering milestones: each round adds one independent capability and forces a regression check on everything built before, so the corpus rewards sustained, cumulative work rather than one lucky shot. A <b>spec</b> task hands over a complete specification at once and asks for an end-to-end delivery, with each requirement independently checkable.
  </p>

  <p class="vca-note" style="margin-bottom:6px">Most of the design effort goes into keeping a task <b>honest and hard to game</b>:</p>
  <ul class="vca-note">
    <li><b>One product per task.</b> If a prototype secretly bundles several independent products (a commit-graph viewer that also needs a full graph-layout engine, say), it is split into separate self-contained tasks rather than crammed into one, so every round is a real increment, not a third of three subsystems at once.</li>
    <li><b>Every requirement is checkable.</b> Each round carries an explicit acceptance checklist: binary facts (“each commit renders as a node”), things a human can judge by eye (“the branch animation is smooth”), and numeric thresholds only where they come from the task's real need (a 16 kHz sample rate, recall ≥ 90%), never a number invented to look rigorous. Soft, game-able wording (“supports basic editing”, “reasonably fast”) is closed off.</li>
    <li><b>The known shortcuts are banned up front.</b> On tasks with an objective ground truth the prompt rules them out explicitly: no linking a ready-made library, no hardcoding the reference answer, no happy-path “file exists → pass” assertions, no widening a tolerance to hide a bug.</li>
  </ul>
  <p class="vca-note">
    Difficulty is tuned to a <b>discriminative band</b>: hard enough that a frontier model rarely nails a round on the first try, but not so hard that every model fails, since a task everyone flunks separates nothing. Multi-round tasks are capped at ten rounds, no single round is allowed to balloon into a whole subsystem, and any task that would otherwise depend on real hardware is re-based on a desktop-equivalent product or driven by pre-recorded data, so every task is fully testable in a standard environment.
  </p>

  <div class="vca-def">
    <b>The corpus at a glance.</b> ~640 tasks across <b>13 programming languages</b>: mobile (Swift, Kotlin, ArkTS, Flutter), web / full-stack (TypeScript), backend, systems &amp; CLI (Python, Go, Java, Rust, C++), and Windows desktop (C# WPF / WinUI 3, PowerShell). They span <b>18 application categories over 50 sub-domains</b> (developer tools, games, media, productivity, creative design, social, maps &amp; transit, data-viz, education, health, finance, security, IoT, AI tooling, data engineering, scientific computing, blockchain, and more), and each task targets a distinct product, so no two are modeled on the same prototype.
  </div>

  <div class="vca-fig">
<div style="font-weight:700;font-size:0.82em;text-align:center;margin-bottom:10px;color:var(--vca-ink)">Coverage by language</div>
<div style="max-width:540px;margin:0 auto">
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">TypeScript</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:100%;background:#115e59;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">13.6%</span></div>
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">Python</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:84%;background:#176a63;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">11.4%</span></div>
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">Java</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:82%;background:#1e756e;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">11.1%</span></div>
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">Rust</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:79%;background:#248178;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">10.8%</span></div>
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">C++</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:74%;background:#2b8d82;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">10.0%</span></div>
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">Go</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:62%;background:#31988c;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">8.4%</span></div>
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">C# (WPF)</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:58%;background:#38a496;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">7.9%</span></div>
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">C# (WinUI 3)</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:47%;background:#3eb0a1;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">6.4%</span></div>
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">Kotlin</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:40%;background:#44bbab;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">5.4%</span></div>
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">Swift</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:34%;background:#4bc7b5;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">4.6%</span></div>
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">Flutter</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:33%;background:#51d3c0;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">4.5%</span></div>
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">ArkTS</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:23%;background:#58deca;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">3.1%</span></div>
<div style="display:flex;align-items:center;gap:8px;margin:3px 0"><span style="width:96px;text-align:right;font-size:0.74em;color:#333;flex-shrink:0">PowerShell</span><span style="flex:1;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:17px;overflow:hidden"><span style="display:block;height:100%;width:22%;background:#5eead4;border-radius:3px"></span></span><span style="width:40px;font-size:0.7em;font-weight:600;color:#475569;text-align:right">3.0%</span></div>
</div>
<div class="vca-figcap">Thirteen languages, none over ~14% and a gentle tail down to ~3%, so no single language dominates the corpus. (What each language is <em>used for</em> is a separate axis; that's the breakdown below.)</div>
  </div>

  <div class="vca-fig">
<div style="font-weight:700;font-size:0.82em;text-align:center;margin-bottom:6px;color:var(--vca-ink)">Coverage by domain</div>
<img src="/static/images/Vibe-Coding-Arena/domain-sunburst.svg" alt="Sunburst of the corpus by application domain: 10 broad areas on the inner ring, 61 sub-domains on the outer ring" style="display:block;width:100%;max-width:560px;margin:0 auto">
<div class="vca-figcap">The same corpus by application area: ten broad areas (inner ring) fanning out into 61 sub-domains (outer). Nothing dominates: the largest area is dev-tools / DevOps at ~17%, and no single sub-domain tops ~4%. That breadth is what lets one score stand in for general build-and-debug skill rather than fluency in one niche.</div>
  </div>

  <p class="vca-note" style="margin:0 0 6px">A few representative prototypes:</p>
  <table class="vca-tbl">
    <thead><tr><th>modeled on</th><th>what the task builds</th><th>language</th></tr></thead>
    <tbody>
      <tr><td>Redis</td><td>a RESP-protocol in-memory key-value server (Redis-compatible subset)</td><td>C++</td></tr>
      <tr><td>jq</td><td>a command-line JSON query / transform engine</td><td>Rust</td></tr>
      <tr><td>ngrok</td><td>a reverse HTTP tunnel: server plus client</td><td>Go</td></tr>
      <tr><td>Strava</td><td>a GPS trail recorder: drift filtering, pace / elevation, background capture</td><td>Swift</td></tr>
      <tr><td>Anki</td><td>a spaced-repetition (SRS) flashcard app</td><td>ArkTS</td></tr>
      <tr><td>Shazam</td><td>an audio-fingerprint engine: spectral-peak constellations, inverted index, alignment voting</td><td>C++</td></tr>
    </tbody>
  </table>

  <p class="vca-note">
    Two things make a task <em>gradeable</em> rather than merely hard: the <b>task-specific rubric dimensions</b> the expert writes (the per-task criteria to grade against, each with an explicit standard) and its <b>round structure</b>, which turns the build into a process the arena can grade round by round. The real-product prototype plays a different role: it keeps the task grounded and non-trivial.
  </p>

  <p class="vca-sub">2.3 · Evaluate the process</p>
  <p class="vca-note">
    That process is the arena itself, where the designed tasks are run, round by round, under live human correction:
  </p>
  <div class="vca-def">
    <b>Vibe-Coding Arena</b> is an evaluation in which a model builds an application from scratch over many rounds of live human interaction. Each round is one of two kinds: a <b>base</b> round introduces a new feature, and a <b>fix</b> round corrects a defect from the previous round. On a multi-round task, each round is scored on a <code>−2 / −1 / 0 / +1</code> scale for the state it leaves behind: <code>0</code> meets the round's bar, <code>+1</code> is the rare result that goes beyond it (above expectation), <code>−1</code> falls short with a defect to fix, and <code>−2</code> is badly broken (say, a round that will not even compile). The next round's type follows from that score: a clean round (<code>0</code> or <code>+1</code>) earns a new feature, a flawed one (<code>−1</code> or <code>−2</code>) earns a correction to repair. (Spec tasks instead hand over one complete specification all at once and read the same scale differently, with <code>+1</code> meaning the whole spec is complete; the worked example below spells that out.) In neither case is the score a test-suite pass/fail; the grade is always the development process.
  </div>

  <p class="vca-note">
    A human expert scores the process on three layers:
  </p>
  <ul class="vca-note">
    <li><strong>Per round</strong> — a <em>round score</em> on a <code>−2 / −1 / 0 / +1</code> scale for the state after the round and, on a fix round, a second <em>fix-effect score</em> on a <code>−2 / −1 / 0</code> scale rating whether that round moved the requested correction forward (<code>0</code>), spun without progress (<code>−1</code>), or regressed (<code>−2</code>); five binary checks (requirement understanding, context preservation, implementation path, constraint adherence, readiness for the next round); and, in prose, both a rationale for the scores and the round's main shortcomings (the specific defects a fix round is then asked to correct).</li>
    <li><strong>Rubric</strong> — four fixed capability dimensions and at least four task-specific dimensions, each with an explicit written standard, assessed once over the whole task.</li>
    <li><strong>Behavior</strong> — eight patterns scored across the session: planning and decomposition, exploration, self-verification, accuracy of completion claims, root-cause analysis versus repeated trial, error recovery, knowledge-gap handling, and scope adherence.</li>
  </ul>

  <div class="vca-fig">
<div style="font-weight:700;font-size:0.82em;text-align:center;margin-bottom:14px;color:var(--vca-ink)">How each round is typed, then scored</div>
<div style="display:flex;justify-content:center;margin-bottom:16px">
<div style="display:inline-flex;align-items:center;gap:12px;flex-wrap:wrap;font-size:0.8em">
<span style="border:1px solid var(--vca-line);background:var(--vca-bg);border-radius:20px;padding:5px 14px;font-weight:600;color:var(--vca-ink)">round N</span>
<span style="color:var(--vca-soft)">its score sets the next round →</span>
<div style="display:flex;flex-direction:column;gap:6px">
<div style="background:var(--vca-accent-l);border-radius:var(--vca-r);padding:5px 11px"><b style="color:var(--vca-accent)">0 / +1</b> → round N+1 is a <b>base</b> round (new feature)</div>
<div style="background:#FCEEE0;border-radius:var(--vca-r);padding:5px 11px"><b style="color:var(--vca-warn)">−1 / −2</b> → round N+1 is a <b>fix</b> round (repair the defect)</div>
</div>
</div>
</div>
<div style="text-align:center;font-size:0.74em;color:var(--vca-soft);margin-bottom:8px">one layer scores each round; two more grade the whole run ▼</div>
<div style="display:flex;gap:10px;flex-wrap:wrap">
<div class="vca-lyr" style="border-top-color:var(--vca-accent)"><h5>1 · Per round</h5><p>round score <code>−2…+1</code> · fix-effect <code>−2…0</code> · 5 binary checks · prose rationale + the shortcomings a fix round must correct</p></div>
<div class="vca-lyr" style="border-top-color:var(--vca-blue)"><h5>2 · Rubric</h5><p>4 fixed capability dimensions + ≥4 task-specific dimensions, each with an explicit written standard, scored once over the whole run</p></div>
<div class="vca-lyr" style="border-top-color:var(--vca-warn)"><h5>3 · Behavior</h5><p>8 patterns across the session: planning, exploration, self-verification, honest completion claims, root-cause, recovery, knowledge gaps, scope</p></div>
</div>
<div class="vca-figcap">The previous round's score decides whether the next round adds a feature or repairs a defect. Layer 1 scores every round as it happens; the rubric and behavior layers grade the run as a whole.</div>
  </div>

  <p class="vca-note">
    What makes an agent good or bad on real software work is largely how it behaves <em>across rounds under correction</em>: whether it recovers, whether it takes in a new observation instead of repeating a failed attempt, whether it stops claiming a success it cannot support. That is exactly what a human in the loop captures, and exactly what the three layers turn into a structured, layered grade, a picture of the whole development process rather than a verdict on its final frame.
  </p>
</div>

<!-- ═══════════════ 3 · RESULTS ═══════════════ -->
<div class="vca-section" id="vca-example">
  <div class="vca-kicker">3 · a worked example</div>
  <h2 class="vca-title">One spec task, four models, all three layers</h2>

  <p class="vca-note">
    Here is one full task graded across the same four models (A–D). It is a demanding, <b>spec-style</b> task with an <b>objective ground truth</b>: implement a GGUF LLM inference engine from scratch in <b>pure Swift</b> (no linking or FFI to llama.cpp / ggml or any existing GGUF library), with correctness defined as <b>bit-level agreement with the official llama.cpp</b>. It breaks into <b>ten independently-checkable deliverables (A–J)</b>, from container parsing to <b>forward-pass numerical parity</b> (the core), each judged against an explicit written standard, with the obvious ways to fake it ruled out in the prompt itself.
  </p>

  <div style="margin:2px 0 16px; border:1px solid var(--vca-line); border-radius:var(--vca-r); background:var(--vca-bg); padding:12px 14px">
    <div style="font-size:0.9em; font-weight:700; color:var(--vca-accent); margin-bottom:6px">The full task prompt</div>
    <div style="font-size:0.88em; color:#333; line-height:1.7; padding:2px 0 12px">
      <p style="margin:0 0 8px; font-size:0.9em; color:var(--vca-soft)">The base-round prompt in full. The <b>A–J</b> tags are the ten deliverables the rubric table references, distinct from <b>A–D</b>, the four models.</p>
      <p style="margin:0 0 8px">Implement, from scratch in <b>pure Swift</b>, a GGUF LLM inference engine, with no linking or FFI to llama.cpp / ggml or any existing GGUF library. Ground truth = <b>bit-level agreement with the official llama.cpp</b>. Deliver all ten items <b>A–J</b>, each independently verifiable against that ground truth:</p>
      <ul style="margin:0 0 10px; padding-left:20px">
        <li><b>A.</b> GGUF container parsing (header / metadata / tensor info; full coverage of the ggml_types)</li>
        <li><b>B.</b> mmap tensor mapping, zero-copy (must not read the whole file into memory)</li>
        <li><b>C.</b> dequantization (F32 / F16 / Q4_0 / Q4_K / Q5_K / Q6_K / Q8_0), per-value identical to the gguf gold</li>
        <li><b>D.</b> tokenizers (Llama SPM + Qwen2 BPE), token-for-token identical to llama.cpp</li>
        <li><b>E.</b> forward-pass numerical parity <em>(the core)</em>: F16 logits cosine ≥ 0.9999 and top-1 identical; greedy token-identical on the quantized weights</li>
        <li><b>F.</b> KV-cache: prefill logits == incremental-decode logits</li>
        <li><b>G.</b> sampling: top-k / top-p / temperature / random seed</li>
        <li><b>H.</b> on-device speed &amp; memory: peak resident memory ≤ model-file size + fixed overhead (must not copy all weights); report tokens/s and memory</li>
        <li><b>I.</b> fault recovery: bad magic / truncation / out-of-bounds raise structured errors and the process stays alive</li>
        <li><b>J.</b> backend abstraction (scalar / accelerated backend, argmax-consistent) plus multiple architectures (Llama and Qwen2)</li>
      </ul>
      <p style="margin:0"><b>Prohibitions.</b> No linking an existing library. No hardcoding llama.cpp's logits or continuations into the tests as the gold; that gold must be generated live from llama.cpp by a script. No happy-path "file exists → pass" assertions; dequantization and the forward pass must be checked element-by-element / token-by-token. No using a larger tolerance to mask RoPE / norm / scaling bugs.</p>
    </div>
  </div>

  <p class="vca-note" style="margin:0 0 4px"><b>Overall result (5-point).</b> All four models eventually delivered all ten items, so the outcome bit is identical. The process score is not:</p>
  <div style="display:grid; grid-template-columns:24px 1fr 1fr 1fr 58px 30px; gap:7px 8px; align-items:center; margin:12px 0 4px">
    <div></div>
    <div style="font-size:0.68em;color:var(--vca-soft);text-align:center">process · /5</div>
    <div style="font-size:0.68em;color:var(--vca-soft);text-align:center">rubric · /12</div>
    <div style="font-size:0.68em;color:var(--vca-soft);text-align:center">binary checks</div>
    <div style="font-size:0.68em;color:var(--vca-soft);text-align:center">rounds</div>
    <div style="font-size:0.68em;color:var(--vca-soft);text-align:center">neg</div>

    <div style="font-weight:700;color:#2563eb;text-align:center;font-size:0.95em">A</div>
    <span style="display:block;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:18px;overflow:hidden"><span style="display:flex;align-items:center;justify-content:flex-end;height:100%;width:100%;background:#2563eb;color:#fff;font-size:0.6em;font-weight:700;padding-right:5px;box-sizing:border-box">5</span></span>
    <span style="display:block;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:18px;overflow:hidden"><span style="display:flex;align-items:center;justify-content:flex-end;height:100%;width:92%;background:#2563eb;color:#fff;font-size:0.6em;font-weight:700;padding-right:5px;box-sizing:border-box">+11</span></span>
    <span style="display:block;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:18px;overflow:hidden"><span style="display:flex;align-items:center;justify-content:flex-end;height:100%;width:90%;background:#2563eb;color:#fff;font-size:0.6em;font-weight:700;padding-right:5px;box-sizing:border-box">90%</span></span>
    <div style="font-size:0.76em;color:#333;text-align:center">2 (1/1)</div>
    <div style="font-size:0.76em;color:#333;text-align:center">0</div>

    <div style="font-weight:700;color:#15803d;text-align:center;font-size:0.95em">D</div>
    <span style="display:block;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:18px;overflow:hidden"><span style="display:flex;align-items:center;justify-content:flex-end;height:100%;width:80%;background:#15803d;color:#fff;font-size:0.6em;font-weight:700;padding-right:5px;box-sizing:border-box">4</span></span>
    <span style="display:block;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:18px;overflow:hidden"><span style="display:flex;align-items:center;justify-content:flex-end;height:100%;width:75%;background:#15803d;color:#fff;font-size:0.6em;font-weight:700;padding-right:5px;box-sizing:border-box">+9</span></span>
    <span style="display:block;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:18px;overflow:hidden"><span style="display:flex;align-items:center;justify-content:flex-end;height:100%;width:80%;background:#15803d;color:#fff;font-size:0.6em;font-weight:700;padding-right:5px;box-sizing:border-box">80%</span></span>
    <div style="font-size:0.76em;color:#333;text-align:center">3 (1/2)</div>
    <div style="font-size:0.76em;color:#333;text-align:center">2</div>

    <div style="font-weight:700;color:#d97706;text-align:center;font-size:0.95em">B</div>
    <span style="display:block;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:18px;overflow:hidden"><span style="display:flex;align-items:center;justify-content:flex-end;height:100%;width:60%;background:#d97706;color:#fff;font-size:0.6em;font-weight:700;padding-right:5px;box-sizing:border-box">3</span></span>
    <span style="display:block;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:18px;overflow:hidden"><span style="display:flex;align-items:center;justify-content:flex-end;height:100%;width:50%;background:#d97706;color:#fff;font-size:0.6em;font-weight:700;padding-right:5px;box-sizing:border-box">+6</span></span>
    <span style="display:block;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:18px;overflow:hidden"><span style="display:flex;align-items:center;justify-content:flex-end;height:100%;width:78%;background:#d97706;color:#fff;font-size:0.6em;font-weight:700;padding-right:5px;box-sizing:border-box">78%</span></span>
    <div style="font-size:0.76em;color:#333;text-align:center">8 (1/7)</div>
    <div style="font-size:0.76em;color:#333;text-align:center">3</div>

    <div style="font-weight:700;color:#dc2626;text-align:center;font-size:0.95em">C</div>
    <span style="display:block;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:18px;overflow:hidden"><span style="display:flex;align-items:center;justify-content:flex-end;height:100%;width:40%;background:#dc2626;color:#fff;font-size:0.6em;font-weight:700;padding-right:5px;box-sizing:border-box">2</span></span>
    <span style="display:block;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:18px;overflow:hidden"><span style="display:flex;align-items:center;justify-content:flex-end;height:100%;width:33%;background:#dc2626;color:#fff;font-size:0.6em;font-weight:700;padding-right:5px;box-sizing:border-box">+4</span></span>
    <span style="display:block;background:var(--vca-bg);border:1px solid var(--vca-line);border-radius:4px;height:18px;overflow:hidden"><span style="display:flex;align-items:center;justify-content:flex-end;height:100%;width:63%;background:#dc2626;color:#fff;font-size:0.6em;font-weight:700;padding-right:5px;box-sizing:border-box">63%</span></span>
    <div style="font-size:0.76em;color:#333;text-align:center">6 (1/5)</div>
    <div style="font-size:0.76em;color:#333;text-align:center">4</div>
  </div>
  <div style="font-size:0.7em;color:var(--vca-soft);margin:0 0 2px">Ordered best to worst. Longer bars are better; for rounds and negative rounds, fewer is better.</div>
  <p class="vca-note" style="font-size:0.9em; color:var(--vca-soft); margin:-4px 0 0"><b>Binary checks met</b> is the share of the five per-round binary checks (requirement understanding, context preservation, implementation path, constraint adherence, and readiness for the next round) that pass, aggregated over all of a model's rounds. It tracks how sound the work was round to round, independent of the final outcome: all four eventually delivered all ten items, but they cleared very different fractions of these checks getting there.</p>

  <div class="vca-def">
    <b>Reading the round scale on a spec task.</b> The −2 / −1 / 0 / +1 round scale means something different here than in the feature-build tasks above. In those, <code>0</code> is the ordinary success tier (the round met its bar) and <code>+1</code> is the rare "above expectation". In a <b>spec</b> task, <code>+1</code> means the <em>entire</em> spec is complete and <b>ends the task</b>, while <code>0 / −1 / −2</code> are all "not done yet", ordered by distance to completion: <code>0</code> = one or two items left, <code>−1</code> = core present but far off, <code>−2</code> = core missing. So a spec chain that runs 0s and −1s before reaching a single <code>+1</code> is the normal path to completion, not a run of failures. The separate fix-effect score then rates each fix round's progress: <code>0</code> = moved forward, <code>−1</code> = spun without progress, <code>−2</code> = regressed.
  </div>

  <div class="vca-fig">
<div style="font-weight:700;font-size:0.82em;text-align:center;margin-bottom:12px;color:var(--vca-ink)">The two fix chains at a glance</div>
<div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin:4px 0 10px">
<div style="width:60px; font-weight:700; font-size:0.82em; color:#2563eb; flex-shrink:0">A · 5/5</div>
<div style="display:flex; gap:3px; align-items:center; flex-wrap:wrap"><span style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:24px;border-radius:4px;font-size:0.76em;font-weight:600;background:#eef2f6;color:#555">0</span><span style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:24px;border-radius:4px;font-size:0.76em;font-weight:600;background:#dcfce7;color:#15803d">+1</span><span style="color:#15803d;font-weight:700;margin-left:3px">✓</span></div>
<div style="font-size:0.76em; color:var(--vca-soft)">2 rounds, clean</div>
</div>
<div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin:4px 0">
<div style="width:60px; font-weight:700; font-size:0.82em; color:#d97706; flex-shrink:0">B · 3/5</div>
<div style="display:flex; gap:3px; align-items:center; flex-wrap:wrap"><span style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:24px;border-radius:4px;font-size:0.76em;font-weight:600;background:#fdecd8;color:#b45309">−1</span><span style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:24px;border-radius:4px;font-size:0.76em;font-weight:600;background:#fdecd8;color:#b45309">−1</span><span style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:24px;border-radius:4px;font-size:0.76em;font-weight:600;background:#fdecd8;color:#b45309">−1</span><span style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:24px;border-radius:4px;font-size:0.76em;font-weight:600;background:#eef2f6;color:#555">0</span><span style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:24px;border-radius:4px;font-size:0.76em;font-weight:600;background:#eef2f6;color:#555">0</span><span style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:24px;border-radius:4px;font-size:0.76em;font-weight:600;background:#eef2f6;color:#555">0</span><span style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:24px;border-radius:4px;font-size:0.76em;font-weight:600;background:#eef2f6;color:#555">0</span><span style="display:inline-flex;align-items:center;justify-content:center;width:30px;height:24px;border-radius:4px;font-size:0.76em;font-weight:600;background:#dcfce7;color:#15803d">+1</span><span style="color:#15803d;font-weight:700;margin-left:3px">✓</span></div>
<div style="font-size:0.76em; color:var(--vca-soft)">8 rounds, six stuck below the bar first</div>
</div>
<div style="font-size:0.7em; color:var(--vca-soft); margin-top:8px; text-align:center">first cell = base round · rest = fix rounds · spec task, so each chain ends at <b>+1</b> (complete)</div>
<div class="vca-figcap">Both models deliver all ten items, so the outcome is identical. A reaches complete in two rounds; B grinds through six rounds stuck below the bar (including a false “7/7 PASSED” and a round that changed nothing) before locating the real cause. Same result, very different process, and that is what the layers below score.</div>
  </div>

  <p class="vca-sub" style="font-size:1em; border-top:none; padding-top:0; margin:18px 0 6px">Layer 1 · per round</p>
  <p class="vca-note" style="margin:0 0 8px">Each round has a round score (state after the round); fix rounds also have a fix-effect score (progress vs the requested fix). Model A delivered clean in two rounds, base (0) then fix 1 (+1): forward parity correct on the first pass, self-verified against a live llama.cpp golden. Model B took eight rounds, and the scores show exactly where it stalled:</p>
  <table class="vca-tbl">
    <thead><tr><th>Model B · round</th><th>score</th><th style="white-space:nowrap">fix-effect</th><th>what happened</th></tr></thead>
    <tbody>
      <tr><td>base</td><td>−1</td><td>—</td><td>parsing, dequantization, and robustness solid; core forward parity unmet; parity/bench subcommands are empty stubs</td></tr>
      <tr><td>fix 1</td><td>−1</td><td>0</td><td>greedy still diverges at token 6; the parity command prints "7/7 PASSED" without ever comparing to llama.cpp, a false positive</td></tr>
      <tr><td>fix 2</td><td>−1</td><td>0</td><td>false-positive parity replaced with an honest numerical comparison; forward still not bit-level</td></tr>
      <tr><td>fix 3</td><td>0</td><td>0</td><td>sampling completed; only the parity gap remains</td></tr>
      <tr><td>fix 4</td><td>0</td><td>0</td><td>right direction, not fully correct</td></tr>
      <tr><td>fix 5</td><td>0</td><td>−1</td><td>zero code change: re-verifies and reports progress while altering nothing (round holds, fix effect negative)</td></tr>
      <tr><td>fix 6</td><td>0</td><td>0</td><td>Llama fixed; Qwen2 forward still systematically wrong (logit cosine 0.35–0.89)</td></tr>
      <tr><td>fix 7</td><td>+1</td><td>0</td><td>all checks pass; root cause located: RoPE (Llama uses NORMAL, Qwen2 uses NEOX-style)</td></tr>
    </tbody>
  </table>

  <p class="vca-sub" style="font-size:1em; border-top:none; padding-top:0; margin:18px 0 6px">Layer 2 · rubric (4 fixed + 8 task-specific dimensions, over the whole task)</p>
  <table class="vca-tbl vca-matrix">
    <thead><tr><th>dimension</th><th>A</th><th>B</th><th>C</th><th>D</th></tr></thead>
    <tbody>
      <tr><td>Requirement understanding &amp; goal retention</td><td class="gd">+1</td><td class="gd">+1</td><td class="gd">+1</td><td class="gd">+1</td></tr>
      <tr><td>Planning &amp; execution control</td><td class="gd">+1</td><td class="nt">0</td><td class="nt">0</td><td class="nt">0</td></tr>
      <tr><td>Instruction &amp; constraint adherence</td><td class="nt">0</td><td class="nt">0</td><td class="nt">0</td><td class="gd">+1</td></tr>
      <tr><td>Final delivery &amp; experience</td><td class="gd">+1</td><td class="nt">0</td><td class="nt">0</td><td class="gd">+1</td></tr>
      <tr><td>GGUF parsing &amp; zero-copy mmap (A/B/H)</td><td class="gd">+1</td><td class="gd">+1</td><td class="nt">0</td><td class="gd">+1</td></tr>
      <tr><td>Dequantization, 7 types bit-exact (C)</td><td class="gd">+1</td><td class="gd">+1</td><td class="bd">−1</td><td class="gd">+1</td></tr>
      <tr><td>Tokenizers SPM + BPE (D)</td><td class="gd">+1</td><td class="gd">+1</td><td class="nt">0</td><td class="nt">0</td></tr>
      <tr><td>Forward-pass parity (E · core)</td><td class="gd">+1</td><td class="bd">−1</td><td class="gd">+1</td><td class="gd">+1</td></tr>
      <tr><td>KV-cache prefill == incremental (F)</td><td class="gd">+1</td><td class="gd">+1</td><td class="gd">+1</td><td class="gd">+1</td></tr>
      <tr><td>Sampling (G)</td><td class="gd">+1</td><td class="nt">0</td><td class="nt">0</td><td class="gd">+1</td></tr>
      <tr><td>Error recovery / robustness (I)</td><td class="gd">+1</td><td class="gd">+1</td><td class="gd">+1</td><td class="nt">0</td></tr>
      <tr><td>Backend abstraction &amp; multi-arch (J)</td><td class="gd">+1</td><td class="gd">+1</td><td class="gd">+1</td><td class="gd">+1</td></tr>
    </tbody>
  </table>
  <p class="vca-note" style="font-size:0.9em; color:var(--vca-soft); margin:-4px 0 0">Each dimension carries an explicit written standard (e.g., forward parity: <code>+1</code> = cosine ≥ 0.999 and quantized greedy bit-identical, first try; <code>0</code> = reached after several fixes; <code>−1</code> = systematically wrong, cosine &lt; 0.99).</p>

  <p class="vca-sub" style="font-size:1em; border-top:none; padding-top:0; margin:18px 0 6px">Layer 3 · behavior (8 patterns, across the session)</p>
  <table class="vca-tbl vca-matrix">
    <thead><tr><th>pattern</th><th>A</th><th>B</th><th>C</th><th>D</th></tr></thead>
    <tbody>
      <tr><td>Planning &amp; decomposition</td><td class="gd">sound</td><td class="gd">sound</td><td class="gd">sound</td><td class="gd">sound</td></tr>
      <tr><td>Exploration (understood RoPE/quant before coding)</td><td class="gd">sound</td><td class="bd">weak</td><td class="gd">sound</td><td class="gd">sound</td></tr>
      <tr><td>Self-verification (real golden, not self-consistent)</td><td class="gd">sound</td><td class="bd">weak</td><td class="bd">weak</td><td class="gd">sound</td></tr>
      <tr><td>Completion-claim honesty</td><td class="gd">sound</td><td class="bd">weak</td><td class="bd">weak</td><td class="gd">sound</td></tr>
      <tr><td>Root-cause analysis vs repeated trial</td><td class="gd">sound</td><td class="bd">weak</td><td class="gd">sound</td><td class="gd">sound</td></tr>
      <tr><td>Error recovery</td><td class="nt">n/a</td><td class="gd">sound</td><td class="bd">weak</td><td class="gd">sound</td></tr>
      <tr><td>Knowledge-gap handling</td><td class="gd">sound</td><td class="gd">sound</td><td class="gd">sound</td><td class="gd">sound</td></tr>
      <tr><td>Constraint &amp; scope adherence</td><td class="gd">sound</td><td class="gd">sound</td><td class="gd">sound</td><td class="gd">sound</td></tr>
    </tbody>
  </table>

  <p class="vca-note" style="margin:12px 0 0">
    All four models delivered A–J, so an outcome-only benchmark would score them the same: four passes. The process layers do not: they run from 5/5 down to 2/5. Model A reached the 5/5 in two rounds, verifying honestly against a live llama.cpp golden at each step. Model B needed eight: it printed "ALL PASSED" without ever comparing to the golden, spent a full round changing nothing, and blamed various low-level details (thread-safety, accumulation order) for seven rounds before finding the real cause (RoPE). Model C scored lowest on several counts: its first round would not even compile (−2), four of its six rounds were negative (including one that regressed working functionality), and its self-verification only agreed with its own buggy reference rather than the real golden. Telling a clean two-round delivery from an eight-round thrash, or a real check from one that only agrees with itself, is exactly what the process score captures and a single pass/fail bit cannot.
  </p>
</div>

<!-- ═══════════════ 4 · FUTURE ═══════════════ -->
<div class="vca-section" id="vca-future">
  <div class="vca-kicker">4 · future</div>
  <h2 class="vca-title">Toward an automated arena</h2>

  <p class="vca-note">
    The arena produces the richest signal here, but it rests on a human expert per trajectory. Two parts of that human have to be automated before the signal can run at the scale agents now operate on: the <b>grading</b>, and the <b>correction</b>. The first is well underway; the second is a genuine open problem.
  </p>

  <p class="vca-sub" style="border-top:none; padding-top:0; margin-top:8px">Grading the process without a human</p>
  <p class="vca-note">
    One route we are building is a controlled benchmark that produces the arena's kind of grade automatically: the process signal, without a human in the loop. In it, the model acts as a <b>technical lead</b> on a production-style investigation: it coordinates helper subagents and long-running background jobs, and the run is scored from the <b>event log</b> (the recorded sequence of its actions) together with the artifacts it produced, checked against a hidden reference (the <b>oracle</b>). The core score is a deterministic rule over the events and artifacts, with no LLM in it, so re-scoring a run reproduces the same number exactly; a small LLM-judge layer adds the qualitative dimensions a rule cannot capture, such as tool-use quality and scope discipline.
  </p>

  <div class="vca-fig">
<div style="font-weight:700;font-size:0.82em;text-align:center;margin-bottom:14px;color:var(--vca-ink)">Grading the process automatically: the model as technical lead</div>
<div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; justify-content:center; text-align:left">
<div style="flex:1; min-width:150px; border:1px solid var(--vca-line); border-top:3px solid var(--vca-accent); border-radius:var(--vca-r); background:var(--vca-bg); padding:10px 12px"><div style="font-weight:700; font-size:0.8em; color:var(--vca-accent)">Lead agent</div><div style="font-size:0.75em; color:var(--vca-soft); line-height:1.45">the model under test: plans, delegates, verifies, audits</div></div>
<div style="display:flex; align-items:center; color:var(--vca-soft); font-size:1.2em; font-weight:700">→</div>
<div style="flex:1; min-width:140px; display:flex; flex-direction:column; gap:6px"><div style="border:1px solid var(--vca-line); border-left:3px solid var(--vca-blue); border-radius:var(--vca-r); background:#fff; padding:7px 10px; font-size:0.76em; color:#333">Subagents <span style="color:var(--vca-soft)">(helper models)</span></div><div style="border:1px solid var(--vca-line); border-left:3px solid var(--vca-blue); border-radius:var(--vca-r); background:#fff; padding:7px 10px; font-size:0.76em; color:#333">Background jobs <span style="color:var(--vca-soft)">(long validation)</span></div></div>
<div style="display:flex; align-items:center; color:var(--vca-soft); font-size:1.2em; font-weight:700">→</div>
<div style="flex:1; min-width:130px; border:1px solid var(--vca-line); border-top:3px solid var(--vca-ink); border-radius:var(--vca-r); background:#fff; padding:10px 12px"><div style="font-weight:700; font-size:0.8em; color:var(--vca-ink)">Event log + artifacts</div><div style="font-size:0.75em; color:var(--vca-soft); line-height:1.45">every action, in order</div></div>
<div style="display:flex; align-items:center; color:var(--vca-soft); font-size:1.2em; font-weight:700">→</div>
<div style="flex:1; min-width:140px; border:1px solid var(--vca-line); border-top:3px solid var(--vca-warn); border-radius:var(--vca-r); background:#fff; padding:10px 12px"><div style="font-weight:700; font-size:0.8em; color:var(--vca-warn)">Score vs hidden oracle</div><div style="font-size:0.75em; color:var(--vca-soft); line-height:1.45">deterministic rule + small LLM-judge layer</div></div>
</div>
<div class="vca-figcap">The model coordinates helpers and long-running jobs; every action is recorded, and the score is read from that event log against a hidden reference, crediting good delegation, scheduling, conflict resolution, and verification, never the harness's own plumbing. It aims to reproduce the arena's process signal with no human in the loop.</div>
  </div>
  <p class="vca-note">
    The design principle is strict: it scores only the decisions the <em>model</em> controls (how it plans, delegates, packages context for a worker, schedules background work, resolves conflicts, orders dependent steps, verifies, and audits), never the harness's own plumbing. The test is simple: if a metric cannot separate "the model did this well" from "the harness did it automatically," it does not enter the score. And the scoring is <b>relational</b>: it is read from the event log rather than by demanding one canonical trajectory (a dependent step counts only if its event follows the one that unlocked it; conflict resolution requires re-reading the primary evidence <em>after</em> a worker reports rather than trusting it blindly), so many sensible ways of working score well while blind trust, premature starts, and skipped verification are caught precisely. The scorer is built and reproducible; what remains is to calibrate it against the arena's human grades and confirm it separates models the way the arena does.
  </p>

  <p class="vca-sub">Automating the correction</p>
  <p class="vca-note">
    Harder than automating the grading is the arena's defining act: the human who notices "the right pane is blank for every directory" and hands that back, round after round. That correction is exactly what a read-once score cannot produce, and reproducing it automatically runs into a structural tension between <em>information</em> and <em>measurement validity</em>. A task-agnostic nudge ("check your work again") is safe but carries no new information: it only asks the model to re-examine what it already has, with the very knowledge that produced the error. In practice such a scaffold lifts success rates a little but cannot point the model at the actual fault. Handing over the reference answer is informative but discloses it, voiding the measurement. A workable automated corrector would have to be all of the following at once, and they pull against one another:
  </p>
  <ul class="vca-note">
    <li><b>Information-bearing</b> — it must tell the model something it did not already have; a generic "check again" does not.</li>
    <li><b>Non-disclosing</b> — it must not reveal the intended answer, or the measurement is void.</li>
    <li><b>Automatic and cross-round</b> — supplied without a human, adapting as the trajectory unfolds.</li>
    <li><b>Stable</b> — reproducible enough to rank models, despite an LLM in the loop.</li>
  </ul>
  <p class="vca-note">
    The tension is structural: the more informative a corrective signal is, the closer it drifts to disclosing the answer. One direction is suggested by the human correction itself: "the right pane is blank" is an observation about the <em>environment's state</em>, not about the intended answer, so it carries information the model lacked without revealing what the result should be. It leans on a familiar asymmetry: noticing that something is wrong is often easier than knowing the fix. A blank pane, a validation that never ran, or two of the model's own code paths that disagree can all be surfaced without solving the task. Whether an environment-grounded signal like that can stand in for a human corrector, round after round, is exactly the open problem this line of work points to next.
  </p>
</div>

<div style="margin-top:44px; padding:18px 22px; border:1px solid var(--vca-line); border-left:4px solid var(--vca-blue); border-radius:var(--vca-r); background:#fff;">
<div style="font-weight:700; color:var(--vca-ink); margin-bottom:6px">Citation</div>
<div style="font-size:0.92em; color:#333; margin-bottom:10px">If you find Vibe-Coding Arena useful in your research, please kindly cite:</div>
<pre style="background:#1a1a1a; color:#e2e8f0; padding:14px 16px; border-radius:var(--vca-r); overflow-x:auto; font-size:12px; line-height:1.6; margin:0; border:0;">@misc{unipat2026vibecodingarena,
  title   = {Vibe-Coding Arena: Grading the Whole Development Process, Round by Round},
  author  = {UniPat AI},
  year    = {2026},
  url     = {https://unipat.ai/blog/Vibe-Coding-Arena},
}</pre>
</div>

<nav class="vca-toc" id="vca-toc">
<div class="vca-toc-toggle" id="vca-toc-toggle" title="Toggle contents">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
<div class="vca-toc-title">On this page</div>
<div class="vca-toc-progress"><div class="vca-toc-progress-bar" id="vca-progress"></div></div>
<ul class="vca-toc-list">
<li class="vca-toc-item"><a href="#vca-results" class="vca-toc-link">Results</a></li>
<li class="vca-toc-item"><a href="#vca-problem" class="vca-toc-link">The problem</a></li>
<li class="vca-toc-item"><a href="#vca-approach" class="vca-toc-link">Vibe-Coding Arena</a></li>
<li class="vca-toc-item"><a href="#vca-example" class="vca-toc-link">Worked example</a></li>
<li class="vca-toc-item"><a href="#vca-future" class="vca-toc-link">What's next</a></li>
</ul>
</nav>

<script>
(function() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTOC);
    } else {
        initTOC();
    }
    function initTOC() {
        var toc = document.getElementById('vca-toc');
        var bar = document.getElementById('vca-progress');
        var links = document.querySelectorAll('.vca-toc-link');
        var toggle = document.getElementById('vca-toc-toggle');
        if (!toc || !bar || !links.length) return;
        if (toggle) toggle.addEventListener('click', function() { toc.classList.toggle('collapsed'); });
        function fit() {
            var cw = Math.min(980, window.innerWidth * 0.9);
            var space = (window.innerWidth - cw) / 2;
            if (space < 100) { toc.style.display = 'none'; return; }
            toc.style.display = '';
            var w = Math.min(216, space - 20);
            toc.style.width = Math.max(172, w) + 'px';
            toc.style.right = Math.max(5, space - w - 15) + 'px';
        }
        fit();
        window.addEventListener('resize', fit);
        var heads = [];
        links.forEach(function(l) {
            var el = document.getElementById(l.getAttribute('href').substring(1));
            if (el) heads.push({ el: el, link: l });
        });
        function update() {
            var dh = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = (dh > 0 ? Math.min(window.scrollY / dh * 100, 100) : 0) + '%';
            var pos = window.scrollY + 150, cur = null;
            for (var i = heads.length - 1; i >= 0; i--) {
                if (heads[i].el.offsetTop <= pos) { cur = heads[i]; break; }
            }
            links.forEach(function(l) { l.classList.remove('active'); });
            if (cur) cur.link.classList.add('active');
        }
        links.forEach(function(l) {
            l.addEventListener('click', function(e) {
                e.preventDefault();
                var t = document.getElementById(this.getAttribute('href').substring(1));
                if (t) window.scrollTo({ top: t.offsetTop - 100, behavior: 'smooth' });
            });
        });
        var tick = false;
        window.addEventListener('scroll', function() {
            if (!tick) { window.requestAnimationFrame(function() { update(); tick = false; }); tick = true; }
        });
        update();
    }
})();
</script>
