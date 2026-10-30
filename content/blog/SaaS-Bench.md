Title: SaaS-Bench: Can Computer-Use Agents Leverage Real-World SaaS to Solve Professional Workflows?
Date: 2026-09-28
Summary: AI agents can browse the web — but can they actually do your job? SaaS-Bench puts computer-use agents inside 23 real SaaS systems to find out, with 106 professional workflows spanning finance, healthcare, engineering, and more.
HeaderImage: /static/images/SaaS-Bench/saas-logo.jpg

<link rel="stylesheet" href="/static/css/saas-bench-v1-1.css">


<style>
/* SaaS-Bench Blog — Mondrian Design System (sb- prefix) */
:root {
    /* Mondrian primaries — accents, borders, small fills */
    --sb-red: #D32F2F;
    --sb-blue: #1565C0;
    --sb-yellow: #F9A825;
    --sb-black: #1a1a1a;
    --sb-white: #ffffff;
    /* Light tints — safe for large backgrounds */
    --sb-red-light: #FFEBEE;
    --sb-blue-light: #E3F2FD;
    --sb-yellow-light: #FFF8E1;
    /* Semantic status */
    --sb-success: #2E7D32;
    --sb-success-bg: #E8F5E9;
    --sb-success-border: #A5D6A7;
    --sb-warn: #E65100;
    --sb-warn-bg: #FFF3E0;
    --sb-warn-border: #FFCC80;
    --sb-error: #C62828;
    --sb-error-bg: #FFEBEE;
    --sb-error-border: #EF9A9A;
    /* Neutrals */
    --sb-gray-50: #fafafa;
    --sb-gray-100: #f5f5f5;
    --sb-gray-200: #eeeeee;
    --sb-gray-300: #e0e0e0;
    --sb-gray-500: #9e9e9e;
    --sb-gray-600: #757575;
    --sb-gray-800: #424242;
    /* Design tokens — unified across all components */
    --sb-radius: 3px;
    --sb-shadow: 0 1px 4px rgba(0,0,0,0.06);
}

/* ── Hero ───────────────────────────────── */
.sb-hero {
    text-align: center;
    padding: 10px 0 28px;
    margin-bottom: 28px;
    border-bottom: 3px solid var(--sb-black);
}
.sb-hero h2 {
    max-width: 860px;
    margin: 0 auto 14px;
    color: var(--sb-black);
    font-size: clamp(22px, 2.8vw, 32px);
    line-height: 1.32;
    font-style: italic;
    font-weight: 600;
}
.sb-hero p {
    max-width: 740px;
    margin: 0 auto 16px;
    font-size: 0.95em;
    line-height: 1.7;
    color: var(--sb-gray-600);
}

/* ── Contributors ───────────────────────── */
.sb-contributors {
    margin: 16px 0;
    font-size: 13.5px;
    line-height: 1.6;
    color: var(--sb-gray-800);
}

/* ── Button System ──────────────────────── */
.sb-link-row {
    display: flex; flex-wrap: wrap; gap: 10px;
    margin-top: 16px; justify-content: center;
}
/* Base chip = secondary button (black outline) */
.sb-link-chip {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 10px 18px; min-height: 44px;
    border: 2px solid var(--sb-black);
    border-radius: var(--sb-radius);
    background: var(--sb-white);
    color: var(--sb-black);
    font-family: "Space Mono", ui-monospace, monospace;
    font-size: 13px; font-weight: 700;
    text-decoration: none !important;
    cursor: pointer;
    transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.1s;
}
.sb-link-chip:hover {
    background: var(--sb-gray-100);
    transform: translateY(-1px);
}
.sb-link-chip:active {
    transform: translateY(0);
    background: var(--sb-gray-200);
}
/* Primary button (blue fill) */
.sb-link-chip.sb-primary {
    background: var(--sb-blue);
    color: var(--sb-white);
    border-color: var(--sb-blue);
}
.sb-link-chip.sb-primary:hover {
    background: #1256A3;
    border-color: #1256A3;
    transform: translateY(-1px);
}
.sb-link-chip.sb-primary:active {
    background: #0D47A1;
    border-color: #0D47A1;
    transform: translateY(0);
}
/* Disabled / placeholder chip */
span.sb-link-chip {
    opacity: 0.55;
    cursor: default;
    border-style: dashed;
}
span.sb-link-chip:hover {
    background: var(--sb-white);
    transform: none;
}

/* ── Stats Grid (Mondrian composition) ─── */
.sb-stats {
    display: grid; grid-template-columns: repeat(3, 1fr);
    max-width: 720px; margin: 28px auto;
    border: 3px solid var(--sb-black);
    border-radius: var(--sb-radius);
    overflow: hidden;
}
.sb-stat {
    padding: 18px 16px;
    background: var(--sb-white);
    border-right: 2px solid var(--sb-black);
    border-bottom: 2px solid var(--sb-black);
}
.sb-stat:nth-child(3n) { border-right: none; }
.sb-stat:nth-child(n+4) { border-bottom: none; }
/* Selective Mondrian color fills on alternating cells */
.sb-stat:nth-child(1) { background: var(--sb-red-light); }
.sb-stat:nth-child(3) { background: var(--sb-blue-light); }
.sb-stat:nth-child(5) { background: var(--sb-yellow-light); }
.sb-stat strong {
    display: block; color: var(--sb-black);
    font-size: clamp(26px, 3vw, 38px); line-height: 1;
}
.sb-stat span {
    display: block; margin-top: 6px;
    color: var(--sb-gray-600);
    font-family: "Space Mono", monospace;
    font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.04em;
}

/* ── Callout ────────────────────────────── */
.sb-callout {
    margin: 24px 0; padding: 18px 20px;
    border-left: 4px solid var(--sb-blue);
    background: var(--sb-blue-light);
    border-radius: 0 var(--sb-radius) var(--sb-radius) 0;
}
.sb-callout p { margin: 0; }
.sb-callout.warn {
    border-left-color: var(--sb-error);
    background: var(--sb-error-bg);
}

/* ── Comparison Table ───────────────────── */
.sb-compare-table {
    width: 100%; border-collapse: collapse;
    font-size: 13.5px; margin: 24px 0;
    border: 2px solid var(--sb-black);
}
.sb-compare-table th, .sb-compare-table td {
    padding: 10px 12px; text-align: center;
    border: 1px solid var(--sb-gray-300);
}
.sb-compare-table th {
    background: var(--sb-black); color: var(--sb-white);
    font-size: 11px; text-transform: uppercase;
    letter-spacing: 0.06em;
    border-color: var(--sb-gray-800);
}
.sb-compare-table td:first-child { text-align: left; font-weight: 600; }
.sb-compare-table tr:hover { background: var(--sb-gray-50); }
/* Highlight row for SaaS-Bench */
.sb-compare-table tr.sb-row-highlight {
    background: var(--sb-blue-light);
}
.sb-compare-table tr.sb-row-highlight td {
    color: var(--sb-blue); font-weight: 700;
    border-bottom: 2px solid var(--sb-blue);
}
/* Status symbols — green ✓, gray ✗, orange △ */
.sb-yes { color: var(--sb-success); font-weight: 700; }
.sb-no { color: var(--sb-gray-500); }
.sb-partial { color: var(--sb-warn); font-weight: 600; }

/* ── Result Table ───────────────────────── */
.sb-result-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px; margin: 24px 0;
    border: 2px solid var(--sb-black);
}
.sb-result-table th, .sb-result-table td {
    padding: 6px 5px; text-align: center;
    border: 1px solid var(--sb-gray-300);
}
.sb-result-table th {
    background: var(--sb-gray-100); color: var(--sb-black);
    font-size: 9px; text-transform: uppercase;
    letter-spacing: 0.04em; font-weight: 700;
    border-bottom: 2px solid var(--sb-black);
    line-height: 1.3;
}
.sb-result-table td:first-child { text-align: left; font-weight: 600; white-space: nowrap; }
.sb-result-table tr:hover { background: var(--sb-gray-50); }
.sb-best { color: var(--sb-blue); font-weight: 800; }

/* ── Highlights ─────────────────────────── */
.sb-highlight { color: var(--sb-blue); font-weight: 700; }
.sb-highlight-red { color: var(--sb-error); font-weight: 700; }

/* ── Case Study Boxes ───────────────────── */
.sb-case-box {
    margin: 24px 0; padding: 20px;
    border: 2px solid var(--sb-black);
    border-radius: var(--sb-radius);
    background: var(--sb-white);
    border-top-width: 5px;
}
/* Mondrian accent variants */
.sb-case-box.sb-accent-red { border-top-color: var(--sb-red); }
.sb-case-box.sb-accent-blue { border-top-color: var(--sb-blue); }
.sb-case-box.sb-accent-yellow { border-top-color: var(--sb-yellow); }
.sb-case-box h4 {
    margin: 0 0 10px; color: var(--sb-black); font-size: 1.05em;
}
.sb-case-label {
    display: inline-block; padding: 3px 10px;
    border-radius: var(--sb-radius);
    background: var(--sb-gray-100);
    border: 1px solid var(--sb-gray-300);
    font-family: "Space Mono", monospace;
    font-size: 10px; font-weight: 700;
    color: var(--sb-gray-800);
    text-transform: uppercase; margin-bottom: 10px;
}

/* ── Verdict Boxes ──────────────────────── */
.sb-verdict {
    margin: 12px 0; padding: 14px 16px;
    border-radius: var(--sb-radius);
    font-family: "Space Mono", monospace;
    font-size: 12px; line-height: 1.6;
    border-width: 1px; border-style: solid;
}
/* Status header label — not color-only */
.sb-verdict::before {
    display: block; font-weight: 700; font-size: 11px;
    text-transform: uppercase; letter-spacing: 0.08em;
    margin-bottom: 8px; padding-bottom: 6px;
    border-bottom: 1px solid;
}
.sb-verdict.pass {
    background: var(--sb-success-bg);
    border-color: var(--sb-success-border);
    color: #1B5E20;
}
.sb-verdict.pass::before {
    content: "✓ VERIFIED";
    color: var(--sb-success);
    border-color: var(--sb-success-border);
}
.sb-verdict.fail {
    background: var(--sb-error-bg);
    border-color: var(--sb-error-border);
    color: #B71C1C;
}
.sb-verdict.fail::before {
    content: "✗ FAILED";
    color: var(--sb-error);
    border-color: var(--sb-error-border);
}
.sb-verdict.mixed {
    background: var(--sb-warn-bg);
    border-color: var(--sb-warn-border);
    color: #BF360C;
}
.sb-verdict.mixed::before {
    content: "⚠ PARTIAL";
    color: var(--sb-warn);
    border-color: var(--sb-warn-border);
}

/* ── Figures ────────────────────────────── */
.sb-figure { margin: 28px 0; }
.sb-figure img {
    display: block; width: 100%; height: auto;
    border-radius: var(--sb-radius);
}
.sb-caption {
    margin-top: 10px; color: var(--sb-gray-600);
    font-size: 0.86em; line-height: 1.55; text-align: center;
}

