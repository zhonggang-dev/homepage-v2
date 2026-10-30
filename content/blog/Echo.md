Title: Echo: Towards General AI Prediction
Date: 2026-03-27
Summary: We present Echo, a full-stack prediction intelligence system centred on EchoZ-1.0, the first large language model trained end-to-end under the Train-on-Future paradigm — spanning a dynamic evaluation engine, a post-training pipeline, and an AI-native prediction API.
HeaderImage: /static/images/prediction/echologo.png


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" media="print" onload="this.media='all'">

<style>

/* ============================================
   Echo / Prediction Blog Styles - Scoped with ec- prefix
   ============================================ */

:root {
    /* Typography */
    --ec-font-display: 'Crimson Pro', 'Georgia', serif;
    --ec-font-body: 'DM Sans', 'Segoe UI', sans-serif;
    --ec-font-mono: 'JetBrains Mono', ui-monospace, monospace;
    /* Colors */
    --ec-accent: #A63D38;
    --ec-accent-light: #D4918C;
    --ec-accent-dark: #8B3A36;
    --ec-ink: #0c1222;
    --ec-ink-soft: #334155;
    --ec-ink-muted: #64748b;
    --ec-surface: #ffffff;
    --ec-surface-raised: #f8fafc;
    --ec-surface-sunken: #f1f5f9;
    --ec-border: #e2e8f0;
    /* Radius */
    --ec-radius-sm: 8px;
    --ec-radius-md: 14px;
    --ec-radius-lg: 20px;
    /* Shadows */
    --ec-shadow-sm: 0 1px 3px rgba(15,23,42,0.04), 0 1px 2px rgba(15,23,42,0.06);
    --ec-shadow-md: 0 4px 16px rgba(15,23,42,0.06), 0 2px 4px rgba(15,23,42,0.04);
    --ec-shadow-lg: 0 12px 40px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04);
}

/* ---- Animation System ---- */
@keyframes ec-fadeInUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
@keyframes ec-fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes ec-scaleIn { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }
@keyframes ec-shimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
@keyframes ec-pulse-soft { 0%,100% { opacity:0.4; } 50% { opacity:0.7; } }

/* ---- Let markdown body inherit the global serif font (Iowan Old Style) ---- */
.markdown h1, .markdown h2, .markdown h3, .markdown h4 {
    font-family: var(--ec-font-display, 'Crimson Pro', 'Georgia', serif) !important;
}
.markdown code, .markdown pre code {
    font-family: var(--ec-font-mono, 'JetBrains Mono', ui-monospace, monospace) !important;
}

.ec-animate { animation: ec-fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
.ec-animate-delay-1 { animation-delay: 0.1s; }
.ec-animate-delay-2 { animation-delay: 0.2s; }
.ec-animate-delay-3 { animation-delay: 0.3s; }
.ec-animate-delay-4 { animation-delay: 0.4s; }
.ec-animate-fade { animation: ec-fadeIn 0.6s ease both; }
.ec-animate-scale { animation: ec-scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) both; }

/* ---- Section Divider (gradient rule) ---- */
.ec-section-rule,
hr {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--ec-accent-light) 20%, var(--ec-accent) 50%, var(--ec-accent-light) 80%, transparent);
    margin: 48px 0;
    opacity: 0.5;
}

.ec-hero {
    text-align: center;
    padding: 10px 0 30px;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
}

.ec-hero::before {
    content: '';
    position: absolute;
    top: -60%;
    left: 50%;
    transform: translateX(-50%);
    width: 140%;
    height: 200%;
    background: transparent;
    pointer-events: none;
    z-index: 0;
}

.ec-hero::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    right: 10%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--ec-accent-light) 20%, var(--ec-accent) 50%, var(--ec-accent-light) 80%, transparent);
    opacity: 0.5;
}

.ec-hero > * { position: relative; z-index: 1; }

.ec-hero h1 {
    font-size: 2.2em;
    margin-bottom: 12px;
    color: var(--ec-ink, #0c1222);
    font-family: var(--ec-font-display);
}

.ec-hero .ec-subtitle {
    font-size: 0.95em;
    color: var(--ec-ink-muted, #64748b);
    letter-spacing: 0.04em;
    margin-top: 8px;
    font-family: var(--ec-font-body);
}

/* Remove old root block — tokens are now at top */

/* Abstract callout */
.ec-abstract {
    background: var(--ec-surface-raised, #f8fafc);
    border-left: none;
    border-radius: var(--ec-radius-sm);
    padding: 16px 24px;
    margin: 16px 0;
    font-family: var(--ec-font-display);
    color: var(--ec-ink, #0c1222);
    line-height: 1.7;
    font-size: 0.95em;
    box-shadow: var(--ec-shadow-sm);
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
    position: relative;
    overflow: hidden;
}

.ec-abstract::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, var(--ec-accent), var(--ec-accent-light));
    border-radius: var(--ec-radius-sm) 0 0 var(--ec-radius-sm);
}

.ec-abstract:hover {
    box-shadow: var(--ec-shadow-md);
    transform: translateY(-1px);
}

/* Stat cards row */
.ec-stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin: 24px 0;
}

.ec-stat-card {
    background: var(--ec-surface-raised, #f8fafc);
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-sm);
    padding: 16px;
    font-family: var(--ec-font-display);
    box-shadow: var(--ec-shadow-sm);
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
    position: relative;
    overflow: hidden;
}

.ec-stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--ec-accent), var(--ec-accent-light));
}

.ec-stat-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--ec-shadow-md);
}

