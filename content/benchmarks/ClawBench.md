Title: ClawBench
Date: 2026-06-19
Rank: Claude Opus 4.7: 44.6% V2 Reward
Domain: Computer-Use Agents
Summary: Can AI browser agents complete everyday online tasks on live websites? ClawBench evaluates agents across V1/V2 tasks with isolated Chrome runs, request interception, five-layer traces, and agentic judging.
HeaderImage: /static/images/clawbench/20260623-213206.png

<style>
:root {
    --cb-ink: #111827;
    --cb-muted: #5f6673;
    --cb-soft: #f4f7fb;
    --cb-line: #dce3ee;
    --cb-blue: #2850d8;
    --cb-teal: #0f766e;
    --cb-gold: #c27b00;
    --cb-red: #c2410c;
    --cb-white: #ffffff;
    --cb-radius: 8px;
}

.markdown:has(.cb-page) { max-width: 100% !important; }
.container:has(.cb-page) { max-width: 1240px !important; width: 95% !important; }

.cb-page {
    color: var(--cb-ink);
    font-family: "Space Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}

.cb-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(240px, .7fr);
    gap: 28px;
    align-items: center;
    padding: 10px 0 24px;
    border-bottom: 2px solid var(--cb-ink);
}

.cb-kicker {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px solid var(--cb-line);
    border-radius: 999px;
    color: var(--cb-blue);
    background: #eef3ff;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
}

.cb-hero h2 {
    margin: 18px 0 12px;
    max-width: 850px;
    font-size: clamp(26px, 4vw, 48px);
    line-height: 1.08;
    letter-spacing: 0;
}

.cb-hero p {
    max-width: 760px;
    margin: 0;
    color: var(--cb-muted);
    font-size: 15px;
    line-height: 1.75;
}

.cb-hero-art {
    justify-self: center;
    width: min(100%, 330px);
    border: 1px solid var(--cb-line);
    border-radius: var(--cb-radius);
    background: linear-gradient(180deg, #ffffff 0%, #f7faff 100%);
    padding: 26px;
}

.cb-hero-art img {
    width: 100%;
    display: block;
    margin: 0;
}

.cb-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0 0;
}

.cb-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    padding: 8px 14px;
    border: 1.5px solid var(--cb-ink);
    border-radius: 999px;
    background: var(--cb-white);
    color: var(--cb-ink) !important;
    font-size: 12px;
    font-weight: 700;
    text-decoration: none !important;
    transition: transform .15s ease, background .15s ease, color .15s ease;
}

.cb-link:hover {
    transform: translateY(-1px);
    background: var(--cb-ink);
    color: var(--cb-white) !important;
}

.cb-link-primary {
    background: var(--cb-blue);
    border-color: var(--cb-blue);
    color: var(--cb-white) !important;
}

.cb-section {
    margin: 36px 0;
}

.cb-section h2 {
    margin: 0 0 14px;
    font-size: 22px;
    line-height: 1.25;
}

.cb-section p {
    color: var(--cb-muted);
    font-size: 14px;
    line-height: 1.75;
}

.cb-stats {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 10px;
    margin: 24px 0 4px;
}

.cb-stat {
    border: 1px solid var(--cb-line);
    border-radius: var(--cb-radius);
    background: var(--cb-white);
    padding: 16px 12px;
    text-align: center;
}

.cb-stat strong {
    display: block;
    font-size: clamp(22px, 3vw, 34px);
    line-height: 1;
}

.cb-stat span {
    display: block;
    margin-top: 8px;
    color: var(--cb-muted);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
}

.cb-callout {
    border: 1px solid #bdd6ff;
    border-left: 4px solid var(--cb-blue);
    border-radius: var(--cb-radius);
    background: #f6f9ff;
    padding: 16px 18px;
    margin: 18px 0;
}

.cb-split {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 16px;
    align-items: start;
}

.cb-panel {
    border: 1px solid var(--cb-line);
    border-radius: var(--cb-radius);
    background: var(--cb-white);
    padding: 18px;
}