/* ── Three Pillars (Mondrian triptych) ─── */
.sb-pillars {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 0; margin: 24px 0;
    border: 3px solid var(--sb-black);
    border-radius: var(--sb-radius);
    overflow: hidden;
}
.sb-pillar {
    padding: 18px 16px;
    background: var(--sb-white);
    border-right: 2px solid var(--sb-black);
    border-top: 5px solid var(--sb-red);
}
.sb-pillar:nth-child(2) { border-top-color: var(--sb-yellow); }
.sb-pillar:nth-child(3) { border-top-color: var(--sb-blue); border-right: none; }
.sb-pillar h3 { margin: 0 0 6px; font-size: 1em; color: var(--sb-black); }
.sb-pillar p { margin: 0; color: var(--sb-gray-600); font-size: 0.88em; }

/* ── Floating TOC ───────────────────────── */
.sb-toc {
    position: fixed; right: 10px; top: 120px;
    width: 200px; max-width: 200px; min-width: 160px;
    max-height: calc(100vh - 160px); overflow-y: auto;
    padding: 16px;
    background: var(--sb-white);
    border: 2px solid var(--sb-black);
    border-radius: var(--sb-radius);
    box-shadow: var(--sb-shadow);
    z-index: 100;
    transition: all 0.3s ease;
}
.sb-toc::-webkit-scrollbar { width: 4px; }
.sb-toc::-webkit-scrollbar-track { background: transparent; }
.sb-toc::-webkit-scrollbar-thumb { background: var(--sb-gray-300); border-radius: 2px; }
.sb-toc-toggle {
    display: flex; align-items: center; justify-content: center;
    width: 28px; height: 28px;
    border-radius: var(--sb-radius);
    background: var(--sb-gray-100);
    border: 1px solid var(--sb-gray-300);
    cursor: pointer; margin-bottom: 12px;
}
.sb-toc-toggle:hover { background: var(--sb-gray-200); }
.sb-toc-toggle svg {
    width: 16px; height: 16px;
    color: var(--sb-gray-600);
    transition: transform 0.3s;
}
.sb-toc-title {
    font-family: "Space Mono", monospace;
    font-size: 11px; text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--sb-gray-600);
    margin-bottom: 12px; font-weight: 700;
}
.sb-toc-progress {
    height: 3px; background: var(--sb-gray-200);
    border-radius: 2px; margin-bottom: 12px; overflow: hidden;
}
.sb-toc-progress-bar {
    height: 100%; background: var(--sb-blue);
    width: 0%; transition: width 0.1s; border-radius: 2px;
}
.sb-toc-list { list-style: none; padding: 0; margin: 0; }
.sb-toc-item { margin-bottom: 4px; }
.sb-toc-link {
    display: block; padding: 6px 10px;
    color: var(--sb-gray-600);
    text-decoration: none !important;
    border-radius: var(--sb-radius);
    border-left: 2px solid transparent;
    line-height: 1.4; font-size: 12.5px;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.sb-toc-link:hover, .sb-toc-link.active {
    background: var(--sb-blue-light);
    color: var(--sb-black);
    border-left-color: var(--sb-blue);
    font-weight: 500;
}
.sb-toc.collapsed { width: 40px; padding: 12px; overflow: hidden; }
.sb-toc.collapsed .sb-toc-title,
.sb-toc.collapsed .sb-toc-progress,
.sb-toc.collapsed .sb-toc-list { display: none; }
.sb-toc.collapsed .sb-toc-toggle { margin-bottom: 0; }
.sb-toc.collapsed .sb-toc-toggle svg { transform: rotate(180deg); }

/* ── Epigraph ────────────────────────────── */
.sb-epigraph {
    margin: 28px auto 32px;
    padding: 22px 28px;
    max-width: 100%;
    border: 3px solid var(--sb-black);
    border-left: 6px solid var(--sb-yellow);
    border-radius: var(--sb-radius);
    background: var(--sb-white);
    position: relative;
}
.sb-epigraph::before {
    content: "\201C";
    position: absolute;
    right: 20px; top: 50%; transform: translateY(-50%);
    font-size: 72px; font-weight: 900;
    color: var(--sb-gray-200);
    line-height: 1;
    pointer-events: none;
    font-family: Georgia, serif;
}
.sb-epigraph p {
    margin: 0;
    font-size: 1.05em;
    line-height: 1.55;
    color: var(--sb-black);
    font-style: italic;
    position: relative;
    z-index: 1;
    max-width: 88%;
}
.sb-epigraph cite {
    display: block;
    margin-top: 8px;
    font-size: 0.85em;
    color: var(--sb-gray-600);
    font-style: normal;
    font-weight: 700;
    position: relative;
    z-index: 1;
}

/* ── Insight Banner (dark contrast) ────── */
.sb-insight {
    margin: 24px 0; padding: 22px 28px;
    background: var(--sb-black); color: #fff;
    border-radius: var(--sb-radius);
    display: flex; align-items: center; gap: 24px;
}
.sb-insight-stat {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 700; color: var(--sb-yellow);
    line-height: 1; white-space: nowrap;
}
.sb-insight-text {
    font-size: 0.95em; line-height: 1.55;
    color: rgba(255,255,255,0.85);
}
.sb-insight-text strong { color: var(--sb-yellow); }

/* ── Metric Definition Cards ─────────── */
.sb-metric-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 0; margin: 24px 0;
    border: 2px solid var(--sb-black);
    border-radius: var(--sb-radius);
    overflow: hidden;
}
.sb-metric {
    padding: 18px 20px;
    background: var(--sb-white);
}
.sb-metric:first-child { border-right: 2px solid var(--sb-black); }
.sb-metric-name {
    font-family: "Space Mono", monospace;
    font-size: 11px; text-transform: uppercase;
    letter-spacing: 0.08em; font-weight: 700;
    margin-bottom: 8px;
}
.sb-metric:first-child .sb-metric-name { color: var(--sb-blue); }
.sb-metric:last-child .sb-metric-name { color: var(--sb-red); }
.sb-metric p { margin: 0; font-size: 0.9em; color: var(--sb-gray-800); line-height: 1.6; }

/* ── Workflow Steps ──────────────────── */
.sb-steps {
    margin: 24px 0;
    border: 2px solid var(--sb-black);
    border-radius: var(--sb-radius);
    overflow: hidden;
}
.sb-step {
    padding: 16px 20px;
    background: var(--sb-white);
    display: flex; gap: 16px; align-items: flex-start;
    border-bottom: 1px solid var(--sb-gray-300);
}
.sb-step:last-child { border-bottom: none; }
.sb-step-num {
    display: flex; align-items: center; justify-content: center;
    width: 32px; height: 32px;
    border-radius: var(--sb-radius);
    font-weight: 700; font-size: 14px; flex-shrink: 0;
}
.sb-step:nth-child(1) .sb-step-num { background: var(--sb-red); color: #fff; }
.sb-step:nth-child(2) .sb-step-num { background: var(--sb-blue); color: #fff; }
.sb-step:nth-child(3) .sb-step-num { background: var(--sb-yellow); color: var(--sb-black); }
.sb-step-app {
    font-family: "Space Mono", monospace;
    font-size: 12px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.04em;
    margin-bottom: 4px; color: var(--sb-black);
}
.sb-step p { margin: 0; font-size: 0.9em; color: var(--sb-gray-800); line-height: 1.55; }

/* ── Pull Quote ──────────────────────── */
.sb-pull-quote {
    margin: 28px 0; padding: 20px 0;
    text-align: center;
    border-top: 3px solid var(--sb-black);
    border-bottom: 3px solid var(--sb-black);
    font-size: 1.15em; font-weight: 600;
    line-height: 1.5; color: var(--sb-black);
}

/* ── Domain Failure Grid ─────────────── */
.sb-domain-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 0; margin: 24px 0;
    border: 2px solid var(--sb-black);
    border-radius: var(--sb-radius);
    overflow: hidden;
}
.sb-domain-card {
    padding: 16px; background: var(--sb-white);
    border-right: 2px solid var(--sb-black);
}
.sb-domain-card:last-child { border-right: none; }
.sb-domain-card h4 {
    font-size: 0.85em; margin: 0 0 6px; color: var(--sb-black);
}
.sb-domain-card p {
    margin: 0; font-size: 0.82em;
    color: var(--sb-gray-600); line-height: 1.5;
}
.sb-domain-card:nth-child(1) { border-top: 4px solid var(--sb-red); }
.sb-domain-card:nth-child(2) { border-top: 4px solid var(--sb-blue); }
.sb-domain-card:nth-child(3) { border-top: 4px solid var(--sb-yellow); }

/* ── Capability List ────────────────── */
.sb-caps {
    margin: 24px 0;
    border: 3px solid var(--sb-black);
    border-radius: var(--sb-radius);
    overflow: hidden;
}
.sb-cap {
    padding: 14px 20px;
    background: var(--sb-white);
    border-bottom: 1px solid var(--sb-gray-300);
    display: flex; align-items: baseline; gap: 14px;
}
.sb-cap:last-child { border-bottom: none; }
.sb-cap-num {
    display: inline-flex; align-items: center; justify-content: center;
    width: 24px; height: 24px; flex-shrink: 0;
    border-radius: var(--sb-radius);
    font-size: 12px; font-weight: 900;
    color: var(--sb-white);
    background: var(--sb-black);
}
.sb-cap:nth-child(1) .sb-cap-num { background: var(--sb-red); }
.sb-cap:nth-child(2) .sb-cap-num { background: var(--sb-blue); }
.sb-cap:nth-child(3) .sb-cap-num { background: var(--sb-yellow); color: var(--sb-black); }
.sb-cap:nth-child(4) .sb-cap-num { background: var(--sb-red); }
.sb-cap:nth-child(5) .sb-cap-num { background: var(--sb-blue); }
.sb-cap-text {
    font-size: 0.9em; line-height: 1.55;
    color: var(--sb-gray-600);
}
.sb-cap-text strong { color: var(--sb-black); }

/* ── Conclusion Box ──────────────────── */
.sb-conclusion {
    margin: 32px 0; padding: 24px 28px;
    border: 3px solid var(--sb-black);
    border-top: 5px solid var(--sb-red);
    border-radius: var(--sb-radius);
    background: var(--sb-white);
}
.sb-conclusion p { margin: 0 0 14px; }
.sb-conclusion p:last-child { margin-bottom: 0; }

/* ── Leaderboard ─────────────────────────── */
.sb-lb {
    border: 3px solid var(--sb-black);
    border-radius: var(--sb-radius);
    overflow: hidden;
    margin: 0 0 36px;
    background: var(--sb-white);
}
.sb-lb-header {
    background: var(--sb-black);
    padding: 22px 32px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    border-bottom: 4px solid var(--sb-yellow);
}
.sb-lb-header h3 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin: 0;
    position: relative;
    z-index: 1;
}
.sb-lb-header h3 span { color: var(--sb-yellow); }
.sb-lb-header-sub {
    color: rgba(255,255,255,0.55);
    font-size: 12px;
    font-weight: 500;
    margin-top: 3px;
}
.sb-lb-badges {
    display: flex; gap: 12px;
    position: relative; z-index: 1;
}
.sb-lb-badge {
    text-align: center;
    padding: 5px 14px;
    background: rgba(255,255,255,0.08);
    border-radius: var(--sb-radius);
    border: 1px solid rgba(255,255,255,0.12);
}
.sb-lb-badge-val {
    font-size: 18px;
    font-weight: 700;
    color: var(--sb-yellow);
}
.sb-lb-badge-lbl {
    font-size: 9.5px;
    color: rgba(255,255,255,0.45);
    text-transform: uppercase;
    letter-spacing: 0.7px;
    font-weight: 600;
}
.sb-lb-table-wrap { padding: 16px 24px 20px; }
.sb-lb table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 4px;
}
.sb-lb thead th {
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    color: var(--sb-gray-600);
    padding: 0 12px 10px;
    text-align: center;
    white-space: nowrap;
    border-bottom: 2px solid var(--sb-gray-300);
}
.sb-lb thead th:first-child { text-align: left; padding-left: 14px; }
.sb-lb thead th:nth-child(2) { text-align: left; }
.sb-lb tbody td {
    padding: 10px 12px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: var(--sb-black);
    background: var(--sb-white);
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    vertical-align: middle;
}
.sb-lb tbody td:first-child {
    border-left: 1px solid transparent;
    border-radius: var(--sb-radius) 0 0 var(--sb-radius);
    text-align: center; width: 44px;
    padding-left: 8px; padding-right: 4px;
}
.sb-lb tbody td:nth-child(2) {
    text-align: left; font-weight: 600;
    font-size: 14.5px; padding-left: 8px;
    white-space: nowrap;
}
.sb-lb tbody td:last-child {
    border-right: 1px solid transparent;
    border-radius: 0 var(--sb-radius) var(--sb-radius) 0;
}
.sb-lb tbody tr { background: var(--sb-gray-50); }
/* Top-3 row tints */
.sb-lb tbody tr:nth-child(1) td {
    background: var(--sb-yellow-light);
    border-color: rgba(249,168,37,0.25);
}
.sb-lb tbody tr:nth-child(2) td {
    background: linear-gradient(90deg, rgba(180,180,180,0.10), rgba(180,180,180,0.03));
    border-color: rgba(180,180,180,0.22);
}
.sb-lb tbody tr:nth-child(3) td {
    background: linear-gradient(90deg, rgba(205,127,50,0.08), rgba(205,127,50,0.02));
    border-color: rgba(205,127,50,0.20);
}
/* Rank badges */
.sb-lb-rank {
    display: inline-flex; align-items: center; justify-content: center;
    width: 28px; height: 28px;
    border-radius: var(--sb-radius);
    font-weight: 700; font-size: 12.5px;
}
.sb-lb-rank-1 { background: var(--sb-yellow); color: var(--sb-black); }
.sb-lb-rank-2 { background: #b8b8b8; color: #fff; }
.sb-lb-rank-3 { background: #cd7f32; color: #fff; }
.sb-lb-rank-n { background: var(--sb-gray-200); color: var(--sb-gray-600); }
/* Progress bars */
.sb-lb-bar-cell { min-width: 320px; }
.sb-lb-bar-wrap { display: flex; align-items: center; gap: 10px; }
.sb-lb-bar-track {
    flex: 1; height: 12px;
    background: var(--sb-gray-200);
    border-radius: var(--sb-radius);
    overflow: hidden;
}
.sb-lb-bar-fill {
    height: 100%;
    border-radius: var(--sb-radius);
    background: var(--sb-blue);
    transition: width 0.6s cubic-bezier(0.22,1,0.36,1);
}
.sb-lb-bar-label {
    font-size: 14px; font-weight: 700;
    min-width: 48px; text-align: right;
    color: var(--sb-blue);
}
/* Resolved */
.sb-lb-resolved { font-size: 13.5px; font-weight: 600; }
.sb-lb-resolved-best { color: var(--sb-red); font-weight: 700; }
/* Footer */
.sb-lb-footer {
    padding: 10px 32px 14px;
    border-top: 1px solid var(--sb-gray-300);
}
.sb-lb-footer-note {
    font-size: 10.5px;
    color: var(--sb-gray-600);
    font-family: "Space Mono", monospace;
}

/* ── Interactions ───────────────────────── */
/* Shared transition base */
.sb-stat, .sb-principle, .sb-pillar, .sb-cap,
.sb-case-box, .sb-metric, .sb-step, .sb-verdict,
.sb-keyq, .sb-conclusion, .sb-epigraph, .sb-callout,
.sb-domain-card, .sb-insight {
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

/* Cards: lift + shadow on hover */
.sb-stat:hover, .sb-principle:hover, .sb-pillar:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    z-index: 1; position: relative;
}

/* Case boxes: accent glow */
.sb-case-box:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.07);
    transform: translateY(-1px);
}
.sb-case-box.sb-accent-red:hover { box-shadow: 0 4px 16px rgba(211,47,47,0.12); }
.sb-case-box.sb-accent-blue:hover { box-shadow: 0 4px 16px rgba(21,101,192,0.12); }
.sb-case-box.sb-accent-yellow:hover { box-shadow: 0 4px 16px rgba(249,168,37,0.15); }