.ec-stat-card .ec-label {
    font-size: 0.78em;
    color: var(--ec-accent, #A63D38);
    font-weight: bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 8px;
    font-family: var(--ec-font-body);
}

.ec-stat-card .ec-desc {
    font-size: 0.88em;
    color: var(--ec-ink-muted, #64748b);
    margin-bottom: 6px;
    font-family: var(--ec-font-body);
}

.ec-stat-card .ec-value {
    font-size: 0.95em;
    font-weight: bold;
    background: linear-gradient(135deg, var(--ec-accent-dark), var(--ec-accent), var(--ec-accent-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Two-column grid */
.ec-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 20px 0;
}

/* Info box / card */
.ec-box {
    background: var(--ec-surface-raised, #f8fafc);
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-sm);
    padding: 18px 20px;
    font-family: var(--ec-font-display);
    box-shadow: var(--ec-shadow-sm);
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
}

.ec-box:hover {
    transform: translateY(-2px);
    box-shadow: var(--ec-shadow-md);
}

.ec-box .ec-box-title {
    font-size: 0.8em;
    color: var(--ec-accent, #A63D38);
    font-weight: bold;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.ec-box .ec-box-body {
    font-size: 0.9em;
    color: var(--ec-ink, #0c1222);
    line-height: 1.6;
    font-family: var(--ec-font-body);
}

/* Track cards */
.ec-track {
    background: var(--ec-surface-raised, #f8fafc);
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-sm);
    padding: 16px 20px;
    margin-bottom: 12px;
    font-family: var(--ec-font-display);
    box-shadow: var(--ec-shadow-sm);
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
}

.ec-track:hover {
    transform: translateY(-2px);
    box-shadow: var(--ec-shadow-md);
}

.ec-track .ec-track-title {
    font-size: 0.8em;
    color: var(--ec-ink-muted, #64748b);
    font-weight: bold;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin-bottom: 6px;
    font-family: var(--ec-font-body);
}

.ec-track .ec-track-body {
    font-size: 0.9em;
    color: var(--ec-ink, #0c1222);
    line-height: 1.6;
    font-family: var(--ec-font-body);
}

/* Mechanism cards */
.ec-mechanism {
    background: var(--ec-surface-raised, #f8fafc);
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-sm);
    padding: 16px 20px;
    margin-bottom: 12px;
    font-family: var(--ec-font-display);
    box-shadow: var(--ec-shadow-sm);
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
    position: relative;
    overflow: hidden;
}

.ec-mechanism::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, var(--ec-accent), var(--ec-accent-light));
    border-radius: var(--ec-radius-sm) 0 0 var(--ec-radius-sm);
}

.ec-mechanism:hover {
    transform: translateY(-2px);
    box-shadow: var(--ec-shadow-md);
}

.ec-mechanism .ec-mech-title {
    font-size: 0.85em;
    color: var(--ec-ink, #0c1222);
    font-weight: bold;
    letter-spacing: 0.04em;
    margin-bottom: 8px;
    font-family: var(--ec-font-body);
}

.ec-mechanism .ec-mech-body {
    font-size: 0.9em;
    color: var(--ec-ink, #0c1222);
    line-height: 1.6;
    font-family: var(--ec-font-body);
}

/* Result callout */
.ec-result {
    background: var(--ec-surface-raised, #f8fafc);
    border-radius: var(--ec-radius-sm);
    padding: 14px 20px;
    margin: 16px 0;
    font-family: var(--ec-font-display);
    color: var(--ec-ink, #0c1222);
    line-height: 1.6;
    font-size: 0.92em;
    box-shadow: var(--ec-shadow-sm);
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
    position: relative;
    overflow: hidden;
}

.ec-result::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, var(--ec-accent), var(--ec-accent-light));
    border-radius: var(--ec-radius-sm) 0 0 var(--ec-radius-sm);
}

.ec-result:hover {
    transform: translateY(-1px);
    box-shadow: var(--ec-shadow-md);
}

/* Simulation / data box */
.ec-sim-box {
    background: var(--ec-surface-raised, #f8fafc);
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-sm);
    padding: 16px 20px;
    margin: 16px 0;
    font-family: var(--ec-font-display);
    color: var(--ec-ink, #0c1222);
    font-size: 0.92em;
    box-shadow: var(--ec-shadow-sm);
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
}

.ec-sim-box:hover {
    box-shadow: var(--ec-shadow-md);
}

/* Case study card */
.ec-case {
    background: var(--ec-surface-raised, #f8fafc);
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-md);
    padding: 20px 24px;
    margin: 24px 0;
    font-family: var(--ec-font-display);
    box-shadow: var(--ec-shadow-md);
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
}

.ec-case:hover {
    box-shadow: var(--ec-shadow-lg);
    transform: translateY(-2px);
}

.ec-case-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--ec-border, #e2e8f0);
    padding-bottom: 12px;
}

.ec-badge {
    color: #FAF9F7;
    font-size: 0.72em;
    font-weight: bold;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 4px;
    white-space: nowrap;
    font-family: var(--ec-font-body);
}

.ec-badge-finance { background: var(--ec-accent, #A63D38); }
.ec-badge-politics { background: #8B3A36; }
.ec-badge-crypto { background: #B5605B; }
.ec-badge-sports { background: #C4807B; }
.ec-badge-esports { background: #D4A09C; }

.ec-case-date {
    color: var(--ec-ink-muted, #64748b);
    font-size: 0.85em;
    font-family: var(--ec-font-body);
}

.ec-case-body {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 20px;
    margin: 16px 0;
}

.ec-confidence-box {
    background: var(--ec-surface, #ffffff);
    border-radius: var(--ec-radius-sm);
    padding: 14px 16px;
    font-size: 0.88em;
    color: var(--ec-ink, #0c1222);
    line-height: 1.6;
    border: 1px solid var(--ec-border, #e2e8f0);
    font-family: var(--ec-font-body);
}

.ec-answer-highlight {
    color: var(--ec-accent, #A63D38);
    font-weight: bold;
}

.ec-conf-tag {
    background: var(--ec-border, #e2e8f0);
    font-size: 0.8em;
    padding: 2px 8px;
    border-radius: 4px;
    font-family: var(--ec-font-mono);
}

.ec-case-question {
    font-size: 0.95em;
    color: var(--ec-ink, #0c1222);
    margin-bottom: 8px;
    line-height: 1.5;
    font-family: var(--ec-font-body);
}

.ec-case-options {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 12px;
    align-items: center;
}

.ec-case-option-tag {
    font-size: 0.8em;
    color: var(--ec-ink-muted, #64748b);
    font-family: var(--ec-font-mono);
    background: var(--ec-surface, #ffffff);
    padding: 3px 9px;
    border-radius: 3px;
    border: 1px solid var(--ec-border, #e2e8f0);
    white-space: nowrap;
}

.ec-case-section-title {
    font-size: 0.9em;
    font-weight: bold;
    color: var(--ec-ink, #0c1222);
    margin: 16px 0 8px;
    font-family: var(--ec-font-display);
}

.ec-case-counterfactual {
    font-size: 0.9em;
    color: var(--ec-ink, #0c1222);
    margin: 12px 0;
    line-height: 1.6;
    font-family: var(--ec-font-body);
}

.ec-case-monitoring {
    font-size: 0.88em;
    color: var(--ec-ink-muted, #64748b);
    line-height: 1.6;
    font-family: var(--ec-font-body);
}

/* Domain Case Studies Tabs */
.ec-tab-btn {
    padding: 8px 18px;
    border: 1.5px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-sm) var(--ec-radius-sm) 0 0;
    background: var(--ec-surface-raised, #f8fafc);
    color: var(--ec-ink-muted, #64748b);
    font-size: 0.82em;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
    font-family: var(--ec-font-body);
    border-bottom: 2px solid transparent;
    position: relative;
}
.ec-tab-btn:hover {
    color: var(--ec-accent, #A63D38);
    border-bottom-color: var(--ec-accent-light, #D4918C);
    background: var(--ec-surface, #ffffff);
}
.ec-tab-btn.active {
    background: var(--ec-surface, #ffffff);
    color: var(--ec-accent, #A63D38);
    font-weight: 700;
    border-bottom: 2px solid transparent;
}
.ec-tab-btn.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--ec-accent), var(--ec-accent-light));
    border-radius: 2px 2px 0 0;
}
.ec-tab-btn .ec-tab-dot {
    display: inline-block;
    width: 8px; height: 8px;
    border-radius: 50%;
    margin-right: 6px;
    vertical-align: middle;
}
.ec-tab-panels {
    border: none;
    border-radius: 0 0 6px 6px;
    margin-bottom: 24px;
    width: 100%;
    box-sizing: border-box;
}
.ec-tab-panel {
    display: none;
    width: 100%;
    box-sizing: border-box;
}
.ec-tab-panel.active {
    display: block;
    animation: ec-fadeIn 0.4s ease both;
}
.ec-tab-panel > .ec-case {
    margin: 0;
    border: none;
    border-radius: 0 0 6px 6px;
    width: 100%;
    box-sizing: border-box;
}

.ec-tabs-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 24px 0 0;
    width: 100%;
    box-sizing: border-box;
}

@media (max-width: 600px) {
    .ec-tabs-bar { gap: 4px; }
    .ec-tab-btn { padding: 6px 10px; font-size: 0.72em; }
}

/* Tables inside styled containers */
.ec-table-wrapper {
    border-radius: var(--ec-radius-sm);
    overflow: hidden;
    box-shadow: var(--ec-shadow-sm);
    margin: 8px 0;
}

.ec-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88em;
    margin: 0;
    font-family: var(--ec-font-body);
}

.ec-table th,
.ec-table td {
    padding: 10px 14px;
    text-align: left;
    border-bottom: 1px solid var(--ec-border, #e2e8f0);
}

.ec-table th {
    background: linear-gradient(135deg, var(--ec-accent-dark, #8B3A36), var(--ec-accent, #A63D38));
    font-weight: 600;
    font-size: 0.92em;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.ec-table td {
    color: var(--ec-ink, #0c1222);
}

.ec-table tr:last-child td {
    border-bottom: none;
}

.ec-table tbody tr {
    transition: background 0.2s ease;
}

.ec-table tbody tr:hover {
    background: var(--ec-surface-raised, #f8fafc);
}

.ec-table td:last-child,
.ec-table th:last-child {
    text-align: center;
}

.ec-table-evidence th:last-child,
.ec-table-evidence td:last-child {
    text-align: left;
}

/* Big number horizon cards */
.ec-horizon-stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin: 20px 0;
}

.ec-horizon-card {
    background: var(--ec-surface-raised, #f8fafc);
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-sm);
    padding: 16px;
    text-align: center;
    font-family: var(--ec-font-display);
    box-shadow: var(--ec-shadow-sm);
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
}

.ec-horizon-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--ec-shadow-md);
}

.ec-horizon-card .ec-horizon-label {
    font-size: 0.78em;
    color: var(--ec-ink-muted, #64748b);
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin-bottom: 8px;
    font-family: var(--ec-font-body);
}

.ec-horizon-card .ec-horizon-num {
    font-size: 2em;
    font-weight: bold;
}

.ec-horizon-card .ec-horizon-desc {
    font-size: 0.82em;
    color: var(--ec-ink-muted, #64748b);
    margin-top: 6px;
    font-family: var(--ec-font-body);
}

.ec-horizon-accent {
    position: relative;
    overflow: hidden;
}

.ec-horizon-accent::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--ec-accent), var(--ec-accent-light));
}

.ec-horizon-accent .ec-horizon-num {
    background: linear-gradient(135deg, var(--ec-accent-dark), var(--ec-accent), var(--ec-accent-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.ec-horizon-neutral {
    border-top: 3px solid #D4A09C;
}

.ec-horizon-neutral .ec-horizon-num {
    color: var(--ec-ink-muted, #64748b);
}

/* Quality grid */
.ec-quality-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 20px 0;
}

.ec-quality-card {
    background: var(--ec-surface-raised, #f8fafc);
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-sm);
    padding: 16px 18px;
    font-family: var(--ec-font-display);
    box-shadow: var(--ec-shadow-sm);
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
}

.ec-quality-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--ec-shadow-md);
}

.ec-quality-card .ec-q-title {
    font-size: 0.8em;
    color: var(--ec-accent, #A63D38);
    font-weight: bold;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.ec-quality-card .ec-q-body {
    font-size: 0.9em;
    color: var(--ec-ink, #0c1222);
    line-height: 1.6;
    font-family: var(--ec-font-body);
}

/* Citation block */
.ec-cite-block {
    margin: 48px 0 0;
    padding: 28px 32px 32px;
    background: var(--ec-surface-raised, #f8fafc);
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-md);
    position: relative;
    font-family: var(--ec-font-display);
    box-shadow: var(--ec-shadow-md);
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
}

.ec-cite-block:hover {
    box-shadow: var(--ec-shadow-lg);
}
.ec-cite-block h3 {
    font-size: 1.2em;
    font-weight: 600;
    color: var(--ec-ink, #0c1222);
    margin: 0 0 8px;
    font-family: var(--ec-font-display);
}
.ec-cite-block p {
    font-size: 0.92em;
    color: var(--ec-ink-muted, #64748b);
    margin: 0 0 16px;
    font-family: var(--ec-font-body);
}
.ec-cite-bib-wrap {
    position: relative;
    background: var(--ec-surface, #ffffff);
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-sm);
    overflow: hidden;
}
.ec-cite-bib-wrap pre {
    margin: 0;
    padding: 20px 24px;
    padding-right: 80px;
    font-family: var(--ec-font-mono);
    font-size: 0.82em;
    line-height: 1.7;
    color: var(--ec-ink, #0c1222);
    background: transparent;
    white-space: pre-wrap;
    word-break: break-all;
    overflow-x: auto;
}
.ec-cite-copy-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 6px 14px;
    font-size: 0.78em;
    font-weight: 600;
    color: var(--ec-accent, #A63D38);
    background: var(--ec-surface-raised, #f8fafc);
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-sm);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
    font-family: var(--ec-font-body);
}
.ec-cite-copy-btn:hover {
    background: linear-gradient(135deg, var(--ec-accent), var(--ec-accent-dark));
    color: #fff;
    border-color: var(--ec-accent);
    transform: translateY(-1px);
    box-shadow: var(--ec-shadow-sm);
}
.ec-cite-copy-btn.copied {
    background: linear-gradient(135deg, var(--ec-accent), var(--ec-accent-dark));
    color: #fff;
    border-color: var(--ec-accent);
}

/* Responsive */
@media (max-width: 768px) {
    .ec-stats,
    .ec-horizon-stats {
        grid-template-columns: 1fr;
    }
    .ec-two-col,
    .ec-quality-grid {
        grid-template-columns: 1fr;
    }
    .ec-case-body {
        grid-template-columns: 1fr;
    }
}

/* Hero links */
.ec-hero-links {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.ec-hero-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-sm);
    font-size: 14px;
    font-weight: 600;
    font-family: var(--ec-font-body);
    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
    text-decoration: none !important;
    box-shadow: var(--ec-shadow-sm);
}

.ec-hero-link:hover {
    background: var(--ec-surface-raised, #f8fafc);
    border-color: var(--ec-accent, #A63D38);
    text-decoration: none !important;
    transform: translateY(-2px);
    box-shadow: var(--ec-shadow-md);
}

.ec-hero-link svg {
    width: 18px;
    height: 18px;
}

/* Floating Table of Contents */
.ec-toc {
    position: fixed;
    right: 5px;
    top: 120px;
    width: 200px;
    max-width: 200px;
    min-width: 160px;
    max-height: calc(100vh - 160px);
    overflow-y: auto;
    padding: 16px;
    background: var(--ec-surface, #ffffff);
    border: 1px solid var(--ec-border, #e2e8f0);
    border-radius: var(--ec-radius-md);
    box-shadow: var(--ec-shadow-lg);
    z-index: 100;
    font-size: 10px;
    transition: all 0.3s ease;
    font-family: var(--ec-font-body);
}

.ec-toc::-webkit-scrollbar { width: 4px; }
.ec-toc::-webkit-scrollbar-track { background: transparent; }
.ec-toc::-webkit-scrollbar-thumb { background: var(--ec-border, #e2e8f0); border-radius: 2px; }

.ec-toc-title {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--ec-ink-muted, #64748b);
    margin-bottom: 12px;
    font-weight: 600;
    font-family: var(--ec-font-body);
}

.ec-toc-list { list-style: none; padding: 0; margin: 0; }
.ec-toc-item { margin-bottom: 4px; }

.ec-toc-link {
    display: block;
    padding: 6px 10px;
    color: var(--ec-ink-muted, #64748b);
    text-decoration: none !important;
    border-radius: 6px;
    transition: all 0.2s ease;
    border-left: 2px solid transparent;
    line-height: 1.4;
    font-size: 12px;
}

.ec-toc-link:hover {
    background: var(--ec-surface-sunken, #f1f5f9);
    color: var(--ec-ink, #0c1222);
}

.ec-toc-link.active {
    background: var(--ec-surface-sunken, #f1f5f9);
    color: var(--ec-accent, #A63D38);
    border-left-color: var(--ec-accent, #A63D38);
    font-weight: 500;
}

.ec-toc-progress {
    height: 3px;
    background: var(--ec-border, #e2e8f0);
    border-radius: 2px;
    margin-bottom: 12px;
    overflow: hidden;
}

.ec-toc-progress-bar {
    height: 100%;
    background: var(--ec-accent, #A63D38);
    width: 0%;
    transition: width 0.1s ease;
    border-radius: 2px;
}

/* Collapsible */
.ec-toc.collapsed {
    width: 40px;
    padding: 12px;
    overflow: hidden;
}

.ec-toc.collapsed .ec-toc-title,
.ec-toc.collapsed .ec-toc-progress,
.ec-toc.collapsed .ec-toc-list {
    display: none;
}

.ec-toc-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: var(--ec-surface-sunken, #f1f5f9);
    border: 1px solid var(--ec-border, #e2e8f0);
    cursor: pointer;
    margin-bottom: 12px;
    transition: all 0.2s ease;
}

.ec-toc-toggle:hover { background: var(--ec-border, #e2e8f0); }
.ec-toc-toggle svg { width: 16px; height: 16px; color: var(--ec-ink-muted, #64748b); transition: transform 0.3s ease; }
.ec-toc.collapsed .ec-toc-toggle { margin-bottom: 0; }
.ec-toc.collapsed .ec-toc-toggle svg { transform: rotate(180deg); }

/* --- Scroll-Reveal Elements --- */
.ec-reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.ec-reveal.ec-visible {
    opacity: 1;
    transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
    .ec-reveal {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
    }
    .ec-animate,
    .ec-animate-fade,
    .ec-animate-scale,
    .ec-tab-panel.active {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
    }
    .ec-stat-card,
    .ec-box,
    .ec-track,
    .ec-mechanism,
    .ec-result,
    .ec-sim-box,
    .ec-case,
    .ec-horizon-card,
    .ec-quality-card,
    .ec-cite-block,
    .ec-abstract,
    .ec-hero-link,
    .ec-cite-copy-btn {
        transition: none !important;
        transform: none !important;
    }
}

/* Leaderboard mobile scroll wrapper */
.ec-leaderboard-wrap {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin: 0 -16px;
    padding: 0 16px;
}

.ec-leaderboard-wrap > div {
    min-width: 600px;
}

@media (max-width: 640px) {
    .ec-leaderboard-wrap {
        margin: 0 -8px;
        padding: 0 8px;
    }
}

</style>

<!-- Scroll-Reveal Observer -->
<script>
(function() {
    if (typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
            if (e.isIntersecting) {
                e.target.classList.add('ec-visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    function observeAll() {
        document.querySelectorAll('.ec-abstract, .ec-stat-card, .ec-box, .ec-track, .ec-mechanism, .ec-result, .ec-sim-box, .ec-case, .ec-horizon-card, .ec-cite-block, .ec-horizon-stats').forEach(function(el) {
            if (!el.classList.contains('ec-reveal')) {
                el.classList.add('ec-reveal');
            }
            obs.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observeAll);
    } else {
        observeAll();
    }
})();
</script>


<div class="ec-hero">
<!-- <h1>Echo: An AI-Native Prediction Intelligence System</h1> -->
<!-- <div class="ec-subtitle">Echo Research &nbsp;&middot;&nbsp; March 2026</div> -->
<div class="ec-hero-links">
    <a href="https://echo.unipat.ai/" class="ec-hero-link">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/></svg>
        Leaderboard
    </a>
</div>

<div style="margin: 24px 0 32px 0; padding: 16px 0; border-top: 1px solid var(--ec-border, #e2e8f0); border-bottom: 1px solid var(--ec-border, #e2e8f0);">
    <p style="margin: 8px 0; font-size: 14px;"><strong>Contributors:</strong> Zhengwei Tao<sup>1,2,*</sup>, Rui Min<sup>1,*</sup>, Hongfeng He<sup>1,*</sup>, Jialong Wu<sup>1,2</sup>, Baixuan Li<sup>1</sup>, Liang Chen<sup>1</sup>, Wentao Zhang<sup>2</sup>, Kuan Li<sup>1</sup></p>
    <p style="margin: 8px 0; font-size: 14px;"><strong>Affiliations:</strong> <sup>1</sup>UniPat AI&nbsp;&nbsp;<sup>2</sup>Peking University</p>
    <p style="margin: 8px 0; font-size: 14px;"><sup>*</sup>Equal Contribution</p>
    <p style="margin: 8px 0; font-size: 14px;"><strong>Correspondence:</strong> <a href="mailto:zhengweitao@unipat.ai">zhengweitao@unipat.ai</a>, <a href="mailto:kuanli@unipat.ai">kuanli@unipat.ai</a></p>
</div>

</div>

<div class="ec-leaderboard-wrap">
<div style="font-family:var(--ec-font-display);background:#1E1E20;padding:32px 36px 20px;border-radius:16px;max-width:900px;margin:0 auto 32px">

<p style="text-align:center;margin:0 0 4px;font-size:26px;font-weight:bold;color:#FAF9F7;letter-spacing:.3px">General AI Prediction Leaderboard</p>
<p style="text-align:center;margin:0 0 24px;font-size:15px;color:#9A9A9A">March 2026 &nbsp;·&nbsp; Elo Score</p>

<!-- Market average label aligned over the reference line -->
<div style="display:flex;align-items:flex-end;height:16px;margin-bottom:8px">
  <div style="width:38px"></div><div style="width:28px"></div><div style="width:200px"></div>
  <div style="flex:1;position:relative;height:16px">
    <span style="position:absolute;left:66.1%;transform:translateX(-50%);font-size:15px;color:#FFFFFF;font-weight:700;white-space:nowrap;letter-spacing:.2px">Market Avg</span>
  </div>
  <div style="width:56px"></div>
</div>

<!-- #1 EchoZ-1.0 -->
<div style="display:flex;align-items:center;margin-bottom:9px">
  <div style="width:38px;text-align:center;font-size:17px;font-weight:bold;color:#A63D38">#1</div>
  <div style="width:28px;text-align:center"><img src="/static/images/prediction/echoz.png" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;border-radius:50%;padding:2px"></div>
  <div style="width:200px;padding-left:10px;font-size:16px;font-weight:bold;color:#FAF9F7;white-space:nowrap">EchoZ-1.0</div>
  <div style="flex:1;height:27px;position:relative">
    <div style="position:absolute;inset:0;border-radius:5px;background:#3A3A3C;overflow:hidden"><div style="width:92.8%;height:100%;background:#A63D38"></div></div>
    <div style="position:absolute;left:66.1%;top:-2px;bottom:-2px;width:1.5px;background:#D4918C;opacity:.55;z-index:3"></div>
  </div>
  <div style="width:70px;text-align:right;font-size:16px;font-weight:bold;color:#A63D38;padding-left:8px">1034.2</div>
</div>

<!-- #2 Gemini-3.1-Pro -->
<div style="display:flex;align-items:center;margin-bottom:9px">
  <div style="width:38px;text-align:center;font-size:17px;color:#7A7A7C">#2</div>
  <div style="width:28px;text-align:center"><img src="/static/images/prediction/gemini.png" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;border-radius:50%;padding:2px"></div>
  <div style="width:200px;padding-left:10px;font-size:16px;color:#FAF9F7;white-space:nowrap">Gemini-3.1-Pro</div>
  <div style="flex:1;height:27px;position:relative">
    <div style="position:absolute;inset:0;border-radius:5px;background:#3A3A3C;overflow:hidden"><div style="width:90.2%;height:100%;background:#B5605B"></div></div>
    <div style="position:absolute;left:66.1%;top:-2px;bottom:-2px;width:1.5px;background:#D4918C;opacity:.55;z-index:3"></div>
  </div>
  <div style="width:70px;text-align:right;font-size:16px;color:#D4D4D4;padding-left:8px">1032.2</div>
</div>

<!-- #3 Claude-Opus-4.6 -->
<div style="display:flex;align-items:center;margin-bottom:9px">
  <div style="width:38px;text-align:center;font-size:17px;color:#7A7A7C">#3</div>
  <div style="width:28px;text-align:center"><img src="/static/images/prediction/claude.png" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;border-radius:50%;padding:2px"></div>
  <div style="width:200px;padding-left:10px;font-size:16px;color:#FAF9F7;white-space:nowrap">Claude-Opus-4.6</div>
  <div style="flex:1;height:27px;position:relative">
    <div style="position:absolute;inset:0;border-radius:5px;background:#3A3A3C;overflow:hidden"><div style="width:71.5%;height:100%;background:#C4807B"></div></div>
    <div style="position:absolute;left:66.1%;top:-2px;bottom:-2px;width:1.5px;background:#D4918C;opacity:.55;z-index:3"></div>
  </div>
  <div style="width:70px;text-align:right;font-size:16px;color:#D4D4D4;padding-left:8px">1017.2</div>
</div>

<!-- #4 Grok-4.1-Fast -->
<div style="display:flex;align-items:center;margin-bottom:9px">
  <div style="width:38px;text-align:center;font-size:17px;color:#7A7A7C">#4</div>
  <div style="width:28px;text-align:center"><img src="/static/images/prediction/grok.png" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;border-radius:50%;padding:2px"></div>
  <div style="width:200px;padding-left:10px;font-size:16px;color:#FAF9F7;white-space:nowrap">Grok-4.1-Fast</div>
  <div style="flex:1;height:27px;position:relative">
    <div style="position:absolute;inset:0;border-radius:5px;background:#3A3A3C;overflow:hidden"><div style="width:64.1%;height:100%;background:#C4807B"></div></div>
    <div style="position:absolute;left:66.1%;top:-2px;bottom:-2px;width:1.5px;background:#D4918C;opacity:.55;z-index:3"></div>
  </div>
  <div style="width:70px;text-align:right;font-size:16px;color:#D4D4D4;padding-left:8px">1011.3</div>
</div>

<!-- #5 Seed-2.0-Pro -->
<div style="display:flex;align-items:center;margin-bottom:9px">
  <div style="width:38px;text-align:center;font-size:17px;color:#7A7A7C">#5</div>
  <div style="width:28px;text-align:center"><img src="/static/images/prediction/seed.png" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;border-radius:50%;padding:2px"></div>
  <div style="width:200px;padding-left:10px;font-size:16px;color:#FAF9F7;white-space:nowrap">Seed-2.0-Pro</div>
  <div style="flex:1;height:27px;position:relative">
    <div style="position:absolute;inset:0;border-radius:5px;background:#3A3A3C;overflow:hidden"><div style="width:61.1%;height:100%;background:#CC8888"></div></div>
    <div style="position:absolute;left:66.1%;top:-2px;bottom:-2px;width:1.5px;background:#D4918C;opacity:.55;z-index:3"></div>
  </div>
  <div style="width:70px;text-align:right;font-size:16px;color:#D4D4D4;padding-left:8px">1008.9</div>
</div>

<!-- #6 GPT-5.2 -->
<div style="display:flex;align-items:center;margin-bottom:9px">
  <div style="width:38px;text-align:center;font-size:17px;color:#7A7A7C">#6</div>
  <div style="width:28px;text-align:center"><img src="/static/images/prediction/openai.png" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;border-radius:50%;padding:2px"></div>
  <div style="width:200px;padding-left:10px;font-size:16px;color:#FAF9F7;white-space:nowrap">GPT-5.2</div>
  <div style="flex:1;height:27px;position:relative">
    <div style="position:absolute;inset:0;border-radius:5px;background:#3A3A3C;overflow:hidden"><div style="width:56.5%;height:100%;background:#D4A09C"></div></div>
    <div style="position:absolute;left:66.1%;top:-2px;bottom:-2px;width:1.5px;background:#D4918C;opacity:.55;z-index:3"></div>
  </div>
  <div style="width:70px;text-align:right;font-size:16px;color:#D4D4D4;padding-left:8px">1005.2</div>
</div>

<!-- #7 GLM-5 -->
<div style="display:flex;align-items:center;margin-bottom:9px">
  <div style="width:38px;text-align:center;font-size:17px;color:#7A7A7C">#7</div>
  <div style="width:28px;text-align:center"><img src="/static/images/prediction/glm.png" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;border-radius:50%;padding:2px"></div>
  <div style="width:200px;padding-left:10px;font-size:16px;color:#FAF9F7;white-space:nowrap">GLM-5</div>
  <div style="flex:1;height:27px;position:relative">
    <div style="position:absolute;inset:0;border-radius:5px;background:#3A3A3C;overflow:hidden"><div style="width:52.2%;height:100%;background:#D4A09C"></div></div>
    <div style="position:absolute;left:66.1%;top:-2px;bottom:-2px;width:1.5px;background:#D4918C;opacity:.55;z-index:3"></div>
  </div>
  <div style="width:70px;text-align:right;font-size:16px;color:#D4D4D4;padding-left:8px">1001.8</div>
</div>

<!-- #8 Minimax-M2.5 -->
<div style="display:flex;align-items:center;margin-bottom:9px">
  <div style="width:38px;text-align:center;font-size:17px;color:#7A7A7C">#8</div>
  <div style="width:28px;text-align:center"><img src="/static/images/prediction/minimax.png" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;border-radius:50%;padding:2px"></div>
  <div style="width:200px;padding-left:10px;font-size:16px;color:#FAF9F7;white-space:nowrap">Minimax-M2.5</div>
  <div style="flex:1;height:27px;position:relative">
    <div style="position:absolute;inset:0;border-radius:5px;background:#3A3A3C;overflow:hidden"><div style="width:40.0%;height:100%;background:#DDBBB8"></div></div>
    <div style="position:absolute;left:66.1%;top:-2px;bottom:-2px;width:1.5px;background:#D4918C;opacity:.55;z-index:3"></div>
  </div>
  <div style="width:70px;text-align:right;font-size:16px;color:#D4D4D4;padding-left:8px">992.0</div>
</div>

<!-- #9 Qwen3-Max -->
<div style="display:flex;align-items:center;margin-bottom:9px">
  <div style="width:38px;text-align:center;font-size:17px;color:#7A7A7C">#9</div>
  <div style="width:28px;text-align:center"><img src="/static/images/prediction/qwen.png" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;border-radius:50%;padding:2px"></div>
  <div style="width:200px;padding-left:10px;font-size:16px;color:#FAF9F7;white-space:nowrap">Qwen3-Max</div>
  <div style="flex:1;height:27px;position:relative">
    <div style="position:absolute;inset:0;border-radius:5px;background:#3A3A3C;overflow:hidden"><div style="width:39.2%;height:100%;background:#DDBBB8"></div></div>
    <div style="position:absolute;left:66.1%;top:-2px;bottom:-2px;width:1.5px;background:#D4918C;opacity:.55;z-index:3"></div>
  </div>
  <div style="width:70px;text-align:right;font-size:16px;color:#D4D4D4;padding-left:8px">991.4</div>
</div>

<!-- #10 Deepseek-V3.2 -->
<div style="display:flex;align-items:center;margin-bottom:9px">
  <div style="width:38px;text-align:center;font-size:17px;color:#7A7A7C">#10</div>
  <div style="width:28px;text-align:center"><img src="/static/images/prediction/deepseek.png" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;border-radius:50%;padding:2px"></div>
  <div style="width:200px;padding-left:10px;font-size:16px;color:#FAF9F7;white-space:nowrap">Deepseek-V3.2</div>
  <div style="flex:1;height:27px;position:relative">
    <div style="position:absolute;inset:0;border-radius:5px;background:#3A3A3C;overflow:hidden"><div style="width:37.1%;height:100%;background:#E5D0CE"></div></div>
    <div style="position:absolute;left:66.1%;top:-2px;bottom:-2px;width:1.5px;background:#D4918C;opacity:.55;z-index:3"></div>
  </div>
  <div style="width:70px;text-align:right;font-size:16px;color:#D4D4D4;padding-left:8px">989.7</div>
</div>

<!-- #11 Kimi-K2.5 -->
<div style="display:flex;align-items:center;margin-bottom:12px">
  <div style="width:38px;text-align:center;font-size:17px;color:#7A7A7C">#11</div>
  <div style="width:28px;text-align:center"><img src="/static/images/prediction/kimi.png" style="width:22px;height:22px;object-fit:contain;vertical-align:middle;border-radius:50%;padding:2px"></div>
  <div style="width:200px;padding-left:10px;font-size:16px;color:#FAF9F7;white-space:nowrap">Kimi-K2.5</div>
  <div style="flex:1;height:27px;position:relative">
    <div style="position:absolute;inset:0;border-radius:5px;background:#3A3A3C;overflow:hidden"><div style="width:20.2%;height:100%;background:#E5D0CE"></div></div>
    <div style="position:absolute;left:66.1%;top:-2px;bottom:-2px;width:1.5px;background:#D4918C;opacity:.55;z-index:3"></div>
  </div>
  <div style="width:70px;text-align:right;font-size:16px;color:#D4D4D4;padding-left:8px">976.1</div>
</div>

<!-- X-axis tick labels -->
<div style="display:flex;align-items:center">
  <div style="width:38px"></div><div style="width:28px"></div><div style="width:200px"></div>
  <div style="flex:1;position:relative;height:14px;font-size:13px;color:#7A7A7C">
    <span style="position:absolute;left:0%;transform:translateX(0)">960</span>
    <span style="position:absolute;left:25%;transform:translateX(-50%)">980</span>
    <span style="position:absolute;left:50%;transform:translateX(-50%)">1000</span>
    <span style="position:absolute;left:75%;transform:translateX(-50%)">1020</span>
    <span style="position:absolute;right:0%;transform:translateX(0)">1040</span>
  </div>
  <div style="width:56px"></div>
</div>

</div>

</div>

<div style="text-align:right;font-size:13px;color:#7A7A7C;margin-top:6px">Snapshot as of March 27, 2026</div>

<hr />



## Introduction

Prediction has never been absent from human history, the question “Why do we predict?” has rarely required an answer. From prehistoric hunters anticipating trajectories and prey behavior, to farmers reading the sky, to traders interpreting markets—today we forecast game outcomes, stock prices, and even presidential elections. At scale, in modern prediction markets, forecasting becomes a recursive echo of millions of minds predicting one another. In doing so, it encodes social meaning, economic value, and spans the full spectrum of human computation from the finite to the boundless.

We present Echo, a full-stack prediction intelligence system built around EchoZ-1.0, the first large language model to be trained end-to-end with the Train-on-Future paradigm. Echo consists of three core components: (i) General AI Prediction Leaderboard, a dynamic evaluation engine that addresses key limitations in existing prediction benchmarks, including limited categories and poorly aligned prediction points across models; (ii) Train-on-Future, a post-training pipeline that teaches models to reason about future events rather than rely on past answers; and (iii) an AI-native prediction API that produces structured, evidence-based probability reports across a wide range of domains.



<div class="ec-stats">
<div class="ec-stat-card">
<div class="ec-label">General AI Prediction Leaderboard</div>
<div class="ec-desc">Time Calibrated + Question Source Balanced</div>
<div class="ec-value">Evergreen Prediction Benchmark</div>
</div>
<div class="ec-stat-card">
<div class="ec-label">EchoZ-1.0</div>
<div class="ec-desc">Train-on-Future + Behaviour-Oriented Rubric</div>
<div class="ec-value">The State-of-the-art Predictor</div>
</div>
<div class="ec-stat-card">
<div class="ec-label">The Prediction API</div>
<div class="ec-desc">Customer + Enterprise-Level Prediction Service</div>
<div class="ec-value">Outperforms Human Market Expert</div>
</div>
</div>

<hr />


<div id="echo-leaderboard"></div>

## General AI Prediction Leaderboard


A **prediction problem** is a question whose correct resolution lies in the future. Formally, each prediction instance $\mathcal{Q}_i$ is associated with a candidate answer set $\mathcal{A}_i$ and a resolvement horizon $D_i$ (in days), where the true outcome remains unknown until some future time. The goal of a forecasting model is to assign, before resolvement, a probability distribution over the possible answers.

Given such a prediction question $\mathcal{Q}_i$, the model produces at prediction time $t < D_i$ a probability vector:

<div>

$$\hat{\mathbf{p}}_i(t) = \bigl(\hat{P}(a_j \mid \mathcal{Q}_i,\, t)\bigr)_{j=1}^{|\mathcal{A}_i|}, \quad \sum_{j} \hat{P}(a_j \mid \mathcal{Q}_i, t) = 1, \quad t < D_i$$

</div>

This distribution represents the model’s belief over all candidate outcomes at time $t$, under the information available before the question resolves. A reliable benchmark should therefore evaluate the quality of $\hat{\mathbf{p}}_i(t)$ across a diverse set of prediction questions, while also providing a principled basis for comparing forecasts made at heterogeneous prediction times. Existing online benchmarks fall short on both requirements, due to two structural deficiencies:

<div class="ec-two-col">
<div class="ec-box">
<div class="ec-box-title">Limitation I &mdash; Timing Asymmetry</div>
<div class="ec-box-body">
Prediction difficulty is inherently uneven across an event’s lifecycle: as resolvement approaches, relevant information accumulates, making later forecasts systematically easier than earlier ones. As a result, predictions made at different time points are not directly comparable. Existing benchmarks often sidestep this comparability issue with scale, aggregating large numbers of temporally misaligned forecasts instead of explicitly correcting for the underlying asymmetry.
</div>
</div>
<div class="ec-box">
<div class="ec-box-title">Limitation II &mdash; Question Source Gap</div>
<div class="ec-box-body">
Existing benchmarks draw almost exclusively from prediction markets and periodically updated data platforms, producing a proposition space that is <em>easy to resolve but structurally narrow</em>. This design systematically <em>overlooks</em> non-standard judgments in specialised domains, emerging topics that lack corresponding market infrastructure, and richer cross-domain forecasting tasks whose outcomes cannot be cleanly expressed in existing platform-native formats.
</div>
</div>
</div>

### Leaderboard Design

To tackle the existing benchmarks' deficiencies, the Leaderboard is built around a three-stage pipeline for fair and scalable prediction evaluation. First, it acquires questions from three complementary sources for broad coverage. Second, it schedules and prioritizes prediction samples over each question’s lifecycle. Finally, evaluation is framed as pairwise battles and a global Elo-style optimization produces the final leaderboard, emphasizing robustness, reliability, expeditiousness, diversity, and flexibility.

<div style="text-align: center; margin: 10px 0;">
  <img src="/static/images/prediction/benchmark_overview.png" alt="benchmarks" style="max-width: 100%; border-radius: 10px;" />
</div>


### Three-Source Data Acquistion and Automated Resolvement
<div class="ec-track">
<div class="ec-track-title">Source 1 &mdash; Prediction Market</div>
<div class="ec-track-body">Prediction markets such as Polymarket offer two valuable properties: consensus anchoring and precise resolvement. The system applies multi-dimensional filtering to select eligible contracts: each contract must define explicit resolvement rules, concern an event that has not yet occurred, and remain outside already decisive odds regimes. Once the corresponding real-world event satisfies the resolvement condition, the system resolves the ground-truth label automatically and with full certainty.</div>
</div>

<div class="ec-track">
<div class="ec-track-title">Source 2 &mdash; Synthesis from Trends </div>
<div class="ec-track-body">Real-time trend signals, including Google Trends, surface emerging topics of interest, while a web-crawling cluster gathers the supporting context around them. On top of this, an agentic question-synthesis engine generates challenging prediction questions about events that have not yet unfolded. Throughout each question’s lifecycle, answer agents periodically search the web, monitor developments, and close the resolvement loop automatically once the event is resolved, without human intervention.</div>
</div>

<div class="ec-track">
<div class="ec-track-title">Source 3 &mdash; Expert Annotation</div>
<div class="ec-track-body">Domain experts across fields such as scientific research, engineering, and medicine curate question sets centered on high-value uncertainties that arise naturally in their <em>day-to-day professional workflows</em>. They not only formulate the questions, but also provide authoritative adjudications at predefined future timestamps based on the final observed facts.</div>
</div>


### Prediction Data Selection: Two-Phase Algorithm

In principle, each prediction problem can be forecast at arbitrary time points before resolution, making exhaustive benchmarking impossible. We therefore introduce an efficient two-phase data selection scheduler designed to achieve **three goals**: **(1)** cover each question’s lifecycle with well-distributed prediction timestamps; **(2)** stabilize the day-to-day prediction workload; and **(3)** ensure a steady flow of resolved questions and maintain a live, continuously updated benchmark.


**Phase 1 — Total Prediction Count Estimation**

Unlike static benchmark questions, prediction questions evolve over time: the same question answered at different timestamps can carry different information and have different evaluation value. More concretely, later predictions are usually informed by more evidence and therefore tend to be more stable as resolution approaches. In our benchmark design, longer-horizon questions are assigned more prediction points, since they leave more time for new evidence to emerge. But if we increase the number of prediction points linearly with question lifetime, the cost grows too quickly. For example, a 30-day question would require 10 times as many predictions as a 3-day question. To avoid this, we use a logarithmic schedule to increase prediction points as ($D_i$) grows. Let $T_i$ denote the target number of prediction points for question $i$. We implement this schedule with the following form:

<div>

$$T_i = \operatorname{round}(1.35 \cdot \ln D_i + 0.5)$$

</div>

We fit the parameters so that the schedule yields approximately 4 and 7 predictions for question lifetimes of 10 and 90 days, respectively. This logarithmic compression also reduces the spread in prediction frequency across questions, which helps naturally smooth the distribution of final-prediction dates.



**Phase 2 — Priority Scoring**

To decide which questions should be predicted next while keeping the schedule balanced over time, we assign each question a priority score. Let $W_i$ denote days elapsed since the last prediction, $P_i$ the number of predictions already completed, $R_i = T_i - P_i$ the remaining count, and $D_i'$ the remaining time until resolvement. The priority score is:

<div>

$$S_i = \frac{W_i}{D_i' / R_i} = \frac{W_i R_i}{D_i'}$$

</div>

A higher $S_i$ means the question should be given higher priority. This scoring rule has two desirable properties. The first is **elastic recovery**: if a question remains unsampled for a long period, $W_i$ continues to grow until the question is scheduled again. This helps preserve coverage across the question's lifecycle (goal 1). The second is **resolution-aware prioritization**: as $D_i'$ gets smaller, the target interval $D_i' / R_i$ also gets smaller. This gives questions approaching resolution higher priority and helps maintain a steady flow of resolved questions (goal 3). Finally, each day the scheduler selects the top-$B$ questions by $S_i$. The budget $B$ controls the daily prediction volume (goal 2).


### Multi-Point Aligned Elo Framework

The framework's core mechanism is **prediction-point alignment**. We compare models only when they make predictions on the same question at the same prediction point, ensuring the same information and time remaining until resolution. We then jointly estimate model ratings with a Bradley-Terry model by maximum likelihood.

#### Battle Construction

After alignment, we compute a Brier Score $\text{BS} = (1 - p^{c})^2$ for each prediction, where $p^{c}$ is the probability assigned to the correct outcome. Lower scores indicate better prediction performance. Each aligned comparison is then treated as a battle, indexed by $k$, with competitors denoted by $a_k$ and $b_k$.

**Soft label** $v_k$: A binary win/loss label is too coarse for probabilistic forecasting because it cannot capture differences in confidence. Even when two models predict the same correct outcome, they may assign very different probabilities. A strict binary label would treat these forecasts as equivalent, which would ignore meaningful differences in calibration. To preserve this information, we map the Brier Score difference between models $a_k$ and $b_k$ to a continuous target $v_k \in (0,1)$, where larger values mean that model $a_k$ performs better than model $b_k$ by a wider margin:

<div>

$$v_k = \frac{1}{1 + 10^{(\text{BS}_{a_k} - \text{BS}_{b_k})/\sigma}}, \quad \sigma = 0.10 \text{ (default; sensitivity analysed below)}$$

</div>

When the two models have the same Brier Score, $v_k = 0.5$. If model $a_k$ achieves a lower Brier Score than model $b_k$, then $v_k$ moves closer to 1; if $a_k$ performs worse, then $v_k$ moves closer to 0. The parameter $\sigma$ controls the sensitivity of the soft outcome to a given Brier Score gap.

**Weight** $w_k$: Longer-horizon forecasts are generally harder because they are made with less prior information. We therefore weight each battle by its prediction lead time $\Delta t_k$:

<div>

$$w_k = 1 + \gamma \ln(1 + \Delta t_k), \quad \gamma = 1.0$$

</div>

The parameter $\gamma$ controls the weighting strength. Each battle is therefore written as $(a_k, b_k, v_k, w_k)$, where $a_k$ and $b_k$ are the two models being compared, $v_k$ is the soft outcome, and $w_k$ is the battle weight.

#### Bradley-Terry MLE

Let $\mathbf{r}$ be the vector of model ratings, and let $r_i$ denote the rating of model $i$. The Bradley-Terry model maps rating differences to pairwise win probabilities. In battle $k$, the probability that model $a_k$ beats model $b_k$ is:

<div>

$$P(a_k \succ b_k \mid \mathbf{r}) = \frac{1}{1 + 10^{(r_{b_k} - r_{a_k})/400}}$$

</div>

We estimate the ratings by maximizing the following weighted log-likelihood, where $v_k$ is the observed soft outcome and $w_k$ is the battle weight:

<div>

$$\mathcal{L}(\mathbf{r}) = \sum_{k} w_k \left[ v_k \log P(a_k \succ b_k \mid \mathbf{r}) + (1 - v_k) \log\bigl(1 - P(a_k \succ b_k \mid \mathbf{r})\bigr) \right]$$

</div>

This objective assigns higher ratings to models whose implied win probabilities match the observed soft outcomes across battles, with greater emphasis on battles that carry larger weights.

$\hat{\mathbf{r}} = \arg\max_{\mathbf{r}} \mathcal{L}(\mathbf{r})$ is solved with L-BFGS-B. Because the Bradley-Terry negative log-likelihood is convex in $\mathbf{r}$, the optimization converges to the global optimum.


### Robustness: Rank Stability Under Missing Scheduled Predictions

In practice, different models may not always complete their scheduled predictions on time every day due to API failures or server interruptions. A practical ranking method should therefore remain stable when some scheduled prediction days are missed. Average Brier Score is sensitive to this because it is computed only over the questions a model has answered. Once some days are omitted, the score is based on a smaller subset of questions, which may not have the same difficulty as the full set. As a result, the ranking can become unstable and may fail to genuinely reflect a model's prediction performance. Elo works differently. Each battle compares two models only on questions that both of them answered. If one model misses a scheduled prediction day, the battles for that day simply do not happen, which means the remaining battles are still based on shared questions. As a result, missing scheduled predictions reduce the number of comparisons, but they do not change which questions each battle is based on.

In our experiment, we select a subset of models and simulate missing scheduled predictions by randomly dropping between 10% and 70% of their prediction days. For each drop rate, we run 50 trials and record the standard deviation of each model's rank across trials using the recomputed rankings. This measures how much the ranking varies when different scheduled prediction days are missing. We also report the gap using the <strong>Volatility Ratio</strong> (Average Brier rank Std &divide; Elo rank Std).

<div class="ec-result">
<strong>Result:</strong> As the drop rate increases, rank variability under Average Brier grows faster than under Elo at every tested drop rate. The Volatility Ratio stays between <strong>1.4&times; and 1.8&times;</strong> across all drop rates, showing that Elo rankings remain consistently more stable when scheduled predictions are incomplete.
</div>

![Intermittent Sweep](/static/images/prediction/intermittent_sweep.png)


### Reliability: Rank Consistency Under Model Set Variation

Since Average Brier Score computes each model's score independently, adding or removing other models does not affect the ranking of the remaining models. The situation is different for Elo rankings, which estimate all model ratings jointly from the full set of pairwise battles. When a model is removed, the ratings of other models may shift because some battles are no longer observed. If these shifts are large, the Elo ranking becomes unstable as the model set changes. To evaluate how sensitive Elo is to such changes, we design a Leave-$K$-Out experiment.

We first fit the Bradley&ndash;Terry model using all battles from the full model set and treat the resulting ranking as the reference. We then vary $K$ from 1 to 6. For each $K$, we sample a large number of model combinations to remove. Specifically, we remove all battles involving those $K$ models and refit the Bradley-Terry model on the remaining ones. We then compare the new ranking with the reference ranking after excluding the removed models. We use Kendall's $\tau$ to measure how much the ranking changes:

<div>

$$\tau = \frac{n_c - n_d}{\binom{N-K}{2}}$$

</div>

Here $N$ is the number of established models in the full model set, and the denominator $\binom{N-K}{2}$ indicates the total number of model pairs among the remaining models. For each pair, we check whether the two models appear in the same relative order in both the reference ranking and the new ranking. If they do, the pair is concordant ($n_c$); if the order is reversed, the pair is discordant ($n_d$). A value of $\tau = 1$ means all pairwise orders are preserved, while $\tau = 0$ means the number of preserved pairs equals the number of flipped pairs. For each $K$, we report the mean $\tau$ and the 95% confidence interval across all sampled removal combinations.

<div class="ec-result">
<strong>Result:</strong> When removing one model at a time (<em>K</em> = 1), the mean &tau; across all removal combinations is <strong>0.994</strong>, indicating that nearly all pairwise orderings are preserved. As <em>K</em> increases to 6, mean &tau; decreases to <strong>0.978</strong>, which still represents high rank agreement. The 95% confidence bands remain relatively narrow at every <em>K</em>, confirming that the Bradley&ndash;Terry rankings are robust to changes in the model set.
</div>

![Leave-K-Out Robustness](/static/images/prediction/leave_k_out_robustness.png)


### Expeditiousness: New Model Ranking Convergence

When a new model joins the leaderboard, only a subset of questions has resolved, and those questions are more likely to be earlier-resolving ones. Under Average Brier Score, the new model is ranked only on this subset, while established models are evaluated on a broader mix of questions with both short and long resolution horizons. The two groups are therefore evaluated on different question distributions, which makes the comparison unfair. As more questions resolve over time, the distribution changes, and the Average Brier ranking changes with it.

In terms of the Elo ranking, each battle compares two models on the same question at the same prediction time. The comparison is therefore made within a shared setting. The difficulty of the question is shared by both models in that battle and does not favor one side over the other. Although a new model with only a few battles may receive a noisier rating, each battle still provides a valid relative comparison, and the rating is not systematically biased by the resolved question set. This suggests that Elo rankings would approach their stable values faster than Average Brier rankings when a new model joins. We test this with the following experiment. We simulate cold-start entry for each established model over a 20-day observation window. On each day $d$, we define the Rank Percentile Error as follows:

<div>

$$\text{Error}_m(d) = \frac{|\text{rank}_m(d) - \text{rank}_m^*|}{N}$$

</div>

where $N$ is the number of established models. For a given model $m$, we pretend that it has just joined and compute its rank using only its first $d$ days of predictions; this is denoted $\text{rank}_m(d)$. All other established models still use their full prediction history. We then compare this early rank with $\text{rank}_m^\ast$, the rank of model $m$ computed from all 20 days of its predictions. The absolute difference between $\text{rank}_m(d)$ and $\text{rank}_m^\ast$, divided by $N$, is the Rank Percentile Error on day $d$. We repeat this for every established model and average the resulting errors. For visual comparison, the figure normalises each method's error curve by its Day-1 value, so the two methods can be compared on the same scale.

<div class="ec-result">
<strong>Result:</strong> Elo's ranking error drops faster than Avg Brier throughout the 20-day window. To measure convergence speed, we record when each method's error first falls below 40% of its starting value. Elo reaches this point at <strong>Day 5.4</strong>, while Avg Brier reaches it at <strong>Day 14.5</strong>. Elo converges <strong>2.7&times;</strong> faster.
</div>

![Newcomer Convergence](/static/images/prediction/newcomer_convergence.png)

### Diversity: Coverage Across Domains and Horizons

Prediction performance varies across domains. A model may perform well on political events but struggle with financial or scientific questions. To reduce domain bias in the rankings, Echo's question pool spans 7 domains: Politics & Governance, Economy & Finance, Sports & Entertainment, Science & Environment, Crypto & Digital Assets, Esports & Gaming, and Other. New questions are added daily so the benchmark continues to cover ongoing real-world events. The domain distribution is as follows:


<div style="font-family:var(--ec-font-display);background:#F3F1EE;padding:28px 36px 22px;border-radius:12px;max-width:860px;margin:20px auto;border:1px solid #E8E6E3">

<p style="text-align:center;margin:0 0 4px;font-size:26px;font-weight:bold;color:#1A1A1A;letter-spacing:.25px">Question Distribution by Domain</p>
<p style="text-align:center;margin:0 0 24px;font-size:15px;color:#8A8A8A">7 categories</p>

<div style="display:flex;align-items:center;gap:36px;flex-wrap:wrap;justify-content:center">

<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" style="width:248px;height:248px;flex-shrink:0">
  <defs>
    <filter id="lbl-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#000" flood-opacity="0.45"/>
    </filter>
  </defs>
  <!-- Politics & Governance -90.00°→34.20° -->
  <path d="M130.0,20.0 A110,110,0,0,1,221.0,191.8 L171.4,158.1 A50,50,0,0,0,130.0,80.0 Z" fill="#3C3C50"/>
  <!-- Economy & Finance 34.20°→105.48° -->
  <path d="M221.0,191.8 A110,110,0,0,1,100.6,236.0 L116.7,178.2 A50,50,0,0,0,171.4,158.1 Z" fill="#A63D38"/>
  <!-- Sports & Entertainment 105.48°→160.20° -->
  <path d="M100.6,236.0 A110,110,0,0,1,26.5,167.3 L83.0,146.9 A50,50,0,0,0,116.7,178.2 Z" fill="#C07050"/>
  <!-- Crypto & Digital Assets 160.20°→194.40° -->
  <path d="M26.5,167.3 A110,110,0,0,1,23.5,102.6 L81.6,117.6 A50,50,0,0,0,83.0,146.9 Z" fill="#C4605B"/>
  <!-- Science & Environment 194.40°→225.00° -->
  <path d="M23.5,102.6 A110,110,0,0,1,52.2,52.2 L94.6,94.6 A50,50,0,0,0,81.6,117.6 Z" fill="#4E7A56"/>
  <!-- Other 225.00°→251.64° -->
  <path d="M52.2,52.2 A110,110,0,0,1,95.4,25.6 L114.3,82.5 A50,50,0,0,0,94.6,94.6 Z" fill="#9A9A9E"/>
  <!-- Esports & Gaming 251.64°→270.00° -->
  <path d="M95.4,25.6 A110,110,0,0,1,130.0,20.0 L130.0,80.0 A50,50,0,0,0,114.3,82.5 Z" fill="#BF8860"/>
  <!-- Donut hole -->
  <circle cx="130" cy="130" r="50" fill="#F3F1EE"/>
  <!-- Slice labels (r=82, +3.5 for baseline) -->
  <!-- Politics mid=-27.90° → (202.5, 91.6) -->
  <text x="202.5" y="95.1" text-anchor="middle" font-family="'Crimson Pro',Georgia,serif" font-size="17" font-weight="bold" fill="white" filter="url(#lbl-shadow)">34.5%</text>
  <!-- Economy mid=69.84° → (158.3, 207.0) -->
  <text x="158.3" y="210.5" text-anchor="middle" font-family="'Crimson Pro',Georgia,serif" font-size="16.5" font-weight="bold" fill="white" filter="url(#lbl-shadow)">19.8%</text>
  <!-- Sports mid=132.84° → (74.2, 190.1) -->
  <text x="74.2" y="193.6" text-anchor="middle" font-family="'Crimson Pro',Georgia,serif" font-size="16" font-weight="bold" fill="white" filter="url(#lbl-shadow)">15.2%</text>
  <!-- Crypto mid=177.30° → (48.1, 133.9) -->
  <text x="48.1" y="137.4" text-anchor="middle" font-family="'Crimson Pro',Georgia,serif" font-size="15.5" font-weight="bold" fill="white" filter="url(#lbl-shadow)">9.5%</text>
</svg>

<div style="flex:1;min-width:260px;display:flex;flex-direction:column;gap:9px">

  <div style="display:flex;align-items:center;gap:8px">
    <span style="width:12px;height:12px;border-radius:2px;background:#3C3C50;flex-shrink:0;display:inline-block"></span>
    <span style="flex:1;font-size:17.5px;color:#1A1A1A">Politics &amp; Governance</span>
    <span style="font-size:15px;color:#8A8A8A;white-space:nowrap">334</span>
    <span style="font-size:17.5px;font-weight:700;color:#1A1A1A;min-width:52px;text-align:right">34.5%</span>
  </div>

  <div style="display:flex;align-items:center;gap:8px">
    <span style="width:12px;height:12px;border-radius:2px;background:#A63D38;flex-shrink:0;display:inline-block"></span>
    <span style="flex:1;font-size:17.5px;color:#1A1A1A">Economy &amp; Finance</span>
    <span style="font-size:15px;color:#8A8A8A;white-space:nowrap">191</span>
    <span style="font-size:17.5px;font-weight:700;color:#1A1A1A;min-width:52px;text-align:right">19.8%</span>
  </div>

  <div style="display:flex;align-items:center;gap:8px">
    <span style="width:12px;height:12px;border-radius:2px;background:#C07050;flex-shrink:0;display:inline-block"></span>
    <span style="flex:1;font-size:17.5px;color:#1A1A1A">Sports &amp; Entertainment</span>
    <span style="font-size:15px;color:#8A8A8A;white-space:nowrap">147</span>
    <span style="font-size:17.5px;font-weight:700;color:#1A1A1A;min-width:52px;text-align:right">15.2%</span>
  </div>

  <div style="display:flex;align-items:center;gap:8px">
    <span style="width:12px;height:12px;border-radius:2px;background:#C4605B;flex-shrink:0;display:inline-block"></span>
    <span style="flex:1;font-size:17.5px;color:#1A1A1A">Crypto &amp; Digital Assets</span>
    <span style="font-size:15px;color:#8A8A8A;white-space:nowrap">92</span>
    <span style="font-size:17.5px;font-weight:700;color:#1A1A1A;min-width:52px;text-align:right">9.5%</span>
  </div>

  <div style="display:flex;align-items:center;gap:8px">
    <span style="width:12px;height:12px;border-radius:2px;background:#4E7A56;flex-shrink:0;display:inline-block"></span>
    <span style="flex:1;font-size:17.5px;color:#1A1A1A">Science &amp; Environment</span>
    <span style="font-size:15px;color:#8A8A8A;white-space:nowrap">82</span>
    <span style="font-size:17.5px;font-weight:700;color:#1A1A1A;min-width:52px;text-align:right">8.5%</span>
  </div>

  <div style="display:flex;align-items:center;gap:8px">
    <span style="width:12px;height:12px;border-radius:2px;background:#9A9A9E;flex-shrink:0;display:inline-block"></span>
    <span style="flex:1;font-size:17.5px;color:#1A1A1A">Other</span>
    <span style="font-size:15px;color:#8A8A8A;white-space:nowrap">72</span>
    <span style="font-size:17.5px;font-weight:700;color:#1A1A1A;min-width:52px;text-align:right">7.4%</span>
  </div>

  <div style="display:flex;align-items:center;gap:8px">
    <span style="width:12px;height:12px;border-radius:2px;background:#BF8860;flex-shrink:0;display:inline-block"></span>
    <span style="flex:1;font-size:17.5px;color:#1A1A1A">Esports &amp; Gaming</span>
    <span style="font-size:15px;color:#8A8A8A;white-space:nowrap">49</span>
    <span style="font-size:17.5px;font-weight:700;color:#1A1A1A;min-width:52px;text-align:right">5.1%</span>
  </div>

</div>
</div>

<p style="text-align:center;margin:18px 0 0;font-size:14.5px;color:#8A8A8A;border-top:1px solid #E8E6E3;padding-top:12px">Active prediction question distribution as of March 27, 2026</p>
</div>


### Flexibility: Open Participation Interface

Existing dynamic prediction leaderboards require participants to submit their predictions periodically to ensure the effectiveness of the evaluation, which placed a significant burden on them. Thanks to the aforementioned design mechanism, Echo allows participants to freely choose the submission date and topic. The experimental results above verify that Echo can still provide reliable evaluation results under any submission conditions.

<hr />

## EchoZ-1.0: Train on the Future

### Deep Research Agent Framework for Prediction

EchoZ-1.0 is built on the ReAct framework. At each timestep $t$, the agent performs three steps: it first generates a thought $\theta_t$ (what to do next and why), then takes an action $\alpha_t$ (such as running a web search or visiting a page), and finally receives an observation $o_t$ (the result of the action). These three steps form a triple $(\theta_t, \alpha_t, o_t)$. As the agent iterates, the full history of all previous triples accumulates into a trajectory:

<div>

$$H_t = (\theta_0, \alpha_0, o_0,\; \theta_1, \alpha_1, o_1,\; \ldots,\; \theta_{t-1}, \alpha_{t-1}, o_{t-1})$$

</div>

At each step, the agent decides what to do next based on the question $\mathcal{Q}_i$ and everything it has seen so far ($H_t$):

<div>

$$(\theta_t, \alpha_t) \sim \pi\!\left(\cdot \mid \mathcal{Q}_i,\, H_t\right)$$

</div>

The loop continues until the agent decides to produce a final answer. At that step $T$, the action $\alpha_T$ is set to "answer" and the agent outputs a probability distribution over the possible outcomes:

<div>

$$\hat{\mathbf{p}}_i(T) = \mathrm{Answer}(\mathcal{Q}_i,\, H_T)$$

</div>

This framework allows the model to actively search for information and reason over multiple steps before making a prediction. However, training such an agent introduces two key difficulties.

### Deficiencies of Train-on-Past

<div class="ec-two-col">
<div class="ec-box">
<div class="ec-box-title">Deficiency I &mdash; Engineering Paradox</div>
<div class="ec-box-body">Completely blocking access to answer-containing open-web resources is an engineering challenge of extreme difficulty (arguably impossible), because critical websites continuously update their content as time passes, making the historical web state irrecoverable.</div>
</div>
<div class="ec-box">
<div class="ec-box-title">Deficiency II &mdash; Outcome-Oriented Bias</div>
<div class="ec-box-body">Real-world events exhibit high stochasticity and heavy-tailed distributions. Rigorous prediction logic may be penalised by low-probability events that nonetheless occur; defective guesses may succeed by chance. Direct outcome-based feedback leads models to overfit to noise, inducing survivorship bias.</div>
</div>
</div>

### Three Core Mechanisms of the Train-on-Future Pipeline

<div class="ec-mechanism">
<div class="ec-mech-title">① Dynamic Question Synthesis</div>
<div class="ec-mech-body">The system rejects static historical datasets in favour of a dynamic question synthesis engine driven by real-time data streams. An automated pipeline continuously ingests current macroeconomic indicators and frontier developments, and drives an agent to automatically generate novel, high-entropy prediction propositions about events yet to occur. Because every question concerns a future event, the data leakage pathway inherent in Train-on-Past is eliminated, and models must reason on genuinely unknown distributions.</div>
</div>

<div class="ec-mechanism">
<div class="ec-mech-title">② Rubrics Search</div>
<div class="ec-mech-body">Training rewards are based on the model's reasoning process, not just whether the final prediction is correct. For each domain, we run a rubrics search to find the best scoring rubric. We start with a set of candidate rubrics, use each one to score model prediction trajectories, and rank the models accordingly. The rubric whose ranking best matches the Elo ranking from real outcomes is selected. Because the rubric is aligned with actual forecasting performance, the training signal is more stable and potentially transfers across different questions within the same domain.</div>
</div>

<div class="ec-mechanism">
<div class="ec-mech-title">③ Map-Reduce Agent Architecture</div>
<div class="ec-mech-body">A distributed Map-Reduce agent execution architecture is designed on top of the trained model. In the <strong>Map</strong> phase, the architecture decomposes macro-level questions into orthogonal sub-task streams, dispatching multiple agents for domain-specific information collection and parallel logical reasoning. In the <strong>Reduce</strong> phase, an aggregation node resolves cross-source conflicts, aligns causal chains, and outputs a synthesised probabilistic decision. The loop supports multiple rounds of adaptive iteration, re-running Map-Reduce cycles until information coverage and reasoning depth plateau.</div>
</div>


### Automated Rubric Search

Each model produces a prediction trajectory for every question, recording its full prediction process from information gathering to final probability output. We cannot rely solely on resolved outcomes to judge trajectory quality, for two reasons. First, prediction outcomes are noisy: a model can reason well and still be wrong, or reason poorly and happen to be right. Second, many questions take days or weeks to resolve, making outcome-based feedback slow and sparse. We therefore need a way to evaluate the prediction process itself. The goal of the rubric search is to find a rubric that can assess trajectory quality and produce model rankings consistent with the Elo ranking.

Directly using an LLM to score an entire trajectory produces coarse-grained supervision and would lack consistency across runs. Instead, we decompose the evaluation into concrete dimensions, such as source reliability and probability calibration. Each dimension has clearly defined scoring levels, and together they form a rubric. The LLM judge scores each trajectory dimension by dimension. Compared to a single holistic score, this structured approach produces more stable and fine-grained results.

However, designing a good rubric by hand is difficult. Prediction questions are inherently noisy: even a well-reasoned trajectory can lead to a wrong outcome, and a poorly reasoned one can happen to be correct. Without grounding in data, a hand-designed rubric may not capture the dimensions that actually correlate with forecasting accuracy. This introduces bias into the evaluation. On top of that, different domain categories have different characteristics. The reasoning patterns that lead to accurate predictions in Sports &amp; Entertainment could be different from those in Crypto &amp; Digital Assets, and a single rubric cannot capture both well.

To avoid these issues, we ground the rubric design in data rather than human intuition. We frame it as a data-driven search problem: the search objective is to maximise Spearman's $\rho$ between the rubric-based model ranking and the Elo ranking. We run the search independently for each of the primary domain categories, starting from a general rubric. In each round, an LLM generates new rubric candidates informed by feedback from previous rounds, such as which dimensions contribute to the scoring process. Each candidate is evaluated on held-out data, and the top-performing candidates are retained for further iterations.

![Rubrics Improvement](/static/images/prediction/rubrics_improvement.png)

We show part of the rubrics as follows:


<p style="text-align:center;margin:0 0 4px;font-size:20px;font-weight:bold;color:#1A1A1A;letter-spacing:.3px">Rubrics by Domain</p>

<div style="display:flex;flex-wrap:wrap;gap:3px 3px;margin-bottom:0">
<button onclick="echoRTab(0)" id="eRTab0" style="padding:8px 14px;border:none;border-radius:7px 7px 0 0;cursor:pointer;font-size:12px;font-weight:bold;background:#2C2C2E;color:white;font-family:'Crimson Pro',Georgia,serif;transition:background .15s">🏛  Politics<span style="font-size:10px;opacity:.7;margin-left:5px">(20 dims)</span></button>
<button onclick="echoRTab(1)" id="eRTab1" style="padding:8px 14px;border:none;border-radius:7px 7px 0 0;cursor:pointer;font-size:12px;font-weight:normal;background:#EDEBE8;color:#636366;font-family:'Crimson Pro',Georgia,serif;transition:background .15s">🏆  Sports<span style="font-size:10px;opacity:.7;margin-left:5px">(20 dims)</span></button>
</div>

<div id="eRPanel0" style="display:block;border-radius:0 8px 8px 8px;overflow:hidden;border:1px solid #E8E6E3;box-shadow:0 1px 4px rgba(0,0,0,.05)">
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Resolution Criteria Parsing</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates whether the trajectory explicitly extracts and strictly tests evidence against all specific technical constraints and edge cases in the prompt.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly extracts and strictly tests evidence against 2+ specific technical constraints from the prompt (e.g., 'sovereign UN member', 'majority of minutes').</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Notes the general goal but applies constraints loosely, missing subtle exclusions or edge cases.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Ignores specific definitions entirely, leading to the inclusion of clearly disqualified events or locations.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Rhetoric vs Execution Disambiguation</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Assesses the ability to separate a politician's public threats, promises, or social media posts from formal administrative, legal, or military execution.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly contrasts a political statement, threat, or social media post with the verifiable presence or absence of formal execution (e.g., court filings, signed orders).</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Notes political statements and questions their execution, but does not deeply investigate the formal execution mechanism.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Treats a politician's verbal threat, promise, or social media post as definitive proof of a completed formal action.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Primary Institutional Sourcing</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Measures the effort to bypass secondary news summaries and directly access authoritative government, legal, or military repositories.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Directly accesses or specifically searches for primary official repositories (e.g., CourtListener dockets, AFRICOM press releases, official embassy sites).</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Relies primarily on detailed secondary reporting from reputable news organizations to infer official actions.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Relies entirely on search engine snippets, rumors, or unverified claims without seeking primary institutional confirmation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Procedural Constraint Assessment</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates understanding of specific rules, schedules, and hurdles of relevant government, legal, or military institutions.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Analyzes specific procedural rules, legislative calendars, or bureaucratic hurdles (e.g., SCOTUS opinion days, War Powers Act 48-hour rules, declassification review steps).</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Mentions general government delays or processes but lacks specific procedural details or institutional schedules.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Assumes complex government, legal, or military actions can happen instantaneously without procedural friction.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Timeline Feasibility Calculation</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Measures whether the trajectory calculates the exact time left and assesses if the required actions are logistically and procedurally possible.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Calculates the exact days/hours remaining and explicitly evaluates if required bureaucratic, legal, or military procedures can realistically conclude in that narrow window.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Notes the deadline date but only loosely connects it to the pace of required events, without specific feasibility analysis.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Ignores the remaining time entirely or assumes complex government/military actions can happen instantaneously.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Geospatial and Entity Precision</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Assesses the rigor of verifying exact geographic locations, borders, or official territorial and sovereign definitions.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Verifies exact geographic details (e.g., specific intersections, border sides) or entity statuses (e.g., UN member state, designated cartel) using maps, coordinates, or official definitions.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Identifies general regions, cities, or groups but fails to verify precise boundaries, coordinates, or official legal statuses required by the prompt.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Assumes locations or entity statuses incorrectly (e.g., assuming an observer state is a UN member state or confusing maritime strikes with land strikes).</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Negative Evidence Weighting</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Measures whether the trajectory actively uses the absence of information or action as a strong predictive signal.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Actively searches for and heavily weights the absence of an event (e.g., empty dockets, lack of AFRICOM reports, empty public schedules) as a strong predictive signal.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Notes missing information or a lack of news but does not deeply analyze what this absence means for the probability.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Only looks for confirming evidence, completely ignoring the predictive value of what is missing or assuming the search tool simply failed.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Chronological Boundary Enforcement</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Checks strict adherence to the exact start and end dates specified in the prompt, ensuring past events fall inside the valid window.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Strictly enforces the start and end dates, explicitly verifying if past events fall inside or outside the required timeframe (e.g., checking market creation timestamps against event occurrences).</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Mentions past events and the general timeframe but does not rigorously verify if they fall strictly inside the exact start-to-finish window.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Explicitly uses an event that clearly falls outside the specified timeframe (e.g., before market creation) as proof of resolution.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">False Positive Filtration</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Assesses the ability to identify and discard misleading search snippets, misdated articles, or misattributed actions.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Actively scrutinizes search snippets to debunk misleading dates, recycled old news, metadata errors, or actions misattributed to the wrong actor.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Notes a potential date discrepancy or odd headline but accepts it superficially without deep verification of the source.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Blindly accepts misdated snippets, treating old events (e.g., 2019 videos, 2024 strikes) or template errors as current news.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Quantitative Base Rate Calculation</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Checks if the trajectory establishes a quantitative historical baseline or frequency to mathematically anchor its projection.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Calculates a specific numerical frequency or historical baseline (e.g., X posts per day, Y strikes per week, average days pending) from past data to mathematically ground the projection.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Mentions historical trends generally (e.g., 'they strike frequently', 'he posts a lot') without calculating a specific rate or numerical baseline.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Makes no attempt to establish a historical baseline or frequency, relying entirely on narrative speculation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Diplomatic and Proxy Disambiguation</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Assesses the ability to differentiate between the various roles nations play, such as mediators versus physical hosts, or proxies versus states.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly distinguishes between mediating nations vs. physical host locations, or between proxy/allied actions vs. direct state-on-state kinetic actions.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Notes multiple countries or groups involved but blurs their specific logistical, diplomatic, or command roles.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Conflates the mediator country for the physical meeting location, or conflates proxy actions with direct state actions, treating them as identical.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Prediction Market Rule Calibration</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates the extraction of specific odds from prediction markets and the analysis of their underlying resolution rules.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Extracts specific percentage odds from prediction markets AND explicitly analyzes their specific underlying resolution rules or relevant derivative markets.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Mentions prediction market odds or general betting sentiment as a supporting data point but does not investigate the exact technical rules for how the market resolves.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Completely ignores available prediction market data or fundamentally misinterprets what the market odds represent.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Catalyst and Off-Ramp Tracking</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates the identification of specific upcoming events that could trigger or prevent the predicted outcome.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Pinpoints specific upcoming dates, scheduled meetings, expiring ultimatums, or holidays within the window that would serve as direct catalysts or off-ramps for the outcome.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Mentions general upcoming events or trends but does not tie them directly to specific trigger dates or deadlines affecting the outcome.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Analyzes the situation entirely statically, looking only at past events without searching for future triggers or catalysts.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Contradiction Resolution</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Assesses how the trajectory handles conflicting reports or data points discovered during the investigation.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Actively identifies conflicting information (e.g., lagging official sites vs. breaking news, mismatched dates) and uses logical deduction to determine ground truth.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Notes conflicting reports in the search results but leaves them unresolved, or arbitrarily picks one side without deep verification.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Blindly accepts the first piece of information found, ignoring or missing obvious contradictions in the gathered data.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Reporting Lag Awareness</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates whether the trajectory accounts for delays in official reporting or docket updates.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Recognizes that official reporting (e.g., AFRICOM releases, court docket uploads, ISW maps) may have a 24-48 hour lag and explicitly accounts for this delay in the timeline analysis.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Takes current reports at face value without explicitly considering potential administrative or reporting lags.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Assumes that if an event isn't reported today, it definitely hasn't happened recently, ignoring basic reporting delays.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Recent Window Monitoring</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Checks if the trajectory specifically searches for updates in the immediate 24-48 hours prior to the simulated current date.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Conducts targeted searches specifically for the 24-48 hours immediately preceding the simulated current date to catch late-breaking developments or docket updates.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Searches generally for recent news from the past few weeks but does not explicitly filter for the absolute latest daily updates.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Relies on weeks-old or months-old information without checking if the situation changed right before the current date.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Semantic and Legal Rigor</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates how strictly the trajectory distinguishes between closely related but legally or militarily distinct terms.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Carefully distinguishes between closely related but legally/practically distinct terms (e.g., 'entering' vs 'capturing', 'intelligence support' vs 'boots on the ground', 'military engagement' vs 'declaration of war').</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Shows some awareness of definitions but occasionally conflates similar terms in its reasoning.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Blatantly conflates distinct concepts, leading to a fundamentally flawed evaluation of the resolution criteria.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Tool Failure Adaptation</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates the trajectory's persistence and adaptability when technical tools fail to return expected data.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly documents a tool failure (e.g., 404 error, API limit, blank page) and actively pivots to alternative search queries, different APIs, or secondary sources to find the data.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Encounters a tool failure and tries one basic alternative, but gives up quickly without exhausting options.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Halts the investigation, skips reasoning, or hallucinates data after encountering a tool failure.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Sustained Condition Analysis</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates whether the trajectory verifies if a specific condition was sustained over a required period rather than a momentary blip.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly analyzes whether a specific condition (e.g., market price > 20%, map shading) was sustained over a required duration (e.g., majority of minutes in a 2-hour window, full update cycle) rather than a momentary spike.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Notes a historical spike or condition being met briefly but does not deeply analyze its duration or stability against the rules.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Assumes a single reported momentary price point or unconfirmed report guarantees a sustained condition.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Evidence-Probability Calibration</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Measures how strictly the final probability reflects the gathered evidence, base rate math, and resolved contradictions.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Final probability strictly and explicitly follows from the synthesized evidence and base rates, reserving extreme odds (<5% or >95%) only for mathematically or structurally guaranteed events.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Final probability generally aligns with the evidence direction, but the specific number feels arbitrary or slightly overconfident/underconfident.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Final probability contradicts the gathered evidence, uses extreme odds on highly uncertain future events, or is generated zero-shot.</span></div></div>
</details>
</div>

<div id="eRPanel1" style="display:none;border-radius:0 8px 8px 8px;overflow:hidden;border:1px solid #E8E6E3;box-shadow:0 1px 4px rgba(0,0,0,.05)">
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Exact Resolution Criteria Adherence</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates whether the model precisely identifies and strictly anchors its investigation to the exact predicted outcome constraints, preventing irrelevant or misaligned predictions.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly states the exact resolution constraints (e.g., specific spread, exact deadline, conditional clause) and strictly filters all gathered data to match.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Addresses the general topic but misses a fine-grained constraint, occasionally including slightly misaligned data.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Misunderstands the question, predicts the wrong metric entirely, ignores specific resolution conditions, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Target Entity Disambiguation</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Checks if the model correctly isolates data for the exact entity specified, actively avoiding confusion with lookalikes or irrelevant variants.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Actively identifies and explicitly filters out irrelevant distractors (e.g., excluding parallel cards, distinguishing critic from audience scores, verifying official nominees).</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Focuses on the right entity but occasionally includes mixed data from variants or lookalikes without clear separation.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Conflates different entities completely, treating irrelevant data (like parallel cards, audience scores, or non-nominees) as valid evidence, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Current Personnel and Injury Verification</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Checks if the model actively verifies the absolute latest player availability, injuries, suspensions, or key personnel changes, which are primary drivers of outcomes.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Actively executes a targeted search for, and explicitly names, specific injured/suspended/returning personnel for the exact date, assessing their direct impact.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Mentions injuries, roster health, or personnel generically but does not perform a specific search to verify the absolute current status.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Makes the prediction assuming full strength/availability without checking or mentioning personnel changes, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Recent Form and Momentum Prioritization</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Measures whether the model prioritizes recent momentum over long-term historical averages or reputation.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly extracts performance data from the most recent 3-10 events/weeks and explicitly contrasts it with or prioritizes it over full-season historical averages to identify current momentum.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Retrieves recent form but blends it equally with long-term averages without distinguishing current momentum shifts.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Relies entirely on historical reputation, all-time records, or outdated season-long stats without isolating recent form, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Direct Matchup and Historical Context</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Assesses whether the model investigates recent direct encounters between the specific entities involved to identify tactical or psychological edges.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Retrieves specific recent direct head-to-head results between the exact entities, detailing exact scores, margins, or tactical advantages.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Mentions past matchups vaguely (e.g., 'leads the all-time series') without specific recent scores or context.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Fails to investigate or mention any prior direct encounters or historical context between the competitors, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Situational Splits and Venue Analysis</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates the use of specific home/away records, pitch/weather conditions, or venue/platform-specific historical data.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly extracts and compares specific home/away records, pitch/weather conditions, or venue-specific historical data, applying it directly to the event location.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Mentions home-court/field advantage generically without citing specific numerical split statistics.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Ignores the location of the event entirely, evaluating performance as if on neutral ground, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Betting and Prediction Market Baseline</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Checks if the model extracts specific betting lines, spreads, or prediction market odds as a baseline 'wisdom of crowds' signal.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Extracts specific, current betting odds, point spreads, or prediction market probabilities and explicitly uses them to establish a quantitative baseline expectation.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Mentions who is favored generically without citing specific numerical odds, lines, or implied probabilities.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Completely ignores betting markets, odds, or financial market indicators, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Advanced Domain-Specific Metrics</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates the reliance on specific advanced or underlying metrics rather than basic counting stats or qualitative narratives.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Cites 2+ specific advanced or underlying metrics relevant to the domain (e.g., xG, offensive/defensive efficiency, SRS, exact sales volumes, specific review counts).</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Uses basic surface-level statistics (e.g., simple win-loss record, basic points per game) but lacks deeper efficiency metrics.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Relies purely on narrative reasoning, vibes, or subjective opinions with no statistical backing, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Schedule, Fatigue, and Timing Context</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Measures awareness of scheduling factors like rest days, travel, back-to-backs, or congested release/voting windows.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly checks the recent and upcoming schedule for fatigue/timing factors, such as rest days, back-to-back games, travel distance, or congested release windows, assessing their impact.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Briefly notes recent games or schedule congestion but does not explicitly analyze the exact rest disparity or timing impact.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Completely ignores scheduling, rest advantages, fatigue, or timing context entirely, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Data Contradiction Resolution</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Measures how the model handles conflicting information (e.g., differing scores, audience vs critic scores, conflicting odds) found during the search.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Actively identifies conflicting data points and cross-references multiple independent sources to determine the correct ground truth.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Notices a contradiction but picks one source arbitrarily without deep verification, or just averages them out.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Blindly accepts the first piece of data found, ignoring obvious contradictions, gets derailed by bad data, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Timeline Feasibility and Math Modeling</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates whether the model calculates the mathematical or logical feasibility of an outcome within the remaining time or constraints.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly calculates the exact time or margin remaining and mathematically assesses what rate of change or performance is required to hit the target.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Notes the deadline date or spread but does not perform a mathematical or logical check on the feasibility of the required change.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Ignores the timeline or spread requirements entirely, failing to assess if the target is mathematically realistic, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Platform Methodology and Rules Awareness</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates whether the model understands how the target metric is actually calculated on the specific platform requested.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly explains how the target metric is calculated (e.g., PriceCharting rolling averages, Billboard streaming rules, Rotten Tomatoes fresh/rotten ratio) and applies this logic to the prediction.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Mentions the target platform but assumes the metric reacts instantly or linearly without explaining the underlying calculation rules.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Fundamentally misunderstands the metric calculation, tracks the wrong platform entirely, treats it as a simple static number, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Precursor and External Catalyst Evaluation</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates the use of highly correlated preceding events or external market drivers.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Identifies specific recent or upcoming catalysts (e.g., award precursors, high-value card sales, MVP performances, first-leg results) and explicitly analyzes their historical correlation to the target outcome.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Mentions general external factors or buzz but does not tie them directly to specific, verifiable precursor events.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Evaluates the entity in a vacuum without looking at established industry precursors or external catalysts, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Outlier Identification and Filtering</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates the ability to spot and contextualize statistical anomalies or mismatched data rather than taking them at face value.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly identifies a specific data point as an outlier or anomaly (e.g., a damaged card sale, an audience score mistaken for a critic score) and adjusts the overall reasoning to exclude or downweight it.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Notes an odd or extreme data point but does not adjust the overall analysis or explicitly filter it out.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Treats all data points, including obvious extreme outliers or erroneously extracted data, as equally representative, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Expert and Algorithmic Model Aggregation</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Checks if the model consulted multiple expert forecasting algorithms or simulations to ground its prediction.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Consults 2+ distinct algorithmic or expert predictive models (e.g., KenPom, ESPN BPI, Forebet) and compares their specific projected scores, sales, or probabilities.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Consults exactly 1 expert predictive model or mentions 'computer picks' generically without specific numbers.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Relies solely on own interpretation of raw stats without consulting any external expert models or algorithms, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Market vs. Statistical Alignment</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Checks if the model compares betting market implied probabilities against raw statistical data to find discrepancies or validate the market.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Explicitly compares betting market odds/spreads against raw statistical trends or models to identify discrepancies, value, or validate the market expectation.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Retrieves both stats and odds but analyzes them in isolation without explicitly comparing them to find alignment or divergence.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Retrieves only stats or only odds, failing to cross-reference market expectations with statistical reality, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Temporal Discipline and Leakage Avoidance</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Checks if the model adheres strictly to the simulated current date without backtesting or seeking future results.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Strictly adheres to the simulated current date, explicitly tracking the timeline, using only pre-event forecasting logic, and avoiding any search for post-event results.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Shows slight confusion about the timeline but ultimately predicts based on pre-event data without explicitly checking the date.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Actively searches for the final result of a future event, uses hallucinated post-event data, violating the forecasting premise, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Counter-Evidence and Risk Exploration</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates whether the model actively sought reasons why its favored outcome or the market favorite might be wrong.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">Actively searches for and explicitly weighs specific data, arguments, or scenarios that support the opposite of their initial lean or the market favorite.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Briefly acknowledges an alternative outcome or risk factor but quickly dismisses it without deep investigation.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Exhibits extreme confirmation bias, only gathering and citing evidence that supports a single narrative, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Multi-Factor Causal Synthesis</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Measures how well multiple independent factors are integrated into a cohesive argument.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">The final conclusion explicitly integrates at least 3 distinct factors (e.g., injuries + recent form + venue + odds) into a cohesive, logical argument weighing them against each other.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">Summarizes the gathered facts sequentially but lacks a strong connective synthesis explaining how they interact or which is most dominant.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">The final conclusion relies on a single factor or is a sudden leap disconnected from the gathered evidence, or performs zero investigation.</span></div></div>
</details>
<details style="border-bottom:1px solid #E8E6E3">
<summary style="padding:11px 20px 11px 16px;cursor:pointer;font-size:13px;font-weight:600;color:#1A1A1A;background:#FAF9F7;list-style:none;display:flex;align-items:center;gap:9px;user-select:none"><span style="color:#2C2C2E;font-size:9px;flex-shrink:0">▶</span><span style="flex:1">Probability Calibration Quality</span><span style="font-size:10px;color:#8A8A8A;font-weight:normal;white-space:nowrap">5 · 3 · 1</span></summary>
<div style="padding:14px 20px 16px;background:white;border-top:1px solid #E8E6E3"><p style="font-size:12.5px;color:#636366;margin:0 0 11px;line-height:1.6">Evaluates if the final assigned probability aligns with the mathematical strength and ambiguity of the evidence.</p><div style="display:flex;gap:10px;align-items:flex-start;background:#D5E2D0;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#1E3D22;min-width:16px;margin-top:1px;flex-shrink:0">5</span><span style="font-size:12px;color:#1E3D22;line-height:1.55">The assigned probability precisely reflects the weight of the evidence and market odds, avoiding extreme confidence (e.g., >90%) unless supported by overwhelming structural proof or math.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#FEF3E8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#6B3D1A;min-width:16px;margin-top:1px;flex-shrink:0">3</span><span style="font-size:12px;color:#6B3D1A;line-height:1.55">The probability generally aligns with the lean but is slightly overconfident or underconfident given the cited evidence and market baseline.</span></div><div style="display:flex;gap:10px;align-items:flex-start;background:#EDEBE8;border-radius:6px;padding:9px 13px;margin-bottom:5px"><span style="font-size:11px;font-weight:bold;color:#636366;min-width:16px;margin-top:1px;flex-shrink:0">1</span><span style="font-size:12px;color:#636366;line-height:1.55">Assigns extreme probabilities to highly volatile/toss-up events, arbitrarily defaults to 50/50 despite clear directional evidence, or provides probabilities with zero investigation.</span></div></div>
</details>
</div>

<script>
var _eRC=['#2C2C2E','#2C2C2E'];
function echoRTab(n){for(var i=0;i<2;i++){var t=document.getElementById('eRTab'+i),p=document.getElementById('eRPanel'+i);t.style.background=i===n?_eRC[i]:'#EDEBE8';t.style.color=i===n?'white':'#636366';t.style.fontWeight=i===n?'bold':'normal';p.style.display=i===n?'block':'none';}}
</script>

<hr />

<h2 id="performance-analysis">Performance Analysis</h2>

<h3>Ranking Robustness Across Sensitivity Parameters</h3>

<p>In the Elo framework, the parameter &sigma; controls how Brier Score differences between two models are converted into win probabilities. When &sigma; is small, a small Brier Score difference can produce a win probability close to 0 or 1, meaning that even a slightly better Brier Score on one question can strongly influence the battle outcome. When &sigma; is large, the same difference produces a win probability closer to 0.5, and the ranking depends more on the number of battles won than on the size of each score gap.</p>

<p>The default value used in our framework is &sigma; = 0.10. To check how much the ranking changes when &sigma; varies, we sweep 9 values across &sigma; &isin; [0.01, 0.50]. At each &sigma;, we recompute the full Bradley&ndash;Terry ranking from all battles using the same data. For each model, we record its highest and lowest rank across the 9 evaluation settings.</p>

<div class="ec-result">
<strong>Result:</strong> EchoZ is the most stable, staying at <strong>#1</strong> across the entire &sigma; range. Gemini-3.1-Pro fluctuates within <strong>#2&ndash;#3</strong>. Most other models fluctuate within 2&ndash;3 positions. GPT-5.2 shows the widest range at <strong>#2&ndash;#9</strong> (8 positions). Overall, the ranking order is consistent across all evaluated &sigma; values, with position changes concentrated in adjacent ranks.
</div>

<div style="text-align:center;margin:24px 0">
<img src="/static/images/prediction/sigma_sensitivity.png" alt="Sigma Sensitivity" style="max-width:100%;border-radius:8px">
</div>


<h3>Win Rate Against the Human Market</h3>

<p>Each battle compares EchoZ with the human market on the same question within the same prediction batch. Win rate is then computed by Brier Score and stratified by domain (Politics &amp; Governance), forecast horizon (7+ days ahead), and market certainty (human confidence 55%&ndash;70%).</p>

<div class="ec-horizon-stats">
<div class="ec-horizon-card ec-horizon-accent">
<div class="ec-horizon-label">Politics &amp; Governance</div>
<div class="ec-horizon-num">63.2%</div>
</div>
<div class="ec-horizon-card ec-horizon-accent">
<div class="ec-horizon-label">Long-Term &middot; 7+ d</div>
<div class="ec-horizon-num">59.3%</div>
</div>
<div class="ec-horizon-card ec-horizon-accent">
<div class="ec-horizon-label">Market Uncertain</div>
<div class="ec-horizon-num">57.9%</div>
</div>
</div>


<h2 id="ai-native-prediction-api-echoz-10-in-production">AI-Native Prediction API</h2>


<p>We are building an AI-native prediction API around EchoZ-1.0. Given a structured prediction question, the API is designed to return a fully grounded analytic report: a direct probabilistic answer, a stratified evidence base with source attribution, a counterfactual fragility assessment, monitoring recommendations, and a complete structured prediction record — each synthesised through a multi-round Map-Reduce agent cycle over live web evidence. The sample outputs below preview what a response looks like across the full domain taxonomy.</p>



<h3>Sample API Output</h3>

<div class="ec-tabs-bar" id="ec-domain-tabs">
<button class="ec-tab-btn active" data-tab="finance"><span class="ec-tab-dot" style="background:#A63D38"></span>Finance</button>
<button class="ec-tab-btn" data-tab="politics"><span class="ec-tab-dot" style="background:#8B3A36"></span>Politics</button>
<button class="ec-tab-btn" data-tab="crypto"><span class="ec-tab-dot" style="background:#B5605B"></span>Crypto</button>
<button class="ec-tab-btn" data-tab="sports"><span class="ec-tab-dot" style="background:#C4807B"></span>Sports</button>
<button class="ec-tab-btn" data-tab="esports"><span class="ec-tab-dot" style="background:#D4A09C"></span>Esports</button>
</div>
<div class="ec-tab-panels tex2jax_ignore">

<div class="ec-tab-panel active" data-panel="finance">
<div class="ec-case">
<div class="ec-case-header">
<span class="ec-badge ec-badge-finance">Economy &amp; Finance</span>
<span class="ec-case-date">Prediction Date: 2026-03-18</span>
</div>
<p class="ec-case-question"><strong>Question:</strong> Which company will be the largest company in the world by market cap at market close ET on March 31, 2026?</p>
<div class="ec-case-options"><span class="ec-case-option-tag">NVIDIA</span><span class="ec-case-option-tag">Apple</span><span class="ec-case-option-tag">Tesla</span><span class="ec-case-option-tag">Amazon</span><span class="ec-case-option-tag">Microsoft</span><span class="ec-case-option-tag">Alphabet</span><span class="ec-case-option-tag">Saudi Aramco</span></div>
<div class="ec-case-body">
<div>
<p><strong>Direct Answer:</strong> <span class="ec-answer-highlight">NVIDIA</span> &nbsp;|&nbsp; <span class="ec-conf-tag">Confidence: High</span></p>
<p class="ec-case-section-title">Probability Distribution</p>
<table class="ec-table">
<tr><th>Candidate</th><th>Probability</th></tr>
<tr><td><strong>NVIDIA</strong></td><td><strong>0.98</strong></td></tr>
<tr><td>Alphabet</td><td>0.01</td></tr>
<tr><td>Apple</td><td>0.01</td></tr>
<tr><td>Tesla / Amazon / Microsoft / Saudi Aramco</td><td>0.00</td></tr>
</table>
</div>
<div class="ec-confidence-box">
<p><strong>Confidence Rationale</strong></p>
<p>Driven by an insurmountable ~$700B mathematical buffer, combined with consistent market data showing low options volatility, resolved regulatory risks, and robust prediction market consensus (~98.7%).</p>
</div>
</div>
<p class="ec-case-section-title">Evidence Base</p>
<table class="ec-table ec-table-evidence">
<tr><th>Evidence</th><th>Why Decisive</th><th>Role</th></tr>
<tr><td>NVIDIA market cap ~$4.43T&ndash;$4.45T; ~$700B premium over Alphabet ($3.74T) and Apple ($3.71T)</td><td>A $700B gap is mathematically insurmountable in 9 trading days absent a historic catalyst</td><td><strong>Direct</strong></td></tr>
<tr><td>U.S. Commerce Dept. withdrew sweeping AI chip export rule on March 13, 2026</td><td>Eliminates the most significant regulatory headwind before the target date</td><td>Supporting</td></tr>
<tr><td>Options market implies &plusmn;1.98% expected move heading into March 20 Triple Witching</td><td>Derivatives markets are not pricing in a gamma crash that could erase the 15%+ lead</td><td>Supporting</td></tr>
<tr><td>Qatar helium facility shutdown: supply chain risk, but TSMC has not halted production</td><td>Macro supply chain risk has not materialised into an acute factory shutdown</td><td>Supporting</td></tr>
<tr><td>Polymarket assigns ~98.7% probability to NVIDIA remaining #1</td><td>Reflects overwhelming market consensus consistent with mathematical realities</td><td>Supporting</td></tr>
</table>
<p class="ec-case-counterfactual"><strong>Counterfactual</strong> &nbsp; Fragility: <strong>Low</strong> &mdash; A broad macro shock would impact the entire technology sector concurrently, preserving NVIDIA's relative lead. Only an idiosyncratic NVIDIA-specific Black Swan (e.g., C-suite fraud revelation, SEC trading halt) could reverse the prediction.</p>
<p class="ec-case-monitoring"><strong>Monitoring Recommendations:</strong> Closing volumes and options volatility on March 20 Triple Witching &middot; Qatar helium shortage escalation and TSMC production-halt risk &middot; Unexpected idiosyncratic NVIDIA news &middot; Unlikely megamerger announcements from Alphabet or Apple</p>
</div>
</div>

<div class="ec-tab-panel" data-panel="politics">
<div class="ec-case">
<div class="ec-case-header">
<span class="ec-badge ec-badge-politics">Politics &amp; Governance</span>
<span class="ec-case-date">Prediction Date: 2026-03-18</span>
</div>
<p class="ec-case-question"><strong>Question:</strong> Who will win the 2026 Illinois Governor Republican primary election?</p>
<div class="ec-case-options"><span class="ec-case-option-tag">Darren Bailey</span><span class="ec-case-option-tag">Rick Heidner</span><span class="ec-case-option-tag">Gregg Moore</span><span class="ec-case-option-tag">Max Solomon</span><span class="ec-case-option-tag">Ted Dabrowski</span><span class="ec-case-option-tag">James Mendrick</span><span class="ec-case-option-tag">Joseph Severino</span><span class="ec-case-option-tag">Other</span></div>
<div class="ec-case-body">
<div>
<p><strong>Direct Answer:</strong> <span class="ec-answer-highlight">Darren Bailey</span> &nbsp;|&nbsp; <span class="ec-conf-tag">Confidence: High</span></p>
<p class="ec-case-section-title">Probability Distribution</p>
<table class="ec-table">
<tr><th>Candidate</th><th>Probability</th></tr>
<tr><td><strong>Darren Bailey</strong></td><td><strong>0.9990</strong></td></tr>
<tr><td>Ted Dabrowski</td><td>0.0004</td></tr>
<tr><td>Rick Heidner / James Mendrick</td><td>0.0001 each</td></tr>
<tr><td>Gregg Moore / Max Solomon / Joseph Severino / Other</td><td>0.0001 each</td></tr>
</table>
</div>
<div class="ec-confidence-box">
<p><strong>Confidence Rationale</strong></p>
<p>Multiple authoritative media decision desks called the race; lead is mathematically certain (137K votes vs. ~34K remaining); legal challenges barred by the 95% vote-share threshold under Illinois election law.</p>
</div>
</div>
<p class="ec-case-section-title">Evidence Base</p>
<table class="ec-table ec-table-evidence">
<tr><th>Evidence</th><th>Why Decisive</th><th>Role</th></tr>
<tr><td>AP, NBC, CBS, NYT declared Bailey winner on the night of March 17, 2026</td><td>Consensus among major national media decision desks is the primary indicator of a resolved result</td><td><strong>Direct</strong></td></tr>
<tr><td>Bailey holds 298,844 votes (53.5%) vs. Dabrowski's 161,087 (28.8%); lead of 137,757 vs. ~34,000 remaining</td><td>Margin is ~4&times; remaining uncounted ballots; reversal is mathematically impossible</td><td><strong>Direct</strong></td></tr>
<tr><td>Illinois law (10 ILCS 5/22-9.1) requires runner-up &ge; 95% of winner's total for discovery recount; Dabrowski at ~54%</td><td>Eliminates any legal pathway for challenging the result via recount</td><td>Supporting</td></tr>
<tr><td>Illinois Republican Party Chairman officially congratulated Bailey</td><td>Institutional recognition confirms Bailey as presumptive nominee</td><td>Supporting</td></tr>
<tr><td>Moore and Severino were removed from the ballot in January 2026; Solomon ran for State Treasurer</td><td>Confirms multiple listed options were not viable gubernatorial candidates</td><td>Supporting</td></tr>
</table>
<p class="ec-case-counterfactual"><strong>Counterfactual</strong> &nbsp; Fragility: <strong>Low</strong> &mdash; Only reversal scenario: sudden death or legal disqualification of Bailey prior to official certification (~April 7, 2026). Even then, Bailey would still have won the primary; Illinois Election Code Section 7-61 directs the Republican State Central Committee to fill the vacancy.</p>
<p class="ec-case-monitoring"><strong>Monitoring Recommendations:</strong> Illinois State Board of Elections certification on/around April 7, 2026 &middot; Breaking news regarding Bailey's health or legal eligibility prior to certification</p>
</div>
</div>

<div class="ec-tab-panel" data-panel="crypto">
<div class="ec-case">
<div class="ec-case-header">
<span class="ec-badge ec-badge-crypto">Crypto &amp; Digital Assets</span>
<span class="ec-case-date">Prediction Date: 2026-03-18</span>
</div>
<p class="ec-case-question"><strong>Question:</strong> Will Ethereum (ETH/USDT on Binance) reach a new all-time high price by 11:59 PM ET on March 31, 2026?</p>
<div class="ec-case-options"><span class="ec-case-option-tag">Yes</span><span class="ec-case-option-tag">No</span></div>
<div class="ec-case-body">
<div>
<p><strong>Direct Answer:</strong> <span class="ec-answer-highlight">No</span> &nbsp;|&nbsp; <span class="ec-conf-tag">Confidence: High</span></p>
<p class="ec-case-section-title">Probability Distribution</p>
<table class="ec-table">
<tr><th>Outcome</th><th>Probability</th></tr>
<tr><td><strong>No</strong></td><td><strong>0.99</strong></td></tr>
<tr><td>Yes</td><td>0.01</td></tr>
</table>
</div>
<div class="ec-confidence-box">
<p><strong>Confidence Rationale</strong></p>
<p>Overwhelming mathematical improbability of a 112%+ gain in 13 days, combined with strong macroeconomic headwinds (Fed holding rates at 3.50%&ndash;3.75%, US-Iran conflict) and unanimous prediction market consensus.</p>
</div>
</div>
<p class="ec-case-section-title">Evidence Base</p>
<table class="ec-table ec-table-evidence">
<tr><th>Evidence</th><th>Why Decisive</th><th>Role</th></tr>
<tr><td>ETH/USDT ATH: $4,956.78</td><td>Establishes the exact target price required for &ldquo;Yes&rdquo; resolution</td><td><strong>Direct</strong></td></tr>
<tr><td>Current price: ~$2,220&ndash;$2,340; requires ~112%&ndash;123% gain in 13 days</td><td>Establishes the baseline against which the target is assessed</td><td><strong>Direct</strong></td></tr>
<tr><td>USDT peg holds at $1.00; Binance order book deeply liquid ($35M at 2% depth)</td><td>Mathematically rules out artificial nominal price spike via Tether collapse or flash wick</td><td><strong>Direct</strong></td></tr>
<tr><td>Federal Reserve held rates steady at 3.50%&ndash;3.75% on March 18 amid US-Iran conflict</td><td>Confirms restrictive macroeconomic environment suppressing risk-asset parabolic rallies</td><td>Supporting</td></tr>
<tr><td>Polymarket assigns &lt;1% probability to ATH by end of March</td><td>Demonstrates unanimous market consensus that the event is functionally impossible</td><td>Supporting</td></tr>
</table>
<p class="ec-case-counterfactual"><strong>Counterfactual</strong> &nbsp; Fragility: <strong>Low</strong> &mdash; The only viable reversal would be a catastrophic Tether peg collapse (&gt;50% overnight), which would mathematically double the nominal ETH/USDT price. Given Tether's current profitability, regulatory cooperation, and strict auditing, this scenario is exceptionally unlikely.</p>
<p class="ec-case-monitoring"><strong>Monitoring Recommendations:</strong> USDT peg stability for catastrophic deviations from $1.00 &middot; Binance ETH/USDT order book and matching engine anomalies through March 31 &middot; Emergency Federal Reserve weekend liquidity interventions</p>
</div>
</div>

<div class="ec-tab-panel" data-panel="sports">
<div class="ec-case">
<div class="ec-case-header">
<span class="ec-badge ec-badge-sports">Sports &amp; Entertainment</span>
<span class="ec-case-date">Prediction Date: 2026-03-18</span>
</div>
<p class="ec-case-question"><strong>Question:</strong> Which team will finish as the #1 seed in the 2025&ndash;26 NBA Western Conference by the conclusion of the regular season on April 12, 2026?</p>
<div class="ec-case-options"><span class="ec-case-option-tag">15-team Western Conference field</span></div>
<div class="ec-case-body">
<div>
<p><strong>Direct Answer:</strong> <span class="ec-answer-highlight">Oklahoma City Thunder</span> &nbsp;|&nbsp; <span class="ec-conf-tag">Confidence: High</span></p>
<p class="ec-case-section-title">Probability Distribution</p>
<table class="ec-table">
<tr><th>Team</th><th>Probability</th></tr>
<tr><td><strong>Oklahoma City Thunder</strong></td><td><strong>0.899</strong></td></tr>
<tr><td>San Antonio Spurs</td><td>0.100</td></tr>
<tr><td>Los Angeles Lakers</td><td>0.001</td></tr>
<tr><td>All others</td><td>0.000</td></tr>
</table>
</div>
<div class="ec-confidence-box">
<p><strong>Confidence Rationale</strong></p>
<p>Mathematical standings advantage (3.0-game lead with 13 games remaining), OKC primary stars healthy, magic number only 11, and SAS facing the league's toughest remaining schedule.</p>
</div>
</div>
<p class="ec-case-section-title">Evidence Base</p>
<table class="ec-table ec-table-evidence">
<tr><th>Evidence</th><th>Why Decisive</th><th>Role</th></tr>
<tr><td>OKC (54&ndash;15) leads SAS (51&ndash;18) by 3.0 games; both have 13 games remaining</td><td>Establishes OKC's commanding mathematical advantage</td><td><strong>Direct</strong></td></tr>
<tr><td>SAS holds head-to-head tiebreaker (season series 4&ndash;1 over OKC)</td><td>SAS needs only to tie OKC's final record &mdash; not pass them</td><td><strong>Direct</strong></td></tr>
<tr><td>SAS faces the #1 toughest remaining schedule in the NBA (.560 opponent win %)</td><td>Makes a flawless run required to close a 3-game deficit extremely difficult</td><td><strong>Direct</strong></td></tr>
<tr><td>OKC's magic number to clinch the #1 seed outright: 11</td><td>OKC requires only moderate success to mathematically lock the seed</td><td><strong>Direct</strong></td></tr>
<tr><td>LA Lakers (43&ndash;25) have a max possible 57 wins; OKC currently has 54</td><td>Confirms this is a two-team race</td><td>Supporting</td></tr>
</table>
<p class="ec-case-counterfactual"><strong>Counterfactual</strong> &nbsp; Fragility: <strong>Low</strong> &mdash; For SAS to steal the seed, a season-ending injury to Shai Gilgeous-Alexander or Chet Holmgren would need to trigger an OKC collapse while SAS runs the table against the league's hardest schedule.</p>
<p class="ec-case-monitoring"><strong>Monitoring Recommendations:</strong> Outcome of NBA investigation into OKC resting 10 players (potential multi-game suspension) &middot; Daily injury and rest status of Victor Wembanyama (ankle soreness) &middot; San Antonio's performance during their early-April stretch against motivated playoff contenders</p>
</div>
</div>

<div class="ec-tab-panel" data-panel="esports">
<div class="ec-case">
<div class="ec-case-header">
<span class="ec-badge ec-badge-esports">Esports &amp; Gaming</span>
<span class="ec-case-date">Prediction Date: 2026-03-18</span>
</div>
<p class="ec-case-question"><strong>Question:</strong> Will another official trailer for Grand Theft Auto VI (GTA VI) be released by Rockstar Games or any of its official accounts by 11:59 PM ET on March 31, 2026?</p>
<div class="ec-case-options"><span class="ec-case-option-tag">Yes</span><span class="ec-case-option-tag">No</span></div>
<div class="ec-case-body">
<div>
<p><strong>Direct Answer:</strong> <span class="ec-answer-highlight">No</span> &nbsp;|&nbsp; <span class="ec-conf-tag">Confidence: High</span></p>
<p class="ec-case-section-title">Probability Distribution</p>
<table class="ec-table">
<tr><th>Outcome</th><th>Probability</th></tr>
<tr><td><strong>No</strong></td><td><strong>0.96</strong></td></tr>
<tr><td>Yes</td><td>0.04</td></tr>
</table>
</div>
<div class="ec-confidence-box">
<p><strong>Confidence Rationale</strong></p>
<p>Explicit corporate guidance directly contradicts a March timeline; absence of required technical and operational precursors; unanimous insider and market consensus against a March release.</p>
</div>
</div>
<p class="ec-case-section-title">Evidence Base</p>
<table class="ec-table ec-table-evidence">
<tr><th>Evidence</th><th>Why Decisive</th><th>Role</th></tr>
<tr><td>Take-Two CEO Strauss Zelnick explicitly stated GTA VI marketing begins Summer 2026 (Q3 2026 earnings call)</td><td>Explicit corporate guidance directly contradicts a March release timeline</td><td><strong>Direct</strong></td></tr>
<tr><td>As of March 18, Rockstar has not initiated its traditional 48&ndash;72 hour teaser protocol (logo changes, social media blackouts)</td><td>A digital teaser protocol is a historically required precursor to any major Rockstar trailer drop</td><td><strong>Direct</strong></td></tr>
<tr><td>ESRB rating remains &ldquo;Rating Pending&rdquo;; storefronts show only &ldquo;Wishlist&rdquo; functionality without active pre-orders</td><td>Backend prerequisites for a major trailer launch remain incomplete</td><td><strong>Direct</strong></td></tr>
<tr><td>Rockstar posted a three-week GTA Online roadmap concluding on April 1, 2026</td><td>Creates a clean schedule gap only after the prediction window closes</td><td>Supporting</td></tr>
<tr><td>Tier-1 industry insiders (e.g., Tom Henderson) predict next GTA VI trailer in August 2026</td><td>Credible leaks corroborate the corporate Summer 2026 marketing timeline</td><td>Supporting</td></tr>
<tr><td>Polymarket traders assess probability of a March 31 trailer release at 4%</td><td>Strong financial and crowd-sourced consensus against a March release</td><td>Supporting</td></tr>
</table>
<p class="ec-case-counterfactual"><strong>Counterfactual</strong> &nbsp; Fragility: <strong>Low</strong> &mdash; Reversal requires Take-Two to have deliberately misled investors during their Q3 earnings call and executed an unprecedented unannounced shadow-drop on March 31. If a sudden Rockstar social media blackout or unscheduled investor call materialised in the final week of March, &ldquo;Yes&rdquo; probability would rapidly exceed 80%.</p>
<p class="ec-case-monitoring"><strong>Monitoring Recommendations:</strong> Rockstar official social media accounts for blackout protocols or logo changes in the final week of March &middot; Internal YouTube API watchers or backend pre-order staging leaks &middot; Unexpected SEC 8-K filings from Take-Two Interactive prior to March 31</p>
</div>
</div>
</div>

<hr />

<h3>Report Quality Assessment</h3>

<p>The five case studies span the complete domain taxonomy — macroeconomic structure, electoral dynamics, digital asset markets, professional sports, and the entertainment industry — and collectively demonstrate that EchoZ-1.0 reports exhibit four defining qualities:</p>

<div class="ec-quality-grid">
<div class="ec-quality-card">
<div class="ec-q-title">① Evidence Granularity</div>
<div class="ec-q-body">Each report identifies 4&ndash;6 distinct evidential items, assigns each a role classification (direct vs. supporting), links to verifiable primary sources, and articulates precisely why the evidence is decisive for the prediction.</div>
</div>
<div class="ec-quality-card">
<div class="ec-q-title">② Probabilistic Rigour</div>
<div class="ec-q-body">Probability assignments are accompanied by explicit rationales anchored in quantitative constraints (mathematical gaps, statistical baselines, market consensus) rather than intuitive assertions. Residual probability mass is allocated with transparent justification.</div>
</div>
<div class="ec-quality-card">
<div class="ec-q-title">③ Counterfactual Completeness</div>
<div class="ec-q-body">Every report includes a structured fragility assessment identifying the specific scenario that would reverse the prediction, enabling users to monitor for that precise signal rather than managing generic uncertainty.</div>
</div>
<div class="ec-quality-card">
<div class="ec-q-title">④ Actionable Monitoring</div>
<div class="ec-q-body">Each report concludes with concrete, time-stamped monitoring items derived from identified investigation gaps, translating prediction uncertainty into a structured surveillance agenda.</div>
</div>
</div>

<hr />

<h2 id="future-work">Conclusion</h2>

<p>Echo constitutes a self-consistent prediction intelligence architecture in which the evaluation engine, training paradigm, and production API are mutually reinforcing rather than independently constructed. The multi-point aligned Elo framework resolves the timing-asymmetry and cold-start deficiencies that plague aggregated Brier Score approaches; the Train-on-Future pipeline breaks the engineering paradox of leak-free backtesting and substitutes outcome-oriented noise with behaviour-oriented signal; the Map-Reduce agent architecture translates the trained model's causal reasoning capacity into structured, evidence-grounded reports. EchoZ-1.0 consistently outperforms the human market across domains, forecast horizons, and market certainty levels, positioning it as a substantively capable forecasting agent across the full spectrum of domain-diverse prediction tasks.</p>

<div class="ec-cite-block">
<h3>Citation</h3>
<p>If you find Echo useful in your research, please kindly cite:</p>
<div class="ec-cite-bib-wrap">
<button class="ec-cite-copy-btn" id="ec-cite-copy" onclick="(function(btn){var t=document.getElementById('ec-cite-bib').textContent;function done(){btn.innerHTML='&#10003; Copied';btn.classList.add('copied');setTimeout(function(){btn.innerHTML='Copy';btn.classList.remove('copied')},2000)}if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(done)}else{var a=document.createElement('textarea');a.value=t;a.style.position='fixed';a.style.left='-9999px';document.body.appendChild(a);a.select();document.execCommand('copy');document.body.removeChild(a);done()}})(this)">Copy</button>
<pre id="ec-cite-bib">@misc{unipat2026echo,
  title   = {Echo: Towards General AI Prediction},
  author  = {UniPat AI},
  year    = {2026},
  url     = {https://unipat.ai/blog/Echo}
}</pre>
</div>
</div>

<!-- Floating Table of Contents -->
<nav class="ec-toc" id="ec-toc">
<div class="ec-toc-toggle" id="ec-toc-toggle" title="Toggle Table of Contents">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
<div class="ec-toc-title">On This Page</div>
<div class="ec-toc-progress"><div class="ec-toc-progress-bar" id="ec-progress"></div></div>
<ul class="ec-toc-list">
<li class="ec-toc-item"><a href="#introduction" class="ec-toc-link">Introduction</a></li>
<li class="ec-toc-item"><a href="#echo-leaderboard" class="ec-toc-link">General AI Prediction Leaderboard</a></li>
<li class="ec-toc-item"><a href="#echoz-10-train-on-the-future" class="ec-toc-link">EchoZ-1.0</a></li>
<li class="ec-toc-item"><a href="#performance-analysis" class="ec-toc-link">Performance Analysis</a></li>
<li class="ec-toc-item"><a href="#ai-native-prediction-api-echoz-10-in-production" class="ec-toc-link">Prediction API</a></li>
<li class="ec-toc-item"><a href="#future-work" class="ec-toc-link">Conclusion</a></li>
</ul>
</nav>

<script>
/* Domain Case Studies tab switching */
(function() {
    function initTabs() {
        var tabs = document.querySelectorAll('.ec-tab-btn');
        var panels = document.querySelectorAll('.ec-tab-panel');
        if (!tabs.length) return;
        tabs.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var target = this.getAttribute('data-tab');
                tabs.forEach(function(t) { t.classList.remove('active'); });
                panels.forEach(function(p) { p.classList.remove('active'); });
                this.classList.add('active');
                var panel = document.querySelector('.ec-tab-panel[data-panel="' + target + '"]');
                if (panel) panel.classList.add('active');
            });
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTabs);
    } else { initTabs(); }
})();

(function() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTOC);
    } else {
        initTOC();
    }

    function initTOC() {
        var toc = document.getElementById('ec-toc');
        var progressBar = document.getElementById('ec-progress');
        var tocLinks = document.querySelectorAll('.ec-toc-link');
        var tocToggle = document.getElementById('ec-toc-toggle');

        if (!toc || !progressBar || tocLinks.length === 0) return;

        if (tocToggle) {
            tocToggle.addEventListener('click', function() {
                toc.classList.toggle('collapsed');
            });
        }

        function adjustTOCSize() {
            if (!toc) return;
            var containerMaxWidth = 980;
            var containerWidth = Math.min(containerMaxWidth, window.innerWidth * 0.9);
            var availableSpace = (window.innerWidth - containerWidth) / 2;
            if (availableSpace < 100) {
                toc.style.display = 'none';
            } else {
                toc.style.display = '';
                var optimalWidth = Math.min(200, availableSpace - 20);
                toc.style.width = Math.max(160, optimalWidth) + 'px';
                toc.style.right = Math.max(5, availableSpace - optimalWidth - 15) + 'px';
            }
        }

        adjustTOCSize();
        window.addEventListener('resize', adjustTOCSize);

        var headings = [];
        tocLinks.forEach(function(link) {
            var id = link.getAttribute('href').substring(1);
            var heading = document.getElementById(id);
            if (heading) {
                headings.push({ id: id, element: heading, link: link });
            }
        });

        function updateActiveSection() {
            var scrollPos = window.scrollY + 150;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var progress = Math.min((window.scrollY / docHeight) * 100, 100);
            progressBar.style.width = progress + '%';

            var currentSection = null;
            for (var i = headings.length - 1; i >= 0; i--) {
                if (headings[i].element.offsetTop <= scrollPos) {
                    currentSection = headings[i];
                    break;
                }
            }

            tocLinks.forEach(function(link) { link.classList.remove('active'); });
            if (currentSection) {
                currentSection.link.classList.add('active');
            }
        }

        tocLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var id = this.getAttribute('href').substring(1);
                var target = document.getElementById(id);
                if (target) {
                    window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
                }
            });
        });

        var ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateActiveSection();
                    ticking = false;
                });
                ticking = true;
            }
        });

        updateActiveSection();
    }
})();
</script>
