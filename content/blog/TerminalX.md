Title: Terminal-X: Evaluate Coding Agents across Depth, Iteration, and Evolution in Terminal Environments
Date: 2026-05-02
Summary: Terminal-X evaluates coding agents in executable terminal tasks. It combines DeepTerminalBench for single-shot depth, EvoCode-Bench for multi-turn iteration, and RoadmapBench for version-upgrade work on real repositories.
HeaderImage: /static/images/terminalx/logo_tx.jpg


<style>
/* ============================================
   Terminal-Bench Native Blog Styles
   Scoped with tb- prefix
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

:root {
    --tb-font-display: 'Crimson Pro', 'Georgia', serif;
    --tb-font-body: 'DM Sans', 'Inter', 'Segoe UI', sans-serif;
    --tb-font-mono: 'JetBrains Mono', ui-monospace, monospace;
    --tb-font-serif: 'Crimson Pro', Georgia, serif;
    --tb-ink: #0c1222;
    --tb-ink-soft: #334155;
    --tb-ink-muted: #64748b;
    --tb-surface: #ffffff;
    --tb-surface-raised: #f8fafc;
    --tb-surface-sunken: #f1f5f9;
    --tb-border: #e2e8f0;
    --tb-accent: #0d9488;
    --tb-accent-light: #14b8a6;
    --tb-accent-lighter: #ccfbf1;
    --tb-accent-dark: #0f766e;
    --tb-accent-bg: rgba(13, 148, 136, 0.06);
    --tb-blue: #2563eb;
    --tb-blue-bg: rgba(37, 99, 235, 0.06);
    --tb-green: #059669;
    --tb-green-bg: rgba(5, 150, 105, 0.06);
    --tb-amber: #d97706;
    --tb-amber-bg: rgba(217, 119, 6, 0.06);
    --tb-rose: #e11d48;
    --tb-rose-bg: rgba(225, 29, 72, 0.06);
    --tb-violet: #7c3aed;
    --tb-violet-bg: rgba(124, 58, 237, 0.06);
    --tb-radius-sm: 8px;
    --tb-radius-md: 14px;
    --tb-radius-lg: 20px;
    --tb-shadow-sm: 0 1px 3px rgba(15,23,42,0.04), 0 1px 2px rgba(15,23,42,0.06);
    --tb-shadow-md: 0 4px 16px rgba(15,23,42,0.06), 0 2px 4px rgba(15,23,42,0.04);
    --tb-shadow-lg: 0 12px 40px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04);
}

/* --- Animations --- */
@keyframes tb-fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
}

@keyframes tb-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@keyframes tb-slideInLeft {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
}

@keyframes tb-scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to   { opacity: 1; transform: scale(1); }
}

.tb-animate {
    opacity: 0;
    animation: tb-fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.tb-animate-delay-1 { animation-delay: 0.1s; }
.tb-animate-delay-2 { animation-delay: 0.2s; }
.tb-animate-delay-3 { animation-delay: 0.3s; }
.tb-animate-delay-4 { animation-delay: 0.4s; }

@media (prefers-reduced-motion: reduce) {
    .tb-animate, [class*="tb-animate"] {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
    }
}

/* --- Section Divider --- */
.tb-section-rule {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--tb-border) 20%, var(--tb-accent) 50%, var(--tb-border) 80%, transparent);
    margin: 56px 0;
    opacity: 0.5;
}

/* --- Heading Hierarchy Override --- */
.markdown h1 {
    font-size: 1.8em !important;
    font-style: normal !important;
    font-weight: 800;
    color: var(--tb-ink);
    margin-top: 48px;
    margin-bottom: 20px;
    letter-spacing: 0;
}

.markdown h2 {
    font-size: 1.35em !important;
    font-weight: 700;
    color: var(--tb-ink);
    margin-top: 36px;
    margin-bottom: 14px;
}

.markdown h3 {
    font-size: 1.1em !important;
    font-weight: 600;
    color: var(--tb-ink-soft);
    margin-top: 28px;
    margin-bottom: 10px;
}

/* --- Hero --- */
.tb-hero {
    text-align: center;
    padding: 28px 0 48px;
    margin-bottom: 10px;
    position: relative;
}

.tb-hero::before {
    content: '';
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    background: none;
    pointer-events: none;
    z-index: 0;
}

.tb-hero > * { position: relative; z-index: 1; }

.tb-hero .tb-tagline {
    font-family: var(--tb-font-serif);
    font-size: 1.45em;
    font-weight: 400;
    color: var(--tb-ink-soft);
    max-width: 820px;
    margin: 0 auto 28px;
    line-height: 1.55;
    font-style: italic;
}

.tb-hero .tb-tagline strong {
    color: var(--tb-accent);
    font-weight: 600;
    font-style: normal;
}

.tb-hero .tb-subtitle {
    font-family: var(--tb-font-body);
    font-size: 1.0em;
    color: var(--tb-ink-muted);
    max-width: 780px;
    margin: 0 auto 0;
    line-height: 1.7;
}

.tb-hero-links {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 24px;
}

.tb-hero-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border: 1px solid var(--tb-border);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s ease;
    text-decoration: none !important;
    color: var(--tb-ink) !important;
}

.tb-hero-link:hover {
    background: var(--tb-surface-sunken);
    border-color: var(--tb-accent);
    text-decoration: none !important;
}

.tb-hero-link svg { width: 18px; height: 18px; }

.tb-link-badge {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 2px 6px;
    border-radius: 4px;
    background: var(--tb-surface-sunken);
    color: var(--tb-ink-muted);
    margin-left: 4px;
}

/* --- Epigraph / Key Insight --- */
.tb-epigraph {
    max-width: 720px;
    margin: 0 auto 48px;
    padding: 28px 36px;
    border-left: 4px solid var(--tb-accent);
    background: linear-gradient(135deg, var(--tb-accent-bg) 0%, rgba(5,150,105,0.03) 100%);
    border-radius: 0 var(--tb-radius-md) var(--tb-radius-md) 0;
    font-family: var(--tb-font-body);
    font-size: 1.05em;
    line-height: 1.85;
    color: var(--tb-ink);
    position: relative;
    text-align: left;
}

.tb-epigraph::before {
    content: '\201C';
    position: absolute;
    top: -8px;
    left: 16px;
    font-size: 4em;
    color: var(--tb-accent);
    opacity: 0.12;
    line-height: 1;
    pointer-events: none;
}

/* --- Stat Cards --- */
.tb-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin: 32px 0;
}

@media (max-width: 768px) {
    .tb-stats-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
    .tb-stats-grid { grid-template-columns: 1fr; gap: 14px; }
}

/* Mobile-friendly hero links */
@media (max-width: 640px) {
    .tb-hero-links {
        gap: 10px;
        margin-top: 18px;
    }
    .tb-hero-link {
        padding: 8px 14px;
        font-size: 13px;
        gap: 6px;
    }
    .tb-hero-link svg {
        width: 15px;
        height: 15px;
    }
    .tb-hero {
        padding: 18px 0 32px;
    }
    .tb-hero .tb-tagline {
        font-size: 1.2em;
        margin-bottom: 18px;
    }
    .tb-hero .tb-subtitle {
        font-size: 0.95em;
        line-height: 1.6;
    }
}

.tb-stat-card {
    background: var(--tb-surface);
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-md);
    padding: 24px 20px;
    text-align: center;
    box-shadow: var(--tb-shadow-sm);
    transition: all 0.3s ease;
}

.tb-stat-card:hover {
    box-shadow: var(--tb-shadow-md);
    transform: translateY(-2px);
}

.tb-stat-number {
    font-family: var(--tb-font-display);
    font-size: 2.2em;
    font-weight: 800;
    color: var(--tb-accent);
    line-height: 1;
    margin-bottom: 8px;
}

.tb-stat-label {
    font-size: 0.85em;
    color: var(--tb-ink-muted);
    font-weight: 500;
}

/* --- Source Cards (3-col grid) --- */
.tb-sources-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin: 32px 0;
}

@media (max-width: 768px) {
    .tb-sources-grid { grid-template-columns: 1fr; }
}

.tb-source-card {
    background: var(--tb-surface);
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-md);
    padding: 24px;
    box-shadow: var(--tb-shadow-sm);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.tb-source-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
}

.tb-source-card.src-github::before { background: var(--tb-accent); }
.tb-source-card.src-stackoverflow::before { background: var(--tb-amber); }
.tb-source-card.src-cve::before { background: var(--tb-rose); }
.tb-source-card.src-rfc::before { background: var(--tb-blue); }
.tb-source-card.src-postmortem::before { background: var(--tb-violet); }
.tb-source-card.src-textbook::before { background: var(--tb-green); }

.tb-source-card:hover {
    box-shadow: var(--tb-shadow-md);
    transform: translateY(-2px);
}

.tb-source-card .tb-source-icon {
    font-size: 1.8em;
    margin-bottom: 12px;
}

.tb-source-card h4 {
    font-family: var(--tb-font-body);
    font-size: 0.95em;
    font-weight: 700;
    color: var(--tb-ink);
    margin: 0 0 8px;
}

.tb-source-card p {
    font-size: 0.85em;
    line-height: 1.6;
    color: var(--tb-ink-soft);
    margin: 0;
}

/* --- Callout Box --- */
.tb-callout {
    background: linear-gradient(135deg, var(--tb-accent-bg) 0%, rgba(5,150,105,0.03) 100%);
    border: 1px solid var(--tb-accent-lighter);
    border-radius: var(--tb-radius-md);
    padding: 24px 28px;
    margin: 32px 0;
}

.tb-callout-title {
    font-family: var(--tb-font-display);
    font-size: 1.05em;
    font-weight: 700;
    color: var(--tb-accent-dark);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.tb-callout p {
    font-size: 0.92em;
    color: var(--tb-ink-soft);
    line-height: 1.7;
    margin: 0;
}

.tb-callout-amber {
    background: linear-gradient(135deg, var(--tb-amber-bg) 0%, rgba(217,119,6,0.03) 100%);
    border-color: #fde68a;
}

.tb-callout-amber .tb-callout-title { color: var(--tb-amber); }

.tb-callout-blue {
    background: linear-gradient(135deg, var(--tb-blue-bg) 0%, rgba(37,99,235,0.03) 100%);
    border-color: #bfdbfe;
}

.tb-callout-blue .tb-callout-title { color: var(--tb-blue); }

.tb-callout-violet {
    background: linear-gradient(135deg, var(--tb-violet-bg) 0%, rgba(124,58,237,0.03) 100%);
    border-color: #ddd6fe;
}

.tb-callout-violet .tb-callout-title { color: var(--tb-violet); }

/* --- Task Format Table --- */
.tb-format-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-md);
    overflow: hidden;
    margin: 24px 0;
    font-size: 0.9em;
}

.tb-format-table th {
    background: var(--tb-accent-dark);
    color: #fff;
    padding: 14px 16px;
    text-align: left;
    font-weight: 700;
    font-size: 0.85em;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.tb-format-table td {
    padding: 14px 16px;
    border-bottom: 1px solid var(--tb-border);
    color: var(--tb-ink-soft);
}

.tb-format-table tr:last-child td { border-bottom: none; }
.tb-format-table tr:nth-child(even) td { background: var(--tb-surface-raised); }

.tb-format-table td:first-child {
    font-family: var(--tb-font-mono);
    font-weight: 600;
    color: var(--tb-ink);
    font-size: 0.92em;
}

/* --- Stats Detail Table --- */
.tb-stats-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-md);
    overflow: hidden;
    margin: 24px 0;
    font-size: 0.88em;
}

.tb-stats-table th {
    background: var(--tb-surface-sunken);
    font-weight: 700;
    color: var(--tb-ink);
    padding: 12px 14px;
    text-align: center;
    border-bottom: 2px solid var(--tb-accent);
    font-size: 0.9em;
}

.tb-stats-table td {
    padding: 12px 14px;
    text-align: center;
    border-bottom: 1px solid var(--tb-border);
    color: var(--tb-ink-soft);
}

.tb-stats-table tr:last-child td { border-bottom: none; }

.tb-stats-table td:first-child {
    text-align: left;
    font-weight: 600;
    color: var(--tb-ink);
}

/* --- Verification Strategy Table --- */
.tb-verify-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-md);
    overflow: hidden;
    margin: 24px 0;
    font-size: 0.9em;
}

.tb-verify-table th {
    background: var(--tb-accent-dark);
    color: #fff;
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
}

.tb-verify-table td {
    padding: 12px 16px;
    border-bottom: 1px solid var(--tb-border);
}

.tb-verify-table tr:nth-child(even) td { background: var(--tb-surface-raised); }
.tb-verify-table tr:last-child td { border-bottom: none; }

.tb-verify-bar {
    display: inline-block;
    height: 8px;
    background: var(--tb-accent);
    border-radius: 4px;
    margin-left: 8px;
    vertical-align: middle;
}

/* --- Case Study Tabs --- */
.tb-case-tabs {
    margin: 32px 0;
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-lg);
    overflow: hidden;
    box-shadow: var(--tb-shadow-md);
}

.tb-case-tab-nav {
    display: flex;
    background: var(--tb-surface-sunken);
    border-bottom: 2px solid var(--tb-border);
    overflow-x: auto;
}

.tb-case-tab-btn {
    flex: 1;
    padding: 14px 20px;
    border: none;
    background: transparent;
    font-family: var(--tb-font-body);
    font-size: 0.88em;
    font-weight: 600;
    color: var(--tb-ink-muted);
    cursor: pointer;
    transition: all 0.2s ease;
    border-bottom: 3px solid transparent;
    white-space: nowrap;
}

.tb-case-tab-btn:hover { color: var(--tb-ink); background: var(--tb-surface); }
.tb-case-tab-btn.active {
    color: var(--tb-accent-dark);
    background: var(--tb-surface);
    border-bottom-color: var(--tb-accent);
}

.tb-case-panel { display: none; }
.tb-case-panel.active { display: block; }

.tb-case-body { padding: 24px; }

/* Sub-tabs within each case */
.tb-sub-tab-nav {
    display: flex;
    gap: 4px;
    padding: 12px 24px;
    background: var(--tb-surface-raised);
    border-bottom: 1px solid var(--tb-border);
    overflow-x: auto;
}

.tb-sub-tab-btn {
    padding: 8px 16px;
    border: 1px solid var(--tb-border);
    border-radius: 999px;
    background: var(--tb-surface);
    font-family: var(--tb-font-body);
    font-size: 0.8em;
    font-weight: 600;
    color: var(--tb-ink-muted);
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
}

.tb-sub-tab-btn:hover { border-color: var(--tb-accent); color: var(--tb-ink); }
.tb-sub-tab-btn.active {
    background: var(--tb-accent);
    color: #fff;
    border-color: var(--tb-accent);
}

.tb-sub-panel { display: none; }
.tb-sub-panel.active { display: block; }

/* --- Case Code Block --- */
.tb-code-block {
    background: #1e293b;
    color: #e2e8f0;
    padding: 20px 24px;
    border-radius: var(--tb-radius-sm);
    font-family: var(--tb-font-mono);
    font-size: 0.82em;
    line-height: 1.7;
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 16px 0;
    overflow-x: auto;
}

.tb-code-block .tb-comment { color: #64748b; }
.tb-code-block .tb-keyword { color: #38bdf8; }
.tb-code-block .tb-string { color: #a5f3fc; }
.tb-code-block .tb-func { color: #86efac; }

/* --- Case File Tree --- */
.tb-file-tree {
    background: var(--tb-surface-sunken);
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-sm);
    padding: 16px 20px;
    font-family: var(--tb-font-mono);
    font-size: 0.82em;
    line-height: 1.8;
    color: var(--tb-ink-soft);
    margin: 16px 0;
}

/* --- Case Performance Table --- */
.tb-perf-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88em;
    margin: 16px 0;
}

.tb-perf-table th {
    background: var(--tb-surface-sunken);
    padding: 10px 14px;
    text-align: left;
    font-weight: 700;
    color: var(--tb-ink);
    border-bottom: 2px solid var(--tb-accent);
}

.tb-perf-table td {
    padding: 10px 14px;
    border-bottom: 1px solid var(--tb-border);
    color: var(--tb-ink-soft);
}

/* --- Bug Table --- */
.tb-bug-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-sm);
    overflow: hidden;
    margin: 16px 0;
    font-size: 0.82em;
}

.tb-bug-table th {
    background: var(--tb-accent-dark);
    color: #fff;
    padding: 10px 12px;
    text-align: left;
    font-weight: 600;
    font-size: 0.9em;
}

.tb-bug-table td {
    padding: 10px 12px;
    border-bottom: 1px solid var(--tb-border);
}

.tb-bug-table tr:nth-child(even) td { background: var(--tb-surface-raised); }
.tb-bug-table tr:last-child td { border-bottom: none; }

.tb-bug-table td:first-child {
    font-family: var(--tb-font-mono);
    font-weight: 600;
    color: var(--tb-accent-dark);
    white-space: nowrap;
}

/* --- Leaderboard Table --- */
.tb-leaderboard-wrap {
    margin: 32px 0;
    overflow-x: auto;
}

.tb-leaderboard {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-md);
    overflow: hidden;
    font-size: 0.92em;
}

.tb-leaderboard th {
    background: var(--tb-accent-dark);
    color: #fff;
    padding: 16px 20px;
    text-align: left;
    font-weight: 700;
    font-size: 0.85em;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.tb-leaderboard td {
    padding: 16px 20px;
    border-bottom: 1px solid var(--tb-border);
    color: var(--tb-ink);
}

.tb-leaderboard tr:nth-child(even) td { background: var(--tb-surface-raised); }
.tb-leaderboard tr:hover td { background: var(--tb-accent-lighter); }
.tb-leaderboard tr:last-child td { border-bottom: none; }

.tb-rank-1 { font-weight: 800; color: #b45309; }
.tb-rank-2 { font-weight: 700; color: #6b7280; }
.tb-rank-3 { font-weight: 700; color: #92400e; }

.tb-model-name {
    font-family: var(--tb-font-mono);
    font-weight: 600;
}

.tb-score-bar {
    display: inline-block;
    height: 8px;
    background: var(--tb-accent);
    border-radius: 4px;
    margin-left: 8px;
    vertical-align: middle;
}

/* --- Insight Card --- */
.tb-insight-card {
    background: var(--tb-surface);
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-md);
    padding: 24px 28px;
    margin: 16px 0;
    box-shadow: var(--tb-shadow-sm);
    position: relative;
    overflow: hidden;
}

.tb-insight-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
}

.tb-insight-card.insight-1::before { background: var(--tb-accent); }
.tb-insight-card.insight-2::before { background: var(--tb-amber); }
.tb-insight-card.insight-3::before { background: var(--tb-violet); }

.tb-insight-card h4 {
    font-family: var(--tb-font-body);
    font-size: 1em;
    font-weight: 700;
    margin: 0 0 10px;
    color: var(--tb-ink);
}

.tb-insight-card p {
    font-size: 0.92em;
    line-height: 1.7;
    color: var(--tb-ink-soft);
    margin: 0 0 12px;
}

.tb-insight-card p:last-child { margin-bottom: 0; }

/* --- QA Pipeline Steps --- */
.tb-qa-pipeline {
    margin: 32px 0;
    position: relative;
}

.tb-qa-step {
    display: flex;
    gap: 20px;
    margin-bottom: 28px;
    position: relative;
}

.tb-qa-step::before {
    content: '';
    position: absolute;
    left: 23px;
    top: 48px;
    bottom: -28px;
    width: 2px;
    background: var(--tb-border);
}

.tb-qa-step:last-child::before { display: none; }

.tb-qa-number {
    width: 48px;
    height: 48px;
    min-width: 48px;
    border-radius: 50%;
    background: var(--tb-accent);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--tb-font-display);
    font-size: 1.1em;
    font-weight: 800;
    position: relative;
    z-index: 1;
}

.tb-qa-content {
    flex: 1;
    background: var(--tb-surface);
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-md);
    padding: 20px 24px;
    transition: box-shadow 0.3s ease;
}

.tb-qa-content:hover { box-shadow: var(--tb-shadow-md); }

.tb-qa-content h4 {
    font-family: var(--tb-font-display);
    font-size: 1em;
    font-weight: 700;
    color: var(--tb-ink);
    margin: 0 0 8px 0;
}

.tb-qa-content p {
    font-size: 0.9em;
    color: var(--tb-ink-soft);
    line-height: 1.65;
    margin: 0;
}

/* --- Domain/Workload Tag Lists --- */
.tb-tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 16px 0;
}

.tb-tag {
    display: inline-block;
    padding: 4px 12px;
    font-size: 0.78em;
    font-weight: 600;
    border-radius: 999px;
    border: 1px solid var(--tb-border);
    background: var(--tb-surface);
    color: var(--tb-ink-soft);
    transition: all 0.2s ease;
}

.tb-tag:hover { border-color: var(--tb-accent); color: var(--tb-accent); }

.tb-tag-domain { background: var(--tb-accent-bg); color: var(--tb-accent-dark); border-color: var(--tb-accent-lighter); }
.tb-tag-workload { background: var(--tb-blue-bg); color: var(--tb-blue); border-color: #bfdbfe; }

/* --- Companion Box --- */
.tb-companion-box {
    background: linear-gradient(135deg, var(--tb-accent-bg) 0%, var(--tb-violet-bg) 100%);
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-lg);
    padding: 32px;
    margin: 28px 0;
}

.tb-companion-box h3 {
    font-size: 1.1em;
    font-weight: 700;
    color: var(--tb-ink);
    margin: 0 0 16px;
}

.tb-companion-box p {
    font-size: 0.92em;
    line-height: 1.7;
    color: var(--tb-ink-soft);
    margin: 0 0 12px;
}

/* --- Summary List --- */
.tb-summary-list {
    list-style: none;
    padding: 0;
    margin: 24px 0;
}

.tb-summary-list li {
    position: relative;
    padding: 12px 16px 12px 32px;
    margin-bottom: 8px;
    background: var(--tb-surface);
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-sm);
    font-size: 0.92em;
    line-height: 1.65;
    color: var(--tb-ink-soft);
    transition: all 0.2s ease;
}

.tb-summary-list li::before {
    content: '';
    position: absolute;
    left: 14px;
    top: 18px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--tb-accent);
}

.tb-summary-list li:hover {
    box-shadow: var(--tb-shadow-sm);
    border-color: var(--tb-accent-lighter);
}

.tb-summary-list li strong { color: var(--tb-ink); }

/* --- TOC --- */
.tb-toc {
    position: fixed;
    right: 5px;
    top: 120px;
    width: 200px;
    max-width: 200px;
    min-width: 160px;
    max-height: calc(100vh - 160px);
    overflow-y: auto;
    padding: 16px;
    padding-top: 40px;
    background: var(--tb-surface);
    border: 1px solid var(--tb-border);
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    z-index: 100;
    font-size: 10px;
    transition: all 0.3s ease;
}

.tb-toc::-webkit-scrollbar { width: 4px; }
.tb-toc::-webkit-scrollbar-track { background: transparent; }
.tb-toc::-webkit-scrollbar-thumb { background: var(--tb-border); border-radius: 2px; }

.tb-toc-title {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--tb-ink-muted);
    margin-bottom: 12px;
    font-weight: 600;
}

.tb-toc-list { list-style: none; padding: 0; margin: 0; }
.tb-toc-item { margin-bottom: 4px; }

.tb-toc-link {
    display: block;
    padding: 6px 10px;
    color: var(--tb-ink-muted);
    text-decoration: none !important;
    border-radius: 6px;
    transition: all 0.2s ease;
    border-left: 2px solid transparent;
    line-height: 1.4;
}

.tb-toc-link:hover { background: var(--tb-surface-sunken); color: var(--tb-ink); text-decoration: none !important; }
.tb-toc-link.active { background: var(--tb-surface-sunken); color: var(--tb-ink); border-left-color: var(--tb-accent); font-weight: 500; text-decoration: none !important; }

.tb-toc-link.tb-toc-h2 { padding-left: 10px; font-size: 13px; }
.tb-toc-link.tb-toc-h3 { padding-left: 20px; font-size: 12px; }

.tb-toc-toggle {
    position: absolute;
    top: 16px;
    right: 12px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    transition: opacity 0.2s;
}
.tb-toc-toggle:hover { opacity: 1; }
.tb-toc-toggle svg { width: 14px; height: 14px; transition: transform 0.3s ease; }
.tb-toc.collapsed .tb-toc-toggle svg { transform: rotate(180deg); }
.tb-toc.collapsed .tb-toc-list,
.tb-toc.collapsed .tb-toc-progress,
.tb-toc.collapsed .tb-toc-title { display: none; }
.tb-toc.collapsed { width: 44px; min-width: 44px; padding: 12px; }

.tb-toc-progress {
    height: 3px;
    background: var(--tb-border);
    border-radius: 2px;
    margin-bottom: 12px;
    overflow: hidden;
}

.tb-toc-progress-bar {
    height: 100%;
    background: var(--tb-accent);
    width: 0%;
    transition: width 0.1s ease;
    border-radius: 2px;
}


@media (max-width: 1400px) {
    .tb-toc { display: none; }
}

/* ============================================
   EvoCode-Bench (Multi-Turn) Styles
   Scoped with mt- prefix
   ============================================ */