/* Verdict boxes: subtle lift */
.sb-verdict:hover { transform: translateY(-1px); box-shadow: 0 3px 10px rgba(0,0,0,0.06); }

/* Key question: blue glow */
.sb-keyq:hover {
    border-left-color: var(--sb-blue);
    box-shadow: 0 4px 16px rgba(21,101,192,0.1);
    transform: translateY(-1px);
}
.sb-keyq:hover strong { color: #0D47A1; }

/* Conclusion: red top accent intensifies */
.sb-conclusion:hover {
    box-shadow: 0 4px 16px rgba(211,47,47,0.08);
    transform: translateY(-1px);
}

/* Metrics & steps: lift */
.sb-metric:hover, .sb-step:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 10px rgba(0,0,0,0.06);
    z-index: 1; position: relative;
}

/* Capability list items: highlight row */
.sb-cap:hover { background: var(--sb-gray-50); }
.sb-cap:hover .sb-cap-num { transform: scale(1.1); }
.sb-cap-num { transition: transform 0.2s ease; }

/* Insight banner: subtle glow */
.sb-insight:hover {
    box-shadow: 0 4px 20px rgba(26,26,26,0.15);
    transform: translateY(-1px);
}

/* Figures: no hover effect */

/* Leaderboard row interactions */
.sb-lb tbody tr {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    cursor: default;
}
.sb-lb tbody tr:hover {
    transform: translateY(-2px) scale(1.005);
    z-index: 2; position: relative;
}
.sb-lb tbody tr:hover td {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
/* Top-3 hover intensify */
.sb-lb tbody tr:nth-child(1):hover td { background: linear-gradient(90deg, rgba(249,168,37,0.18), rgba(249,168,37,0.05)); }
.sb-lb tbody tr:nth-child(2):hover td { background: linear-gradient(90deg, rgba(180,180,180,0.18), rgba(180,180,180,0.06)); }
.sb-lb tbody tr:nth-child(3):hover td { background: linear-gradient(90deg, rgba(205,127,50,0.16), rgba(205,127,50,0.05)); }
.sb-lb tbody tr:nth-child(n+4):hover td { background: #f0eeea; }
/* Rank badge: scale on hover */
.sb-lb-rank { transition: transform 0.2s ease, box-shadow 0.2s ease; }
.sb-lb tbody tr:hover .sb-lb-rank { transform: scale(1.18); }
/* Gold #1 pulse */
.sb-lb-rank-1 { animation: sbGoldPulse 2.5s ease-in-out infinite; }
@keyframes sbGoldPulse {
    0%, 100% { box-shadow: 0 1px 4px rgba(249,168,37,0.25); }
    50% { box-shadow: 0 2px 12px rgba(249,168,37,0.45), 0 0 16px rgba(249,168,37,0.12); }
}
/* Bar: shimmer on hover */
.sb-lb-bar-fill { position: relative; overflow: hidden; }
.sb-lb-bar-fill::after {
    content: '';
    position: absolute;
    top: 0; left: -100%; width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
    opacity: 0; transition: opacity 0.3s;
}
.sb-lb tbody tr:hover .sb-lb-bar-fill::after {
    opacity: 1;
    animation: sbBarShimmer 1.2s ease infinite;
}
@keyframes sbBarShimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}
/* Bar label: scale on hover */
.sb-lb-bar-label { transition: transform 0.2s ease, letter-spacing 0.2s ease; }
.sb-lb tbody tr:hover .sb-lb-bar-label { transform: scale(1.1); letter-spacing: 0.3px; }
/* Resolved: scale on hover */
.sb-lb-resolved { transition: transform 0.2s ease; display: inline-block; }
.sb-lb tbody tr:hover .sb-lb-resolved { transform: scale(1.08); }
/* Badge hover */
.sb-lb-badge { transition: transform 0.2s ease, background 0.2s ease; cursor: default; }
.sb-lb-badge:hover { transform: translateY(-2px); background: rgba(255,255,255,0.14); }
/* Header shimmer */
.sb-lb-header::after {
    content: '';
    position: absolute;
    top: 0; left: -100%; width: 60%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
    animation: sbHeaderShimmer 4s ease-in-out infinite;
}
@keyframes sbHeaderShimmer {
    0%, 100% { left: -100%; }
    50% { left: 140%; }
}

/* Result & compare table rows */
.sb-result-table tbody tr, .sb-compare-table tbody tr { transition: background 0.15s ease; }

/* Accordion cases: border accent on open */
.sb-case-acc { transition: border-color 0.2s ease; }
.sb-case-acc[open] { border-bottom-color: var(--sb-blue); }

/* Stats numbers: scale on hover */
.sb-stat strong { transition: transform 0.2s ease; display: inline-block; }
.sb-stat:hover strong { transform: scale(1.08); }

/* Epigraph: gentle lift */
.sb-epigraph:hover { box-shadow: 0 4px 16px rgba(249,168,37,0.12); transform: translateY(-1px); }

/* Callout: border thicken */
.sb-callout:hover { border-left-width: 6px; padding-left: 18px; }

/* Leaderboard row entrance animation */
.sb-lb tbody tr {
    opacity: 0;
    transform: translateY(12px);
}
.sb-lb tbody tr.sb-lb-visible {
    animation: sbRowIn 0.4s ease forwards;
}
.sb-lb tbody tr:nth-child(1).sb-lb-visible { animation-delay: 0.05s; }
.sb-lb tbody tr:nth-child(2).sb-lb-visible { animation-delay: 0.15s; }
.sb-lb tbody tr:nth-child(3).sb-lb-visible { animation-delay: 0.25s; }
.sb-lb tbody tr:nth-child(4).sb-lb-visible { animation-delay: 0.35s; }
.sb-lb tbody tr:nth-child(5).sb-lb-visible { animation-delay: 0.45s; }
.sb-lb tbody tr:nth-child(6).sb-lb-visible { animation-delay: 0.55s; }
.sb-lb tbody tr:nth-child(7).sb-lb-visible { animation-delay: 0.65s; }
@keyframes sbRowIn {
    to { opacity: 1; transform: translateY(0); }
}
/* Bar fill animation */
.sb-lb-bar-fill { transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1); }

/* Domain cards */
.sb-domain-card:hover { transform: translateY(-2px); box-shadow: 0 3px 10px rgba(0,0,0,0.06); z-index: 1; position: relative; }

/* Principle numbers: bounce */
.sb-principle:hover .sb-principle-num { transform: scale(1.15); }
.sb-principle-num { transition: transform 0.2s ease; }

@media (max-width: 820px) {
    .sb-lb-header { flex-direction: column; gap: 12px; padding: 18px 20px 14px; }
    .sb-lb-bar-cell { min-width: 160px; }
    .sb-lb-table-wrap { padding: 12px 10px 16px; overflow-x: auto; }
}

