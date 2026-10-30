Title: UniMath: From Proof-Synthesis Data to Test-Time Self-Evolution
Date: 2026-07-13
Summary: UniMath-35B-A3B is an open-source olympiad gold-medal mathematical model post-trained from Qwen3.6-35B-A3B. Fine-grained proof-evolution data activates its self-evolving reasoning capability, enabling human gold-medal-level performance on IMO 2025 and USAMO 2026. 
HeaderImage: /static/images/unimath/logo_unimath.png

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,500;1,400;1,500&display=swap');

:root {
    --um-font: 'Inter', -apple-system, sans-serif;
    --um-mono: 'JetBrains Mono', monospace;
    --um-serif: 'Source Serif 4', Georgia, serif;
    --um-ink: #16182b;
    --um-ink-soft: #44485f;
    --um-ink-muted: #80849c;
    --um-surface: #ffffff;
    --um-raised: #f7f8fb;
    --um-sunken: #edeff5;
    --um-border: #e4e6ef;
    --um-accent: #312e81;        /* deep indigo — top score / primary */
    --um-accent-2: #4f46e5;
    --um-accent-3: #818cf8;
    --um-accent-soft: #c7d2fe;
    --um-accent-bg: rgba(49,46,129,0.05);
    --um-radius: 14px;
    --um-shadow: 0 1px 3px rgba(22,24,43,.04), 0 6px 20px rgba(22,24,43,.05);
}

.um { font-family: var(--um-font); color: var(--um-ink); }
.um * { box-sizing: border-box; }
.um a { text-decoration: none; }

/* ── Hero (minimal academic) ── */
.um-hero { margin: 6px 0 34px; padding: 38px 34px 32px; border:1px solid var(--um-border); border-radius: 18px;
    background: var(--um-surface); box-shadow: var(--um-shadow); text-align: left; }