.cb-panel h3 {
    margin: 0 0 10px;
    font-size: 16px;
}

.cb-panel p {
    margin: 0 0 12px;
    font-size: 13px;
}

.cb-panel p:last-child { margin-bottom: 0; }

.cb-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
}

.cb-card {
    border: 1px solid var(--cb-line);
    border-radius: var(--cb-radius);
    background: var(--cb-white);
    padding: 16px;
}

.cb-card h3 {
    margin: 0 0 8px;
    font-size: 15px;
}

.cb-card p {
    margin: 0;
    font-size: 12.5px;
}

.cb-card strong {
    display: block;
    margin-bottom: 6px;
    color: var(--cb-blue);
    font-size: 18px;
}

.cb-taxonomy {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 8px;
}

.cb-taxonomy div {
    border: 1px solid var(--cb-line);
    border-radius: 999px;
    background: var(--cb-soft);
    padding: 8px 10px;
    color: var(--cb-muted);
    font-size: 11px;
    font-weight: 700;
    text-align: center;
}

.cb-taxonomy strong {
    color: var(--cb-ink);
}

.cb-table-wrap {
    overflow-x: auto;
    border: 1px solid var(--cb-line);
    border-radius: var(--cb-radius);
    background: var(--cb-white);
}

.cb-table {
    width: 100%;
    min-width: 760px;
    border-collapse: collapse;
    font-size: 13px;
}

.cb-table th {
    padding: 12px 10px;
    border-bottom: 2px solid var(--cb-line);
    background: var(--cb-soft);
    color: var(--cb-muted);
    font-size: 10px;
    letter-spacing: .04em;
    text-transform: uppercase;
    text-align: left;
    white-space: nowrap;
}

.cb-table td {
    padding: 12px 10px;
    border-bottom: 1px solid var(--cb-line);
    vertical-align: middle;
}

.cb-table tbody tr:last-child td { border-bottom: none; }
.cb-rank { font-weight: 700; color: var(--cb-gold); }
.cb-model { font-weight: 700; }
.cb-harness { color: var(--cb-muted); font-size: 12px; }
.cb-score { font-weight: 700; color: var(--cb-blue); }
.cb-score-secondary { font-weight: 700; color: var(--cb-teal); }
.cb-score-strict { font-weight: 700; color: var(--cb-red); }

.cb-yes { color: var(--cb-teal); font-weight: 700; }
.cb-no { color: var(--cb-red); font-weight: 700; }

.cb-meter {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-width: 118px;
}

.cb-meter-track {
    width: 66px;
    height: 7px;
    border-radius: 999px;
    background: #e7edf8;
    overflow: hidden;
}

.cb-meter-fill {
    height: 100%;
    border-radius: inherit;
    background: var(--cb-blue);
}

.cb-flow {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 10px;
    margin-top: 16px;
}

.cb-flow-step {
    position: relative;
    border: 1px solid var(--cb-line);
    border-radius: var(--cb-radius);
    background: var(--cb-white);
    padding: 14px;
    min-height: 134px;
}

.cb-flow-step b {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    margin-bottom: 10px;
    border-radius: 999px;
    background: var(--cb-ink);
    color: var(--cb-white);
    font-size: 12px;
}

.cb-flow-step h3 {
    margin: 0 0 6px;
    font-size: 13px;
}

.cb-flow-step p {
    margin: 0;
    font-size: 11.5px;
}

.cb-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin: 16px 0 0;
    padding: 0;
    list-style: none;
}

.cb-list li {
    border: 1px solid var(--cb-line);
    border-radius: var(--cb-radius);
    background: var(--cb-soft);
    padding: 12px;
    color: var(--cb-muted);
    font-size: 12.5px;
    line-height: 1.6;
}

.cb-list strong {
    color: var(--cb-ink);
}

.cb-datasets {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
}

.cb-resource {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 150px;
    border: 1px solid var(--cb-line);
    border-radius: var(--cb-radius);
    background: var(--cb-soft);
    padding: 16px;
}