/* ── Responsive ─────────────────────────── */
@media (max-width: 820px) {
    .sb-stats { grid-template-columns: 1fr; }
    .sb-stats .sb-stat { border-right: none; border-bottom: 2px solid var(--sb-black); }
    .sb-stats .sb-stat:last-child { border-bottom: none; }
    .sb-pillars { grid-template-columns: 1fr; }
    .sb-pillar { border-right: none; border-bottom: 2px solid var(--sb-black); }
    .sb-pillar:last-child { border-bottom: none; }
    .sb-toc { display: none; }
    .sb-insight { flex-direction: column; text-align: center; }
    .sb-metric-grid { grid-template-columns: 1fr; }
    .sb-metric:first-child { border-right: none; border-bottom: 2px solid var(--sb-black); }
    .sb-domain-grid { grid-template-columns: 1fr; }
    .sb-domain-card { border-right: none; border-bottom: 2px solid var(--sb-black); }
    .sb-domain-card:last-child { border-bottom: none; }
    .sb-principles { grid-template-columns: 1fr; }
    .sb-principle { border-right: none; border-bottom: 2px solid var(--sb-black); }
    .sb-principle:last-child { border-bottom: none; }
}

/* ── Key Question ──────────────────────── */
.sb-keyq {
    margin: 28px 0; padding: 22px 28px;
    border: 3px solid var(--sb-black);
    border-left: 6px solid var(--sb-blue);
    border-radius: var(--sb-radius);
    background: var(--sb-white);
    position: relative;
}
.sb-keyq::before {
    content: "?";
    position: absolute;
    right: 20px; top: 50%; transform: translateY(-50%);
    font-size: 64px; font-weight: 900;
    color: var(--sb-gray-200);
    line-height: 1;
    pointer-events: none;
}
.sb-keyq p {
    margin: 0;
    font-size: 1.08em;
    line-height: 1.55;
    color: var(--sb-black);
    position: relative;
    z-index: 1;
    max-width: 88%;
}
.sb-keyq strong {
    color: var(--sb-blue);
}

/* ── Principles Grid ───────────────────── */
.sb-principles {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 0; margin: 20px 0 28px;
    border: 3px solid var(--sb-black);
    border-radius: var(--sb-radius);
    overflow: hidden;
}
.sb-principle {
    padding: 20px 18px;
    background: var(--sb-white);
    border-right: 2px solid var(--sb-black);
    position: relative;
}
.sb-principle:last-child { border-right: none; }
.sb-principle-num {
    display: inline-flex; align-items: center; justify-content: center;
    width: 26px; height: 26px;
    border-radius: var(--sb-radius);
    font-size: 13px; font-weight: 900;
    color: var(--sb-white);
    margin-bottom: 10px;
}
.sb-principle:nth-child(1) .sb-principle-num { background: var(--sb-red); }
.sb-principle:nth-child(2) .sb-principle-num { background: var(--sb-yellow); color: var(--sb-black); }
.sb-principle:nth-child(3) .sb-principle-num { background: var(--sb-blue); }
.sb-principle h4 {
    margin: 0 0 8px;
    font-size: 0.95em;
    color: var(--sb-black);
}
.sb-principle p {
    margin: 0;
    font-size: 0.85em;
    line-height: 1.6;
    color: var(--sb-gray-600);
}

/* ── Case Gallery (Accordion) ──────────── */
.sb-cases {
    margin: 28px 0;
    border: 3px solid var(--sb-black);
    border-radius: var(--sb-radius);
    overflow: hidden;
}
.sb-cases-header {
    padding: 14px 20px;
    background: var(--sb-black);
    color: var(--sb-white);
    font-size: 12px;
    font-weight: 700;
    font-family: "Space Mono", monospace;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-bottom: 3px solid var(--sb-yellow);
}
.sb-case-acc {
    border-bottom: 2px solid var(--sb-gray-300);
}
.sb-case-acc:last-child { border-bottom: none; }
.sb-case-acc summary {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 20px;
    cursor: pointer;
    background: var(--sb-white);
    list-style: none;
    transition: background 0.15s;
}
.sb-case-acc summary::-webkit-details-marker { display: none; }
.sb-case-acc summary::before {
    content: "▸";
    font-size: 14px;
    color: var(--sb-gray-500);
    transition: transform 0.2s;
    flex-shrink: 0;
    width: 14px;
}
.sb-case-acc[open] summary::before {
    transform: rotate(90deg);
    color: var(--sb-blue);
}
.sb-case-acc summary:hover { background: var(--sb-gray-50); }
.sb-case-acc[open] summary {
    background: var(--sb-blue-light);
    border-bottom: 1px solid var(--sb-gray-300);
}
.sb-case-acc-domain {
    font-family: "Space Mono", monospace;
    font-size: 10px; font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 3px 8px;
    border-radius: var(--sb-radius);
    border: 1px solid var(--sb-gray-300);
    background: var(--sb-gray-100);
    color: var(--sb-gray-600);
    white-space: nowrap;
    flex-shrink: 0;
}
.sb-case-acc-title {
    font-weight: 700; font-size: 14px;
    color: var(--sb-black);
    flex: 1; min-width: 0;
}
.sb-case-acc-apps {
    display: flex; gap: 6px; flex-wrap: wrap;
    flex-shrink: 0;
}
.sb-case-acc-apps span {
    font-family: "Space Mono", monospace;
    font-size: 10px; font-weight: 700;
    padding: 2px 7px;
    border-radius: var(--sb-radius);
    border: 1px solid var(--sb-blue);
    color: var(--sb-blue);
    background: var(--sb-white);
}
.sb-case-acc-body {
    padding: 20px 24px 24px;
    background: var(--sb-gray-50);
}
.sb-case-acc-body p {
    font-size: 0.88em; line-height: 1.65;
    margin: 0 0 12px;
}
.sb-case-acc-body p:last-child { margin-bottom: 0; }
.sb-case-acc-scroll {
    max-height: 280px;
    overflow-y: auto;
    padding: 16px 18px;
    background: var(--sb-white);
    border: 1px solid var(--sb-gray-300);
    border-radius: var(--sb-radius);
    margin-top: 14px;
    font-size: 13px; line-height: 1.6;
}
.sb-case-acc-scroll::-webkit-scrollbar { width: 5px; }
.sb-case-acc-scroll::-webkit-scrollbar-track { background: var(--sb-gray-100); }
.sb-case-acc-scroll::-webkit-scrollbar-thumb { background: var(--sb-gray-500); border-radius: 3px; }
.sb-case-acc-scroll p { margin: 0 0 10px; }
.sb-case-acc-scroll ol, .sb-case-acc-scroll ul { margin: 8px 0 12px; padding-left: 20px; }
.sb-case-acc-scroll li { margin-bottom: 4px; }
.sb-case-acc-scroll strong { color: var(--sb-blue); }
.sb-case-acc-creds {
    margin-top: 12px;
    padding: 10px 14px;
    background: var(--sb-yellow-light);
    border: 1px solid var(--sb-gray-300);
    border-radius: var(--sb-radius);
    font-family: "Space Mono", monospace;
    font-size: 11px;
    line-height: 1.6;
}
.sb-case-acc-creds strong {
    font-size: 10px; text-transform: uppercase;
    letter-spacing: 0.06em; color: var(--sb-gray-600);
}

@media (max-width: 820px) {
    .sb-case-acc summary { flex-wrap: wrap; gap: 8px; padding: 12px 16px; }
    .sb-case-acc-apps { width: 100%; }
    .sb-case-acc-body { padding: 16px; }
}

/* ── Mobile refinements (SaaS-Bench only) ───────────────────────── */
/* The global .markdown rule clamps article width to 85% which leaves the
   3-column highlight grids (.sb-principles, .sb-pillars) too narrow on
   phones — the third card gets clipped. These rules only ship as inline
   <style> inside SaaS-Bench.md, so other blog posts are unaffected. */
.markdown { max-width: 100%; }
@media (max-width: 820px) {
    .markdown { width: 100%; }
    /* Force every horizontal highlight grid to stack vertically on phones */
    .sb-principles,
    .sb-pillars,
    .sb-metric-grid,
    .sb-domain-grid {
        grid-template-columns: 1fr !important;
    }
    .sb-principle,
    .sb-pillar,
    .sb-domain-card {
        border-right: none !important;
        border-bottom: 2px solid var(--sb-black) !important;
    }
    .sb-principle:last-child,
    .sb-pillar:last-child,
    .sb-domain-card:last-child {
        border-bottom: none !important;
    }
    .sb-metric:first-child {
        border-right: none !important;
        border-bottom: 2px solid var(--sb-black) !important;
    }
}

/* Figure-pair grid: two columns on desktop, stacks below 820px */
.sb-fig-pair {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 14px; margin: 28px 0;
}
/* Generic horizontal-scroll wrapper for wide tables */
.sb-table-scroll {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin: 24px 0;
}
.sb-table-scroll > table { margin: 0; }
.sb-table-scroll::-webkit-scrollbar { height: 6px; }
.sb-table-scroll::-webkit-scrollbar-track { background: var(--sb-gray-100); }
.sb-table-scroll::-webkit-scrollbar-thumb { background: var(--sb-gray-300); border-radius: 3px; }

@media (max-width: 820px) {
    /* Stats: 2-col on tablet/large phone instead of single tall column */
    .sb-stats { grid-template-columns: repeat(2, 1fr); }
    .sb-stats .sb-stat { border-right: 2px solid var(--sb-black); border-bottom: 2px solid var(--sb-black); }
    .sb-stats .sb-stat:nth-child(2n) { border-right: none; }
    .sb-stats .sb-stat:nth-child(n+5) { border-bottom: none; }

    /* Figure pair stacks */
    .sb-fig-pair { grid-template-columns: 1fr; gap: 20px; }

    /* Wide tables: keep min-width so scroll feels intentional, shrink text */
    .sb-compare-table { min-width: 560px; font-size: 12px; }
    .sb-compare-table th, .sb-compare-table td { padding: 8px 8px; }
    .sb-compare-table th { font-size: 10px; }
    .sb-result-table { min-width: 720px; font-size: 10px; }
    .sb-result-table th, .sb-result-table td { padding: 5px 4px; }

    /* Leaderboard: allow model names to wrap, tighten paddings */
    .sb-lb-table-wrap { padding: 10px 8px 14px; overflow-x: visible; }
    .sb-lb thead th { font-size: 9.5px; padding: 0 6px 8px; letter-spacing: 0.4px; }
    .sb-lb tbody td { padding: 8px 6px; font-size: 12.5px; }
    .sb-lb tbody td:first-child { width: 36px; padding-left: 4px; padding-right: 2px; }
    .sb-lb tbody td:nth-child(2) { white-space: normal; font-size: 13px; padding-left: 6px; line-height: 1.3; }
    .sb-lb-bar-cell { min-width: 100px; }
    .sb-lb-bar-wrap { gap: 6px; }
    .sb-lb-bar-label { min-width: 38px; font-size: 12px; }
    .sb-lb-rank { width: 24px; height: 24px; font-size: 11.5px; }
    .sb-lb-header h3 { font-size: 17px; }
    .sb-lb-header-sub { font-size: 11px; }
    .sb-lb-badge { padding: 4px 10px; }
    .sb-lb-badge-val { font-size: 16px; }
    .sb-lb-footer { padding: 8px 16px 12px; }
    .sb-lb-footer-note { font-size: 10px; }

    /* Hero spacing */
    .sb-hero { padding: 4px 0 20px; margin-bottom: 22px; }
    .sb-hero h2 { line-height: 1.3; margin-bottom: 12px; }
    .sb-hero p { font-size: 0.9em; line-height: 1.6; }
    .sb-contributors { font-size: 12.5px; }
    .sb-link-chip { padding: 9px 14px; font-size: 12px; min-height: 40px; }

    /* Epigraph: shrink decorative quote so it doesn't overlap text */
    .sb-epigraph { padding: 18px 20px; }
    .sb-epigraph::before { font-size: 44px; right: 14px; }
    .sb-epigraph p { max-width: 100%; font-size: 1em; }

    /* Key question: shrink decorative ? */
    .sb-keyq { padding: 18px 20px; }
    .sb-keyq::before { font-size: 44px; right: 14px; }
    .sb-keyq p { max-width: 100%; font-size: 1em; }

    /* Insight banner */
    .sb-insight { padding: 18px 20px; gap: 12px; }

    /* Conclusion / callout */
    .sb-conclusion { padding: 20px 20px; }
    .sb-callout { padding: 14px 16px; }

    /* Case accordion */
    .sb-cases-header { padding: 12px 14px; font-size: 11px; letter-spacing: 0.05em; }
    .sb-case-acc-title { font-size: 13.5px; flex-basis: 100%; min-width: 0; }
    .sb-case-acc-domain { font-size: 9.5px; }
    .sb-case-acc-apps span { font-size: 9.5px; padding: 2px 6px; }
    .sb-case-acc-scroll { padding: 12px 14px; font-size: 12.5px; max-height: 320px; }
    .sb-case-acc-body p { font-size: 0.86em; }

    /* Steps / Caps / Pillars / Principles padding tighten */
    .sb-step { padding: 14px 16px; gap: 12px; }
    .sb-step-num { width: 28px; height: 28px; font-size: 13px; }
    .sb-cap { padding: 12px 14px; gap: 10px; }
    .sb-cap-text { font-size: 0.88em; }
    .sb-pillar { padding: 14px 14px; }
    .sb-principle { padding: 16px 14px; }
}