:root {
    --mt-font-body: 'Inter', 'DM Sans', system-ui, sans-serif;
    --mt-font-mono: 'JetBrains Mono', ui-monospace, monospace;
    --mt-ink: #0f172a;
    --mt-ink-soft: #334155;
    --mt-ink-muted: #64748b;
    --mt-surface: #ffffff;
    --mt-surface-raised: #f8fafc;
    --mt-surface-sunken: #f1f5f9;
    --mt-border: #e2e8f0;
    --mt-accent: #2563eb;
    --mt-accent-light: #3b82f6;
    --mt-accent-bg: rgba(37, 99, 235, 0.06);
    --mt-green: #059669;
    --mt-green-bg: rgba(5, 150, 105, 0.06);
    --mt-amber: #d97706;
    --mt-amber-bg: rgba(217, 119, 6, 0.06);
    --mt-rose: #e11d48;
    --mt-rose-bg: rgba(225, 29, 72, 0.06);
    --mt-violet: #7c3aed;
    --mt-violet-bg: rgba(124, 58, 237, 0.06);
    --mt-radius-sm: 8px;
    --mt-radius-md: 14px;
    --mt-radius-lg: 20px;
    --mt-shadow-sm: 0 1px 3px rgba(15,23,42,0.04), 0 1px 2px rgba(15,23,42,0.06);
    --mt-shadow-md: 0 4px 16px rgba(15,23,42,0.06), 0 2px 4px rgba(15,23,42,0.04);
    --mt-shadow-lg: 0 12px 40px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04);
}

@keyframes mt-fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
}

@keyframes mt-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.mt-animate {
    opacity: 0;
    animation: mt-fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.mt-animate-delay-1 { animation-delay: 0.1s; }
.mt-animate-delay-2 { animation-delay: 0.2s; }
.mt-animate-delay-3 { animation-delay: 0.3s; }

@media (prefers-reduced-motion: reduce) {
    .mt-animate, [class*="mt-animate"] {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
    }
}

/* --- Section Divider --- */
.mt-section-rule {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--mt-border) 20%, var(--mt-accent) 50%, var(--mt-border) 80%, transparent);
    margin: 56px 0;
    opacity: 0.5;
}

/* --- Hero --- */
.mt-hero {
    text-align: center;
    padding: 28px 0 36px;
    margin-bottom: 10px;
    position: relative;
}

.mt-hero::before {
    content: '';
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    background: none;
    pointer-events: none;
    z-index: 0;
}

.mt-hero > * {
    position: relative;
    z-index: 1;
}

.mt-hero .mt-tagline {
    font-family: var(--mt-font-body);
    font-size: 1.35em;
    font-weight: 300;
    color: var(--mt-ink-soft);
    max-width: 820px;
    margin: 0 auto 24px;
    line-height: 1.55;
    letter-spacing: 0.01em;
}

.mt-hero .mt-tagline strong {
    color: var(--mt-accent);
    font-weight: 600;
}

.mt-hero-links {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.mt-hero-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border: 1px solid var(--mt-border);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s ease;
    text-decoration: none !important;
    color: var(--mt-ink) !important;
}

.mt-hero-link:hover {
    background: var(--mt-surface-sunken);
    border-color: var(--mt-accent);
    text-decoration: none !important;
}

.mt-hero-link svg {
    width: 18px;
    height: 18px;
}

.mt-link-badge {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 2px 6px;
    border-radius: 4px;
    background: var(--mt-surface-sunken);
    color: var(--mt-ink-muted);
    margin-left: 4px;
}

.mt-contributors-bar {
    margin: 20px 0 0;
    padding: 16px 0;
    border-top: 1px solid var(--mt-border);
    border-bottom: 1px solid var(--mt-border);
    font-family: var(--mt-font-body);
}

/* --- Epigraph / Key Insight --- */
.mt-epigraph {
    max-width: 720px;
    margin: 0 auto 48px;
    padding: 28px 36px;
    border-left: 4px solid var(--mt-accent);
    background: linear-gradient(135deg, var(--mt-accent-bg) 0%, rgba(5,150,105,0.03) 100%);
    border-radius: 0 var(--mt-radius-md) var(--mt-radius-md) 0;
    font-family: var(--mt-font-body);
    font-size: 1.05em;
    line-height: 1.85;
    color: var(--mt-ink);
    position: relative;
}

.mt-epigraph::before {
    content: '\201C';
    position: absolute;
    top: -8px;
    left: 16px;
    font-size: 4em;
    color: var(--mt-accent);
    opacity: 0.12;
    line-height: 1;
    pointer-events: none;
}

/* --- Stat Cards --- */
.mt-stats-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    margin: 32px 0;
}

@media (max-width: 768px) {
    .mt-stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.mt-stat-card {
    background: var(--mt-surface);
    border: 1px solid var(--mt-border);
    border-radius: var(--mt-radius-md);
    padding: 24px 20px;
    text-align: center;
    box-shadow: var(--mt-shadow-sm);
    transition: all 0.3s ease;
}

.mt-stat-card:hover {
    box-shadow: var(--mt-shadow-md);
    transform: translateY(-2px);
}

.mt-stat-number {
    font-family: var(--mt-font-body);
    font-size: 2.2em;
    font-weight: 800;
    color: var(--mt-accent);
    line-height: 1;
    margin-bottom: 8px;
}

.mt-stat-label {
    font-size: 0.85em;
    color: var(--mt-ink-muted);
    font-weight: 500;
}

/* --- Challenge Cards --- */
.mt-challenges-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 24px 0 36px;
}

.mt-challenge-card {
    background: var(--mt-surface);
    border: 1px solid var(--mt-border);
    border-radius: var(--mt-radius-md);
    padding: 24px 28px;
    box-shadow: var(--mt-shadow-sm);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.mt-challenge-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
}

.mt-challenge-card.ch-1::before { background: var(--mt-accent); }
.mt-challenge-card.ch-2::before { background: var(--mt-green); }
.mt-challenge-card.ch-3::before { background: var(--mt-amber); }
.mt-challenge-card.ch-4::before { background: var(--mt-violet); }
.mt-challenge-card.ch-5::before { background: var(--mt-rose); }

.mt-challenge-card:hover {
    box-shadow: var(--mt-shadow-md);
}

.mt-challenge-card h4 {
    font-family: var(--mt-font-body);
    font-size: 1em;
    font-weight: 700;
    margin: 0 0 8px;
    color: var(--mt-ink);
}

.mt-challenge-card p {
    font-size: 0.92em;
    line-height: 1.65;
    color: var(--mt-ink-soft);
    margin: 0;
}

/* --- Feature Cards (2x3 grid) --- */
.mt-features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin: 32px 0;
}

@media (max-width: 768px) {
    .mt-features-grid {
        grid-template-columns: 1fr;
    }
}

.mt-feature-card {
    background: var(--mt-surface);
    border: 1px solid var(--mt-border);
    border-radius: var(--mt-radius-md);
    padding: 24px;
    box-shadow: var(--mt-shadow-sm);
    transition: all 0.3s ease;
}

.mt-feature-card:hover {
    box-shadow: var(--mt-shadow-md);
    transform: translateY(-2px);
}

.mt-feature-card .mt-feature-icon {
    font-size: 1.8em;
    margin-bottom: 12px;
}

.mt-feature-card h4 {
    font-family: var(--mt-font-body);
    font-size: 0.95em;
    font-weight: 700;
    color: var(--mt-ink);
    margin: 0 0 8px;
}

.mt-feature-card p {
    font-size: 0.85em;
    line-height: 1.6;
    color: var(--mt-ink-soft);
    margin: 0;
}

/* --- Dimension Cards (Interaction Styles, Engineering Activities) --- */
.mt-dimension-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 28px 0;
}

.mt-dimension-grid.mt-activity-grid {
    grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 980px) {
    .mt-dimension-grid.mt-activity-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .mt-dimension-grid {
        grid-template-columns: 1fr;
    }
    .mt-dimension-grid.mt-activity-grid {
        grid-template-columns: 1fr;
    }
}

.mt-dimension-card {
    background: var(--mt-surface);
    border: 1px solid var(--mt-border);
    border-radius: var(--mt-radius-lg);
    padding: 28px 24px;
    box-shadow: var(--mt-shadow-sm);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.mt-dimension-card:hover {
    box-shadow: var(--mt-shadow-md);
}

.mt-dimension-card .mt-dim-tag {
    display: inline-block;
    font-size: 0.7em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 4px 10px;
    border-radius: 6px;
    margin-bottom: 14px;
}

.mt-dim-tag.tag-vibe {
    background: var(--mt-accent-bg);
    color: var(--mt-accent);
}

.mt-dim-tag.tag-agentic {
    background: var(--mt-green-bg);
    color: var(--mt-green);
}

.mt-dim-tag.tag-doc {
    background: var(--mt-violet-bg);
    color: var(--mt-violet);
}

.mt-dim-tag.tag-spec {
    background: var(--mt-amber-bg);
    color: var(--mt-amber);
}

.mt-dim-tag.tag-construct {
    background: var(--mt-accent-bg);
    color: var(--mt-accent);
}

.mt-dim-tag.tag-review {
    background: var(--mt-green-bg);
    color: var(--mt-green);
}

.mt-dim-tag.tag-migrate {
    background: var(--mt-rose-bg);
    color: var(--mt-rose);
}

.mt-dimension-card h4 {
    font-family: var(--mt-font-body);
    font-size: 1.05em;
    font-weight: 700;
    color: var(--mt-ink);
    margin: 0 0 10px;
}

.mt-dimension-card p {
    font-size: 0.88em;
    line-height: 1.65;
    color: var(--mt-ink-soft);
    margin: 0 0 12px;
}

.mt-dimension-card .mt-dim-example {
    background: var(--mt-surface-sunken);
    border-radius: var(--mt-radius-sm);
    padding: 14px 16px;
    font-family: var(--mt-font-mono);
    font-size: 0.78em;
    line-height: 1.7;
    color: var(--mt-ink-soft);
    margin-top: 12px;
}

/* --- Round Conversation Visualization --- */
.mt-conv-box {
    background: var(--mt-surface);
    border: 1px solid var(--mt-border);
    border-radius: var(--mt-radius-lg);
    padding: 28px;
    margin: 28px 0;
    box-shadow: var(--mt-shadow-sm);
}

.mt-conv-title {
    font-family: var(--mt-font-body);
    font-size: 1em;
    font-weight: 700;
    color: var(--mt-ink);
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--mt-border);
}

.mt-round {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    align-items: flex-start;
}

.mt-round:last-child {
    margin-bottom: 0;
}

.mt-round-badge {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: 700;
    color: white;
    margin-top: 2px;
}

.mt-round-badge.rb-user { background: var(--mt-accent); }
.mt-round-badge.rb-pass { background: var(--mt-green); }
.mt-round-badge.rb-fail { background: var(--mt-rose); }

.mt-round-content {
    flex: 1;
    background: var(--mt-surface-sunken);
    border-radius: var(--mt-radius-sm);
    padding: 14px 18px;
    font-size: 0.88em;
    line-height: 1.65;
    color: var(--mt-ink-soft);
}

.mt-round-content strong {
    color: var(--mt-ink);
}

/* --- Cross Table --- */
.mt-cross-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid var(--mt-border);
    border-radius: var(--mt-radius-md);
    overflow: hidden;
    margin: 24px 0;
    font-size: 0.88em;
}

.mt-cross-table th,
.mt-cross-table td {
    padding: 14px 16px;
    text-align: center;
    border-bottom: 1px solid var(--mt-border);
}

.mt-cross-table th {
    background: var(--mt-surface-sunken);
    font-weight: 700;
    color: var(--mt-ink);
    font-size: 0.9em;
}

.mt-cross-table td {
    color: var(--mt-ink-soft);
}

.mt-cross-table tr:last-child td {
    border-bottom: none;
}

.mt-cross-table td:first-child,
.mt-cross-table th:first-child {
    text-align: left;
    font-weight: 600;
    color: var(--mt-ink);
}

.mt-cross-table .mt-cell-natural {
    background: var(--mt-green-bg);
    color: var(--mt-green);
    font-weight: 600;
}

.mt-cross-table .mt-cell-feasible {
    background: var(--mt-accent-bg);
    color: var(--mt-accent);
}

.mt-cross-table .mt-cell-rare {
    background: var(--mt-surface-sunken);
    color: var(--mt-ink-muted);
}

.mt-cross-table .mt-cell-total {
    background: var(--mt-surface-sunken);
    font-weight: 800;
    color: var(--mt-ink);
}

/* --- Scoring Section --- */
.mt-scoring-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin: 28px 0;
}

@media (max-width: 768px) {
    .mt-scoring-grid {
        grid-template-columns: 1fr;
    }
}

.mt-score-card {
    background: var(--mt-surface);
    border: 1px solid var(--mt-border);
    border-radius: var(--mt-radius-md);
    padding: 24px;
    box-shadow: var(--mt-shadow-sm);
    text-align: center;
}

.mt-score-card h4 {
    font-size: 0.95em;
    font-weight: 700;
    color: var(--mt-ink);
    margin: 0 0 8px;
}

.mt-score-card .mt-score-formula {
    font-family: var(--mt-font-mono);
    font-size: 0.85em;
    color: var(--mt-accent);
    margin-bottom: 10px;
    padding: 8px;
    background: var(--mt-accent-bg);
    border-radius: var(--mt-radius-sm);
}

.mt-score-card p {
    font-size: 0.82em;
    line-height: 1.6;
    color: var(--mt-ink-soft);
    margin: 0;
}

/* --- Task Structure Diagram --- */
.mt-structure-box {
    background: var(--mt-surface-sunken);
    border: 1px solid var(--mt-border);
    border-radius: var(--mt-radius-md);
    padding: 24px 28px;
    margin: 24px 0;
    font-family: var(--mt-font-mono);
    font-size: 0.82em;
    line-height: 1.8;
    color: var(--mt-ink-soft);
    overflow-x: auto;
}

/* --- Principle Box --- */
.mt-principle-box {
    background: var(--mt-surface);
    border: 1px solid var(--mt-border);
    border-radius: var(--mt-radius-md);
    padding: 24px 28px;
    margin: 16px 0;
    box-shadow: var(--mt-shadow-sm);
}

.mt-principle-box h4 {
    font-size: 0.95em;
    font-weight: 700;
    color: var(--mt-accent);
    margin: 0 0 8px;
}

.mt-principle-box p {
    font-size: 0.88em;
    line-height: 1.65;
    color: var(--mt-ink-soft);
    margin: 0;
}

/* --- Future Vision Box --- */
.mt-future-box {
    background: linear-gradient(135deg, var(--mt-accent-bg) 0%, var(--mt-violet-bg) 100%);
    border: 1px solid var(--mt-border);
    border-radius: var(--mt-radius-lg);
    padding: 32px;
    margin: 28px 0;
}

.mt-future-box h3 {
    font-size: 1.1em;
    font-weight: 700;
    color: var(--mt-ink);
    margin: 0 0 16px;
}

.mt-future-box p {
    font-size: 0.92em;
    line-height: 1.7;
    color: var(--mt-ink-soft);
    margin: 0 0 12px;
}

.mt-future-pipeline {
    font-family: var(--mt-font-mono);
    font-size: 0.82em;
    background: var(--mt-surface);
    border: 1px solid var(--mt-border);
    border-radius: var(--mt-radius-sm);
    padding: 16px 20px;
    margin-top: 16px;
    color: var(--mt-ink-soft);
    line-height: 1.8;
}

/* --- Image placeholder --- */
.mt-img-placeholder {
    background: var(--mt-surface-sunken);
    border: 2px dashed var(--mt-border);
    border-radius: var(--mt-radius-md);
    padding: 48px 24px;
    text-align: center;
    margin: 24px 0;
    color: var(--mt-ink-muted);
    font-size: 0.88em;
    font-style: italic;
}

/* --- Highlight box --- */
.mt-highlight-box {
    background: var(--mt-accent-bg);
    border: 1px solid rgba(37, 99, 235, 0.15);
    border-radius: var(--mt-radius-md);
    padding: 24px 28px;
    margin: 24px 0;
}

.mt-highlight-box p {
    font-size: 0.92em;
    line-height: 1.7;
    color: var(--mt-ink);
    margin: 0;
}

/* --- Citation Block --- */
.mt-cite-block {
    background: var(--mt-surface-sunken);
    border: 1px solid var(--mt-border);
    border-radius: var(--mt-radius-md);
    padding: 24px 28px;
    margin: 40px 0 0;
}

.mt-cite-block h3 {
    font-size: 1em;
    font-weight: 700;
    margin: 0 0 12px;
}

.mt-cite-block pre {
    background: #1e293b;
    color: #e2e8f0;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 12px;
    margin: 0;
}

/* ============================================
   RoadmapBench (Version Upgrade) Styles
   Scoped with rm- prefix
   ============================================ */

:root {
    --rm-font-display: 'Inter', -apple-system, sans-serif;
    --rm-font-body: 'Inter', 'Segoe UI', sans-serif;
    --rm-font-mono: 'JetBrains Mono', ui-monospace, monospace;
    --rm-ink: #0c1222;
    --rm-ink-soft: #334155;
    --rm-ink-muted: #64748b;
    --rm-surface: #ffffff;
    --rm-surface-raised: #f8fafc;
    --rm-surface-sunken: #f1f5f9;
    --rm-border: #e2e8f0;
    --rm-accent: #7c3aed;
    --rm-accent-light: #8b5cf6;
    --rm-accent-lighter: #ede9fe;
    --rm-accent-dark: #6d28d9;
    --rm-accent-bg: rgba(124, 58, 237, 0.06);
    --rm-green: #059669;
    --rm-green-bg: rgba(5, 150, 105, 0.06);
    --rm-amber: #d97706;
    --rm-amber-bg: rgba(217, 119, 6, 0.06);
    --rm-rose: #e11d48;
    --rm-blue: #2563eb;
    --rm-radius-sm: 8px;
    --rm-radius-md: 14px;
    --rm-radius-lg: 20px;
    --rm-shadow-sm: 0 1px 3px rgba(15,23,42,0.04), 0 1px 2px rgba(15,23,42,0.06);
    --rm-shadow-md: 0 4px 16px rgba(15,23,42,0.06), 0 2px 4px rgba(15,23,42,0.04);
    --rm-shadow-lg: 0 12px 40px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04);
}

.rm-section-rule {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--rm-border) 20%, var(--rm-accent) 50%, var(--rm-border) 80%, transparent);
    margin: 56px 0;
    opacity: 0.5;
}

/* --- Stats Grid --- */
.rm-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin: 16px 0;
}

@media (max-width: 768px) {
    .rm-stats-grid { grid-template-columns: repeat(2, 1fr); }
}

.rm-stat-card {
    background: var(--rm-surface);
    border: 1px solid var(--rm-border);
    border-radius: var(--rm-radius-md);
    padding: 24px 20px;
    text-align: center;
    box-shadow: var(--rm-shadow-sm);
    transition: all 0.3s ease;
    opacity: 0;
}