.um-eyebrow { font-family: var(--um-mono); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--um-accent-2); margin-bottom: 14px; }
.um-hero h1 { font-size: 2.6em; font-weight: 800; margin: 0 0 16px; max-width: 820px; letter-spacing: -.4px; line-height: 1.08; color: var(--um-ink); }
.um-hero .um-sub { font-size: 1.02em; color: var(--um-ink-soft); max-width: 820px; line-height: 1.7; margin: 12px 0 0; }
.um-quote { max-width: 760px; margin: 14px 0 22px; padding: 14px 18px; border-left: 3px solid var(--um-accent-2); background: var(--um-accent-bg); border-radius: 0 10px 10px 0; color: var(--um-ink-soft); font-family: var(--um-serif); font-style: italic; font-size: 1.04em; line-height: 1.65; }
.um-quote span { display: block; margin-top: 6px; font-family: var(--um-mono); font-style: normal; font-size: 11px; letter-spacing: .04em; text-transform: uppercase; color: var(--um-ink-muted); }
.um-hero .um-sub + .um-sub { margin-top: 10px; }
.um-hero .um-sub:last-of-type { margin-bottom: 22px; }
.um-hero-links { display: flex; justify-content: flex-start; gap: 12px; flex-wrap: wrap; margin: 22px 0 4px; }
.um-hero-link { display: inline-flex; align-items: center; gap: 7px; padding: 9px 17px; border: 1px solid var(--um-accent-soft); border-radius: 8px;
    background: #eef2ff; color: var(--um-accent); font-size: 13.5px; font-weight: 800; transition: background .15s, border-color .15s, transform .15s; }
.um-hero-link:hover { background: #e0e7ff; border-color: #a5b4fc; transform: translateY(-1px); }
.um-hero-link.disabled { cursor: default; opacity: .78; transform: none; }
.um-hero-link svg { width: 17px; height: 17px; flex-shrink: 0; }
.um-link-badge { margin-left: 2px; padding: 2px 6px; border-radius: 4px; background: #fff7d6; color: #7c5a00; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: .05em; }

/* ── Section ── */
.um-section { margin: 48px 0; }
.um-section-title { font-size: 1.3em; font-weight: 800; margin: 0 0 6px; color: var(--um-ink); letter-spacing: -.3px; }
.um-section-desc { font-size: .92em; color: var(--um-ink-soft); line-height: 1.7; margin: 0 0 22px; max-width: 770px; }

/* ── Legend ── */
.um-legend { display: flex; gap: 18px; flex-wrap: wrap; justify-content: center; margin: 4px 0 18px; font-size: 12px; color: var(--um-ink-soft); font-weight: 600; }
.um-legend span { display: inline-flex; align-items: center; gap: 7px; }
.um-dot { width: 12px; height: 12px; border-radius: 3px; display: inline-block; }

/* ── Olympiad result strips ── */
.um-pp { border: 1px solid var(--um-border); border-radius: var(--um-radius); padding: 20px 22px; background: var(--um-surface); box-shadow: var(--um-shadow); }
.um-pp-head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; margin-bottom: 4px; }
.um-pp-name { font-size: 1.12em; font-weight: 800; }
.um-pp-max { font-family: var(--um-mono); font-size: 11px; color: var(--um-ink-muted); }
.um-pp-tag { font-size: 12px; color: var(--um-ink-muted); margin-bottom: 16px; line-height: 1.55; }
.um-pp-pid { font-family: var(--um-mono); font-size: 13px; font-weight: 700; color: var(--um-ink-soft); }
.um-cell { width: 30px; height: 30px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-family: var(--um-mono); font-size: 13px; font-weight: 700; }
.um-cell.big { width: 44px; height: 36px; font-size: 15px; }
.um-arrow { text-align: center; color: var(--um-ink-muted); font-size: 16px; }
.s7 { background: var(--um-accent); color: #fff; }
.s6 { background: var(--um-accent-3); color: #fff; }
.s1 { background: var(--um-sunken); color: var(--um-ink-soft); }
.s0 { background: var(--um-surface); color: var(--um-ink-muted); border: 1px dashed var(--um-border); }
.um-cell.model { border: 1px solid var(--um-border); }
.um-cell.tts { box-shadow: inset 0 0 0 2px rgba(255,255,255,.18); }
.um-cell.avg { width: 44px; height: 30px; font-size: 12px; background: var(--um-surface); color: var(--um-ink-soft); border: 1px solid var(--um-border); }
.um-result-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 16px; }
.um-score-matrix { overflow-x: auto; border: 1px solid var(--um-border); border-radius: 10px; background: var(--um-raised); }
.um-score-headline, .um-score-rowline { min-width: 680px; display: grid; grid-template-columns: 92px repeat(6, 1fr) 112px; align-items: center; }
.um-score-headline.bench, .um-score-rowline.bench { min-width: 520px; grid-template-columns: 92px repeat(3, 1fr); }
.um-score-headline { background: var(--um-sunken); color: var(--um-ink-muted); font-family: var(--um-mono); font-size: 10.5px; font-weight: 800; text-transform: uppercase; letter-spacing: .55px; }
.um-score-headline > span, .um-score-rowline > span { display: flex; align-items: center; justify-content: center; min-height: 44px; border-right: 1px solid var(--um-border); }
.um-score-headline > span:last-child, .um-score-rowline > span:last-child { border-right: none; }
.um-score-rowline + .um-score-rowline { border-top: 1px solid var(--um-border); }
.um-score-label { justify-content: flex-start !important; padding-left: 14px; font-family: var(--um-mono); font-size: 11.5px; font-weight: 800; color: var(--um-ink-soft); background: var(--um-surface); }
.um-score-rowline.tts .um-score-label { color: var(--um-accent); }
.um-score-total-cell { gap: 8px; padding: 7px 8px; color: var(--um-ink-soft); line-height: 1; }
.um-score-rowline.tts .um-score-total-cell { color: var(--um-accent); background: linear-gradient(180deg, rgba(49,46,129,.055), rgba(49,46,129,.025)); }
.um-total-score { font-family: var(--um-mono); font-size: 13px; font-weight: 850; }
.um-medal-icon { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 999px; background: #fff7d6; border: 1px solid #fde68a; font-size: 13px; line-height: 1; }

/* ── IMO-ProofBench ── */
.um-bench { border: 1px solid var(--um-border); border-radius: var(--um-radius); padding: 22px; background: var(--um-surface); box-shadow: var(--um-shadow); }
.um-bench-head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; margin-bottom: 5px; }
.um-bench-name { font-size: 1.15em; font-weight: 800; }
.um-bench-max { font-family: var(--um-mono); font-size: 11px; color: var(--um-ink-muted); }
.um-bench-tag { font-size: 12.5px; color: var(--um-ink-muted); margin-bottom: 18px; line-height: 1.6; }
.um-pct { font-family: var(--um-mono); font-size: 12.5px; font-weight: 850; color: var(--um-ink-soft); }
.um-score-rowline.tts .um-pct { color: var(--um-accent); }

/* ── IMO-ProofBench leaderboard ── */
.um-lb { margin-top: 20px; overflow-x: auto; border: 1px solid var(--um-border); border-radius: 10px; background: var(--um-raised); }
.um-lb-head, .um-lb-row { min-width: 560px; display: grid; grid-template-columns: 1fr 74px 84px 148px; align-items: center; }
.um-lb-head { background: var(--um-sunken); color: var(--um-ink-muted); font-family: var(--um-mono); font-size: 10.5px; font-weight: 800; text-transform: uppercase; letter-spacing: .55px; }
.um-lb-head > span, .um-lb-row > span { min-height: 40px; display: flex; align-items: center; padding: 6px 14px; border-right: 1px solid var(--um-border); }
.um-lb-head > span:last-child, .um-lb-row > span:last-child { border-right: none; }
.um-lb-head > span:not(:first-child), .um-lb-row .um-lb-num { justify-content: center; }
.um-lb-row { border-top: 1px solid var(--um-border); background: var(--um-surface); }
.um-lb-model { font-size: 12.5px; font-weight: 650; color: var(--um-ink); gap: 8px; }
.um-lb-tag { font-family: var(--um-mono); font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: .5px; padding: 2px 6px; border-radius: 999px; background: var(--um-sunken); color: var(--um-ink-muted); }
.um-lb-num { font-family: var(--um-mono); font-size: 12px; font-weight: 800; color: var(--um-ink-soft); }
.um-lb-overall { gap: 10px; }
.um-lb-bar { position: relative; flex: 1; height: 8px; border-radius: 999px; background: var(--um-sunken); overflow: hidden; }
.um-lb-bar > i { position: absolute; inset: 0 auto 0 0; border-radius: 999px; background: var(--um-accent-3); }
.um-lb-pct { font-family: var(--um-mono); font-size: 12px; font-weight: 850; color: var(--um-ink-soft); min-width: 52px; text-align: right; }
.um-lb .um-lb-row:first-of-type { border-top: none; }
/* tier separation via a stronger rule between groups (no text labels) */
.um-lb-row.tier-start { border-top: 2px solid var(--um-accent-soft); }
/* UniMath rows */
.um-lb-row.ours .um-lb-model { color: var(--um-accent); font-weight: 850; }
.um-lb-row.ours { background: linear-gradient(180deg, rgba(49,46,129,.05), rgba(49,46,129,.02)); }
.um-lb-row.ours .um-lb-num, .um-lb-row.ours .um-lb-pct { color: var(--um-accent); }
.um-lb-row.ours .um-lb-bar > i { background: var(--um-accent); }
.um-lb-row.ours .um-lb-tag { background: var(--um-accent-bg); color: var(--um-accent-2); }
/* base-model reference */
.um-lb-row.base { color: var(--um-ink-muted); }
.um-lb-row.base .um-lb-model { color: var(--um-ink-muted); font-weight: 600; }
.um-lb-row.base .um-lb-bar > i { background: var(--um-ink-muted); opacity: .5; }


/* ── Case studies ── */
.um-cases-section { margin-top: 54px; }
.um-case-group { margin: 18px 0 24px; }
.um-case-group-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin: 0 0 10px; color: var(--um-ink); font-weight: 850; }
.um-case-group-head span:last-child { font-family: var(--um-mono); font-size: 11px; color: var(--um-ink-muted); font-weight: 700; }
.um-case { border: 1px solid var(--um-border); border-radius: 12px; background: var(--um-surface); box-shadow: var(--um-shadow); overflow: hidden; margin-bottom: 10px; }
.um-case summary { list-style: none; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 14px 16px; background: var(--um-raised); }
.um-case summary::-webkit-details-marker { display: none; }
.um-case summary::after { content: '+'; width: 22px; height: 22px; flex: 0 0 22px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; background: var(--um-surface); border: 1px solid var(--um-border); color: var(--um-accent); font-family: var(--um-mono); font-weight: 850; }
.um-case[open] summary { border-bottom: 1px solid var(--um-border); }
.um-case[open] summary::after { content: '−'; }
.um-case-id { font-size: 13px; font-weight: 850; color: var(--um-ink); }
.um-case-meta { display: inline-flex; align-items: center; justify-content: flex-end; gap: 10px; margin-left: auto; color: var(--um-ink-muted); font-size: 11px; }
.um-case-score { display: inline-flex; align-items: center; justify-content: center; min-width: 42px; height: 24px; padding: 0 10px; border-radius: 999px; font-family: var(--um-mono); font-size: 11px; font-weight: 850; border: 1px solid var(--um-border); background: var(--um-surface); color: var(--um-ink-soft); }
.um-case-score.full { color: #fff; background: var(--um-accent); border-color: var(--um-accent); }
.um-case-score.six { color: #fff; background: var(--um-accent-3); border-color: var(--um-accent-3); }
.um-case-score.partial { color: var(--um-ink-soft); background: var(--um-sunken); border-color: var(--um-border); }
.um-case-score.zero { color: var(--um-ink-muted); background: var(--um-surface); border-style: dashed; }
.um-proof-body { max-height: 640px; overflow: auto; padding: 18px 22px 22px; font-size: 13px; line-height: 1.76; color: var(--um-ink-soft); background: var(--um-surface); }
.um-proof-body h4, .um-proof-body h5 { color: var(--um-ink); margin: 18px 0 8px; letter-spacing: 0; }
.um-proof-body h4:first-child, .um-proof-body h5:first-child { margin-top: 0; }
.um-proof-body p { margin: 0 0 12px; }
.um-proof-body ul, .um-proof-body ol { margin: 0 0 12px 20px; padding: 0; }
.um-proof-body li { margin: 6px 0; }
.um-proof-body hr { border: 0; border-top: 1px solid var(--um-border); margin: 18px 0; }
.um-proof-body code { font-family: var(--um-mono); font-size: .94em; background: var(--um-sunken); padding: 1px 4px; border-radius: 4px; }
.um-math-block { overflow-x: auto; margin: 12px 0 14px; padding: 10px 12px; border-radius: 8px; background: var(--um-raised); color: var(--um-ink); }

/* ── Capabilities ── */
.um-caps { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.um-cap { border: 1px solid var(--um-border); border-radius: 16px; padding: 24px 24px 22px; background: var(--um-surface);
    box-shadow: var(--um-shadow); position: relative; overflow: hidden; transition: transform .18s, box-shadow .18s, border-color .18s; }
.um-cap:hover { transform: translateY(-3px); box-shadow: 0 2px 6px rgba(22,24,43,.05), 0 14px 36px rgba(49,46,129,.10); border-color: var(--um-accent-soft); }
.um-cap::before { content: ''; position: absolute; left: 0; right: 0; top: 0; height: 3px; background: linear-gradient(90deg, var(--um-accent), var(--um-accent-2)); }
.um-cap::after { content: attr(data-n); position: absolute; right: 14px; top: 2px; font-family: var(--um-mono); font-weight: 700;
    font-size: 4.6em; line-height: 1; color: var(--um-accent); opacity: .05; pointer-events: none; letter-spacing: -3px; }
.um-cap-icon { width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center;
    background: var(--um-accent-bg); color: var(--um-accent); margin-bottom: 13px; }
.um-cap-icon svg { width: 20px; height: 20px; }
.um-cap-h { font-size: 1.16em; font-weight: 800; margin: 0 0 3px; color: var(--um-ink); letter-spacing: -.2px; }
.um-cap-k { font-family: var(--um-mono); font-size: 10.5px; text-transform: uppercase; letter-spacing: .8px; color: var(--um-accent-2); margin-bottom: 12px; }
.um-cap-p { font-size: 13px; color: var(--um-ink-soft); line-height: 1.72; margin: 0; }
.um-cap-p strong { color: var(--um-ink); font-weight: 600; }
.um-cap-p em { font-style: normal; color: var(--um-accent); font-weight: 600; }

/* ── Flow (horizontal pipeline of steps) ── */
.um-flow { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items: stretch; gap: 0; margin: 4px 0 6px; }
.um-flow-step { border: 1px solid var(--um-border); border-radius: 14px; padding: 20px 20px 18px; background: var(--um-surface); box-shadow: var(--um-shadow); position: relative; }
.um-flow-num { font-family: var(--um-mono); font-size: 11px; font-weight: 800; color: var(--um-accent-2); letter-spacing: .1em; margin-bottom: 9px; }
.um-flow-h { font-size: 1.06em; font-weight: 800; margin: 0 0 3px; color: var(--um-ink); letter-spacing: -.2px; }
.um-flow-k { font-family: var(--um-mono); font-size: 10px; text-transform: uppercase; letter-spacing: .7px; color: var(--um-ink-muted); margin-bottom: 11px; }
.um-flow-p { font-size: 12.5px; color: var(--um-ink-soft); line-height: 1.68; margin: 0; }
.um-flow-p strong { color: var(--um-ink); font-weight: 600; }
.um-flow-p em { font-style: normal; color: var(--um-accent); font-weight: 600; }
.um-flow-arrow { display: flex; align-items: center; justify-content: center; padding: 0 14px; color: var(--um-accent-3); }
.um-flow-arrow svg { width: 22px; height: 22px; }
@media (max-width: 760px) {
    .um-flow { grid-template-columns: 1fr; }
    .um-flow-arrow { padding: 6px 0; transform: rotate(90deg); }
}

.um-sources { margin-top: 15px; padding-top: 13px; border-top: 1px solid var(--um-border); font-size: 11px; color: var(--um-ink-muted); line-height: 1.65; }
.um-sources a { color: var(--um-accent-2); font-weight: 600; }

.um-foot { margin: 40px 0 8px; padding-top: 18px; border-top: 1px solid var(--um-border); font-size: 11.5px; color: var(--um-ink-muted); line-height: 1.7; }

@media (max-width: 760px) {
    .um-bench-grid, .um-caps, .um-result-grid { grid-template-columns: 1fr; }
    .um-hero h1 { font-size: 2.05em; }
    .um-cell { width: 26px; height: 26px; font-size: 12px; }
    .um-lb-head, .um-lb-row { grid-template-columns: 1fr 60px 68px 128px; }
    .um-case summary { align-items: flex-start; flex-wrap: wrap; }
    .um-case-meta { width: auto; margin-left: auto; }
}

</style>

<div class="um">

<div style="text-align: center; margin: 0 0 18px;">
    <div style="font-family: 'Source Serif 4', Georgia, serif; font-size: 16px; font-weight: 500; color: #565a72; letter-spacing: .01em;">UniPat Knowledge &amp; Reasoning Team</div>
    <div style="margin-top: 5px; font-size: 13px;"><a href="mailto:contact@unipat.ai" style="color: #9a9db0; text-decoration: none; font-weight: 500;">contact@unipat.ai</a></div>
</div>

<!-- ═══════════ HERO ═══════════ -->
<div class="um-hero">
    <div class="um-eyebrow">UniMath · Data-Induced Proof Self-Evolution</div>
    <h1>Great proofs are taught to evolve.</h1>
    <div class="um-quote">“Solving a problem means finding a way out of a difficulty, a way around an obstacle.”<span>George Pólya</span></div>
    <p class="um-sub"><strong>UniMath-35B-A3B is an open-source olympiad gold-medal mathematical model</strong>, obtained by further post-training Qwen3.6-35B-A3B on proof-evolution data. The goal is not to teach a model a new answer format, but to activate a reusable self-evolving capability: the ability to critique, repair, and synthesize its own mathematical reasoning.</p>
    <p class="um-sub"><strong>Olympiad mathematics is not won by producing many answers; it is won by improving one line of reasoning until it becomes inevitable.</strong> A strong human contestant does not merely try again after a failed attempt. They inspect the proof state, locate the first real obstruction, preserve the useful structure, repair the local gap, and sometimes merge several incomplete routes into a final argument.</p>
    <p class="um-sub">UniMath is built on the same principle. The central data insight is that mathematical self-evolution can be <strong>induced by supervision over proof change itself</strong>. Instead of training only on static problem-solution pairs, we construct fine-grained proof-synthesis trajectories that expose how a proof evolves: initial attempt, self-critique, obstruction diagnosis, targeted repair, alternative exploration, and final synthesis. This teaches the model not just what a correct proof looks like, but how an incorrect or incomplete proof becomes correct.</p>
    <p class="um-sub">The second insight appears at test time. Once the model has learned this proof-editing loop from data, test-time scaling no longer has to be blind repeated sampling. UniMath uses additional computation to perform structured self-evolution: auditing proof obligations, tracking logical debt, carrying forward productive invariants, repairing local failures, and reconciling competing proof paths. In other words, the training data activates a reusable self-evolving capability, and test-time scaling gives that capability room to unfold.</p>
    <p class="um-sub">This coupling between <strong>fine-grained proof-evolution data</strong> and <strong>test-time self-evolution</strong> is what enables UniMath to reach human gold-medal contestant level on both IMO 2026 and USAMO 2026 evaluations. More importantly, it suggests a broader recipe for mathematical intelligence: do not only teach models to solve problems; teach them to understand and improve their own reasoning process.</p>
    <div class="um-hero-links">
        <a class="um-hero-link" href="https://huggingface.co/UnipatAI/UniMath-35B-A3B" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            Model
        </a>
        <a class="um-hero-link" href="https://github.com/UniPat-AI/UniMath" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
        </a>
        <a class="um-hero-link disabled" title="Coming soon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            Paper <span class="um-link-badge">Coming Soon</span>
        </a>
    </div>
</div>

<!-- ═══════════ PROOF-SYNTHESIS DATA ═══════════ -->
<div class="um-section">
    <h2 class="um-section-title">Four proof traces that teach self-evolution</h2>
    <p class="um-section-desc">The data-side insight behind UniMath is to supervise <strong>how a proof changes</strong>, not only what the final proof says. Each training trajectory exposes a reusable proof-editing loop: draft a route, locate its proof debt, repair the earliest obstruction, and synthesize the surviving ideas into a rigorous olympiad solution.</p>
    <div class="um-caps">
        <div class="um-cap" data-n="01">
            <div class="um-cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M3 12h3m12 0h3M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1"/></svg></div>
            <div class="um-cap-h">Initial proof draft</div>
            <div class="um-cap-k">route construction</div>
            <p class="um-cap-p">The first trace is not just an answer; it is a complete attempted route with its chosen objects, lemmas, case splits, and proof obligations made visible. This teaches the model to start from a coherent mathematical spine rather than a bag of disconnected tricks.</p>
        </div>
        <div class="um-cap" data-n="02">
            <div class="um-cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4a7 7 0 100 14 7 7 0 000-14z"/><path d="M21 21l-4.3-4.3"/><path d="M8.5 11l1.8 1.8L14 9"/></svg></div>
            <div class="um-cap-h">Critical self-assessment</div>
            <div class="um-cap-k">proof debt ledger</div>
            <p class="um-cap-p">The second trace names the exact debt carried by the draft: unproved claims, hidden WLOG maps, missing cases, unchecked algebra, or a lemma used outside its range. The important supervision signal is not a score alone, but <strong>where the proof first stops being justified</strong>.</p>
        </div>
        <div class="um-cap" data-n="03">
            <div class="um-cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 00-5.4 5.4l-6 6 2.7 2.7 6-6a4 4 0 005.4-5.4l-2.5 2.5-2.2-.5-.5-2.2z"/></svg></div>
            <div class="um-cap-h">Targeted refinement</div>
            <div class="um-cap-k">local repair or reroute</div>
            <p class="um-cap-p">The third trace shows how to update the proof state after an audit. Some failures require a local patch; others require carrying only a useful invariant into a new route. This is where the model learns that evolution means <strong>preserving earned mathematics while changing the part that broke</strong>.</p>
        </div>
        <div class="um-cap" data-n="04">
            <div class="um-cap-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v5a5 5 0 005 5 5 5 0 005-5V4"/><path d="M12 14v6"/><path d="M8 20h8"/></svg></div>
            <div class="um-cap-h">Final proof synthesis</div>
            <div class="um-cap-k">draft-and-critique fusion</div>
            <p class="um-cap-p">The last trace compresses drafts, critiques, repaired lemmas, and abandoned routes into one readable proof. It teaches the model to merge competing paths without carrying dead branches forward, turning test-time compute into a polished final argument rather than a longer transcript.</p>
        </div>
    </div>
</div>

<!-- ═══════════ TEST-TIME SCALING ═══════════ -->
<div class="um-section">
    <h2 class="um-section-title">Test-time scaling as self-evolution</h2>
    <p class="um-section-desc">At inference time, UniMath does not simply sample many independent guesses and hope one is right. It runs the same proof-editing loop it learned from data, now spending its test-time compute on <strong>improving a proof it already has</strong>. The insight is that olympiad proofs rarely fail everywhere — they fail at one identifiable obstruction, while most of the surrounding mathematics is sound. Blind resampling throws that earned progress away; self-evolution keeps it and repairs only the part that broke. The results that follow report exactly this loop in action.</p>
    <div class="um-flow">
        <div class="um-flow-step">
            <div class="um-flow-num">01</div>
            <div class="um-flow-h">Sample &amp; rank</div>
            <div class="um-flow-k">candidate pool</div>
            <p class="um-flow-p">We draw a broad set of independent proof attempts and have the model <strong>self-assess</strong> each one, turning raw diversity into a ranked pool of proof-states — so all later compute lands on the routes already closest to a full solution.</p>
        </div>
        <div class="um-flow-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="um-flow-step">
            <div class="um-flow-num">02</div>
            <div class="um-flow-h">Refine the best</div>
            <div class="um-flow-k">repair the first gap</div>
            <p class="um-flow-p">The strongest non-perfect candidates enter short refinement chains, each round guided by the previous round's own critique and kept only when it <em>measurably improves</em>. This is the learned loop of <strong>preserving what works, fixing what broke</strong>, run at test time.</p>
        </div>
        <div class="um-flow-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="um-flow-step">
            <div class="um-flow-num">03</div>
            <div class="um-flow-h">Merge the survivors</div>
            <div class="um-flow-k">synthesize one proof</div>
            <p class="um-flow-p">Surviving proofs are pairwise-merged so a clean lemma from one can rescue a stronger route from another; a merge that regresses is discarded. Rankings are re-checked by <strong>majority vote</strong> first, so noisy self-scores never crown a flawed proof.</p>
        </div>
    </div>
    <div class="um-sources">The loop is adaptive: once enough self-verified proofs accumulate it short-circuits straight to synthesis, spending compute only where a problem is genuinely hard. This is why extra inference budget turns into <strong>directed self-evolution</strong> rather than a longer, noisier search.</div>
</div>

<!-- ═══════════ RESULTS ═══════════ -->
<div class="um-section">
    <h2 class="um-section-title">Results</h2>
    <p class="um-section-desc">We report <strong>UniMath-35B-A3B</strong> as direct proof attempts per problem (<strong>w/o TTS</strong>, avg@8) and compare it with the same model under <strong>+TTS</strong>, where the model follows the proof-synthesis loop learned from data: draft, assess, refine, and synthesize. Scores use the strict {0, 1, 6, 7} proof rubric; each olympiad is out of 42 points.</p>
    <div class="um-sources"><strong>w/o TTS</strong> is scored as avg@8: eight independent direct proof attempts per problem, each graded by DeepSeek-V4 Pro (max), averaged. <strong>w/ TTS</strong> reports the final self-evolved proof, graded by three judges — Gemini 3.1 Pro (high), GPT-5.5 (xhigh), DeepSeek-V4 Pro (max), with the resulting solution reviewed by human experts.</div>

    <div class="um-result-grid">
        <div class="um-pp">
            <div class="um-pp-head"><span class="um-pp-name">IMO 2025</span><span class="um-pp-max">6 problems · /42</span></div>
            <div class="um-pp-tag">International Mathematical Olympiad 2025 — full proof scoring.</div>
            <div class="um-score-matrix">
                <div class="um-score-headline"><span></span><span>P1</span><span>P2</span><span>P3</span><span>P4</span><span>P5</span><span>P6</span><span>Total</span></div>
                <div class="um-score-rowline"><span class="um-score-label">w/o TTS</span><span><i class="um-cell avg">3.0</i></span><span><i class="um-cell avg">5.4</i></span><span><i class="um-cell avg">0.6</i></span><span><i class="um-cell avg">5.4</i></span><span><i class="um-cell avg">5.4</i></span><span><i class="um-cell avg">0.0</i></span><span class="um-score-total-cell"><span class="um-total-score">19.75</span></span></div>
                <div class="um-score-rowline tts"><span class="um-score-label">w/ TTS</span><span><i class="um-cell tts s7">7</i></span><span><i class="um-cell tts s7">7</i></span><span><i class="um-cell tts s7">7</i></span><span><i class="um-cell tts s7">7</i></span><span><i class="um-cell tts s7">7</i></span><span><i class="um-cell tts s0">0</i></span><span class="um-score-total-cell"><span class="um-total-score">35</span><span class="um-medal-icon">🥇</span></span></div>
            </div>
        </div>

        <div class="um-pp">
            <div class="um-pp-head"><span class="um-pp-name">USAMO 2026</span><span class="um-pp-max">6 problems · /42</span></div>
            <div class="um-pp-tag">USA Mathematical Olympiad 2026 — full proof scoring.</div>
            <div class="um-score-matrix">
                <div class="um-score-headline"><span></span><span>P1</span><span>P2</span><span>P3</span><span>P4</span><span>P5</span><span>P6</span><span>Total</span></div>
                <div class="um-score-rowline"><span class="um-score-label">w/o TTS</span><span><i class="um-cell avg">4.9</i></span><span><i class="um-cell avg">0.4</i></span><span><i class="um-cell avg">0.1</i></span><span><i class="um-cell avg">6.9</i></span><span><i class="um-cell avg">1.9</i></span><span><i class="um-cell avg">3.8</i></span><span class="um-score-total-cell"><span class="um-total-score">17.88</span></span></div>
                <div class="um-score-rowline tts"><span class="um-score-label">w/ TTS</span><span><i class="um-cell tts s7">7</i></span><span><i class="um-cell tts s1">1</i></span><span><i class="um-cell tts s7">7</i></span><span><i class="um-cell tts s7">7</i></span><span><i class="um-cell tts s7">7</i></span><span><i class="um-cell tts s7">7</i></span><span class="um-score-total-cell"><span class="um-total-score">36</span><span class="um-medal-icon">🥇</span></span></div>
            </div>
        </div>
    </div>

    <div class="um-bench">
        <div class="um-bench-head"><span class="um-bench-name">IMO-ProofBench</span><span class="um-bench-max">60 problems · /420</span></div>
        <div class="um-bench-tag">A proof-writing benchmark split into Basic (30 problems, /210) and Advanced (30 problems, /210); scores are percentages. </div>
        <div class="um-lb">
            <div class="um-lb-head"><span>Model</span><span>Basic</span><span>Advanced</span><span>Overall</span></div>

            <div class="um-lb-row ours"><span class="um-lb-model">UniMath-35B-A3B<span class="um-lb-tag">w/ TTS</span></span><span class="um-lb-num">93.7%</span><span class="um-lb-num">78.3%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:86.0%"></i></span><span class="um-lb-pct">86.0%</span></span></div>
            <div class="um-lb-row ours"><span class="um-lb-model">UniMath-35B-A3B<span class="um-lb-tag">w/o TTS</span></span><span class="um-lb-num">75.2%</span><span class="um-lb-num">30.1%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:52.6%"></i></span><span class="um-lb-pct">52.6%</span></span></div>

            <div class="um-lb-row tier-start"><span class="um-lb-model">GPT-5.6-Sol</span><span class="um-lb-num">99.6%</span><span class="um-lb-num">82.6%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:91.1%"></i></span><span class="um-lb-pct">91.1%</span></span></div>
            <div class="um-lb-row"><span class="um-lb-model">Claude Fable 5</span><span class="um-lb-num">98.7%</span><span class="um-lb-num">78.2%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:89.0%"></i></span><span class="um-lb-pct">89.0%</span></span></div>
            <div class="um-lb-row"><span class="um-lb-model">Gemini 3.1 Pro</span><span class="um-lb-num">95.2%</span><span class="um-lb-num">50.0%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:72.6%"></i></span><span class="um-lb-pct">72.6%</span></span></div>
            <div class="um-lb-row"><span class="um-lb-model">SU-01<span class="um-lb-tag">w/ TTS</span></span><span class="um-lb-num">91.0%</span><span class="um-lb-num">49.5%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:70.2%"></i></span><span class="um-lb-pct">70.2%</span></span></div>
            <div class="um-lb-row"><span class="um-lb-model">Qwen3.7-Max</span><span class="um-lb-num">87.4%</span><span class="um-lb-num">36.2%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:61.8%"></i></span><span class="um-lb-pct">61.8%</span></span></div>
            <div class="um-lb-row"><span class="um-lb-model">DeepSeek-V4 Pro</span><span class="um-lb-num">81.5%</span><span class="um-lb-num">32.8%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:57.1%"></i></span><span class="um-lb-pct">57.1%</span></span></div>
            <div class="um-lb-row"><span class="um-lb-model">Doubao-Seed-2.1 Pro</span><span class="um-lb-num">74.4%</span><span class="um-lb-num">31.5%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:52.9%"></i></span><span class="um-lb-pct">52.9%</span></span></div>
            <div class="um-lb-row"><span class="um-lb-model">Claude Sonnet 5</span><span class="um-lb-num">68.1%</span><span class="um-lb-num">36.5%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:52.6%"></i></span><span class="um-lb-pct">52.6%</span></span></div>
            <div class="um-lb-row"><span class="um-lb-model">Kimi K2.6</span><span class="um-lb-num">74.3%</span><span class="um-lb-num">30.3%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:52.3%"></i></span><span class="um-lb-pct">52.3%</span></span></div>
            <div class="um-lb-row"><span class="um-lb-model">MiniMax-M3</span><span class="um-lb-num">72.5%</span><span class="um-lb-num">21.1%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:46.8%"></i></span><span class="um-lb-pct">46.8%</span></span></div>
            <div class="um-lb-row"><span class="um-lb-model">GLM-5.2</span><span class="um-lb-num">60.8%</span><span class="um-lb-num">25.4%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:43.1%"></i></span><span class="um-lb-pct">43.1%</span></span></div>
            <div class="um-lb-row base"><span class="um-lb-model">Qwen3.6-35B-A3B<span class="um-lb-tag">base</span></span><span class="um-lb-num">39.1%</span><span class="um-lb-num">7.1%</span><span class="um-lb-overall"><span class="um-lb-bar"><i style="width:23.1%"></i></span><span class="um-lb-pct">23.1%</span></span></div>
        </div>
    </div>
</div>

<!-- ═══════════ CASE STUDIES ═══════════ -->
<div class="um-section um-cases-section">
    <h2 class="um-section-title">Case studies</h2>
    <p class="um-section-desc">Full model proofs for the IMO 2025 and USAMO 2026 problems. Each case is collapsed by default. We show the <strong>best TTS proof-state</strong> selected during test-time evolution, with the header score reporting the final TTS score.</p>
    <div class="um-case-group">
        <div class="um-case-group-head"><span>IMO 2025</span><span>6 problems</span></div>
        <details class="um-case">
            <summary>
                <span class="um-case-id">IMO 2025 P1</span>
                <span class="um-case-meta"><span class="um-case-score full">7</span></span>
            </summary>
            <div class="um-proof-body">
<h4>Problem</h4>
<p>A line in the plane is called <em>sunny</em> if it is not parallel to any of the \(x\)-axis, the \(y\)-axis, or the line \(x+y=0\).</p>
<p>Let \(n \ge 3\) be a given integer. Determine all nonnegative integers \(k\) such that there exist \(n\) distinct lines in the plane satisfying both of the following:</p>
<ul>
<li>for all positive integers \(a\) and \(b\) with \(a+b\le n+1\), the point \((a,b)\) lies on at least one of the lines; and</li>
<li>exactly \(k\) of the \(n\) lines are sunny.</li>
</ul>
<hr>
<h4>Summary</h4>
<p><strong>a. Verdict:</strong> I have successfully solved the problem. For every integer \(n\ge 3\) the possible values of \(k\) are exactly \(0\), \(1\) and \(3\).</p>
<h4>b. Method Sketch:</h4>
<p>Let \(P_n=\{(a,b)\in\mathbb Z^2 : a,b\ge 1,\;a+b\le n+1\}\). A line is <em>sunny</em> iff its slope is different from \(0\), \(\infty\) and \(-1\).<br>
Assume we have \(n\) distinct lines covering \(P_n\) with exactly \(k\) sunny lines.</p>
<ol>
<li><strong>Structure of the non‑sunny lines.</strong> Let \(v,h,d\) be the numbers of vertical, horizontal and diagonal (slope \(-1\)) lines among them. Double counting points in columns, rows and diagonals forces the non‑sunny lines to be exactly the first \(v\) columns \(x=1,\dots,v\), the first \(h\) rows \(y=1,\dots,h\) and the last \(d\) diagonals \(x+y=n-d+2,\dots,n+1\).</li>
<li><strong>Reduction to \(P_k\).</strong> The points not covered by any non‑sunny line form a translate of \(P_k\); after translation the \(k\) sunny lines must cover the original triangle \(P_k\). Hence a necessary condition is the existence of \(k\) distinct sunny lines covering \(P_k\) (property \(S(k)\)).</li>
<li><strong>Upper bound.</strong> Every sunny line contains at most \(\lfloor (k+1)/2\rfloor\) points of \(P_k\).</li>
<li><strong>Even \(k\ge 4\).</strong> Total points \(= \frac{k(k+1)}2\); with the bound the \(k\) lines cover at most \(k\cdot\lfloor\frac{k+1}2\rfloor\) points, which is strictly smaller. So \(S(k)\) false.</li>
<li><strong>Odd \(k\ge 5\).</strong> Total points equal \(k\cdot\frac{k+1}2\). To cover \(P_k\) every line must attain the maximum \(\frac{k+1}2\). A precise analysis shows that exactly three sunny lines can achieve this maximum (slopes \(1,-\frac12,-2\)). Because \(k\ge 5&gt;3\) we cannot pick \(k\) distinct lines of that size – impossible.</li>
<li><strong>Constructions for \(k=0,1,3\).</strong> Explicit families of \(n\) lines are given for each \(n\ge 3\), using only horizontal/vertical lines and the three sunny lines from the \(k=3\) case. Thus the attainable \(k\) are exactly \(0,1,3\).</li>
</ol>
<hr>
<h4>Detailed Solution</h4>
<h4>1.  Notation.</h4>
<p>For an integer \(n\ge 1\) set</p>
<div class="um-math-block">\[
P_n=\{(a,b)\in\mathbb Z^2 : a\ge 1,\; b\ge 1,\; a+b\le n+1\}.
\]</div>
<p>A line is <em>sunny</em> iff it is not parallel to the \(x\)-axis, the \(y\)-axis or the line \(x+y=0\).<br>
We are given \(n\ge 3\) and look for nonnegative integers \(k\) for which there exist \(n\) distinct lines covering \(P_n\) with exactly \(k\) sunny lines.</p>
<h4>2.  Structure of a covering – reduction to a smaller triangle.</h4>
<p>Assume that \(L_1,\dots ,L_n\) are distinct lines covering \(P_n\) and that exactly \(k\) of them are sunny.<br>
Split the non‑sunny lines into three families:</p>
<div class="um-math-block">\[
\begin{aligned}
V &amp;=\{\text{vertical lines}\}, &amp; v&amp;=|V|,\\
H &amp;=\{\text{horizontal lines}\}, &amp; h&amp;=|H|,\\
D &amp;=\{\text{lines with slope }-1\}, &amp; d&amp;=|D|.
\end{aligned}
\]</div>
<p>Clearly \(k=n-v-h-d\).</p>
<p><em>Columns.</em> For \(a\in\{1,\dots ,n\}\) put \(C_a=\{(a,b)\in P_n : 1\le b\le n+1-a\}\); \(|C_a|=n+1-a\).<br>
If the vertical line \(x=a\) is <strong>not</strong> in \(V\), every point of \(C_a\) must be covered by a line \(\notin V\). There are \(n-v\) such non‑vertical lines, each meeting \(C_a\) in at most one point. Hence</p>
<div class="um-math-block">\[
n+1-a = |C_a| \le n-v \quad\Longrightarrow\quad v\le a-1. \tag{1}
\]</div>
<p>Inequality (1) holds for every \(a\) with \(x=a\notin V\).<br>
If \(1\le a\le v\) then \(a\) cannot satisfy (1), so \(x=a\in V\). Thus \(\{1,\dots ,v\}\subseteq V\). Because \(|V|=v\) we obtain exactly</p>
<div class="um-math-block">\[
V=\{x=1,\;x=2,\;\dots ,\;x=v\}. \tag{2}
\]</div>
<p><em>Rows.</em> Symmetrically, for \(b\in\{1,\dots ,n\}\) the row \(R_b=\{(a,b)\in P_n : 1\le a\le n+1-b\}\) gives</p>
<div class="um-math-block">\[
h\le b-1\;\; \text{for }y=b\notin H \quad\Longrightarrow\quad H=\{y=1,\dots ,y=h\}. \tag{3}
\]</div>
<p><em>Diagonals.</em> For \(s\in\{2,\dots ,n+1\}\) put \(D_s=\{(a,b)\in P_n : a+b=s\}\); \(|D_s|=s-1\).<br>
If \(x+y=s\notin D\) then</p>
<div class="um-math-block">\[
s-1\le n-d \quad\Longrightarrow\quad d\le n-s+1. \tag{4}
\]</div>
<p>Thus every \(s&gt;n-d+1\) must belong to \(D\). Since \(|D|=d\) and the largest sum is \(n+1\),</p>
<div class="um-math-block">\[
D=\{x+y=n-d+2,\;x+y=n-d+3,\;\dots ,\;x+y=n+1\}. \tag{5}
\]</div>
<p><em>The uncovered set.</em> A point \((a,b)\in P_n\) lies on a non‑sunny line exactly when \(a\le v\), or \(b\le h\), or \(a+b\ge n-d+2\). Hence the points <strong>not</strong> covered by any non‑sunny line are</p>
<div class="um-math-block">\[
U=\{(a,b)\in P_n : a\ge v+1,\; b\ge h+1,\; a+b\le n-d+1\}.
\]</div>
<p>Translate the plane by \((-v,-h)\): set \(a'=a-v,\;b'=b-h\). Then \(a',b'\ge 1\) and</p>
<div class="um-math-block">\[
a'+b' = a+b-(v+h)\le n-d+1-v-h = n-(v+h+d)+1 = k+1.
\]</div>
<p>Thus the translated set \(U'\) is exactly \(P_k\). The \(k\) sunny lines, after the same translation, become \(k\) distinct sunny lines covering \(P_k\).<br>
Consequently, a necessary condition for the original configuration is the existence of \(k\) distinct sunny lines that cover \(P_k\); we denote this property by \(S(k)\).</p>
<h4>3.  Determining which \(k\) satisfy \(S(k)\).</h4>
<p><em>3.1  Small values.</em></p>
<ul>
<li>\(k=0\): \(P_0=\varnothing\); vacuously true.</li>
<li>\(k=1\): \(P_1=\{(1,1)\}\); any sunny line through \((1,1)\) works.</li>
<li>\(k=2\): \(P_2=\{(1,1),(1,2),(2,1)\}\). Any two of these points determine a line of slope \(0,\infty\) or \(-1\); a sunny line contains at most one of them. Two sunny lines cover at most two points – impossible.</li>
<li>\(k=3\): \(P_3\) has six points. The three lines</li>
</ul>
<div class="um-math-block">\[
  L_1:\; y=x,\qquad 
  L_2:\; y=-2x+5,\qquad 
  L_3:\; y=-\tfrac12 x+\tfrac52
  \]</div>
<p>are sunny, distinct, and one checks directly that they cover all six points of \(P_3\). Hence \(S(3)\) is true.</p>
<p><em>3.2  An upper bound for a sunny line in \(P_m\).</em><br>
<strong>Lemma 1.</strong>  For every integer \(m\ge 1\) and every sunny line \(L\),</p>
<div class="um-math-block">\[
|L\cap P_m|\le \bigl\lfloor \tfrac{m+1}{2}\bigr\rfloor .
\]</div>
<p><em>Proof.</em>  We may assume that \(L\) passes through at least two lattice points; otherwise,</p>
<div class="um-math-block">\[
|L\cap P_m|\le 1\le \left\lfloor\frac{m+1}{2}\right\rfloor.
\]</div> 
<p>Write \(L\) in parametric form</p>
<div class="um-math-block">\[
(x(t),y(t))=(x_0+qt,\;y_0+pt)\qquad(t\in\mathbb Z),
\]</div>
<p>with \(\gcd(p,q)=1\), \(q&gt;0\).  Because \(L\) is sunny we have \(p\neq0\) and \(p\neq -q\).<br>
The points of \(L\) in \(P_m\) correspond to an interval of integers \(t\in[t_0,t_1]\); let \(T=t_1-t_0+1\).  Translating the line we may assume \(t_0=0\), so the points are at \(t=0,1,\dots ,T-1\).<br>
For each \(t\)</p>
<div class="um-math-block">\[
x_0+qt\ge 1,\qquad y_0+pt\ge 1,\qquad x_0+y_0+(p+q)t\le m+1. \tag{6}
\]</div>
<p>The sum \(S(t)=x_0+y_0+(p+q)t\) is strictly monotone and satisfies \(2\le S(t)\le m+1\).  Hence</p>
<div class="um-math-block">\[
|p+q|(T-1)=|S(T-1)-S(0)|\le (m+1)-2=m-1,
\]</div>
<p>so \(T-1\le (m-1)/|p+q|\) and \(T\le \bigl\lfloor (m-1)/|p+q|\bigr\rfloor +1\).<br>
If \(|p+q|\ge 2\) then \(T\le \lfloor (m-1)/2\rfloor +1 = \lfloor (m+1)/2\rfloor\).</p>
<p>Now suppose \(|p+q|=1\).  We treat the two possibilities.<br>
<em>Subcase 1:</em> \(p+q=1\).  Then \(p=1-q\); \(p\neq0\) forces \(q\neq1\) and \(p\neq-q\) is automatic, so \(q\ge 2,\;p\le -1\).<br>
From (6) with \(t=0\) and \(t=T-1\):</p>
<div class="um-math-block">\[
x_0\ge 1,\qquad 
y_0+p(T-1)\ge 1\;\Longrightarrow\; y_0\ge 1-p(T-1)=1+(q-1)(T-1),
\]</div>
<div class="um-math-block">\[
x_0+y_0+(T-1)\le m+1\;\Longrightarrow\; x_0+y_0\le m+2-T.
\]</div>
<p>Because \(x_0\ge 1\) we get \(y_0\le m+1-T\).  Combining with the lower bound on \(y_0\):</p>
<div class="um-math-block">\[
1+(q-1)(T-1)\le m+1-T \;\Longrightarrow\; (q-1)(T-1)+T\le m.
\]</div>
<p>Since \(q\ge 2\), \(q-1\ge 1\), the left side is at least \((T-1)+T=2T-1\).  Thus \(2T-1\le m\), i.e. \(T\le (m+1)/2\); as an integer \(T\le\lfloor (m+1)/2\rfloor\).</p>
<p><em>Subcase 2:</em> \(p+q=-1\).  Then \(p=-1-q\); \(q\ge1,\;p\le-2\).  Now \(S(t)\) decreases.  From (6):</p>
<div class="um-math-block">\[
x_0\ge 1,\qquad 
y_0+p(T-1)\ge 1\;\Longrightarrow\; y_0\ge 1+(q+1)(T-1),
\]</div>
<div class="um-math-block">\[
S(0)=x_0+y_0\le m+1,\qquad 
S(T-1)=x_0+y_0-(T-1)\ge 2\;\Longrightarrow\; x_0+y_0\ge T+1.
\]</div>
<p>From \(x_0\ge1\) we obtain \(y_0\le m\).  Hence</p>
<div class="um-math-block">\[
1+(q+1)(T-1)\le m \;\Longrightarrow\; (q+1)(T-1)\le m-1.
\]</div>
<p>Because \(q\ge1\), \(q+1\ge2\), so \(2(T-1)\le m-1\Rightarrow T\le (m+1)/2\).  Again \(T\le\lfloor (m+1)/2\rfloor\).  ∎</p>
<p><em>3.3  Even \(k\).</em>  Let \(k=2m\) with \(m\ge 2\) (so \(k\ge4\)).  The number of points of \(P_k\) is \(\frac{k(k+1)}2=m(2m+1)\).<br>
By Lemma 1 every sunny line contains at most \(m\) points.  Hence the \(k\) lines together cover at most \(k\cdot m=2m^2\) points.  Because \(2m^2&lt;m(2m+1)\) for all \(m\ge1\), they cannot cover \(P_k\).  For \(k=2\) (i.e. \(m=1\)) we already saw \(S(2)\) is false.  Thus \(S(k)\) is false for every even \(k\ge2\).</p>
<p><em>3.4  Odd \(k\ge5\).</em>  Let \(k=2m+1\) with \(m\ge2\) (so \(k\ge5\)).  Total points of \(P_k\) is \((2m+1)(m+1)\).  Set \(M=m+1=(k+1)/2\).  Lemma 1 gives \(|L\cap P_k|\le M\) for every sunny line \(L\).<br>
If \(k\) sunny lines cover \(P_k\), the sum of their sizes is at least \(kM\).  Since each size \(\le M\), we must have equality for every line and the lines must be pairwise disjoint; in particular each line contains exactly \(M\) points.</p>
<p><strong>Lemma 2.</strong>  Let \(m\ge1\) and \(n=2m+1\).  If a sunny line \(L\) satisfies \(|L\cap P_n|=m+1\), then \(L\) is one of the following three lines:</p>
<div class="um-math-block">\[
\text{(i) } y=x,\qquad
\text{(ii) } y=-\tfrac12 x+\tfrac{2m+3}{2},\qquad
\text{(iii) } y=-2x+2m+3.
\]</div>
<p><em>Proof.</em>  Use the same parametrisation as in Lemma 1 and let the points be at \(t=0,\dots ,m\) (so \(T=m+1\)).  The sum bound gives \(|p+q|m\le n-1=2m\), hence \(|p+q|\le2\).</p>
<p><em>Case A: \(|p+q|=2\).</em></p>
<ul>
<li><strong>A1:</strong> \(p+q=2\).  Then \(S(0)=x_0+y_0\ge2\), \(S(m)=x_0+y_0+2m\le 2m+2\).  Because \(S(m)-S(0)=2m\) we must have \(S(0)=2,\;S(m)=2m+2\).  Thus \(x_0+y_0=2\) and therefore \(x_0=y_0=1\).  The points are \((1+qt,\,1+pt)\).  For \(t=1\) we need \(1+p\ge1\Rightarrow p\ge0\); with \(p\neq0\) we get \(p&gt;0\).  Together with \(q&gt;0,\;p+q=2,\;\gcd(p,q)=1\) forces \(p=1,\;q=1\).  Hence \(L\) is \(y=x\).</li>
<li><strong>A2:</strong> \(p+q=-2\).  Then \(S(0)=2m+2,\;S(m)=2\) so \(x_0+y_0=2m+2\).  Here \(p=-2-q\le-3\).  At \(t=m\): \(y_0+pm\ge1\Rightarrow y_0\ge1-pm=1+(q+2)m\).  From \(x_0+y_0=2m+2\) and \(x_0\ge1\) we get \(y_0\le2m+1\).  Thus \(1+(q+2)m\le2m+1\Rightarrow (q+2)m\le2m\Rightarrow q\le0\), impossible.</li>
</ul>
<p><em>Case B: \(|p+q|=1\).</em></p>
<ul>
<li><strong>B1:</strong> \(p+q=1\).  Then \(p=1-q,\;q\ge2,\;p\le-1\).  Conditions at \(t=0\) and \(t=m\):</li>
</ul>
<div class="um-math-block">\[
  x_0\ge1,\qquad y_0+pm\ge1\;\Longrightarrow\; y_0\ge1+(q-1)m,
  \]</div>
<div class="um-math-block">\[
  x_0+y_0+m\le2m+2\;\Longrightarrow\; x_0+y_0\le m+2.
  \]</div>
<p>From \(x_0\ge1\) we obtain \(y_0\le m+1\).  Hence \(1+(q-1)m\le m+1\Rightarrow (q-1)m\le m\Rightarrow q\le2\).  Thus \(q=2\).  Then \(y_0\ge1+m\) and \(y_0\le m+1\) force \(y_0=m+1\), and \(x_0=(m+2)-y_0=1\).  The line passes through \((1,m+1)\) with direction \((2,-1)\); its equation is \(y=-\frac12 x+\frac{2m+3}{2}\).</p>
<ul>
<li><strong>B2:</strong> \(p+q=-1\).  Then \(p=-1-q,\;q\ge1,\;p\le-2\).  Now</li>
</ul>
<div class="um-math-block">\[
  x_0\ge1,\qquad y_0+pm\ge1\;\Longrightarrow\; y_0\ge1+(q+1)m,
  \]</div>
<div class="um-math-block">\[
  x_0+y_0\le2m+2,\qquad x_0+y_0-m\ge2\;\Longrightarrow\; x_0+y_0\ge m+2.
  \]</div>
<p>From \(x_0\ge1\) we get \(y_0\le2m+1\).  Hence \(1+(q+1)m\le2m+1\Rightarrow (q+1)m\le2m\Rightarrow q\le1\).  Thus \(q=1\).  Then \(y_0\ge1+2m=2m+1\) and \(y_0\le2m+1\) give \(y_0=2m+1\), and \(x_0=(2m+2)-y_0=1\).  The line passes through \((1,2m+1)\) with direction \((1,-2)\); its equation is \(y=-2x+2m+3\).</p>
<p>This proves Lemma 2.  ∎</p>
<p>For \(m\ge2\) (i.e. \(k\ge5\)) the three lines in Lemma 2 are distinct.  Consequently there are <strong>at most three</strong> sunny lines in \(P_k\) that attain the maximal size \(M\).  But we need \(k\ge5\) distinct lines of size \(M\) – impossible.  Hence \(S(k)\) is false for every odd \(k\ge5\).</p>
<p>Combining the cases, \(S(k)\) holds <strong>only</strong> for \(k\in\{0,1,3\}\).</p>
<h4>4.  Constructions for the original problem (\(n\ge3\)).</h4>
<p>Now we show that for every \(n\ge3\) and each \(k\in\{0,1,3\}\) one can actually exhibit \(n\) distinct lines satisfying the conditions.</p>
<p><em>4.1  \(k=0\).</em>  Take the \(n\) horizontal lines \(y=1,2,\dots ,n\).  They are all non‑sunny, distinct, and cover \(P_n\) because every point of \(P_n\) has its \(y\)‑coordinate between \(1\) and \(n\).</p>
<p><em>4.2  \(k=1\).</em>  Take the \(n-1\) horizontal lines \(y=1,2,\dots ,n-1\).  The only point of \(P_n\) not on any of them is \((1,n)\) (since \(a+b\le n+1\) forces \(a=1\) when \(b=n\)).  The sunny line \(L:\;y=x+n-1\) passes through \((1,n)\) and has slope \(1\).  It is distinct from the horizontal lines.  Together they give \(n\) lines covering \(P_n\), exactly one of which is sunny.</p>
<p><em>4.3  \(k=3\).</em>  Take the \(n-3\) vertical lines \(x=1,2,\dots ,n-3\) (if \(n=3\) there are none).  These cover all points with \(a\le n-3\).  The remaining points satisfy \(a\ge n-2,\; b\ge1,\; a+b\le n+1\).  Shifting the \(x\)‑coordinate by \(-(n-3)\) turns this set into a copy of \(P_3\).  The three sunny lines from the \(S(3)\) construction, translated by \((n-3,0)\), are</p>
<div class="um-math-block">\[
\begin{aligned}
L_1&amp;:\; y = x - (n-3),\\
L_2&amp;:\; y = -2x + 2n - 1,\\
L_3&amp;:\; y = -\tfrac12 x + \tfrac{n+2}{2}.
\end{aligned}
\]</div>
<p>These three lines are sunny (slopes \(1,-2,-\tfrac12\)), distinct, and they cover the translated \(P_3\), hence the remaining points of \(P_n\).  Together with the \(n-3\) vertical lines we obtain \(n\) lines, exactly three of which are sunny.</p>
<p>All lines in the three constructions are distinct and satisfy the required covering property.</p>
<h4>5.  Conclusion.</h4>
<p>For every integer \(n\ge 3\), the nonnegative integers \(k\) for which the required configuration exists are exactly \(k=0\), \(k=1\) and \(k=3\).</p>
            </div>
        </details>
        <details class="um-case">
            <summary>
                <span class="um-case-id">IMO 2025 P2</span>
                <span class="um-case-meta"><span class="um-case-score full">7</span></span>
            </summary>
            <div class="um-proof-body">
<h4>Problem</h4>
<p>Let \(\Omega\) and \(\Gamma\) be circles with centres \(M\) and \(N\), respectively, such that the radius of \(\Omega\) is less than the radius of \(\Gamma\). Suppose \(\Omega\) and \(\Gamma\) intersect at two distinct points \(A\) and \(B\). Line \(MN\) intersects \(\Omega\) at \(C\) and \(\Gamma\) at \(D\), so that \(C, M, N, D\) lie on \(MN\) in that order. Let \(P\) be the circumcentre of triangle \(ACD\). Line \(AP\) meets \(\Omega\) again at \(E\neq A\) and meets \(\Gamma\) again at \(F\neq A\). Let \(H\) be the orthocentre of triangle \(PMN\).</p>
<p>Prove that the line through \(H\) parallel to \(AP\) is tangent to the circumcircle of triangle \(BEF\).</p>
<hr>
<h4>1. Summary</h4>
<p><strong>a. Verdict:</strong> I have successfully solved the problem. The final answer is a complete rigorous proof that the line through \(H\) parallel to \(AP\) is tangent to the circumcircle of triangle \(BEF\).</p>
<h4>b. Method Sketch:</h4>
<p>Apply a similarity transformation to place the figure in a convenient Cartesian coordinate system: \(A=(0,0)\), \(B=(0,2)\), and the line of centres \(MN\) as \(y=1\) with \(M=(u,1)\), \(N=(v,1)\) and \(u&lt;v\).<br>
Determine the coordinates of \(C\) and \(D\) on \(MN\) and express \(u,v\) in terms of their \(x\)-coordinates \(c,d\).<br>
Find the circumcentre \(P\) of \(\triangle ACD\): \(P=\bigl(\frac{c+d}{2},\frac{1-cd}{2}\bigr)\). Introduce symmetric parameters \(p=c+d\), \(q=cd\;( &lt; 0)\).<br>
Parametrise the line \(AP\) as \(tP\); compute the parameters \(t_E,t_F\) for the second intersections \(E\in\Omega\), \(F\in\Gamma\).<br>
Write the circumcircle of \(\triangle BEF\) as \(X^2+Y^2+DX+EY+F_0=0\). Using \(B(0,2)\) and the fact that \(E,F\) lie on it (via the line \(AP\)) gives \(D,E,F_0\) in terms of \(p,q\).<br>
Compute the orthocentre \(H\) of \(\triangle PMN\): \(H=\bigl(\frac{p}{2},\frac{3q+1}{2q}\bigr)\).<br>
The required line \(L\) through \(H\) parallel to \(AP\) has direction \(P\). Find the centre \(Q\) and radius \(R\) of the circumcircle of \(BEF\).<br>
Show that the perpendicular distance from \(Q\) to \(L\) equals \(R\) by evaluating \(\lvert(Q-H)\times P\rvert/\lvert P\rvert\) and simplifying to \(R^2\).<br>
The few degenerate cases (\(p=0\), \(q=-1\)) correspond to \(\triangle BEF\) or \(\triangle PMN\) being degenerate, which are excluded by the problem’s hypotheses.</p>
<hr>
<h4>2. Detailed Solution</h4>
<h4>1. Coordinate set‑up.</h4>
<p>Because the problem is invariant under similarity transformations (rotations, translations, scaling), we may place the figure in a convenient Cartesian coordinate system. Let the common chord \(AB\) be on the \(y\)-axis. The line of centres \(MN\) is perpendicular to \(AB\) and passes through the midpoint of \(AB\). Rotate the plane so that \(MN\) is horizontal; then translate so that the midpoint of \(AB\) becomes \((0,1)\) and scale so that \(AB = 2\). We obtain</p>
<div class="um-math-block">\[
A = (0,0), \qquad B = (0,2),
\]</div>
<p>and the line \(MN\) is the horizontal line \(y = 1\).<br>
Write the centres as</p>
<div class="um-math-block">\[
M = (u,1), \qquad N = (v,1).
\]</div>
<p>The order of the points on \(MN\) is given as \(C, M, N, D\); therefore on the line \(y = 1\) the \(x\)-coordinates satisfy \(x_C &lt; u &lt; v &lt; x_D\). In particular \(u &lt; v\).</p>
<p>The radii are</p>
<div class="um-math-block">\[
r = |MA| = \sqrt{u^2+1}, \qquad R = |NA| = \sqrt{v^2+1},
\]</div>
<p>and the hypothesis \(r &lt; R\) is equivalent to \(|u| &lt; |v|\); together with \(u &lt; v\) this gives \(v &gt; |u|\).<br>
The equations of the circles simplify to</p>
<div class="um-math-block">\[
\Omega : x^2 + y^2 - 2y - 2u x = 0, \qquad
\Gamma : x^2 + y^2 - 2y - 2v x = 0. \tag{1}
\]</div>
<h4>2. The points \(C\) and \(D\).</h4>
<p>The line \(MN\) (\(y = 1\)) meets \(\Omega\) at the solutions of</p>
<div class="um-math-block">\[
x^2 + 1 - 2 - 2u x = 0 \;\Longleftrightarrow\; x^2 - 2u x - 1 = 0.
\]</div>
<p>Its roots are \(u \pm r\). Since \(C\) lies to the left of \(M\), its \(x\)-coordinate is</p>
<div class="um-math-block">\[
c = u - r &lt; 0, \qquad C = (c,1).
\]</div>
<p>Analogously, for \(\Gamma\) the equation is \(x^2 - 2v x - 1 = 0\); the point \(D\) lies to the right of \(N\), so</p>
<div class="um-math-block">\[
d = v + R &gt; 0, \qquad D = (d,1).
\]</div>
<p>From the quadratic, the product of the two roots is \(-1\); hence the other root of the first quadratic is \(-1/c\). The centre \(u\) is the midpoint of the two intersections, therefore</p>
<div class="um-math-block">\[
u = \frac{c - 1/c}{2} = \frac{c^2-1}{2c}. \tag{2}
\]</div>
<p>Similarly,</p>
<div class="um-math-block">\[
v = \frac{d^2-1}{2d}. \tag{3}
\]</div>
<h4>3. Circumcentre \(P\) of \(\triangle ACD\).</h4>
<p>We have \(A(0,0)\), \(C(c,1)\), \(D(d,1)\). The perpendicular bisector of \(CD\) is the vertical line through the midpoint, so</p>
<div class="um-math-block">\[
x_P = \frac{c+d}{2}.
\]</div>
<p>The perpendicular bisector of \(AC\): the midpoint is \(\bigl(\frac{c}{2},\frac12\bigr)\), the slope of \(AC\) is \(\frac1c\) (note \(c \neq 0\); otherwise \(C\) would be the midpoint of \(AB\), which is impossible because \(r = \sqrt{u^2+1} &gt; |u|\)), so the perpendicular slope is \(-c\). Its equation is \(y - \frac12 = -c\bigl(x - \frac{c}{2}\bigr)\). Substituting \(x = \frac{c+d}{2}\) yields</p>
<div class="um-math-block">\[
y_P = \frac12 - \frac{cd}{2} = \frac{1-cd}{2}.
\]</div>
<p>Introduce the symmetric quantities</p>
<div class="um-math-block">\[
p = c+d, \qquad q = cd \;( &lt; 0).
\]</div>
<p>Then</p>
<div class="um-math-block">\[
P = \Bigl( \frac{p}{2},\; \frac{1-q}{2} \Bigr), \qquad
|P|^2 = x_P^2 + y_P^2 = \frac{p^2 + (q-1)^2}{4}. \tag{4}
\]</div>
<p>A useful factorisation is \(|P|^2 = \frac{(c^2+1)(d^2+1)}{4}\).</p>
<h4>4. Points \(E\) and \(F\) on the circles.</h4>
<p>The line \(AP\) passes through the origin, hence it can be written parametrically as \(tP\) (\(t \in \mathbb{R}\)).<br>
For a circle through \(A\) of the form \(x^2+y^2-2y-2hx=0\) (see (1)), substituting \((t x_P, t y_P)\) gives</p>
<div class="um-math-block">\[
t^2|P|^2 - 2t(y_P + h x_P) = 0.
\]</div>
<p>The root \(t=0\) corresponds to \(A\); the other intersection is therefore at</p>
<div class="um-math-block">\[
t = \frac{2(y_P + h x_P)}{|P|^2}.
\]</div>
<p>Apply this to \(\Omega\) (\(h = u\)) and \(\Gamma\) (\(h = v\)). First compute \(y_P + u x_P\):</p>
<div class="um-math-block">\[
y_P + u x_P = \frac{1-cd}{2} + \frac{c^2-1}{2c}\cdot\frac{c+d}{2}
= \frac{2c(1-cd) + (c^2-1)(c+d)}{4c}.
\]</div>
<p>The numerator simplifies to \((c-d)(c^2+1)\); hence</p>
<div class="um-math-block">\[
y_P + u x_P = \frac{(c-d)(c^2+1)}{4c}.
\]</div>
<p>Similarly,</p>
<div class="um-math-block">\[
y_P + v x_P = \frac{(d-c)(d^2+1)}{4d}.
\]</div>
<p>Using \(|P|^2 = \frac{(c^2+1)(d^2+1)}{4}\), we obtain the parameters for \(E\) and \(F\):</p>
<div class="um-math-block">\[
t_E = \frac{2(y_P + u x_P)}{|P|^2} = \frac{2(c-d)}{c(d^2+1)}, \qquad
t_F = \frac{2(y_P + v x_P)}{|P|^2} = \frac{2(d-c)}{d(c^2+1)}. \tag{5}
\]</div>
<p>Consequently,</p>
<div class="um-math-block">\[
E = t_E P, \qquad F = t_F P.
\]</div>
<h4>5. Circumcircle of \(\triangle BEF\).</h4>
<p>Let its equation be</p>
<div class="um-math-block">\[
X^2 + Y^2 + D X + E Y + F_0 = 0. \tag{6}
\]</div>
<p>Since \(B(0,2)\) lies on it,</p>
<div class="um-math-block">\[
4 + 2E + F_0 = 0 \;\Longrightarrow\; F_0 = -4 - 2E. \tag{7}
\]</div>
<p>The line \(AP\) is \(tP\). Substituting \((t x_P, t y_P)\) into (6) yields</p>
<div class="um-math-block">\[
|P|^2 t^2 + (D x_P + E y_P) t + F_0 = 0.
\]</div>
<p>The two intersection points with this line are exactly \(E\) and \(F\); therefore \(t_E, t_F\) are the roots of this quadratic. Hence</p>
<div class="um-math-block">\[
t_E t_F = \frac{F_0}{|P|^2}, \qquad
t_E + t_F = -\frac{D x_P + E y_P}{|P|^2}. \tag{8}
\]</div>
<p>First compute the product:</p>
<div class="um-math-block">\[
t_E t_F = \frac{2(c-d)}{c(d^2+1)} \cdot \frac{2(d-c)}{d(c^2+1)}
= -\frac{4(c-d)^2}{cd(c^2+1)(d^2+1)}.
\]</div>
<p>Multiplying by \(|P|^2 = \frac{(c^2+1)(d^2+1)}{4}\) gives</p>
<div class="um-math-block">\[
F_0 = t_E t_F |P|^2 = -\frac{(c-d)^2}{cd}. \tag{9}
\]</div>
<p>Define</p>
<div class="um-math-block">\[
S = \frac{(c-d)^2}{cd},
\]</div>
<p>so \(F_0 = -S\). From (7) we obtain</p>
<div class="um-math-block">\[
E = -2 + \frac{S}{2}. \tag{10}
\]</div>
<p>Now the sum of the roots. We have</p>
<div class="um-math-block">\[
\begin{aligned}
t_E + t_F &amp;= 2(c-d)\left[ \frac{1}{c(d^2+1)} - \frac{1}{d(c^2+1)} \right] \\
&amp;= 2(c-d)\frac{d(c^2+1)-c(d^2+1)}{cd(c^2+1)(d^2+1)}.
\end{aligned}
\]</div>
<p>The numerator simplifies:</p>
<div class="um-math-block">\[
d(c^2+1)-c(d^2+1) = cd(c-d) - (c-d) = (c-d)(cd-1).
\]</div>
<p>Thus</p>
<div class="um-math-block">\[
t_E + t_F = \frac{2(c-d)^2(cd-1)}{cd(c^2+1)(d^2+1)}.
\]</div>
<p>Now from (8),</p>
<div class="um-math-block">\[
D x_P + E y_P = -|P|^2(t_E + t_F)
= -\frac{(c^2+1)(d^2+1)}{4} \cdot \frac{2(c-d)^2(cd-1)}{cd(c^2+1)(d^2+1)}
= -\frac{(c-d)^2(cd-1)}{2cd}.
\]</div>
<p>Recall \(x_P = \frac{p}{2}\), \(y_P = \frac{1-q}{2}\) with \(p = c+d\), \(q = cd\). Multiplying the equality by 2:</p>
<div class="um-math-block">\[
D p + E(1-q) = -\frac{(c-d)^2(cd-1)}{cd}. \tag{11}
\]</div>
<p>Notice that \(1-q = 1-cd = -(cd-1)\). Hence (11) becomes</p>
<div class="um-math-block">\[
D p - E(cd-1) = -\frac{(c-d)^2(cd-1)}{cd}.
\]</div>
<p>Because \(q = cd &lt; 0\), we have \(cd \neq 1\); divide by \(cd-1\):</p>
<div class="um-math-block">\[
D p = (cd-1)\bigl( E - \frac{(c-d)^2}{cd} \bigr) = (cd-1)(E - S). \tag{12}
\]</div>
<p>Now express everything with \(p,q\). Since</p>
<div class="um-math-block">\[
S = \frac{(c-d)^2}{cd} = \frac{(c+d)^2 - 4cd}{cd} = \frac{p^2 - 4q}{q} = \frac{p^2}{q} - 4,
\]</div>
<p>equation (10) gives</p>
<div class="um-math-block">\[
E = -2 + \frac{S}{2} = \frac{p^2}{2q} - 4.
\]</div>
<p>Then</p>
<div class="um-math-block">\[
E - S = \frac{p^2}{2q} - 4 - \Bigl(\frac{p^2}{q} - 4\Bigr) = -\frac{p^2}{2q}.
\]</div>
<p>Substituting this into (12) yields</p>
<div class="um-math-block">\[
D p = (q-1)\Bigl(-\frac{p^2}{2q}\Bigr) = -\frac{p^2(q-1)}{2q}.
\]</div>
<p>If \(p = 0\), then \(c+d = 0\); consequently \(P\) lies on the \(y\)-axis, the line \(AP\) coincides with \(AB\), and meets both circles again at \(B\). Thus \(E = F = B\), making \(\triangle BEF\) degenerate – contradicting the existence of its circumcircle. Hence \(p \neq 0\), and we can solve for \(D\):</p>
<div class="um-math-block">\[
D = -\frac{p(q-1)}{2q}, \qquad
E = \frac{p^2-8q}{2q}, \qquad
F_0 = -S = 4 - \frac{p^2}{q}. \tag{13}
\]</div>
<h4>6. Orthocentre \(H\) of \(\triangle PMN\).</h4>
<p>The vertices are \(P\bigl(\frac{p}{2},\frac{1-q}{2}\bigr)\), \(M(u,1)\), \(N(v,1)\).<br>
The side \(MN\) is horizontal, so the altitude from \(P\) is the vertical line \(x = \frac{p}{2}\). Consequently</p>
<div class="um-math-block">\[
x_H = \frac{p}{2}.
\]</div>
<p>To find \(y_H\) we use the altitude from \(M\). The slope of \(PN\) is</p>
<div class="um-math-block">\[
\frac{1 - y_P}{v - x_P}.
\]</div>
<p>We have \(1 - y_P = 1 - \frac{1-q}{2} = \frac{1+q}{2}\). Also</p>
<div class="um-math-block">\[
v - x_P = \frac{d^2-1}{2d} - \frac{p}{2} = \frac{d^2-1 - p d}{2d} = \frac{d^2-1 - (c+d)d}{2d} = \frac{-1-cd}{2d} = -\frac{1+q}{2d}.
\]</div>
<p>Thus the slope of \(PN\) is \(-d\) (the case \(q = -1\) would give \(1+q = 0\), so \(P\) lies on \(MN\) and \(\triangle PMN\) is degenerate – this is excluded because \(H\) is defined).<br>
The altitude from \(M\) is perpendicular to \(PN\), so its slope is \(1/d\). Its equation is</p>
<div class="um-math-block">\[
Y - 1 = \frac{1}{d}(X - u).
\]</div>
<p>Setting \(X = \frac{p}{2}\) gives</p>
<div class="um-math-block">\[
y_H = 1 + \frac{1}{d}\Bigl(\frac{p}{2} - u\Bigr).
\]</div>
<p>Now \(\frac{p}{2} - u = \frac{c+d}{2} - \frac{c^2-1}{2c} = \frac{c(c+d) - (c^2-1)}{2c} = \frac{cd+1}{2c} = \frac{1+q}{2c}\).<br>
Therefore</p>
<div class="um-math-block">\[
y_H = 1 + \frac{1}{d}\cdot\frac{1+q}{2c} = 1 + \frac{1+q}{2cd} = 1 + \frac{1+q}{2q} = \frac{3q+1}{2q}.
\]</div>
<p>Thus</p>
<div class="um-math-block">\[
H = \Bigl( \frac{p}{2},\; \frac{3q+1}{2q} \Bigr). \tag{14}
\]</div>
<h4>7. The line through \(H\) parallel to \(AP\).</h4>
<p>The direction of \(AP\) is the vector \(P = \bigl(\frac{p}{2}, \frac{1-q}{2}\bigr)\). The required line \(L\) passes through \(H\) with this direction; it can be written as \(H + t P\) (\(t \in \mathbb{R}\)).</p>
<h4>8. Centre and radius of the circumcircle of \(BEF\).</h4>
<p>The centre \(Q\) of the circle (6) is \(Q = \bigl(-\frac{D}{2}, -\frac{E}{2}\bigr)\). Using (13),</p>
<div class="um-math-block">\[
Q = \Bigl( \frac{p(q-1)}{4q},\; \frac{8q-p^2}{4q} \Bigr). \tag{15}
\]</div>
<p>The radius \(R\) satisfies \(R^2 = |Q|^2 - F_0\). Compute</p>
<div class="um-math-block">\[
|Q|^2 = \frac{p^2(q-1)^2}{16q^2} + \frac{(8q-p^2)^2}{16q^2}, \qquad
F_0 = 4 - \frac{p^2}{q} = \frac{4q - p^2}{q} = \frac{64q^2 - 16p^2q}{16q^2}.
\]</div>
<p>Hence</p>
<div class="um-math-block">\[
R^2 = \frac{p^2(q-1)^2 + (8q-p^2)^2 - 64q^2 + 16p^2q}{16q^2}.
\]</div>
<p>Expand \((8q-p^2)^2 = 64q^2 - 16p^2q + p^4\). The numerator becomes</p>
<div class="um-math-block">\[
p^2(q^2 - 2q + 1) + 64q^2 - 16p^2q + p^4 - 64q^2 + 16p^2q
= p^4 + p^2 q^2 - 2p^2 q + p^2 = p^2\bigl(p^2 + q^2 - 2q + 1\bigr).
\]</div>
<p>Since \(q^2 - 2q + 1 = (q-1)^2\),</p>
<div class="um-math-block">\[
R^2 = \frac{p^2\bigl(p^2 + (q-1)^2\bigr)}{16q^2}. \tag{16}
\]</div>
<h4>9. Distance from \(Q\) to line \(L\).</h4>
<p>A vector from \(H\) to \(Q\) is</p>
<div class="um-math-block">\[
\begin{aligned}
Q - H &amp;= \Bigl( \frac{p(q-1)}{4q} - \frac{p}{2},\; \frac{8q-p^2}{4q} - \frac{3q+1}{2q} \Bigr) \\
&amp;= \Bigl( \frac{p(q-1) - 2q p}{4q},\; \frac{8q-p^2 - 6q - 2}{4q} \Bigr) \\
&amp;= \Bigl( -\frac{p(q+1)}{4q},\; -\frac{p^2 - 2q + 2}{4q} \Bigr).
\end{aligned}\tag{17}
\]</div>
<p>The line \(L\) has direction \(P = \bigl(\frac{p}{2}, \frac{1-q}{2}\bigr)\). The (signed) area of the parallelogram spanned by \(Q-H\) and \(P\) is the two‑dimensional cross product</p>
<div class="um-math-block">\[
(Q-H) \times P = \Bigl(-\frac{p(q+1)}{4q}\Bigr)\Bigl(\frac{1-q}{2}\Bigr) - \Bigl(-\frac{p^2-2q+2}{4q}\Bigr)\Bigl(\frac{p}{2}\Bigr).
\]</div>
<p>Simplify:</p>
<div class="um-math-block">\[
\begin{aligned}
(Q-H) \times P &amp;= \frac{-p(q+1)(1-q)}{8q} + \frac{p(p^2-2q+2)}{8q} \\
&amp;= \frac{p\bigl[-(1-q^2) + p^2 - 2q + 2\bigr]}{8q} \\
&amp;= \frac{p\bigl(p^2 + q^2 - 2q + 1\bigr)}{8q} \\
&amp;= \frac{p\bigl(p^2 + (q-1)^2\bigr)}{8q}.
\end{aligned}\tag{18}
\]</div>
<p>The length of \(P\) is</p>
<div class="um-math-block">\[
|P|^2 = \Bigl(\frac{p}{2}\Bigr)^2 + \Bigl(\frac{1-q}{2}\Bigr)^2 = \frac{p^2 + (q-1)^2}{4}. \tag{19}
\]</div>
<p>The perpendicular distance from \(Q\) to \(L\) is</p>
<div class="um-math-block">\[
d(Q,L) = \frac{|(Q-H) \times P|}{|P|}.
\]</div>
<p>Therefore</p>
<div class="um-math-block">\[
d(Q,L)^2 = \frac{\bigl( \frac{p(p^2+(q-1)^2)}{8q} \bigr)^2}{\frac{p^2+(q-1)^2}{4}}
= \frac{p^2(p^2+(q-1)^2)^2}{64q^2} \cdot \frac{4}{p^2+(q-1)^2}
= \frac{p^2(p^2+(q-1)^2)}{16q^2}.
\]</div>
<p>This is exactly the value found for \(R^2\) in (16). Hence \(d(Q,L) = R\).</p>
<h4>10. Conclusion.</h4>
<p>The distance from the centre of the circumcircle of \(\triangle BEF\) to the line through \(H\) parallel to \(AP\) equals the radius of that circle. Therefore the line is tangent to the circumcircle of \(\triangle BEF\).</p>
<h4>11. Remarks on degenerate cases.</h4>
<p>The algebraic steps require \(p \neq 0\) and \(q \neq -1\).<br>
If \(p = 0\), then \(c+d = 0\); consequently \(P\) lies on the \(y\)-axis, the line \(AP\) coincides with \(AB\), and meets both circles again at \(B\). Thus \(E = F = B\), making \(\triangle BEF\) degenerate – contradicting the existence of its circumcircle.<br>
If \(q = -1\), then \(cd = -1\) and \(y_P = \frac{1-(-1)}{2} = 1\); so \(P\) lies on \(MN\), \(\triangle PMN\) becomes degenerate and its orthocentre is undefined.<br>
The problem’s hypotheses therefore imply \(p \neq 0\) and \(q \neq -1\), and the proof is complete. \(\square\)</p>
            </div>
        </details>
        <details class="um-case">
            <summary>
                <span class="um-case-id">IMO 2025 P3</span>
                <span class="um-case-meta"><span class="um-case-score full">7</span></span>
            </summary>
            <div class="um-proof-body">
<h4>Problem</h4>
<p>Let \(\mathbb{N}\) denote the set of positive integers. A function \(f\colon\mathbb{N}\to\mathbb{N}\) is said to be bonza if</p>
<div class="um-math-block">\[
f(a)\quad\text{divides}\quad b^a-f(b)^{f(a)}
\]</div>
<p>for all positive integers \(a\) and \(b\).</p>
<p>Determine the smallest real constant \(c\) such that \(f(n)\leqslant cn\) for all bonza functions \(f\) and all positive integers \(n\).</p>
<hr>
<h4>1. Summary</h4>
<p><strong>a. Verdict:</strong> I have found a complete solution. The smallest real constant \(c\) is \(4\).</p>
<h4>b. Method Sketch:</h4>
<p>First, basic properties are derived: \(f(1)=1\), \(f(a)\mid a^{a}\), \(f(2)\in\{1,2,4\}\), and for a prime \(p\), \(f(p)=p^{k_{p}}\) (\(k_{p}\ge 0\)).<br>
<em>Lower bound \(c\ge 4\).</em> A specific bonza function is constructed with \(f(4)=16\), forcing \(c\ge 4\).<br>
<em>Upper bound \(f(n)\le 4n\).</em> The proof splits according to \(f(2)\).</p>
<ul>
<li>If \(f(2)=1\) or \(4\), one shows \(f(p)=1\) for all odd primes \(p\) and that every \(f(n)\) is a power of \(2\). Then for odd \(n\), \(f(n)=1\); for even \(n\), using \(b=2\) (or \(b=3\)) together with the Lifting‑The‑Exponent lemma gives \(f(n)\le 4\cdot2^{v_{2}(n)}\le 4n\).</li>
<li>If \(f(2)=2\), first prove that for every odd prime \(p\), \(f(p)\in\{1,p,p^{2}\}\) (Lemma 3.1). Then, using minimal counterexamples and Bertrand’s postulate, eliminate \(p^{2}\) for \(p\ge 5\), so \(f(p)\in\{1,p\}\) (Lemma 3.3). Show \(f(3)\in\{1,3\}\) (Lemma 3.2). <em>Subcase \(f(3)=1\):</em> then \(f(p)=1\) for all odd primes, \(f(n)\) are powers of \(2\), and LTE with \(b=3\) yields \(f(n)\le 4n\) for even \(n\). <em>Subcase \(f(3)=3\):</em> one proves \(f(p)=p\) for every odd prime \(p\) (again via Bertrand). For any \(n\), taking \(a=p\), \(b=n\) for all primes \(p\) gives \(p\mid n-f(n)\), hence \(f(n)=n\le 4n\).</li>
</ul>
<p>In all cases \(f(n)\le 4n\), so \(c=4\) works. Together with the lower bound, \(c=4\) is optimal.</p>
<hr>
<h4>2. Detailed Solution</h4>
<p>Let \(\mathbb N\) be the set of positive integers. For all \(a,b\in\mathbb N\)</p>
<div class="um-math-block">\[
f(a)\mid b^{\,a}-f(b)^{f(a)}. \tag{1}
\]</div>
<hr>
<h4>1. Basic properties</h4>
<ul>
<li>\(a=b=1\): \(f(1)\mid 1^{1}-f(1)^{f(1)}=1-f(1)^{f(1)}\). Since \(f(1)\mid f(1)^{f(1)}\), we get \(f(1)\mid 1\); hence \(f(1)=1\).</li>
<li>\(a=b\): \(f(a)\mid a^{a}-f(a)^{f(a)}\). Because \(f(a)\mid f(a)^{f(a)}\), adding gives</li>
</ul>
<div class="um-math-block">\[
  f(a)\mid a^{a}. \tag{2}
  \]</div>
<ul>
<li>From (2) with \(a=2\): \(f(2)\mid 4\), so \(f(2)\in\{1,2,4\}\).</li>
<li>If \(p\) is prime, (2) gives \(f(p)\mid p^{p}\). All prime factors of \(f(p)\) must be \(p\); therefore</li>
</ul>
<div class="um-math-block">\[
  f(p)=p^{k_{p}}\qquad(k_{p}\ge 0). \tag{3}
  \]</div>
<p>For an integer \(m\ge 1\) denote by \(v_{2}(m)\) the exponent of \(2\) in the prime factorisation of \(m\).</p>
<hr>
<h4>2. Lower bound – why \(c\ge 4\)</h4>
<p>Define a function \(f:\mathbb N\to\mathbb N\) by<br>
\(f(1)=1\);<br>
for odd \(n&gt;1\): \(f(n)=1\);<br>
for even \(n\), write \(n=2^{k}m\) with \(m\) odd, \(k\ge 1\).</p>
<ul>
<li>If \(m=1\) (pure power of \(2\)): \(f(2)=4\); for \(k\ge 2\), \(f(2^{k})=2^{k+2}=4\cdot2^{k}\).</li>
<li>If \(m&gt;1\): \(f(n)=2\).</li>
</ul>
<p>All values are powers of \(2\). For \(x\in\mathbb N\) let \(v(x)=v_{2}(f(x))\); then \(f(x)=2^{v(x)}\). Observe:</p>
<ul>
<li>\(a\) odd \(\Rightarrow v(a)=0\).</li>
<li>\(a=2\): \(v(a)=2\).</li>
<li>\(a=2^{k}\;(k\ge 2)\): \(v(a)=k+2\).</li>
<li>\(a\) even with odd part \(&gt;1\): \(v(a)=1\).</li>
</ul>
<p>We verify (1). When \(v(a)=0\) (i.e. \(f(a)=1\)) it is trivial. Assume \(v(a)\ge 1\) and put \(v=v(a)\).<br>
Since \(f(b)\) is a power of \(2\), write \(f(b)=2^{w}\) with \(w=v(b)\) (\(w=0\) if \(b\) is odd). Then</p>
<div class="um-math-block">\[
f(b)^{f(a)}=(2^{w})^{2^{v}}=2^{w\cdot 2^{v}}.
\]</div>
<p><strong>Case 1 – \(b\) odd.</strong> Then \(w=0\); the right‑hand side is \(b^{a}-1\).</p>
<ul>
<li>If \(b=1\), then \(b^{a}-1=0\), which is divisible by any \(2^{v}\).</li>
<li>If \(b&gt;1\) is odd, then \(a\) is even, as noted earlier. By the Lifting‑The‑Exponent lemma (LTE) for \(p=2\),</li>
</ul>
<div class="um-math-block">\[
  v_{2}(b^{a}-1)=v_{2}(b-1)+v_{2}(b+1)+v_{2}(a)-1.
  \]</div>
<p>Because \(b\) is odd, one of \(b-1,b+1\) is exactly divisible by \(2\) (valuation \(1\)) and the other by at least \(4\) (valuation \(\ge 2\)). Hence \(v_{2}(b-1)+v_{2}(b+1)\ge 3\), and</p>
<div class="um-math-block">\[
  v_{2}(b^{a}-1)\ge 2+v_{2}(a).
  \]</div>
<p>Now check \(2+v_{2}(a)\ge v\):<br>
* \(a=2\): \(v_{2}(a)=1,\;v=2,\;2+1=3\ge 2\).<br>
* \(a=2^{k}\;(k\ge 2)\): \(v_{2}(a)=k,\;v=k+2,\;2+k=v\).<br>
* \(a\) even with odd part \(&gt;1\): \(v_{2}(a)\ge 1,\;v=1,\;2+v_{2}(a)\ge 3\ge 1\).<br>
In every case \(v_{2}(b^{a}-1)\ge v\); hence \(2^{v}\mid b^{a}-1\).</p>
<p><strong>Case 2 – \(b\) even.</strong> Write \(b=2^{t}u\) with \(u\) odd, \(t\ge 1\). Then</p>
<div class="um-math-block">\[
b^{a}=2^{at}u^{a},\qquad f(b)^{f(a)}=2^{w\cdot 2^{v}}.
\]</div>
<p>Both terms are positive integers. By the non‑archimedean property of the \(2\)-adic valuation,</p>
<div class="um-math-block">\[
v_{2}\bigl(b^{a}-f(b)^{f(a)}\bigr)\ge \min\bigl(v_{2}(b^{a}),\,v_{2}(f(b)^{f(a)})\bigr)=\min(at,\;w\cdot2^{v}).
\]</div>
<p>Thus it suffices to prove \(\min(at,\,w\cdot2^{v})\ge v\).</p>
<p>Examine the three types of even \(a\):</p>
<ul>
<li>\(a\) has odd part \(&gt;1\): \(v=1\), and \(a\ge 6\).</li>
<li>\(a=2\): \(v=2\), \(a=2\).</li>
<li>\(a=2^{k}\;(k\ge 2)\): \(v=k+2\), \(a=2^{k}\). One checks \(2^{k}\ge k+2\) for \(k\ge 2\).</li>
</ul>
<p>In all cases \(a\ge v\). Since \(t\ge 1\), we have \(at\ge a\ge v\).<br>
Because \(b\) is even, \(f(b)\ge 2\), so \(w\ge 1\). Hence \(w\cdot2^{v}\ge 2^{v}\). For every integer \(v\ge 1\) one has \(2^{v}\ge v\) (easy induction). Therefore \(w\cdot2^{v}\ge v\).<br>
Consequently \(\min(at,\,w\cdot2^{v})\ge v\), and the required divisibility holds.</p>
<p>The construction satisfies (1) for all \(a,b\); hence \(f\) is bonza.<br>
For this \(f\) we have \(f(4)=f(2^{2})=2^{2+2}=16=4\cdot4\). If a real number \(c\) satisfies \(f(n)\le cn\) for <strong>every</strong> bonza function and every \(n\), then in particular \(16\le c\cdot4\), i.e. \(c\ge 4\).</p>
<hr>
<h4>3. Upper bound – proving \(f(n)\le 4n\) for every bonza function</h4>
<p>Now fix an arbitrary bonza function \(f\). We already know \(f(1)=1\), \(f(2)\in\{1,2,4\}\) and (3). We treat the three possibilities for \(f(2)\).</p>
<hr>
<h5>3.1 Case \(f(2)=1\)</h5>
<p><em>Odd primes.</em> For an odd prime \(p\), take \(a=p,\;b=2\):</p>
<div class="um-math-block">\[
f(p)\mid 2^{p}-f(2)^{f(p)}=2^{p}-1.
\]</div>
<p>Write \(f(p)=p^{k_{p}}\). If \(k_{p}\ge 1\) then \(p\mid f(p)\), so \(p\mid 2^{p}-1\). Fermat’s little theorem gives \(2^{p}\equiv 2\pmod p\), hence \(2^{p}-1\equiv 1\pmod p\) – contradiction. Thus \(k_{p}=0\), i.e. \(f(p)=1\) for every odd prime \(p\).</p>
<p><em>Structure of \(f(n)\).</em> Suppose some \(f(n)\) possessed an odd prime divisor \(q\). Then \(f(q)=1\). Taking \(a=n,\;b=q\) in (1):</p>
<div class="um-math-block">\[
f(n)\mid q^{n}-f(q)^{f(n)}=q^{n}-1.
\]</div>
<p>Since \(q\mid f(n)\), we obtain \(q\mid q^{n}-1\), which forces \(q\mid 1\) – impossible. Therefore no \(f(n)\) contains an odd prime factor; every \(f(n)\) is a power of \(2\).</p>
<p><em>Value of \(f(n)\).</em> For any \(n\), \(a=n,\;b=n\) gives</p>
<div class="um-math-block">\[
f(n)\mid n^{n}-f(n)^{f(n)}\;\Longrightarrow\;f(n)\mid n^{n},
\]</div>
<p>because \(f(n)\mid f(n)^{f(n)}\).<br>
If \(n\) is odd, \(n^{n}\) is odd, so \(f(n)\) is an odd power of \(2\); hence \(f(n)=1\).<br>
If \(n\) is even, take \(a=n,\;b=2\) (here \(f(2)=1\)):</p>
<div class="um-math-block">\[
f(n)\mid 2^{n}-1.
\]</div>
<p>The number \(2^{n}-1\) is odd, so again \(f(n)\) is odd and \(f(n)=1\).<br>
Consequently \(f(n)=1\le 4n\) for all \(n\).</p>
<hr>
<h5>3.2 Case \(f(2)=4\)</h5>
<p><em>Odd primes.</em> For an odd prime \(p\), \(a=p,\;b=2\):</p>
<div class="um-math-block">\[
f(p)\mid 2^{p}-4^{f(p)}.
\]</div>
<p>Write \(f(p)=p^{k_{p}}\). Modulo \(p\), \(2^{p}\equiv 2\). For the second term,</p>
<div class="um-math-block">\[
4^{f(p)}=2^{2p^{k_{p}}}\equiv 2^{2}\pmod p,
\]</div>
<p>because \(p\nmid 2\) and, reducing the exponent modulo \(p-1\), we have \(p\equiv 1\pmod{p-1}\Rightarrow p^{k_{p}}\equiv 1\pmod{p-1}\Rightarrow 2p^{k_{p}}\equiv 2\pmod{p-1}\). Hence the right‑hand side is \(f(p)\mid 2^{p}-4^{f(p)} \equiv 2-4=-2\pmod p\). If \(k_{p}\ge 1\) then \(p\mid f(p)\) would force \(p\mid -2\), impossible for odd \(p\). Thus \(k_{p}=0\), i.e. \(f(p)=1\) for all odd primes \(p\).</p>
<p><em>Structure of \(f(n)\).</em> Exactly as in §3.1, no \(f(n)\) can contain an odd prime factor; every \(f(n)\) is a power of \(2\).</p>
<p><em>Odd \(n\).</em> \(a=n,\;b=n\) gives \(f(n)\mid n^{n}\). For odd \(n\), \(n^{n}\) is odd, so \(f(n)\) is odd; being a power of \(2\) it must be \(1\).</p>
<p><em>Even \(n\).</em> Since \(3\) is an odd prime, \(f(3)=1\). Take \(a=n,\;b=3\):</p>
<div class="um-math-block">\[
f(n)\mid 3^{n}-1.
\]</div>
<p>Because \(n\) is even, the LTE lemma for \(p=2\) yields</p>
<div class="um-math-block">\[
v_{2}(3^{n}-1)=v_{2}(3-1)+v_{2}(3+1)+v_{2}(n)-1=1+2+v_{2}(n)-1=2+v_{2}(n).
\]</div>
<p>Write \(f(n)=2^{c}\). From \(f(n)\mid 3^{n}-1\) we obtain \(c\le 2+v_{2}(n)\). Hence</p>
<div class="um-math-block">\[
f(n)=2^{c}\le 2^{2+v_{2}(n)}=4\cdot 2^{v_{2}(n)}\le 4n.
\]</div>
<p>Thus in this case \(f(n)\le 4n\) for all \(n\).</p>
<hr>
<h5>3.3 Case \(f(2)=2\)</h5>
<p>Now we analyse the remaining situation.</p>
<p><strong>Lemma 3.1.</strong> For every odd prime \(p\), \(f(p)\in\{1,p,p^{2}\}\).<br>
<em>Proof.</em> If \(f(p)=1\) we are done. Assume \(f(p)\ge p\) and write \(f(p)=p^{a}\) with \(a\ge 1\).<br>
Take \(b=p-1\) in (1):</p>
<div class="um-math-block">\[
p^{a}\mid (p-1)^{p}-f(p-1)^{p^{a}}. \tag{4}
\]</div>
<p>Modulo \(p\), \((p-1)^{p}\equiv (-1)^{p}=-1\). For any integer \(x\), \(x^{p^{a}}\equiv x\pmod p\) (repeated Fermat). Hence \(f(p-1)^{p^{a}}\equiv f(p-1)\pmod p\). Equation (4) gives</p>
<div class="um-math-block">\[
-1-f(p-1)\equiv 0\pmod p\;\Longrightarrow\;f(p-1)\equiv -1\pmod p.
\]</div>
<p>Write \(f(p-1)=pt-1\) with \(t\in\mathbb N\).<br>
Expand the two powers using the binomial theorem.</p>
<div class="um-math-block">\[
\begin{aligned}
(p-1)^{p}&amp;=\sum_{i=0}^{p}\binom{p}{i}p^{i}(-1)^{p-i}
          =-1+p^{2}+p^{3}A \qquad(A\in\mathbb Z),\\[4pt]
(pt-1)^{p^{a}}&amp;=\sum_{j=0}^{p^{a}}\binom{p^{a}}{j}(pt)^{j}(-1)^{p^{a}-j}\\
&amp;=-1+p^{a+1}t+p^{a+2}B \qquad(B\in\mathbb Z),
\end{aligned}
\]</div>
<p>because the \(i=1\) term is \(p^{2}\) and for \(i\ge 2\) the term contains at least \(p^{3}\); the \(j=0\) term is \(-1\); the \(j=1\) term is \(p^{a}\cdot pt = p^{a+1}t\) (the sign is \(+\) since \(p^{a}-1\) is even); for \(j\ge 2\) the power of \(p\) is at least \(a+2\).<br>
Subtracting,</p>
<div class="um-math-block">\[
(p-1)^{p}-(pt-1)^{p^{a}} = p^{2}-p^{a+1}t + p^{3}A - p^{a+2}B.
\]</div>
<p>The left side must be divisible by \(p^{a}\). If \(a\ge 3\), then \(a+1\ge 4\) and every term except \(p^{2}\) has \(p\)-adic valuation \(\ge 3\). Hence the right‑hand side has \(v_{p}=2\), yet it must be divisible by \(p^{a}\) with \(a\ge 3\) – contradiction. Therefore \(a\le 2\), i.e. \(f(p)\in\{1,p,p^{2}\}\). ∎</p>
<p><strong>Lemma 3.2.</strong> \(f(3)\in\{1,3\}\).<br>
<em>Proof.</em> From \(f(3)\mid 3^{3}=27\) we have \(f(3)\in\{1,3,9,27\}\).</p>
<ul>
<li>\(f(3)=27\): take \(a=3,\;b=2\). Then \(27\mid 2^{3}-f(2)^{27}=8-2^{27}\). Modulo \(27\), \(2^{9}\equiv -1\), so \(2^{27}\equiv -1\). Hence the right‑hand side is \(\equiv 8-(-1)=9\pmod{27}\), not divisible by \(27\).</li>
<li>\(f(3)=9\): take \(a=3,\;b=5\). Then \(9\mid 5^{3}-f(5)^{9}=125-f(5)^{9}\). By (3) write \(f(5)=5^{d}\) (\(d\ge 0\)). Modulo \(9\), \(125\equiv8\). The order of \(5\) mod \(9\) is \(6\); therefore \(5^{9d}\equiv5^{9d\bmod 6}\). 
<ul>
<li>If \(d\) is even, \(9d\equiv0\pmod6\Rightarrow 5^{9d}\equiv1\), giving \(8-1=7\not\equiv0\pmod9\).</li>
<li>If \(d\) is odd, \(9d\equiv3\pmod6\Rightarrow 5^{9d}\equiv5^{3}=125\equiv8\), giving \(8-8=0\pmod9\).</li>
</ul>
Thus \(d\) must be odd; in particular \(d\ge1\). Now take \(a=5,\;b=3\): \(f(5)\mid 3^{5}-f(3)^{f(5)}=243-9^{5^{d}}\). Modulo \(5\), \(3^{5}\equiv3\), \(9\equiv-1\), and \(5^{d}\) is odd, so \(9^{5^{d}}\equiv(-1)^{5^{d}}=-1\). Hence the right‑hand side is \(\equiv3-(-1)=4\pmod5\). Therefore \(5\nmid\) the right‑hand side. But \(f(5)=5^{d}\) with \(d\ge1\), so \(5\mid f(5)\), forcing \(5\) to divide the right‑hand side – contradiction. The only remaining possibilities are \(1\) and \(3\). ∎</li>
</ul>
<p><strong>Lemma 3.3.</strong> For every odd prime \(p\ge 3\), \(f(p)\neq p^{2}\); consequently \(f(p)\in\{1,p\}\).<br>
<em>Proof.</em> Suppose such a prime exists and let \(p\) be the smallest one with \(f(p)=p^{2}\). By Lemma 3.2, we have \(p \ge 5\).<br>
For any odd prime \(q&lt;p\), minimality gives \(f(q)\neq q^{2}\); Lemma 3.1 yields \(f(q)\in\{1,q,q^{2}\}\), so \(f(q)\in\{1,q\}\).<br>
If \(f(q)=1\), take \(a=p,\;b=q\):</p>
<div class="um-math-block">\[
p^{2}\mid q^{p}-f(q)^{p^{2}}=q^{p}-1.
\]</div>
<p>In particular \(p\mid q^{p}-1\). By Fermat, \(q^{p}\equiv q\pmod p\), so \(p\mid q-1\). Because \(0&lt;q-1&lt;p\), this forces \(q=1\) – impossible. Hence \(f(q)\neq1\), and we must have \(f(q)=q\).<br>
Now for each such \(q\), take \(a=q,\;b=p\):</p>
<div class="um-math-block">\[
q=f(q)\mid p^{q}-f(p)^{q}=p^{q}-(p^{2})^{q}=p^{q}(1-p^{q}).
\]</div>
<p>Since \(q\neq p\), \(q\nmid p\), we get \(q\mid 1-p^{q}\). By Fermat, \(p^{q}\equiv p\pmod q\), so \(1-p\equiv0\pmod q\), i.e. \(q\mid p-1\).<br>
Now choose a prime \(q\) with \(\frac{p}{2}&lt;q&lt;p\) (this is possible by Bertrand’s postulate; for \(p=5\) the prime \(3\) works, for \(p\ge 7\) such a prime exists). This \(q\) is odd, \(q&lt;p\), so \(f(q)=q\) and \(q\mid p-1\). Because \(q&gt;\frac p2\), we have \(p-1&lt;2q\). The only positive multiple of \(q\) below \(2q\) is \(q\) itself; hence \(p-1=q\), i.e. \(p=q+1\), which is even – contradiction.<br>
Thus no odd prime \(p\ge 3\) satisfies \(f(p)=p^{2}\). ∎</p>
<p>Now we split according to \(f(3)\).</p>
<hr>
<h5>3.3.1 Subcase \(f(3)=1\)</h5>
<p><em>Odd primes.</em> For any odd prime \(p\), \(a=p,\;b=3\) gives</p>
<div class="um-math-block">\[
f(p)\mid 3^{p}-1.
\]</div>
<p>If \(f(p)&gt;1\) then \(p\mid f(p)\) (by (3)), so \(p\mid 3^{p}-1\). Fermat gives \(3^{p}\equiv3\pmod p\), hence \(3^{p}-1\equiv2\pmod p\), forcing \(p\mid2\Rightarrow p=2\), contradiction. Thus \(f(p)=1\) for all odd primes \(p\).</p>
<p><em>Structure of \(f(n)\).</em> As before, no \(f(n)\) can contain an odd prime factor; every \(f(n)\) is a power of \(2\).</p>
<p><em>Value of \(f(n)\).</em> For any \(n\), \(a=n,\;b=n\) gives \(f(n)\mid n^{n}\). If \(n\) is odd, \(n^{n}\) is odd, so \(f(n)\) is odd; being a power of \(2\) it must be \(1\).<br>
If \(n\) is even, take \(a=n,\;b=3\) (here \(f(3)=1\)):</p>
<div class="um-math-block">\[
f(n)\mid 3^{n}-1.
\]</div>
<p>LTE (with \(n\) even) yields \(v_{2}(3^{n}-1)=2+v_{2}(n)\). Write \(f(n)=2^{c}\); then \(c\le 2+v_{2}(n)\), whence</p>
<div class="um-math-block">\[
f(n)=2^{c}\le 2^{2+v_{2}(n)}=4\cdot2^{v_{2}(n)}\le 4n.
\]</div>
<hr>
<h5>3.3.2 Subcase \(f(3)=3\)</h5>
<p>We already have \(f(2)=2,\;f(3)=3\). By Lemma 3.3, for every odd prime \(p\ge5\) we have \(f(p)\in\{1,p\}\).</p>
<p><strong>Claim.</strong> \(f(p)=p\) for all odd primes \(p\).<br>
<em>Proof.</em> Assume the contrary and let \(p\) be the smallest odd prime \(\ge5\) with \(f(p)=1\).<br>
For every odd prime \(q&lt;p\): if \(q=3\) then \(f(3)=3\); if \(q\ge5\) then minimality forces \(f(q)\neq1\), and Lemma 3.3 gives \(f(q)\in\{1,q\}\), hence \(f(q)=q\). Thus \(f(q)=q\) for all odd primes \(q&lt;p\).<br>
Choose a prime \(q\) with \(\frac{p}{2}&lt;q&lt;p\) (Bertrand’s postulate; for \(p=5\) the prime \(3\) works). This \(q\) is odd and \(q&lt;p\), so \(f(q)=q\). Take \(a=q,\;b=p\):</p>
<div class="um-math-block">\[
q=f(q)\mid p^{q}-f(p)^{q}=p^{q}-1.
\]</div>
<p>By Fermat, \(p^{q}\equiv p\pmod q\), so \(q\mid p-1\). Because \(q&gt;\frac p2\), we have \(p-1&lt;2q\). The only positive multiple of \(q\) below \(2q\) is \(q\) itself; therefore \(p-1=q\), i.e. \(p=q+1\), which is even – contradiction. ∎</p>
<p>Consequently,</p>
<div class="um-math-block">\[
f(p)=p\qquad\text{for every prime }p. \tag{5}
\]</div>
<p>Now take an arbitrary \(n\in\mathbb N\). For any prime \(p\), using \(a=p,\;b=n\) and (5):</p>
<div class="um-math-block">\[
p=f(p)\mid n^{p}-f(n)^{f(p)}=n^{p}-f(n)^{p}.
\]</div>
<p>Fermat’s little theorem gives \(n^{p}\equiv n\pmod p\) and \(f(n)^{p}\equiv f(n)\pmod p\). Hence</p>
<div class="um-math-block">\[
n-f(n)\equiv0\pmod p\qquad\Longrightarrow\qquad p\mid n-f(n).
\]</div>
<p>This holds for <strong>all</strong> primes \(p\). The only integer divisible by every prime is \(0\) (a non‑zero integer has only finitely many prime factors). Therefore \(n-f(n)=0\), i.e. \(f(n)=n\).<br>
Clearly \(f(n)=n\le 4n\).</p>
<hr>
<h4>4. Conclusion</h4>
<p>In every possible case we have proved \(f(n)\le 4n\) for all \(n\in\mathbb N\). The explicit bonza function constructed in §2 shows that any constant \(c\) with the required property must satisfy \(c\ge4\). Hence the smallest such real constant is</p>
<div class="um-math-block">\[
\boxed{4}.
\]</div>
            </div>
        </details>
        <details class="um-case">
            <summary>
                <span class="um-case-id">IMO 2025 P4</span>
                <span class="um-case-meta"><span class="um-case-score full">7</span></span>
            </summary>
            <div class="um-proof-body">
<h4>Problem</h4>
<p>A proper divisor of a positive integer \(N\) is a positive divisor of \(N\) other than \(N\) itself.<br>
The infinite sequence \(a_1, a_2, \cdots\) consists of positive integers, each of which has at least three proper divisors. For each \(n \geqslant 1\), the integer \(a_{n+1}\) is the sum of the three largest proper divisors of \(a_n\).<br>
Determine all possible values of \(a_1\).</p>
<hr>
<h4>Summary</h4>
<p><strong>a. Verdict:</strong> I have successfully solved the problem. The set of all possible values of \(a_1\) is exactly the set of positive integers \(N\) such that the exponent of \(2\) in \(N\) is odd, the exponent of \(3\) in \(N\) is at least \(\frac{\text{exponent of }2+1}{2}\), and \(5\) does not divide \(N\). Equivalently, \(a_1 = 2^k \cdot 3^j \cdot m\) where \(k\) is an odd positive integer, \(j \ge \frac{k+1}{2}\), and \(m\) is a positive integer coprime to \(30\) (i.e., not divisible by \(2,3,5\)).</p>
<h4>b. Method Sketch:</h4>
<p>Define \(f(N)\) as the sum of the three largest proper divisors of \(N\).</p>
<ol>
<li><strong>Odd numbers are fatal:</strong> If a term is odd, all subsequent terms are odd and strictly decrease, so the sequence must eventually hit a number with fewer than three proper divisors. Hence every term must be even.</li>
<li><strong>Even non‑multiples of \(3\) are fatal:</strong> For even \(N\) with \(3\nmid N\), one shows that \(f(N)\) is either odd or not divisible by \(3\), and \(f(N)&lt;N\). Thus starting from such a number the sequence either stays even and not divisible by \(3\) (and strictly decreases) or becomes odd; in either case it cannot be infinite. Hence every term must be a multiple of \(6\).</li>
<li><strong>Multiples of \(6\):</strong> Write \(v_2=v_2(N), v_3=v_3(N)\).
<ul>
<li>If \(v_2=1\) (so \(4\nmid N\)), the three smallest divisors \(&gt;1\) are \(2,3,5\) (if \(5\mid N\)) or \(2,3,6\). In the former case \(f(N)\) is odd; in the latter \(f(N)=N\) (a fixed point). So \(v_2=1\) works iff \(5\nmid N\).</li>
<li>If \(v_2\ge 2\), then \(N\) is a multiple of \(12\) and \(f(N)=\frac{13}{12}N\).</li>
</ul>
Repeated application reduces \(v_2\) by \(2\) and \(v_3\) by \(1\) each step. To avoid eventually producing an odd number or an even number not divisible by \(3\), this process must stop exactly when \(v_2\) becomes \(1\) and \(v_3\ge 1\), landing in a fixed point. This forces \(v_2\) odd, \(5\nmid N\), and \(v_3\ge \frac{v_2+1}{2}\).</li>
<li><strong>Sufficiency:</strong> If the conditions hold, either \(a_1\) is already a fixed point (\(v_2=1\)) or a finite chain of \(13/12\) steps leads to a fixed point. All intermediate terms are multiples of \(12\) (hence have \(\ge 3\) proper divisors). Thus the sequence is infinite.</li>
</ol>
<hr>
<h4>Detailed Solution</h4>
<p>Let \(f(N)\) be the sum of the three largest proper divisors of \(N\). If the positive divisors of \(N\) are \(1=e_1&lt;e_2&lt;\dots&lt;e_t=N\), then the proper divisors in decreasing order are \(N/e_2, N/e_3,\dots,N/e_t\). Hence</p>
<div class="um-math-block">\[
f(N)=\frac{N}{e_2}+\frac{N}{e_3}+\frac{N}{e_4}.
\]</div>
<p>The sequence requires that each term has at least three proper divisors, i.e. \(t\ge 4\).</p>
<h4>1.  Odd numbers cannot appear in an infinite sequence.</h4>
<p>If \(N\) is odd, all divisors are odd, so \(f(N)\) is odd. Moreover, the smallest possible divisors \(&gt;1\) are at least \(3,5,7\) (they are odd), giving</p>
<div class="um-math-block">\[
\frac1{e_2}+\frac1{e_3}+\frac1{e_4}\le\frac13+\frac15+\frac17=\frac{71}{105}&lt;1,
\]</div>
<p>hence \(f(N)&lt;N\). Once an odd term appears, the sequence becomes strictly decreasing and remains odd; a strictly decreasing sequence of positive integers is finite – it must eventually reach a number with fewer than three proper divisors. Therefore every \(a_n\) must be <strong>even</strong>.</p>
<h4>2.  Even numbers not divisible by \(3\) are also fatal.</h4>
<p>Assume \(N\) is even but \(3\nmid N\). We examine \(f(N)\) modulo \(3\) and its parity.</p>
<p><em>Subcase 2a: \(4\mid N\).</em> Then \(e_2=2\), \(e_3=4\). Since \(3\nmid N\), \(N\equiv\pm1\pmod3\). Modulo \(3\),</p>
<div class="um-math-block">\[
\frac{N}{2}\equiv2N,\qquad \frac{N}{4}\equiv N\;\;(\text{as }4\equiv1),\qquad \frac{N}{e_4}\equiv N e_4^{-1}.
\]</div>
<p>Thus</p>
<div class="um-math-block">\[
f(N)\equiv N(2+1+e_4^{-1})=N(3+e_4^{-1})\equiv N e_4^{-1}\not\equiv0\pmod3,
\]</div>
<p>so \(3\nmid f(N)\).</p>
<p><em>Subcase 2b: \(2\parallel N\) (i.e. \(v_2(N)=1\)).</em> Write \(N=2m\) with \(m\) odd, \(3\nmid m\). The smallest divisor \(&gt;2\) is an odd prime \(p\mid m\); thus \(e_3=p\). Let \(e_4\) be the next divisor. Then</p>
<div class="um-math-block">\[
f(N)=m+\frac{2m}{p}+\frac{2m}{e_4}.
\]</div>
<p>Modulo \(3\), \(m\equiv\pm1\). Because \(p,e_4\not\equiv0\pmod3\),</p>
<div class="um-math-block">\[
\frac{2m}{p}\equiv\pm2p^{-1},\qquad \frac{2m}{e_4}\equiv\pm2e_4^{-1}\pmod3.
\]</div>
<p>Set \(u\equiv p^{-1}, v\equiv e_4^{-1}\pmod3\); then \(u,v\in\{1,2\}\). The sum satisfies</p>
<div class="um-math-block">\[
f(N)\equiv\pm\bigl(1+2u+2v\bigr)\equiv\pm\bigl(1-(u+v)\bigr)\pmod3.
\]</div>
<p>Hence \(3\mid f(N)\) exactly when \(u+v\equiv1\pmod3\), which occurs only for \(u=v=2\) (since \(1+1=2,\;1+2\equiv0,\;2+2\equiv1\)). In this case \(p\equiv2\pmod3\) and \(e_4\equiv2\pmod3\).<br>
We claim \(e_4\) must be odd. The even divisors of \(N\) are \(2d\) with \(d\mid m\); the smallest such after \(2\) is \(2p\). If \(e_4=2p\) then \(e_4\equiv2\cdot2=4\equiv1\pmod3\), contradicting \(v=2\). Thus \(e_4\) is odd. Consequently \(\frac{2m}{p}\) and \(\frac{2m}{e_4}\) are even, while \(m\) is odd; therefore \(f(N)\) is <strong>odd</strong>.</p>
<p>In both subcases, \(f(N)\) is either odd, or even but not divisible by \(3\). Moreover, for such \(N\) we have \(e_3\ge4\) and \(e_4\ge5\), so</p>
<div class="um-math-block">\[
\frac1{e_2}+\frac1{e_3}+\frac1{e_4}\le\frac12+\frac14+\frac15=\frac{19}{20}&lt;1,
\]</div>
<p>giving \(f(N)&lt;N\).</p>
<p>Now start with an even \(a_1\) not divisible by \(3\). If the sequence ever becomes odd, Step 1 shows it must die. If it never becomes odd, every term is even and not divisible by \(3\), and the sequence strictly decreases. A strictly decreasing sequence of positive integers is finite; it must eventually reach a number with fewer than three proper divisors. Hence <strong>no even non‑multiple of \(3\) can start an infinite sequence</strong>. Together with Step 1, every term must be a multiple of \(6\). In particular \(a_1\) is a multiple of \(6\).</p>
<h4>3.  Behavior of multiples of \(6\).</h4>
<p>Let \(N\) be a multiple of \(6\) and write \(v_2=v_2(N)\), \(v_3=v_3(N)\); we have \(v_2\ge1,\;v_3\ge1\).</p>
<p><em>Case 3.1: \(v_2=1\).</em> Then \(4\nmid N\). The divisors \(&gt;1\) begin with \(2,3\). The next divisor is the smallest among \(\{5,6\}\) that divides \(N\).</p>
<ul>
<li>If \(5\mid N\), then \(e_4=5\) and \(f(N)=\frac{N}{2}+\frac{N}{3}+\frac{N}{5}=\frac{31}{30}N\). Write \(N=30t\). Since \(v_2=1\), \(t\) is odd, so \(f(N)=31t\) is odd – fatal.</li>
<li>If \(5\nmid N\), then \(e_4=6\) and \(f(N)=\frac{N}{2}+\frac{N}{3}+\frac{N}{6}=N\). Thus \(N\) is a fixed point, and it has proper divisors \(1,2,3,6,\dots\) (at least three). So for \(v_2=1\), \(N\) works <strong>iff</strong> \(5\nmid N\).</li>
</ul>
<p><em>Case 3.2: \(v_2\ge2\).</em> Then \(4\mid N\), so \(N\) is a multiple of \(12\). The three smallest divisors \(&gt;1\) are exactly \(2,3,4\). Hence</p>
<div class="um-math-block">\[
f(N)=\frac{N}{2}+\frac{N}{3}+\frac{N}{4}=\frac{13}{12}N.
\]</div>
<p>Define the transformation \(T(N)=\frac{13}{12}N\) for \(N\) divisible by \(12\). If \(N=2^a3^b\prod p_i^{c_i}\), then \(T(N)=2^{a-2}3^{b-1}13\prod p_i^{c_i}\) (provided \(a\ge2,b\ge1\)). Notice \(v_5\) is unchanged, and other prime exponents are unchanged.</p>
<p>Starting from \(a_1\), as long as the current term is a multiple of \(12\) we apply \(T\). Let \(a_{r+1}\) be the <strong>first</strong> term that is <em>not</em> a multiple of \(12\) (i.e. \(v_2&lt;2\) or \(v_3&lt;1\)). Then \(r\) applications of \(T\) have been made, and</p>
<div class="um-math-block">\[
v_2(a_{r+1})=v_2(a_1)-2r,\quad v_3(a_{r+1})=v_3(a_1)-r,\quad v_5(a_{r+1})=v_5(a_1).
\]</div>
<p>For the whole sequence to be infinite, \(a_{r+1}\) must itself be a valid starting point. By Steps 1–3.1, the only numbers that can possibly start an infinite sequence are those with \(v_2=1\), \(v_3\ge1\), \(5\nmid N\) (the Case 3.1 fixed points). (If \(a_{r+1}\) is odd, it dies; if even and \(3\nmid a_{r+1}\), it dies by Step 2; if it is a multiple of \(6\) with \(v_2=1\) and \(5\mid a_{r+1}\), it maps to an odd number; if \(v_2\ge2\) it would be a multiple of \(12\), contradicting the choice of \(r\).) Therefore we must have</p>
<div class="um-math-block">\[
v_2(a_{r+1})=1,\quad v_3(a_{r+1})\ge1,\quad v_5(a_{r+1})=0.
\]</div>
<p>This yields necessary conditions on \(a_1\):</p>
<ul>
<li>\(v_5(a_1)=0\)  (\(5\nmid a_1\)).</li>
<li>\(v_2(a_1)-2r=1\;\Longrightarrow\; v_2(a_1)\) is odd and \(r=\frac{v_2(a_1)-1}{2}\).</li>
<li>\(v_3(a_1)-r\ge1\;\Longrightarrow\; v_3(a_1)\ge r+1=\frac{v_2(a_1)+1}{2}\). During the \(r\) steps the numbers are multiples of \(12\); this requires \(v_3(a_1)\ge r\) (weaker than above) and \(v_2(a_1)\ge2\) for the first \(r\) steps (true because \(v_2\ge3\) when \(r\ge1\), and if \(r=0\) we are already in Case 3.1).</li>
</ul>
<h4>4.  Sufficiency of the conditions.</h4>
<p>Conversely, suppose \(a_1\) satisfies</p>
<ul>
<li>\(v_2(a_1)\) is odd,</li>
<li>\(v_3(a_1)\ge\frac{v_2(a_1)+1}{2}\),</li>
<li>\(5\nmid a_1\).</li>
</ul>
<p>(These imply \(v_2\ge1,\;v_3\ge1\), so \(6\mid a_1\).)</p>
<ul>
<li>If \(v_2(a_1)=1\), then \(a_1\) is in Case 3.1 and is a fixed point.</li>
<li>If \(v_2(a_1)\ge3\), let \(r=\frac{v_2(a_1)-1}{2}\). For \(i=0,\dots,r-1\), the number \(a_{i+1}\) (with \(a_1\) as \(i=0\)) has \(v_2=v_2(a_1)-2i\ge3\) and \(v_3=v_3(a_1)-i\ge v_3(a_1)-(r-1)\ge2\); hence it is a multiple of \(12\), and \(f(a_{i+1})=T(a_{i+1})\). After \(r\) steps we obtain \(a_{r+1}\) with \(v_2=1\), \(v_3\ge1\), \(v_5=0\). This number is a multiple of \(6\) not divisible by \(4\) or \(5\), so by Case 3.1 it satisfies \(f(a_{r+1})=a_{r+1}\) and is a fixed point. The sequence becomes constant from then on. All terms have at least three proper divisors: the multiples of \(12\) have divisors \(2,3,4,6,\dots\), and the final fixed point has \(2,3,6,\dots\). Thus the sequence is infinite.</li>
</ul>
<h4>5.  Conclusion.</h4>
<p>A positive integer \(a_1\) yields an infinite sequence if and only if its prime factorization satisfies:</p>
<ul>
<li>the exponent of \(2\) is odd,</li>
<li>the exponent of \(3\) is at least \(\frac{\text{exponent of }2+1}{2}\),</li>
<li>\(5\) does not divide \(a_1\).</li>
</ul>
<p>Equivalently, writing \(a_1=2^k\cdot3^j\cdot m\) with \(m\) coprime to \(2\) and \(3\), the conditions become: \(k\) is odd, \(j\ge\frac{k+1}{2}\), and \(m\) is a positive integer not divisible by \(5\) (i.e. \(m\) coprime to \(30\)).</p>
            </div>
        </details>
        <details class="um-case">
            <summary>
                <span class="um-case-id">IMO 2025 P5</span>
                <span class="um-case-meta"><span class="um-case-score full">7</span></span>
            </summary>
            <div class="um-proof-body">
<h4>Problem</h4>
<p>Alice and Bazza are playing the inekoalaty game, a two-player game whose rules depend on a positive real number \(\lambda\) which is known to both players. On the \(n\)th turn of the game (starting with \(n=1\)) the following happens:</p>
<ul>
<li>If \(n\) is odd, Alice chooses a nonnegative real number \(x_n\) such that
<div class="um-math-block">\[
x_1 + x_2 + \cdots + x_n \le \lambda n.
\]</div></li>
<li>If \(n\) is even, Bazza chooses a nonnegative real number \(x_n\) such that
<div class="um-math-block">\[
x_1^2 + x_2^2 + \cdots + x_n^2 \le n.
\]</div></li>
</ul>
<p>If a player cannot choose a suitable \(x_n\), the game ends and the other player wins. If the game goes on forever, neither player wins. All chosen numbers are known to both players.<br>
Determine all values of \(\lambda\) for which Alice has a winning strategy and all those for which Bazza has a winning strategy.</p>
<hr>
<h4>Summary</h4>
<h4>a. Verdict:</h4>
<p>Alice has a winning strategy if and only if \(\lambda &gt; \dfrac{1}{\sqrt{2}}\).<br>
Bazza has a winning strategy if and only if \(\lambda &lt; \dfrac{1}{\sqrt{2}}\).<br>
For \(\lambda = \dfrac{1}{\sqrt{2}}\) neither player has a winning strategy (the game is a draw).</p>
<h4>b. Method Sketch:</h4>
<p>Write the moves as \(a_k = x_{2k-1}\) (Alice) and \(b_k = x_{2k}\) (Bazza). Let \(S_n = \sum_{i=1}^n x_i\) and \(Q_n = \sum_{i=1}^n x_i^2\) with \(S_0=Q_0=0\).</p>
<p><em>For \(\lambda &gt; 1/\sqrt{2}\):</em> Alice chooses a large odd turn \(N\) in advance. She plays \(0\) on all odd turns before \(N\). On turn \(N\) she takes the whole remaining budget, setting \(x_N = \lambda N - S_{N-1}\). Using Cauchy–Schwarz one obtains \(S_{N-1} \le (N-1)/\sqrt{2}\), so \(x_N\) is large enough that \(x_N^2 &gt; N+1\); hence \(Q_N &gt; N+1\). On the next even turn \(N+1\) Bazza cannot move and Alice wins. She survives before \(N\) because \(S_{2m} \le m\sqrt{2} &lt; \lambda(2m+1)\) for all \(m\).</p>
<p><em>For \(\lambda &lt; 1/\sqrt{2}\):</em> Bazza always plays the maximal allowed move \(b_k = \sqrt{2k - Q_{2k-1}}\). Induction shows that as long as Alice has not won, \(Q_{2k} = 2k\) and \(S_{2k} \ge k\sqrt{2}\). Alice would need \(a_k &gt; \sqrt{2}\) to win, but the sum constraint would then force \(k\sqrt{2} &lt; \lambda(2k-1)\), which is impossible for \(\lambda &lt; 1/\sqrt{2}\). Hence Alice never wins. Eventually \(S_{2k} \ge k\sqrt{2} &gt; \lambda(2k+1)\), so Alice cannot move and loses.</p>
<p><em>For \(\lambda = 1/\sqrt{2}\):</em> Alice can force a draw by always playing \(0\); Bazza can force a draw by the above maximal‑move strategy. Thus neither has a winning strategy.</p>
<hr>
<h4>Detailed Solution</h4>
<h4>Notation.</h4>
<p>For each turn \(n\ge 1\) let \(x_n\) be the chosen number. Write \(a_k = x_{2k-1}\) (Alice’s \(k\)-th move) and \(b_k = x_{2k}\) (Bazza’s \(k\)-th move). Define</p>
<div class="um-math-block">\[
S_0 = Q_0 = 0,\qquad 
S_{2k-1} = S_{2k-2} + a_k,\quad Q_{2k-1} = Q_{2k-2} + a_k^2,\qquad
S_{2k} = S_{2k-1} + b_k,\quad Q_{2k} = Q_{2k-1} + b_k^2.
\]</div>
<p>The rules become:</p>
<ul>
<li>On turn \(2k-1\) Alice must choose \(a_k \ge 0\) with \(S_{2k-2}+a_k \le \lambda(2k-1)\).</li>
<li>On turn \(2k\) Bazza must choose \(b_k \ge 0\) with \(Q_{2k-1}+b_k^2 \le 2k\).</li>
</ul>
<p>A player loses if on her/his turn no non‑negative number satisfies the corresponding inequality. Consequently,</p>
<ul>
<li>Alice wins if for some \(k\) she makes \(Q_{2k-1} &gt; 2k\); then on the next even turn \(2k\) Bazza cannot move (even \(b_k=0\) would give \(Q_{2k}\ge Q_{2k-1}&gt;2k\)).</li>
<li>Bazza wins if for some \(k\) he forces \(S_{2k} &gt; \lambda(2k+1)\); then on turn \(2k+1\) Alice cannot choose any \(a_{k+1}\ge 0\).</li>
</ul>
<hr>
<h4>1. The case \(\lambda &gt; 1/\sqrt{2}\). Alice has a winning strategy.</h4>
<p>Let \(c = \lambda - 1/\sqrt{2} &gt; 0\). Alice chooses an odd integer \(N = 2m+1\) (\(m\ge 0\)) satisfying</p>
<div class="um-math-block">\[
\bigl(cN + \tfrac{1}{\sqrt{2}}\bigr)^2 &gt; N+1. \tag{1}
\]</div>
<p>Such an \(N\) exists because the left‑hand side is a quadratic polynomial in \(N\) with positive leading coefficient, hence it eventually exceeds the linear function \(N+1\). She can take the smallest odd integer fulfilling (1).</p>
<h4>Strategy.</h4>
<ul>
<li>On every odd turn \(n &lt; N\) play \(x_n = 0\).</li>
<li>On turn \(N\) play \(x_N = \lambda N - S_{N-1}\).</li>
</ul>
<h4>Survival before turn \(N\).</h4>
<p>Consider any even turn \(2i \le N-1\). All odd moves up to \(2i-1\) are \(0\), so \(S_{2i} = \sum_{j=1}^i b_j\) and \(Q_{2i} = \sum_{j=1}^i b_j^2\). Bazza’s rule gives \(Q_{2i} \le 2i\). By Cauchy–Schwarz,</p>
<div class="um-math-block">\[
S_{2i}^2 \le i\,Q_{2i} \le 2i^2 \quad\Longrightarrow\quad S_{2i} \le i\sqrt{2}. \tag{2}
\]</div>
<p>For an odd turn \(2i+1 &lt; N\) Alice intends to play \(0\); she needs \(S_{2i} \le \lambda(2i+1)\). Using (2),</p>
<div class="um-math-block">\[
S_{2i} \le i\sqrt{2} = \frac{2i}{\sqrt{2}} &lt; \frac{2i+1}{\sqrt{2}} \le \lambda(2i+1),
\]</div>
<p>because \(\lambda &gt; 1/\sqrt{2}\). Hence she can always legally play \(0\).</p>
<h4>The winning move on turn \(N\).</h4>
<p>Before her move on turn \(N = 2m+1\) we have \(S_{N-1} = S_{2m}\). By (2),</p>
<div class="um-math-block">\[
S_{N-1} \le m\sqrt{2} = \frac{N-1}{\sqrt{2}}.
\]</div>
<p>Alice chooses</p>
<div class="um-math-block">\[
x_N = \lambda N - S_{N-1} \ge \lambda N - \frac{N-1}{\sqrt{2}}
= N\Bigl(\lambda - \frac{1}{\sqrt{2}}\Bigr) + \frac{1}{\sqrt{2}} = cN + \frac{1}{\sqrt{2}} &gt; 0.
\]</div>
<p>The move is legal because the new sum equals \(\lambda N\). Moreover,</p>
<div class="um-math-block">\[
x_N^2 \ge \Bigl(cN + \frac{1}{\sqrt{2}}\Bigr)^2 &gt; N+1 \qquad\text{(by the choice of }N\text{)}.
\]</div>
<p>Since \(Q_{N-1} \ge 0\), we obtain</p>
<div class="um-math-block">\[
Q_N = Q_{N-1} + x_N^2 &gt; N+1.
\]</div>
<p><strong>Winning.</strong> On the next even turn \(N+1\) Bazza must satisfy \(Q_{N+1} \le N+1\). But \(Q_{N+1} \ge Q_N &gt; N+1\); even choosing \(x_{N+1}=0\) fails. Thus Bazza cannot move and Alice wins. Hence Alice has a winning strategy for every \(\lambda &gt; 1/\sqrt{2}\).</p>
<hr>
<h4>2. The case \(\lambda &lt; 1/\sqrt{2}\). Bazza has a winning strategy.</h4>
<p><strong>Bazza’s strategy.</strong> On his turn \(2k\), if the game has not ended (i.e. Alice has not already won), he plays</p>
<div class="um-math-block">\[
b_k = \sqrt{\,2k - Q_{2k-1}\,}\;\;(\ge 0).
\]</div>
<p>(If \(Q_{2k-1} &gt; 2k\), Alice would have won on the previous odd turn, so the game is already over.)</p>
<p><strong>Inductive bounds.</strong> We prove that for every \(k \ge 1\), as long as Alice has not won,</p>
<div class="um-math-block">\[
Q_{2k} = 2k, \qquad S_{2k} \ge k\sqrt{2}. \tag{3}
\]</div>
<p><em>Base \(k=1\).</em> \(Q_0 = 0\). Alice chooses \(a_1\). If \(a_1^2 &gt; 2\) then \(Q_1 &gt; 2\) and Alice wins immediately; otherwise \(a_1^2 \le 2\). Bazza sets \(b_1 = \sqrt{2 - a_1^2}\). Then</p>
<div class="um-math-block">\[
Q_2 = a_1^2 + b_1^2 = 2.
\]</div>
<p>For the sum, note that for \(0 \le x \le \sqrt{2}\),</p>
<div class="um-math-block">\[
(x + \sqrt{2 - x^2})^2 = 2 + 2x\sqrt{2 - x^2} \ge 2,
\]</div>
<p>hence \(x + \sqrt{2 - x^2} \ge \sqrt{2}\). Therefore</p>
<div class="um-math-block">\[
S_2 = a_1 + b_1 \ge \sqrt{2} = 1\cdot\sqrt{2}.
\]</div>
<p><em>Inductive step.</em> Assume \(Q_{2k-2} = 2k-2\). On turn \(2k-1\) Alice chooses \(a_k\). If \(a_k^2 &gt; 2\) then \(Q_{2k-1} = 2k-2 + a_k^2 &gt; 2k\) and Alice wins; otherwise \(a_k^2 \le 2\). Then</p>
<div class="um-math-block">\[
Q_{2k-1} = 2k-2 + a_k^2 \le 2k,
\]</div>
<p>so Bazza’s move is legal and equals \(b_k = \sqrt{2k - Q_{2k-1}} = \sqrt{2 - a_k^2}\). Consequently,</p>
<div class="um-math-block">\[
Q_{2k} = Q_{2k-1} + b_k^2 = (2k-2 + a_k^2) + (2 - a_k^2) = 2k.
\]</div>
<p>Moreover,</p>
<div class="um-math-block">\[
S_{2k} = S_{2k-2} + a_k + b_k = S_{2k-2} + a_k + \sqrt{2 - a_k^2}.
\]</div>
<p>Because \(a_k \in [0,\sqrt{2}]\), we have \(a_k + \sqrt{2 - a_k^2} \ge \sqrt{2}\). Using the induction hypothesis \(S_{2k-2} \ge (k-1)\sqrt{2}\), we get</p>
<div class="um-math-block">\[
S_{2k} \ge (k-1)\sqrt{2} + \sqrt{2} = k\sqrt{2}.
\]</div>
<p>This completes the induction.</p>
<p><strong>Alice never wins.</strong> To win on turn \(2k-1\), Alice must make \(Q_{2k-1} &gt; 2k\). As long as she hasn’t won earlier, \(Q_{2k-2} = 2k-2\) by (3), so she needs \(a_k^2 &gt; 2\), i.e. \(a_k &gt; \sqrt{2}\). Her move must satisfy the sum constraint</p>
<div class="um-math-block">\[
S_{2k-2} + a_k \le \lambda(2k-1).
\]</div>
<p>Since \(a_k &gt; \sqrt{2}\),</p>
<div class="um-math-block">\[
S_{2k-2} + \sqrt{2} &lt; S_{2k-2} + a_k \le \lambda(2k-1).
\]</div>
<p>Using \(S_{2k-2} \ge (k-1)\sqrt{2}\) from (3), we obtain</p>
<div class="um-math-block">\[
(k-1)\sqrt{2} + \sqrt{2} &lt; \lambda(2k-1) \;\Longrightarrow\; k\sqrt{2} &lt; \lambda(2k-1). \tag{4}
\]</div>
<p>Now \(\lambda &lt; 1/\sqrt{2}\) implies \(2\lambda &lt; \sqrt{2}\). Therefore</p>
<div class="um-math-block">\[
\lambda(2k-1) = 2\lambda k - \lambda &lt; \sqrt{2}\,k - \lambda.
\]</div>
<p>Hence</p>
<div class="um-math-block">\[
k\sqrt{2} - \lambda(2k-1) &gt; k\sqrt{2} - (\sqrt{2}\,k - \lambda) = \lambda &gt; 0,
\]</div>
<p>so \(k\sqrt{2} &gt; \lambda(2k-1)\) for every \(k \ge 1\). Condition (4) is never satisfied; Alice can never make a winning move.</p>
<p><strong>Alice eventually loses.</strong> On turn \(2k+1\) Alice must choose \(a_{k+1} \ge 0\) with \(S_{2k} + a_{k+1} \le \lambda(2k+1)\). In particular, she needs \(S_{2k} \le \lambda(2k+1)\) (otherwise even \(a_{k+1}=0\) is illegal). From (3) we have \(S_{2k} \ge k\sqrt{2}\). Thus if</p>
<div class="um-math-block">\[
k\sqrt{2} &gt; \lambda(2k+1),
\]</div>
<p>Alice loses on that turn. Now \(\lambda(2k+1) = 2\lambda k + \lambda\). Because \(\sqrt{2} - 2\lambda &gt; 0\),</p>
<div class="um-math-block">\[
k\sqrt{2} - \lambda(2k+1) = k(\sqrt{2} - 2\lambda) - \lambda \xrightarrow[k\to\infty]{} +\infty.
\]</div>
<p>Consequently there exists an integer \(K\) such that for all \(k \ge K\), \(k\sqrt{2} &gt; \lambda(2k+1)\). For such \(k\), \(S_{2k} \ge k\sqrt{2} &gt; \lambda(2k+1)\), so on turn \(2k+1\) Alice has no legal move and loses. Bazza therefore wins.</p>
<p>Thus Bazza has a winning strategy for all \(\lambda &lt; 1/\sqrt{2}\).</p>
<hr>
<h4>3. The case \(\lambda = 1/\sqrt{2}\). Neither player has a winning strategy.</h4>
<p><em>Alice can force a draw.</em> Alice plays \(x_n = 0\) on every odd turn.<br>
For any \(k \ge 1\), before turn \(2k-1\) the sum \(S_{2k-2}\) consists entirely of Bazza’s moves (Alice has played \(0\) on all previous odd turns). By Bazza’s rule up to turn \(2k-2\) we have \(Q_{2k-2} \le 2k-2\). Cauchy–Schwarz gives</p>
<div class="um-math-block">\[
S_{2k-2}^2 \le (k-1) Q_{2k-2} \le (k-1)(2k-2) = 2(k-1)^2,
\]</div>
<p>so \(S_{2k-2} \le (k-1)\sqrt{2}\). Since \(\lambda = 1/\sqrt{2}\),</p>
<div class="um-math-block">\[
\lambda(2k-1) = \frac{2k-1}{\sqrt{2}} &gt; \frac{2k-2}{\sqrt{2}} = (k-1)\sqrt{2} \ge S_{2k-2}.
\]</div>
<p>Hence \(S_{2k-2} &lt; \lambda(2k-1)\) for every \(k\), so Alice can always legally play \(0\). The game continues forever; Bazza never wins.</p>
<p><em>Bazsa can force a draw.</em> Bazza adopts the maximal‑move strategy from Case 2: on turn \(2k\) (if the game continues) he plays \(b_k = \sqrt{2k - Q_{2k-1}}\). The induction establishing (3) remains valid for this \(\lambda\) because it never used the value of \(\lambda\) except in the step that derives a contradiction for Alice. As long as Alice has not won, we again have \(Q_{2k} = 2k\) and \(S_{2k} \ge k\sqrt{2}\).<br>
If Alice were to win on turn \(2k-1\), she would need \(a_k &gt; \sqrt{2}\) and \(S_{2k-2} + a_k \le \lambda(2k-1)\), which forces the necessary condition \(k\sqrt{2} &lt; \lambda(2k-1)\) as in (4). With \(\lambda = 1/\sqrt{2}\) this becomes</p>
<div class="um-math-block">\[
k\sqrt{2} &lt; \frac{2k-1}{\sqrt{2}} \;\Longleftrightarrow\; 2k &lt; 2k-1,
\]</div>
<p>which is false. Hence Alice can never win. Bazza’s moves are always legal while the game continues, so he never loses. The game therefore continues forever.</p>
<p>Since each player can force the game to continue indefinitely without losing, neither has a winning strategy.</p>
<hr>
<h4>Conclusion.</h4>
<div class="um-math-block">\[
\begin{aligned}
\text{Alice has a winning strategy} &amp;\iff \lambda &gt; \frac{1}{\sqrt{2}},\\[2mm]
\text{Bazza has a winning strategy} &amp;\iff \lambda &lt; \frac{1}{\sqrt{2}},\\[2mm]
&amp;\text{and for } \lambda = \frac{1}{\sqrt{2}} \text{ neither player wins (draw).}
\end{aligned}
\]</div>
            </div>
        </details>
        <details class="um-case">
            <summary>
                <span class="um-case-id">IMO 2025 P6</span>
                <span class="um-case-meta"><span class="um-case-score zero">0</span></span>
            </summary>
            <div class="um-proof-body">
<h4>Problem</h4>
<p>Consider a \(2025 \times 2025\) grid of unit squares. Matilda wishes to place on the grid some rectangular tiles, possibly of different sizes, such that each side of every tile lies on a grid line and every unit square is covered by at most one tile.<br>
Determine the minimum number of tiles Matilda needs to place so that each row and each column of the grid has exactly one unit square that is not covered by any tile.</p>
<hr>
<h4>1. Summary</h4>
<p><strong>a. Verdict:</strong> I have successfully solved the problem. The minimum number of tiles is \(4048\).</p>
<p><strong>b. Method Sketch:</strong> The answer is \(2n-2\) for \(n=2025\). An upper bound is achieved by placing the uncovered squares on the main diagonal and covering the remaining cells with \(2n-2\) tiles (row strips and column strips). For the lower bound we use induction on \(n\). The base cases \(n=1,2\) are trivial. For the inductive step \(n\ge 3\), let the holes be at \((i,\sigma(i))\). Take the holes in the first two rows: \(h=\sigma(1)\), \(s=\sigma(2)\). The tile \(V\) covering \((1,s)\) vanishes because \((2,s)\) is a hole. To find a second vanished tile, examine the tile \(W\) covering \((2,h)\) and the cell \(A\) in row \(2\) adjacent to column \(h\).</p>
<ul>
<li>If \(A\) is a hole or is covered by a tile that extends downward from row \(1\), one side of \(W\) is forced to column \(h\).</li>
<li>If \(A\) is covered by a tile that does not extend downward, a second vanished tile appears directly. After handling the boundary cases \(h=1\) and \(h=n\), the interior case \(2\le h\le n-1\) yields a second vanished tile by a short analysis of the cell on the opposite side of \(W\). Thus at least two tiles vanish when we remove row \(1\) and column \(h\). The remaining tiles form a tiling of an \((n-1)\times(n-1)\) grid, so by induction the total number of tiles is at least \(2n-2\).</li>
</ul>
<hr>
<h4>2. Detailed Solution</h4>
<p>Let \(n=2025\). We prove that for any \(n\times n\) grid the minimum number of tiles is \(2n-2\); for \(n=2025\) this gives \(4048\).</p>
<hr>
<h4>1. Upper bound – a construction with \(2n-2\) tiles.</h4>
<p>Place the uncovered squares on the main diagonal: the cell \((i,i)\) is left uncovered for \(i=1,\dots,n\). The remaining \(n(n-1)\) cells are covered by the following rectangles:</p>
<ul>
<li>for each \(j=2,\dots,n\): a vertical tile occupying rows \(1,2,\dots,j-1\) in column \(j\);</li>
<li>for each \(i=2,\dots,n\): a horizontal tile occupying columns \(1,2,\dots,i-1\) in row \(i\).</li>
</ul>
<p>These tiles are axis‑aligned, disjoint, and avoid the diagonal holes. Their total number is \((n-1)+(n-1)=2n-2\). For \(n=2025\) this is \(4048\).</p>
<hr>
<h4>2. Lower bound – at least \(2n-2\) tiles are necessary.</h4>
<p>We prove by induction on \(n\) that any placement of tiles satisfying the condition uses at least \(2n-2\) tiles.</p>
<p><em>Base cases.</em><br>
\(n=1\): the only cell is a hole, \(0\) tiles.<br>
\(n=2\): the two covered cells lie in different rows and columns; a single rectangle covering both would also cover the cell at the intersection of their row and column, which is a hole. Hence at least \(2\) tiles are needed.</p>
<p><em>Inductive step.</em> Assume the statement holds for all grids smaller than \(n\), where \(n\ge 3\). Take an \(n\times n\) grid with a tiling of \(m\) tiles. Let the holes be at \((i,\sigma(i))\) for \(i=1,\dots,n\) (\(\sigma\) is a permutation). We will remove the first row and the column containing its hole, namely column \(h=\sigma(1)\). After the removal we obtain an \((n-1)\times(n-1)\) grid; we shall prove that at least two tiles of the original tiling are completely contained in row \(1\) or column \(h\), so their number drops by at least \(2\).</p>
<p>Set \(s=\sigma(2)\) (the hole in the second row). Clearly \(s\neq h\).</p>
<p><strong>A first vanished tile.</strong> The cell \((1,s)\) is covered (the only hole in row \(1\) is \(h\)). Let \(V\) be the tile containing \((1,s)\). Because \((2,s)\) is a hole, \(V\) cannot extend downward; its row interval is exactly \(\{1\}\). Hence \(V\) lies entirely in row \(1\) and disappears when row \(1\) is removed.</p>
<p><strong>A second vanished tile.</strong> The cell \((2,h)\) is covered (the hole of column \(h\) is at \((1,h)\)). Let \(W\) be the tile containing \((2,h)\). We analyse \(W\) to find another tile that vanishes.</p>
<p>Define a cell \(A\) in row \(2\) that is adjacent to column \(h\):</p>
<div class="um-math-block">\[
A = \begin{cases}
(2,h+1), &amp; \text{if } h &lt; n,\\[2pt]
(2,h-1), &amp; \text{if } h = n.
\end{cases}
\]</div>
<p>(For \(n\ge 3\) at least one of these exists.)</p>
<p>Look at the tile that covers \(A\). Three possibilities occur.</p>
<p><em>Case 1: \(A\) is a hole.</em> Then the hole in row \(2\) is exactly at the column of \(A\), i.e. \(s = h+1\) (when \(h&lt;n\)) or \(s = h-1\) (when \(h=n\)). Because \(A\) is a hole, \(W\) cannot cover it; consequently one side of \(W\)’s column interval is forced to be exactly column \(h\).</p>
<p><em>Case 2: \(A\) is covered by a tile \(R\) that extends downward from row \(1\).</em> Then \(R\) contains a cell in row \(1\) directly above \(A\) (namely \((1,h+1)\) or \((1,h-1)\)) and its row interval includes row \(2\). Hence \(R\) covers \(A\). Since \(R\) and \(W\) are disjoint, \(W\) cannot cover the cell next to \(A\). The same conclusion holds: one side of \(W\)’s column interval is exactly column \(h\).</p>
<p><em>Case 3: \(A\) is covered by a tile that does not extend downward from row \(1\).</em> Then the cell above \(A\) is covered by a different tile \(U\). Because \(A\) is already covered by a tile whose top edge is at least \(2\), \(U\) cannot extend downward (otherwise it would cover \(A\)). Thus \(U\)’s row interval is \(\{1\}\), so \(U\) vanishes when row \(1\) is removed. Moreover \(U\neq V\): if \(U=V\) then \(s = h\pm1\), which would make \(A\) a hole, contradicting the present case. Hence \(V\) and \(U\) are two distinct vanished tiles, and we are done.</p>
<p>Thus we may assume we are in Case 1 or Case 2. In the following, one side of \(W\) is forced to column \(h\).</p>
<p><em>Boundary cases.</em><br>
– If \(h = 1\), then \(h&lt;n\), so \(A = (2,2)\). By Case 1 or 2, \(W\)’s right edge equals \(1\). The left edge of the grid is at column \(1\), so \(W\) is contained in column \(1\) and vanishes. Together with \(V\) we have two tiles.<br>
– If \(h = n\), then \(A = (2,n-1)\). \(W\)’s left edge is forced to be \(n\); its right edge is \(n\). Hence \(W\) vanishes. Two tiles.</p>
<p><em>Interior case: \(2 \le h \le n-1\).</em> Here \(h &lt; n\), so \(A = (2,h+1)\) and we set \(B = (2,h-1)\) (the cell on the other side of \(W\)). From the analysis above, \(W\)’s right edge equals \(h\). Now examine \(B\).</p>
<ul>
<li>If \(B\) is a hole, then \(W\) cannot cover it, so \(W\)’s left edge \(\ge h\). Together with right edge \(= h\), \(W\)’s column interval is exactly \(\{h\}\) → \(W\) vanishes.</li>
<li>If \(B\) is covered by a tile \(X\): - If \(X \neq W\), then \(X\) covers \(B\). Because \(X\) and \(W\) are disjoint, \(X\)’s right edge \(\le h-1\). Consequently \(W\)’s left edge \(\ge h\), and \(W\) vanishes. - If \(X = W\), then \(W\) also covers \(B\). Look at the tile \(L\) covering \((1,h-1)\). \(L\) lies in row \(1\). If \(L\) extended downward, it would cover \(B\) and overlap \(W\), which is impossible. Hence \(L\) does not extend downward; \(L\) is a row strip and vanishes. Finally, \(V\) and \(L\) are distinct: \(V\) covers \((1,s)\) and \(L\) covers \((1,h-1)\); they could coincide only if \(s = h-1\), which would make \(B\) a hole – contradicting that \(B\) is covered (by \(X = W\)). Thus we have two vanished tiles.</li>
</ul>
<p>In every situation we have found at least two tiles that are completely inside row \(1\) or column \(h\).</p>
<p><strong>Conclusion of the induction.</strong> Remove row \(1\) and column \(h\). The remaining cells form an \((n-1)\times(n-1)\) grid. The surviving parts of the original tiles become a tiling of this smaller grid (each part is a rectangle after the order‑preserving renumbering of rows and columns). The number of tiles in the new tiling is \(m' \le m-2\), because at least two tiles vanished and no tile splits. The holes that remain are \((i,\sigma(i))\) for \(i \ge 2\); since \(\sigma(1)=h\), no remaining row or column contains two holes, and every such row and column still has exactly one hole. By the induction hypothesis, \(m' \ge 2(n-1)-2\). Therefore</p>
<div class="um-math-block">\[
m \ge m' + 2 \ge 2(n-1)-2 + 2 = 2n-2.
\]</div>
<p>This completes the induction, proving that every valid tiling uses at least \(2n-2\) tiles.</p>
<hr>
<p><strong>3. Final answer.</strong> For \(n=2025\), the minimum number of tiles is</p>
<div class="um-math-block">\[
2 \times 2025 - 2 = 4048.
\]</div>
<div class="um-math-block">\[
\boxed{4048}
\]</div>
            </div>
        </details>
    </div>
    <div class="um-case-group">
        <div class="um-case-group-head"><span>USAMO 2026</span><span>6 problems</span></div>
        <details class="um-case">
            <summary>
                <span class="um-case-id">USAMO 2026 P1</span>
                <span class="um-case-meta"><span class="um-case-score full">7</span></span>
            </summary>
            <div class="um-proof-body">
<h4>Problem</h4>
<p>Let \(n\) be an integer greater than \(1\). For which real numbers \(x\) is</p>
<div class="um-math-block">\[
\lfloor nx \rfloor - \sum_{k=1}^{n} \frac{\lfloor kx \rfloor}{k}
\]</div>
<p>maximal, and what is the maximal value that this expression can take?</p>
<p><em>Note:</em> \(\lfloor z \rfloor\) denotes the greatest integer less than or equal to \(z\).</p>
<hr>
<h4>1. Summary</h4>
<p><strong>a. Verdict:</strong> I have successfully solved the problem. The maximal value is \(H_n-1 = \sum_{k=2}^n \frac{1}{k}\), and it is attained precisely for those real numbers \(x\) whose fractional part lies in the interval \(\bigl[\frac{n-1}{n},1\bigr)\); equivalently,</p>
<div class="um-math-block">\[
x \in \bigcup_{m\in\mathbb Z}\Bigl[m+\frac{n-1}{n},\;m+1\Bigr).
\]</div>
<h4>b. Method Sketch:</h4>
<ul>
<li>The expression is \(1\)-periodic, so we restrict to \(x\in[0,1)\) and define \(f(y)=\lfloor ny\rfloor-\sum_{k=1}^{n}\frac{\lfloor ky\rfloor}{k}\) for \(y\in[0,1)\).</li>
<li>Partition \([0,1)\) into \(I_m=[m/n,(m+1)/n)\) for \(m=0,\dots,n-1\). On \(I_m\), \(\lfloor ny\rfloor=m\) is constant while \(\sum_{k=2}^n\frac{\lfloor ky\rfloor}{k}\) is non‑decreasing; hence \(f\) is non‑increasing on \(I_m\) and attains its maximum at the left endpoint \(y=m/n\). Thus \(\max f = \max_{0\le m\le n-1} f(m/n)\).</li>
<li>For \(m\ge1\), writing \(km = q_k n + r_k\) gives \(f(m/n) = \frac1n\sum_{k=1}^{n-1}\frac{r_k}{k}\) with \(r_k = km\bmod n\).</li>
<li>Let \(d=\gcd(m,n)\). The multiset \(\{r_k\}\) consists of \(d-1\) zeros and \(d\) copies of \(d,2d,\dots,n-d\).</li>
<li>Apply the rearrangement inequality with weights \(1/k\) (decreasing) to obtain \(\sum \frac{r_k}{k} \le \sum \frac{r_{(k)}}{k}\) where \(r_{(k)}\) is the decreasing rearrangement.</li>
<li>From the explicit sorted list we prove \(r_{(k)}\le n-k\) for all \(k\). Summing yields \(\sum \frac{r_k}{k} \le n H_{n-1}-(n-1)\), whence \(f(m/n)\le H_n-1\) for every \(m\).</li>
<li>Equality forces all intermediate inequalities to be equalities, which implies \(d=1\), \(r_k=n-k\) for all \(k\), and finally \(m=n-1\). Hence any maximizer must satisfy \(\lfloor ny\rfloor=n-1\), i.e. \(y\in I_{n-1}=[\frac{n-1}{n},1)\).</li>
<li>Direct computation shows that on \(I_{n-1}\) one indeed has \(f(y)=H_n-1\).</li>
<li>By periodicity, the maximizers are exactly the translates of this interval.</li>
</ul>
<hr>
<h4>2. Detailed Solution</h4>
<p>Let \(n&gt;1\) be an integer and define</p>
<div class="um-math-block">\[
E(x)=\lfloor nx\rfloor-\sum_{k=1}^{n}\frac{\lfloor kx\rfloor}{k},\qquad x\in\mathbb R.
\]</div>
<p><strong>1.  Periodicity.</strong> For any integer \(t\),</p>
<div class="um-math-block">\[
\lfloor k(x+t)\rfloor=\lfloor kx+kt\rfloor=\lfloor kx\rfloor+kt,
\]</div>
<p>because \(kt\) is an integer. Hence</p>
<div class="um-math-block">\[
\begin{aligned}
E(x+t)&amp;=\lfloor n(x+t)\rfloor-\sum_{k=1}^{n}\frac{\lfloor k(x+t)\rfloor}{k}\\
&amp;=\lfloor nx+nt\rfloor-\sum_{k=1}^{n}\frac{\lfloor kx+kt}{k}\\
&amp;=(\lfloor nx\rfloor+nt)-\Bigl(\sum_{k=1}^{n}\frac{\lfloor kx\rfloor}{k}+ \sum_{k=1}^{n}t\Bigr)\\
&amp;=E(x)+nt-nt=E(x).
\end{aligned}
\]</div>
<p>Thus \(E\) is \(1\)-periodic. Consequently \(E(x)=E(\{x\})\) where \(\{x\}=x-\lfloor x\rfloor\in[0,1)\). We may therefore restrict our attention to \(y\in[0,1)\) and study</p>
<div class="um-math-block">\[
f(y)=\lfloor ny\rfloor-\sum_{k=1}^{n}\frac{\lfloor ky\rfloor}{k}.
\]</div>
<p>Since \(\lfloor y\rfloor=0\) for \(y\in[0,1)\), the \(k=1\) term vanishes and</p>
<div class="um-math-block">\[
f(y)=\lfloor ny\rfloor-\sum_{k=2}^{n}\frac{\lfloor ky\rfloor}{k},\qquad 0\le y&lt;1. \tag{1}
\]</div>
<p><strong>2.  Reduction to the points \(y=m/n\).</strong> For \(y\in[0,1)\) put \(m=\lfloor ny\rfloor\in\{0,1,\dots,n-1\}\). Then</p>
<div class="um-math-block">\[
y\in I_m:=\Bigl[\frac{m}{n},\frac{m+1}{n}\Bigr).
\]</div>
<p>On \(I_m\) the value \(\lfloor ny\rfloor=m\) is constant. For each \(k\ge2\) the map \(y\mapsto\lfloor ky\rfloor\) is non‑decreasing, and the coefficients \(1/k\) are positive; therefore</p>
<div class="um-math-block">\[
S(y):=\sum_{k=2}^{n}\frac{\lfloor ky\rfloor}{k}
\]</div>
<p>is non‑decreasing. Hence \(f(y)=m-S(y)\) is non‑increasing on \(I_m\), and its maximum on this interval is attained at the left endpoint:</p>
<div class="um-math-block">\[
\max_{y\in I_m}f(y)=f\Bigl(\frac{m}{n}\Bigr).
\]</div>
<p>Since the intervals \(I_m\) partition \([0,1)\),</p>
<div class="um-math-block">\[
\max_{y\in[0,1)}f(y)=\max_{0\le m\le n-1}f\Bigl(\frac{m}{n}\Bigr). \tag{2}
\]</div>
<p><strong>3.  Value at \(m/n\) for \(m\ge1\).</strong> For \(m=0\) we have \(f(0)=0\). Assume \(1\le m\le n-1\). For each \(k=1,\dots,n\) write the division of \(km\) by \(n\):</p>
<div class="um-math-block">\[
km=q_k n+r_k,\qquad 0\le r_k\le n-1.
\]</div>
<p>Then \(\lfloor k\cdot\frac{m}{n}\rfloor=q_k=\frac{km-r_k}{n}\), and therefore</p>
<div class="um-math-block">\[
\frac{\lfloor k\cdot\frac{m}{n}\rfloor}{k}=\frac{m}{n}-\frac{r_k}{nk}.
\]</div>
<p>Summing over \(k=1,\dots,n\) gives</p>
<div class="um-math-block">\[
\sum_{k=1}^{n}\frac{\lfloor k\cdot\frac{m}{n}\rfloor}{k}
=\frac{m}{n}\cdot n-\frac1n\sum_{k=1}^{n}\frac{r_k}{k}
=m-\frac1n\sum_{k=1}^{n}\frac{r_k}{k}.
\]</div>
<p>Because \(r_n=nm\bmod n=0\), the \(k=1\) term in the sum is \(\lfloor m/n\rfloor=0\); hence using (1),</p>
<div class="um-math-block">\[
f\Bigl(\frac{m}{n}\Bigr)
=m-\sum_{k=2}^{n}\frac{\lfloor k\cdot\frac{m}{n}\rfloor}{k}
=m-\Bigl(m-\frac1n\sum_{k=1}^{n}\frac{r_k}{k}\Bigr)
=\frac1n\sum_{k=1}^{n-1}\frac{r_k}{k}. \tag{3}
\]</div>
<p><strong>4.  Structure of the multiset of residues.</strong> Fix \(m\) and let \(d=\gcd(m,n)\). Write \(n=dn'\), \(m=dm'\) with \(\gcd(m',n')=1\). For \(1\le k\le n-1\),</p>
<div class="um-math-block">\[
r_k = km\bmod n = d\bigl((km')\bmod n'\bigr).
\]</div>
<p>Every \(k\in\{1,\dots,n-1\}\) can be written uniquely as \(k=qn'+r\) with \(0\le q\le d-1\) and \(0\le r\le n'-1\), excluding the pair \((q,r)=(0,0)\). Hence</p>
<ul>
<li>for \(r=0\), the admissible \(q\) are \(1,\dots,d-1\) – that is \(d-1\) values;</li>
<li>for \(r=1,\dots,n'-1\), the admissible \(q\) are \(0,\dots,d-1\) – that is \(d\) values.</li>
</ul>
<p>Thus the residue of \(k\) modulo \(n'\) takes the value \(0\) exactly \(d-1\) times, and each non‑zero value exactly \(d\) times. Because \(m'\) is invertible modulo \(n'\), multiplying by \(m'\) permutes the residues \(\{0,1,\dots,n'-1\}\). Consequently the multiset \(\{(km')\bmod n'\}\) has the same multiplicities, and therefore the multiset \(\{r_1,\dots,r_{n-1}\}\) consists of</p>
<div class="um-math-block">\[
\text{\(d-1\) copies of \(0\), and \(d\) copies of each of \(d,\,2d,\dots,n-d\).} \tag{4}
\]</div>
<p><strong>5.  Rearrangement inequality.</strong> In the sum</p>
<div class="um-math-block">\[
T(m):=\sum_{k=1}^{n-1}\frac{r_k}{k}
\]</div>
<p>the weights \(w_k=\frac1k\) are strictly decreasing. By the rearrangement inequality, for a fixed multiset the sum is maximised when the values are arranged in the same order as the weights – here, decreasing order. Let</p>
<div class="um-math-block">\[
r_{(1)}\ge r_{(2)}\ge\cdots\ge r_{(n-1)}
\]</div>
<p>be the decreasing rearrangement of \(\{r_1,\dots,r_{n-1}\}\). Then</p>
<div class="um-math-block">\[
T(m)\le\sum_{k=1}^{n-1}\frac{r_{(k)}}{k}. \tag{5}
\]</div>
<p><strong>6.  Pointwise bound for the sorted residues.</strong> From the description (4), the non‑zero entries are \(d\) copies of \(n-d\), \(d\) copies of \(n-2d\), …, down to \(d\) copies of \(d\). Hence for \(i=1,\dots,n'-1\),</p>
<div class="um-math-block">\[
r_{(k)}=n-id\quad\text{for } (i-1)d&lt;k\le id,
\]</div>
<p>and \(r_{(k)}=0\) for \(k&gt;n-d=(n'-1)d\).<br>
We claim that for every \(k=1,\dots,n-1\),</p>
<div class="um-math-block">\[
r_{(k)}\le n-k. \tag{6}
\]</div>
<p>Indeed:</p>
<ul>
<li>If \(k\le n-d\), then \(k\le id\) for the corresponding \(i\), so \(n-k\ge n-id=r_{(k)}\).</li>
<li>If \(k&gt;n-d\), then \(r_{(k)}=0\le n-k\) (because \(k\le n-1\) gives \(n-k\ge1\)).</li>
</ul>
<p><strong>7.  Upper bound for \(f(m/n)\).</strong> Using (5) and (6),</p>
<div class="um-math-block">\[
\begin{aligned}
T(m)&amp;\le\sum_{k=1}^{n-1}\frac{n-k}{k}
=n\sum_{k=1}^{n-1}\frac1k-(n-1)\\
&amp;=nH_{n-1}-(n-1),
\end{aligned}
\]</div>
<p>where \(H_{n-1}=1+\frac12+\cdots+\frac1{n-1}\) is the \((n-1)\)-st harmonic number. Therefore</p>
<div class="um-math-block">\[
f\Bigl(\frac{m}{n}\Bigr)=\frac{T(m)}{n}
\le H_{n-1}-\frac{n-1}{n}
=H_n-1, \tag{7}
\]</div>
<p>with \(H_n=H_{n-1}+\frac1n=\sum_{k=1}^{n}\frac1k\).<br>
Inequality (7) holds for every \(m=0,\dots,n-1\). By (2) we obtain \(f(y)\le H_n-1\) for all \(y\in[0,1)\), and by periodicity</p>
<div class="um-math-block">\[
E(x)\le H_n-1\qquad\text{for all real }x. \tag{8}
\]</div>
<p><strong>8.  Characterising the equality case.</strong> Suppose \(E(x)=H_n-1\). Let \(y=\{x\}\in[0,1)\) and \(m=\lfloor ny\rfloor\). From the chain</p>
<div class="um-math-block">\[
E(x)=f(y)\le f(m/n)\le H_n-1,
\]</div>
<p>we must have \(f(m/n)=H_n-1\). Hence all inequalities in the derivation of (7) for this \(m\) are equalities. In particular,</p>
<div class="um-math-block">\[
\begin{align}
\sum_{k=1}^{n-1}\frac{r_k}{k}&amp;=\sum_{k=1}^{n-1}\frac{r_{(k)}}{k}, \tag{9}\\
\sum_{k=1}^{n-1}\frac{r_{(k)}}{k}&amp;=\sum_{k=1}^{n-1}\frac{n-k}{k}. \tag{10}
\end{align}
\]</div>
<p>From (10) and the pointwise bound (6) we deduce \(r_{(k)}=n-k\) for every \(k=1,\dots,n-1\). (If for some \(j\) we had \(r_{(j)}&lt;n-j\), then \(r_{(j)}/j&lt;(n-j)/j\) while all other terms are \(\le\), making the sum strictly smaller.)<br>
In particular, \(r_{(1)}=n-1\).</p>
<p>Now examine \(d=\gcd(m,n)\). If \(d\ge2\), then from the explicit sorted form we would have \(r_{(1)}=n-d\le n-2\), contradicting \(r_{(1)}=n-1\). Thus \(d=1\).<br>
With \(d=1\) the residues are exactly \(\{1,2,\dots,n-1\}\); their decreasing rearrangement is \(n-1,n-2,\dots,1\), which coincides with \(r_{(k)}=n-k\). So (10) is automatically satisfied.</p>
<p>Condition (9) requires that the original sequence \((r_1,\dots,r_{n-1})\) is non‑increasing. Since all residues are distinct, it must be strictly decreasing, i.e. \(r_k=n-k\) for all \(k=1,\dots,n-1\).<br>
This congruence means</p>
<div class="um-math-block">\[
km\equiv n-k\pmod n\quad\Longrightarrow\quad k(m+1)\equiv0\pmod n\qquad(1\le k\le n-1).
\]</div>
<p>Taking \(k=1\) gives \(m+1\equiv0\pmod n\), so \(m\equiv-1\pmod n\). Because \(1\le m\le n-1\), the only possibility is \(m=n-1\).</p>
<p>Therefore any maximiser must satisfy \(\lfloor ny\rfloor=n-1\), i.e. \(y\in I_{n-1}=\bigl[\frac{n-1}{n},1\bigr)\).</p>
<p><strong>9.  Attainment on \(I_{n-1}\).</strong> Take any \(y\in\bigl[\frac{n-1}{n},1\bigr)\). For every \(k=1,\dots,n\),</p>
<div class="um-math-block">\[
k\cdot\frac{n-1}{n}\le ky&lt;k\quad\Longrightarrow\quad\lfloor ky\rfloor=k-1.
\]</div>
<p>(For \(k=n\) this gives \(\lfloor ny\rfloor=n-1\), consistent.) Hence, using (1),</p>
<div class="um-math-block">\[
\begin{aligned}
f(y)&amp;=(n-1)-\sum_{k=2}^{n}\frac{k-1}{k}\\
&amp;=(n-1)-\sum_{k=2}^{n}\Bigl(1-\frac1k\Bigr)\\
&amp;=(n-1)-\Bigl((n-1)-\sum_{k=2}^{n}\frac1k\Bigr)\\
&amp;=\sum_{k=2}^{n}\frac1k=H_n-1.
\end{aligned}
\]</div>
<p>Thus the value \(H_n-1\) is indeed achieved for every \(y\in I_{n-1}\), and by the previous section it is not achieved anywhere else in \([0,1)\).</p>
<p><strong>10.  All real maximisers.</strong> Since \(E(x)=f(\{x\})\) and \(E\) is \(1\)-periodic, the set of \(x\) for which the maximum is attained is exactly those whose fractional part lies in \(I_{n-1}\). Equivalently,</p>
<div class="um-math-block">\[
x\in\bigcup_{m\in\mathbb Z}\Bigl[m+\frac{n-1}{n},\,m+1\Bigr).
\]</div>
<h4>11.  Answer.</h4>
<div class="um-math-block">\[
\boxed{\max_{x\in\mathbb R}\Bigl(\lfloor nx\rfloor-\sum_{k=1}^{n}\frac{\lfloor kx\rfloor}{k}\Bigr)=H_n-1=\sum_{k=2}^{n}\frac1k},
\]</div>
<p>and the maximum is attained precisely for those \(x\) with \(\{x\}\in\bigl[\frac{n-1}{n},1\bigr)\); i.e.</p>
<div class="um-math-block">\[
x\in\bigcup_{m\in\mathbb Z}\Bigl[m+\frac{n-1}{n},\,m+1\Bigr).
\]</div>
            </div>
        </details>
        <details class="um-case">
            <summary>
                <span class="um-case-id">USAMO 2026 P2</span>
                <span class="um-case-meta"><span class="um-case-score partial">1</span></span>
            </summary>
            <div class="um-proof-body">
<h4>Problem</h4>
<p>Annie is playing a game where she starts with a row of positive integers, written on a blackboard, each of which is a power of \(2\). On each turn, she can erase two adjacent numbers and replace them with a power of \(2\) that is greater than either of the erased numbers. This shortens the row of numbers, and she continues to take turns until only one number remains. Annie wins the game if the final remaining number is less than \(4\) times the sum of the original numbers. Is it always possible for Annie to win, regardless of the starting row of numbers?</p>
<hr>
<h4>1. Summary</h4>
<p><strong>a. Verdict:</strong> I have successfully solved the problem. The final answer is: <strong>Yes, Annie can always win.</strong> For any starting row of powers of two, there exists a sequence of moves that leaves a final number strictly less than four times the sum of the original numbers.</p>
<h4>b. Method Sketch:</h4>
<p>For a contiguous subrow \(a_i,\dots,a_j\) let \(S(i,j)\) be the sum of the original numbers in that subrow, and let \(F(i,j)\) be the smallest number that can remain after completely reducing the subrow.</p>
<ul>
<li>First argue that to minimise the final number one may always replace two adjacent powers of two \(x,y\) by the smallest admissible power \(2\max(x,y)\); any larger choice can only increase the result.</li>
<li>This restriction yields the recurrence</li>
</ul>
<div class="um-math-block">\[
  F(i,j)=\min_{i\le k&lt;j} 2\max\bigl(F(i,k),\,F(k+1,j)\bigr).
  \]</div>
<ul>
<li>Prove by induction on the length \(L=j-i+1\) that \(F(i,j)&lt;4\,S(i,j)\). <em>Base cases</em> \(L=1,2\) are verified directly. <em>Inductive step</em> (\(L\ge 3\)): take an optimal split \(k\); by the induction hypothesis the left and right parts satisfy \(F&lt;4S\). Then</li>
</ul>
<div class="um-math-block">\[
  F(i,j)=2\max(F(i,k),F(k+1,j))&lt;2\max(4S(i,k),4S(k+1,j))
        =4\max(S(i,k),S(k+1,j))&lt;4S(i,j).
  \]</div>
<ul>
<li>Applying the result to the whole row (\(i=1,j=n\)) gives \(F(1,n)&lt;4S\), where \(S\) is the total original sum. Annie can follow the strategy that achieves \(F(1,n)\) and win.</li>
</ul>
<hr>
<h4>2. Detailed Solution</h4>
<p>Let the initial row be \(a_1,a_2,\dots,a_n\), each a power of \(2\). Write \(S = a_1+a_2+\cdots+a_n\).<br>
For any contiguous segment \(a_i,a_{i+1},\dots,a_j\) (\(1\le i\le j\le n\)) define its sum</p>
<div class="um-math-block">\[
S(i,j)=\sum_{t=i}^{j} a_t .
\]</div>
<p>Let \(F(i,j)\) be the <strong>smallest</strong> number that can be left after completely reducing the subrow \(a_i,\dots,a_j\) by the rules of the game (performing only merges inside the subrow until one number remains). Because there are only finitely many possible sequences of moves, the minimum is attained, so \(F(i,j)\) is well defined.</p>
<hr>
<h4>1.  Restriction to minimal replacements</h4>
<p>If a move erases two adjacent numbers \(x,y\) and replaces them by a power of two \(z\) with \(z&gt;2\max(x,y)\), then the new number is larger than necessary. The operation that combines two numbers is \(x,y\mapsto 2\max(x,y)\) when we always choose the smallest allowed power. Since \((x,y)\mapsto 2\max(x,y)\) is monotone in both arguments, using a larger value at any step can only increase (or keep constant) the numbers obtained in all later steps. Consequently, for any fixed sequence of <em>which</em> adjacent pairs are merged (i.e. for any full binary tree with the given leaves), the final number obtained by always taking the minimal replacement \(2\max(x,y)\) is less than or equal to the final number obtained by sometimes choosing larger powers. Hence the overall minimum \(F(i,j)\) is achieved by a strategy that <strong>always</strong> replaces \(x,y\) with \(2\max(x,y)\). From now on we assume that every merge uses exactly</p>
<div class="um-math-block">\[
x\otimes y \;:=\; 2\max(x,y).
\]</div>
<hr>
<h4>2.  Recurrence for \(F(i,j)\)</h4>
<p>Any complete sequence of \(\otimes\)-merges on the subrow \(a_i,\dots,a_j\) corresponds to a full binary tree whose leaves are \(a_i,\dots,a_j\) in order. The root of this tree combines the results of reducing a left block \(a_i,\dots,a_k\) and a right block \(a_{k+1},\dots,a_j\) (for some \(i\le k&lt;j\)) to single numbers. Therefore the minimal possible final number satisfies</p>
<div class="um-math-block">\[
F(i,j)=\min_{i\le k&lt;j}\bigl( F(i,k)\otimes F(k+1,j) \bigr)
      =\min_{i\le k&lt;j} 2\max\bigl(F(i,k),\,F(k+1,j)\bigr). \tag{1}
\]</div>
<p><em>Proof of (1).</em><br>
For any \(k\), if we first reduce the left part optimally (yielding \(F(i,k)\)) and the right part optimally (yielding \(F(k+1,j)\)) and then merge them, we obtain the final number \(2\max(F(i,k),F(k+1,j))\); hence \(F(i,j)\le\) that value. Taking the minimum over \(k\) gives \(F(i,j)\le \min_k 2\max(F(i,k),F(k+1,j))\).</p>
<p>Conversely, in any optimal sequence that reduces \(a_i,\dots,a_j\), the last merge combines the results of reducing some left part \(a_i,\dots,a_k\) and right part \(a_{k+1},\dots,a_j\). Let these results be \(L\) and \(R\). By definition of \(F\), we have \(L\ge F(i,k)\) and \(R\ge F(k+1,j)\). The final number is \(2\max(L,R)\ge 2\max(F(i,k),F(k+1,j))\). Since the sequence is optimal, this final number equals \(F(i,j)\), so \(F(i,j)\ge 2\max(F(i,k),F(k+1,j))\) for that particular \(k\), and consequently \(F(i,j)\ge \min_k 2\max(F(i,k),F(k+1,j))\). Thus equality holds.</p>
<hr>
<h4>3.  Inductive proof that \(F(i,j) &lt; 4\,S(i,j)\)</h4>
<p>We prove by induction on the length \(L = j-i+1\) of the subrow that</p>
<div class="um-math-block">\[
F(i,j) &lt; 4\,S(i,j). \tag{2}
\]</div>
<p><em>Base cases.</em></p>
<ul>
<li>\(L = 1\): Then \(F(i,i)=a_i\) and \(S(i,i)=a_i\). Since \(a_i&gt;0\), \(a_i &lt; 4a_i = 4S(i,i)\).</li>
<li>\(L = 2\): The subrow is \(a_i,a_{i+1}\). The only possible merge gives \(F(i,i+1)=2\max(a_i,a_{i+1})\). Because \(\max(a_i,a_{i+1})\le a_i+a_{i+1}\),</li>
</ul>
<div class="um-math-block">\[
  F(i,i+1)\le 2(a_i+a_{i+1}) = 2S(i,i+1).
  \]</div>
<p>As \(S(i,i+1)&gt;0\), \(2S(i,i+1) &lt; 4S(i,i+1)\). Hence \(F(i,i+1) &lt; 4S(i,i+1)\).</p>
<p><em>Inductive step.</em><br>
Assume that (2) holds for all subrows of length strictly smaller than \(L\), where \(L\ge 3\). Consider a subrow \(a_i,\dots,a_j\) of length \(L\). Choose an index \(k\) (\(i\le k&lt;j\)) that attains the minimum in the recurrence (1); such a \(k\) exists because the set of possible splits is finite. The left part \(a_i,\dots,a_k\) and the right part \(a_{k+1},\dots,a_j\) are both non‑empty, so their lengths are at most \(L-1\). Therefore the induction hypothesis applies to them:</p>
<div class="um-math-block">\[
F(i,k) &lt; 4\,S(i,k), \qquad F(k+1,j) &lt; 4\,S(k+1,j).
\]</div>
<p>Now compute using (1) and the monotonicity of \(\max\):</p>
<div class="um-math-block">\[
\begin{aligned}
F(i,j) &amp;= 2\max\bigl(F(i,k),\,F(k+1,j)\bigr) \\
       &amp;&lt; 2\max\bigl(4\,S(i,k),\,4\,S(k+1,j)\bigr) \quad
          \text{(by the strict inequalities above)}\\
       &amp;= 4\max\bigl(S(i,k),\,S(k+1,j)\bigr).
\end{aligned}
\]</div>
<p>Both \(S(i,k)\) and \(S(k+1,j)\) are sums of positive integers, so each is at least \(1\). For any two positive numbers, the maximum is strictly smaller than their sum:</p>
<div class="um-math-block">\[
\max(S(i,k), S(k+1,j)) &lt; S(i,k) + S(k+1,j) = S(i,j).
\]</div>
<p>Multiplying by \(4\) preserves the strict inequality, yielding</p>
<div class="um-math-block">\[
F(i,j) &lt; 4\,S(i,j).
\]</div>
<p>This completes the induction.</p>
<hr>
<h4>4.  Applying the result to the whole row</h4>
<p>Take \(i=1\), \(j=n\). Inequality (2) gives \(F(1,n) &lt; 4\,S\), where \(S = S(1,n)\) is the sum of all original numbers. By definition of \(F(1,n)\), there exists a sequence of legal moves that reduces the whole row to a single number strictly smaller than \(4S\). Annie can simply follow that sequence (or any sequence that achieves the minimum) and therefore she will always win.</p>
<p>Thus, for <strong>any</strong> starting row of powers of two, Annie can always win. \(\square\)</p>
            </div>
        </details>
        <details class="um-case">
            <summary>
                <span class="um-case-id">USAMO 2026 P3</span>
                <span class="um-case-meta"><span class="um-case-score full">7</span></span>
            </summary>
            <div class="um-proof-body">
<h4>Problem</h4>
<p>Let \(ABC\) be an acute scalene triangle with no angle equal to \(60^\circ\). Let \(\omega\) be the circumcircle of \(ABC\). Let \(\Delta_B\) be the equilateral triangle with three vertices on \(\omega\), one of which is \(B\). Let \(\ell_B\) be the line through the two vertices of \(\Delta_B\) other than \(B\). Let \(\Delta_C\) and \(\ell_C\) be defined analogously. Let \(Y\) be the intersection of \(AC\) and \(\ell_B\), and let \(Z\) be the intersection of \(AB\) and \(\ell_C\).</p>
<p>Let \(N\) be the midpoint of minor arc \(BC\) on \(\omega\). Let \(\mathcal{R}\) be the triangle formed by \(\ell_B\), \(\ell_C\), and the tangent to \(\omega\) through \(N\). Prove that the circumcircle of \(AYZ\) and the incircle of \(\mathcal{R}\) are tangent.</p>
<hr>
<h4>1. Summary</h4>
<p><strong>a. Verdict:</strong> I have successfully solved the problem. The circumcircle of \(AYZ\) and the incircle of \(\mathcal{R}\) are tangent.</p>
<h4>b. Method Sketch:</h4>
<p>Place the circumcircle \(\omega\) as the unit circle and rotate so that the midpoint \(N\) of minor arc \(BC\) is at \(1\).  Write \(B=e^{-i\alpha},\;C=e^{i\alpha},\;A=e^{i\varphi}\) with \(\alpha=\angle A\).  The lines \(\ell_B,\ell_C\) and the tangent at \(N\) are then \(\operatorname{Re}(ze^{i\alpha})=-\frac12\), \(\operatorname{Re}(ze^{-i\alpha})=-\frac12\), \(\operatorname{Re}(z)=1\).  The incircle of the triangle \(\mathcal{R}\) formed by these three lines is easily found: centre \(d=\frac{1}{2(1+\cos\alpha)}\) on the real axis, radius \(r=1-d\).</p>
<p>Using the half‑angles \(\theta=\frac{\varphi+\alpha}{2},\;\delta=\frac{\varphi-\alpha}{2}\) we obtain the points \(Y=AC\cap\ell_B,\;Z=AB\cap\ell_C\) and the circle through \(A,Y,Z\).  Its centre is</p>
<div class="um-math-block">\[
c=-\frac{K}{2\sin\alpha}\Bigl(\frac{e^{i\delta}}{S}+\frac{e^{i\theta}}{T}\Bigr),\qquad
K=\cos2\alpha+\frac12,\; S=\sin(\alpha+\theta),\; T=\sin(\alpha-\delta),
\]</div>
<p>and its radius is \(R=|c-a|\).</p>
<p>The tangency condition \(|c-d|=R\pm r\) is equivalent to \((\Delta-r^2)^2=4r^2R^2\) with \(\Delta=|c-d|^2-R^2\).  After simplifying, this becomes an equation of the form \(\lambda_0 Z_1^2-2rZ_1=r^2\lambda_0 W+2r^2U\) where \(U,M,W\) are rational expressions in \(S,T\) and \(Z_1=dM-U\).</p>
<p>Using the linear relations between \((\cos\theta,\sin\theta)\) and \((S,T)\) one obtains the key identity \(S^2+T^2+2\cos3\alpha\,ST=\sin^23\alpha\).  Setting \(P=ST\) and \(Q=\frac{T}{S}+\frac{S}{T}\) turns \(U,Z_1,W\) into rational functions in \(P\).  Substituting these into the tangency equation and multiplying by \(P^2\) yields a quadratic polynomial in \(P\).  A direct computation (using \(s=\sin\alpha,\;c=\cos\alpha\) and \(K_0=4c^2-1\)) shows that each coefficient of this polynomial vanishes identically.  Hence the tangency condition holds.</p>
<hr>
<h4>2. Detailed Solution</h4>
<h4>1.  Coordinate set‑up.</h4>
<p>Let \(\omega\) be the unit circle.  Rotate the plane so that the midpoint \(N\) of the minor arc \(BC\) lies at \(1\).  Let \(\alpha=\angle A\) (\(0&lt;\alpha&lt;\frac{\pi}{2}\)).  The minor arc \(BC\) has measure \(2\alpha\); therefore we may take</p>
<div class="um-math-block">\[
B=e^{-i\alpha},\qquad C=e^{i\alpha}.
\]</div>
<p>The vertex \(A\) lies on the major arc \(BC\); write \(A=e^{i\varphi}\) with \(\varphi\in(\alpha,2\pi-\alpha)\pmod{2\pi}\).<br>
The triangle is acute, scalene and no angle equals \(60^\circ\); consequently \(\alpha\neq\pi/3\) and all denominators that will appear are non‑zero.</p>
<p>The tangent to \(\omega\) at \(N\) is the vertical line</p>
<div class="um-math-block">\[
\mathcal{T}: \ \operatorname{Re}(z)=1.
\]</div>
<h4>2.  The lines \(\ell_B,\ell_C\) and the incircle of \(\mathcal{R}\).</h4>
<p>The equilateral triangle \(\Delta_B\) inscribed in \(\omega\) with a vertex at \(B\) has its other two vertices obtained by rotating \(B\) by \(\pm120^\circ\) about the origin.  The line \(\ell_B\) through those two vertices is perpendicular to \(OB\) and lies at distance \(\frac12\) from the origin on the side opposite \(B\).  Hence</p>
<div class="um-math-block">\[
\ell_B: \ \operatorname{Re}(z e^{i\alpha}) = -\tfrac12 .
\]</div>
<p>Similarly,</p>
<div class="um-math-block">\[
\ell_C: \ \operatorname{Re}(z e^{-i\alpha}) = -\tfrac12 .
\]</div>
<p>The triangle \(\mathcal{R}\) is formed by \(\ell_B,\ell_C\) and the tangent \(\mathcal{T}\).  By symmetry its incircle is centred on the real axis; let the centre be \(I=(d,0)\) and the radius be \(r\).  Tangency to \(\mathcal{T}\) gives \(r=1-d\).  The distance from \(I\) to \(\ell_C\) (the interior of \(\mathcal{R}\) contains the origin, making the expression positive) is \(d\cos\alpha+\frac12\); therefore</p>
<div class="um-math-block">\[
d\cos\alpha+\tfrac12 = r = 1-d \quad\Longrightarrow\quad
d = \frac{1}{2(1+\cos\alpha)},\qquad
r = 1-d = \frac{1+2\cos\alpha}{2(1+\cos\alpha)} .
\]</div>
<h4>3.  The points \(Y\) and \(Z\).</h4>
<p>Introduce the half‑angles</p>
<div class="um-math-block">\[
\theta = \frac{\varphi+\alpha}{2},\qquad \delta = \frac{\varphi-\alpha}{2}.
\]</div>
<p>Then \(\varphi=\theta+\delta,\;\alpha=\theta-\delta\) and</p>
<div class="um-math-block">\[
A = e^{i(\theta+\delta)},\quad B = e^{-i(\theta-\delta)},\quad C = e^{i(\theta-\delta)} .
\]</div>
<p>The line \(AC\) has equation \(\operatorname{Re}(z e^{-i\theta}) = \cos\delta\), i.e.</p>
<div class="um-math-block">\[
x\cos\theta + y\sin\theta = \cos\delta . \tag{1}
\]</div>
<p>Line \(\ell_B\) is \(\operatorname{Re}(z e^{i\alpha}) = -\frac12\), i.e.</p>
<div class="um-math-block">\[
x\cos\alpha - y\sin\alpha = -\tfrac12 . \tag{2}
\]</div>
<p>Write \(Y = A + \lambda(C-A)\) with a real parameter \(\lambda\).  Substituting into (2) using the complex representation gives</p>
<div class="um-math-block">\[
\operatorname{Re}\bigl((a+\lambda(c-a))\bar b\bigr) = -\tfrac12,
\]</div>
<p>where \(\bar b = e^{i\alpha}\).  Computing the real parts,</p>
<div class="um-math-block">\[
\cos(\varphi+\alpha) + \lambda\bigl(\cos2\alpha - \cos(\varphi+\alpha)\bigr) = -\tfrac12 .
\]</div>
<p>Since \(\varphi+\alpha=2\theta\), \(\cos(\varphi+\alpha)=\cos2\theta\).  Moreover</p>
<div class="um-math-block">\[
\cos2\alpha - \cos2\theta = 2\sin(\alpha+\theta)\sin\delta = 2S\sin\delta,
\]</div>
<p>where we set</p>
<div class="um-math-block">\[
S = \sin(\alpha+\theta),\qquad
T = \sin(\alpha-\delta) = \sin(2\alpha-\theta) \quad (\text{because }\delta=\theta-\alpha).
\]</div>
<p>Thus</p>
<div class="um-math-block">\[
\lambda = \frac{-\tfrac12 - \cos2\theta}{\cos2\alpha - \cos2\theta},\qquad
1-\lambda = \frac{\cos2\alpha + \tfrac12}{\cos2\alpha - \cos2\theta} = \frac{K}{2S\sin\delta}, \tag{3}
\]</div>
<p>with</p>
<div class="um-math-block">\[
K = \cos2\alpha + \tfrac12 .
\]</div>
<p>An analogous computation for \(Z = A + \mu(B-A)\) on \(\ell_C\) yields</p>
<div class="um-math-block">\[
\mu = \frac{-\tfrac12 - \cos2\delta}{\cos2\alpha - \cos2\delta},\qquad
1-\mu = \frac{K}{-2T\sin\theta}. \tag{4}
\]</div>
<h4>4.  The circle through \(A, Y, Z\).</h4>
<p>Let its equation be</p>
<div class="um-math-block">\[
x^2+y^2 + Dx + Ey + F = 0 .
\]</div>
<p>Because \(A\) lies on the unit circle,</p>
<div class="um-math-block">\[
1 + D\cos\varphi + E\sin\varphi + F = 0 \ \Longrightarrow\ F = -1 - D\cos\varphi - E\sin\varphi. \tag{5}
\]</div>
<p>For any point \(P\) on the circle, subtracting the equation for \(A\) gives</p>
<div class="um-math-block">\[
D(x_P - \cos\varphi) + E(y_P - \sin\varphi) = 1 - |P|^2 . \tag{6}
\]</div>
<p>Apply (6) to \(Y\).  From \(Y = A + \lambda(C-A)\) one obtains</p>
<div class="um-math-block">\[
Y-A = 2\lambda\sin\delta\,(\sin\theta, -\cos\theta),\qquad
1-|Y|^2 = 4\lambda(1-\lambda)\sin^2\delta .
\]</div>
<p>Substituting into (6) and dividing by the non‑zero factor \(2\lambda\sin\delta\) yields</p>
<div class="um-math-block">\[
D\sin\theta - E\cos\theta = 2(1-\lambda)\sin\delta .
\]</div>
<p>Using (3) the right hand side becomes \(K/S\); hence</p>
<div class="um-math-block">\[
D\sin\theta - E\cos\theta = \frac{K}{S}. \tag{7}
\]</div>
<p>For \(Z\) we obtain similarly</p>
<div class="um-math-block">\[
D\sin\delta - E\cos\delta = -\frac{K}{T}. \tag{8}
\]</div>
<p>The determinant of the system (7)–(8) is \(\sin\theta(-\cos\delta) + \cos\theta\sin\delta = -\sin\alpha \neq 0\).  Solving,</p>
<div class="um-math-block">\[
D = \frac{K}{\sin\alpha}\Bigl(\frac{\cos\delta}{S} + \frac{\cos\theta}{T}\Bigr),\qquad
E = \frac{K}{\sin\alpha}\Bigl(\frac{\sin\theta}{T} + \frac{\sin\delta}{S}\Bigr). \tag{9}
\]</div>
<p>The centre of circle \(AYZ\) is \(O_1 = (-D/2,\,-E/2)\).  In complex form \(c = X+iY = -D/2 - iE/2\) we get</p>
<div class="um-math-block">\[
c = -\frac{K}{2\sin\alpha}\Bigl(\frac{e^{i\delta}}{S} + \frac{e^{i\theta}}{T}\Bigr). \tag{10}
\]</div>
<p>Its radius is \(R = |c - a|\) (because \(a=A\) lies on the circle).</p>
<h4>5.  Simplifying the tangency condition.</h4>
<p>Set</p>
<div class="um-math-block">\[
\lambda_0 = \frac{K}{2\sin\alpha} \qquad \bigl(\text{note } \lambda_0 = \frac{4\cos^2\alpha-1}{4\sin\alpha}\neq0 \text{ since } \alpha\neq60^\circ\bigr).
\]</div>
<p>Then \(c = -\lambda_0\bigl(\frac{e^{i\delta}}{S} + \frac{e^{i\theta}}{T}\bigr)\).  Define</p>
<div class="um-math-block">\[
W = \frac{1}{S^2} + \frac{1}{T^2} + \frac{2\cos\alpha}{ST},\qquad
U = \frac{\cos\theta}{S} + \frac{\cos\delta}{T},\qquad
M = \frac{\cos\delta}{S} + \frac{\cos\theta}{T}.
\]</div>
<p>A direct expansion gives</p>
<div class="um-math-block">\[
|c|^2 = \lambda_0^2 W,\qquad \operatorname{Re}(c) = -\lambda_0 M .
\]</div>
<p>To compute \(R^2\) we use the equivalent circle equation in complex form.  Let</p>
<div class="um-math-block">\[
p = \lambda_0\Bigl(\frac{e^{-i\delta}}{S} + \frac{e^{-i\theta}}{T}\Bigr).
\]</div>
<p>Then \(c = -\overline{p}\), and the circle \(AYZ\) can be written as \(|z|^2 + pz + \overline{p}\overline{z} + F = 0\) with \(F = -1 - pa - \overline{p}\overline{a}\).  Its radius squared is</p>
<div class="um-math-block">\[
R^2 = |p|^2 - F = \lambda_0^2 W + 1 + (pa + \overline{p}\overline{a}).
\]</div>
<p>One checks that \(pa + \overline{p}\overline{a} = 2\lambda_0 U\); therefore</p>
<div class="um-math-block">\[
R^2 = \lambda_0^2 W + 1 + 2\lambda_0 U. \tag{11}
\]</div>
<p>Now the distance from \(c\) to the incenter \(I=(d,0)\) (with \(d\) real) is</p>
<div class="um-math-block">\[
|c-d|^2 = |c|^2 - 2d\operatorname{Re}(c) + d^2 = \lambda_0^2 W + 2\lambda_0 d M + d^2 .
\]</div>
<p>Hence</p>
<div class="um-math-block">\[
\Delta := |c-d|^2 - R^2 = 2\lambda_0(dM - U) + d^2 - 1. \tag{12}
\]</div>
<p>Introduce</p>
<div class="um-math-block">\[
Z_1 = dM - U,
\]</div>
<p>so that \(\Delta = 2\lambda_0 Z_1 + d^2 - 1\).</p>
<p>The incircle radius is \(r = 1-d\).  Notice that</p>
<div class="um-math-block">\[
d^2 - 1 - r^2 = d^2 - 1 - (1-d)^2 = 2d-2 = -2r .
\]</div>
<p>Thus</p>
<div class="um-math-block">\[
\Delta - r^2 = 2(\lambda_0 Z_1 - r). \tag{13}
\]</div>
<p>Two circles with centres \(c,d\) and radii \(R,r\) are tangent exactly when</p>
<div class="um-math-block">\[
|c-d| = R \pm r \ \Longleftrightarrow\ \Delta = r^2 \pm 2rR
\ \Longleftrightarrow\ (\Delta - r^2)^2 = 4r^2 R^2 .
\]</div>
<p>Using (13) and (11) this becomes</p>
<div class="um-math-block">\[
(\lambda_0 Z_1 - r)^2 = r^2(\lambda_0^2 W + 1 + 2\lambda_0 U).
\]</div>
<p>Expanding and cancelling the common term \(r^2\) yields</p>
<div class="um-math-block">\[
\lambda_0^2 Z_1^2 - 2r\lambda_0 Z_1 = r^2\lambda_0^2 W + 2r^2\lambda_0 U .
\]</div>
<p>Since \(\lambda_0 \neq 0\) we may divide by \(\lambda_0\):</p>
<div class="um-math-block">\[
\lambda_0 Z_1^2 - 2r Z_1 = r^2\lambda_0 W + 2r^2 U. \tag{14}
\]</div>
<p>The problem is now reduced to verifying the identity (14) for the quantities defined above.</p>
<h4>6.  Algebraic reduction using \(S\) and \(T\).</h4>
<p>Write \(s = \sin\alpha,\; c = \cos\alpha\).  The angle \(\alpha\) satisfies \(0&lt;\alpha&lt;\frac{\pi}{2},\ \alpha\neq\frac{\pi}{3}\).<br>
Recall that \(\theta\) is the free parameter and \(\delta = \theta-\alpha\).  Then</p>
<div class="um-math-block">\[
S = \sin(\alpha+\theta),\qquad T = \sin(2\alpha-\theta).
\]</div>
<p>From the linear system</p>
<div class="um-math-block">\[
\begin{cases}
\sin\alpha\cos\theta + \cos\alpha\sin\theta = S,\\[2pt]
\sin2\alpha\cos\theta - \cos2\alpha\sin\theta = T,
\end{cases}
\]</div>
<p>we solve for \(\cos\theta,\sin\theta\) (the determinant is \(-\sin3\alpha\neq0\)) and then obtain</p>
<div class="um-math-block">\[
\cos\theta = \frac{S\cos2\alpha + T\cos\alpha}{\sin3\alpha},\qquad
\sin\theta = \frac{S\sin2\alpha - T\sin\alpha}{\sin3\alpha},
\]</div>
<div class="um-math-block">\[
\cos\delta = \frac{S\cos\alpha + T\cos2\alpha}{\sin3\alpha},\qquad
\sin\delta = \frac{S\sin\alpha - T\sin2\alpha}{\sin3\alpha}.
\]</div>
<p>From these we compute</p>
<div class="um-math-block">\[
U = \frac{\cos\theta}{S} + \frac{\cos\delta}{T}
   = \frac{2\cos2\alpha}{\sin3\alpha} + \frac{\cos\alpha}{\sin3\alpha}\Bigl(\frac{T}{S} + \frac{S}{T}\Bigr), \tag{15}
\]</div>
<div class="um-math-block">\[
M = \frac{\cos\delta}{S} + \frac{\cos\theta}{T}
   = \frac{2\cos\alpha}{\sin3\alpha} + \frac{\cos2\alpha}{\sin3\alpha}\Bigl(\frac{T}{S} + \frac{S}{T}\Bigr). \tag{16}
\]</div>
<p>Squaring and adding the expressions for \(\cos\theta\) and \(\sin\theta\) gives the relation</p>
<div class="um-math-block">\[
S^2 + T^2 + 2\cos3\alpha\, ST = \sin^2 3\alpha. \tag{17}
\]</div>
<p>Set</p>
<div class="um-math-block">\[
P = ST,\qquad Q = \frac{T}{S} + \frac{S}{T} = \frac{S^2+T^2}{P}.
\]</div>
<p>From (17),</p>
<div class="um-math-block">\[
Q = \frac{\sin^2 3\alpha}{P} - 2\cos3\alpha =: \frac{A^2}{P} - B, \tag{18}
\]</div>
<p>where \(A = \sin3\alpha,\; B = 2\cos3\alpha\).<br>
The quantity \(W\) rewrites as</p>
<div class="um-math-block">\[
W = \frac{1}{S^2}+\frac{1}{T^2}+\frac{2\cos\alpha}{ST}
   = \frac{S^2+T^2+2\cos\alpha\, ST}{P^2}
   = \frac{\sin^2 3\alpha + 2(\cos\alpha-\cos3\alpha)P}{P^2}. \tag{19}
\]</div>
<p>Because \(\cos\alpha-\cos3\alpha = 2\sin2\alpha\sin\alpha\), we have</p>
<div class="um-math-block">\[
W = \frac{A^2}{P^2} + \frac{C}{P},\qquad C = 4\sin2\alpha\sin\alpha = 8s^2c. \tag{20}
\]</div>
<h4>7.  Introducing convenient constants.</h4>
<p>Let</p>
<div class="um-math-block">\[
K_0 = 4c^2-1 \qquad (\text{so that } \sin3\alpha = sK_0,\; \cos3\alpha = c(4c^2-3)).
\]</div>
<p>Also set</p>
<div class="um-math-block">\[
t = \frac{1}{1+c},\qquad
d = \frac{t}{2},\qquad
r = \frac{1+2c}{2(1+c)} = \frac{(1+2c)t}{2}.
\]</div>
<p>Recall \(K = \cos2\alpha+\frac12 = \frac{4c^2-1}{2} = \frac{K_0}{2}\); hence \(\lambda_0 = \frac{K}{2s} = \frac{K_0}{4s}\).</p>
<p>Now write \(U, M, Z_1\) in the form (constant) + (coefficient)\, \(Q\).  From (15)–(16) and \(\sin3\alpha = sK_0\),</p>
<div class="um-math-block">\[
U = C_1 + C_2 Q,\quad
C_1 = \frac{2\cos2\alpha}{sK_0},\quad C_2 = \frac{c}{sK_0},
\]</div>
<div class="um-math-block">\[
M = D_1 + D_2 Q,\quad
D_1 = \frac{2c}{sK_0},\quad D_2 = \frac{\cos2\alpha}{sK_0}.
\]</div>
<p>Then</p>
<div class="um-math-block">\[
Z_1 = dM - U = (dD_1 - C_1) + (dD_2 - C_2)Q =: E_1' + E_2' Q .
\]</div>
<p>Using (18) we obtain</p>
<div class="um-math-block">\[
Z_1 = (E_1' - E_2' B) + \frac{E_2' A^2}{P} =: F_1' + \frac{F_2'}{P},
\]</div>
<div class="um-math-block">\[
U = (C_1 - C_2 B) + \frac{C_2 A^2}{P} =: G_1 + \frac{G_2}{P}.
\]</div>
<p>Finally \(W = \frac{H_1}{P^2} + \frac{H_2}{P}\) with \(H_1 = A^2 = s^2K_0^2,\; H_2 = C = 8s^2c\).</p>
<h4>8.  Computing the constants.</h4>
<p>First,</p>
<div class="um-math-block">\[
E_1' = dD_1 - C_1 = \frac{ct - 2(2c^2-1)}{sK_0},\qquad
E_2' = dD_2 - C_2 = \frac{(2c^2-1)t - 2c}{2sK_0}.
\]</div>
<p>Observe the useful identity</p>
<div class="um-math-block">\[
(2c^2-1)t - 2c = \frac{2c^2-1}{1+c} - 2c = \frac{-1-2c}{1+c} = -(1+2c)t. \tag{21}
\]</div>
<p>Also \(B = 2\cos3\alpha = 2c(4c^2-3)\).</p>
<p>Now</p>
<div class="um-math-block">\[
F_2' = E_2' A^2 = \frac{sK_0}{2}\bigl((2c^2-1)t - 2c\bigr)
      = \frac{sK_0}{2}\bigl(-(1+2c)t\bigr) = -sK_0 r,
\]</div>
<p>because \(r = \frac{(1+2c)t}{2}\).</p>
<p>Next,</p>
<div class="um-math-block">\[
F_1' = E_1' - E_2' B
      = \frac{ct - 2(2c^2-1)}{sK_0} - \frac{(2c^2-1)t - 2c}{2sK_0}\cdot 2c(4c^2-3).
\]</div>
<p>Using (21) to replace the bracket,</p>
<div class="um-math-block">\[
F_1' = \frac{1}{sK_0}\Bigl[ ct - 2(2c^2-1) + c(4c^2-3)(1+2c)t \Bigr].
\]</div>
<p>Put \(t = \frac{1}{1+c}\) and combine the terms over the common denominator \((1+c)\):</p>
<div class="um-math-block">\[
ct = \frac{c}{1+c},\qquad
c(4c^2-3)(1+2c)t = \frac{c(4c^2-3)(1+2c)}{1+c}.
\]</div>
<p>The bracket becomes</p>
<div class="um-math-block">\[
\frac{c - (4c^2-2)(1+c) + c(4c^2-3)(1+2c)}{1+c}.
\]</div>
<p>Expanding the numerator:</p>
<div class="um-math-block">\[
\begin{align*}
N &amp;= c - (4c^3+4c^2-2c-2) + (4c^3-3c)(1+2c)\\
  &amp;= c - 4c^3 - 4c^2 + 2c + 2 + 4c^3 + 8c^4 - 3c - 6c^2\\
  &amp;= 8c^4 - 10c^2 + 2 = 2(4c^4 - 5c^2 + 1).
\end{align*}
\]</div>
<p>Factorisation: \(4c^4 - 5c^2 + 1 = (4c^2-1)(c^2-1) = K_0(-s^2) = -s^2K_0\).<br>
Thus \(N = -2s^2K_0\), and the bracket equals \(\frac{-2s^2K_0}{1+c} = -2s^2K_0 t\).<br>
Finally</p>
<div class="um-math-block">\[
F_1' = \frac{1}{sK_0}(-2s^2K_0 t) = -2st .
\]</div>
<p>The constants for \(U\) are simpler:</p>
<div class="um-math-block">\[
G_1 = C_1 - C_2 B
     = \frac{2(2c^2-1)}{sK_0} - \frac{c}{sK_0}\cdot 2c(4c^2-3)
     = \frac{4c^2-2 - 8c^4 + 6c^2}{sK_0}
     = \frac{-2(4c^4 - 5c^2 + 1)}{sK_0} = 2s,
\]</div>
<div class="um-math-block">\[
G_2 = C_2 A^2 = \frac{c}{sK_0}\cdot s^2K_0^2 = scK_0 .
\]</div>
<p>Summarising,</p>
<div class="um-math-block">\[
\begin{aligned}
Z_1 &amp;= -2st + \frac{-sK_0 r}{P},\\[2mm]
U   &amp;= 2s + \frac{scK_0}{P},\\[2mm]
W   &amp;= \frac{s^2K_0^2}{P^2} + \frac{8s^2c}{P}.
\end{aligned}
\]</div>
<h4>9.  Verifying the identity (14).</h4>
<p>Substitute the above expressions into (14) and multiply by \(P^2\).  The difference LHS – RHS becomes a polynomial in \(P\):</p>
<div class="um-math-block">\[
\bigl(\lambda_0 F_1'^2 - 2r F_1' - 2r^2 G_1\bigr) P^2
+ \bigl(2\lambda_0 F_1'F_2' - 2r F_2' - r^2\lambda_0 H_2 - 2r^2 G_2\bigr) P
+ \bigl(\lambda_0 F_2'^2 - r^2\lambda_0 H_1\bigr) = 0.
\]</div>
<p>We prove that each coefficient is zero.</p>
<p><em>Constant term.</em></p>
<div class="um-math-block">\[
\lambda_0 F_2'^2 = \lambda_0 (s^2 K_0^2 r^2) = r^2 \lambda_0 (s^2 K_0^2) = r^2 \lambda_0 H_1,
\]</div>
<p>so the constant term vanishes.</p>
<p><em>Coefficient of \(P^2\).</em></p>
<div class="um-math-block">\[
\begin{align*}
\lambda_0 F_1'^2 - 2r F_1'
   &amp;= \lambda_0 (4s^2 t^2) - 2r(-2st)
    = 4\lambda_0 s^2 t^2 + 4r s t,\\
2r^2 G_1 &amp;= 2r^2 (2s) = 4r^2 s.
\end{align*}
\]</div>
<p>Using \(\lambda_0 = \frac{K_0}{4s}\) and \(r = \frac{(1+2c)t}{2}\),</p>
<div class="um-math-block">\[
4\lambda_0 s^2 t^2 = K_0 s t^2,\qquad
4r s t = 2(1+2c) s t^2.
\]</div>
<p>Hence</p>
<div class="um-math-block">\[
\lambda_0 F_1'^2 - 2r F_1' - 2r^2 G_1
   = s t^2\bigl( K_0 + 2(1+2c) - (1+2c)^2 \bigr).
\]</div>
<p>Now \((1+2c)^2 = 1 + 4c + 4c^2\), while \(K_0 + 2 + 4c = (4c^2-1) + 2 + 4c = 4c^2 + 4c + 1 = (1+2c)^2\).<br>
Thus the coefficient is zero.</p>
<p><em>Coefficient of \(P\).</em><br>
Compute the left part first:</p>
<div class="um-math-block">\[
2\lambda_0 F_1'F_2' - 2r F_2' = 2F_2'(\lambda_0 F_1' - r).
\]</div>
<p>We have \(F_2' = -sK_0 r\), and</p>
<div class="um-math-block">\[
\lambda_0 F_1' = \frac{K_0}{4s}(-2st) = -\frac{K_0}{2}t,
\]</div>
<p>so</p>
<div class="um-math-block">\[
\lambda_0 F_1' - r = -\frac{K_0}{2}t - \frac{1+2c}{2}t = -\frac{t}{2}(K_0 + 1 + 2c).
\]</div>
<p>Since \(K_0 = 4c^2-1\), \(K_0 + 1 + 2c = 4c^2 + 2c = 2c(1+2c)\).  Hence</p>
<div class="um-math-block">\[
\lambda_0 F_1' - r = -c(1+2c)t = -2c r.
\]</div>
<p>Therefore</p>
<div class="um-math-block">\[
2F_2'(\lambda_0 F_1' - r) = 2(-sK_0 r)(-2c r) = 4 s c K_0 r^2.
\]</div>
<p>Now the right part:</p>
<div class="um-math-block">\[
r^2\lambda_0 H_2 + 2r^2 G_2
   = r^2\Bigl(\frac{K_0}{4s}\cdot 8s^2c\Bigr) + 2r^2(scK_0)
   = r^2(2sK_0 c + 2s c K_0) = 4 s c K_0 r^2.
\]</div>
<p>Both sides coincide, so the coefficient of \(P\) is also zero.</p>
<p>Since all three coefficients vanish, the polynomial is identically zero and equation (14) holds for our \(P = ST\).</p>
<h4>10.  Conclusion.</h4>
<p>We have proved \((\Delta - r^2)^2 = 4r^2 R^2\), which is exactly the condition \(|c-d| = R \pm r\).  Hence the circumcircle of \(AYZ\) and the incircle of \(\mathcal{R}\) are tangent (externally if the plus sign holds, internally if the minus sign holds; in either case they are tangent).  \(\blacksquare\)</p>
            </div>
        </details>
        <details class="um-case">
            <summary>
                <span class="um-case-id">USAMO 2026 P4</span>
                <span class="um-case-meta"><span class="um-case-score full">7</span></span>
            </summary>
            <div class="um-proof-body">
<h4>Problem</h4>
<p>A positive integer \(n\) is called <em>solitary</em> if, for any nonnegative integers \(a\) and \(b\) such that \(a + b = n\), either \(a\) or \(b\) contains the digit "1". Determine, with proof, the number of solitary integers less than \(10^{2026}\).</p>
<hr>
<h4>1. Summary</h4>
<p><strong>a. Verdict:</strong> I have successfully solved the problem. The final answer is \(2^{2026} - 1\).</p>
<h4>b. Method Sketch:</h4>
<p>Let \(S\) be the set of nonnegative integers whose decimal representation contains no digit \(1\). A positive integer \(n\) is solitary iff \(n\notin S+S\).<br>
Fix the length \(L=2026\) and represent all numbers \(&lt;10^{L}\) as \(L\)-digit strings (least significant digit first). Adding two numbers from \(S\) digitwise with carries \(c_i\in\{0,1\}\) yields a per‑digit condition: for incoming carry \(c\), sum digit \(d\), and outgoing carry \(c'\), the quantity \(d+10c'-c\) must be a sum of two digits from \(D=\{0,2,3,\dots,9\}\). The set of possible sums is \(T=\{0,2,3,\dots,18\}\setminus\{1\}\).<br>
Define \(U(c,d)=\{c'\in\{0,1\}:d+10c'-c\in T\}\) and compute it explicitly; a key property is \(U(0,d)\cup U(1,d)=\{0,1\}\) for every \(d\).<br>
Process the digits of \(n\) from least to most significant, maintaining the set \(P_i\) of possible carries after \(i\) digits: \(P_0=\{0\}\), \(P_{i+1}=\bigcup_{c\in P_i}U(c,n_i)\). Then \(n\in S+S\) iff \(0\in P_L\).<br>
Because of the union property, once \(P_i=\{0,1\}\) it stays \(\{0,1\}\). Hence for \(n\) to be solitary we must avoid \(\{0,1\}\) and end with \(P_L=\{1\}\). Inspecting the table shows that while in state \(\{0\}\) only the digit \(9\) keeps the state \(\{0\}\), the digit \(1\) moves it to \(\{1\}\), and any other digit forces \(\{0,1\}\); while in state \(\{1\}\), only \(0\) and \(2\) keep it \(\{1\}\), all others force \(\{0,1\}\).<br>
Thus an \(L\)-digit string is solitary iff it consists of a (possibly empty) block of \(9\)'s at the least significant positions, followed by exactly one \(1\), followed by only \(0\)'s and \(2\)'s.<br>
Counting such strings gives \(\sum_{k=0}^{L-1}2^{L-1-k}=2^{L}-1\). The all‑zero string (\(n=0\)) is excluded, so all counted strings correspond to positive integers. For \(L=2026\) the answer is \(2^{2026}-1\).</p>
<hr>
<h4>2. Detailed Solution</h4>
<h4>1. Reformulation.</h4>
<p>Let</p>
<div class="um-math-block">\[
D = \{0,2,3,4,5,6,7,8,9\},\qquad
S = \{\,x\in\mathbb{N}_{\ge 0} \mid \text{the decimal representation of } x \text{ uses only digits from } D \,\}.
\]</div>
<p>(For \(x=0\) the representation is “\(0\)”, which is in \(D\), so \(0\in S\).)<br>
A positive integer \(n\) is solitary iff there is <strong>no</strong> pair \(a,b\in S\) with \(a+b=n\). Hence</p>
<div class="um-math-block">\[
n\text{ is solitary}\;\Longleftrightarrow\; n\notin S+S. \tag{1}
\]</div>
<h4>2. Fixed‑length representation.</h4>
<p>Set \(L = 2026\). Every integer \(0\le n &lt; 10^{L}\) can be written uniquely as</p>
<div class="um-math-block">\[
n = \sum_{i=0}^{L-1} n_i 10^{\,i},\qquad n_i\in\{0,1,\dots,9\}.
\]</div>
<p>We call \((n_0,n_1,\dots,n_{L-1})\) the \(L\)-digit string of \(n\) (the units digit \(n_0\) comes first). The map \(n\mapsto (n_0,\dots,n_{L-1})\) is a bijection from \(\{0,1,\dots,10^{L}-1\}\) onto \(\{0,\dots,9\}^{L}\).</p>
<p>If \(a,b\in S\) and \(a,b&lt;10^{L}\), we also write them as \(L\)-digit strings; their digits belong to \(D\) (padding with leading zeros does not introduce the digit \(1\)).</p>
<h4>3. Addition with carries.</h4>
<p>Assume \(a,b\in S\) and \(a+b=n\) with \(a,b&lt;10^{L}\). Perform the addition digitwise; let \(c_i\in\{0,1\}\) be the carry into position \(i\), with \(c_0=0\). Then for each \(i=0,\dots,L-1\),</p>
<div class="um-math-block">\[
a_i + b_i + c_i = n_i + 10c_{i+1}. \tag{2}
\]</div>
<p>Because \(a+b&lt;10^{L}\), the final carry must be \(c_L=0\). (The carries stay in \(\{0,1\}\) since \(a_i+b_i+c_i\le 9+9+1=19\).)</p>
<p>Conversely, if we can find digits \(a_i,b_i\in D\) and carries \(c_i\in\{0,1\}\) satisfying (2) with \(c_0=c_L=0\), then \(a=\sum a_i10^{i}\), \(b=\sum b_i10^{i}\) belong to \(S\) and \(a+b=n\).</p>
<p>Thus, for \(n&lt;10^{L}\),</p>
<div class="um-math-block">\[
n\in S+S \iff \exists\, c_0,\dots,c_L\in\{0,1\},\; a_i,b_i\in D \text{ such that } c_0=c_L=0 \text{ and } (2). \tag{3}
\]</div>
<h4>4. Per‑digit condition.</h4>
<p>Fix a position \(i\). Suppose the incoming carry is \(c\in\{0,1\}\), the required sum digit is \(d=n_i\), and the outgoing carry is \(c'\in\{0,1\}\). From (2) we need</p>
<div class="um-math-block">\[
a_i+b_i = d+10c'-c.
\]</div>
<p>The right‑hand side must belong to the set of all possible sums of two elements of \(D\):</p>
<div class="um-math-block">\[
\Sigma = \{x+y\mid x,y\in D\}.
\]</div>
<p>Since \(D\) contains every decimal digit except \(1\),</p>
<div class="um-math-block">\[
\Sigma = \{0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18\},
\]</div>
<p>i.e. every integer from \(0\) to \(18\) except \(1\). Hence \(c'\) is admissible exactly when</p>
<div class="um-math-block">\[
d+10c'-c \in \Sigma. \tag{4}
\]</div>
<p>Define for \(c\in\{0,1\}\) and \(d\in\{0,\dots,9\}\)</p>
<div class="um-math-block">\[
U(c,d) = \{c'\in\{0,1\}\mid d+10c'-c\in\Sigma\}.
\]</div>
<p>A direct inspection yields the following table:</p>
<div class="um-math-block">\[
\begin{array}{c|c|c}
c &amp; d &amp; U(c,d) \\ \hline
0 &amp; 9 &amp; \{0\} \\
0 &amp; 1 &amp; \{1\} \\
0 &amp; d\in\{0,2,3,4,5,6,7,8\} &amp; \{0,1\} \\[4pt]
1 &amp; 0,2 &amp; \{1\} \\
1 &amp; 1 &amp; \{0,1\} \\
1 &amp; d\in\{3,4,5,6,7,8,9\} &amp; \{0,1\}
\end{array}
\]</div>
<p><em>Justification.</em> For \(c=0\): \(c'=0\) gives \(d\in\Sigma\iff d\neq1\); \(c'=1\) gives \(d+10\in\Sigma\iff d\le8\iff d\neq9\). For \(c=1\): \(c'=0\) gives \(d-1\in\Sigma\iff d-1\ge0\) and \(d-1\neq1\iff d\in\{1,3,4,5,6,7,8,9\}\); \(c'=1\) gives \(d+9\in\Sigma\), which holds for all \(d\) (since \(9,\dots,18\in\Sigma\)).</p>
<p>A crucial observation is that for <strong>every</strong> digit \(d\),</p>
<div class="um-math-block">\[
U(0,d)\cup U(1,d) = \{0,1\}. \tag{5}
\]</div>
<p>(Indeed: \(d=0\Rightarrow\{0,1\}\cup\{1\}=\{0,1\}\); \(d=1\Rightarrow\{1\}\cup\{0,1\}=\{0,1\}\); \(d=2\Rightarrow\{0,1\}\cup\{1\}=\{0,1\}\); \(d=3,\dots,8\Rightarrow\{0,1\}\cup\{0,1\}=\{0,1\}\); \(d=9\Rightarrow\{0\}\cup\{0,1\}=\{0,1\}\).)</p>
<h4>5. Propagating possible carries.</h4>
<p>Process the digits \(n_0,n_1,\dots,n_{L-1}\) from least to most significant. Define a sequence of sets \(P_0,P_1,\dots,P_L\subseteq\{0,1\}\) by</p>
<div class="um-math-block">\[
P_0 = \{0\}, \qquad
P_{i+1} = \bigcup_{c\in P_i} U(c, n_i) \quad (i=0,1,\dots,L-1).
\]</div>
<p>We claim that for each \(i\), \(P_i\) is exactly the set of all possible values of the carry \(c_i\) in a valid addition for the prefix \(n_0\dots n_{i-1}\).<br>
<em>Proof by induction.</em></p>
<ul>
<li>\(i=0\): The initial carry is forced to be \(0\), so \(P_0=\{0\}\) is correct.</li>
<li>Assume the statement holds for some \(i\). Let \(c\in P_i\); by hypothesis there exists a valid addition for the prefix ending with carry \(c_i=c\). To continue at position \(i\), we need a carry \(c_{i+1}=c'\) such that (4) holds for \(d=n_i\). The admissible \(c'\) are precisely \(U(c,n_i)\). Conversely, for any \(c'\in U(c,n_i)\) we can choose digits \(a_i,b_i\in D\) with \(a_i+b_i=d+10c'-c\) (possible because the sum lies in \(\Sigma\)) and extend the valid addition. Hence the set of possible \(c_{i+1}\) is exactly \(\bigcup_{c\in P_i}U(c,n_i)=P_{i+1}\). This completes the induction.</li>
</ul>
<p>Consequently, \(P_L\) is the set of all possible final carries \(c_L\). From (3) we obtain</p>
<div class="um-math-block">\[
n\in S+S \iff 0\in P_L. \tag{6}
\]</div>
<p>Therefore, a positive integer \(n&lt;10^{L}\) is solitary exactly when \(0\notin P_L\).</p>
<h4>6. Behaviour of the sets \(P_i\).</h4>
<p>From (5) we immediately get a “memoryless” property:</p>
<div class="um-math-block">\[
\text{If } P_i = \{0,1\} \text{ for some } i, \text{ then } P_j = \{0,1\} \text{ for all } j\ge i. \tag{7}
\]</div>
<p>Indeed, if \(P_i=\{0,1\}\) then \(P_{i+1}=U(0,n_i)\cup U(1,n_i)=\{0,1\}\), and the same argument repeats.</p>
<p>For \(n\) to be solitary we must have \(0\notin P_L\). Hence we must avoid ever reaching the set \(\{0,1\}\) (otherwise (7) forces \(0\in P_L\)). Therefore every \(P_i\) must be a singleton, i.e. \(\{0\}\) or \(\{1\}\). Since \(P_0=\{0\}\) and we must end with \(0\notin P_L\), the table above shows that the only possible pattern is a (possibly empty) block of \(\{0\}\)'s followed by a \(\{1\}\) (which then persists until the end). In other words, the sequence of states must switch from \(\{0\}\) to \(\{1\}\) exactly once, and never return.</p>
<h4>7. Digits that preserve the singleton property.</h4>
<p>We examine which digits \(n_i\) allow the transition while keeping the state a singleton.</p>
<ul>
<li>While the current state is \(P_i = \{0\}\): 
<ul>
<li>If \(n_i = 9\), then \(U(0,9)=\{0\}\) \(\Rightarrow P_{i+1}=\{0\}\).</li>
<li>If \(n_i = 1\), then \(U(0,1)=\{1\}\) \(\Rightarrow P_{i+1}=\{1\}\).</li>
<li>For every other digit (\(0,2,3,4,5,6,7,8\)), \(U(0,d)=\{0,1\}\) \(\Rightarrow P_{i+1}=\{0,1\}\) (destroying the singleton property).</li>
</ul>
</li>
<li>While the current state is \(P_i = \{1\}\):
<ul>
<li>If \(n_i = 0\), then \(U(1,0)=\{1\}\) \(\Rightarrow P_{i+1}=\{1\}\).</li>
<li>If \(n_i = 2\), then \(U(1,2)=\{1\}\) \(\Rightarrow P_{i+1}=\{1\}\).</li>
<li>For every other digit (\(1,3,4,5,6,7,8,9\)), \(U(1,d)=\{0,1\}\) \(\Rightarrow P_{i+1}=\{0,1\}\) (destroying the singleton property).</li>
</ul>
</li>
</ul>
<p>Therefore, to stay inside singletons and eventually reach \(\{1\}\), the digits \(n_0,n_1,\dots,n_{L-1}\) must obey the following rules:</p>
<ul>
<li>The first \(k\) digits (for some \(k\ge0\)) can only be \(9\); each \(9\) keeps the state in \(\{0\}\).</li>
<li>The \((k+1)\)-th digit must be exactly one \(1\); this changes the state to \(\{1\}\).</li>
<li>All subsequent digits (if any) must be only \(0\) or \(2\); these keep the state in \(\{1\}\).</li>
</ul>
<p>No other digit is allowed, and a second \(1\) cannot appear (it would force \(\{0,1\}\) while in state \(\{1\}\)).</p>
<h4>8. Characterisation of solitary strings.</h4>
<p>An \(L\)-digit string \((n_0,\dots,n_{L-1})\) corresponds to a solitary number iff there exists an integer \(k\) with \(0\le k\le L-1\) such that</p>
<div class="um-math-block">\[
n_0 = n_1 = \dots = n_{k-1} = 9,\qquad
n_k = 1,\qquad
n_{k+1},\dots,n_{L-1} \in \{0,2\}. \tag{8}
\]</div>
<p>(When \(k=0\) there are no \(9\)'s; when \(k=L-1\) the block of \(0\)'s and \(2\)'s is empty.)</p>
<p><em>Sufficiency.</em> If (8) holds, then by induction \(P_0=\dots=P_k=\{0\}\) (each \(9\) keeps \(\{0\}\)), \(P_{k+1}=U(0,1)=\{1\}\), and for \(i&gt;k+1\) we have \(n_{i-1}\in\{0,2\}\) so \(P_i=U(1,n_{i-1})=\{1\}\). Thus \(P_L=\{1\}\), \(0\notin P_L\), and \(n\) is solitary.</p>
<p><em>Necessity.</em> If \(n\) is solitary, the previous section shows that the state sequence must follow the pattern \(\{0\}\dots\{0\}\to\{1\}\dots\{1\}\), which forces the digits to satisfy (8).</p>
<h4>9. Counting.</h4>
<p>For a fixed \(k\) (\(0\le k\le L-1\)), the digits \(n_0,\dots,n_{k-1}\) are forced to be \(9\), \(n_k\) is forced to be \(1\), and each of the remaining \(L-1-k\) digits \(n_{k+1},\dots,n_{L-1}\) can be chosen independently from \(\{0,2\}\). Hence there are \(2^{L-1-k}\) such strings. Summing over all possible positions \(k\) gives the total number of \(L\)-digit strings of the form (8):</p>
<div class="um-math-block">\[
\sum_{k=0}^{L-1} 2^{L-1-k}
= 2^{L-1} + 2^{L-2} + \dots + 2^{0}
= 2^{L} - 1.
\]</div>
<h4>10. Returning to integers.</h4>
<p>The map \((n_0,\dots,n_{L-1})\mapsto \sum_{i=0}^{L-1} n_i10^{\,i}\) is a bijection between the set of \(L\)-digit strings and the integers \(0,1,\dots,10^{L}-1\). The all‑zero string (\(n=0\)) does not satisfy (8) because it lacks the required digit \(1\); it corresponds to the non‑solitary number \(0\). Every other counted string contains at least one digit \(1\), hence represents a positive integer strictly smaller than \(10^{L}\). Since the mapping is bijective, the number of solitary positive integers less than \(10^{L}\) is exactly the number of counted strings.</p>
<h4>11. Final answer.</h4>
<p>Substituting \(L=2026\) yields</p>
<div class="um-math-block">\[
\boxed{2^{2026} - 1}.
\]</div>
            </div>
        </details>
        <details class="um-case">
            <summary>
                <span class="um-case-id">USAMO 2026 P5</span>
                <span class="um-case-meta"><span class="um-case-score full">7</span></span>
            </summary>
            <div class="um-proof-body">
<h4>Problem</h4>
<p>Let \(ABC\) be a triangle. Points \(D\), \(E\), and \(F\) lie on sides \(BC\), \(CA\), and \(AB\), respectively, such that</p>
<div class="um-math-block">\[
\angle AFE = \angle BDF = \angle CED.
\]</div>
<p>Let \(O_A\), \(O_B\), and \(O_C\) be the circumcenters of triangles \(AFE\), \(BDF\), and \(CED\), respectively. Let \(M\), \(N\), and \(O\) be the circumcenters of triangles \(ABC\), \(DEF\), and \(O_A O_B O_C\), respectively. Prove that \(OM = ON\).</p>
<hr>
<h4>1. Summary</h4>
<p><strong>a. Verdict:</strong> I have found a complete solution. The equality \(OM = ON\) holds for every triangle \(ABC\) and points \(D,E,F\) on its sides satisfying \(\angle AFE = \angle BDF = \angle CED\).</p>
<h4>b. Method Sketch:</h4>
<ul>
<li>An angle chase shows that \(\triangle DEF\) has angles \(\alpha,\beta,\gamma\) at \(E,F,D\) respectively, where \(\alpha,\beta,\gamma\) are the angles of \(\triangle ABC\). Together with the cyclic order of the points on the sides, this proves \(\triangle DEF\) is directly similar to \(\triangle ABC\) with \(A\mapsto E,\; B\mapsto F,\; C\mapsto D\).</li>
<li>Hence there is a unique direct spiral similarity \(\mathcal S\) sending \(ABC\) to \(DEF\); let its centre be \(X\) and complex ratio \(k\) (necessarily non‑real). Using directed angles modulo \(180^\circ\) we prove that \(X\) lies on the three circumcircles \((AFE), (BDF), (CED)\); thus \(X\) is the Miquel point.</li>
<li>Translating so that \(X=0\), we have \(e = k a,\; f = k b,\; d = k c\). A standard complex formula gives the circumcenters \(O_A,O_B,O_C\) of \(\triangle AFE,\triangle BDF,\triangle CED\) as \(o_A = \lambda a,\; o_B = \lambda b,\; o_C = \lambda c\) with \(\lambda = \frac{k(1-\bar k)}{k-\bar k}\).</li>
<li>The circumcenters \(M,N,O\) of \(\triangle ABC,\triangle DEF,\triangle O_A O_B O_C\) then satisfy \(m\), \(n = k m\), \(o = \lambda m\).</li>
<li>Distances become \(OM = |m|\,|\lambda-1|\) and \(ON = |m|\,|\lambda-k|\). An algebraic manipulation shows \(|\lambda-1| = |\lambda-k|\) for every non‑real \(k\), so \(OM = ON\). Translation invariance returns the equality to the original configuration.</li>
</ul>
<hr>
<h4>2. Detailed Solution</h4>
<h4>1. Angles of \(\triangle DEF\).</h4>
<p>Let \(\angle A = \alpha\), \(\angle B = \beta\), \(\angle C = \gamma\) and put \(\theta = \angle AFE = \angle BDF = \angle CED\).</p>
<p>Because \(F\) lies on side \(AB\), the rays \(FA\) and \(FB\) are opposite. Points \(D\) and \(E\) lie on the same side of line \(AB\) as \(C\); therefore on that side the three angles around \(F\) sum to \(180^\circ\):</p>
<div class="um-math-block">\[
\angle AFE + \angle EFD + \angle DFB = 180^\circ. \tag{1}
\]</div>
<p>In \(\triangle BDF\) we have \(\angle DBF = \beta\) (since \(D\in BC,\; F\in AB\)) and \(\angle BDF = \theta\); hence</p>
<div class="um-math-block">\[
\angle DFB = 180^\circ - \beta - \theta .
\]</div>
<p>Substituting \(\angle AFE = \theta\) and this into (1) gives</p>
<div class="um-math-block">\[
\angle EFD = 180^\circ - \theta - (180^\circ - \beta - \theta) = \beta .
\]</div>
<p>Repeating the argument at \(E\) (using line \(AC\)) and at \(D\) (using line \(BC\)) yields</p>
<div class="um-math-block">\[
\angle DEF = \alpha,\qquad \angle EDF = \gamma .
\]</div>
<p>Thus \(\triangle DEF\) has angles \(\alpha\) at \(E\), \(\beta\) at \(F\), \(\gamma\) at \(D\).</p>
<h4>2. Direct similarity.</h4>
<p>Assume the vertices of \(\triangle ABC\) are listed counter‑clockwise (otherwise reflect the plane). The points on the sides appear in the order \(F\in AB,\; D\in BC,\; E\in CA\); traversing the perimeter counter‑clockwise we meet \(F, D, E\). Consequently the vertices of \(\triangle DEF\) in counter‑clockwise order are \(F, D, E\). (A quick check: writing \(F = a+u(b-a),\; D = b+w(c-b),\; E = c+v(a-c)\) with \(0&lt;u,v,w&lt;1\) gives the signed area \([F,D,E] = [A,B,C]\big((1-u)(1-v)(1-w)+uvw\big)&gt;0\).)<br>
Together with the angle correspondence above this shows that \(\triangle DEF\) is <strong>directly similar</strong> to \(\triangle ABC\) with the mapping</p>
<div class="um-math-block">\[
A \mapsto E,\qquad B \mapsto F,\qquad C \mapsto D .
\]</div>
<h4>3. Spiral similarity.</h4>
<p>Because the two triangles are directly similar, there exists a unique direct spiral similarity \(\mathcal S\) sending \(ABC\) onto \(DEF\). Write it as</p>
<div class="um-math-block">\[
\mathcal S(P) = X + k\,(P-X),
\]</div>
<p>where \(X\) is the centre and \(k\in\mathbb C\) is the complex ratio. From the correspondence,</p>
<div class="um-math-block">\[
E = X + k(A-X),\quad F = X + k(B-X),\quad D = X + k(C-X). \tag{2}
\]</div>
<p>If \(k\) were real, \(\mathcal S\) would be a homothety (possibly with a half‑turn); corresponding sides would be parallel. In particular \(AB\parallel EF\), forcing \(\angle AFE\) to be \(0^\circ\) or \(180^\circ\), contradicting that it is a proper angle. Hence \(k\notin\mathbb R\); in particular \(k\neq\bar k\) and \(k\neq 1\).</p>
<h4>4. \(X\) is the Miquel point.</h4>
<p>We use <strong>directed angles modulo \(180^\circ\)</strong>, denoted by \(\measuredangle\). For lines \(\ell_1,\ell_2\), \(\measuredangle(\ell_1,\ell_2)\) is the rotation from \(\ell_1\) to \(\ell_2\) modulo \(180^\circ\); for points, \(\measuredangle(PQR)=\measuredangle(QP,QR)\). The directed inscribed angle theorem states that four points \(A,B,C,D\) are concyclic or collinear iff \(\measuredangle(ABC)=\measuredangle(ADC)\).</p>
<p>From (2) we have \(\mathcal S(P)-\mathcal S(Q)=k(P-Q)\); therefore the directed angle between a segment and its image is \(\arg k\) modulo \(180^\circ\):</p>
<div class="um-math-block">\[
\measuredangle(AB,EF)=\arg k,\quad \measuredangle(BC,FD)=\arg k,\quad \measuredangle(CA,DE)=\arg k. \tag{3}
\]</div>
<p><em>Circle \((AFE)\):</em>  \(F\in AB\) implies line \(FA = AB\), and line \(FE = EF\). Hence</p>
<div class="um-math-block">\[
\measuredangle(AFE)=\measuredangle(FA,FE)=\measuredangle(AB,EF)=\arg k .
\]</div>
<p>From \(E-X = k(A-X)\) we obtain \(\measuredangle(XA,XE)=\arg k\), i.e. \(\measuredangle(AXE)=\arg k\). Thus</p>
<div class="um-math-block">\[
\measuredangle(AFE)=\measuredangle(AXE).
\]</div>
<p>By the directed inscribed angle theorem, \(A,F,E,X\) are concyclic. So \(X\in (AFE)\).</p>
<p><em>Circle \((BDF)\):</em>  \(D\in BC\) gives line \(DB = BC\) and line \(DF = FD\). Hence</p>
<div class="um-math-block">\[
\measuredangle(BDF)=\measuredangle(DB,DF)=\measuredangle(BC,FD)=\arg k .
\]</div>
<p>From \(F-X = k(B-X)\) we get \(\measuredangle(BXF)=\arg k\). Thus \(\measuredangle(BDF)=\measuredangle(BXF)\) and \(X\in (BDF)\).</p>
<p><em>Circle \((CED)\):</em>  \(E\in CA\) gives line \(EC = CA\) and line \(ED = DE\). Hence</p>
<div class="um-math-block">\[
\measuredangle(CED)=\measuredangle(EC,ED)=\measuredangle(CA,DE)=\arg k .
\]</div>
<p>From \(D-X = k(C-X)\) we get \(\measuredangle(CXD)=\arg k\). Thus \(\measuredangle(CED)=\measuredangle(CXD)\) and \(X\in (CED)\).</p>
<p>Therefore \(X\) lies on all three circumcircles; it is exactly the Miquel point of the inscribed triangle \(DEF\).</p>
<h4>5. Circumcentres of the small triangles.</h4>
<p>Since \(X\) belongs to \((AFE)\), the circumcircle of \(\triangle AFE\) is exactly the circumcircle of \(\triangle AEX\). Consequently the circumcenter \(O_A\) of \(\triangle AFE\) coincides with the circumcenter of \(\triangle AEX\). Analogously,</p>
<div class="um-math-block">\[
O_B \text{ is the circumcenter of } \triangle BFX,\qquad
O_C \text{ is the circumcenter of } \triangle CDX .
\]</div>
<h4>6. Complex computation with \(X\) as origin.</h4>
<p>Translate the whole plane so that the Miquel point \(X\) becomes the origin \(0\). From now on we denote the complex coordinate of a point by the corresponding lower‑case letter. Then \(x=0\) and (2) simplifies to</p>
<div class="um-math-block">\[
e = k a,\qquad f = k b,\qquad d = k c . \tag{4}
\]</div>
<p>For any three non‑collinear points \(0,z,w\) the circumcenter \(u\) is given by the formula</p>
<div class="um-math-block">\[
u = \frac{z w (\bar z - \bar w)}{\bar z w - z \bar w}, \tag{5}
\]</div>
<p>which follows from solving the system \(|u|=|u-z|=|u-w|\).</p>
<p>Apply (5) to \(\triangle AEX\) with vertices \(0,a,ka\):</p>
<div class="um-math-block">\[
o_A = \frac{a \cdot k a \cdot (\bar a - \overline{k a})}{\bar a \cdot k a - a \cdot \overline{k a}}
     = \frac{k a^2 \bar a (1-\bar k)}{|a|^2(k-\bar k)}
     = a\,\frac{k(1-\bar k)}{k-\bar k}.
\]</div>
<p>Define</p>
<div class="um-math-block">\[
\lambda = \frac{k(1-\bar k)}{k-\bar k}. \tag{6}
\]</div>
<p>Then \(o_A = \lambda a\). Exactly the same computation gives</p>
<div class="um-math-block">\[
o_B = \lambda b,\qquad o_C = \lambda c .
\]</div>
<p>Thus \(\triangle O_A O_B O_C\) is the image of \(\triangle ABC\) under multiplication by \(\lambda\) (a spiral similarity about the origin).</p>
<h4>7. The three circumcentres \(M,N,O\).</h4>
<p>Let \(m,n,o\) be the coordinates of the circumcentres of \(\triangle ABC\), \(\triangle DEF\) and \(\triangle O_A O_B O_C\) respectively.</p>
<ul>
<li>By (4), \(\triangle DEF\) is the image of \(\triangle ABC\) under multiplication by \(k\). A similarity about the origin sends the circumcenter to the circumcenter, hence \(n = k m\).</li>
<li>From \(o_A=\lambda a\) etc., \(\triangle O_A O_B O_C\) is the image of \(\triangle ABC\) under multiplication by \(\lambda\), hence \(o = \lambda m\).</li>
</ul>
<h4>8. An algebraic identity.</h4>
<p>From (6),</p>
<div class="um-math-block">\[
\begin{aligned}
1-\lambda &amp;= 1 - \frac{k(1-\bar k)}{k-\bar k}
          = \frac{k-\bar k - k + k\bar k}{k-\bar k}
          = \frac{\bar k(k-1)}{k-\bar k},\\[4pt]
k-\lambda &amp;= k - \frac{k(1-\bar k)}{k-\bar k}
          = \frac{k(k-\bar k) - k + k\bar k}{k-\bar k}
          = \frac{k(k-1)}{k-\bar k}.
\end{aligned}
\]</div>
<p>Taking absolute values and using \(|\bar k|=|k|\),</p>
<div class="um-math-block">\[
|1-\lambda| = \frac{|k|\,|k-1|}{|k-\bar k|} = |k-\lambda|.
\]</div>
<p>Hence \(|\lambda-1| = |\lambda-k|\).</p>
<h4>9. Conclusion.</h4>
<p>Now compute the distances in the translated plane:</p>
<div class="um-math-block">\[
OM = |O-M| = |\lambda m - m| = |m|\,|\lambda-1|,
\]</div>
<div class="um-math-block">\[
ON = |O-N| = |\lambda m - k m| = |m|\,|\lambda-k|.
\]</div>
<p>Since \(|\lambda-1| = |\lambda-k|\), we obtain \(OM = ON\).<br>
Distances are invariant under translation, so the equality holds in the original configuration. \(\quad\blacksquare\)</p>
            </div>
        </details>
        <details class="um-case">
            <summary>
                <span class="um-case-id">USAMO 2026 P6</span>
                <span class="um-case-meta"><span class="um-case-score full">7</span></span>
            </summary>
            <div class="um-proof-body">
<h4>Problem</h4>
<p>Let \(a\) and \(b\) be positive integers such that \(\varphi(ab+1)\) divides \(a^2 + b^2 + 1\). Prove that \(a\) and \(b\) are Fibonacci numbers.</p>
<hr>
<h4>Summary</h4>
<p><strong>a. Verdict:</strong> I have successfully solved the problem. The final answer is that any positive integers \(a,b\) satisfying \(\varphi(ab+1)\mid a^2+b^2+1\) must be Fibonacci numbers (with the standard convention \(F_1=F_2=1\)).</p>
<h4>b. Method Sketch:</h4>
<ul>
<li>Parity arguments first handle the trivial case \((a,b)=(1,1)\) and show that any other solution has opposite parity; then \(n=ab+1\) is odd and \(v_2(a^2+b^2+1)=1\), forcing \(\varphi(n)\equiv2\pmod4\). A standard lemma yields \(n=p^e\) with a prime \(p\equiv3\pmod4\).</li>
<li>If \(e=1\) (\(n\) prime), then \(ab=p-1\) and the divisibility condition becomes \(a^2+b^2+1=kab\). Vieta jumping (choosing a solution with minimal sum) proves \(k=3\), so \(a^2+b^2+1=3ab\). A descent shows that all positive solutions of this equation are generated from \((1,1)\) by \((u,v)\mapsto(v,3v-u)\). The resulting sequence satisfies \(x_{n+2}=3x_{n+1}-x_n\) with \(x_1=x_2=1\), and an induction using a Fibonacci identity gives \(x_n=F_{2n-3}\) (and \(x_1=F_1,x_2=F_2\)). Hence \(a,b\) are Fibonacci.</li>
<li>If \(e\ge2\), then \(p\mid\varphi(n)\mid S\), so \(p\mid a^2+b^2+1\). Together with \(ab=p^e-1\equiv-1\pmod p\) one obtains \(a^4+a^2+1\equiv0\pmod p\). Analysing this congruence forces \(p=3\). Then \(n=3^e\). A modulo \(9\) argument shows \(e\le2\), so \(e=2\), \(n=9\), \(ab=8\). Parity eliminates the even pair \((2,4)\), leaving only \((1,8)\) and \((8,1)\), both of which are Fibonacci.</li>
<li>Every possibility is covered, so \(a\) and \(b\) are always Fibonacci numbers.</li>
</ul>
<hr>
<h4>Detailed Solution</h4>
<p>Let \(a,b\) be positive integers such that \(\varphi(ab+1)\mid a^2+b^2+1\).  Set \(S=a^2+b^2+1\) and \(n=ab+1\).</p>
<h4>1. Parity and the trivial case.</h4>
<p>If \(a,b\) are both odd, then \(a^2\equiv b^2\equiv1\pmod4\), so \(S\equiv3\pmod4\) is odd. Since \(\varphi(n)\mid S\), \(\varphi(n)\) must be odd. The only positive integers with an odd totient are \(1\) and \(2\). \(n=1\) is impossible, hence \(n=2\), giving \(ab=1\) and \(a=b=1\). Both are Fibonacci numbers (\(F_1=F_2=1\)).</p>
<p>If \(a,b\) are both even, then \(a^2\equiv b^2\equiv0\pmod4\), so \(S\equiv1\pmod4\) is again odd, forcing \(\varphi(n)\) odd. Thus \(n\in\{1,2\}\); \(n=1\) is impossible and \(n=2\) gives \(ab=1\), contradicting evenness.</p>
<p>Consequently any further solution has \(a,b\) of opposite parity. Then one is even, one odd, so \(ab\) is even and \(n=ab+1\) is odd. Moreover \(a^2\equiv0\) or \(1\pmod4\), giving \(a^2+b^2\equiv1\pmod4\) and \(S\equiv2\pmod4\); hence \(v_2(S)=1\).</p>
<h4>2. The structure of \(n\).</h4>
<p>Because \(n&gt;1\) is odd, \(\varphi(n)\) is even. From \(\varphi(n)\mid S\) and \(v_2(S)=1\) we obtain \(v_2(\varphi(n))=1\).<br>
Write \(n=\prod p_i^{e_i}\) with odd primes \(p_i\). Then</p>
<div class="um-math-block">\[
\varphi(n)=\prod p_i^{e_i-1}(p_i-1),
\]</div>
<p>and since each \(p_i^{e_i-1}\) is odd,</p>
<div class="um-math-block">\[
v_2(\varphi(n))=\sum v_2(p_i-1).
\]</div>
<p>For an odd prime \(p\), \(v_2(p-1)\ge1\). The sum can equal \(1\) only if there is exactly one prime factor and \(v_2(p_1-1)=1\), i.e. \(p_1\equiv3\pmod4\). Therefore</p>
<div class="um-math-block">\[
n=p^{\,e}\qquad(e\ge1),\qquad p\equiv3\pmod4. \tag{2.1}
\]</div>
<h4>3. The case \(e=1\) (\(n\) prime).</h4>
<p>Here \(n=p\), so \(\varphi(n)=p-1=ab\). The condition \(\varphi(n)\mid S\) becomes \(ab\mid S\). Hence there is an integer \(k\ge1\) such that</p>
<div class="um-math-block">\[
a^2+b^2+1=kab. \tag{3.1}
\]</div>
<p>Consider all positive integer solutions \((x,y)\) of (3.1). The set is nonempty because \((a,b)\) belongs to it. Choose one with minimal sum \(x+y\); by symmetry we may assume \(x\le y\).</p>
<p><em>If \(x=y\)</em>, then \(2x^2+1=kx^2\), i.e. \((k-2)x^2=1\). Since \(x\ge1\), we must have \(x=1\) and \(k=3\).</p>
<p><em>If \(x&lt;y\)</em>, treat (3.1) as a quadratic in \(y\):</p>
<div class="um-math-block">\[
y^2-kxy+(x^2+1)=0.
\]</div>
<p>The other root is</p>
<div class="um-math-block">\[
y' = kx-y = \frac{x^2+1}{y}.
\]</div>
<p>Because the coefficients are integers and \(y\) is an integer root, \(y'\) is an integer; the product \(x^2+1&gt;0\) gives \(y'&gt;0\). From \(x\le y-1\) we obtain</p>
<div class="um-math-block">\[
x^2+1 \le (y-1)^2+1 = y^2-2y+2 &lt; y^2 \qquad (y\ge2),
\]</div>
<p>hence \(y' = (x^2+1)/y &lt; y\). Thus \((x,y')\) is another solution of (3.1) with sum \(x+y' &lt; x+y\), contradicting the minimality of \((x,y)\).</p>
<p>Therefore the minimal solution must have \(x=y\), forcing \(k=3\) and \((x,y)=(1,1)\). In particular, the original pair satisfies</p>
<div class="um-math-block">\[
a^2+b^2+1 = 3ab. \tag{3.2}
\]</div>
<p>Now we describe all positive solutions of (3.2). Let \((a,b)\) be a solution with \(a\le b\). If \(a=b\), then \(2a^2+1=3a^2\Rightarrow a^2=1\Rightarrow a=1\). If \(a&lt;b\), view (3.2) as a quadratic in \(b\):</p>
<div class="um-math-block">\[
b^2-3ab+(a^2+1)=0.
\]</div>
<p>The other root is</p>
<div class="um-math-block">\[
b' = 3a-b = \frac{a^2+1}{b}.
\]</div>
<p>Because \(a&lt;b\), we have \(a^2+1 &lt; b^2\) (as above), so \(b' &lt; b\), and \(b'\) is a positive integer. Hence \((a,b')\) is another solution with a smaller sum. Repeating this descent, we must eventually reach a solution with \(a=b\), which is \((1,1)\). Thus every solution of (3.2) reduces to \((1,1)\).</p>
<p>Reversing the process, all solutions are generated from \((1,1)\) by the transformation \((u,v)\mapsto (v,3v-u)\) (with \(u\le v\)). Starting from \((1,1)\) we obtain the infinite chain</p>
<div class="um-math-block">\[
(1,1),\ (1,2),\ (2,5),\ (5,13),\ (13,34),\ (34,89),\ \dots
\]</div>
<p>Define a sequence \((x_n)_{n\ge1}\) by</p>
<div class="um-math-block">\[
x_1 = 1,\quad x_2 = 1,\quad x_{n+2} = 3x_{n+1} - x_n \quad (n\ge1).
\]</div>
<p>Then the pairs appearing are exactly the consecutive pairs \((x_n,x_{n+1})\).</p>
<p>Let \((F_n)\) be the Fibonacci numbers: \(F_1=F_2=1\), \(F_{n+2}=F_{n+1}+F_n\). We prove that \(x_n = F_{2n-3}\) for all \(n\ge3\).</p>
<ul>
<li>\(n=3\): \(x_3 = 3\cdot1-1 = 2 = F_3\).</li>
<li>\(n=4\): \(x_4 = 3\cdot2-1 = 5 = F_5\).</li>
<li>Inductive step: assume the formula holds for \(n\) and \(n+1\) with \(n\ge3\). Then</li>
</ul>
<div class="um-math-block">\[
x_{n+2} = 3x_{n+1} - x_n = 3F_{2n-1} - F_{2n-3}.
\]</div>
<p>We use the Fibonacci identity</p>
<div class="um-math-block">\[
F_{2n+1} = 3F_{2n-1} - F_{2n-3},
\]</div>
<p>which follows from</p>
<div class="um-math-block">\[
\begin{aligned}
F_{2n+1} &amp;= F_{2n}+F_{2n-1} = (F_{2n-1}+F_{2n-2})+F_{2n-1} = 2F_{2n-1}+F_{2n-2},\\
F_{2n-1} &amp;= F_{2n-2}+F_{2n-3} \;\Longrightarrow\; F_{2n-2} = F_{2n-1}-F_{2n-3}.
\end{aligned}
\]</div>
<p>Substituting gives \(F_{2n+1} = 3F_{2n-1} - F_{2n-3}\). Hence</p>
<div class="um-math-block">\[
x_{n+2} = F_{2n+1} = F_{2(n+2)-3},
\]</div>
<p>completing the induction. For \(n=1,2\) we have \(x_1=1=F_1\), \(x_2=1=F_2\). Therefore every \(x_n\) is a Fibonacci number. Since \((a,b)\) is one of the pairs \((x_n,x_{n+1})\), both \(a\) and \(b\) are Fibonacci numbers.</p>
<h4>4. The case \(e\ge2\).</h4>
<p>Now \(n=p^e\) with \(e\ge2\), \(p\equiv3\pmod4\). Then \(\varphi(n)=p^{e-1}(p-1)\). Because \(e\ge2\), \(p\mid\varphi(n)\), and from \(\varphi(n)\mid S\) we obtain</p>
<div class="um-math-block">\[
p \mid S = a^2+b^2+1. \tag{4.1}
\]</div>
<p>Moreover</p>
<div class="um-math-block">\[
ab = p^e-1 \equiv -1 \pmod p. \tag{4.2}
\]</div>
<p>From (4.2), \(p\nmid a\) (otherwise \(ab\equiv0\pmod p\)). Hence \(a\) is invertible modulo \(p\), and (4.2) gives \(b\equiv -a^{-1}\pmod p\). Substituting into (4.1):</p>
<div class="um-math-block">\[
a^2 + a^{-2} + 1 \equiv 0 \pmod p \;\Longrightarrow\; a^4 + a^2 + 1 \equiv 0 \pmod p. \tag{4.3}
\]</div>
<p>We distinguish two subcases.</p>
<p><em>Subcase 1:</em> \(a^2\equiv 1 \pmod p\). Then (4.3) yields \(3\equiv 0\pmod p\), so \(p=3\).</p>
<p><em>Subcase 2:</em> \(a^2\not\equiv 1 \pmod p\). Then \(a^2-1\) is invertible modulo \(p\). Multiplying (4.3) by \(a^2-1\) gives</p>
<div class="um-math-block">\[
a^6 - 1 \equiv 0 \pmod p,
\]</div>
<p>so the order of \(a\) modulo \(p\) divides \(6\). Since \(a^2\not\equiv1\), the order is not \(1\) or \(2\); it must be \(3\) or \(6\). By Fermat's little theorem the order divides \(p-1\), hence \(3\mid p-1\), i.e. \(p\equiv1\pmod3\).</p>
<p>If \(p\equiv1\pmod3\), then \(p-1\) is a multiple of \(3\), so \(\varphi(n)=p^{e-1}(p-1)\) is divisible by \(3\). Because \(\varphi(n)\mid S\), we get \(3\mid S\). On the other hand, \(ab = p^e-1 \equiv 0 \pmod3\) (since \(p\equiv1\pmod3\)), so at least one of \(a,b\) is a multiple of \(3\). Then \(S = a^2+b^2+1\) is congruent to \(2\) or \(1\) modulo \(3\), contradicting \(3\mid S\). Thus Subcase 2 is impossible.</p>
<p>Therefore we must have \(p=3\). Consequently \(n=3^e\) with \(e\ge2\), and \(\varphi(n)=2\cdot3^{e-1}\).</p>
<p>Now we show \(e\le2\). Suppose \(e\ge3\). Then \(9\mid\varphi(n)\), so \(9\mid S\). Also \(ab = 3^e-1 \equiv -1 \equiv 8 \pmod9\). Hence neither \(a\) nor \(b\) is divisible by \(3\) (otherwise \(ab\equiv0\pmod3\), contradicting \(8\equiv2\pmod3\)). Thus \(a,b\) are congruent to \(1,2,4,5,7,8\) modulo \(9\). Their squares modulo \(9\) are \(1,4,7\). We need \(a^2+b^2+1\equiv0\pmod9\), i.e. \(a^2+b^2\equiv8\pmod9\). Moreover \(ab\equiv8\pmod9\). Checking all unordered pairs \(\{u,v\}\) from \(\{1,2,4,5,7,8\}\) with \(uv\equiv8\pmod9\) (the possibilities are \(\{1,8\},\{2,4\},\{5,7\}\)), we compute</p>
<div class="um-math-block">\[
\begin{aligned}
1^2+8^2+1 &amp;= 66 \equiv 3 \pmod9,\\
2^2+4^2+1 &amp;= 21 \equiv 3 \pmod9,\\
5^2+7^2+1 &amp;= 75 \equiv 3 \pmod9.
\end{aligned}
\]</div>
<p>In every case \(S\equiv3\pmod9\), contradicting \(9\mid S\). Hence \(e\le2\).</p>
<p>Since \(e\ge2\), we must have \(e=2\). Thus \(n=9\), \(\varphi(9)=6\), and \(ab=8\). The positive integer pairs with product \(8\) are \((1,8)\) and \((2,4)\). From §1, any solution other than \((1,1)\) consists of numbers of opposite parity; the pair \((2,4)\) has both even, so it cannot satisfy the original condition. Therefore the only possibilities are \((a,b)=(1,8)\) and \((8,1)\). Both \(1\) and \(8\) are Fibonacci numbers (\(F_1=1\), \(F_6=8\)). (Indeed, \(\varphi(9)=6\) divides \(1^2+8^2+1=66\), so they are genuine solutions.)</p>
<h4>5. Conclusion.</h4>
<p>We have exhausted all possibilities:</p>
<ul>
<li>\((a,b)=(1,1)\);</li>
<li>\(n=p^e\) with \(e=1\) (\(n\) prime);</li>
<li>\(n=3^e\) with \(e=2\).</li>
</ul>
In each case \(a\) and \(b\) are Fibonacci numbers. This completes the proof. \(\square\)
            </div>
        </details>
    </div>
</div>

<div class="um-foot">
    Model: UniMath-35B-A3B, 256K context. Benchmarks: IMO 2025 (6), USAMO 2026 (6), IMO-ProofBench (60). +TTS = best round of one derive-audit-repair-synthesize proof-state evolution run.
</div>

<div style="margin-top: 40px; padding: 22px 24px; border: 1px solid #e4e6ef; border-left: 4px solid #818cf8; border-radius: 14px; background: #ffffff; box-shadow: 0 1px 3px rgba(22,24,43,.04), 0 6px 20px rgba(22,24,43,.05);">

<div style="font-size: 13.5px; color: #44485f;">Citation: If you find UniMath useful in your research, please kindly cite:</div>

<pre style="margin: 12px 0 0; background: #f7f8fb; color: #16182b; border: 1px solid #e4e6ef; padding: 16px; border-radius: 10px; overflow-x: auto; font-size: 12.5px; font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace; line-height: 1.65;">
@misc{unipat2026unimath,
  title   = {UniMath: From Proof-Synthesis Data to Test-Time Self-Evolution},
  author  = {UniPat AI},
  year    = {2026},
  url     = {https://unipat.ai/blog/UniMath},
}</pre>

</div>

</div>