@media (max-width: 480px) {
    /* Very small phones: stats single column */
    .sb-stats { grid-template-columns: 1fr; }
    .sb-stats .sb-stat { border-right: none; border-bottom: 2px solid var(--sb-black); }
    .sb-stats .sb-stat:nth-child(n+5) { border-bottom: 2px solid var(--sb-black); }
    .sb-stats .sb-stat:last-child { border-bottom: none; }

    /* Leaderboard badges shrink */
    .sb-lb-badges { gap: 8px; }
    .sb-lb-header { padding: 14px 16px 12px; }
    .sb-lb-header h3 { font-size: 16px; }

    /* Hero h2 a bit smaller on very narrow screens */
    .sb-hero h2 { font-size: 20px; }

    /* Citation pre wraps a bit smaller */
    .sb-conclusion { padding: 18px 18px; }
}
</style>

<section class="sb11" aria-labelledby="saas-bench-v11-highlights">
<h2 id="saas-bench-v11-highlights" class="sb11-winner-heading">SaaS-Bench v1.1 Highlights</h2>
<div class="sb11-winner-grid">
<div class="sb11-winner">
<span class="sb11-winner-label">Highest Checkpoint Score · CS</span>
<strong><a href="https://www.19pine.ai/" target="_blank" rel="noopener noreferrer">Pine Computer</a></strong>
<span>Pine Computer Runtime (PCR)</span>
<b>78.3%</b>
</div>
<div class="sb11-winner">
<span class="sb11-winner-label">Highest Resolved Score · RS</span>
<strong>Opus 5</strong>
<span>Claude Code</span>
<b>31.1%</b>
</div>
</div>
</section>


<div class="sb-hero">

<h2>Can agents move from browsing pages to finishing professional work?</h2>

<p>SaaS-Bench evaluates computer-use agents inside 23 real, deployable SaaS systems — where progress depends on persistent state, cross-application coordination, domain constraints, and verifiable final artifacts.</p>

<!-- <div class="sb-contributors">
<strong>Contributors:</strong> Kean Shi<sup>1,2*</sup>, Zihang Li<sup>2*</sup>, Tianyi Ma<sup>1*</sup>, Zengji Tu<sup>1,2</sup>, Jialong Wu<sup>1,2</sup>, Xinbo Xu<sup>1,2</sup>, Qingyao Yang<sup>1,3</sup>, Ming Wu<sup>4</sup>, Jason Zeng<sup>4</sup>, Michael Heinrich<sup>4</sup>, Baobao Chang<sup>2</sup>, Liang Chen<sup>1,2†</sup>, Kuan Li<sup>1†</sup><br/>
<strong>Affiliations:</strong> <sup>1</sup>UniPat AI, <sup>2</sup>Peking University, <sup>3</sup>The University of Hong Kong, <sup>4</sup>0G Labs<br/>
<strong>Correspondence:</strong> <a href="mailto:liangchen@unipat.ai">liangchen@unipat.ai</a>, <a href="mailto:kuanli@unipat.ai">kuanli@unipat.ai</a>
</div> -->

<div class="sb-link-row">
    <a href="https://arxiv.org/abs/2605.15777" class="sb-link-chip" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
        Paper
    </a>
    <a href="/benchmarks/SaaS-Bench" class="sb-link-chip sb-primary">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M3 17h2v-7H3v7zm4 0h2V7H7v10zm4 0h2v-4h-2v4zm4 0h2V9h-2v8zm4 0h2v-3h-2v3zM3 21h18v-2H3v2z"/></svg>
        Leaderboard
    </a>
    <a href="https://github.com/UniPat-AI/SaaS-Bench" class="sb-link-chip" target="_blank">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        GitHub
    </a>
</div>

</div>

<blockquote class="sb-epigraph">
<p>"Schau tief in die Natur, und dann wirst du alles besser verstehen."</p>
<cite>— Albert Einstein</cite>
</blockquote>

## From Using Browsers to Doing Real Work

Computer-use agents are beginning to move beyond answering questions. They can now open browsers, navigate interfaces, fill forms, and click buttons. This shift from passive understanding to active execution is one of the most important directions in modern AI.

But it raises a harder question: **if an agent can click through a website, does that mean it can complete real work?**

In professional settings, a task is rarely a single-page interaction. A finance workflow may start in a CRM, continue in an accounting system, require validation against HR records, and end with a follow-up task. A healthcare workflow may require preserving clinical information across patient records, forms, and audit documents. The challenge is not whether an agent can find the right button — it's whether it can **preserve intent, transfer information, maintain state, and finish a workflow whose result can be verified**.

Existing benchmarks don't test this well. They typically use simplified websites, isolated single-app tasks, or short interaction sequences. Performance on these benchmarks can create an illusion of progress that disappears when agents face real software.

<div class="sb-table-scroll">
<table class="sb-compare-table">
<thead>
<tr><th>Benchmark</th><th>Real SaaS</th><th>Professional Workflows</th><th>Multi-App</th><th>Long-Horizon (100+ steps)</th><th>Multimodal</th></tr>
</thead>
<tbody>
<tr><td>Mind2Web</td><td class="sb-no">✗</td><td class="sb-no">✗</td><td class="sb-no">✗</td><td class="sb-no">✗</td><td class="sb-no">✗</td></tr>
<tr><td>WebArena</td><td class="sb-no">✗</td><td class="sb-partial">△</td><td class="sb-partial">△</td><td class="sb-no">✗</td><td class="sb-no">✗</td></tr>
<tr><td>VisualWebArena</td><td class="sb-no">✗</td><td class="sb-no">✗</td><td class="sb-partial">△</td><td class="sb-no">✗</td><td class="sb-yes">✓</td></tr>
<tr><td>OSWorld</td><td class="sb-no">✗</td><td class="sb-partial">△</td><td class="sb-yes">✓</td><td class="sb-no">✗</td><td class="sb-yes">✓</td></tr>
<tr><td>WorkArena / WorkArena++</td><td class="sb-yes">✓</td><td class="sb-partial">△ / ✓</td><td class="sb-no">✗</td><td class="sb-no">✗</td><td class="sb-no">✗</td></tr>
<tr><td>TheAgentCompany</td><td class="sb-partial">△</td><td class="sb-yes">✓</td><td class="sb-yes">✓</td><td class="sb-no">✗</td><td class="sb-partial">△</td></tr>
<tr class="sb-row-highlight"><td>SaaS-Bench</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
</tbody>
</table>
</div>

SaaS-Bench is built to fill these gaps. It evaluates computer-use agents inside **real, deployable SaaS systems** — not toy websites — with tasks that require **cross-application coordination, professional domain knowledge, and sustained long-horizon execution**.

<figure class="sb-figure">
    <img src="/static/images/SaaS-Bench/eval.svg" alt="SaaS-Bench evaluation overview" loading="lazy">
    <figcaption class="sb-caption">SaaS-Bench evaluates agents on real SaaS workflows, then verifies final application states and artifacts with weighted checkpoints.</figcaption>
</figure>


## Why SaaS?

Software-as-a-Service systems are where modern digital work happens. CRM platforms manage customer relationships. Accounting systems track invoices and payments. HR systems store employee records and reimbursements. Healthcare systems manage patient data and clinical documentation.

Compared with ordinary websites, SaaS applications are much closer to real deployment environments. They contain **user authentication, database-backed state, business constraints, hidden dependencies, and structured workflows**. A small mistake in one system can silently break a later step in another system. A missing record, a wrong entity type, or an inconsistent date can make the final task fail.

<div class="sb-pillars">
<div class="sb-pillar">
<h3>Dynamic State</h3>
<p>Persistent records, hidden constraints, frontend-backend logic, and changing business state that agents must reason about.</p>
</div>
<div class="sb-pillar">
<h3>Cross-App Workflows</h3>
<p>Real tasks require transferring information across CRM, finance, HR, documents, email, and storage systems.</p>
</div>
<div class="sb-pillar">
<h3>Long-Horizon Execution</h3>
<p>Many workflows unfold across 100+ operations, stressing planning, memory, context propagation, and error recovery.</p>
</div>
</div>

<div class="sb-keyq">
<p>SaaS-Bench asks a direct question: <strong>Can agents operate SaaS systems as reliable professional workers, rather than just browser users?</strong></p>
</div>


## Introducing SaaS-Bench

SaaS-Bench contains **23 real open-source SaaS systems**, organized into **6 professional domains**, with **106 tasks** grounded in realistic work scenarios.

<div class="sb-stats">
<div class="sb-stat"><strong>23</strong><span>Deployable SaaS systems</span></div>
<div class="sb-stat"><strong>6</strong><span>Professional domains</span></div>
<div class="sb-stat"><strong>106</strong><span>Realistic tasks</span></div>
<div class="sb-stat"><strong>74</strong><span>Text-only tasks</span></div>
<div class="sb-stat"><strong>32</strong><span>Multimodal tasks</span></div>
<div class="sb-stat"><strong>93%</strong><span>Multi-app tasks</span></div>
</div>

The six domains cover: **Software Engineering & Project Management**, **Business Operations & Finance**, **Healthcare Administration**, **Team Collaboration & Document Workflow**, **Artisan Agri-Food Supply Chain**, and **Independent Media Creation**. Each domain contains multiple functionally complementary applications that are naturally combined into cross-system workflows.