.rm-stat-card.rm-animate { opacity: 1; animation: tb-fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

.rm-stat-card:hover {
    box-shadow: var(--rm-shadow-md);
    transform: translateY(-2px);
}

.rm-stat-number {
    font-family: var(--rm-font-display);
    font-size: 2.2em;
    font-weight: 800;
    color: var(--rm-accent);
    line-height: 1;
    margin-bottom: 8px;
}

.rm-stat-label {
    font-size: 0.85em;
    color: var(--rm-ink-muted);
    font-weight: 500;
}

/* --- Epigraph --- */
.rm-epigraph {
    max-width: 720px;
    margin: 0 auto 48px;
    padding: 28px 36px;
    border-left: 4px solid var(--rm-accent);
    background: linear-gradient(135deg, var(--rm-accent-bg) 0%, rgba(109,40,217,0.03) 100%);
    border-radius: 0 var(--rm-radius-md) var(--rm-radius-md) 0;
    font-family: var(--rm-font-body);
    font-size: 1.05em;
    line-height: 1.85;
    color: var(--rm-ink);
    position: relative;
}

.rm-epigraph::before {
    content: '\201C';
    position: absolute;
    top: -8px;
    left: 16px;
    font-size: 4em;
    color: var(--rm-accent);
    opacity: 0.12;
    line-height: 1;
    pointer-events: none;
}

/* --- Callout --- */
.rm-callout {
    background: linear-gradient(135deg, var(--rm-accent-bg) 0%, rgba(109,40,217,0.03) 100%);
    border: 1px solid var(--rm-accent-lighter);
    border-radius: var(--rm-radius-md);
    padding: 24px 28px;
    margin: 32px 0;
}

.rm-callout-title {
    font-family: var(--rm-font-display);
    font-size: 1.05em;
    font-weight: 700;
    color: var(--rm-accent-dark);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.rm-callout p {
    font-size: 0.92em;
    color: var(--rm-ink-soft);
    line-height: 1.7;
    margin: 0;
}

/* --- Challenge Cards --- */
.rm-challenges-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 28px 0;
}

@media (max-width: 768px) {
    .rm-challenges-grid { grid-template-columns: 1fr; }
}

.rm-challenge-card {
    background: var(--rm-surface);
    border: 1px solid var(--rm-border);
    border-radius: var(--rm-radius-md);
    padding: 24px;
    box-shadow: var(--rm-shadow-sm);
    transition: all 0.3s ease;
    border-top: 4px solid var(--rm-accent);
    opacity: 0;
}

.rm-challenge-card.rm-animate { opacity: 1; animation: tb-fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

.rm-challenge-card:hover { box-shadow: var(--rm-shadow-md); transform: translateY(-2px); }

.rm-challenge-card h4 {
    font-family: var(--rm-font-display);
    font-size: 0.95em;
    font-weight: 700;
    color: var(--rm-ink);
    margin: 0 0 12px;
}

.rm-challenge-card p {
    font-size: 0.88em;
    line-height: 1.65;
    color: var(--rm-ink-soft);
    margin: 0 0 10px;
}

.rm-challenge-card p:last-child { margin-bottom: 0; }

/* --- Language/Repo Grid --- */
.rm-lang-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin: 28px 0;
}

@media (max-width: 768px) {
    .rm-lang-grid { grid-template-columns: 1fr; }
}

.rm-lang-card {
    background: var(--rm-surface);
    border: 1px solid var(--rm-border);
    border-radius: var(--rm-radius-md);
    padding: 20px 22px;
    box-shadow: var(--rm-shadow-sm);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    opacity: 0;
}

.rm-lang-card.rm-animate { opacity: 1; animation: tb-fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
.rm-lang-card:hover { box-shadow: var(--rm-shadow-md); transform: translateY(-2px); }

.rm-lang-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
}

.rm-lang-py::before  { background: #3b82f6; }
.rm-lang-ts::before  { background: #0ea5e9; }
.rm-lang-cpp::before { background: #ef4444; }
.rm-lang-go::before  { background: #06b6d4; }
.rm-lang-rs::before  { background: #f97316; }
.rm-lang-java::before{ background: #eab308; }

.rm-lang-icon {
    font-size: 1.6em;
    margin-bottom: 10px;
}

.rm-lang-card h4 {
    font-family: var(--rm-font-body);
    font-size: 0.95em;
    font-weight: 700;
    color: var(--rm-ink);
    margin: 0 0 6px;
}

.rm-lang-card p {
    font-size: 0.82em;
    line-height: 1.55;
    color: var(--rm-ink-soft);
    margin: 0;
}

.rm-lang-count {
    display: inline-block;
    margin-top: 8px;
    font-size: 0.78em;
    font-weight: 700;
    color: var(--rm-accent);
    background: var(--rm-accent-bg);
    padding: 2px 8px;
    border-radius: 999px;
}

/* --- Pipeline Steps --- */
.rm-pipeline {
    position: relative;
    padding: 8px 0;
    margin: 32px 0;
}

.rm-pipeline-step {
    display: flex;
    gap: 20px;
    margin-bottom: 24px;
    align-items: flex-start;
}

.rm-step-badge {
    width: 44px;
    height: 44px;
    min-width: 44px;
    border-radius: 50%;
    background: var(--rm-accent);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--rm-font-display);
    font-size: 1em;
    font-weight: 800;
}

.rm-step-content {
    flex: 1;
    background: var(--rm-surface);
    border: 1px solid var(--rm-border);
    border-radius: var(--rm-radius-md);
    padding: 18px 22px;
}

.rm-step-content h4 {
    font-family: var(--rm-font-display);
    font-size: 0.97em;
    font-weight: 700;
    color: var(--rm-ink);
    margin: 0 0 8px;
}

.rm-step-content p {
    font-size: 0.88em;
    color: var(--rm-ink-soft);
    line-height: 1.65;
    margin: 0;
}

/* --- Stats Table --- */
.rm-stats-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 20px 0;
    font-size: 0.9em;
}

.rm-stats-table thead th {
    background: var(--rm-surface-sunken);
    padding: 10px 14px;
    font-weight: 700;
    color: var(--rm-ink);
    text-align: left;
    border-bottom: 2px solid var(--rm-border);
}

.rm-stats-table tbody td {
    padding: 10px 14px;
    border-bottom: 1px solid var(--rm-border);
    color: var(--rm-ink-soft);
}

.rm-stats-table tbody tr:hover td { background: var(--rm-surface-raised); }
.rm-stats-table tbody tr:last-child td { border-bottom: none; }

/* --- Format Box --- */
.rm-structure-box {
    background: #1e293b;
    color: #e2e8f0;
    border-radius: var(--rm-radius-md);
    padding: 20px 24px;
    font-family: var(--rm-font-mono);
    font-size: 0.82em;
    line-height: 1.8;
    margin: 20px 0;
    overflow-x: auto;
}

/* --- Dimension Grid --- */
.rm-dimension-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 24px 0;
}

@media (max-width: 768px) {
    .rm-dimension-grid { grid-template-columns: 1fr; }
}

.rm-dimension-card {
    background: var(--rm-surface);
    border: 1px solid var(--rm-border);
    border-radius: var(--rm-radius-md);
    padding: 20px;
    box-shadow: var(--rm-shadow-sm);
    opacity: 0;
}

.rm-dimension-card.rm-animate { opacity: 1; animation: tb-fadeInUp 0.6s ease forwards; }

.rm-dim-tag {
    display: inline-block;
    font-size: 0.7em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 3px 10px;
    border-radius: 999px;
    margin-bottom: 10px;
}

.rm-dim-tag-repo  { background: var(--rm-accent-bg); color: var(--rm-accent-dark); }
.rm-dim-tag-upgrade { background: rgba(5,150,105,0.08); color: #065f46; }
.rm-dim-tag-phase { background: rgba(217,119,6,0.08); color: #92400e; }

.rm-dimension-card h4 {
    font-size: 0.95em;
    font-weight: 700;
    color: var(--rm-ink);
    margin: 0 0 8px;
}

.rm-dimension-card p {
    font-size: 0.85em;
    line-height: 1.6;
    color: var(--rm-ink-soft);
    margin: 0;
}

/* --- Scoring Box --- */
.rm-score-box {
    background: linear-gradient(135deg, var(--rm-accent-bg) 0%, rgba(109,40,217,0.03) 100%);
    border: 1px solid var(--rm-accent-lighter);
    border-radius: var(--rm-radius-md);
    padding: 28px 32px;
    margin: 28px 0;
}

.rm-score-box h4 {
    font-family: var(--rm-font-display);
    font-size: 1em;
    font-weight: 700;
    color: var(--rm-accent-dark);
    margin: 0 0 14px;
}

.rm-score-box p {
    font-size: 0.9em;
    color: var(--rm-ink-soft);
    line-height: 1.7;
    margin: 0 0 10px;
}

.rm-score-box p:last-child { margin-bottom: 0; }

/* --- Pilot Table --- */
.rm-pilot-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 24px 0;
}

@media (max-width: 768px) {
    .rm-pilot-grid { grid-template-columns: 1fr; }
}

.rm-pilot-card {
    background: var(--rm-surface);
    border: 1px solid var(--rm-border);
    border-radius: var(--rm-radius-md);
    padding: 20px;
    box-shadow: var(--rm-shadow-sm);
    text-align: center;
}

.rm-pilot-task {
    font-family: var(--rm-font-mono);
    font-size: 0.82em;
    color: var(--rm-ink-muted);
    margin-bottom: 8px;
}

.rm-pilot-score {
    font-family: var(--rm-font-display);
    font-size: 1.5em;
    font-weight: 800;
    color: var(--rm-accent);
    line-height: 1;
    margin-bottom: 6px;
}

.rm-pilot-label {
    font-size: 0.78em;
    color: var(--rm-ink-muted);
}
/* ============================================
   TB Leaderboard Tables (Main Results section)
   ============================================ */
.tb-results-section {
    margin: 48px 0 32px 0;
}

.tb-results-section .tb-results-eyebrow {
    font-size: 12px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: var(--tb-accent);
    font-weight: 700;
    margin: 0 0 6px 0;
}

.tb-results-section h2.tb-results-title {
    font-family: var(--tb-font-display);
    font-size: 28px;
    font-weight: 700;
    color: var(--tb-ink);
    margin: 0 0 8px 0;
    letter-spacing: 0;
}

.tb-results-section .tb-results-blurb {
    color: var(--tb-ink-soft);
    font-size: 14.5px;
    line-height: 1.7;
    max-width: 920px;
    margin: 0 0 28px 0;
}

.tb-bench-card {
    background: var(--tb-surface);
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-lg);
    padding: 22px 24px 18px 24px;
    margin: 18px 0;
    box-shadow: var(--tb-shadow-sm);
    overflow: hidden;
}

.tb-bench-header {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 12px;
    border-bottom: 1px solid var(--tb-border);
    padding-bottom: 14px;
    margin-bottom: 18px;
}

.tb-bench-name {
    font-family: var(--tb-font-display);
    font-size: 19px;
    font-weight: 700;
    letter-spacing: 0;
    color: var(--tb-ink);
}

.tb-bench-name .tb-bench-emoji {
    font-size: 18px;
    margin-right: 6px;
}

.tb-bench-tag {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    padding: 3px 9px;
    border-radius: 999px;
    background: var(--tb-accent-bg);
    color: var(--tb-accent);
}

.tb-bench-tag.tb-bench-tag-evo  { background: rgba(37,99,235,0.08);   color: var(--tb-blue); }
.tb-bench-tag.tb-bench-tag-rm   { background: rgba(124,58,237,0.08);  color: var(--tb-violet); }

.tb-bench-meta {
    margin-left: auto;
    font-size: 12px;
    color: var(--tb-ink-muted);
    font-family: var(--tb-font-mono);
}

.tb-lb-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13.5px;
    font-variant-numeric: tabular-nums;
    table-layout: fixed;
}
.tb-lb-table colgroup col.tb-col-rank   { width: 60px; }
.tb-lb-table colgroup col.tb-col-model  { width: auto; }
.tb-lb-table colgroup col.tb-col-score  { width: 130px; }
.tb-lb-table colgroup col.tb-col-pf     { width: 130px; }
.tb-lb-table colgroup col.tb-col-cov    { width: 110px; }
.tb-lb-table colgroup col.tb-col-mode   { width: 130px; }
.tb-lb-table colgroup col.tb-col-metric { width: 86px; }
.tb-lb-table colgroup col.tb-col-output { width: 126px; }

.tb-lb-table thead th {
    text-align: left;
    font-size: 10.5px;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    font-weight: 700;
    color: var(--tb-ink-muted);
    padding: 10px 12px;
    border-bottom: 2px solid var(--tb-border);
    background: transparent;
    white-space: nowrap;
}
.tb-lb-table thead th.tb-th-num { text-align: right; }

.tb-lb-table tbody td {
    padding: 10px 12px;
    border-bottom: 1px solid var(--tb-border);
    color: var(--tb-ink);
    vertical-align: middle;
}
.tb-lb-table tbody td.tb-lb-num {
    text-align: right;
    font-variant-numeric: tabular-nums;
    font-family: var(--tb-font-mono);
    font-weight: 700;
    color: var(--tb-ink);
}
.tb-lb-table tbody tr:last-child td { border-bottom: none; }
.tb-lb-table tbody tr:hover td { background: var(--tb-surface-raised); }

.tb-lb-rank {
    font-family: var(--tb-font-mono);
    font-weight: 700;
    color: var(--tb-ink-muted);
    font-size: 13px;
}
.tb-lb-rank-1 { color: var(--tb-accent); }
.tb-lb-rank-2 { color: #b45309; }
.tb-lb-rank-3 { color: #6d28d9; }

.tb-lb-medal {
    display: inline-block;
    margin-right: 4px;
}

.tb-lb-model {
    font-weight: 600;
    color: var(--tb-ink);
}
.tb-lb-model-setting {
    display: block;
    margin-top: 3px;
    font-size: 10px;
    line-height: 1.2;
    font-weight: 800;
    color: var(--tb-ink-muted);
    text-transform: uppercase;
    letter-spacing: .25px;
}
.tb-lb-model.tb-lb-best { color: var(--tb-accent); }

.tb-lb-pill {
    display: inline-block;
    padding: 2px 8px;
    margin-left: 6px;
    border-radius: 999px;
    font-size: 10.5px;
    font-weight: 600;
    background: var(--tb-surface-sunken);
    color: var(--tb-ink-muted);
    letter-spacing: 0.4px;
    vertical-align: middle;
}

.tb-lb-bar-cell {
    text-align: right;
    font-variant-numeric: tabular-nums;
    font-family: var(--tb-font-mono);
    font-weight: 700;
    color: var(--tb-ink);
    position: relative;
}
.tb-lb-bar-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
}
.tb-lb-bar-track {
    flex: 1 1 auto;
    height: 6px;
    border-radius: 999px;
    background: var(--tb-surface-sunken);
    overflow: hidden;
    max-width: 90px;
}
.tb-lb-bar-fill {
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--tb-accent-light), var(--tb-accent));
}
.tb-lb-bar-fill.tb-lb-bar-blue   { background: linear-gradient(90deg, #60a5fa, var(--tb-blue)); }
.tb-lb-bar-fill.tb-lb-bar-violet { background: linear-gradient(90deg, #a78bfa, var(--tb-violet)); }

/* RoadmapBench scoped to violet */
.tb-bench-rm .tb-lb-bar-fill {
    background: linear-gradient(90deg, #a78bfa, #7c3aed);
}
.tb-bench-rm .tb-lb-rank-1,
.tb-bench-rm .tb-lb-model.tb-lb-best { color: #7c3aed; }
.tb-bench-rm .tb-lb-pf-pass { color: #7c3aed; }
.tb-bench-rm h4 { color: #7c3aed !important; }

/* EvoCode-Bench scoped to blue */
.tb-bench-evo .tb-lb-bar-fill {
    background: linear-gradient(90deg, #60a5fa, var(--tb-blue, #2563eb));
}
.tb-bench-evo .tb-lb-rank-1,
.tb-bench-evo .tb-lb-model.tb-lb-best { color: var(--tb-blue, #2563eb); }
.tb-bench-evo .tb-lb-pf-pass { color: var(--tb-blue, #2563eb); }
.tb-bench-evo h4 { color: var(--tb-blue, #2563eb) !important; }
.tb-lb-score-num {
    min-width: 56px;
    text-align: right;
}

.tb-lb-pf {
    font-family: var(--tb-font-mono);
    font-size: 13px;
    color: var(--tb-ink-soft);
}
.tb-lb-pf .tb-lb-pf-pass { color: var(--tb-accent); font-weight: 700; }
.tb-lb-pf .tb-lb-pf-sep  { color: var(--tb-ink-muted); margin: 0 3px; }
.tb-lb-pf .tb-lb-pf-fail { color: var(--tb-ink-muted); }

.tb-lb-cov {
    font-family: var(--tb-font-mono);
    font-size: 12.5px;
    color: var(--tb-ink-muted);
}

.tb-lb-mode {
    font-size: 11.5px;
    color: var(--tb-ink-soft);
    font-family: var(--tb-font-mono);
}
.tb-lb-mode .tb-lb-mode-tag {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 5px;
    background: var(--tb-surface);
    border: 1px solid var(--tb-border);
    color: var(--tb-ink);
    font-weight: 600;
    font-size: 11px;
}

/* Pass/fail heat-map: dot-style, no grid lines */
.tb-pf-matrix {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 11px;
    margin-top: 6px;
    background: transparent;
}
.tb-pf-matrix th {
    background: transparent;
    color: var(--tb-ink);
    font-weight: 600;
    padding: 4px 4px;
    border: none;
    border-bottom: 1px solid var(--tb-border);
    white-space: nowrap;
}
.tb-pf-matrix tbody tr {
    border-bottom: 1px dashed var(--tb-surface-sunken);
}
.tb-pf-matrix tbody tr:hover {
    background: var(--tb-surface-raised);
}
.tb-pf-matrix th.tb-pf-task,
.tb-pf-matrix td.tb-pf-task {
    text-align: left;
    padding: 4px 12px 4px 0;
    color: var(--tb-ink-soft);
    font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
    font-size: 10.5px;
    white-space: nowrap;
    border: none;
}
.tb-pf-matrix th.tb-pf-model {
    text-align: center;
    font-size: 10.5px;
    padding: 4px 4px;
    width: 22px;
    min-width: 22px;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    height: auto;
    white-space: nowrap;
    letter-spacing: 0.2px;
    vertical-align: bottom;
    border: none;
}
.tb-pf-matrix td.tb-pf-cell {
    padding: 0;
    width: 22px;
    min-width: 22px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    border: none;
    background: transparent;
}
.tb-pf-matrix td.tb-pf-cell::before {
    content: "";
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    vertical-align: middle;
}
.tb-pf-matrix td.tb-pf-pass { color: transparent; font-size: 0; }
.tb-pf-matrix td.tb-pf-pass::before { background: #0d9488; }
.tb-pf-matrix td.tb-pf-fail { color: transparent; font-size: 0; }
.tb-pf-matrix td.tb-pf-fail::before { background: #e2e8f0; }
.tb-pf-matrix th.tb-pf-count,
.tb-pf-matrix td.tb-pf-count {
    text-align: right;
    font-weight: 700;
    color: var(--tb-ink);
    padding: 4px 0 4px 12px;
    font-size: 11px;
    border: none;
}

/* Two-column wrapper: matrix + insights side panel */
.tb-pf-wrap {
    display: flex;
    gap: 18px;
    align-items: flex-start;
    margin-top: 8px;
    flex-wrap: wrap;
}
.tb-pf-matrix-col {
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
.tb-pf-matrix-col .tb-pf-matrix {
    min-width: 100%;
}
.tb-pf-side {
    flex: 1 1 320px;
    min-width: 280px;
    display: grid;
    gap: 12px;
}
.tb-pf-side-card {
    background: var(--tb-surface);
    border: 1px solid var(--tb-border);
    border-radius: 10px;
    padding: 14px 16px;
    box-shadow: var(--tb-shadow-sm);
}
.tb-pf-side-eyebrow {
    color: var(--tb-accent);
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    margin-bottom: 8px;
}
.tb-pf-side-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 12px;
    margin-bottom: 8px;
}
.tb-pf-stat {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 10px;
    background: var(--tb-surface-raised);
    border-radius: 6px;
}
.tb-pf-stat-num {
    font-size: 22px;
    font-weight: 800;
    color: var(--tb-ink);
    line-height: 1;
}
.tb-pf-stat-lbl {
    font-size: 10.5px;
    color: var(--tb-ink-soft);
    margin-top: 4px;
    line-height: 1.3;
}
.tb-pf-side-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    font-size: 12px;
    color: var(--tb-ink-soft);
    border-bottom: 1px dashed var(--tb-border);
}
.tb-pf-side-row:last-of-type { border-bottom: none; }
.tb-pf-side-row strong {
    color: var(--tb-ink);
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
}
.tb-pf-side-list {
    list-style: none;
    padding: 0;
    margin: 0 0 6px 0;
}
.tb-pf-side-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    font-size: 12px;
    color: var(--tb-ink-soft);
    border-bottom: 1px dashed var(--tb-border);
}
.tb-pf-side-list li:last-child { border-bottom: none; }
.tb-pf-side-list li strong {
    color: var(--tb-accent);
    font-weight: 700;
    font-size: 12px;
}
.tb-pf-side-note {
    margin-top: 8px;
    font-size: 11.5px;
    line-height: 1.55;
    color: var(--tb-ink-muted);
}
.tb-pf-side-note em {
    font-style: normal;
    font-weight: 600;
    color: var(--tb-ink-soft);
}

/* Mobile: matrix becomes a horizontally-scrollable, compact heat-map */
@media (max-width: 720px) {
    .tb-pf-wrap {
        flex-direction: column;
        gap: 14px;
    }
    .tb-pf-matrix-col {
        width: 100%;
        max-width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        border: 1px solid var(--tb-border);
        border-radius: 8px;
        padding: 10px 12px;
        background: var(--tb-surface);
    }
    .tb-pf-matrix-col .tb-pf-matrix { min-width: 0; }
    .tb-pf-matrix th.tb-pf-task,
    .tb-pf-matrix td.tb-pf-task {
        font-size: 9.5px;
        padding: 3px 8px 3px 0;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        position: sticky;
        left: 0;
        background: var(--tb-surface);
        z-index: 1;
    }
    .tb-pf-matrix th.tb-pf-model {
        font-size: 9px;
        padding: 4px 2px;
        width: 16px;
        min-width: 16px;
    }
    .tb-pf-matrix td.tb-pf-cell {
        width: 16px;
        min-width: 16px;
        height: 14px;
    }
    .tb-pf-matrix td.tb-pf-cell::before {
        width: 7px;
        height: 7px;
    }
    .tb-pf-matrix th.tb-pf-count,
    .tb-pf-matrix td.tb-pf-count {
        font-size: 10px;
        padding: 3px 0 3px 6px;
    }
    .tb-pf-side {
        flex: 1 1 100%;
        min-width: 0;
    }
    .tb-pf-side-stats {
        grid-template-columns: 1fr 1fr;
    }
}


    border: 1px dashed var(--tb-border);
    border-radius: 12px;
    padding: 36px 24px;
    text-align: center;
    color: var(--tb-ink-soft);
    font-size: 13.5px;
    line-height: 1.7;
}
.tb-lb-placeholder strong { color: var(--tb-ink); font-size: 14px; letter-spacing: 0.3px; }
.tb-lb-placeholder em { color: var(--tb-ink-soft); font-style: normal; font-weight: 600; }
.tb-lb-placeholder code {
    background: #ffffff;
    color: var(--tb-ink) !important;
    border: 1px solid var(--tb-border);
    padding: 2px 8px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 600;
    font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
}

@media (max-width: 720px) {
    .tb-lb-table { font-size: 12px; table-layout: auto; }
    .tb-lb-table colgroup col.tb-col-cov,
    .tb-lb-table colgroup col.tb-col-mode { width: 0; }
    .tb-lb-table colgroup col.tb-col-score { width: auto; }
    .tb-lb-table colgroup col.tb-col-rank { width: 40px; }
    .tb-lb-table thead th.tb-hide-sm,
    .tb-lb-table tbody td.tb-hide-sm { display: none; }
    .tb-lb-table thead th { padding: 8px 6px; }
    .tb-lb-table tbody td { padding: 8px 6px; }
    .tb-bench-meta { margin-left: 0; flex-basis: 100%; }
    .tb-bench-card { padding: 14px 12px 12px 12px; }
    .tb-lb-bar-wrap {
        flex-direction: column;
        align-items: flex-end;
        gap: 4px;
    }
    .tb-lb-bar-track {
        max-width: 100%;
        width: 100%;
    }
    .tb-lb-score-num {
        min-width: unset;
        font-size: 12px;
    }
    .tb-bench-header {
        gap: 8px;
        padding-bottom: 10px;
        margin-bottom: 12px;
    }
    .tb-bench-name { font-size: 16px; }
}

/* --- Unified Visual System --- */
:root {
    --tb-ink: #111827;
    --tb-ink-soft: #374151;
    --tb-ink-muted: #6b7280;
    --tb-surface: #ffffff;
    --tb-surface-raised: #f9fafb;
    --tb-surface-sunken: #f3f4f6;
    --tb-border: #e5e7eb;
    --tb-accent: #0f766e;
    --tb-accent-light: #14b8a6;
    --tb-accent-lighter: #ccfbf1;
    --tb-accent-dark: #0f766e;
    --tb-accent-bg: rgba(15, 118, 110, 0.07);
    --tb-blue: #2563eb;
    --tb-blue-bg: rgba(37, 99, 235, 0.07);
    --tb-green: #059669;
    --tb-green-bg: rgba(5, 150, 105, 0.07);
    --tb-amber: #b45309;
    --tb-amber-bg: rgba(180, 83, 9, 0.07);
    --tb-rose: #be123c;
    --tb-rose-bg: rgba(190, 18, 60, 0.07);
    --tb-violet: #7c3aed;
    --tb-violet-bg: rgba(124, 58, 237, 0.07);
    --tb-radius-sm: 6px;
    --tb-radius-md: 8px;
    --tb-radius-lg: 8px;
    --tb-shadow-sm: 0 1px 2px rgba(17, 24, 39, 0.04);
    --tb-shadow-md: 0 8px 22px rgba(17, 24, 39, 0.07);
    --tb-shadow-lg: 0 18px 44px rgba(17, 24, 39, 0.09);
}

:root {
    --mt-font-body: var(--tb-font-body);
    --mt-font-mono: var(--tb-font-mono);
    --mt-ink: var(--tb-ink);
    --mt-ink-soft: var(--tb-ink-soft);
    --mt-ink-muted: var(--tb-ink-muted);
    --mt-surface: var(--tb-surface);
    --mt-surface-raised: var(--tb-surface-raised);
    --mt-surface-sunken: var(--tb-surface-sunken);
    --mt-border: var(--tb-border);
    --mt-accent: var(--tb-blue);
    --mt-accent-light: #3b82f6;
    --mt-accent-bg: var(--tb-blue-bg);
    --mt-green: var(--tb-green);
    --mt-green-bg: var(--tb-green-bg);
    --mt-amber: var(--tb-amber);
    --mt-amber-bg: var(--tb-amber-bg);
    --mt-rose: var(--tb-rose);
    --mt-rose-bg: var(--tb-rose-bg);
    --mt-violet: var(--tb-violet);
    --mt-violet-bg: var(--tb-violet-bg);
    --mt-radius-sm: var(--tb-radius-sm);
    --mt-radius-md: var(--tb-radius-md);
    --mt-radius-lg: var(--tb-radius-lg);
    --mt-shadow-sm: var(--tb-shadow-sm);
    --mt-shadow-md: var(--tb-shadow-md);
    --mt-shadow-lg: var(--tb-shadow-lg);

    --rm-font-display: var(--tb-font-display);
    --rm-font-body: var(--tb-font-body);
    --rm-font-mono: var(--tb-font-mono);
    --rm-ink: var(--tb-ink);
    --rm-ink-soft: var(--tb-ink-soft);
    --rm-ink-muted: var(--tb-ink-muted);
    --rm-surface: var(--tb-surface);
    --rm-surface-raised: var(--tb-surface-raised);
    --rm-surface-sunken: var(--tb-surface-sunken);
    --rm-border: var(--tb-border);
    --rm-accent: var(--tb-violet);
    --rm-accent-light: #8b5cf6;
    --rm-accent-lighter: #ede9fe;
    --rm-accent-dark: #6d28d9;
    --rm-accent-bg: var(--tb-violet-bg);
    --rm-green: var(--tb-green);
    --rm-green-bg: var(--tb-green-bg);
    --rm-amber: var(--tb-amber);
    --rm-amber-bg: var(--tb-amber-bg);
    --rm-rose: var(--tb-rose);
    --rm-blue: var(--tb-blue);
    --rm-radius-sm: var(--tb-radius-sm);
    --rm-radius-md: var(--tb-radius-md);
    --rm-radius-lg: var(--tb-radius-lg);
    --rm-shadow-sm: var(--tb-shadow-sm);
    --rm-shadow-md: var(--tb-shadow-md);
    --rm-shadow-lg: var(--tb-shadow-lg);
}

.markdown * {
    letter-spacing: 0 !important;
}

.tb-hero::before,
.mt-hero::before {
    display: none;
}

.tb-section-rule,
.mt-section-rule,
.rm-section-rule {
    background: var(--tb-border);
    opacity: 1;
    margin: 48px 0;
}

.tb-epigraph,
.mt-epigraph,
.rm-epigraph,
.tb-callout,
.rm-callout,
.mt-highlight-box,
.mt-future-box,
.tb-companion-box,
.rm-score-box {
    background: var(--tb-surface-raised);
    border: 1px solid var(--tb-border);
    border-left: 4px solid currentColor;
    border-radius: var(--tb-radius-md);
    box-shadow: none;
}

.tb-callout,
.tb-epigraph {
    color: var(--tb-accent);
}

.mt-epigraph,
.mt-highlight-box,
.mt-future-box {
    color: var(--mt-accent);
}

.rm-epigraph,
.rm-callout,
.rm-score-box {
    color: var(--rm-accent);
}

.tb-callout p,
.tb-epigraph,
.mt-epigraph,
.rm-epigraph,
.rm-callout p,
.mt-highlight-box p,
.mt-future-box p,
.tb-companion-box p,
.rm-score-box p {
    color: var(--tb-ink-soft);
}

.tb-stat-card,
.mt-stat-card,
.rm-stat-card,
.tb-source-card,
.mt-challenge-card,
.mt-feature-card,
.mt-dimension-card,
.mt-conv-box,
.mt-score-card,
.mt-principle-box,
.rm-challenge-card,
.rm-lang-card,
.rm-dimension-card,
.rm-pilot-card,
.tb-bench-card,
.tb-insight-card,
.tb-qa-content {
    border-radius: var(--tb-radius-md);
    border-color: var(--tb-border);
    background: var(--tb-surface);
    box-shadow: var(--tb-shadow-sm);
}

.tb-stat-card:hover,
.mt-stat-card:hover,
.rm-stat-card:hover,
.tb-source-card:hover,
.mt-challenge-card:hover,
.mt-feature-card:hover,
.mt-dimension-card:hover,
.rm-challenge-card:hover,
.rm-lang-card:hover,
.tb-qa-content:hover {
    box-shadow: var(--tb-shadow-md);
}

.tb-format-table th,
.tb-verify-table th,
.tb-bug-table th,
.tb-leaderboard th,
.tb-stats-table th,
.mt-cross-table th,
.rm-stats-table thead th {
    background: var(--tb-surface-sunken);
    color: var(--tb-ink);
    border-bottom: 2px solid var(--tb-border);
}

.tb-format-table,
.tb-stats-table,
.tb-verify-table,
.tb-bug-table,
.tb-leaderboard,
.mt-cross-table {
    border-radius: var(--tb-radius-md);
    border-color: var(--tb-border);
}

.tb-lb-placeholder {
    background: var(--tb-surface-raised);
    border: 1px solid var(--tb-border);
    border-radius: var(--tb-radius-md);
    text-align: left;
}

.tb-lb-bar-fill,
.tb-score-bar,
.tb-verify-bar {
    background: var(--tb-accent);
}

.tb-lb-bar-fill.tb-lb-bar-blue {
    background: var(--tb-blue);
}

.tb-lb-bar-fill.tb-lb-bar-violet {
    background: var(--tb-violet);
}

.tb-bench-tag,
.tb-tag,
.mt-dimension-card .mt-dim-tag,
.rm-dim-tag,
.rm-lang-count,
.tb-lb-pill,
.tb-lb-mode .tb-lb-mode-tag {
    border-radius: 999px;
    border: 1px solid currentColor;
}

.tb-rank-1,
.tb-lb-rank-1,
.tb-lb-model.tb-lb-best {
    color: var(--tb-accent);
}

.tb-rank-2,
.tb-lb-rank-2 {
    color: var(--tb-amber);
}

.tb-rank-3,
.tb-lb-rank-3 {
    color: var(--tb-violet);
}

.tb-code-block,
.rm-structure-box,
.mt-cite-block pre {
    background: #111827;
    color: #e5e7eb;
    border-radius: var(--tb-radius-md);
}

.tb-toc {
    border-radius: var(--tb-radius-md);
    box-shadow: var(--tb-shadow-md);
}

</style>
<!-- ===== TOC (Floating) ===== -->
<nav class="tb-toc" id="tb-toc">
    <div class="tb-toc-toggle" onclick="this.parentElement.classList.toggle('collapsed')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
    </div>
    <div class="tb-toc-title">Contents</div>
    <div class="tb-toc-progress"><div class="tb-toc-progress-bar" id="tb-toc-bar"></div></div>
    <ul class="tb-toc-list">
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-results">Main Results</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-intro">1. Introduction</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-glance">2. Three Datasets at a Glance</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-foundation">3. Shared Foundation: Harbor Task Spec</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-format">4. Task Format: Three Variants</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h3" href="#tb-format-deep">4.1 DeepTerminalBench</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h3" href="#tb-format-evo">4.2 Multi-Turn (EvoCode-Bench)</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h3" href="#tb-format-roadmap">4.3 Version-Upgrade (RoadmapBench)</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-coverage">5. Sources &amp; Coverage</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h3" href="#tb-sources">5.1 Real-World Source Pool</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h3" href="#tb-taxonomies">5.2 Three Complementary Taxonomies</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-statistics">6. Dataset Statistics</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-scoring">7. Verification &amp; Scoring</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-qa">8. Quality Assurance</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-infra">9. Infrastructure: Extending Harbor</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-examples">10. Task Examples</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h3" href="#tb-ex-deep">10.1 DeepTerminalBench</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h3" href="#tb-ex-evo">10.2 EvoCode-Bench</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h3" href="#tb-ex-roadmap">10.3 RoadmapBench</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-eval">11. Evaluation Insights</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-future">12. Looking Forward</a></li>
        <li class="tb-toc-item"><a class="tb-toc-link tb-toc-h2" href="#tb-summary">13. Summary</a></li>
    </ul>
</nav>
<!-- ===== HERO ===== -->
<div class="tb-hero tb-animate">
    <p class="tb-subtitle">

    Terminal-X tests whether coding agents can solve calibrated terminal tasks in one shot, preserve correctness across multi-turn requirement changes, and implement real version-upgrade roadmaps.

    </p>
    <div class="tb-hero-links">
        <a class="tb-hero-link" href="#tb-results">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            Results
        </a>
        <a class="tb-hero-link" href="#tb-scoring">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            Scoring
        </a>
        <a class="tb-hero-link" href="#tb-examples">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            Task Examples
        </a>
        <a class="tb-hero-link" href="https://github.com/UniPat-AI/Terminal-X" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
        </a>
    </div>
    <div style="margin: 24px 0 32px 0; padding: 16px 0; border-top: 1px solid var(--tb-border); border-bottom: 1px solid var(--tb-border);">
        <p style="margin: 8px 0; font-size: 14px;"><strong>UniPat AI Coding Team</strong></p>
        <p style="margin: 8px 0; font-size: 14px;"><strong><a href="mailto:contact@unipat.ai">contact@unipat.ai</a></strong></p>
    </div>

    <div class="tb-epigraph">
Coding agents eventually have to work in shells, edit real files, and pass real tests. Terminal-X keeps the evaluation there. DeepTerminalBench asks whether an agent can finish a hard terminal task in one shot. EvoCode-Bench asks whether it can keep a project working across 26 multi-turn tasks and 227 evaluated rounds. RoadmapBench asks whether it can implement version-upgrade roadmaps across 115 tasks from 17 repositories and 5 programming languages.
</div>

</div>


<!-- ===== STATS BANNERS ===== -->
<div class="tb-stats-grid tb-animate tb-animate-delay-3">
    <div class="tb-stat-card">
        <div class="tb-stat-number">50</div>
        <div class="tb-stat-label">DeepTerminalBench Tasks</div>
    </div>
    <div class="tb-stat-card">
        <div class="tb-stat-number">20+</div>
        <div class="tb-stat-label">Engineering Domains</div>
    </div>
    <div class="tb-stat-card">
        <div class="tb-stat-number">12</div>
        <div class="tb-stat-label">Workload Types</div>
    </div>
    <div class="tb-stat-card">
        <div class="tb-stat-number">~42</div>
        <div class="tb-stat-label">Avg Agent Steps per Attempt <span style="font-weight: 500; opacity: 0.7;">(Claude-Opus-4.6)</span></div>
    </div>
</div>
<div class="mt-stats-grid tb-animate tb-animate-delay-3" style="margin-top: -16px;">
    <div class="mt-stat-card">
        <div class="mt-stat-number">26</div>
        <div class="mt-stat-label">Multi-Turn Tasks</div>
    </div>
    <div class="mt-stat-card">
        <div class="mt-stat-number">227</div>
        <div class="mt-stat-label">Evaluated Rounds</div>
    </div>
    <div class="mt-stat-card">
        <div class="mt-stat-number">5-15</div>
        <div class="mt-stat-label">Rounds per Task (Standard)</div>
    </div>
    <div class="mt-stat-card">
        <div class="mt-stat-number">4</div>
        <div class="mt-stat-label">Engineering Activities</div>
    </div>
    <div class="mt-stat-card">
        <div class="mt-stat-number">3</div>
        <div class="mt-stat-label">Interaction Styles</div>
    </div>
</div>
<div class="rm-stats-grid tb-animate tb-animate-delay-3" style="margin-top: -16px;">
    <div class="rm-stat-card rm-animate">
        <div class="rm-stat-number">115</div>
        <div class="rm-stat-label">Version Upgrade Tasks</div>
    </div>
    <div class="rm-stat-card rm-animate">
        <div class="rm-stat-number">17</div>
        <div class="rm-stat-label">Open-Source Repositories</div>
    </div>
    <div class="rm-stat-card rm-animate">
        <div class="rm-stat-number">5</div>
        <div class="rm-stat-label">Programming Languages</div>
    </div>
    <div class="rm-stat-card rm-animate">
        <div class="rm-stat-number">~3,700</div>
        <div class="rm-stat-label">Median Oracle Patch (LOC)</div>
    </div>
</div>

<!-- ===== MAIN RESULTS / LEADERBOARDS ===== -->
<div class="tb-results-section tb-animate" id="tb-results">
    <p class="tb-results-eyebrow">Main Results</p>
    <h2 class="tb-results-title">Execution-Based Results Across the Three Datasets</h2>
    <p class="tb-results-blurb">
        The three result blocks correspond to three evaluation settings. DeepTerminalBench reports how often a model completes a calibrated single-shot terminal task. EvoCode-Bench reports whether correctness carries across changing requirements: its table includes both persistent multi-turn success (<strong>MT@4</strong>) and isolated single-round success (<strong>SR</strong>) so the state-carrying gap is explicit. RoadmapBench reports how much of a real version-upgrade roadmap a model completes under phase-weighted tests.
    </p>

    <!-- DeepTerminalBench leaderboard -->
    <div class="tb-bench-card">
        <div class="tb-bench-header">
            <span class="tb-bench-name"><span class="tb-bench-emoji">🧪</span>DeepTerminalBench</span>
            <span class="tb-bench-tag">Depth · Single-shot</span>
            <span class="tb-bench-meta">50 tasks · pass@1 · terminus-2 · calibrated by Claude-Opus-4.6 Pass@4</span>
        </div>
        <div class="tb-lb-placeholder" style="margin-bottom:14px;">
            <strong>Metric.</strong> <strong>Pass@1</strong> is the single-attempt task success rate: each model receives one agent run per task, and a task is counted as passed only if the hidden <code>tests/test.sh</code> verification returns reward = 1.0. <strong>Avg Turns</strong> reports how many agent-model exchanges the run uses on average. <strong>Output Tok. (K)</strong> reports how many tokens the model generates during those exchanges, in thousands. <strong>Calibration.</strong> All 50 tasks are validated under Claude-Opus-4.6 with four attempts &mdash; every task is solved by at least one of the four Pass@4 attempts, ensuring it is reachable for a frontier-tier model rather than impossible by construction; the curated subset specifically retains tasks where strong models still fail under single-attempt Pass@1, preserving headroom for the leaderboard.
        </div>
        <table class="tb-lb-table">
            <colgroup>
                <col class="tb-col-rank" />
                <col class="tb-col-model" />
                <col class="tb-col-score" />
                <col class="tb-col-pf" />
                <col class="tb-col-cov" />
                <col class="tb-col-mode" />
            </colgroup>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Model</th>
                    <th class="tb-th-num">Pass@1</th>
                    <th>Pass / Fail</th>
                    <th class="tb-th-num tb-hide-sm">Avg Turns</th>
                    <th class="tb-th-num tb-hide-sm">Output Tok. (K)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="tb-lb-rank tb-lb-rank-1"><span class="tb-lb-medal">🥇</span>1</span></td>
                    <td><span class="tb-lb-model tb-lb-best">Claude-Opus-4.7</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:100%"></div></div><span class="tb-lb-score-num">34.00%</span></div></td>
                    <td><span class="tb-lb-pf"><span class="tb-lb-pf-pass">17</span><span class="tb-lb-pf-sep">/</span><span class="tb-lb-pf-fail">33</span></span></td>
                    <td class="tb-hide-sm tb-th-num">14.7</td>
                    <td class="tb-hide-sm tb-th-num">11.4</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank tb-lb-rank-2"><span class="tb-lb-medal">🥈</span>2</span></td>
                    <td><span class="tb-lb-model">GPT-5.5-high</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:94%"></div></div><span class="tb-lb-score-num">32.00%</span></div></td>
                    <td><span class="tb-lb-pf"><span class="tb-lb-pf-pass">16</span><span class="tb-lb-pf-sep">/</span><span class="tb-lb-pf-fail">34</span></span></td>
                    <td class="tb-hide-sm tb-th-num">9.5</td>
                    <td class="tb-hide-sm tb-th-num">13.3</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank tb-lb-rank-3"><span class="tb-lb-medal">🥉</span>3</span></td>
                    <td><span class="tb-lb-model">DeepSeek-V4-Pro</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:94%"></div></div><span class="tb-lb-score-num">32.00%</span></div></td>
                    <td><span class="tb-lb-pf"><span class="tb-lb-pf-pass">16</span><span class="tb-lb-pf-sep">/</span><span class="tb-lb-pf-fail">34</span></span></td>
                    <td class="tb-hide-sm tb-th-num">30.4</td>
                    <td class="tb-hide-sm tb-th-num">46.0</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">4</span></td>
                    <td><span class="tb-lb-model">Kimi-K2.6</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:94%"></div></div><span class="tb-lb-score-num">32.00%</span></div></td>
                    <td><span class="tb-lb-pf"><span class="tb-lb-pf-pass">16</span><span class="tb-lb-pf-sep">/</span><span class="tb-lb-pf-fail">34</span></span></td>
                    <td class="tb-hide-sm tb-th-num">29.6</td>
                    <td class="tb-hide-sm tb-th-num">42.0</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">5</span></td>
                    <td><span class="tb-lb-model">Qwen-3.6-Plus</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:94%"></div></div><span class="tb-lb-score-num">32.00%</span></div></td>
                    <td><span class="tb-lb-pf"><span class="tb-lb-pf-pass">16</span><span class="tb-lb-pf-sep">/</span><span class="tb-lb-pf-fail">34</span></span></td>
                    <td class="tb-hide-sm tb-th-num">20.9</td>
                    <td class="tb-hide-sm tb-th-num">43.3</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">6</span></td>
                    <td><span class="tb-lb-model">GLM-5.1</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:88%"></div></div><span class="tb-lb-score-num">30.00%</span></div></td>
                    <td><span class="tb-lb-pf"><span class="tb-lb-pf-pass">15</span><span class="tb-lb-pf-sep">/</span><span class="tb-lb-pf-fail">35</span></span></td>
                    <td class="tb-hide-sm tb-th-num">24.2</td>
                    <td class="tb-hide-sm tb-th-num">32.1</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">7</span></td>
                    <td><span class="tb-lb-model">Qwen-3.5-397B-A17B</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:70%"></div></div><span class="tb-lb-score-num">24.00%</span></div></td>
                    <td><span class="tb-lb-pf"><span class="tb-lb-pf-pass">12</span><span class="tb-lb-pf-sep">/</span><span class="tb-lb-pf-fail">38</span></span></td>
                    <td class="tb-hide-sm tb-th-num">26.1</td>
                    <td class="tb-hide-sm tb-th-num">21.2</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">8</span></td>
                    <td><span class="tb-lb-model">Gemini-3.1-Pro</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:47%"></div></div><span class="tb-lb-score-num">16.00%</span></div></td>
                    <td><span class="tb-lb-pf"><span class="tb-lb-pf-pass">8</span><span class="tb-lb-pf-sep">/</span><span class="tb-lb-pf-fail">42</span></span></td>
                    <td class="tb-hide-sm tb-th-num">10.5</td>
                    <td class="tb-hide-sm tb-th-num">40.1</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">9</span></td>
                    <td><span class="tb-lb-model">MiniMax-M2.7</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:29%"></div></div><span class="tb-lb-score-num">10.00%</span></div></td>
                    <td><span class="tb-lb-pf"><span class="tb-lb-pf-pass">5</span><span class="tb-lb-pf-sep">/</span><span class="tb-lb-pf-fail">45</span></span></td>
                    <td class="tb-hide-sm tb-th-num">36.8</td>
                    <td class="tb-hide-sm tb-th-num">34.6</td>
                </tr>
            </tbody>
        </table>
        <div style="margin-top:14px; display:flex; align-items:center; gap:14px; padding:12px 16px; background:var(--tb-surface-raised); border:1px solid var(--tb-border); border-radius:10px;">
            <div style="flex:0 0 auto;">
                <a href="#tb-pf-matrix" aria-label="Jump to per-task pass/fail map" style="display:block; line-height:0;">
                    <svg width="84" height="60" viewBox="0 0 84 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                        <rect x="0" y="0" width="84" height="60" rx="3" fill="#f8fafc" stroke="#e2e8f0"/>
                        <!-- mini pass/fail thumbnail (50 rows × 10 cols) generated server-side; static decorative SVG -->
                        <rect x="2.0" y="2.00" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="2.00" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="2.00" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="2.00" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="2.00" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="2.00" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="58.0" y="2.00" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="3.12" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="3.12" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="3.12" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="3.12" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="58.0" y="3.12" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="66.0" y="3.12" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="4.24" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="4.24" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="4.24" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="4.24" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="66.0" y="4.24" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="74.0" y="4.24" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="5.36" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="5.36" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="5.36" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="5.36" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="58.0" y="5.36" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="74.0" y="5.36" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="6.48" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="6.48" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="6.48" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="50.0" y="6.48" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="58.0" y="6.48" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="7.60" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="7.60" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="7.60" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="7.60" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="50.0" y="7.60" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="8.72" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="8.72" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="8.72" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="8.72" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="8.72" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="9.84" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="9.84" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="50.0" y="9.84" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="58.0" y="9.84" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="66.0" y="9.84" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="10.96" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="10.96" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="10.96" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="10.96" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="66.0" y="10.96" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="12.08" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="12.08" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="50.0" y="12.08" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="58.0" y="12.08" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="13.20" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="13.20" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="13.20" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="58.0" y="13.20" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="14.32" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="14.32" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="14.32" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="14.32" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="15.44" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="15.44" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="15.44" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="50.0" y="15.44" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="16.56" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="16.56" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="16.56" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="17.68" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="17.68" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="17.68" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="18.80" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="18.80" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="50.0" y="18.80" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="19.92" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="19.92" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="19.92" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="21.04" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="21.04" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="21.04" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="22.16" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="22.16" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="58.0" y="22.16" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="23.28" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="23.28" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="23.28" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="24.40" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="24.40" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="24.40" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="25.52" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="25.52" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="26.64" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="26.64" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="27.76" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="50.0" y="27.76" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="28.88" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="28.88" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="30.00" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="50.0" y="30.00" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="31.12" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="31.12" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="32.24" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="32.24" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="2.0" y="33.36" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="50.0" y="33.36" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="34.48" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="34.48" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="35.60" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="35.60" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="36.72" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="36.72" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="42.0" y="37.84" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="50.0" y="38.96" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="40.08" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="10.0" y="41.20" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="42.32" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="18.0" y="43.44" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="66.0" y="44.56" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="26.0" y="45.68" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="50.0" y="46.80" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="50.0" y="47.92" width="7.6" height="1.00" fill="#0d9488"/>
                        <rect x="34.0" y="49.04" width="7.6" height="1.00" fill="#0d9488"/>
                    </svg>
                </a>
            </div>
            <div style="flex:1 1 auto; color:var(--tb-ink-soft); font-size:12.5px; line-height:1.55;">
                <div style="font-weight:600; color:var(--tb-ink); font-size:13px; margin-bottom:2px;">Per-task pass/fail map</div>
                A 50-task &times; 9-model heat-map showing which tasks each model solved, ordered by difficulty. <a href="#tb-pf-matrix" style="color:var(--tb-accent); font-weight:600;">View the full matrix &rarr;</a>
            </div>
        </div>
    </div>

    <!-- EvoCode-Bench leaderboard -->
    <div class="tb-bench-card tb-bench-evo">
        <div class="tb-bench-header">
            <span class="tb-bench-name"><span class="tb-bench-emoji">🔄</span>EvoCode-Bench</span>
            <span class="tb-bench-tag tb-bench-tag-evo">Iteration · Multi-turn</span>
            <span class="tb-bench-meta">26 tasks · 227 rounds · multi-turn + single-round · terminus-2</span>
        </div>
        <div class="tb-lb-placeholder" style="margin-bottom:14px;">
            <strong>Metrics.</strong> <strong>MT@4</strong> is the four-attempt fail-stop multi-turn score: for each task and round, a pass is credited if any of four persistent attempts reaches that round successfully, then passed rounds are averaged. <strong>SR</strong> is the single-round pass rate from a reference-fast-forwarded workspace. <strong>Comp</strong> is the fraction of tasks completed through the final round. Model-name sublabels show the exact evaluation setting from the paper appendix. <strong>Avg. Turns</strong> reports the average number of agent-model exchanges needed to execute a full multi-turn task; partial trajectories are scaled to the task's full round horizon. <strong>Output Tok. (K)</strong> reports provider-reported generated-token usage across those exchanges, in thousands; hidden reasoning tokens are included only when the provider reports them as completion/output tokens.
        </div>
        <table class="tb-lb-table">
            <colgroup>
                <col class="tb-col-rank" />
                <col class="tb-col-model" />
                <col class="tb-col-score" />
                <col class="tb-col-metric" />
                <col class="tb-col-metric" />
                <col class="tb-col-metric" />
                <col class="tb-col-output" />
            </colgroup>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Model</th>
                    <th class="tb-th-num">MT@4</th>
                    <th class="tb-th-num">SR</th>
                    <th class="tb-th-num">Comp</th>
                    <th class="tb-th-num tb-hide-sm">Avg. Turns</th>
                    <th class="tb-th-num tb-hide-sm">Output Tok. (K)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="tb-lb-rank tb-lb-rank-1"><span class="tb-lb-medal">🥇</span>1</span></td>
                    <td><span class="tb-lb-model tb-lb-best">Claude-Opus-4.7-High</span><span class="tb-lb-model-setting">high reasoning effort</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:100%"></div></div><span class="tb-lb-score-num">54.0</span></div></td>
                    <td class="tb-lb-num">76.7</td>
                    <td class="tb-lb-num">42.3</td>
                    <td class="tb-lb-num tb-hide-sm">590.6</td>
                    <td class="tb-lb-num tb-hide-sm">50.0</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank tb-lb-rank-2"><span class="tb-lb-medal">🥈</span>2</span></td>
                    <td><span class="tb-lb-model">GPT-5.5-High</span><span class="tb-lb-model-setting">high reasoning effort</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:97%"></div></div><span class="tb-lb-score-num">52.4</span></div></td>
                    <td class="tb-lb-num">74.4</td>
                    <td class="tb-lb-num">38.5</td>
                    <td class="tb-lb-num tb-hide-sm">456.3</td>
                    <td class="tb-lb-num tb-hide-sm">74.1</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank tb-lb-rank-3"><span class="tb-lb-medal">🥉</span>3</span></td>
                    <td><span class="tb-lb-model">Claude-Opus-4.6</span><span class="tb-lb-model-setting">default configured reasoning</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:81%"></div></div><span class="tb-lb-score-num">44.0</span></div></td>
                    <td class="tb-lb-num">78.9</td>
                    <td class="tb-lb-num">34.6</td>
                    <td class="tb-lb-num tb-hide-sm">747.5</td>
                    <td class="tb-lb-num tb-hide-sm">734.2</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">4</span></td>
                    <td><span class="tb-lb-model">GLM-5.1</span><span class="tb-lb-model-setting">thinking enabled</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:67%"></div></div><span class="tb-lb-score-num">36.2</span></div></td>
                    <td class="tb-lb-num">63.9</td>
                    <td class="tb-lb-num">15.4</td>
                    <td class="tb-lb-num tb-hide-sm">859.8</td>
                    <td class="tb-lb-num tb-hide-sm">104.2</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">5</span></td>
                    <td><span class="tb-lb-model">Kimi-K2.6</span><span class="tb-lb-model-setting">thinking enabled</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:59%"></div></div><span class="tb-lb-score-num">31.9</span></div></td>
                    <td class="tb-lb-num">59.0</td>
                    <td class="tb-lb-num">23.1</td>
                    <td class="tb-lb-num tb-hide-sm">1155.5</td>
                    <td class="tb-lb-num tb-hide-sm">92.5</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">6</span></td>
                    <td><span class="tb-lb-model">DeepSeek-V4-Pro</span><span class="tb-lb-model-setting">high reasoning effort</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:57%"></div></div><span class="tb-lb-score-num">30.6</span></div></td>
                    <td class="tb-lb-num">56.4</td>
                    <td class="tb-lb-num">19.2</td>
                    <td class="tb-lb-num tb-hide-sm">1134.8</td>
                    <td class="tb-lb-num tb-hide-sm">168.8</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">7</span></td>
                    <td><span class="tb-lb-model">Qwen3.6-Plus</span><span class="tb-lb-model-setting">thinking enabled</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:54%"></div></div><span class="tb-lb-score-num">29.4</span></div></td>
                    <td class="tb-lb-num">57.3</td>
                    <td class="tb-lb-num">15.4</td>
                    <td class="tb-lb-num tb-hide-sm">629.3</td>
                    <td class="tb-lb-num tb-hide-sm">103.1</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">8</span></td>
                    <td><span class="tb-lb-model">Xiaomi-MiMo-V2.5-Pro</span><span class="tb-lb-model-setting">high reasoning effort</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:33%"></div></div><span class="tb-lb-score-num">17.3</span></div></td>
                    <td class="tb-lb-num">7.9</td>
                    <td class="tb-lb-num">11.5</td>
                    <td class="tb-lb-num tb-hide-sm">754.8</td>
                    <td class="tb-lb-num tb-hide-sm">125.7</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">9</span></td>
                    <td><span class="tb-lb-model">Gemini-3.1-Pro-Preview</span><span class="tb-lb-model-setting">high reasoning effort</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:26%"></div></div><span class="tb-lb-score-num">13.7</span></div></td>
                    <td class="tb-lb-num">46.7</td>
                    <td class="tb-lb-num">11.5</td>
                    <td class="tb-lb-num tb-hide-sm">261.3</td>
                    <td class="tb-lb-num tb-hide-sm">72.7</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">10</span></td>
                    <td><span class="tb-lb-model">DeepSeek-V4-Flash</span><span class="tb-lb-model-setting">high reasoning effort</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:18%"></div></div><span class="tb-lb-score-num">9.4</span></div></td>
                    <td class="tb-lb-num">46.3</td>
                    <td class="tb-lb-num">0.0</td>
                    <td class="tb-lb-num tb-hide-sm">1104.7</td>
                    <td class="tb-lb-num tb-hide-sm">148.7</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">11</span></td>
                    <td><span class="tb-lb-model">Qwen3.5-397B-A17B</span><span class="tb-lb-model-setting">thinking enabled</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:9%"></div></div><span class="tb-lb-score-num">4.6</span></div></td>
                    <td class="tb-lb-num">44.1</td>
                    <td class="tb-lb-num">0.0</td>
                    <td class="tb-lb-num tb-hide-sm">587.8</td>
                    <td class="tb-lb-num tb-hide-sm">53.0</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">12</span></td>
                    <td><span class="tb-lb-model">MiniMax-M2.7</span><span class="tb-lb-model-setting">reasoning split enabled</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:7%"></div></div><span class="tb-lb-score-num">3.7</span></div></td>
                    <td class="tb-lb-num">30.0</td>
                    <td class="tb-lb-num">0.0</td>
                    <td class="tb-lb-num tb-hide-sm">600.4</td>
                    <td class="tb-lb-num tb-hide-sm">59.2</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">13</span></td>
                    <td><span class="tb-lb-model">Doubao-Seed-2.0-Pro</span><span class="tb-lb-model-setting">high reasoning effort</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill tb-lb-bar-blue" style="width:4%"></div></div><span class="tb-lb-score-num">1.9</span></div></td>
                    <td class="tb-lb-num">23.8</td>
                    <td class="tb-lb-num">0.0</td>
                    <td class="tb-lb-num tb-hide-sm">211.1</td>
                    <td class="tb-lb-num tb-hide-sm">18.5</td>
                </tr>
            </tbody>
        </table>
        <div class="tb-lb-placeholder" style="margin-top:14px;">
            The SR-to-MT@4 gap measures state-carrying failure: a model may solve a round from a clean reference state but fail when the same round depends on its own earlier edits.
        </div>
    </div>

    <!-- RoadmapBench leaderboard -->
    <div class="tb-bench-card tb-bench-rm">
        <div class="tb-bench-header">
            <span class="tb-bench-name"><span class="tb-bench-emoji">🛠️</span>RoadmapBench</span>
            <span class="tb-bench-tag tb-bench-tag-rm">Evolution · Version-upgrade</span>
            <span class="tb-bench-meta">115 tasks · 17 repos · 5 languages · openhands + terminus-2</span>
        </div>
        <div class="tb-lb-placeholder" style="margin-bottom:14px;">
            <strong>Metrics.</strong> <strong>Resolved %</strong> is the fraction of tasks where the agent achieves full reward (all phases pass). <strong>Completion</strong> is the average per-task phase-pass fraction (0&ndash;1 scale), capturing partial progress. <strong>Output Tok. (K)</strong> reports median generated tokens per task. Results are single-trial per model. Two scaffoldings are reported: OpenHands (open-source multi-tool agent) and Terminus 2 (standardized harness).
        </div>
        <h4 style="margin:0 0 10px; font-size:0.92em; color:var(--rm-accent,#7c3aed);">OpenHands</h4>
        <table class="tb-lb-table">
            <colgroup>
                <col class="tb-col-rank" />
                <col class="tb-col-model" />
                <col class="tb-col-score" />
                <col class="tb-col-metric" />
                <col class="tb-col-metric" />
                <col class="tb-col-output" />
            </colgroup>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Model</th>
                    <th class="tb-th-num">Resolved %</th>
                    <th class="tb-th-num">Completion</th>
                    <th class="tb-th-num tb-hide-sm">Avg. Turns</th>
                    <th class="tb-th-num tb-hide-sm">Output Tok. (K)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="tb-lb-rank tb-lb-rank-1"><span class="tb-lb-medal">🥇</span>1</span></td>
                    <td><span class="tb-lb-model tb-lb-best">Claude-Opus-4.7</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:100%"></div></div><span class="tb-lb-score-num">39.5%</span></div></td>
                    <td class="tb-lb-num">0.702</td>
                    <td class="tb-lb-num tb-hide-sm">110.3</td>
                    <td class="tb-lb-num tb-hide-sm">42</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank tb-lb-rank-2"><span class="tb-lb-medal">🥈</span>2</span></td>
                    <td><span class="tb-lb-model">Claude-Opus-4.6</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:82%"></div></div><span class="tb-lb-score-num">32.2%</span></div></td>
                    <td class="tb-lb-num">0.627</td>
                    <td class="tb-lb-num tb-hide-sm">140.7</td>
                    <td class="tb-lb-num tb-hide-sm">42</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank tb-lb-rank-3"><span class="tb-lb-medal">🥉</span>3</span></td>
                    <td><span class="tb-lb-model">GPT-5.4</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:75%"></div></div><span class="tb-lb-score-num">29.6%</span></div></td>
                    <td class="tb-lb-num">0.497</td>
                    <td class="tb-lb-num tb-hide-sm">170.7</td>
                    <td class="tb-lb-num tb-hide-sm">93</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">4</span></td>
                    <td><span class="tb-lb-model">Gemini-3.1-Pro</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:53%"></div></div><span class="tb-lb-score-num">20.9%</span></div></td>
                    <td class="tb-lb-num">0.439</td>
                    <td class="tb-lb-num tb-hide-sm">133.4</td>
                    <td class="tb-lb-num tb-hide-sm">26</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">5</span></td>
                    <td><span class="tb-lb-model">DeepSeek-V4-Pro</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:46%"></div></div><span class="tb-lb-score-num">18.3%</span></div></td>
                    <td class="tb-lb-num">0.486</td>
                    <td class="tb-lb-num tb-hide-sm">140.2</td>
                    <td class="tb-lb-num tb-hide-sm">64</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">6</span></td>
                    <td><span class="tb-lb-model">GLM-5.1</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:46%"></div></div><span class="tb-lb-score-num">18.3%</span></div></td>
                    <td class="tb-lb-num">0.453</td>
                    <td class="tb-lb-num tb-hide-sm">163.2</td>
                    <td class="tb-lb-num tb-hide-sm">38</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">7</span></td>
                    <td><span class="tb-lb-model">Kimi-K2.6</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:39%"></div></div><span class="tb-lb-score-num">15.6%</span></div></td>
                    <td class="tb-lb-num">0.456</td>
                    <td class="tb-lb-num tb-hide-sm">140.0</td>
                    <td class="tb-lb-num tb-hide-sm">70</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">8</span></td>
                    <td><span class="tb-lb-model">Qwen3.6-Plus</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:31%"></div></div><span class="tb-lb-score-num">12.2%</span></div></td>
                    <td class="tb-lb-num">0.424</td>
                    <td class="tb-lb-num tb-hide-sm">150.3</td>
                    <td class="tb-lb-num tb-hide-sm">47</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">9</span></td>
                    <td><span class="tb-lb-model">Kimi-K2.5</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:29%"></div></div><span class="tb-lb-score-num">11.3%</span></div></td>
                    <td class="tb-lb-num">0.378</td>
                    <td class="tb-lb-num tb-hide-sm">110.3</td>
                    <td class="tb-lb-num tb-hide-sm">29</td>
                </tr>
                <tr>
                    <td><span class="tb-lb-rank">10</span></td>
                    <td><span class="tb-lb-model">MiniMax-M2.7</span></td>
                    <td class="tb-lb-bar-cell"><div class="tb-lb-bar-wrap"><div class="tb-lb-bar-track"><div class="tb-lb-bar-fill" style="width:26%"></div></div><span class="tb-lb-score-num">10.4%</span></div></td>
                    <td class="tb-lb-num">0.332</td>
                    <td class="tb-lb-num tb-hide-sm">123.5</td>
                    <td class="tb-lb-num tb-hide-sm">38</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<hr class="tb-section-rule">
<h1 id="tb-intro">1. Introduction</h1>



Terminal-X uses real shells, real filesystems, build tooling, and execution-verified rewards. We build on the [Harbor](https://github.com/harbor-framework/harbor) task format because it gives each agent the same executable environment and checks correctness by running code. The suite is split into three settings:


<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin: 24px 0;">
<div style="padding: 20px 24px; border: 1px solid var(--tb-border); border-radius: var(--tb-radius-md); border-top: 4px solid var(--tb-accent);">
<strong style="color: var(--tb-accent); font-size: 0.9em; text-transform: uppercase;">Direction 1 &mdash; Depth</strong>
<h3 style="margin: 8px 0 6px;">DeepTerminalBench</h3>
<p style="font-size: 0.92em; line-height: 1.65; color: var(--tb-ink-soft); margin: 0;">Can an agent solve a complex engineering task in one shot? We build a pool of Terminal-Bench 2.0&ndash;compatible Harbor tasks and curate <strong>50 tasks</strong>. Each task runs inside a Docker container and is calibrated so that the top model still fails on more than half of single attempts.</p>
</div>
<div style="padding: 20px 24px; border: 1px solid var(--tb-border); border-radius: var(--tb-radius-md); border-top: 4px solid var(--mt-accent);">
<strong style="color: var(--mt-accent); font-size: 0.9em; text-transform: uppercase;">Direction 2 &mdash; Iteration</strong>
<h3 style="margin: 8px 0 6px;">EvoCode-Bench</h3>
<p style="font-size: 0.92em; line-height: 1.65; color: var(--tb-ink-soft); margin: 0;">Can an agent keep a project working as requirements change? EvoCode-Bench contains <strong>26 tasks comprising 227 rounds</strong>, grouped by 4 engineering activities and 3 interaction styles. The same workspace and agent session persist across rounds, so later requests can expose regressions, stale behavior, and broken compatibility.</p>
</div>
<div style="padding: 20px 24px; border: 1px solid var(--tb-border); border-radius: var(--tb-radius-md); border-top: 4px solid var(--rm-accent);">
<strong style="color: var(--rm-accent); font-size: 0.9em; text-transform: uppercase;">Direction 3 &mdash; Evolution</strong>
<h3 style="margin: 8px 0 6px;">RoadmapBench</h3>
<p style="font-size: 0.92em; line-height: 1.65; color: var(--tb-ink-soft); margin: 0;">Can an agent implement features from a real version upgrade? RoadmapBench contains <strong>115 tasks across 17 repositories in 5 programming languages</strong>. Each task starts from an earlier release and gives the agent only a roadmap-style instruction for the target-version behavior.</p>
</div>
</div>

The three datasets use different task formats, but the admission criteria are shared:

- **Quality**: Each task has an oracle solution with reward = 1.0 and was reviewed for technical correctness and test fairness.
- **Coverage**: DeepTerminalBench spans 20+ domains and 12 workload types; EvoCode-Bench spans 4 engineering activities and 3 interaction styles; RoadmapBench spans 17 repositories in 5 programming languages.
- **Refreshable sources**: The tasks come from GitHub projects, Stack Overflow issues, CVEs, RFCs, postmortems, textbooks, and open-source release cycles.

<!-- ===== SECTION 2: AT A GLANCE ===== -->
<h1 id="tb-glance">2. Three Datasets at a Glance</h1>

This table fixes the comparison axes used throughout the article: evaluation axis, task unit, starting state, scoring rule, and difficulty source.

<div style="overflow-x:auto; margin:20px 0;">
<table class="tb-format-table" style="min-width:820px;">
<thead>
<tr>
    <th>Dimension</th>
    <th style="color:var(--tb-accent);">DeepTerminalBench</th>
    <th style="color:var(--mt-accent,#2563eb);">EvoCode-Bench</th>
    <th style="color:var(--rm-accent,#7c3aed);">RoadmapBench</th>
</tr>
</thead>
<tbody>
<tr>
    <td><strong>Evaluation axis</strong></td>
    <td>Depth</td>
    <td>Iteration</td>
    <td>Evolution</td>
</tr>
<tr>
    <td><strong>Central question</strong></td>
    <td>Can the agent solve a complex engineering task in one shot?</td>
    <td>Can the agent sustain quality across many rounds of evolving requirements?</td>
    <td>Can the agent implement substantial new functionality across a real version upgrade?</td>
</tr>
<tr>
    <td><strong>Task count</strong></td>
    <td>50 curated tasks</td>
    <td>26 multi-turn tasks</td>
    <td>115 version-upgrade tasks</td>
</tr>
<tr>
    <td><strong>Unit of work</strong></td>
    <td>1 instruction &rarr; 1 verified delivery</td>
    <td>5&ndash;15 rounds, cumulative tests</td>
    <td>3&ndash;12 phases, weighted by importance</td>
</tr>
<tr>
    <td><strong>Starting state</strong></td>
    <td>Pre-configured Docker env (median 10 files, up to 50+)</td>
    <td>Empty / skeleton / legacy system (varies by task)</td>
    <td>Real repository snapshot pinned at the earlier release</td>
</tr>
<tr>
    <td><strong>Scoring</strong></td>
    <td>Binary (pass/fail)</td>
    <td>Mean of per-round binary rewards, fail-stop</td>
    <td>Weighted sum over phases</td>
</tr>
<tr>
    <td><strong>Coverage axes</strong></td>
    <td>Domain &times; Workload (20+ &times; 12)</td>
    <td>Interaction Style &times; Engineering Activity (3 &times; 4)</td>
    <td>Language &times; Repository (5 &times; 17)</td>
</tr>
<tr>
    <td><strong>Harbor extension needed</strong></td>
    <td>None &mdash; uses the stock single-shot harness</td>
    <td>Persistent environment and round boundary protocol</td>
    <td>Pinned baseline image, phase-level test orchestration</td>
</tr>
<tr>
    <td><strong>Primary source of difficulty</strong></td>
    <td>Multi-file diagnosis, deep domain knowledge, simultaneous constraints</td>
    <td>Cumulative state, requirement evolution, backward compatibility</td>
    <td>Long-horizon feature synthesis under API ambiguity</td>
</tr>
</tbody>
</table>
</div>

<div class="tb-callout">
    <div class="tb-callout-title">How to choose the dataset</div>
    <p>Use <strong>DeepTerminalBench</strong> to measure single-session engineering competence on a dense self-contained task. Use <strong>EvoCode-Bench</strong> to measure how an agent handles changing requirements, specification conflicts, and regression risk across a working session. Use <strong>RoadmapBench</strong> to measure whether an agent can synthesize substantial new code against a roadmap in an evolving repository.</p>
</div>

<hr class="tb-section-rule">

<!-- ===== SECTION 3: SHARED FOUNDATION ===== -->
<h1 id="tb-foundation">3. Shared Foundation: The Harbor Task Spec</h1>

All three datasets use the <a href="https://harborframework.com/docs/running-tbench" target="_blank">Harbor task specification</a> introduced by Terminal-Bench 2.0. This makes the benchmark runnable by Harbor-compatible scaffolds such as Claude Code, OpenHands, Codex CLI, and Terminus-2, while keeping the new contributions concentrated in task semantics: multi-turn state for EvoCode-Bench and version-upgrade structure for RoadmapBench.

A stock single-shot Harbor task contains five components:

<table class="tb-format-table">
    <thead><tr><th>Component</th><th>Role</th></tr></thead>
    <tbody>
        <tr><td><code>instruction.md</code></td><td>What the agent must do &mdash; natural-language specification with requirements, constraints, expected outputs.</td></tr>
        <tr><td><code>environment/</code></td><td>Where it works &mdash; Dockerfile with all dependencies, plus baseline code/data/fixtures.</td></tr>
        <tr><td><code>tests/</code></td><td>How correctness is judged &mdash; test suite plus a shell harness producing a binary reward.</td></tr>
        <tr><td><code>solution/</code></td><td>The ground truth &mdash; reference oracle implementation achieving reward = 1.0.</td></tr>
        <tr><td><code>task.toml</code></td><td>Machine-readable metadata &mdash; domain, difficulty, resource limits, timeouts.</td></tr>
    </tbody>
</table>

<div class="tb-callout">
    <div class="tb-callout-title">Black-Box Evaluation</div>
    <p>In all three datasets, the agent receives only <code>instruction.md</code> and the environment. It cannot access <code>tests/</code> or <code>solution/</code>. The test script produces a reward signal (binary in DeepTerminalBench, per-round in EvoCode-Bench, weighted in RoadmapBench) that is never revealed during the run.</p>
</div>

Each dataset extends this stock format in a different way. The next section walks through the three variants.

<hr class="tb-section-rule">

<!-- ===== SECTION 4: TASK FORMAT ===== -->
<h1 id="tb-format">4. Task Format: Three Variants</h1>

<h2 id="tb-format-deep">4.1 DeepTerminalBench: Flat Structure</h2>

DeepTerminalBench uses the stock Harbor task layout unchanged:

<div class="mt-structure-box">
task/<br/>
├── task.toml<br/>
├── instruction.md<br/>
├── environment/<br/>
│ &nbsp;&nbsp;└── Dockerfile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# runtime + pre-configured files<br/>
├── solution/<br/>
│ &nbsp;&nbsp;└── solve.sh &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# reference solution<br/>
└── tests/<br/>
&nbsp;&nbsp;&nbsp;&nbsp;└── test.sh &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# verification script
</div>

The execution model is simple: Harbor builds the Docker environment, delivers <code>instruction.md</code> to the agent, the agent produces code, and <code>tests/test.sh</code> checks correctness. One instruction, one execution, one verification.

<h2 id="tb-format-evo">4.2 Multi-Turn (EvoCode-Bench): Rounds with Cumulative Tests</h2>

For multi-turn tasks, we introduce <strong>round directories</strong>. Each round carries its own instruction, solution, and tests, while the environment and top-level metadata remain shared:

<div class="mt-structure-box">
task/<br/>
├── task.toml &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# metadata (round count, change types)<br/>
├── instruction.md &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# top-level task description<br/>
├── environment/<br/>
│ &nbsp;&nbsp;└── Dockerfile &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# shared across all rounds<br/>
├── round_1/<br/>
│ &nbsp;&nbsp;├── instruction.md<br/>
│ &nbsp;&nbsp;├── solution/solve.sh &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# incremental: this round's delta only<br/>
│ &nbsp;&nbsp;└── tests/test.sh &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# cumulative: verifies all still-valid behavior up to here<br/>
├── round_2/ ...<br/>
└── round_N/<br/>
</div>

The format relies on three checks. <strong>Solutions are incremental</strong>: each round's <code>solve.sh</code> applies only that round's delta. <strong>Tests are cumulative</strong>: round N re-verifies every still-valid requirement from rounds 1 through N, so later changes cannot silently break earlier behavior. <strong>Tests check behavior, not the reference path</strong>: round N cannot assume that the agent used the same code structure as the oracle in round N-1.

<h2 id="tb-format-roadmap">4.3 Version Upgrade (RoadmapBench): Repository Snapshot + Roadmap Phases</h2>

RoadmapBench keeps the single-shot execution model but reshapes what each component contains. The environment is a real-world repository snapshot pinned at an earlier release (with commits and tags after that point stripped to prevent information leakage), and the instruction is a multi-phase roadmap describing behaviors introduced in the target version:

<div class="rm-structure-box">
Phase N: &lt;Feature Name&gt;<br/>
├── Background &mdash; why this functionality is needed<br/>
├── Behavioral specification<br/>
│ &nbsp;&nbsp;├── API signatures, parameter semantics, default values<br/>
│ &nbsp;&nbsp;├── Expected error behaviors and edge cases<br/>
│ &nbsp;&nbsp;└── Export paths and import locations<br/>
└── Integration context &mdash; how it fits the existing codebase
</div>

Like EvoCode-Bench's principles, the roadmap specifies WHAT to build but never HOW &mdash; no algorithm names, implementation steps, or code snippets. Tests are organized as phase-level files (<code>test_01_*.py</code>, <code>test_02_*.py</code>, &hellip;) adapted from the official upstream test suite, and a runner computes a weighted reward across phases.

<div class="rm-callout">
    <div class="rm-callout-title">&#128274; Information Boundaries</div>
    <p>The agent may freely inspect and modify the repository, but has no access to the target version source code, the test files, or the oracle patch. The repository identity and version numbers are withheld from the instruction to prevent shortcut-based lookup.</p>
</div>

<h2>4.4 Side-by-Side Structural Comparison</h2>

<div style="overflow-x:auto; margin:24px 0;">
<table class="tb-format-table" style="min-width:780px;">
<thead>
<tr>
    <th></th>
    <th style="color:var(--tb-accent);">DeepTerminalBench</th>
    <th style="color:var(--mt-accent,#2563eb);">EvoCode-Bench</th>
    <th style="color:var(--rm-accent,#7c3aed);">RoadmapBench</th>
</tr>
</thead>
<tbody>
<tr>
    <td><strong>Instruction</strong></td>
    <td>Single <code>instruction.md</code></td>
    <td>One <code>instruction.md</code> per round directory (plus top-level summary)</td>
    <td>Multi-phase roadmap in one <code>instruction.md</code></td>
</tr>
<tr>
    <td><strong>Environment</strong></td>
    <td>Pre-configured Dockerfile</td>
    <td>Shared Dockerfile across all rounds</td>
    <td>Pinned earlier-release repository snapshot</td>
</tr>
<tr>
    <td><strong>Tests</strong></td>
    <td>One <code>test.sh</code> producing binary reward</td>
    <td>Cumulative <code>test.sh</code> per round</td>
    <td>Phase-level <code>test_NN_*.py</code> + weighted runner</td>
</tr>
<tr>
    <td><strong>Solution</strong></td>
    <td>One <code>solve.sh</code></td>
    <td>Per-round incremental <code>solve.sh</code></td>
    <td>Oracle patch derived from real cross-version diff</td>
</tr>
<tr>
    <td><strong>Session model</strong></td>
    <td>One container, one agent session, one submission</td>
    <td>One container and one agent session spanning all rounds</td>
    <td>One container, one agent session, one submission</td>
</tr>
</tbody>
</table>
</div>

<hr class="tb-section-rule">

<!-- ===== SECTION 5: SOURCES & COVERAGE ===== -->
<h1 id="tb-coverage">5. Sources &amp; Coverage</h1>

<h2 id="tb-sources">5.1 A Shared Pool of Real-World Problems</h2>

All three datasets draw from the same kinds of real-world engineering artifacts &mdash; the scenarios that practicing engineers actually encounter. Grounding tasks in these sources keeps the evaluation tied to observable engineering work and gives the datasets a renewable source of future tasks.

<div class="tb-sources-grid">
    <div class="tb-source-card src-github tb-animate">
        <h4>GitHub Repositories and Issue Trackers</h4>
        <p>Real project structures, build configurations, and bug reports. B-tree corruption tasks are modeled on LevelDB/BoltDB/SQLite; CI recovery tasks draw from real <code>.github/workflows</code>. RoadmapBench goes one step further and uses <em>actual</em> cross-version diffs from 17 open-source repositories as ground truth.</p>
    </div>
    <div class="tb-source-card src-stackoverflow tb-animate tb-animate-delay-1">
        <h4>Stack Overflow and Developer Forums</h4>
        <p>Recurring pain points &mdash; segfaults in multithreaded C, cron timezone bugs, CommonJS-to-ESM migrations &mdash; signal what engineers actually struggle with.</p>
    </div>
    <div class="tb-source-card src-cve tb-animate tb-animate-delay-2">
        <h4>CVE Databases and Security Advisories</h4>
        <p>Published vulnerabilities (path traversal, credential exposure, ReDoS, timing-unsafe comparisons) provide ready-made attack surfaces. Security hardening tasks are built from real CWE categories with concrete exploit payloads.</p>
    </div>
    <div class="tb-source-card src-rfc tb-animate tb-animate-delay-3">
        <h4>RFCs, Format Specs and Protocol Standards</h4>
        <p>PCAP binary format, WAV/RIFF headers, tar archive structure, HMAC-SHA256 chains, OpenAPI specifications &mdash; real-world standards that practitioners must implement correctly.</p>
    </div>
    <div class="tb-source-card src-postmortem tb-animate tb-animate-delay-4">
        <h4>Production Incident Postmortems and SRE Runbooks</h4>
        <p>Cascading failures, WAL corruption after unclean shutdowns, Kubernetes pod crash loops, distributed lock starvation &mdash; scenarios on-call engineers actually face.</p>
    </div>
    <div class="tb-source-card src-textbook tb-animate tb-animate-delay-4">
        <h4>CS Textbooks, Papers, and Release Cycles</h4>
        <p>Raft consensus, Chandy-Lamport snapshots, dominator tree algorithms, Fibonacci heaps &mdash; algorithmic depth that cannot be derived from shallow pattern matching. For RoadmapBench specifically, release narratives and upstream test suites provide the ground truth for version-upgrade tasks.</p>
    </div>
</div>

These sources are continuously growing. New CVEs are published daily, new open-source projects introduce novel architectures, new RFCs define new protocols, and every release cycle yields fresh version pairs &mdash; all three datasets can expand without exhausting authentic task sources.

<h2 id="tb-taxonomies">5.2 Three Complementary Taxonomies</h2>

Each dataset uses the two axes that expose its main source of score variation. DeepTerminalBench varies engineering domain and workload type; EvoCode-Bench varies interaction style and engineering activity; RoadmapBench varies programming language and source repository.

<h3 style="color:var(--tb-accent);">DeepTerminalBench: Domain &times; Workload Type</h3>

Tasks are organized along <strong>domain</strong> (what area of engineering or science) and <strong>workload type</strong> (what kind of work the agent must perform). The cross-product covers over 20 domains crossed with 12 workload types. The 50 curated tasks sample broadly rather than exhaustively covering every combination; the taxonomy reserves additional domains for future expansion, so adding one new domain immediately creates 12 new domain-workload combinations.

<strong>Domains</strong> span: Code and Build, Repo Engineering, Testing and Quality, Debugging and Observability, Data Engineering, Database and Storage, Systems and Networking, Cloud and DevOps, Security, ML/AI and MLOps, Scientific and Numerical Computing, Automation and Productivity, Compiler and Language Tooling, File Format and Protocol, Distributed Systems and Concurrency, API and Schema Design, Data Structures and Algorithms, Simulation and Modeling, CLI and Interactive Tools, Workflow and Rule Engine &mdash; with Embedded/IoT, Container Orchestration, Cryptography, and Network Protocol Engineering reserved for expansion.

<strong>Workload types</strong> include: Greenfield Implementation, Brownfield Modification, Bug Localization and Fix, Migration and Upgrade, Integration and E2E Wiring, Performance Optimization, Reliability and Recovery, Security Patch and Hardening, Reproducibility and Verification, Forensics and Analysis, Automation Scripting, and Explanation and Reporting.

<h3 style="color:var(--mt-accent,#2563eb);">EvoCode-Bench: Interaction Style &times; Engineering Activity</h3>

Multi-turn tasks vary along <strong>interaction style</strong> (how information flows across rounds) and <strong>engineering activity</strong> (what type of work each round involves).

<div class="mt-dimension-grid">
    <div class="mt-dimension-card">
        <div class="mt-dim-tag tag-vibe">Explorative</div>
        <h4>Vibe Coding Style</h4>
        <p>Requirements <strong>emerge through interaction</strong>. Round 1 is detailed; subsequent rounds shrink drastically, often to a single sentence.</p>
    </div>
    <div class="mt-dimension-card">
        <div class="mt-dim-tag tag-agentic">Contractual</div>
        <h4>Agentic Style</h4>
        <p>The user knows what they want but <strong>can't specify it all at once</strong>. Each round provides detailed specs of roughly equal length; later rounds may revise earlier behavior.</p>
    </div>
    <div class="mt-dimension-card">
        <div class="mt-dim-tag tag-doc">Document-Driven</div>
        <h4>Doc-Driven Style</h4>
        <p>Key semantics live in project artifacts (specs, schemas, <code>AGENTS.md</code>). Instructions simply say <strong>"implement per the doc"</strong> or <strong>"doc updated, sync implementation."</strong></p>
    </div>
</div>

<div class="mt-dimension-grid mt-activity-grid">
    <div class="mt-dimension-card">
        <div class="mt-dim-tag tag-construct">Construction</div>
        <h4>Incremental Construction</h4>
        <p>The agent must <strong>build new functionality over several rounds</strong>, where each round adds features that later rounds depend on.</p>
    </div>
    <div class="mt-dimension-card">
        <div class="mt-dim-tag tag-spec">Spec Evolution</div>
        <h4>Spec Evolution &amp; Conflict</h4>
        <p>The agent must <strong>adapt to new specs while preserving unchanged old behavior</strong>. At least one round explicitly overturns a core assumption established earlier.</p>
    </div>
    <div class="mt-dimension-card">
        <div class="mt-dim-tag tag-review">Review-Driven</div>
        <h4>Review-Driven Improvement</h4>
        <p>Round 1 delivers full functionality. Subsequent rounds are <strong>code review feedback</strong>: performance, error handling, security, logging &mdash; all while keeping existing behavior unchanged.</p>
    </div>
    <div class="mt-dimension-card">
        <div class="mt-dim-tag tag-migrate">Migration</div>
        <h4>Migration &amp; Modernization</h4>
        <p>Starting from a complete legacy system, <strong>migrate incrementally</strong> to a new implementation style while preserving external behavior at every step.</p>
    </div>
</div>

The 3 interaction styles crossed with 4 engineering activities yield 12 task-type combinations. Each cell reports <em>tasks / rounds</em>, matching the paper taxonomy. Allocation across EvoCode-Bench:

<table class="mt-cross-table">
<thead>
<tr>
    <th>Activity \ Style</th>
    <th>Explorative</th>
    <th>Contractual</th>
    <th>Document-Driven</th>
    <th>Total</th>
</tr>
</thead>
<tbody>
<tr>
    <td>Construction</td>
    <td class="mt-cell-natural">9 / 80</td>
    <td class="mt-cell-natural">3 / 37</td>
    <td class="mt-cell-feasible">1 / 7</td>
    <td><strong>13 / 124</strong></td>
</tr>
<tr>
    <td>Spec Evolution &amp; Conflict</td>
    <td class="mt-cell-feasible">1 / 8</td>
    <td class="mt-cell-feasible">1 / 7</td>
    <td class="mt-cell-natural">1 / 7</td>
    <td><strong>3 / 22</strong></td>
</tr>
<tr>
    <td>Review-Driven Improvement</td>
    <td class="mt-cell-feasible">3 / 21</td>
    <td class="mt-cell-natural">1 / 7</td>
    <td class="mt-cell-feasible">1 / 9</td>
    <td><strong>5 / 37</strong></td>
</tr>
<tr>
    <td>Migration &amp; Modernization</td>
    <td class="mt-cell-feasible">3 / 29</td>
    <td class="mt-cell-feasible">1 / 7</td>
    <td class="mt-cell-natural">1 / 8</td>
    <td><strong>5 / 44</strong></td>
</tr>
<tr>
    <td><strong>Total</strong></td>
    <td><strong>16 / 138</strong></td>
    <td><strong>6 / 58</strong></td>
    <td><strong>4 / 31</strong></td>
    <td><strong>26 / 227</strong></td>
</tr>
</tbody>
</table>

<h3 style="color:var(--rm-accent,#7c3aed);">RoadmapBench: Programming Language &times; Repository Domain</h3>

RoadmapBench's axes reflect a reality: software engineers work across languages, and library evolution patterns recur in every ecosystem. The current release covers 17 repositories across 5 languages.

<div class="rm-lang-grid">
    <div class="rm-lang-card rm-lang-py rm-animate">
        <div class="rm-lang-icon">🐍</div>
        <h4>Python</h4>
        <p>Polars, PyG, Optuna, Falcon, spaCy &mdash; ML frameworks, dataframe engines, web servers, NLP pipelines.</p>
        <span class="rm-lang-count">41 tasks &bull; 5 repos</span>
    </div>
    <div class="rm-lang-card rm-lang-ts rm-animate">
        <div class="rm-lang-icon">📘</div>
        <h4>TypeScript</h4>
        <p>MikroORM, Prisma, Valibot &mdash; ORM frameworks, database clients, validation libraries.</p>
        <span class="rm-lang-count">22 tasks &bull; 3 repos</span>
    </div>
    <div class="rm-lang-card rm-lang-cpp rm-animate">
        <div class="rm-lang-icon">⚙️</div>
        <h4>C++</h4>
        <p>Glaze, thread-pool &mdash; high-performance serialization and concurrent task scheduling.</p>
        <span class="rm-lang-count">20 tasks &bull; 2 repos</span>
    </div>
    <div class="rm-lang-card rm-lang-go rm-animate">
        <div class="rm-lang-icon">🔵</div>
        <h4>Go</h4>
        <p>Fiber, Kitex, Fyne &mdash; RPC frameworks, web frameworks, GUI toolkits.</p>
        <span class="rm-lang-count">17 tasks &bull; 3 repos</span>
    </div>
    <div class="rm-lang-card rm-lang-rs rm-animate">
        <div class="rm-lang-icon">🦀</div>
        <h4>Rust</h4>
        <p>Ratatui, Diesel, Slint, Ruff &mdash; TUI frameworks, ORM, GUI toolkits, linting tools.</p>
        <span class="rm-lang-count">15 tasks &bull; 4 repos</span>
    </div>
</div>

<h3>Why Three Different Taxonomies</h3>

Each taxonomy answers a different diagnostic question. DeepTerminalBench's Domain&times;Workload table shows which kinds of engineering work a model handles in a single dense session. EvoCode-Bench's Interaction&times;Activity table shows which forms of requirement change break multi-turn reliability. RoadmapBench's Language&times;Repository table shows where version-upgrade ability depends on ecosystem-specific APIs, build systems, and conventions.

<hr class="tb-section-rule">

<!-- ===== SECTION 6: DATASET STATISTICS ===== -->
<h1 id="tb-statistics">6. Dataset Statistics</h1>

<h2>6.1 Side-by-Side Task Statistics</h2>

<div style="overflow-x:auto; margin:20px 0;">
<table class="tb-stats-table" style="min-width:780px;">
    <thead>
        <tr>
            <th>Metric</th>
            <th>DeepTerminalBench</th>
            <th>EvoCode-Bench</th>
            <th>RoadmapBench</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Task count</strong></td>
            <td>50 curated tasks</td>
            <td>26 multi-turn tasks</td>
            <td>115 tasks across 17 repos</td>
        </tr>
        <tr>
            <td><strong>Unit of work per task</strong></td>
            <td>42 agent steps (median)</td>
            <td>5&ndash;15 rounds</td>
            <td>5 phases median, up to 12</td>
        </tr>
        <tr>
            <td><strong>Total evaluation units</strong></td>
            <td>&mdash;</td>
            <td>227 rounds</td>
            <td>~590 phases</td>
        </tr>
        <tr>
            <td><strong>Instruction length (median)</strong></td>
            <td>~5,000 chars / ~650 words</td>
            <td>Varies by round; round 1 typically largest</td>
            <td>Multi-phase; each phase ~300&ndash;800 words</td>
        </tr>
        <tr>
            <td><strong>Reference solution size (median)</strong></td>
            <td>~680 lines across solution/</td>
            <td>Cumulative across rounds</td>
            <td>~3,700 LOC per oracle patch</td>
        </tr>
        <tr>
            <td><strong>Test code (median)</strong></td>
            <td>~570 lines, 32 test functions</td>
            <td>Per-round cumulative test.sh</td>
            <td>Phase-level test files from upstream</td>
        </tr>
        <tr>
            <td><strong>Pre-configured env files (median)</strong></td>
            <td>10 files, up to 50+</td>
            <td>Empty to complete legacy system</td>
            <td>Full earlier-release repository</td>
        </tr>
        <tr>
            <td><strong>Difficulty distribution</strong></td>
            <td>Opus four-attempt pass rate (Pass@4): 22 at 0.25 &bull; 17 at 0.50 &bull; 11 at 0.75</td>
            <td>12 task types; round count distribution 5&ndash;15</td>
            <td>Median 5 phases; oracle patch ~3,700 LOC median</td>
        </tr>
    </tbody>
</table>
</div>

<h2>6.2 Difficulty Calibration: Three Methodologies</h2>

The three datasets calibrate difficulty in different ways because difficulty <em>means</em> different things across the three settings.

<div class="tb-sources-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
    <div class="tb-source-card src-github">
        <h4 style="color:var(--tb-accent);">DeepTerminalBench: Four-Attempt Pass Rate (Pass@4) Band [0.25, 0.75]</h4>
        <p>50 tasks were selected from a larger pool so that Claude Opus 4.6 achieves Pass@4 between 0.25 and 0.75. This filters out both unsolved tasks and saturated tasks. 22 tasks land at Pass@4 = 0.25 (lowest success band), 17 at 0.50, 11 at 0.75.</p>
    </div>
    <div class="tb-source-card src-cve" style="border-top-color: var(--mt-accent,#2563eb);">
        <h4 style="color:var(--mt-accent,#2563eb);">EvoCode-Bench: Fail-Stop + Cumulative Tests</h4>
        <p>Difficulty is structural rather than statistical. Later rounds raise difficulty when they stress cross-round dependencies: specification conflicts, backward compatibility, and multiple valid implementation paths. The fail-stop design makes partial progress measurable: an agent that passes rounds 1&ndash;3 but fails round 4 receives 3/N rather than 0.</p>
    </div>
    <div class="tb-source-card src-rfc" style="border-top-color: var(--rm-accent,#7c3aed);">
        <h4 style="color:var(--rm-accent,#7c3aed);">RoadmapBench: Multi-Phase Weighted Scoring</h4>
        <p>Difficulty emerges naturally from the number and interdependence of phases. Tasks range from 3 to 12 phases (median 5), with core architectural phases weighted higher than peripheral utilities. The weighted scoring produces a continuous difficulty gradient: stronger models complete more phases and earn higher partial credit, while weaker models fail at earlier architectural boundaries. Oracle patches are ~3,700 LOC median &mdash; roughly two orders of magnitude larger than bug-fix benchmarks.</p>
    </div>
</div>

<h2>6.3 Agent Behavior Under Evaluation</h2>

<h3>DeepTerminalBench: Opus 4.6 Across 200 Rollouts (50 tasks &times; 4 attempts)</h3>

<table class="tb-stats-table">
    <thead><tr><th>Metric</th><th>Mean</th><th>Median</th><th>Min</th><th>Max</th></tr></thead>
    <tbody>
        <tr><td><strong>Agent steps (tool calls)</strong></td><td>42.5</td><td>42</td><td>14</td><td>160</td></tr>
        <tr><td><strong>Duration per attempt</strong></td><td>17.4 min</td><td>14.8 min</td><td>8.7 min</td><td>39.1 min</td></tr>
        <tr><td><strong>Input tokens</strong></td><td>2.1M</td><td>1.7M</td><td>445K</td><td>7.6M</td></tr>
        <tr><td><strong>Output tokens</strong></td><td>35K</td><td>29K</td><td>8.7K</td><td>76K</td></tr>
    </tbody>
</table>

DeepTerminalBench takeaways:

- **44% of tasks trigger at least one timeout** across 4 attempts, indicating that many tasks push agents to their execution budget limits.
- **~83% of tasks include pre-existing environment files** that the agent must read and work with before writing anything new.
- **Lower Pass@4 corresponds to longer attempts** &mdash; Pass@4 = 0.25 tasks average 31 minutes per attempt, while Pass@4 = 0.75 tasks average 15 minutes.

<h3>EvoCode-Bench: Multi-Turn Results Across 13 Models</h3>

<table class="tb-stats-table">
    <thead><tr><th>Metric</th><th>Best Model</th><th>Best Score</th><th>Key Observation</th></tr></thead>
    <tbody>
        <tr><td><strong>MT@4</strong></td><td>Claude-Opus-4.7</td><td>54.0</td><td>Claude-Opus-4.7 and GPT-5.5-High are the only models above 50 MT@4.</td></tr>
        <tr><td><strong>Single-round pass rate (SR)</strong></td><td>Claude-Opus-4.6</td><td>78.9</td><td>High isolated-round pass rate does not imply high persistent multi-round score.</td></tr>
        <tr><td><strong>Full-task completion</strong></td><td>Claude-Opus-4.7</td><td>42.3</td><td>The top completion rate remains below half of tasks.</td></tr>
        <tr><td><strong>Round degradation</strong></td><td>All models</td><td>46.7 &rarr; 21.3</td><td>Average pass rate falls from round 1 to round 5 under fail-stop scoring.</td></tr>
    </tbody>
</table>

EvoCode-Bench takeaways:

- **Persistent execution scores lower than isolated-round evaluation.** Claude-Opus-4.6 reaches 78.9 SR but 44.0 MT@4; GLM-5.1 drops from 63.9 SR to 36.2 MT@4; Kimi-K2.6 drops from 59.0 SR to 31.9 MT@4.
- **End-to-end completion remains limited.** Claude-Opus-4.7 has the highest full-task completion at 42.3, followed by GPT-5.5-High at 38.5 and Claude-Opus-4.6 at 34.6.
- **The common failure symptom is concrete, not generic.** In 957 high-confidence annotations from executed failed round fragments, 89.1% are missed active-round obligations, 6.5% are environment/tooling failures, and 3.4% are regressions. Correction rounds raise the regression share to 11.2%; conflict-labeled rounds raise conflict mishandling to 14.9%.
- **Persistent state is the central stressor.** The same round instruction receives higher scores when earlier rounds have already been applied by the reference solution than when the model must live with its own earlier edits.

<h3>RoadmapBench: Phase-Weighted Scoring Produces Graded Separation</h3>

The leaderboard shows why RoadmapBench reports both resolved rate and completion score. Claude-Opus-4.6 reaches 32.2% resolved and 0.627 completion score. Lower-ranked models often fail to finish a task, but still pass early phases; phase-level credit makes that partial progress visible.

<div class="tb-callout tb-callout-blue">
    <div class="tb-callout-title">Task scale exceeds short-prompt coding</div>
    <p>Across all three datasets, tasks require sustained multi-step engineering. The largest DeepTerminalBench rollout reaches 160 agent steps and nearly 40 minutes of wall-clock time. EvoCode-Bench tasks span 5&ndash;15 rounds of evolving state, with 227 cumulative verification points. RoadmapBench oracle patches average ~3,700 lines across 5 phases. The evaluation requires agents to maintain context, correlate information across files, and make engineering tradeoffs across an extended terminal session.</p>
</div>

<h2>6.4 Comparison with Related Benchmarks</h2>

<table class="rm-stats-table">
    <thead>
        <tr>
            <th>Benchmark</th>
            <th>Tasks</th>
            <th>Task Type</th>
            <th>Unit of Work</th>
            <th>Oracle Size</th>
            <th>Scoring</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>HumanEval / MBPP</td>
            <td>164 / 974</td>
            <td>Algorithm</td>
            <td>1 function</td>
            <td>&lt;20 LOC</td>
            <td>Binary</td>
        </tr>
        <tr>
            <td>SWE-bench Verified</td>
            <td>500</td>
            <td>Bug fix</td>
            <td>1 patch</td>
            <td>~33 LOC</td>
            <td>Binary</td>
        </tr>
        <tr>
            <td>Terminal-Bench 2.0</td>
            <td>89</td>
            <td>Mixed single-shot</td>
            <td>1 session</td>
            <td>&mdash;</td>
            <td>Binary</td>
        </tr>
        <tr>
            <td style="color:var(--tb-accent);"><strong>DeepTerminalBench</strong></td>
            <td><strong>50</strong></td>
            <td><strong>Deep single-shot</strong></td>
            <td>~42 steps</td>
            <td>~680 LOC</td>
            <td>Binary (Pass@k calibrated)</td>
        </tr>
        <tr>
            <td style="color:var(--mt-accent,#2563eb);"><strong>EvoCode-Bench</strong></td>
            <td><strong>26</strong></td>
            <td><strong>Multi-turn</strong></td>
            <td>5&ndash;15 rounds</td>
            <td>Cumulative</td>
            <td>Mean of rounds, fail-stop</td>
        </tr>
        <tr>
            <td style="color:var(--rm-accent,#7c3aed);"><strong>RoadmapBench</strong></td>
            <td><strong>115</strong></td>
            <td><strong>Feature impl.</strong></td>
            <td>5 phases</td>
            <td>~3,700 LOC</td>
            <td>Weighted by phase</td>
        </tr>
    </tbody>
</table>

Oracle patches in RoadmapBench are roughly two orders of magnitude larger than those in bug-fix benchmarks, confirming that version-upgrade tasks require sustained multi-step engineering rather than single-function edits.

<hr class="tb-section-rule">

<!-- ===== SECTION 7: VERIFICATION & SCORING ===== -->
<h1 id="tb-scoring">7. Verification &amp; Scoring</h1>

<h2>7.1 Shared Principle: Execution-Based Verification</h2>

All three datasets emphasize <strong>dynamic, execution-based testing</strong> over static output checking. The majority of verification compiles, executes, and observes program behavior at runtime. Static output checks supplement execution-based verification but do not replace it. This layering prevents "teaching to the test" &mdash; solutions that produce correct output but use incorrect or insecure implementations will fail behavioral or attack-based verification.

For DeepTerminalBench, the median task employs three verification strategies simultaneously. The prevalence of each strategy across the 50 tasks:

<div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin:20px 0;">
<div>
<strong>Dynamic (execution-based)</strong>
<table class="tb-verify-table">
    <tbody>
        <tr><td>Program execution / exit code</td><td>~80%</td></tr>
        <tr><td>Performance / timeout enforcement</td><td>~72%</td></tr>
        <tr><td>Build / compilation verification</td><td>~46%</td></tr>
        <tr><td>Database state queries</td><td>~24%</td></tr>
        <tr><td>Adversarial security payloads</td><td>~22%</td></tr>
    </tbody>
</table>
</div>
<div>
<strong>Static (inspection-based)</strong>
<table class="tb-verify-table">
    <tbody>
        <tr><td>Output file existence / structure</td><td>~84%</td></tr>
        <tr><td>Output value correctness</td><td>~78%</td></tr>
        <tr><td>Cryptographic integrity checks</td><td>~30%</td></tr>
        <tr><td>AST / pattern matching</td><td>~12%</td></tr>
        <tr><td>File diff / binary comparison</td><td>~10%</td></tr>
    </tbody>
</table>
</div>
</div>

EvoCode-Bench and RoadmapBench tests follow the same execution-first philosophy but apply it at the round/phase level rather than task level.

<h2>7.2 Three Scoring Schemes</h2>

Because the three datasets have different task units (single session vs. multiple rounds vs. multiple phases), each uses a different scoring formula. All three share one principle: the scoring unit is a <em>binary pass</em> at the lowest level, and the task score aggregates these.

<div class="mt-principle-box">
<h4 style="color:var(--tb-accent);">DeepTerminalBench: Binary Reward</h4>
<p>Each task produces a single binary reward: pass (1) or fail (0). The verification script exercises the delivered solution end-to-end with both dynamic and static checks; any failure collapses the reward to 0. The main leaderboard reports <strong>Pass@1</strong>: one attempt per task, averaged across all 50 tasks. Separately, Pass@k across multiple attempts yields per-task success rates used for difficulty calibration.</p>
<p><strong>Formula:</strong> <code>Pass@1 = (1 / T) &sum; reward_t</code>, where <code>reward_t &isin; {0, 1}</code> and <code>T = 50</code>.</p>
</div>

<div class="mt-principle-box" style="border-left-color: var(--mt-accent,#2563eb);">
<h4 style="color:var(--mt-accent,#2563eb);">EvoCode-Bench: Mean of Per-Round Binary Rewards, Fail-Stop</h4>
<p>Each round produces a binary reward (pass / fail). A failed round terminates the task immediately (fail-stop), and any rounds not executed count as 0. Because of fail-stop, the reward sequence is always a run of 1s followed by 0s &mdash; never a gap.</p>
<p><strong>Formula:</strong> $\mathrm{Score} = \frac{1}{N} \sum_{i=1}^{N} r_i$ where $r_i \in \{0, 1\}$</p>
<p>Concretely, in a 5-round task: passing all 5 rounds scores 1.0; passing rounds 1&ndash;3 but failing round 4 scores 3/5 = 0.6; failing round 1 scores 0.0. The main table reports MT@4 by crediting a round if any of four independent multi-turn attempts reaches it successfully: <code>MT@4 = mean_t (1/N_t) sum_i max_{a<=4} r_{t,a,i}</code>. It reports SR as <code>mean_{t,i} s_{t,i}</code>, where <code>s</code> is the binary reward for a single target round after fast-forwarding earlier rounds with reference solutions. Comp is <code>mean_t 1[max_{a<=4} r_{t,a,N_t}=1]</code>. Avg. Turns and Output Tok. (K) report the interaction count and generated-token cost required to obtain those trajectories. Per-round rewards are recorded as intermediate artifacts and can serve as dense training signals for fine-tuning or RL.</p>
</div>

<div class="mt-principle-box" style="border-left-color: var(--rm-accent,#7c3aed);">
<h4 style="color:var(--rm-accent,#7c3aed);">RoadmapBench: Weighted Sum Over Phases</h4>
<p>Each task is divided into <em>n</em> phases. Let $p_i \in \{0, 1\}$ indicate whether phase i passes and $w_i$ denote its weight. The task reward is:</p>
<p><strong>Formula:</strong> $\mathrm{reward} = \sum_i w_i \cdot p_i / \sum_i w_i$</p>
<p>Weights reflect the architectural centrality of each phase &mdash; core modules that later phases depend on receive higher weights than peripheral utilities. A model that completes 3 of 5 phases scores above 0 rather than being indistinguishable from one that implements 0 phases, providing a denser signal than binary scoring.</p>
</div>

<hr class="tb-section-rule">

<!-- ===== SECTION 8: QUALITY ASSURANCE ===== -->
<h1 id="tb-qa">8. Quality Assurance</h1>

<h2>8.1 Shared Gates: Structure + Oracle + Expert + Calibration</h2>

All three datasets share a four-gate quality assurance pipeline before any task is admitted:

<ol>
    <li><strong>Static Structure Validation</strong> &mdash; The task package is well-formed: Dockerfile builds, test harness conforms to conventions, metadata is valid, instruction provides sufficient context. Automated checks guarantee structural integrity.</li>
    <li><strong>Oracle Verification</strong> &mdash; The reference solution is deployed into the task's Docker container and the full test suite runs end-to-end. Only tasks where the oracle achieves <strong>reward = 1.0</strong> (RoadmapBench: also baseline &lt; 1.0) are retained; the oracle run is the solvability evidence for admission.</li>
    <li><strong>Agent-Assisted Expert Review</strong> &mdash; Domain engineering experts review task instructions, test suites, and oracle solutions for technical accuracy, specification completeness, and test fairness. Experts verify that instructions contain sufficient information for the task to be solvable without hidden assumptions, that test assertions are reasonable and not overly brittle, and that the oracle represents sound engineering practice. Automated checks ensure structural integrity; expert review checks whether the task is a valid engineering evaluation item.</li>
    <li><strong>Multi-Model Pass@k Calibration</strong> &mdash; Multiple LLM agents attempt each task (k=4 trials). Tasks passed by every model on every attempt or failed by every model on every attempt are flagged and either adjusted or excluded.</li>
</ol>

Beyond these shared gates, each dataset has one additional mechanism tailored to its setting.

<h2>8.2 Dataset-Specific QA Mechanisms</h2>

<div class="mt-principle-box">
<h4 style="color:var(--tb-accent);">DeepTerminalBench: Pass@4 ∈ [0.25, 0.75]</h4>
<p>The 50 released tasks are specifically those where Opus 4.6 Pass@4 falls in the 0.25&ndash;0.75 range. This keeps the released set away from both saturation and universal failure, and provides score variation among evaluated models. Tasks outside this band are flagged for review, difficulty adjustment, or exclusion.</p>
</div>

<div class="mt-principle-box" style="border-left-color: var(--mt-accent,#2563eb);">
<h4 style="color:var(--mt-accent,#2563eb);">EvoCode-Bench: Path-Divergence via Behavioral Contracts</h4>
<p>Multi-turn tasks introduce path divergence: different agents can reach the end of round N-1 through different implementation paths, but round N's tests must accept all valid paths. EvoCode-Bench addresses this by requiring all tests to check the system's <strong>behavioral contract</strong> (external observable behavior) rather than implementation details. Round N's tests cannot assume the agent used the same code structure as the reference solution in round N-1 &mdash; only that the behavioral contract is preserved. Expert review explicitly audits every test for implementation coupling before admission.</p>
</div>

<div class="mt-principle-box" style="border-left-color: var(--rm-accent,#7c3aed);">
<h4 style="color:var(--rm-accent,#7c3aed);">RoadmapBench: Attribution-Driven Failure Classification</h4>
<p>After automated verification, tasks enter multi-model rollout. Failures are classified into two categories: <strong>task-side defects (T-type)</strong> &mdash; missing instruction details, over-constrained assertions, environment mismatches, or test bugs &mdash; versus <strong>model-side failures (M-type)</strong> &mdash; incorrect architecture, buggy implementation, or failed debugging. T-type issues are iteratively fixed and re-verified through the oracle gate. A task is admitted to the dataset only after all T-type issues are resolved, ensuring that remaining failures reflect genuine model limitations rather than benchmark noise.</p>
</div>

The T-type/M-type methodology is most formally developed in RoadmapBench, but the same spirit applies to DeepTerminalBench and EvoCode-Bench quality control.

<hr class="tb-section-rule">

<!-- ===== SECTION 9: INFRASTRUCTURE ===== -->
<h1 id="tb-infra">9. Infrastructure: Extending Harbor</h1>

<a href="https://github.com/laude-institute/harbor" target="_blank">Harbor</a> was originally designed for single-shot tasks: one instruction, one agent execution, one verification. DeepTerminalBench uses that engine unchanged. EvoCode-Bench adds persistent sessions, round boundaries, and resume support; RoadmapBench adds pinned repository images and phase-level scoring. The implementation differences explain what each benchmark setting costs to run reproducibly.

<h2>9.1 Baseline: Harbor's Single-Shot Engine</h2>

The baseline execution model is simple: Harbor builds the Docker environment, delivers <code>instruction.md</code> to the agent, runs the agent inside the container, then runs <code>tests/test.sh</code> to produce a reward. DeepTerminalBench uses this directly &mdash; every DeepTerminalBench task is a stock Harbor task, runnable by any Harbor-compatible scaffolding without modification.

<h2>9.2 EvoCode-Bench Extensions: Persistent Multi-Round Execution</h2>

Supporting multi-turn evaluation required rethinking several layers of Harbor. The overarching goal: <strong>make the evaluation environment behave like a real multi-turn coding session</strong>. When a user works with a coding agent across multiple turns, the agent remembers the conversation, the file system accumulates changes, installed packages persist, and running services stay alive. None of this resets between turns.

<h3>Persistent Environment</h3>

The core design decision is <strong>one Docker container and one agent session for the entire multi-turn task</strong>. The container is created once at the start. The agent is initialized once. Neither is torn down or rebuilt between rounds. All state accumulates naturally: files written in round 1 are visible in round 5, packages installed in round 2 remain available in round 4, the agent's own conversation history carries over throughout. Restarting the environment between rounds would measure a different setting: isolated repeated tasks rather than one persistent coding session.

<h3>Round Boundary Protocol</h3>

Between every two consecutive rounds, the framework executes a round boundary protocol:

<ol>
    <li>The agent completes its work for the current round.</li>
    <li>The framework runs the current round's <strong>cumulative verification script</strong>.</li>
    <li>A binary reward (pass/fail) is recorded.</li>
    <li>If the round passes, an optional <strong>state snapshot</strong> is saved, and the next round begins.</li>
    <li>If the round fails, the entire task <strong>terminates immediately</strong> (fail-stop).</li>
</ol>

Fail-stop is deliberate: since later rounds depend on correct earlier implementations, allowing an agent to continue after a failure would produce meaningless results. From the agent's perspective, nothing visible happens at round boundaries &mdash; it simply receives the next instruction and continues working. Verification and checkpointing happen transparently.

<h3>State Management and Partial Evaluation</h3>

Building a multi-turn dataset requires running thousands of trials during development. Running every task from round 1 every time would be prohibitively expensive. We need the ability to <strong>start from the middle</strong>, which means placing the environment into the exact state it would be in after round N-1 without actually executing rounds 1 through N-1.

Two mechanisms address this:

<ul>
    <li><strong>Reference solution fast-forward.</strong> The framework executes early rounds using the task's reference solution to bring the environment to a known-good state, then hands off to the target agent at the desired round. Fast-forwarded rounds are not verified and not scored; they serve purely to prepare the workspace.</li>
    <li><strong>Snapshot-based resume.</strong> At each round boundary, the framework saves a full snapshot of the container state. A later run can restore from any saved snapshot, skip all prior rounds entirely, and begin from that checkpoint. Historical round results are preserved and carried forward into the new run's scoring.</li>
</ul>

These enable (1) <strong>difficulty calibration</strong> &mdash; iterate on a specific round's design without re-running the chain; (2) <strong>partial evaluation</strong> &mdash; test an agent on rounds 3&ndash;5 only; (3) <strong>cross-agent comparison</strong> &mdash; run the reference solution through all rounds, then resume with different agents from the same checkpoint.

<h2>9.3 RoadmapBench Extensions: Pinned Images and Phase Orchestration</h2>

RoadmapBench extends Harbor more modestly, along two axes:

- **Pinned baseline Docker image.** The Docker image built at Gate 1 verification (where the baseline fails and oracle passes) is saved and reused for all subsequent evaluations, ensuring reproducibility across runs even as upstream dependencies drift.
- **Phase-level test orchestration + weighted reward.** The test runner executes phase-level test files (<code>test_01_*.py</code>, <code>test_02_*.py</code>, ...) independently, records per-phase pass/fail, and computes the weighted sum as the task reward. Partial-progress scoring requires the runner to continue past phase failures rather than short-circuit, unlike EvoCode-Bench's fail-stop model.

Beyond these, RoadmapBench reuses Harbor's stock execution engine without modification &mdash; a single instruction, a single agent session, a single verification pass.

<h2>9.4 Shared Limitations</h2>

- **Snapshot restoration is not perfect.** EvoCode-Bench snapshots capture the container's file system but not all runtime state. If an agent's work depends on running background processes, in-memory caches, or live network connections from earlier rounds, these will not survive a save-and-restore cycle.
- **Tests must be deterministic and non-interactive.** All verification scripts must run without human input and produce consistent results. Tests depending on external network state, wall-clock time, or interactive prompts are not supported.
- **Snapshot storage cost.** For long EvoCode-Bench tasks, full container snapshots across many rounds can accumulate significant storage. By default, snapshots are saved only for rounds that pass verification, reducing storage for failed trials.
- **No mid-round recovery.** If an agent crashes mid-round in EvoCode-Bench, that round must be re-executed from the previous snapshot.

<hr class="tb-section-rule">

<!-- ===== SECTION 10: TASK EXAMPLES ===== -->
<h1 id="tb-examples">10. Task Examples</h1>

Below are two representative tasks per dataset, chosen to cover different task structures within each benchmark. For space, we summarize each example rather than reproducing the full instruction, focusing on the design pattern and the difficulty mechanism.

<h2 id="tb-ex-deep">10.1 DeepTerminalBench</h2>

<div class="tb-case-tabs" id="tb-case-tabs">
    <div class="tb-case-tab-nav">
        <button class="tb-case-tab-btn active" onclick="tbSwitchCase(0)">Case 1: B-Tree 11-Bug Fix</button>
        <button class="tb-case-tab-btn" onclick="tbSwitchCase(1)">Case 2: K8s Scheduler Rust Optimization</button>
    </div>

    <!-- ===== CASE 1 ===== -->
    <div class="tb-case-panel active" id="tb-case-0">
        <div class="tb-sub-tab-nav">
            <button class="tb-sub-tab-btn active" onclick="tbSwitchSub(0, 0)">Instruction</button>
            <button class="tb-sub-tab-btn" onclick="tbSwitchSub(0, 1)">Environment</button>
            <button class="tb-sub-tab-btn" onclick="tbSwitchSub(0, 2)">Solution</button>
            <button class="tb-sub-tab-btn" onclick="tbSwitchSub(0, 3)">Tests</button>
            <button class="tb-sub-tab-btn" onclick="tbSwitchSub(0, 4)">Why Hard</button>
        </div>
        <div class="tb-sub-panel active" id="tb-sub-0-0">
            <div class="tb-case-body">
                <h3>B-Tree Index Manager 11-Bug Fix (Python, 31 tests, Opus Pass@4: 0.25)</h3>
                <blockquote style="border-left: 3px solid var(--tb-accent); padding: 12px 20px; background: var(--tb-surface-raised); border-radius: 0 8px 8px 0; font-size: 0.88em; color: var(--tb-ink-soft); margin: 16px 0; white-space: pre-wrap;">
A disk-backed B-tree index manager for a lightweight embedded database lives at <code>/app/btree/</code>, spanning 7 Python source files (node, tree, pager, serializer, cursor, wal, concurrency). A recent refactor introduced <strong>11 distinct bugs</strong> spanning all 5 layers of the storage engine stack:

- BUG-001 &mdash; <em>Leaf-split key loss</em>: median key promoted to parent is also left in the right child, so the left child silently loses <code>keys[t-1]</code>.
- BUG-004 &mdash; <em>Trailing child pointer lost on serialize</em>: <code>serialize_node</code> writes <code>len(keys)</code> child page-IDs instead of <code>len(keys) + 1</code>, corrupting the tree after checkpoint+recovery.
- BUG-008 &mdash; <em>Header signedness</em>: <code>num_keys</code> packed as signed int16 wraps negative for &gt;= 32768 keys.
- BUG-009 &mdash; <em>WAL recovery replays aborted transactions</em>.
- BUG-011 &mdash; <em>RWLock starvation</em>: busy-wait spin causes 100% CPU.

... and 6 more bugs touching range scans, merges, cursors, and free-page reuse. The public API must remain unchanged. A read-only diagnostics script at <code>/app/run_diagnostics.py</code> exercises the module end-to-end and writes a structured JSON report. Language is Python 3.
                </blockquote>
            </div>
        </div>
        <div class="tb-sub-panel" id="tb-sub-0-1">
            <div class="tb-case-body">
                <h4>Environment (9 files)</h4>
                <div class="tb-file-tree">
/app/btree/__init__.py<br/>
/app/btree/node.py<br/>
/app/btree/tree.py<br/>
/app/btree/pager.py<br/>
/app/btree/serializer.py<br/>
/app/btree/cursor.py<br/>
/app/btree/wal.py<br/>
/app/btree/concurrency.py<br/>
/app/run_diagnostics.py (read-only diagnostic script)
                </div>
                <p>The agent inherits a complete B-tree storage engine codebase: 7 Python source files implementing the core data structure, page serialization, write-ahead logging, cursor iteration, and thread-safe concurrent access, plus a diagnostics script that exercises the entire module and produces a structured report.</p>
            </div>
        </div>
        <div class="tb-sub-panel" id="tb-sub-0-2">
            <div class="tb-case-body">
                <h4>Oracle Solution</h4>
                <p>The oracle fixes all 11 bugs across 7 files. Key techniques include: correcting the B-tree split algorithm to properly promote median keys without duplication; fixing serialization to write <code>len(keys)+1</code> child pointers; changing <code>num_keys</code> from signed to unsigned int16; making WAL recovery filter out aborted transactions; populating the free-page list so freed pages are reused; replacing the busy-wait spin with <code>threading.Condition</code>; and correcting range_scan boundaries to inclusive comparisons.</p>
            </div>
        </div>
        <div class="tb-sub-panel" id="tb-sub-0-3">
            <div class="tb-case-body">
                <h4>Tests (31 functions)</h4>
                <p><strong>Functional correctness:</strong> <code>test_range_scan_101_results</code>, <code>test_cursor_count_10000</code>, <code>test_search_after_merge</code>.</p>
                <p><strong>Persistence and recovery:</strong> <code>test_serialization_children_preserved</code> checks that serialize-then-deserialize roundtrips preserve all child pointers. <code>test_wal_recovery_skips_aborted</code> verifies aborted-transaction keys do not reappear after replay.</p>
                <p><strong>Concurrency and resource management:</strong> <code>test_no_cpu_spike</code>, <code>test_rwlock_uses_condition</code>, <code>test_free_page_direct</code>.</p>
                <p><strong>Edge cases:</strong> empty tree operations, single-key tree, duplicate inserts, delete of non-existent key, range with low==high, interleaved commit/abort WAL recovery.</p>
            </div>
        </div>
        <div class="tb-sub-panel" id="tb-sub-0-4">
            <div class="tb-case-body">
                <h4>Why This Task Is Difficult</h4>
                <p>The 11 bugs span 7 files across 5 layers (tree ops, binary serialization, page management, WAL recovery, concurrency). The key difficulty is <strong>cross-layer bug interaction</strong>. Fixing BUG-001 (leaf-split key loss) requires understanding the B-tree split invariant; but if BUG-004 (serialization writes wrong child-pointer count) is not also fixed, the corrected split silently corrupts on the next checkpoint/recovery cycle. Similarly, fixing BUG-009 (WAL replay of aborted transactions) requires understanding the WAL transaction lifecycle; but if BUG-007 (free-page reuse) is not also fixed, the data file grows without bound.</p>
                <p>In failed trajectories, agents typically fix 8&ndash;9 of 11 bugs but miss either BUG-004 (easy to overlook because it only manifests after checkpoint+recovery) or BUG-007 (symptom is file growth, not data corruption, so it is deprioritized). The interaction between bugs means partial fixes often break other tests in non-obvious ways.</p>
            </div>
        </div>
    </div>

    <!-- ===== CASE 2 (was Case 3) ===== -->
    <div class="tb-case-panel" id="tb-case-1">
        <div class="tb-sub-tab-nav">
            <button class="tb-sub-tab-btn active" onclick="tbSwitchSub(1, 0)">Instruction</button>
            <button class="tb-sub-tab-btn" onclick="tbSwitchSub(1, 1)">Environment</button>
            <button class="tb-sub-tab-btn" onclick="tbSwitchSub(1, 2)">Solution</button>
            <button class="tb-sub-tab-btn" onclick="tbSwitchSub(1, 3)">Tests</button>
            <button class="tb-sub-tab-btn" onclick="tbSwitchSub(1, 4)">Why Hard</button>
        </div>
        <div class="tb-sub-panel active" id="tb-sub-1-0">
            <div class="tb-case-body">
                <h3>Kubernetes Pod Scheduler Optimizer (Rust, ~20 tests, Opus Pass@4: 0.75)</h3>
                <blockquote style="border-left: 3px solid var(--tb-accent); padding: 12px 20px; background: var(--tb-surface-raised); border-radius: 0 8px 8px 0; font-size: 0.88em; color: var(--tb-ink-soft); margin: 16px 0; white-space: pre-wrap;">
Given a Rust-based Kubernetes pod scheduler simulator at <code>/app/scheduler_slow.rs</code> that reads cluster state from JSON and produces correct scheduling decisions &mdash; but takes ~18 seconds on the test dataset. Rewrite as <code>/app/scheduler.rs</code> so it finishes in <strong>under 2 seconds while producing bit-for-bit identical output</strong>.

The scheduler must compute six things: (1) pod scheduling with taints, tolerations, node/pod affinity and anti-affinity, node selector matching, resource fit, and a composite score combining resource balance and affinity preference; (2) per-node utilization; (3) per-namespace summaries; (4) anti-affinity conflict detection; (5) bin-packing standard deviation across resources; (6) preemption: for unschedulable pods with <code>PreemptLowerPriority</code> policy, find the minimum-cost eviction set on some node.

Deterministic sorting everywhere. Standard library only. Compile with <code>rustc -O</code> and print elapsed milliseconds to stderr.
                </blockquote>
            </div>
        </div>
        <div class="tb-sub-panel" id="tb-sub-1-1">
            <div class="tb-case-body">
                <h4>Environment (3 files)</h4>
                <div class="tb-file-tree">
/app/scheduler_slow.rs (the slow reference implementation)<br/>
/app/data/cluster_state.json (cluster topology, pods, nodes)<br/>
/app/data/expected_output.json (exact expected scheduling decisions)
                </div>
                <p>The agent receives a working but slow Rust implementation, a large cluster state JSON, and the exact expected output. The task is pure performance optimization &mdash; the output must be bit-for-bit identical, just produced 9x faster.</p>
            </div>
        </div>
        <div class="tb-sub-panel" id="tb-sub-1-2">
            <div class="tb-case-body">
                <h4>Oracle Solution</h4>
                <p>The oracle rewrites the scheduler from scratch in optimized Rust. Key techniques: pre-indexing nodes by label sets for O(1) node-selector matching; incremental resource-availability tracking instead of re-scanning all nodes; caching taint-toleration compatibility; priority-based preemption with early termination; efficient data structures (HashMap, BTreeMap) for topology lookups; eliminating unnecessary JSON serialization in intermediate steps.</p>
            </div>
        </div>
        <div class="tb-sub-panel" id="tb-sub-1-3">
            <div class="tb-case-body">
                <h4>Tests</h4>
                <p><strong>Correctness:</strong> the primary test compares the output file byte-for-byte against <code>expected_output.json</code>. Every scheduling decision &mdash; which pod on which node, which pods are preempted, which remain unscheduled &mdash; must match exactly. No partial credit.</p>
                <p><strong>Performance:</strong> 2-second wall-clock limit (down from ~18s baseline) under <code>rustc -O</code>.</p>
                <p><strong>Build verification:</strong> compiles without errors or warnings under the default release profile.</p>
            </div>
        </div>
        <div class="tb-sub-panel" id="tb-sub-1-4">
            <div class="tb-case-body">
                <h4>Why This Task Is Difficult</h4>
                <p>The task combines three requirements that must all hold simultaneously: <strong>Kubernetes scheduling semantics</strong>, <strong>Rust systems programming</strong>, and <strong>algorithmic optimization</strong>.</p>
                <p>The scheduling specification is dense. Node affinity has both required and preferred expressions with 6 operators. Taints and tolerations have 3 effects with both Equal and Exists operators. Preemption follows priority ordering with a specific policy. The agent must understand all of these correctly &mdash; not approximately &mdash; because the test requires exact output match.</p>
                <p>Writing correct, optimized Rust adds a language-level constraint: the ownership model, borrow checker, and lifetime system prevent many common optimization patterns. The performance requirement (under 2s, down from 18s) requires an algorithmic improvement &mdash; an agent that produces correct code with the same O(N&times;M) complexity will pass correctness but fail the performance gate.</p>
                <p>In failed trajectories, the most common pattern: Rust code compiles and runs under 2s but produces slightly different output due to a misunderstood scheduling rule (typically pod anti-affinity topology key handling or PreferNoSchedule taint semantics). The exact-match requirement leaves no room for approximation.</p>
            </div>
        </div>
    </div>

</div><!-- end tb-case-tabs -->

<h2 id="tb-ex-evo">10.2 EvoCode-Bench</h2>

<h3>Representative Real Task: Deterministic Data Pipeline CLI</h3>

This example is a released EvoCode-Bench task, <code>deterministic-data-pipeline-go</code>. It asks the agent to build and then extend a Go CLI called <code>dpipe</code> for deterministic CSV processing, reproducibility metadata, validation, profiling, lineage, quality checks, snapshots, and changelogs. The task is representative because it combines all three multi-turn stressors in one session: cumulative feature growth, corrections to earlier behavior, and explicit conflicts with prior output formats.

<div class="mt-conv-box">
    <div class="mt-conv-title">Task: <code>dpipe</code> Deterministic Data Pipeline (15 Rounds)</div>
    <div class="mt-round">
        <div class="mt-round-badge rb-user">R1</div>
        <div class="mt-round-content">
            <strong>Initial build:</strong> implement <code>dpipe</code> as a deterministic Go CLI that reads CSV files, applies configured transformations, writes bit-identical outputs across repeated runs, and supports reproducibility verification.
        </div>
    </div>
    <div class="mt-round">
        <div class="mt-round-badge rb-user">R3</div>
        <div class="mt-round-content">
            <strong>Correction + extension:</strong> fix linear-fill boundary extrapolation while adding additional pipeline capabilities. The round tests both the new behavior and the earlier deterministic CSV pipeline.
        </div>
    </div>
    <div class="mt-round">
        <div class="mt-round-badge rb-user">R5</div>
        <div class="mt-round-content">
            <strong>Conflict:</strong> change the <code>verify</code> command checksum algorithm from SHA-256 to BLAKE2b-256. Existing verification behavior must be updated without breaking earlier ingestion, transformation, profiling, and validation behavior.
        </div>
    </div>
    <div class="mt-round">
        <div class="mt-round-badge rb-user">R7</div>
        <div class="mt-round-content">
            <strong>Correction + extension:</strong> fix lineage manifest graph edges and add further reproducibility functionality. This round checks that lineage metadata remains consistent with the manifest semantics introduced earlier.
        </div>
    </div>
    <div class="mt-round">
        <div class="mt-round-badge rb-user">R10</div>
        <div class="mt-round-content">
            <strong>Format conflict:</strong> replace the manifest's single <code>blake2b</code> JSON field with two new fields. The model has to migrate the output contract while preserving the rest of the manifest and verification behavior.
        </div>
    </div>
    <div class="mt-round">
        <div class="mt-round-badge rb-user">R12</div>
        <div class="mt-round-content">
            <strong>Correction:</strong> change the default <code>normalize</code> method so omitted or empty <code>method</code> behaves as <code>minmax</code>. This tests whether the agent can revise an earlier transform without disturbing explicit <code>zscore</code> and <code>minmax</code> behavior.
        </div>
    </div>
    <div class="mt-round">
        <div class="mt-round-badge rb-user">R15</div>
        <div class="mt-round-content">
            <strong>Late conflict:</strong> change <code>snapshot</code> row hashes from MD5 to SHA-256 while also adding a tag transform. The final tests exercise the full accumulated system: transforms, auditability, lineage, manifest formats, snapshots, and changelogs.
        </div>
    </div>
</div>

The key property is cumulative verification. A correct round 15 implementation cannot merely satisfy the latest hash-format change; it must also preserve deterministic output, earlier checksum semantics where still valid, profile/validate/quality/schema behavior, audit logging, lineage metadata, and snapshot/changelog contracts introduced across the previous 14 rounds. This is the EvoCode-Bench setting in concrete form: later requests are small, but each one is evaluated against the whole evolving tool.

<h2 id="tb-ex-roadmap">10.3 RoadmapBench</h2>

<h3>Example 1: PyTorch Geometric 2.4 → 2.5 (Python)</h3>

<div class="rm-callout">
    <div class="rm-callout-title">&#128200; Task Overview</div>
    <p>The agent receives the PyG source tree at version 2.4.0 and must implement features introduced in 2.5.0. The task spans <strong>5 phases</strong>: (1) the new <code>Index</code> class and <code>EdgeIndex.unbind()</code>; (2) <code>EdgeIndex.sparse_resize_()</code> with validation logic; (3) the <code>ClusterPooling</code> layer; (4) <code>LinkPredMRR</code> metric and GATConv residual connections. Each phase tests API-level behavioral contracts using tests adapted from the official PyG test suite.</p>
    <p><strong>Difficulty source:</strong> The agent must synthesize new classes that fit PyG's internal tensor semantics, register them in the correct <code>__init__.py</code> export paths, and preserve backward compatibility with existing 2.4 APIs &mdash; all without seeing the target version source code.</p>
</div>

<h3>Example 2: Fiber v2.49 → v2.50 (Go)</h3>

<div class="rm-callout">
    <div class="rm-callout-title">&#128196; Task Overview</div>
    <p>Go library upgrades often introduce new middleware, context propagation mechanisms, or routing features. This task asks the agent to implement new request context helpers, extend the middleware chain API, and add a new built-in middleware with configurable behavior. The instruction provides behavioral contracts (which HTTP status codes to return under which conditions) but not the Go struct definitions or interface signatures.</p>
    <p><strong>Difficulty source:</strong> Go's type system and interface semantics require precise API surface alignment. The agent must discover the correct embedding and delegation patterns by reading the existing middleware implementations rather than from the instruction alone. Whereas the PyG example tests Python/ML ecosystem fluency, this example tests Go idioms and the ability to generalize RoadmapBench's pattern across language ecosystems.</p>
</div>

<hr class="tb-section-rule">

<!-- ===== SECTION 11: EVALUATION INSIGHTS ===== -->
<h1 id="tb-eval">11. Evaluation Insights</h1>

<div class="tb-callout tb-callout-amber">
    <div class="tb-callout-title">Why We Use a High-Performing Scaffolding</div>
    <p>The same underlying model can produce different scores under different agent frameworks. To reduce scaffolding as a confounder, we evaluate with <a href="https://github.com/harbor-framework/harbor">Harbor Terminus-2</a> &mdash; a standardized agent harness with terminal access, file editing, and code execution inside a Docker container (see the <a href="https://www.tbench.ai/leaderboard/terminal-bench/2.0">Terminal-Bench 2.0 leaderboard</a> for comparative scaffolding performance). The analyses below therefore focus on behavior under this fixed harness.</p>
</div>

<h2 id="tb-pf-matrix">11.1 DeepTerminalBench: Per-Task Pass/Fail Map</h2>

<div style="color:var(--tb-ink-soft); font-size:13px; line-height:1.7; margin-bottom:14px;">The matrix below renders the same 9-model results as the leaderboard, but at task granularity: each row is one of the 50 tasks (ordered by how many models solved it, descending), each column is one of the 9 models, and a filled cell means that model passed that task in this single-trial Pass@1 run. The right-most column shows the per-task pass count. Hover any row label to see the full task name. Reading the matrix vertically gives each model's solved-task profile; reading it horizontally exposes the difficulty spectrum &mdash; from a few rows that are widely solved to seven bottom rows that no model solves.</div>

<div class="tb-pf-wrap">
    <div class="tb-pf-matrix-col">
        <div style="font-weight:600; color:var(--tb-ink); font-size:13px; margin-bottom:6px; letter-spacing:0.2px;">Per-task pass/fail map &mdash; tasks ordered by how many of the 9 models solve them (descending)</div>
        <div style="color:var(--tb-ink-soft); font-size:11.5px; margin-bottom:8px; line-height:1.55;">Filled cells indicate the model passed the task in this single-trial Pass@1 run; empty cells indicate failure. The bottom 7 rows are tasks no model solved; the top rows show the easier shared core. Hover a row label to see the full task name.</div>
        <table class="tb-pf-matrix">
          <thead><tr><th class="tb-pf-task">Task</th><th class="tb-pf-model">Opus-4.7</th><th class="tb-pf-model">GPT-5.5</th><th class="tb-pf-model">DSK-V4</th><th class="tb-pf-model">K2.6</th><th class="tb-pf-model">Q3.6</th><th class="tb-pf-model">GLM-5.1</th><th class="tb-pf-model">Q3.5-A</th><th class="tb-pf-model">Gemini</th><th class="tb-pf-model">MM-2.7</th><th class="tb-pf-count">✓</th></tr></thead>
          <tbody>
            <tr><td class="tb-pf-task">d12w3_fix-pipeline-executor-bugs</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">7</td></tr>
            <tr><td class="tb-pf-task">d12_w3_d12w3_fix-log-analysis-alert-pipeline-bugs</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-count">6</td></tr>
            <tr><td class="tb-pf-task">d17_w5_d17w5_doc-similarity-clustering</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">5</td></tr>
            <tr><td class="tb-pf-task">d18w3_fix-particle-collision-sim</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-count">5</td></tr>
            <tr><td class="tb-pf-task">d2w10_build-dependency-graph-forensics</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">5</td></tr>
            <tr><td class="tb-pf-task">d4w10_microservice-crash-cascade-analyzer</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">5</td></tr>
            <tr><td class="tb-pf-task">d5_w7_d5w7_streaming-aggregation-checkpoint-restore</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-count">5</td></tr>
            <tr><td class="tb-pf-task">d5w6_json-log-aggregation-indexing-pipeline</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">5</td></tr>
            <tr><td class="tb-pf-task">d9w8_security-patch-credential-exposure-bash-deployment</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-count">5</td></tr>
            <tr><td class="tb-pf-task">d12_w6_d12w6_build-cache-parallel-execution-optimizer</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">4</td></tr>
            <tr><td class="tb-pf-task">d13_w5_d13w5_static-analysis-pipeline-integration</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">4</td></tr>
            <tr><td class="tb-pf-task">d4_w2_d4w2_enhance-application-metrics-collector</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">4</td></tr>
            <tr><td class="tb-pf-task">d6_w6_d6w6_wal-compaction-checkpoint-optimizer</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">4</td></tr>
            <tr><td class="tb-pf-task">d10w7_ml-feature-store-snapshot-recovery-drift</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">3</td></tr>
            <tr><td class="tb-pf-task">d15_w6_d15w6_concurrent-hashmap-lock-striping-optimizer</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">3</td></tr>
            <tr><td class="tb-pf-task">d19w4_migrate-bash-backup-to-python</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">3</td></tr>
            <tr><td class="tb-pf-task">d3w6_d3w6-optimize-c-regression-test-harness</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">3</td></tr>
            <tr><td class="tb-pf-task">d4_w2_d4w2_enhance-log-analysis-alert-engine</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">3</td></tr>
            <tr><td class="tb-pf-task">d4w10_performance-triage-diagnose-runtime-anomalies-distributed</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">3</td></tr>
            <tr><td class="tb-pf-task">d6_w3-schema-registry-rollback-chain</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">3</td></tr>
            <tr><td class="tb-pf-task">d6w3_fix-b-tree-index-manager-bugs</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">3</td></tr>
            <tr><td class="tb-pf-task">d12_w10_d12w10_backup-chain-forensics</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">2</td></tr>
            <tr><td class="tb-pf-task">d14w2_extend-tar-archive-format-parser</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">2</td></tr>
            <tr><td class="tb-pf-task">d16_w9_d16w9_api-contract-snapshot-regression-checker</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">2</td></tr>
            <tr><td class="tb-pf-task">d16w8_harden-graphql-project-api</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">2</td></tr>
            <tr><td class="tb-pf-task">d1_w4_d1w4_migrate-commonjs-to-esm-node-app</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">2</td></tr>
            <tr><td class="tb-pf-task">d2_w1_d2w1_full-text-document-search-engine</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">2</td></tr>
            <tr><td class="tb-pf-task">d5_w7_d5w7_ingestion-queue-dead-letter-recovery</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">2</td></tr>
            <tr><td class="tb-pf-task">d5w2_fix-etl-pipeline-bugs-add-lineage</td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">2</td></tr>
            <tr><td class="tb-pf-task">d7w11_proc-tree-budget-enforcer</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">2</td></tr>
            <tr><td class="tb-pf-task">d7w7_resume-checkpoint-batch-pipeline</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">2</td></tr>
            <tr><td class="tb-pf-task">d9_w6_d9w6_rbac-abac-policy-optimizer</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">2</td></tr>
            <tr><td class="tb-pf-task">d10w7_ml-training-checkpoint-recovery-system</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">1</td></tr>
            <tr><td class="tb-pf-task">d11_w8_d11w8_numerical-simulation-engine-security-remediation</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">1</td></tr>
            <tr><td class="tb-pf-task">d13w5_build-microschema-validator-compiler</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">1</td></tr>
            <tr><td class="tb-pf-task">d14_w9_d14w9_binary-log-replay-determinism-validator</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">1</td></tr>
            <tr><td class="tb-pf-task">d15w1_chandy-lamport-distributed-snapshot-simulator</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">1</td></tr>
            <tr><td class="tb-pf-task">d1w9_reproducible-build-pipeline-artifact-verification</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">1</td></tr>
            <tr><td class="tb-pf-task">d20w2_java-approval-chain-parallel-escalation</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-count">1</td></tr>
            <tr><td class="tb-pf-task">d3_w4_d3w4_unittest-to-pytest-migration-verifier</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">1</td></tr>
            <tr><td class="tb-pf-task">d4_w3_d4w3_fix-metrics-dashboard-collection-bugs</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">1</td></tr>
            <tr><td class="tb-pf-task">d8_w8_d8w8_k8s-manifest-generator-security-hardening</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">1</td></tr>
            <tr><td class="tb-pf-task">d8w7_ci-cd-pipeline-recovery-orchestrator</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-pass"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">1</td></tr>
            <tr><td class="tb-pf-task">d11_w8_d11w8_signal-processing-pipeline-security-hardening</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">0</td></tr>
            <tr><td class="tb-pf-task">d17w12_identify-sorting-algorithm-trace-forensics</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">0</td></tr>
            <tr><td class="tb-pf-task">d18w11_fsm-batch-test-coverage-analysis</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">0</td></tr>
            <tr><td class="tb-pf-task">d5w10_etl-pipeline-audit-trail-forensic-reconstruction</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">0</td></tr>
            <tr><td class="tb-pf-task">d6_w2_d6w2_lsm-tree-compaction-bloom-filter-enhancement</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">0</td></tr>
            <tr><td class="tb-pf-task">d6_w8_d6w8_schema-migration-ddl-deserialization-fix</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">0</td></tr>
            <tr><td class="tb-pf-task">d8w10_kubernetes-cluster-incident-forensics</td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-cell tb-pf-fail"></td><td class="tb-pf-count">0</td></tr>
          </tbody>
        </table>
    </div>
    <aside class="tb-pf-side">
        <div class="tb-pf-side-card">
            <div class="tb-pf-side-eyebrow">Difficulty spectrum</div>
            <div class="tb-pf-side-stats">
                <div class="tb-pf-stat"><span class="tb-pf-stat-num">7</span><span class="tb-pf-stat-lbl">tasks no model solves</span></div>
                <div class="tb-pf-stat"><span class="tb-pf-stat-num">12</span><span class="tb-pf-stat-lbl">all top-5 fail</span></div>
                <div class="tb-pf-stat"><span class="tb-pf-stat-num">11</span><span class="tb-pf-stat-lbl">solved by exactly one</span></div>
                <div class="tb-pf-stat"><span class="tb-pf-stat-num">0</span><span class="tb-pf-stat-lbl">solved by 8&ndash;9 models</span></div>
            </div>
            <div class="tb-pf-side-note">No saturated tasks &mdash; every task still discriminates somewhere on the model spectrum.</div>
        </div>

        <div class="tb-pf-side-card">
            <div class="tb-pf-side-eyebrow">Single model vs. ensemble</div>
            <div class="tb-pf-side-row"><span>Best single model (Opus-4.7)</span><strong>17 / 50 &middot; 34%</strong></div>
            <div class="tb-pf-side-row"><span>All 9 models combined</span><strong>43 / 50 &middot; 86%</strong></div>
            <div class="tb-pf-side-note">Across all nine models combined, only 43 of 50 tasks are solved at least once &mdash; the remaining seven tasks form a hard core that no current model handles in a single attempt.</div>
        </div>

        <div class="tb-pf-side-card">
            <div class="tb-pf-side-eyebrow">Solo wins (only that model passed)</div>
            <ul class="tb-pf-side-list">
                <li><span>Qwen-3.5-397B-A17B</span><strong>3</strong></li>
                <li><span>DeepSeek-V4-Pro</span><strong>2</strong></li>
                <li><span>Kimi-K2.6</span><strong>2</strong></li>
                <li><span>GPT-5.5-high &middot; Qwen-3.6-Plus &middot; GLM-5.1 &middot; MiniMax-M2.7</span><strong>1 each</strong></li>
            </ul>
            <div class="tb-pf-side-note">Even the 7th-ranked model (Qwen-3.5-397B-A17B) contributes the most unique passes, indicating capability profiles diverge from the headline ranking.</div>
        </div>

        <div class="tb-pf-side-card">
            <div class="tb-pf-side-eyebrow">Top-5 fail-set overlap</div>
            <div class="tb-pf-side-row"><span>Lowest pairwise Jaccard</span><strong>49% &middot; Opus &times; GPT</strong></div>
            <div class="tb-pf-side-row"><span>Highest pairwise Jaccard</span><strong>66% &middot; DSK &times; K2.6</strong></div>
            <div class="tb-pf-side-note">Overlap of <em>49&ndash;66%</em> on failed-task sets means roughly half of each top-5 model&apos;s failures are also failures for the others; the rest are model-specific blind spots.</div>
        </div>
    </aside>
</div>

<h2>11.2 DeepTerminalBench: 200-Rollout Deep Dive</h2>

We examined Claude Opus 4.6 across 200 rollouts (50 tasks &times; 4 attempts). Since tasks were selected using Opus Pass@4 calibration, this is not a model leaderboard; it is a task-difficulty analysis using one high-scoring agent as the probe.

Across 200 rollouts, 89 succeeded and 111 failed. Comparing these two populations gives three measurable contrasts:

- **Failed attempts run longer.** 17.7 minutes vs. 17.0 minutes for successes &mdash; failing agents spend time on unproductive exploration.
- **23% of failures end in timeout.** These are not wrong answers produced quickly; they are cases where the agent ran out of budget while still actively working &mdash; tasks genuinely require sustained multi-step reasoning.
- **Lower Pass@4 tasks take longer.** Pass@4 = 0.25 tasks average 31 minutes per attempt; Pass@4 = 0.75 tasks average 15 minutes.
- **Multi-file bug diagnosis, cross-component integration, deep domain knowledge** are common among the 22 tasks in the Pass@4 = 0.25 band &mdash; understanding WAL semantics, K8s scheduling priorities, or C memory conventions inferred from context rather than stated.

<div class="tb-insight">
    <div class="tb-insight-title">Insight 1: Process strategy determines outcome</div>
    <div class="tb-insight-body">
        <p>Under identical scaffolding, the <em>sequence of actions</em> the model chooses matters enormously. Successful attempts test <strong>incrementally</strong>: write one module, run the test suite, observe which tests pass, fix issues, move to the next module. Failed attempts write everything first, then run tests for the first time at the end &mdash; encountering 20+ failures with no diagnostic signal about which module caused which error.</p>
        <p>This is not a scaffolding deficiency &mdash; the scaffolding allows incremental testing in both cases. The difference is whether the model <em>chooses</em> to test early. Especially pronounced in the B-tree 11-bug task, where agents that test after each bug fix pass at much higher rates than those attempting all 11 fixes before running any tests. The ability to decompose a complex task into verifiable increments is itself a core model capability, distinct from raw code generation quality.</p>
    </div>
</div>

<div class="tb-insight">
    <div class="tb-insight-title">Insight 2: Remaining misses concentrate in hidden interactions</div>
    <div class="tb-insight-body">
        <p>In bug-fix and security-hardening tasks requiring 8&ndash;14 fixes, agents consistently find and fix 80&ndash;90% of issues but miss 1&ndash;2 subtle ones. The pattern is remarkably stable across tasks and runs.</p>
        <p>In the B-tree task, agents reliably fix the obvious bugs but miss BUG-004 (serialization child count) because it only manifests after a checkpoint-recovery cycle, not during normal in-memory operations. In the SIEM pipeline task, agents fix most integration bugs but miss the per-service severity threshold filtering because it requires reading a separate config file not referenced in any component's API. The missed issues usually require domain knowledge or cross-file exploration beyond the local symptom. The agent often <em>considers</em> the right area but implements an incomplete fix &mdash; for example, adding lock protection to shared state but not to the escalation path, or normalizing 3 of 4 timestamp formats but missing the CEF format.</p>
    </div>
</div>

<div class="tb-insight">
    <div class="tb-insight-title">Insight 3: Correctness under simultaneous constraints is harder than correctness alone</div>
    <div class="tb-insight-body">
        <p>Many tasks impose <strong>simultaneous constraints</strong> that interact: thread safety + performance targets, security hardening + backward compatibility, format compliance + error recovery, algorithmic correctness + exact output matching. Agents consistently handle each constraint in isolation but fail when they must all hold at once.</p>
        <p>In the K8s scheduler task, agents produce Rust code that either compiles and runs fast but produces wrong output (misunderstood scheduling semantics), or produces correct output but exceeds the 2-second time limit (correct algorithm but unoptimized). The high-failure region is the conjunction: correct <em>and</em> fast. These tasks measure whether an agent can satisfy interacting constraints at the same time, not whether it can satisfy each constraint separately.</p>
    </div>
</div>

<h2>11.3 EvoCode-Bench: Single-Round Skill Does Not Become Multi-Turn Reliability</h2>

EvoCode-Bench measures a pattern absent from single-shot benchmarks: agents can solve many individual rounds when each round starts from a clean reference state, but fail when they must carry forward their own implementation. On 26 multi-turn tasks and 227 evaluated rounds, Claude-Opus-4.7-High (high reasoning effort) leads MT@4 at 54.0, GPT-5.5-High (high reasoning effort) follows at 52.4, and Claude-Opus-4.6 (default configured reasoning) reaches 44.0. These are the only three models above 40 MT@4.

The SR-to-MT@4 gap quantifies the cost of carrying state across rounds. Claude-Opus-4.6 (default configured reasoning) reaches 78.9 single-round pass rate but 44.0 MT@4. GLM-5.1 (thinking enabled) reaches 63.9 SR but 36.2 MT@4, Kimi-K2.6 (thinking enabled) reaches 59.0 SR but 31.9 MT@4, and DeepSeek-V4-Pro (high reasoning effort) reaches 56.4 SR but 30.6 MT@4. The drop is evidence that isolated instruction following is insufficient; the model must preserve a correct evolving workspace while requirements accumulate, change, and sometimes conflict.

Round-level results show how quickly reliability decays. Averaged across model-round observations, pass rates fall from 46.7 at round 1 to 26.9 at round 3, 21.3 at round 5, and 17.2 at round 7. Under fail-stop scoring, these drops quantify the cost of long-horizon state management: one regression can terminate the rest of the task.

Failure annotations sharpen the interpretation. The largest category is not broad conversational forgetting: among high-confidence labels, most failures are concrete current-round specification misses under cumulative tests. Regression and stale-contract errors are minority modes overall, but they become more visible on correction and conflict rounds, where the agent must revise behavior without breaking still-active obligations.

<h2>11.4 RoadmapBench: Cross-Model Separation</h2>

RoadmapBench results reveal clear separation across model capabilities. Claude-Opus-4.6 leads with 32.2% resolved (OpenHands) and 31.3% (Terminus 2), Failure modes differ systematically by capability level:

- **Top-tier models** (Claude-Opus-4.6, GPT-5.4) complete core phases reliably but miss subtle edge cases &mdash; error behavior when constraints conflict, API contract details not explicitly spelled out, or integration between newly introduced modules.
- **Mid-tier models** (Gemini-3.1-Pro, DeepSeek-V4-Pro, GLM-5.1) pass the first 1&ndash;2 phases but fail to integrate later phases that depend on earlier architectural decisions.
- **Lower-tier models** fail at the initial architectural setup &mdash; placing new code in the wrong modules, missing export registrations, or breaking existing APIs before implementing new ones.

The Completion Score captures this gradient: even models with low resolve rates achieve meaningful partial credit (e.g., DeepSeek-V4-Pro: 18.3% resolved but 0.486 completion), confirming that phase-weighted scoring exposes capability differences invisible to binary evaluation.

<h2>11.5 Capability vs. Consistency: A Cross-Dataset Finding</h2>

<div class="tb-callout">
    <div class="tb-callout-title">Consistency is the cross-dataset gap</div>
    <p>Across all three datasets, every released task has at least one successful attempt. The same model can fail another attempt after choosing a different exploration order, fix strategy, or code structure. This points to <em>reliable execution of multi-step engineering plans under uncertainty</em> as the shared source of score variance.</p>
    <p>DeepTerminalBench surfaces this as Pass@4 variance on the same task. EvoCode-Bench surfaces it as fail-stop failure on round N after correctly handling rounds 1 through N-1. RoadmapBench surfaces it through T-type/M-type attribution, where task-side defects are removed before model-side failures are analyzed. The common measurement target is consistency across long engineering trajectories.</p>
</div>

<hr class="tb-section-rule">

<!-- ===== SECTION 12: LOOKING FORWARD ===== -->
<h1 id="tb-future">12. Looking Forward: Adaptive Evaluation</h1>

One hard evaluation problem remains: two correct agents may reach the same behavior through different code structures. Tests need to accept both without becoming too loose. EvoCode-Bench uses behavioral-contract tests, RoadmapBench uses attribution-driven task fixes, and DeepTerminalBench uses Pass@k calibration to filter brittle tasks. These choices reduce false failures, but they still depend on human reviewers anticipating valid implementation paths.

A natural next step is to generate later instructions and tests from the agent's actual intermediate state:

<div class="mt-future-box">
    <h3>Adaptive Evaluation Loop</h3>
    <p>A <strong>Question-Generation Agent</strong> reads the current system state and writes the next round's instruction for that state.</p>
    <p>A <strong>Test-Generation Agent</strong> reads the instruction and the agent's code, then writes verification scripts matched to the current implementation.</p>
    <div class="mt-future-pipeline">
        Question Agent (sees current state) -> generates next instruction<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;-> Coding Agent executes<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> Test Agent (sees instruction + code) -> generates tests -> verifies<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> Question Agent (sees new state) -> generates next instruction<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> ...
    </div>
    <p style="margin-top: 16px;">This would make later evaluation steps depend on the implementation path the agent actually took. The current static datasets, 191 tasks across DeepTerminalBench, EvoCode-Bench, and RoadmapBench, provide the fixed-task baseline for testing whether adaptive evaluation improves attribution.</p>
</div>

<hr class="tb-section-rule">
<!-- ===== SUMMARY ===== -->
<h1 id="tb-summary">13. Summary</h1>

<ul class="tb-summary-list">
    <li><strong>Three terminal settings:</strong> Terminal-X evaluates depth, iteration, and evolution in containerized terminal environments. The tasks use real tools and executable checks rather than surface-level answer matching.</li>
    <li><strong>DeepTerminalBench:</strong> 50 curated tasks are selected from a larger pool using Claude Opus 4.6 Pass@4 calibration. The main leaderboard reports Claude-Opus-4.7 at 34.0 Pass@1, with GPT-5.5-high, DeepSeek-V4-Pro, Kimi-K2.6 and Qwen-3.6-Plus clustered at 32.0.</li>
    <li><strong>EvoCode-Bench:</strong> 26 multi-turn tasks and 227 evaluated rounds test cumulative state, requirement changes, conflicts, and backward compatibility. Claude-Opus-4.7 leads at 54.0 MT@4, GPT-5.5-High follows at 52.4, and Claude-Opus-4.6 reaches 44.0.</li>
    <li><strong>RoadmapBench:</strong> 115 tasks across 17 repositories and 5 programming languages ask agents to implement target-version behavior from an earlier release. Weighted phase scoring shows partial progress even when a task is not fully resolved.</li>
    <li><strong>Shared infrastructure:</strong> All datasets run on Harbor. The multi-turn tasks add persistent environments and round protocols; the version-upgrade tasks add phase-level tests and weighted rewards.</li>
</ul>

<!-- ===== JavaScript ===== -->
<!-- ===== JavaScript ===== -->
<script>
function tbSwitchCase(idx) {
    document.querySelectorAll('.tb-case-tab-btn').forEach((b,i) => b.classList.toggle('active', i===idx));
    document.querySelectorAll('.tb-case-panel').forEach((p,i) => p.classList.toggle('active', i===idx));
    // Reset sub-tabs to first
    const panel = document.getElementById('tb-case-'+idx);
    if(panel) {
        panel.querySelectorAll('.tb-sub-tab-btn').forEach((b,i) => b.classList.toggle('active', i===0));
        panel.querySelectorAll('.tb-sub-panel').forEach((p,i) => p.classList.toggle('active', i===0));
    }
}
function tbSwitchSub(caseIdx, subIdx) {
    const panel = document.getElementById('tb-case-'+caseIdx);
    if(!panel) return;
    panel.querySelectorAll('.tb-sub-tab-btn').forEach((b,i) => b.classList.toggle('active', i===subIdx));
    panel.querySelectorAll('.tb-sub-panel').forEach((p,i) => p.classList.toggle('active', i===subIdx));
}
// TOC scroll tracking
document.addEventListener('scroll', function() {
    const bar = document.getElementById('tb-toc-bar');
    if(bar) {
        const h = document.documentElement;
        const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
        bar.style.width = Math.min(pct, 100) + '%';
    }
});
// Intersection Observer for mt- card animations
(function() {
    var mtObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('mt-animate');
                mtObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.mt-feature-card, .mt-dimension-card, .mt-stat-card, .mt-challenge-card, .mt-score-card').forEach(function(el) {
        mtObserver.observe(el);
    });
})();
// RoadmapBench card animations
(function() {
    var rmObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('rm-animate');
                rmObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.rm-challenge-card, .rm-lang-card, .rm-dimension-card, .rm-stat-card').forEach(function(el) {
        rmObserver.observe(el);
    });
})();
// Unified TOC active-link tracking
(function() {
    var tocLinks = document.querySelectorAll('.tb-toc-link');
    var sections = [];
    tocLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            var el = document.getElementById(href.slice(1));
            if (el) sections.push({ el: el, link: link });
        }
    });
    function updateActive() {
        var scrollPos = window.scrollY + 120;
        var current = null;
        for (var i = sections.length - 1; i >= 0; i--) {
            if (sections[i].el.offsetTop <= scrollPos) { current = sections[i]; break; }
        }
        tocLinks.forEach(function(l) { l.classList.remove('active'); });
        if (current) current.link.classList.add('active');
    }
    var ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() { updateActive(); ticking = false; });
            ticking = true;
        }
    }, { passive: true });
    updateActive();
})();
</script>