.cb-resource strong {
    font-size: 14px;
}

.cb-resource p {
    margin: 0;
    font-size: 12.5px;
}

.cb-resource a {
    margin-top: auto;
    color: var(--cb-blue) !important;
    font-size: 12px;
    font-weight: 700;
}

.cb-code {
    margin: 16px 0 0;
    border: 1px solid var(--cb-line);
    border-radius: var(--cb-radius);
    background: #0d1320;
    color: #f8fafc;
    padding: 16px;
    overflow-x: auto;
    font-size: 13px;
    line-height: 1.7;
}

.cb-note {
    color: var(--cb-muted);
    font-size: 12px;
    line-height: 1.6;
}

@media (max-width: 900px) {
    .cb-hero { grid-template-columns: 1fr; }
    .cb-hero-art { justify-self: start; max-width: 260px; }
    .cb-stats { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .cb-split { grid-template-columns: 1fr; }
    .cb-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .cb-taxonomy { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .cb-flow { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .cb-datasets { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
    .cb-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .cb-grid { grid-template-columns: 1fr; }
    .cb-taxonomy { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .cb-flow { grid-template-columns: 1fr; }
    .cb-list { grid-template-columns: 1fr; }
    .cb-link { width: 100%; }
}
</style>

<div class="cb-page">
    <section class="cb-hero">
        <div>
            <div class="cb-kicker">Live-Web Browser Agent Benchmark</div>
            <h2>Can AI agents finish everyday online tasks where the web is messy, dynamic, and real?</h2>
            <p>
                ClawBench evaluates browser agents on live websites: booking travel, ordering food, applying for jobs,
                managing email, researching finance, and more. Runs are executed in isolated Chrome environments,
                recorded across five layers, and scored through request interception plus an LLM judge.
            </p>
            <div class="cb-links">
                <a class="cb-link" href="https://claw-bench.com/leaderboard" target="_blank" rel="noopener noreferrer">Leaderboard</a>
                <a class="cb-link" href="https://claw-bench.com" target="_blank" rel="noopener noreferrer">Website</a>
                <a class="cb-link" href="https://github.com/TIGER-AI-Lab/ClawBench" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a class="cb-link" href="https://arxiv.org/abs/2604.08523" target="_blank" rel="noopener noreferrer">Paper</a>
                <a class="cb-link" href="https://huggingface.co/spaces/TIGER-Lab/ClawBench" target="_blank" rel="noopener noreferrer">HF Space</a>
                <a class="cb-link" href="https://huggingface.co/datasets/NAIL-Group/ClawBench" target="_blank" rel="noopener noreferrer">Dataset</a>
                <a class="cb-link" href="https://claw-bench.com/tasks" target="_blank" rel="noopener noreferrer">Task Explorer</a>
            </div>
        </div>
        <div class="cb-hero-art">
            <img src="/static/images/clawbench/20260623-213206.png" alt="ClawBench logo" />
        </div>
    </section>

    <section class="cb-section">
        <div class="cb-stats">
            <div class="cb-stat"><strong>283</strong><span>Total Tasks</span></div>
            <div class="cb-stat"><strong>153</strong><span>V1 Tasks</span></div>
            <div class="cb-stat"><strong>130</strong><span>V2 Tasks</span></div>
            <div class="cb-stat"><strong>163</strong><span>Live Platforms</span></div>
            <div class="cb-stat"><strong>5</strong><span>Trace Layers</span></div>
        </div>
        <div class="cb-callout">
            <p>
                <strong>Official snapshot:</strong> the leaderboard numbers below are from the 2026-05-20 ClawBench
                V2 Hermes snapshot. The public leaderboard is live, so there may be new submissions.
                <br />
                The <strong>163 live platforms</strong> figure refers to the current public V1+V2 task explorer; the
                <strong>144 live platforms</strong> figure later on this page refers specifically to the original V1
                corpus.
            </p>
        </div>
    </section>

    <section class="cb-section">
        <h2>Why Another Web-Agent Benchmark?</h2>
        <div class="cb-split">
            <div class="cb-panel">
                <h3>The missing target is state change</h3>
                <p>
                    Many web-agent benchmarks test navigation, information lookup, or controlled sandbox tasks.
                    ClawBench instead asks whether an agent can carry user-specific information through a production
                    website until it reaches the exact terminal action that would normally submit an order, booking,
                    application, message, review, or account update.
                </p>
                <p>
                    This is a different capability from answering a question about a webpage. The agent must handle
                    dynamic JavaScript, validation rules, cookies, popups, session state, search results, multi-page
                    forms, and the final "commit" moment where a user would normally create real-world consequences.
                </p>
            </div>
            <div class="cb-panel">
                <h3>Realism without unsafe side effects</h3>
                <p>
                    The paper's core safety mechanism is final-request interception. During human annotation, the
                    evaluator identifies the HTTP request that commits the irreversible action. During agent runs,
                    the harness captures that request and payload, blocks it before it reaches the production server,
                    and records it as evaluation evidence.
                </p>
                <p>
                    All ordinary page loads, searches, authentication steps, images, scripts, analytics calls, and
                    form interactions still happen on the live site. The benchmark is therefore live-web by default,
                    but task-scoped at the single terminal request where safety matters.
                </p>
            </div>
        </div>
    </section>

    <section class="cb-section">
        <h2>Benchmark Design</h2>
        <p>
            The paper introduces ClawBench around three design choices: daily-life task coverage rather than
            synthetic templates, live production-web execution rather than offline traces, and trace-grounded
            Agent-as-Judge scoring rather than URL or final-page heuristics. The released project extends this into
            the V1/V2 benchmark family shown above.
        </p>
        <div class="cb-flow">
            <div class="cb-flow-step">
                <b>1</b>
                <h3>Task Card</h3>
                <p>Natural-language instruction, starting URL, user profile/files, constraints, and success rubric.</p>
            </div>
            <div class="cb-flow-step">
                <b>2</b>
                <h3>Human Reference</h3>
                <p>Annotator completes the workflow in the same browser stack and records the reference trajectory.</p>
            </div>
            <div class="cb-flow-step">
                <b>3</b>
                <h3>Terminal Request</h3>
                <p>The final HTTP request pattern, method, and required payload fields are annotated for safe blocking.</p>
            </div>
            <div class="cb-flow-step">
                <b>4</b>
                <h3>Agent Execution</h3>
                <p>The model controls Chromium through a harness while the extension and CDP server record activity.</p>
            </div>
            <div class="cb-flow-step">
                <b>5</b>
                <h3>Trace Judging</h3>
                <p>The evaluator compares task, human run, agent run, and intercepted payload to produce a verdict.</p>
            </div>
        </div>
    </section>

    <section class="cb-section">
        <h2>V1 Task Taxonomy</h2>
        <p>
            The V1 version contains 153 tasks across 144 live platforms, organized into eight broad
            category groups and fifteen fine-grained categories. The emphasis is breadth: many different everyday
            platforms, not repeated interactions with a small benchmark website.
        </p>
        <div class="cb-taxonomy">
            <div><strong>Daily Life</strong> 21</div>
            <div><strong>Shopping</strong> 16</div>
            <div><strong>Entertainment</strong> 15</div>
            <div><strong>Dev & Tech</strong> 15</div>
            <div><strong>Travel</strong> 13</div>
            <div><strong>Pets</strong> 11</div>
            <div><strong>Rating</strong> 10</div>
            <div><strong>Office</strong> 9</div>
            <div><strong>Education</strong> 9</div>
            <div><strong>Job Search</strong> 8</div>
            <div><strong>Social</strong> 8</div>
            <div><strong>Finance</strong> 6</div>
            <div><strong>Academia</strong> 5</div>
            <div><strong>Personal Mgmt</strong> 4</div>
            <div><strong>Automation</strong> 3</div>
        </div>
    </section>

    <section class="cb-section">
        <h2>What Makes ClawBench Different?</h2>
        <p>
            ClawBench positions itself against static traces, self-hosted sandboxes, read-only live-web suites,
            and agent-company simulations. Its niche is the combination: real production websites, write-heavy tasks,
            human reference trajectories, five-layer recording, and final-request interception.
        </p>
        <div class="cb-table-wrap">
            <table class="cb-table">
                <thead>
                    <tr>
                        <th>Benchmark</th>
                        <th>Environment</th>
                        <th>Task Type</th>
                        <th>Verification</th>
                        <th>Recording</th>
                        <th>Human Trajectory</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div class="cb-model">Mind2Web</div></td>
                        <td>Offline traces</td>
                        <td>Read-only</td>
                        <td>Action sequence match</td>
                        <td>None</td>
                        <td>Partial</td>
                    </tr>
                    <tr>
                        <td><div class="cb-model">WebArena / VisualWebArena</div></td>
                        <td>Self-hosted sandbox</td>
                        <td>Mixed</td>
                        <td>Script-based</td>
                        <td>Limited</td>
                        <td><span class="cb-no">No</span></td>
                    </tr>
                    <tr>
                        <td><div class="cb-model">WebVoyager</div></td>
                        <td>Real web</td>
                        <td>Read-only</td>
                        <td>LLM-as-judge</td>
                        <td>Screenshots</td>
                        <td><span class="cb-no">No</span></td>
                    </tr>
                    <tr>
                        <td><div class="cb-model">Online-Mind2Web</div></td>
                        <td>Real web</td>
                        <td>Read-only</td>
                        <td>Human + LLM judge</td>
                        <td>Screenshots</td>
                        <td><span class="cb-no">No</span></td>
                    </tr>
                    <tr>
                        <td><div class="cb-model">ClawBench</div></td>
                        <td>Real web</td>
                        <td>Write-heavy</td>
                        <td>Agent-as-Judge</td>
                        <td>Five layers</td>
                        <td><span class="cb-yes">All tasks</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section class="cb-section">
        <h2>V2 Hermes Leaderboard</h2>
        <p>
            V2 is the latest corpus with better task choices and more supported harnesses. Results below report intercepted success, lenient reward,
            strict reward, and pass count over 130 tasks. The official table ranks by intercepted success with reward as tiebreak.
        </p>
        <div class="cb-table-wrap">
            <table class="cb-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Model</th>
                        <th>Harness</th>
                        <th>Intercepted</th>
                        <th>Lenient Reward</th>
                        <th>Strict Reward</th>
                        <th>Passed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="cb-rank">1</td>
                        <td><div class="cb-model">Claude Opus 4.7</div></td>
                        <td class="cb-harness">Hermes</td>
                        <td><span class="cb-meter"><span class="cb-meter-track"><span class="cb-meter-fill" style="width:54.6%"></span></span>54.6%</span></td>
                        <td class="cb-score">44.6%</td>
                        <td class="cb-score-strict">24.6%</td>
                        <td>58 / 130</td>
                    </tr>
                    <tr>
                        <td class="cb-rank">2</td>
                        <td><div class="cb-model">GPT-5.5</div></td>
                        <td class="cb-harness">Hermes</td>
                        <td><span class="cb-meter"><span class="cb-meter-track"><span class="cb-meter-fill" style="width:45.4%"></span></span>45.4%</span></td>
                        <td class="cb-score">35.4%</td>
                        <td class="cb-score-strict">18.5%</td>
                        <td>46 / 130</td>
                    </tr>
                    <tr>
                        <td class="cb-rank">3</td>
                        <td><div class="cb-model">GLM-5.1</div></td>
                        <td class="cb-harness">Hermes</td>
                        <td><span class="cb-meter"><span class="cb-meter-track"><span class="cb-meter-fill" style="width:48.5%"></span></span>48.5%</span></td>
                        <td class="cb-score">34.6%</td>
                        <td class="cb-score-strict">17.7%</td>
                        <td>45 / 130</td>
                    </tr>
                    <tr>
                        <td class="cb-rank">4</td>
                        <td><div class="cb-model">DeepSeek V4 Pro</div></td>
                        <td class="cb-harness">Hermes</td>
                        <td><span class="cb-meter"><span class="cb-meter-track"><span class="cb-meter-fill" style="width:43.9%"></span></span>43.9%</span></td>
                        <td class="cb-score">33.9%</td>
                        <td class="cb-score-strict">12.3%</td>
                        <td>44 / 130</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="cb-note">Leaderboard snapshot date: 2026-05-20. Higher is better for all percentage metrics.</p>
    </section>

    <section class="cb-section">
        <h2>Eight-Model V1 Evaluation</h2>
        <p>
            The V1 version evaluates eight frontier models under a shared OpenClaw browser-agent harness. The
            striking result is not just that the best model is low; it is that no model is close to reliable on
            everyday write-heavy workflows. Claude Sonnet 4.6 reaches 33.3% success, Qwen 3.5 reaches 26.1%, GLM-5
            reaches 24.2%, and GPT-5.4 reaches only 6.5% in that original setup.
        </p>
        <div class="cb-table-wrap">
            <table class="cb-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Model</th>
                        <th>Overall SR</th>
                        <th>Avg. Cost / Task</th>
                        <th>Avg. Tokens / Task</th>
                        <th>Strongest Categories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="cb-rank">1</td>
                        <td><div class="cb-model">Claude Sonnet 4.6</div></td>
                        <td class="cb-score">33.3%</td>
                        <td>$7.51</td>
                        <td>5.47M</td>
                        <td>Daily, Finance, Academic, Social</td>
                    </tr>
                    <tr>
                        <td class="cb-rank">2</td>
                        <td><div class="cb-model">Qwen 3.5</div></td>
                        <td class="cb-score">26.1%</td>
                        <td>$1.02</td>
                        <td>2.52M</td>
                        <td>Finance, Travel, Pets</td>
                    </tr>
                    <tr>
                        <td class="cb-rank">3</td>
                        <td><div class="cb-model">GLM-5</div></td>
                        <td class="cb-score">24.2%</td>
                        <td>$0.64</td>
                        <td>3.33M</td>
                        <td>Work</td>
                    </tr>
                    <tr>
                        <td class="cb-rank">4</td>
                        <td><div class="cb-model">Gemini 3 Flash</div></td>
                        <td class="cb-score">19.0%</td>
                        <td>$1.55</td>
                        <td>5.81M</td>
                        <td>Travel, Automation</td>
                    </tr>
                    <tr>
                        <td class="cb-rank">5</td>
                        <td><div class="cb-model">Claude Haiku 4.5</div></td>
                        <td class="cb-score">18.3%</td>
                        <td>$1.68</td>
                        <td>4.56M</td>
                        <td>Dev, Automation</td>
                    </tr>
                    <tr>
                        <td class="cb-rank">6</td>
                        <td><div class="cb-model">Gemini 3.1 Pro</div></td>
                        <td class="cb-score">9.8%</td>
                        <td>$3.34</td>
                        <td>3.16M</td>
                        <td>Dev</td>
                    </tr>
                    <tr>
                        <td class="cb-rank">7</td>
                        <td><div class="cb-model">GPT-5.4</div></td>
                        <td class="cb-score">6.5%</td>
                        <td>$1.91</td>
                        <td>2.66M</td>
                        <td>Dev, Pets</td>
                    </tr>
                    <tr>
                        <td class="cb-rank">8</td>
                        <td><div class="cb-model">Gemini 3.1 Flash Lite</div></td>
                        <td class="cb-score">3.3%</td>
                        <td>$0.11</td>
                        <td>1.18M</td>
                        <td>Academic, Pets</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section class="cb-section">
        <h2>Task-Level Saturation</h2>
        <div class="cb-grid">
            <div class="cb-card">
                <strong>68 / 153</strong>
                <h3>Solved by no model</h3>
                <p>In V1's eight-model panel, 44.4% of V1 tasks are not completed by any evaluated agent.</p>
            </div>
            <div class="cb-card">
                <strong>0</strong>
                <h3>Solved by all models</h3>
                <p>No task is solved by all eight models, showing the benchmark is not saturated even task-by-task.</p>
            </div>
            <div class="cb-card">
                <strong>1</strong>
                <h3>Solved by seven models</h3>
                <p>Only one task comes close to universal success among the evaluated systems.</p>
            </div>
            <div class="cb-card">
                <strong>0.125</strong>
                <h3>Median solve rate</h3>
                <p>The V1 results reported a low median task solve rate across the model panel.</p>
            </div>
        </div>
    </section>

    <section class="cb-section">
        <h2>How It Works</h2>
        <p>
            A ClawBench run is useful because it is not reduced to one final screenshot. The trace captures what the
            agent saw, what it said to itself or the model, what actions it issued, what the browser did, and what
            network traffic resulted. That lets the evaluator distinguish a missing field, a wrong payload, a blocker,
            an early stop, and a correct terminal attempt intercepted for safety.
        </p>
        <div class="cb-grid">
            <div class="cb-card">
                <h3>Live Websites</h3>
                <p>Tasks happen on real online services, preserving the layout changes, flows, and edge cases agents face outside toy environments.</p>
            </div>
            <div class="cb-card">
                <h3>Isolated Chrome Runs</h3>
                <p>Each run starts inside a controlled container with Chromium, harness code, model configuration, and task metadata.</p>
            </div>
            <div class="cb-card">
                <h3>Request Interception</h3>
                <p>The benchmark captures final-state requests and other decisive browser activity so scoring can verify task completion directly.</p>
            </div>
            <div class="cb-card">
                <h3>Agentic Judging</h3>
                <p>An LLM judge reviews the trace and task rubric, giving partial credit where the intercepted signal alone is insufficient.</p>
            </div>
        </div>
    </section>

    <section class="cb-section">
        <h2>Evaluation and Safety Audits</h2>
        <div class="cb-split">
            <div class="cb-panel">
                <h3>Five synchronized evidence layers</h3>
                <p>
                    Each run collects a five-layer trajectory: full-session video, per-step screenshots,
                    HTTP traffic, agent messages, and low-level browser actions. Human reference trajectories are
                    recorded under the same setup, so the judge can compare the agent against a concrete successful
                    path without requiring the agent to follow that path exactly.
                </p>
                <p>
                    The Agent-as-Judge receives the task instruction, task-card constraints, human reference, agent
                    trace, and intercepted payload when available. It returns a binary pass/fail verdict with a
                    structured justification grounded in recorded evidence.
                </p>
            </div>
            <div class="cb-panel">
                <h3>Audited interception envelope</h3>
                <p>
                    In the paper's validation study, the extension blocked the annotated terminal request in 100% of
                    153 human reference runs, with zero false-positive blocks on navigation traffic.
                </p>
                <p>
                    The judge audit compares Agent-as-Judge against human reviewers: 93.46% raw agreement on Claude
                    Sonnet 4.6 runs and 84.97% raw agreement on GPT-5.4 runs in the reported two-model subset.
                </p>
            </div>
        </div>
    </section>

    <section class="cb-section">
        <h2>What Fails in Practice?</h2>
        <p>
            The trace analysis reveals that failures are not simply "the model did not think hard enough."
            Many unsuccessful runs are long, active, and visibly stuck. Agents may explore for many turns, loop on
            a validation wall, fill forms with subtle errors, refuse benign consequential tasks, or stop one step
            before the intercepted final request.
        </p>
        <ul class="cb-list">
            <li><strong>Anti-bot and verification walls.</strong> Production sites deploy CAPTCHA, phone verification, CDN challenges, bot checks, and session defenses that do not appear in static benchmarks.</li>
            <li><strong>Last-mile hesitation.</strong> Many agents interact substantially with a site but fail to reach the final confirmation or final intercepted request.</li>
            <li><strong>Non-human interaction patterns.</strong> The paper reports key intervals of 3-16 ms for agents versus roughly 191-271 ms for humans, missing mouse dynamics, and coarse scrolling.</li>
            <li><strong>Safety refusals and early stops.</strong> Some models decline ordinary but consequential user requests, exit early, idle, or time out before the workflow is complete.</li>
            <li><strong>Payload-level mistakes.</strong> Even when agents reach the right endpoint, the submitted payload can have missing fields, wrong dates, wrong user information, or semantically mismatched values.</li>
            <li><strong>Domain-specific brittleness.</strong> Category leaders differ: the paper reports Sonnet strongest overall, GLM-5 strongest on Work, Haiku 4.5 strongest on Dev, and Qwen/Gemini sharing Travel strength.</li>
        </ul>
    </section>

    <section class="cb-section">
        <h2>Realism Tradeoffs</h2>
        <p>
            ClawBench intentionally trades some rerun determinism for ecological validity. Live websites change their
            layouts, A/B tests, account states, regional behavior, and anti-automation systems. The benchmark responds
            by recording human references, screenshots, actions, traffic, messages, payloads, and judge rationales so
            each individual outcome remains auditable even when the web drifts.
        </p>
        <p>
            The paper is also explicit that scores are scaffold-conditioned: the original results measure each model
            inside a shared browser-agent harness rather than the language model in isolation. A better harness can
            improve the same base model, which is exactly why the current public leaderboard reports model/harness
            combinations such as V2 Hermes.
        </p>
    </section>

    <section class="cb-section">
        <h2>Open Data and Traces</h2>
        <p>
            ClawBench publishes task definitions plus full execution traces so researchers can inspect, rescore,
            and reproduce model behavior instead of relying only on aggregate scores.
        </p>
        <div class="cb-datasets">
            <div class="cb-resource">
                <strong>Task Dataset</strong>
                <p>Task definitions, rubrics, and metadata for V1 and V2.</p>
                <a href="https://huggingface.co/datasets/NAIL-Group/ClawBench" target="_blank" rel="noopener noreferrer">dataset</a>
            </div>
            <div class="cb-resource">
                <strong>V1 Trace Dataset</strong>
                <p>Recording video, actions, requests, messages, interception data, and run metadata for V1 runs.</p>
                <a href="https://huggingface.co/datasets/NAIL-Group/ClawBenchV1Trace" target="_blank" rel="noopener noreferrer">V1 traces</a>
            </div>
            <div class="cb-resource">
                <strong>V2 Trace Dataset</strong>
                <p>The same five-layer trace bundle for V2 runs, aligned with the current default corpus.</p>
                <a href="https://huggingface.co/datasets/NAIL-Group/ClawBenchV2Trace" target="_blank" rel="noopener noreferrer">V2 traces</a>
            </div>
        </div>
    </section>

    <section class="cb-section">
        <h2>Run ClawBench</h2>
        <p>
            Install the evaluator, configure a model, and run the corpus from an isolated harness.
            You may also clone the GitHub repo to inspect the code, run a local test task, or evaluate your own harness. Contributions are welcome if you want to add a new model, a new task, or a new harness!
        </p>
<pre class="cb-code">
uv tool install clawbench-eval
clawbench </pre>
    </section>

    <section class="cb-section">
        <h2>Citation</h2>
        <pre class="cb-code"><code>@misc{clawbench2026,
  title = {ClawBench: Can AI Agents Complete Everyday Online Tasks?},
  author = {Yuxuan Zhang and Yubo Wang and Yipeng Zhu and Penghui Du and Junwen Miao and Xuan Lu and Wendong Xu and Yunzhuo Hao and Songcheng Cai and Xiaochen Wang and Huaisong Zhang and Xian Wu and Yi Lu and Minyi Lei and Kai Zou and Huifeng Yin and Ping Nie and Liang Chen and Dongfu Jiang and Wenhu Chen and Kelsey R. Allen},
  year = {2026},
  eprint = {2604.08523},
  archivePrefix = {arXiv},
  url = {https://arxiv.org/abs/2604.08523}
}</code></pre>
    </section>

</div>