<figure class="sb-figure">
    <a href="/static/images/SaaS-Bench/task_statistics_v1_1.png" target="_blank" rel="noopener noreferrer">
        <img src="/static/images/SaaS-Bench/task_statistics_v1_1.png" alt="SaaS-Bench task statistics: 106 tasks across six domains, applications per task, and verification checkpoints per task" loading="lazy" decoding="async" width="2987" height="1110">
    </a>
    <figcaption class="sb-caption">Task composition across six domains, applications per task, and verification checkpoints per task (mean 12.8). Open the image for a full-size view.</figcaption>
</figure>

The benchmark is built around three principles:

<div class="sb-principles">
<div class="sb-principle">
<div class="sb-principle-num">1</div>
<h4>Real and Deployable</h4>
<p>SaaS-Bench uses actual SaaS systems with frontend-backend logic, authentication, persistent states, and realistic constraints — not toy websites or static pages. All systems are containerized with Docker. Before each task, the environment resets to a predefined initial state, ensuring reproducibility.</p>
</div>
<div class="sb-principle">
<div class="sb-principle-num">2</div>
<h4>Professional Workflows</h4>
<p>Tasks are not randomly sampled UI actions. They simulate real work: a finance closeout spanning HR, accounting, and CRM; a healthcare merge audit across patient records and documentation; a regression test execution tracked from IDE to project management.</p>
</div>
<div class="sb-principle">
<div class="sb-principle-num">3</div>
<h4>Long-Horizon</h4>
<p>Each task has <strong>12.8 verification checkpoints on average</strong>. Resolving a task requires satisfying every checkpoint, making state tracking, cross-application coordination, and error recovery essential throughout the workflow.</p>
</div>
</div>


## What Does a SaaS-Bench Task Look Like?

Each task is a professional workflow spanning multiple SaaS systems. Expand any case below to see the full task sheet — including requirements, step-by-step instructions, and login credentials.

<div class="sb-cases">
<div class="sb-cases-header">Case Gallery — 6 Domains, 6 Workflows</div>

<details class="sb-case-acc">
<summary>
<span class="sb-case-acc-domain">Business Operations</span>
<span class="sb-case-acc-title">Employee Expense Reimbursement Cycle</span>
<span class="sb-case-acc-apps"><span>Frappe HRMS</span><span>BigCapital</span><span>Twenty</span></span>
</summary>
<div class="sb-case-acc-body">
<p>Cross-app finance closeout spanning HR expense approval, accounting bill creation and payment, and CRM documentation.</p>
<div class="sb-case-acc-scroll">
<p><strong>Task Requirements:</strong></p>
<p>Process a complete employee expense reimbursement cycle spanning HR expense claim approval, accounting expense recording and payment, and CRM documentation. In Frappe HRMS: (1) Navigate to the Expense Claim list and open the pending expense claim 'HR-EXP-2026-00006' submitted by employee 'Mohammed Farooq' (HR-EMP-00015). Verify it contains exactly three line items totaling ₹10,350.00. The line items are: 'Travel' for ₹8,500.00, 'Food' for ₹1,500.00, and 'Calls' for ₹350.00. (2) Approve the expense claim. (3) Navigate to the Unpaid Expense Claim report and verify that 'Mohammed Farooq' appears with an unpaid amount of ₹10,350.00 as an intermediate confirmation that approval succeeded. In BigCapital: (4) Create a vendor named 'Mohammed Farooq Reimbursement' with email 'mohammed.farooq@gmail.com'. (5) Ensure that three items exist in BigCapital corresponding to the expense types: 'Travel', 'Food', and 'Calls'. If any of these items do not already exist, create them as new items with the respective names. (6) Create a bill (purchase invoice) dated 2026-03-20 for vendor 'Mohammed Farooq Reimbursement' with three line entries referencing the items created/confirmed above: 'Travel' for ₹8,500.00, 'Food' for ₹1,500.00, and 'Calls' for ₹350.00. The bill total must equal ₹10,350.00. Approve (open) the bill. (7) Record a Payment Made dated 2026-04-05 against the bill for ₹10,350.00 from account 'Bank Account'. (8) Navigate to the A/P Aging Summary report filtered to as-of date 2026-04-05 and verify 'Mohammed Farooq Reimbursement' shows a zero balance (confirming the bill is fully paid). In Twenty CRM: (9) Create a task titled 'Expense reimbursement processed — Mohammed Farooq' with due date 2026-04-05 and body: 'Expense claim HR-EXP-2026-00006 approved and paid. Total: ₹10,350.00. Items: Travel (₹8,500.00), Food (₹1,500.00), Calls (₹350.00). Payment made from Bank Account on 2026-04-05.' Mark the task as complete.</p>
<p><strong>Steps:</strong></p>
<ol>
<li>In Frappe HRMS, open expense claim 'HR-EXP-2026-00006' for 'Mohammed Farooq' (HR-EMP-00015) and verify it has exactly three line items totaling ₹10,350.00: 'Travel' (₹8,500.00), 'Food' (₹1,500.00), 'Calls' (₹350.00).</li>
<li>Approve the expense claim.</li>
<li>Navigate to the Unpaid Expense Claim report and confirm 'Mohammed Farooq' appears with unpaid amount ₹10,350.00 as an intermediate validation that the claim was approved correctly.</li>
<li>In BigCapital, create a vendor named 'Mohammed Farooq Reimbursement' with email 'mohammed.farooq@gmail.com'.</li>
<li>Ensure three items exist in BigCapital with names 'Travel', 'Food', and 'Calls'. If any item does not already exist, create it as a new item with the corresponding name.</li>
<li>Create a bill dated 2026-03-20 for vendor 'Mohammed Farooq Reimbursement' with three line entries referencing the items above: 'Travel' for ₹8,500.00, 'Food' for ₹1,500.00, 'Calls' for ₹350.00. The bill total must equal ₹10,350.00. Approve (open) the bill.</li>
<li>Record a Payment Made of ₹10,350.00 against the bill from 'Bank Account' dated 2026-04-05.</li>
<li>View the A/P Aging Summary as of 2026-04-05 and confirm 'Mohammed Farooq Reimbursement' has zero balance.</li>
<li>In Twenty CRM, create a task titled 'Expense reimbursement processed — Mohammed Farooq' with the full reimbursement details in the body, set due date to 2026-04-05, and mark the task as complete.</li>
</ol>
</div>
<div class="sb-case-acc-creds">
<strong>Credentials:</strong> frappe-hrms: Administrator / admin · bigcapital: admin@bigcapital.local / admin123 · twenty: jane.austen@apple.dev / tim@apple.dev
</div>
</div>
</details>

<details class="sb-case-acc">
<summary>
<span class="sb-case-acc-domain">Healthcare</span>
<span class="sb-case-acc-title">Duplicate Patient Merge Audit</span>
<span class="sb-case-acc-apps"><span>OpenEMR</span><span>OnlyOffice</span></span>
</summary>
<div class="sb-case-acc-body">
<p>Clinical data integrity workflow: identify duplicate patient records, execute a merge, verify combined clinical data, and produce a formal HIPAA-compliant audit report.</p>
<div class="sb-case-acc-scroll">
<p><strong>Task Requirements:</strong></p>
<p>As a Health IT Manager, execute a duplicate patient record identification, merge documentation, and system audit workflow: (1) In OpenEMR, navigate to the Manage Duplicate Patients page and scan for potential duplicate patient records. Identify the duplicate pair: Latoyia Kertzmann (pid 158) and Latoyia Kertzmann (pid 249) based on matching demographics. Before merging, open both patient charts and document the following from each: active medical problems (from Issues), active medications (from Issues), and any allergy entries. Navigate to the Merge Patients page, select Latoyia Kertzmann (pid 249) as the source and Latoyia Kertzmann (pid 158) as the target, and execute the merge. After merging, open the merged patient record (Latoyia Kertzmann (pid 158)) and verify the combined Issues list contains all problems, medications, and allergies from both records. Navigate to System Logs and filter by today's date and event type containing 'merge' — record the log entry timestamp and user. Then navigate to the Address Book and add a new contact entry for the specialist 'Dr. Yusuf Abdelrahman' with specialty 'Gastroenterology', phone '339-555-0617', and address '1153 Centre Street, Suite 210, Jamaica Plain, MA 02130'. (2) In OnlyOffice, create a document titled 'Kertzmann Duplicate Patient Merge Audit Report - 2026-03-22' structured as a formal Patient Record Merge Audit Report: header with clinic name 'Metro West Regional Medical Clinic' and date; Merge Summary section with source record (Latoyia Kertzmann (pid 249)) and target record (Latoyia Kertzmann (pid 158)), merge date, and authorizing user 'Administrator'; Pre-Merge Data Comparison section with a table containing columns: Data Element, Source Record Value, Target Record Value, Post-Merge Value — populate rows for each medical problem, medication, and allergy from both records; System Log Verification section citing the audit log entry timestamp and confirming log integrity; Address Book Update section documenting the new specialist entry; and a Compliance Certification section with text 'I hereby certify that this duplicate patient record merge has been executed in full compliance with HIPAA data integrity requirements under 45 CFR §164.312(c), the ONC Health IT Certification Program record-keeping standards, and the clinic's Health Information Management policy HIM-022; all source-record clinical data has been preserved in the secure audit log for the mandated retention period and is available for regulatory inspection.' and signature block for 'Administrator'. (3) In OnlyOffice, create a second document (a spreadsheet) titled 'Duplicate Patient Record Merge Audit Tracker - March 2026' with columns: Merge ID, Source Patient, Target Patient, Merge Date, Data Elements Transferred, Verified By, Audit Log Confirmed (Yes/No), Notes. Populate one row for the completed merge. Add a second sheet 'Outside Specialist Contact Registry' with columns: Specialist Name, Specialty, Phone, Address, Date Added — populate with the specialist added in step 1.</p>
<p><strong>Steps:</strong></p>
<ol>
<li>In OpenEMR, navigate to Manage Duplicate Patients and scan for duplicates; identify the pair Latoyia Kertzmann (pid 158) and Latoyia Kertzmann (pid 249)</li>
<li>Open both patient charts and document active medical problems, medications, and allergies from each patient's Issues list</li>
<li>Navigate to Merge Patients, set Latoyia Kertzmann (pid 249) as source and Latoyia Kertzmann (pid 158) as target, and execute the merge</li>
<li>Open the merged record for Latoyia Kertzmann (pid 158) and verify the combined Issues list contains all data from both records</li>
<li>Navigate to System Logs, filter by today's date for merge events, and record the log entry timestamp and user</li>
<li>Navigate to the Address Book and add specialist 'Dr. Yusuf Abdelrahman' with specialty, phone, and address</li>
<li>In OnlyOffice, create a document titled 'Kertzmann Duplicate Patient Merge Audit Report - 2026-03-22' with merge summary, pre-merge data comparison table, system log verification, address book update, and compliance certification sections</li>
<li>In OnlyOffice, create a spreadsheet titled 'Duplicate Patient Record Merge Audit Tracker - March 2026' with a merge tracking sheet and a contacts sheet, populated with the merge data and specialist entry</li>
</ol>
</div>
<div class="sb-case-acc-creds">
<strong>Credentials:</strong> openemr: admin / pass · onlyoffice: admin@onlyoffice.local / NewAdmin123!
</div>
</div>
</details>

