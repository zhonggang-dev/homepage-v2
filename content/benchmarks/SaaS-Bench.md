Title: SaaS-Bench v1.1
Date: 2026-09-28
Rank: 🏆 Pine Computer / PCR · CS 78.3%
Domain: Computer-Use Agents
Summary: v1.1 results across 106 tasks and 23 SaaS systems, comparing generic and native harnesses using Checkpoint Score and Resolved Score.
HeaderImage: /static/images/SaaS-Bench/saas-logo.jpg

<link rel="stylesheet" href="/static/css/saas-bench-v1-1.css">
<div class="sb11">
<div class="sb11-hero">
<div class="sb11-kicker">SaaS-Bench / v1.1</div>
<h2>Can computer-use agents finish real SaaS workflows?</h2>
<p>Results across 106 tasks in 23 deployable SaaS applications. The v1.1 table compares a shared, open-source browser harness with each model's native agent runtime.</p>
<div class="sb11-links">
<a href="/blog/SaaS-Bench">Read the blog</a>
<a href="/benchmarks/SaaS-Bench" class="primary">Leaderboard</a>
<a href="https://github.com/UniPat-AI/SaaS-Bench" target="_blank" rel="noopener noreferrer">Code &amp; tasks</a>
<a href="https://arxiv.org/abs/2605.15777" target="_blank" rel="noopener noreferrer">Paper</a>
</div>
</div>
<div class="sb11-highlights">
<div class="sb11-highlight"><strong>78.3%</strong><span>Top CS · Pine Computer / PCR</span></div>
<div class="sb11-highlight"><strong>31.1%</strong><span>Top RS · Opus 5 / Claude Code</span></div>
<div class="sb11-highlight"><strong>106</strong><span>Tasks · 6 domains</span></div>
</div>
<h3>v1.1 Results</h3>
<p class="sb11-section-intro"><strong>CS</strong> = Checkpoint Score, measuring partial progress across verification checkpoints. <strong>RS</strong> = Resolved Score, the percentage of tasks completed end to end. The same model can have different results under different harnesses, so each model–harness pair is shown separately.</p>
<div class="sb11-table-wrap" role="region" aria-label="SaaS-Bench v1.1 results" tabindex="0">
<table class="sb11-table">
<thead><tr><th scope="col">Model</th><th scope="col">Harness</th><th scope="col">Step / task</th><th scope="col">Cost / task</th><th scope="col">Tool Call / task</th><th scope="col">CS (%)</th><th scope="col">RS (%)</th></tr></thead>
<tbody>
<tr class="sb11-group"><th colspan="7" scope="rowgroup">Generic Harness</th></tr>
<tr><td class="sb11-model">GPT-5.6 sol</td><td class="sb11-harness">Browser-Use (Open-Source)</td><td class="">142.7</td><td class="">~$14.9</td><td class="">257.7</td><td class="">69.8</td><td class="">17.9</td></tr>
<tr><td class="sb11-model">Opus 5</td><td class="sb11-harness">Browser-Use (Open-Source)</td><td class="">162.1</td><td class="">~$20.0</td><td class="">239.4</td><td class="">64.7</td><td class="">21.7</td></tr>
<tr><td class="sb11-model">Qwen 3.8 max</td><td class="sb11-harness">Browser-Use (Open-Source)</td><td class="">71.5</td><td class="">~$2.5</td><td class="">131.3</td><td class="">31.1</td><td class="">8.5</td></tr>
<tr><td class="sb11-model">Kimi K3</td><td class="sb11-harness">Browser-Use (Open-Source)</td><td class="">121.9</td><td class="">~$6.8</td><td class="">237.8</td><td class="">56.2</td><td class="">17.0</td></tr>
<tr class="sb11-group"><th colspan="7" scope="rowgroup">Native Harness</th></tr>
<tr><td class="sb11-model">GPT-5.6 sol</td><td class="sb11-harness">Codex</td><td class="">250.7</td><td class="">~$20.5</td><td class="">250.7</td><td class="">71.1</td><td class="">29.2</td></tr>
<tr><td class="sb11-model">Opus 5</td><td class="sb11-harness">Claude Code</td><td class="">270.5</td><td class="">~$26.5</td><td class="">270.5</td><td class="">74.3</td><td class="sb11-best">31.1</td></tr>
<tr><td class="sb11-model">Qwen 3.8 max</td><td class="sb11-harness">Qwen Code</td><td class="">268.9</td><td class="">~$5.1</td><td class="">268.9</td><td class="">65.9</td><td class="">23.6</td></tr>
<tr><td class="sb11-model">Kimi K3</td><td class="sb11-harness">Kimi-CLI</td><td class="">284.4</td><td class="">~$9.4</td><td class="">284.4</td><td class="">56.4</td><td class="">24.5</td></tr>
<tr><td class="sb11-model">Pine Computer</td><td class="sb11-harness">Pine Computer Runtime (PCR)</td><td class="">335.5</td><td class="">~$3.6</td><td class="">306.2</td><td class="sb11-best">78.3</td><td class="">27.4</td></tr>
</tbody></table></div>
<p class="sb11-note">Values are from the v1.1 results table. Cost per task is approximate, in USD. CS and RS are percentages. On narrow screens, scroll the table horizontally to view every column.</p>
<div class="sb11-takeaway"><strong>What the results show.</strong> Under the generic harness, GPT-5.6 sol has the highest CS (69.8%), while Opus 5 has the highest RS (21.7%). Under native harnesses, Pine Computer / PCR has the highest CS (78.3%), while Opus 5 / Claude Code has the highest RS (31.1%).</div>
<div class="sb11-footer">SaaS-Bench v1.1 · <a href="/blog/SaaS-Bench">Read results and case studies</a></div>
</div>