<details class="sb-case-acc">
<summary>
<span class="sb-case-acc-domain">Software Eng.</span>
<span class="sb-case-acc-title">Regression Test Execution Audit</span>
<span class="sb-case-acc-apps"><span>code-server</span><span>Baserow</span><span>OpenProject</span></span>
</summary>
<div class="sb-case-acc-body">
<p>Test evidence to project tracking: run tests in IDE, record structured results in a database, and create a project management work package.</p>
<div class="sb-case-acc-scroll">
<p><strong>Task Requirements:</strong></p>
<p>Run a test execution audit for the data-analyzer and todo-api projects. In code-server, open the integrated terminal, navigate into each project directory, and execute the project's test command (pytest tests/test_analyzer.py -v for data-analyzer and make test for todo-api). Parse each run's output and record: tests passed, tests failed, and pass rate percentage (passed / (passed + failed) * 100, rounded to two decimals). Create a Baserow database "Regression Test Audit March 2026" with a table "Test Execution Audit" containing fields Project (primary text), Tests Passed (number), Tests Failed (number), Pass Rate (number with 2 decimals), Pass/Fail (single-select: Pass/Fail), Captured At (date). Add exactly two rows — one per project — using the measured counts; set Pass/Fail to Pass if the pass rate &gt;= 85.00 else Fail. In OpenProject project "product-catalog", create a single work package of type Task with subject "Test Execution Audit Report" and a description containing the measured pass rates, passed/failed counts, and whether each project passed or failed against the threshold 85.00.</p>
<p><strong>Steps:</strong></p>
<ol>
<li>In code-server terminal, cd into data-analyzer and run pytest tests/test_analyzer.py -v, then parse the output to extract the number of tests passed and tests failed, and compute the pass rate percentage</li>
<li>Repeat for todo-api using make test</li>
<li>In Baserow, create "Regression Test Audit March 2026" with the "Test Execution Audit" schema (Project, Tests Passed, Tests Failed, Pass Rate, Pass/Fail, Captured At) and add exactly two rows populated with measured counts, computed pass rates, and Pass/Fail evaluated against 85.00</li>
<li>In OpenProject "product-catalog", create a single Task work package with subject "Test Execution Audit Report" and a description listing, for each of the two projects, the measured pass rate, passed/failed counts, and whether it passed or failed against the threshold 85.00</li>
</ol>
</div>
<div class="sb-case-acc-creds">
<strong>Credentials:</strong> code-server: (no username) / 8a128206e2177bce1e48e565 · baserow: admin@example.com / Admin1234 · openproject: admin / AdminPass123!
</div>
</div>
</details>

<details class="sb-case-acc">
<summary>
<span class="sb-case-acc-domain">Collaboration</span>
<span class="sb-case-acc-title">Cross-Team Status Distribution</span>
<span class="sb-case-acc-apps"><span>OnlyOffice</span><span>ownCloud</span><span>Roundcube</span></span>
</summary>
<div class="sb-case-acc-body">
<p>Document creation, cloud sharing with tiered access, and email distribution with read receipt tracking.</p>
<div class="sb-case-acc-scroll">
<p><strong>Task Requirements:</strong></p>
<p>As a Cross-Department Project Coordinator, compile a cross-team status report and distribute it with tiered access: (1) In OnlyOffice, create a new document titled 'Cross-Team Bi-Weekly Status Report - W26-W27 2026' in Common Documents. Structure it with heading 'Cross-Team Bi-Weekly Status Report', a section 'Report Period' with text 'Bi-Weekly Period: June 22 – July 3, 2026', a section 'Engineering Updates' containing a table with 3 columns (Author, Update, Date), a section 'Marketing Updates' with the same table structure, a section 'Product Updates' with the same table structure, and a final section 'Cross-Team Risks' with text 'Primary risks include recurring incident postmortem findings not being actioned within SLA, delayed brand asset approvals impacting campaign timelines, and UX research insights arriving too late in the sprint cycle to influence design decisions.'. Share the document with user 'jun.chen' for viewing and user 'amit.singh' for editing. (2) In ownCloud, create a folder named 'Leadership_BiWeekly_Reports'. Inside it, create a subfolder named '2026-P13-P14'. Create a text file named 'exec_summary.txt' inside '2026-P13-P14' with content 'Executive Summary - Bi-Weekly Period June 22 – July 3, 2026: Engineering resolved 4 P1 incidents and delivered comprehensive postmortems; runbook updates are underway. Brand Design finalized the refreshed logo system and shipped updated style guides across all marketing channels. UX Research completed 3 rounds of user interviews, producing actionable insights that will shape the upcoming onboarding redesign. Coordination between teams remains strong; follow-ups needed on incident action-item tracking and brand asset handoff cadence.'. Add the tag 'biweekly-leadership' to 'Leadership_BiWeekly_Reports'. View the activity feed to confirm the sharing activity appears. (3) In Roundcube, navigate to Settings &gt; Preferences &gt; Composing Messages and set the auto-save draft interval to '5 minutes'. Then compose an email to ['jun.chen@onlyoffice.local', 'amit.singh@onlyoffice.local', 'laura.brown@onlyoffice.local'] with BCC to 'records@onlyoffice.local', subject 'Bi-Weekly Cross-Team Status Report - June 22 to July 3, 2026', and body summarizing the key findings from each department. Request a read receipt (MDN) on the email. Send the email. After sending, navigate to the Sent folder, open the sent email, and verify the subject line matches.</p>
<p><strong>Steps:</strong></p>
<ol>
<li>In OnlyOffice, create a structured status report document in Common Documents with per-department table structures, and share with specific users at different permission levels</li>
<li>In ownCloud, create a hierarchical folder structure for reports, add an executive summary text file, tag the folder, and verify activity feed</li>
<li>In Roundcube, configure composing preferences, then compose and send a leadership summary email with BCC and read receipt request, and verify the sent email in the Sent folder</li>
</ol>
</div>
<div class="sb-case-acc-creds">
<strong>Credentials:</strong> mattermost: admin / SeedAdmin1pass · onlyoffice: admin@onlyoffice.local / NewAdmin123! · owncloud: admin / admin · roundcubemail: james.whitfield@mail.local / User123!
</div>
</div>
</details>

<details class="sb-case-acc">
<summary>
<span class="sb-case-acc-domain">Agriculture</span>
<span class="sb-case-acc-title">Batch Harvest Traceability Audit</span>
<span class="sb-case-acc-apps"><span>Grocy</span><span>FarmOS</span></span>
</summary>
<div class="sb-case-acc-body">
<p>Inventory traceability: cross-reference batch numbers between warehouse management and field records, flagging discrepancies.</p>
<div class="sb-case-acc-scroll">
<p><strong>Task Requirements:</strong></p>
<p>Iterate through all products in Grocy that have a batch number assigned in their 'batch_number' custom userfield. For each batch number, query FarmOS to see if a corresponding harvest log exists where the harvest log's name is the exact batch number. If a Grocy product's batch number has no match in FarmOS, edit the Grocy product to append 'AUDIT FLAG: Missing FarmOS harvest log' to its description field.</p>
<p><strong>Steps:</strong></p>
<ol>
<li>Retrieve all batch numbers from Grocy products' custom userfields.</li>
<li>Cross-reference each batch number against FarmOS harvest log names.</li>
<li>For any unmatched batch, append the discrepancy flag to the Grocy product description.</li>
</ol>
</div>
<div class="sb-case-acc-creds">
<strong>Credentials:</strong> grocy: admin / admin · farmos: admin / admin123456
</div>
</div>
</details>

<details class="sb-case-acc">
<summary>
<span class="sb-case-acc-domain">Media</span>
<span class="sb-case-acc-title">Research Note from an Academic PDF</span>
<span class="sb-case-acc-apps"><span>PDF input</span><span>SiYuan</span></span>
</summary>
<div class="sb-case-acc-body">
<p>Knowledge synthesis: read an academic PDF and create a structured research note with abstract summary, core arguments, and integration ideas.</p>
<div class="sb-case-acc-scroll">
<p><strong>Task Requirements:</strong></p>
<p>Read the provided PDF paper on Collaborative Knowledge Creation. In SiYuan, create a new document named 'Research: Collaborative IR' in the 'Academic Sources' notebook. Structure the document with three sections: 'Abstract Summary' (a detailed summary in your own words), 'Core Arguments' (a bulleted list of at least 3 main points from the paper), and 'Podcast Integration Ideas' (2 specific ways this connects to our media consumption habits). Ensure the document uses proper Markdown heading levels (H2) for the sections.</p>
<p><strong>Steps:</strong></p>
<ol>
<li>Analyze the provided academic PDF to extract its abstract and core arguments.</li>
<li>Create the required notebook and document in SiYuan.</li>
<li>Draft the structured summary, arguments, and integration ideas using H2 headings.</li>
</ol>
<p><strong>Input files:</strong></p>
<p><code>tasks/multi-m/inputs/siyuan_paper_001.pdf</code> — Collaborative Knowledge Creation and Management in Information Retrieval (application/pdf)</p>
</div>
<div class="sb-case-acc-creds">
<strong>Credentials:</strong> siyuan: accessAuthCode=siyuan6037
</div>
</div>
</details>

</div>

<figure class="sb-figure">
    <img src="/static/images/SaaS-Bench/teaser.svg" alt="Representative healthcare workflow spanning multiple SaaS systems" loading="lazy">
    <figcaption class="sb-caption">A representative workflow: task instructions become coordinated actions across multiple SaaS systems, and outcomes are verified by task-specific code.</figcaption>
</figure>


## How Tasks Are Built

SaaS-Bench tasks are not produced by simply asking an LLM to invent browser tasks.

The construction follows a four-stage pipeline. Starting from professional domains and occupational roles (project managers, finance operators, healthcare administrators), **workflow seeds** define task goals, domain context, required applications, and verification requirements. An LLM Builder then proposes task templates and concrete instances, but every candidate passes through a **Builder-Challenger-Refiner** loop: human expert Challengers inspect for ambiguity, executability, and professional realism; human Refiners decide whether to accept, revise, or reject.

<figure class="sb-figure">
    <img src="/static/images/SaaS-Bench/synthesis.svg" alt="Task synthesis pipeline" loading="lazy">
    <figcaption class="sb-caption">Tasks move from domain seeds through the Builder-Challenger-Refiner loop, then through static and execution checks. Only 45% of candidate tasks survive the full process.</figcaption>
</figure>

After the synthesis loop, two more quality gates apply. A **static check** evaluates professionalism, cross-app naturalness, dependency depth, verifiability, and narrative coherence — and flags anti-patterns like using a CRM as a mere dumping ground or creating complexity through over-specification. An **execution check** has experts run the task, inspect the trajectory, and verify alignment between the instructions and the verifier.

**Only 45% of candidate tasks survive the full process.** This turns SaaS-Bench from a collection of plausible prompts into a benchmark of executable, verifiable professional workflows.


## Evaluation Protocol

SaaS-Bench tasks are designed around how people perform real professional work in SaaS systems. Each task specifies a practical objective and the records or artifacts needed for completion. The evaluation checks whether the resulting application state satisfies those requirements.

SaaS-Bench reports two metrics:

<div class="sb-metric-grid">
<div class="sb-metric">
<div class="sb-metric-name">Checkpoint Score</div>
<p>Weighted fraction of passed checkpoints. Measures <strong>partial progress</strong> — how far the agent got before failing.</p>
</div>
<div class="sb-metric">
<div class="sb-metric-name">Resolved Score</div>
<p>1 only when <strong>all</strong> checkpoints pass; 0 otherwise. The strict measure: did the agent <strong>finish the job</strong>?</p>
</div>
</div>

<div class="sb-callout">
<p>This distinction matters. In long professional workflows, an agent may complete early steps correctly but fail when context must be preserved, transferred, or propagated across systems. Checkpoint Score shows partial capability; Resolved Score shows whether the agent truly completed the job.</p>
</div>


<h2 id="saas-bench-v11-results">Results: SaaS-Bench v1.1</h2>

<div class="sb11">
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
</div>

## Where Agents Fail: Four Structural Challenges

The aggregate numbers tell us agents struggle. The case studies tell us **why**.

By analyzing individual verification outcomes and execution trajectories, we identify four failure modes that explain the low resolved scores. These are not random errors — they are structural properties of real-world SaaS workflows that current CUA designs are ill-equipped to handle.


### 1. The Fragility of Long-Horizon Completion

The most striking pattern is the gap between checkpoint scores (30–43%) and resolved scores (&lt;4%). If each checkpoint has an independent pass probability <em>p</em>, the probability of all <em>N</em> checkpoints passing is <em>p<sup>N</sup></em>. Even with p = 0.95 across 12 checkpoints, the resolved probability is only 0.95<sup>12</sup> ≈ 0.54. For the typical SaaS-Bench task with 10–20 checkpoints and empirical per-checkpoint pass rates well below 0.95, <strong>near-zero resolved scores are a mathematical inevitability</strong>.

<div class="sb-case-box sb-accent-red">
<span class="sb-case-label">Expense Reimbursement</span>
<h4>Near-Miss with Undetected Date Error</h4>
<p>Opus 4.6 scored <strong>0.80</strong> (16/20 checkpoint weight) on a Business Operations reimbursement task spanning HRMS, BigCapital, and Twenty CRM. It correctly approved the expense claim, created the vendor, recorded all line items, completed the payment, and created the CRM task.</p>
<p>But the bill was created with date <strong>2026-03-19</strong> instead of the required <strong>2026-03-20</strong>. This single uncorrected date is sufficient to prevent task resolution despite an 80% checkpoint score.</p>
<div class="sb-verdict mixed">
✓ HRMS claim approved · ✓ Vendor created · ✓ Line items correct · ✓ Payment settled · ✓ CRM task created<br/>
✗ Bill date = 2026-03-19 (expected 2026-03-20) — task NOT resolved
</div>
<p><strong>The implication:</strong> incremental improvements in per-checkpoint reliability yield <strong>superlinear</strong> gains in end-to-end completion. Current agent training paradigms, which typically optimize step-level rewards, are not designed to exploit this property.</p>
</div>

All models show a monotonic decline from early to late checkpoints, confirming the long-horizon bottleneck:

<figure class="sb-figure">
    <img src="/static/images/SaaS-Bench/appx_complexity_combined.svg" alt="Score vs task complexity" loading="lazy">
    <figcaption class="sb-caption">Performance drops as tasks involve more applications, longer trajectories, and more verification checkpoints — exactly the regime SaaS-Bench targets.</figcaption>
</figure>


### 2. Error Cascading Across Applications

SaaS-Bench workflows have DAG dependencies: intermediate outputs serve as inputs to downstream operations. A single semantic error early in the chain can propagate silently and cause multiple downstream checkpoints to fail.

<div class="sb-case-box sb-accent-blue">
<span class="sb-case-label">Customer-Centric Workflow</span>
<h4>Entity-Type Mismatch Cascades Through Financial Records</h4>
<p>This task spans Twenty CRM, BigCapital, and Pretix (18 checkpoints, weight 33). All BigCapital financial records must be anchored to a <strong>company customer</strong> named Arcturus Digital.</p>
<p>Opus 4.6 reached BigCapital's New Customer form and filled in both personal name fields (First: Elena, Last: Vasquez) <strong>and</strong> a company name (Arcturus Digital). This created an <strong>individual customer</strong> named Elena Vasquez — not a company customer named Arcturus Digital. The agent didn't notice: the display label showed "Elena Vasquez (Arcturus Digital)" with the expected $55,000 balance, and the agent read this as confirmation of correct completion.</p>
<div class="sb-verdict fail">
✗ Check 7: BigCapital customer "Arcturus Digital" — not found (chokepoint, weight 1)<br/>
✗ Checks 10–12: Invoices and payment — not found (depends on Check 7, weight 6)<br/>
✗ Check 14: Customer balance = $0 (expected $55,000, depends on Check 7, weight 3)<br/>
✗ Checks 15–18: All Pretix checks — event not created (weight 6)<br/><br/>
True cost of one entity-type error: <strong>10 out of 33 points (30%)</strong>, though the chokepoint check itself accounts for only 3%.
</div>
<p><strong>Seven of nine models</strong> failed to create Arcturus Digital as a company customer. The three that succeeded still failed on downstream financial checks. <strong>No model achieved a resolved score on this task.</strong></p>
<p>The error is invisible during execution because the UI surface shows a plausible-looking result. Handling such cases requires agents to maintain an explicit model of how application data schemas map task-level concepts ("client", "customer") to application-specific entity types — a capability current agents do not possess.</p>
</div>


### 3. Agents Don't Know When They've Failed

Current CUA frameworks give agents an internal reasoning trace — evaluation, memory, and next-goal fields — that lets them assess their own progress. But are these self-assessments reliable?

<div class="sb-case-box sb-accent-yellow">
<span class="sb-case-label">Expense Reimbursement (continued)</span>
<h4>Claimed Success Despite Verification Failure</h4>
<p>Returning to the expense task: at <strong>step 124</strong>, Opus 4.6 correctly identified the bill date was wrong (2026-03-19 instead of 2026-03-20) and planned a correction. But 41 steps later, its internal evaluation shifted to "Success" — the agent assumed the fix worked <strong>without re-checking the field</strong>.</p>
<p>At task termination (step 210), the agent declared the bill was "dated 2026-03-20" — the <strong>intended</strong> date, not the <strong>actual</strong> date. The summary drew from planned intentions rather than observed results.</p>
<p>This reveals two layers of failure:</p>
<ol>
<li><strong>Absent re-verification.</strong> The agent recognized an error, attempted a fix, then assumed success without closing the verification loop. Humans naturally re-verify after corrective actions — refreshing a page, re-reading a field. The agent did not.</li>
<li><strong>Overconfident summarization.</strong> The final output claimed a state that was flagged as incorrect 86 steps earlier. The termination summary is more aspiration than observation.</li>
</ol>
<p><strong>Implication:</strong> A more robust architecture needs explicit <strong>outcome verification steps</strong> — re-reading a field after submission, querying a record after creation — before marking a subtask as complete.</p>
</div>


### 4. A Single Run Is Not Enough

Agent evaluation commonly reports single-run (pass@1) performance. Our results show this can be highly misleading.

<div class="sb-case-box sb-accent-red">
<span class="sb-case-label">HR Grievance Workflow</span>
<h4>0.00 to 0.68 Across Three Runs of the Same Model</h4>
<p>Claude Sonnet 4.6 was evaluated three times on the same task with the same initial state:</p>
<ul>
<li><strong>Run 2:</strong> Score 0.000 — complete failure to engage</li>
<li><strong>Run 0:</strong> Score 0.214 — progressed through ERPNext but stalled</li>
<li><strong>Run 1:</strong> Score 0.679 — completed ERPNext, both expenses, and all three CRM follow-up tasks</li>
</ul>
<p>The range from total failure to substantial completion cannot be attributed to environmental stochasticity — the SaaS environment is identical across runs. The root cause is <strong>path dependence</strong>: at critical decision points, small differences in sampling lead to fundamentally different trajectories. Once an agent commits to a suboptimal path (e.g., spending 50 steps struggling with an unfamiliar UI element), the remaining step budget may be insufficient to recover.</p>
<p><strong>For evaluation:</strong> reporting only pass@1 can misrepresent agent capability. Multi-run metrics provide a substantially more informative assessment.</p>
<p><strong>For deployment:</strong> production CUA systems would benefit from retry mechanisms, ensemble strategies, or checkpoint-based recovery that mitigate unfavorable early-trajectory decisions.</p>
</div>


<div style="margin-top: 48px; padding: 20px 24px; border: 2px solid #1a1a1a; border-left: 5px solid #1565C0; border-radius: 3px; background: #fff;">

Citation: If you find SaaS-Bench useful in your research, please kindly cite:

<pre style="background: #1a1a1a; color: #e2e8f0; padding: 16px; border-radius: 3px; overflow-x: auto; font-size: 12px;">
@misc{shi2026saasbenchcomputeruseagentsleverage,
  title = {SaaS-Bench: Can Computer-Use Agents Leverage Real-World SaaS to Solve Professional Workflows?},
  author = {Kean Shi and Zihang Li and Tianyi Ma and Zengji Tu and Jialong Wu and Xinbo Xu and Qingyao Yang and Ruoyu Wu and Weichu Xie and Ming Wu and Jason Zeng and Michael Heinrich and Elvis Zhang and Liang Chen and Kuan Li and Baobao Chang},
  year = {2026},
  eprint = {2605.15777},
  archivePrefix = {arXiv},
  primaryClass = {cs.AI},
  url = {https://arxiv.org/abs/2605.15777},
}</pre>

</div>


<!-- Floating Table of Contents -->
<nav class="sb-toc" id="sb-toc">
<div class="sb-toc-toggle" id="sb-toc-toggle" title="Toggle TOC">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
<div class="sb-toc-title">On This Page</div>
<div class="sb-toc-progress"><div class="sb-toc-progress-bar" id="sb-progress"></div></div>
<ul class="sb-toc-list">
<li class="sb-toc-item"><a href="#from-using-browsers-to-doing-real-work" class="sb-toc-link">From Browsers to Work</a></li>
<li class="sb-toc-item"><a href="#why-saas" class="sb-toc-link">Why SaaS?</a></li>
<li class="sb-toc-item"><a href="#introducing-saas-bench" class="sb-toc-link">Introducing SaaS-Bench</a></li>
<li class="sb-toc-item"><a href="#what-does-a-saas-bench-task-look-like" class="sb-toc-link">Workflow Examples</a></li>
<li class="sb-toc-item"><a href="#how-tasks-are-built" class="sb-toc-link">Task Construction</a></li>
<li class="sb-toc-item"><a href="#evaluation-protocol" class="sb-toc-link">Evaluation</a></li>
<li class="sb-toc-item"><a href="#saas-bench-v11-results" class="sb-toc-link">Results</a></li>
<li class="sb-toc-item"><a href="#where-agents-fail-four-structural-challenges" class="sb-toc-link">Case Studies</a></li>
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
        var toc = document.getElementById('sb-toc');
        var bar = document.getElementById('sb-progress');
        var links = document.querySelectorAll('.sb-toc-link');
        var toggle = document.getElementById('sb-toc-toggle');
        if (!toc || !bar || !links.length) return;

        if (toggle) toggle.addEventListener('click', function() { toc.classList.toggle('collapsed'); });

        function fit() {
            var cw = Math.min(980, window.innerWidth * 0.9);
            var space = (window.innerWidth - cw) / 2;
            if (space < 200) { toc.style.display = 'none'; return; }
            toc.style.display = '';
            var w = Math.min(200, space - 20);
            toc.style.width = Math.max(160, w) + 'px';
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
