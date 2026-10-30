Title: ExpertEval: Can AI Match the Judgment of Seasoned Professionals?
Date: 2026-05-06
Summary: ExpertEval is a large-scale, expert-annotated evaluation infrastructure spanning Medicine, Finance, and Law. We measure productive intelligence: the capacity to reason under genuine professional constraints where errors carry irreversible consequences.
HeaderImage: /static/images/ExpertEval/logo2.jpg


<style>
/* ============================================
   Expert Dataset Blog Styles - Scoped with ex- prefix
   Enhanced Edition — Scientific Elegance
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

/* --- Design Tokens --- */
:root {
    --ex-font-display: 'Crimson Pro', 'Georgia', serif;
    --ex-font-body: 'DM Sans', 'Segoe UI', sans-serif;
    --ex-font-mono: 'JetBrains Mono', ui-monospace, monospace;
    --ex-ink: #0c1222;
    --ex-ink-soft: #334155;
    --ex-ink-muted: #64748b;
    --ex-surface: #ffffff;
    --ex-surface-raised: #f8fafc;
    --ex-surface-sunken: #f1f5f9;
    --ex-border-subtle: #e2e8f0;
    --ex-accent-primary: #0d9488;
    --ex-accent-secondary: #2dd4bf;
    --ex-accent-warm: #0f766e;
    --ex-accent-deep: #134e4a;
    --ex-accent-light: #5eead4;
    --ex-accent-bg: #f0fdfa;
    --ex-radius-sm: 8px;
    --ex-radius-md: 14px;
    --ex-radius-lg: 20px;
    --ex-shadow-sm: 0 1px 3px rgba(15,23,42,0.04), 0 1px 2px rgba(15,23,42,0.06);
    --ex-shadow-md: 0 4px 16px rgba(15,23,42,0.06), 0 2px 4px rgba(15,23,42,0.04);
    --ex-shadow-lg: 0 12px 40px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04);
    --ex-shadow-glow: 0 0 60px rgba(13,148,136,0.08);
}

/* --- Animations --- */
@keyframes ex-fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
}

@keyframes ex-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@keyframes ex-slideInLeft {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
}

@keyframes ex-scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to   { opacity: 1; transform: scale(1); }
}

@keyframes ex-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
}

@keyframes ex-pulse-soft {
    0%, 100% { opacity: 0.4; }
    50%      { opacity: 0.7; }
}

@keyframes ex-float {
    0%, 100% { transform: translateY(0px); }
    50%      { transform: translateY(-6px); }
}

.ex-animate {
    opacity: 0;
    animation: ex-fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.ex-animate-delay-1 { animation-delay: 0.1s; }
.ex-animate-delay-2 { animation-delay: 0.2s; }
.ex-animate-delay-3 { animation-delay: 0.3s; }
.ex-animate-delay-4 { animation-delay: 0.4s; }

@media (prefers-reduced-motion: reduce) {
    .ex-animate, [class*="ex-animate"] {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
    }
}

/* --- Section Divider --- */
.ex-section-rule {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--ex-border-subtle) 20%, var(--ex-accent-primary) 50%, var(--ex-border-subtle) 80%, transparent);
    margin: 56px 0;
    opacity: 0.5;
}

/* --- Hero --- */
.ex-hero {
    text-align: center;
    padding: 28px 0 48px;
    margin-bottom: 10px;
    position: relative;
}

.ex-hero::before {
    content: '';
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(13,148,136,0.06) 0%, rgba(45,212,191,0.03) 40%, transparent 70%);
    pointer-events: none;
    z-index: 0;
}

.ex-hero > * {
    position: relative;
    z-index: 1;
}

.ex-hero .ex-tagline {
    font-family: var(--ex-font-display);
    font-size: 1.55em;
    font-weight: 300;
    color: var(--ex-ink-soft);
    max-width: 820px;
    margin: 0 auto 28px;
    line-height: 1.55;
    letter-spacing: 0.01em;
    font-style: italic;
    animation: ex-fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.ex-hero .ex-subtitle {
    font-family: var(--ex-font-body);
    font-size: 1.0em;
    color: var(--ex-ink-muted);
    max-width: 780px;
    margin: 0 auto 0;
    line-height: 1.7;
}

/* --- Stats Grid --- */
.ex-stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin: 34px 0;
}

@media (max-width: 640px) {
    .ex-stats-grid {
        grid-template-columns: 1fr;
        gap: 14px;
    }
}

.ex-stat-card {
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    border: 1px solid #e2e8f0;
    border-radius: var(--ex-radius-md);
    padding: 14px 16px 16px 16px;
    text-align: center;
    box-shadow: var(--ex-shadow-sm);
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease;
}

.ex-stat-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--ex-accent-warm) 0%, var(--ex-accent-primary) 100%);
    transition: height 0.3s ease;
}

.ex-stat-card:hover {
    transform: translateY(-4px);
    border-color: #cbd5e1;
    box-shadow: var(--ex-shadow-lg);
}

.ex-stat-card:hover::before {
    height: 4px;
}

.ex-stat-card:nth-child(2)::before {
    background: linear-gradient(90deg, var(--ex-accent-primary) 0%, var(--ex-accent-secondary) 100%);
}

.ex-stat-card:nth-child(3)::before {
    background: linear-gradient(90deg, var(--ex-accent-secondary) 0%, var(--ex-accent-light) 100%);
}

.ex-stat-number {
    font-family: var(--ex-font-display);
    font-size: 2.2em;
    font-weight: 800;
    color: var(--ex-ink);
    margin-bottom: 4px;
    line-height: 1.1;
    background: linear-gradient(135deg, var(--ex-accent-primary), var(--ex-accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.ex-stat-label {
    font-family: var(--ex-font-body);
    font-size: 0.76em;
    font-weight: 700;
    color: #334155;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    margin-bottom: 8px;
}

.ex-stat-note {
    font-family: var(--ex-font-body);
    font-size: 0.8em;
    color: var(--ex-ink-muted);
    line-height: 1.45;
}

/* --- Insight Banner (dark) --- */
.ex-insight-banner {
    background: linear-gradient(135deg, #021d1a 0%, #134e4a 50%, #021d1a 100%);
    border-radius: var(--ex-radius-lg);
    padding: 36px 40px;
    margin: 44px 0;
    color: #f1f5f9;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(2,44,34,0.3);
}

.ex-insight-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(13,148,136,0.4) 30%, rgba(45,212,191,0.4) 70%, transparent);
}

.ex-insight-banner::after {
    content: '';
    position: absolute;
    top: -60%;
    right: -15%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(13,148,136,0.14) 0%, rgba(45,212,191,0.07) 40%, transparent 70%);
    border-radius: 50%;
    animation: ex-pulse-soft 6s ease-in-out infinite;
}

.ex-insight-banner h3 {
    font-family: var(--ex-font-display);
    font-size: 1.25em;
    margin: 0 0 16px 0;
    color: #e2e8f0;
    letter-spacing: 0.3px;
    font-weight: 600;
}

.ex-insight-banner p {
    font-family: var(--ex-font-body);
    font-size: 0.95em;
    line-height: 1.85;
    color: #cbd5e1;
    margin: 0;
    position: relative;
    z-index: 1;
}

.ex-insight-banner strong {
    color: #5eead4;
}

.ex-insight-banner em {
    color: #2dd4bf;
    font-style: normal;
    font-weight: 600;
}

/* --- Vision Cards (domain cards) --- */
.ex-vision-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 36px 0;
}

@media (max-width: 768px) {
    .ex-vision-grid {
        grid-template-columns: 1fr;
    }
}

.ex-vision-card {
    border: 1px solid var(--ex-border-subtle);
    border-radius: var(--ex-radius-md);
    padding: 28px 24px;
    background: var(--ex-surface);
    transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
}

.ex-vision-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    transition: height 0.35s ease;
}

.ex-vision-card:nth-child(1)::before { background: linear-gradient(90deg, #134e4a, #0d9488); }
.ex-vision-card:nth-child(2)::before { background: linear-gradient(90deg, #0d9488, #2dd4bf); }
.ex-vision-card:nth-child(3)::before { background: linear-gradient(90deg, #2dd4bf, #5eead4); }

.ex-vision-card:hover {
    box-shadow: var(--ex-shadow-lg);
    transform: translateY(-4px);
    border-color: transparent;
}

.ex-vision-card:hover::before {
    height: 4px;
}

.ex-vision-card h4 {
    font-family: var(--ex-font-body);
    font-size: 1.02em;
    font-weight: 700;
    margin: 0 0 10px 0;
    color: var(--ex-ink);
}

.ex-vision-card p {
    font-family: var(--ex-font-body);
    font-size: 0.9em;
    color: var(--ex-ink-muted);
    line-height: 1.7;
    margin: 0;
}

.ex-vision-card .ex-domain-count {
    font-size: 0.85em;
    color: var(--ex-accent-primary);
    font-weight: 600;
    margin-bottom: 8px;
}

.ex-scenario-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 6px;
}

.ex-scenario-tags .ex-case-tag {
    font-size: 0.68em;
}

.ex-scenario-more {
    font-size: 0.72em;
    color: var(--ex-ink-muted);
    font-style: italic;
    align-self: center;
    padding: 3px 6px;
}

/* --- Chart Container --- */
.ex-chart-container {
    margin: 32px auto;
    max-width: 860px;
}

@media (max-width: 768px) {
    .ex-chart-container {
        max-width: 100%;
    }
}

.ex-chart-box {
    border: 1px solid var(--ex-border-subtle);
    border-radius: 12px;
    overflow: hidden;
    background: var(--ex-surface);
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    display: flex;
    flex-direction: column;
}

.ex-chart-title {
    margin: 16px 16px 2px 16px;
    text-align: center;
    font-size: 1.05em;
    font-weight: 700;
    color: var(--ex-ink);
}

.ex-chart-caption {
    padding: 12px 16px;
    font-size: 0.85em;
    color: var(--ex-ink-muted);
    text-align: center;
    border-top: 1px solid var(--ex-border-subtle);
    font-style: italic;
}

/* --- Domain Doughnut Layout --- */
.ex-domain-layout {
    display: grid;
    grid-template-columns: minmax(250px, 320px) minmax(0, 1fr);
    gap: 8px;
    align-items: center;
    padding: 10px 12px;
    border-radius: 10px;
    background: var(--ex-surface-raised);
}

.ex-domain-plot {
    display: flex;
    justify-content: center;
    align-items: center;
}

.ex-domain-plot canvas {
    width: 100%;
    height: 280px;
    display: block;
}

.ex-domain-legend {
    margin: 0;
    padding: 8px 10px 8px 6px;
}

.ex-domain-legend-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
}

.ex-domain-legend-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.96em;
    color: var(--ex-ink-soft);
    line-height: 1.25;
}

.ex-domain-legend-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex: 0 0 12px;
}

.ex-domain-legend-name {
    flex: 1 1 auto;
    font-weight: 600;
}

.ex-domain-legend-value {
    flex: 0 0 auto;
    font-weight: 700;
    color: var(--ex-ink);
}

@media (max-width: 768px) {
    .ex-domain-layout {
        grid-template-columns: 1fr;
        gap: 10px;
        padding: 10px;
    }
    .ex-domain-plot canvas {
        height: 240px;
    }
}

/* --- Delivery Grid --- */
.ex-delivery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 28px 0;
}

@media (max-width: 768px) {
    .ex-delivery-grid {
        grid-template-columns: 1fr;
    }
}

.ex-delivery-item {
    border: 1px solid var(--ex-border-subtle);
    border-radius: var(--ex-radius-md);
    padding: 24px;
    background: var(--ex-surface);
    transition: all 0.3s ease;
}

.ex-delivery-item:hover {
    box-shadow: var(--ex-shadow-md);
    transform: translateY(-2px);
}

.ex-delivery-item h4 {
    font-family: var(--ex-font-body);
    font-size: 1em;
    font-weight: 700;
    margin: 0 0 12px 0;
    color: var(--ex-ink);
}

.ex-delivery-item ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.ex-delivery-item li {
    font-family: var(--ex-font-body);
    font-size: 0.88em;
    color: var(--ex-ink-soft);
    line-height: 1.8;
    padding: 3px 0 3px 16px;
    position: relative;
}

.ex-delivery-item li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--ex-accent-primary);
}

.ex-delivery-item li code {
    font-family: var(--ex-font-mono);
    font-size: 0.92em;
    background: var(--ex-surface-sunken);
    border: 1px solid var(--ex-border-subtle);
    border-radius: 4px;
    padding: 1px 5px;
    color: var(--ex-accent-primary);
}

.ex-format-tag {
    display: inline-block;
    padding: 6px 16px;
    background: linear-gradient(135deg, var(--ex-accent-primary), var(--ex-accent-secondary));
    color: #fff;
    border-radius: 999px;
    font-size: 0.88em;
    font-weight: 700;
    letter-spacing: 0.5px;
}

/* Override parent .markdown max-width so charts can be wider & visibly centered */
.markdown { max-width: 100% !important; }

/* --- Result Containers (bar charts) --- */
.ex-result-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin: 32px auto;
    max-width: 840px;
    align-items: start;
}

/* Single-column variant: one chart per row, narrower & centered */
.ex-result-container.ex-single {
    grid-template-columns: 1fr;
    max-width: 600px;
}

@media (max-width: 768px) {
    .ex-result-container {
        grid-template-columns: 1fr;
    }
}

.ex-result-box {
    border: 1px solid var(--ex-border-subtle);
    border-radius: 12px;
    overflow: hidden;
    background: var(--ex-surface);
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    padding: 22px 22px 22px 12px;
}

.ex-result-box h4 {
    font-size: 0.95em;
    font-weight: 700;
    color: var(--ex-ink);
    margin: 0 0 18px 0;
    text-align: center;
}

.ex-bar-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.ex-bar-label {
    width: 110px;
    min-width: 110px;
    font-size: 0.72em;
    color: var(--ex-ink-muted);
    text-align: right;
    flex-shrink: 0;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.ex-bar-label.ours {
    color: var(--ex-accent-primary);
}

.ex-bar-track {
    flex: 1;
    background: #f0f0f0;
    border-radius: 4px;
    height: 22px;
    position: relative;
}

.ex-bar-fill {
    height: 100%;
    background: #4A9EFF;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 6px;
    transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.ex-bar-fill.ours {
    background: linear-gradient(90deg, var(--ex-accent-secondary), var(--ex-accent-primary));
}

.ex-bar-value {
    font-size: 0.68em;
    font-weight: 700;
    color: #fff;
}

.ex-bar-legend {
    margin-top: 14px;
    display: flex;
    justify-content: center;
    gap: 16px;
    font-size: 0.72em;
    font-weight: 600;
}

.ex-bar-legend-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    vertical-align: middle;
    margin-right: 4px;
}

.ex-improvement-note {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 0.78em;
    font-weight: 600;
    color: #0d9488;
}

/* --- Highlight Box --- */
.ex-highlight-box {
    background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 50%, #99f6e4 100%);
    border: 1px solid #5eead4;
    border-left: 4px solid var(--ex-accent-primary);
    border-radius: var(--ex-radius-md);
    padding: 28px 32px;
    margin: 32px 0;
    line-height: 1.85;
    position: relative;
    box-shadow: var(--ex-shadow-sm);
    font-family: var(--ex-font-body);
    font-size: 0.95em;
    color: var(--ex-ink);
}

.ex-highlight-box strong {
    color: #0c1222;
    font-weight: 700;
}

/* --- Case Items (sample display) --- */
.ex-case-item {
    border: 1px solid var(--ex-border-subtle);
    border-radius: var(--ex-radius-md);
    padding: 28px;
    margin-bottom: 24px;
    background: var(--ex-surface);
    box-shadow: var(--ex-shadow-sm);
    transition: box-shadow 0.3s ease;
}

.ex-case-item:hover {
    box-shadow: var(--ex-shadow-md);
}

.ex-case-head {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
}

.ex-case-number {
    font-family: var(--ex-font-display);
    font-size: 1.6em;
    font-weight: 800;
    background: linear-gradient(135deg, var(--ex-accent-primary), var(--ex-accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.ex-case-head h4 {
    font-family: var(--ex-font-body);
    font-size: 1.05em;
    font-weight: 700;
    color: var(--ex-ink);
    margin: 0;
}

.ex-case-meta {
    display: flex;
    gap: 10px;
    margin-bottom: 14px;
    flex-wrap: wrap;
}

.ex-case-tag {
    font-size: 0.72em;
    padding: 3px 12px;
    border-radius: 999px;
    font-weight: 600;
    border: 1px solid;
}

.ex-tag-med { background: #f0fdfa; border-color: #5eead4; color: #0f766e; }
.ex-tag-fin { background: #f0fdfa; border-color: #5eead4; color: #0f766e; }
.ex-tag-law { background: #f0fdf4; border-color: #86efac; color: #15803d; }
.ex-tag-scenario { background: #EFF6FF; border-color: #93C5FD; color: #1D4ED8; }

.ex-query-box {
    background: var(--ex-surface-raised);
    border-left: 3px solid var(--ex-accent-primary);
    padding: 16px 20px;
    border-radius: 0 var(--ex-radius-sm) var(--ex-radius-sm) 0;
    margin-bottom: 16px;
    font-family: var(--ex-font-body);
    font-size: 0.85em;
    line-height: 1.85;
    color: var(--ex-ink-soft);
    white-space: pre-wrap;
    max-height: 300px;
    overflow-y: auto;
}

.ex-query-box::-webkit-scrollbar { width: 4px; }
.ex-query-box::-webkit-scrollbar-thumb { background: var(--ex-border-subtle); border-radius: 2px; }

/* --- Rubric toggle --- */
.ex-rubrics-container { margin-top: 16px; }

.ex-rubrics-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: linear-gradient(135deg, rgba(45,212,191,0.1) 0%, rgba(13,148,136,0.1) 100%);
    border: 1px solid var(--ex-border-subtle);
    border-radius: var(--ex-radius-sm);
    cursor: pointer;
    margin-bottom: 10px;
    transition: all 0.3s ease;
}

.ex-rubrics-header:hover {
    background: linear-gradient(135deg, rgba(45,212,191,0.18) 0%, rgba(13,148,136,0.18) 100%);
}

.ex-rubrics-header h5 {
    margin: 0;
    font-family: var(--ex-font-body);
    font-size: 0.9em;
    font-weight: 700;
    color: var(--ex-ink);
}

.ex-rubrics-count {
    font-size: 0.75em;
    color: var(--ex-ink-muted);
    background: white;
    padding: 4px 12px;
    border-radius: 999px;
    font-weight: 600;
}

.ex-toggle-icon {
    font-size: 0.75em;
    color: var(--ex-ink-muted);
    transition: transform 0.3s ease;
}

.ex-toggle-icon.expanded {
    transform: rotate(180deg);
}

.ex-rubrics-collapsed { display: none; }
.ex-rubrics-expanded { display: block; }

/* --- Rubric Table --- */
.ex-rtbl {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.8em;
    margin-top: 10px;
    font-family: var(--ex-font-body);
}

.ex-rtbl th {
    padding: 8px 10px;
    text-align: left;
    background: var(--ex-surface-sunken);
    border-bottom: 2px solid var(--ex-border-subtle);
    font-weight: 700;
    color: var(--ex-ink-muted);
    font-size: 0.88em;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.ex-rtbl td {
    padding: 8px 10px;
    border-bottom: 1px solid #f0f0f0;
    vertical-align: top;
}

.ex-rtbl tr:last-child td { border-bottom: none; }
.ex-rtbl td:nth-child(1) { width: 32px; text-align: center; font-weight: 700; color: #bbb; }
.ex-rtbl td:nth-child(2) { width: 55px; text-align: center; }
.ex-rtbl td:nth-child(3) { width: 95px; }

.ex-w-pos { color: #0d9488; font-weight: 700; }
.ex-w-neg { color: #DC2626; font-weight: 700; }

.ex-tp {
    font-size: 0.82em;
    padding: 2px 8px;
    border-radius: 999px;
    background: var(--ex-surface-sunken);
    color: var(--ex-ink-muted);
    display: inline-block;
    white-space: nowrap;
    font-weight: 600;
}

.ex-tp-cn {
    background: #FEE2E2;
    color: #B91C1C;
}

.ex-src-link {
    color: var(--ex-accent-primary);
    text-decoration: none;
    font-size: 0.88em;
}

.ex-src-link:hover { text-decoration: underline; }

/* --- Closing CTA --- */
.ex-closing-cta {
    text-align: center;
    padding: 48px 40px 52px;
    margin: 48px 0 0;
    background: linear-gradient(135deg, rgba(13,148,136,0.05) 0%, rgba(45,212,191,0.04) 50%, rgba(110,231,183,0.04) 100%);
    border-top: 1px solid var(--ex-border-subtle);
    border-radius: var(--ex-radius-lg);
    position: relative;
    overflow: hidden;
}

.ex-closing-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, var(--ex-accent-primary), var(--ex-accent-secondary));
    border-radius: 2px;
}

.ex-closing-cta p {
    font-family: var(--ex-font-body);
    font-size: 1.0em;
    color: var(--ex-ink-soft);
    line-height: 1.8;
    max-width: 680px;
    margin: 0 auto 20px;
}

.ex-closing-cta p:last-child {
    margin-bottom: 0;
}

/* --- Scroll Reveal --- */
.ex-reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.ex-reveal.ex-visible {
    opacity: 1;
    transform: translateY(0);
}

/* --- Sub Section Title --- */
.ex-sub-title {
    font-family: var(--ex-font-body);
    font-size: 1.05em;
    font-weight: 600;
    color: var(--ex-ink);
    margin: 32px 0 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--ex-border-subtle);
    text-align: center;
}

.ex-sub-title:first-of-type {
    margin-top: 0;
}

/* --- Section Description --- */
.ex-section-desc {
    font-family: var(--ex-font-body);
    font-size: 0.95em;
    color: var(--ex-ink-soft);
    line-height: 1.85;
    max-width: 800px;
    margin: 0 auto 24px;
}

/* --- Epigraph --- */
.ex-epigraph {
    max-width: 700px;
    margin: 0 auto 48px;
    padding: 32px 40px;
    border-left: 4px solid var(--ex-accent-primary);
    background: linear-gradient(135deg, rgba(13,148,136,0.04) 0%, rgba(45,212,191,0.03) 100%);
    border-radius: 0 var(--ex-radius-md) var(--ex-radius-md) 0;
    font-family: var(--ex-font-display);
    font-size: 1.1em;
    line-height: 1.85;
    color: var(--ex-ink);
    position: relative;
    animation: ex-fadeInUp 0.7s 0.2s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.ex-epigraph::before {
    content: '\201C';
    position: absolute;
    top: -8px;
    left: 16px;
    font-family: var(--ex-font-display);
    font-size: 4em;
    color: var(--ex-accent-primary);
    opacity: 0.12;
    line-height: 1;
    pointer-events: none;
}

.ex-epigraph .ex-epigraph-author {
    margin-top: 12px;
    font-size: 0.85em;
    color: var(--ex-ink-muted);
    text-align: right;
    font-style: italic;
}

/* --- Pipeline (Methodology Steps) --- */
.ex-pipeline {
    margin: 36px 0;
}

.ex-pipeline-step {
    display: flex;
    gap: 20px;
    margin-bottom: 24px;
    align-items: flex-start;
}

.ex-pipeline-icon {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--ex-font-body);
    font-weight: 800;
    font-size: 1.1em;
    color: #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ex-pipeline-step:hover .ex-pipeline-icon {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}

.ex-pipeline-icon.step1 { background: var(--ex-accent-deep); }
.ex-pipeline-icon.step2 { background: var(--ex-accent-warm); }
.ex-pipeline-icon.step3 { background: var(--ex-accent-primary); }
.ex-pipeline-icon.step4 { background: var(--ex-accent-secondary); }

.ex-pipeline-content {
    flex: 1;
}

.ex-pipeline-content h4 {
    font-family: var(--ex-font-body);
    font-size: 1.02em;
    font-weight: 700;
    margin: 0 0 6px 0;
    color: var(--ex-ink);
}

.ex-pipeline-content p {
    margin: 0;
    font-family: var(--ex-font-body);
    font-size: 0.95em;
    color: var(--ex-ink-muted);
    line-height: 1.75;
}

/* --- Discussion Cards --- */
.ex-discussion-card {
    border: 1px solid var(--ex-border-subtle);
    border-radius: var(--ex-radius-md);
    padding: 28px 28px;
    margin: 20px 0;
    background: var(--ex-surface);
    transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
}

.ex-discussion-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, var(--ex-accent-primary), var(--ex-accent-secondary));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.ex-discussion-card:hover {
    box-shadow: var(--ex-shadow-md);
    transform: translateX(4px);
    border-color: rgba(13,148,136,0.2);
}

.ex-discussion-card:hover::before {
    opacity: 1;
}

.ex-discussion-card h4 {
    font-family: var(--ex-font-display);
    font-size: 1.1em;
    font-weight: 600;
    margin: 0 0 12px 0;
    color: var(--ex-ink);
}

.ex-discussion-card p {
    font-family: var(--ex-font-body);
    font-size: 0.93em;
    color: var(--ex-ink-muted);
    line-height: 1.8;
    margin: 0 0 10px 0;
}

.ex-discussion-card p:last-child {
    margin-bottom: 0;
}

/* --- CTA Badge --- */
.ex-cta-badge {
    display: inline-block;
    padding: 8px 20px;
    margin: 0 6px;
    background: linear-gradient(135deg, var(--ex-accent-primary), var(--ex-accent-secondary));
    color: #fff;
    border-radius: 999px;
    font-family: var(--ex-font-body);
    font-size: 0.88em;
    font-weight: 700;
    letter-spacing: 0.3px;
    box-shadow: 0 2px 8px rgba(13,148,136,0.2);
}

/* --- Contributors Bar --- */
.ex-contributors-bar {
    margin: 24px 0 32px 0;
    padding: 16px 0;
    border-top: 1px solid var(--ex-border-subtle);
    border-bottom: 1px solid var(--ex-border-subtle);
    animation: ex-fadeInUp 0.6s 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.ex-contributors-bar p {
    margin: 8px 0;
    font-family: var(--ex-font-body);
    font-size: 14px;
    color: var(--ex-ink-soft);
}

.ex-contributors-bar a {
    color: var(--ex-accent-primary);
    text-decoration: none;
}

.ex-contributors-bar a:hover {
    text-decoration: underline;
}

/* --- TOC (Floating) --- */
.ex-toc {
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
    background: var(--ex-surface);
    border: 1px solid var(--ex-border-subtle);
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    z-index: 100;
    font-size: 10px;
    transition: all 0.3s ease;
}
.ex-toc::-webkit-scrollbar { width: 4px; }
.ex-toc::-webkit-scrollbar-track { background: transparent; }
.ex-toc::-webkit-scrollbar-thumb { background: var(--ex-border-subtle); border-radius: 2px; }

.ex-toc-title {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--ex-ink-muted);
    margin-bottom: 12px;
    font-weight: 600;
}
.ex-toc-list { list-style: none; padding: 0; margin: 0; }
.ex-toc-item { margin-bottom: 4px; }
.ex-toc-link {
    display: block;
    padding: 6px 10px;
    color: var(--ex-ink-muted);
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.2s ease;
    border-left: 2px solid transparent;
    line-height: 1.4;
}
.ex-toc-link:hover { background: rgba(0,0,0,0.04); color: var(--ex-ink); }
.ex-toc-link.active { background: rgba(0,0,0,0.04); color: var(--ex-ink); border-left-color: var(--ex-accent-primary); font-weight: 500; }
.ex-toc-link.ex-toc-h2 { padding-left: 10px; font-size: 13px; }
.ex-toc-link.ex-toc-h3 { padding-left: 20px; font-size: 12px; }

.ex-toc-toggle {
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
.ex-toc-toggle:hover { opacity: 1; }
.ex-toc-toggle svg { width: 14px; height: 14px; transition: transform 0.3s ease; }
.ex-toc.collapsed .ex-toc-toggle svg { transform: rotate(180deg); }
.ex-toc.collapsed .ex-toc-list,
.ex-toc.collapsed .ex-toc-progress,
.ex-toc.collapsed .ex-toc-title { display: none; }
.ex-toc.collapsed { width: 44px; min-width: 44px; padding: 12px; }

.ex-toc-progress {
    height: 3px;
    background: var(--ex-border-subtle);
    border-radius: 2px;
    margin-bottom: 12px;
    overflow: hidden;
}
.ex-toc-progress-bar {
    height: 100%;
    background: var(--ex-accent-primary);
    width: 0%;
    transition: width 0.1s ease;
    border-radius: 2px;
}

@media (max-width: 1400px) {
    .ex-toc { display: none; }
}

</style>

<!-- ===== TOC (Floating) ===== -->
<nav class="ex-toc" id="ex-toc">
    <div class="ex-toc-toggle" onclick="this.parentElement.classList.toggle('collapsed')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
    </div>
    <div class="ex-toc-title">Contents</div>
    <div class="ex-toc-progress"><div class="ex-toc-progress-bar" id="ex-toc-bar"></div></div>
    <ul class="ex-toc-list">
        <li class="ex-toc-item"><a class="ex-toc-link ex-toc-h2" href="#ex-corpus">Corpus Composition</a></li>
        <li class="ex-toc-item"><a class="ex-toc-link ex-toc-h2" href="#ex-eval-design">Evaluation Design</a></li>
        <li class="ex-toc-item"><a class="ex-toc-link ex-toc-h2" href="#ex-validation">Empirical Validation</a></li>
        <li class="ex-toc-item"><a class="ex-toc-link ex-toc-h3" href="#ex-exp1">Exp I: Training Signal</a></li>
        <li class="ex-toc-item"><a class="ex-toc-link ex-toc-h3" href="#ex-exp2">Exp II: Generalization</a></li>
        <li class="ex-toc-item"><a class="ex-toc-link ex-toc-h3" href="#ex-exp3">Exp III: Deep Research</a></li>
        <li class="ex-toc-item"><a class="ex-toc-link ex-toc-h2" href="#ex-cases">Representative Cases</a></li>
        <li class="ex-toc-item"><a class="ex-toc-link ex-toc-h2" href="#ex-enables">What This Enables</a></li>
    </ul>
</nav>

<!-- ==================== HERO ==================== -->
<div class="ex-hero">
    <p class="ex-tagline ex-animate">
        Toward Evaluating Real-World, High-Stakes Productivity
    </p>
    <p class="ex-subtitle ex-animate ex-animate-delay-1">
        The field has grown adept at constructing benchmarks that AI systems can pass, yet passing is not the same as performing. We pose a more exacting question: can AI systems produce professional work-product that a credentialed domain expert would <em>sign off on</em>? ExpertEval is a large-scale evaluation infrastructure spanning <strong>Medicine</strong>, <strong>Finance</strong>, and <strong>Law</strong>, three domains where the quality of reasoning is adjudicated not by accuracy metrics but by real-world consequence severity. Every case is authored by practicing professionals with verifiable domain credentials and paired with fine-grained rubrics that encode expert judgment in its entirety, including the characteristic failure modes that separate competent analysis from dangerously fluent confabulation.
    </p>

    <div class="ex-contributors-bar">
        <p style="margin: 8px 0; font-size: 14px;"><strong>UniPat Evaluation Team</strong></p>
        <p style="margin: 8px 0; font-size: 14px;"><strong><a href="mailto:contact@unipat.ai">contact@unipat.ai</a>
    </div>
</div>

<!-- ==================== EPIGRAPH ==================== -->
<div class="ex-epigraph">
    ExpertEval encodes the tacit standards of seasoned professionals into structured rubrics, transforming years of domain judgment into reproducible, transparent evaluation criteria.
</div>

<div class="ex-insight-banner ex-animate ex-animate-delay-2">
    <h3>Expert-Authored &middot; Rubric-Driven &middot; Failure-Aware</h3>
    <p>
        Every rubric criterion traces back to authoritative primary sources, and characteristic professional errors are encoded as <em>Critical Negatives</em> that carry substantial penalties. The result: we measure not whether a model <em>can produce an answer</em>, but whether that answer would <em>survive peer review</em> by a credentialed practitioner.
    </p>
</div>

<!-- ==================== VISION GRID ==================== -->
<div class="ex-vision-grid ex-animate ex-animate-delay-3">
    <div class="ex-vision-card">
        <h4>Beyond Pattern Matching</h4>
        <p>Professional domains impose reasoning under genuine epistemic uncertainty, where novel constraint configurations arise that no training distribution has adequately represented. We construct queries that faithfully reproduce this cognitive load: multi-system organ failure complicated by pharmacokinetic drug conflicts, cross-default cascades propagating through distressed capital structures, and multi-jurisdictional legal fact patterns requiring simultaneous navigation of parallel criminal and civil liability tracks.</p>
    </div>
    <div class="ex-vision-card">
        <h4>Auditable Ground Truth</h4>
        <p>Every rubric criterion that invokes external knowledge is anchored to an authoritative primary source with a traceable URL: clinical practice guidelines, regulatory filings, statutory provisions, judicial interpretations. This design choice transforms evaluation from an exercise in subjective expert consensus into independently auditable, reproducible fact-verification, ensuring that any qualified reviewer, operating without access to our annotators, would converge on materially identical scores.</p>
    </div>
    <div class="ex-vision-card">
        <h4>Failure-Mode Awareness</h4>
        <p>Productive intelligence is defined as much by what it avoids as by what it achieves. We encode Critical Negatives, domain-specific professional pitfalls that carry disproportionate real-world cost relative to their surface plausibility, as penalty rubric items with negative weight. This ensures the scoring surface achieves maximal discriminative power precisely at the failure boundary where fluent but materially dangerous answers reside, the region most consequential for deployment safety.</p>
    </div>
</div>

<div class="ex-stats-grid ex-animate ex-animate-delay-4">
    <div class="ex-stat-card">
        <div class="ex-stat-number">3,213</div>
        <div class="ex-stat-label">Expert Cases</div>
        <div class="ex-stat-note">To our knowledge, one of the largest expert-annotated corpora assembled to date for professional-grade reasoning evaluation</div>
    </div>
    <div class="ex-stat-card">
        <div class="ex-stat-number">207</div>
        <div class="ex-stat-label">Scenarios</div>
        <div class="ex-stat-note">Granular professional scenarios spanning clinical decision-making, financial structuring, and legal analysis</div>
    </div>
    <div class="ex-stat-card">
        <div class="ex-stat-number">21.83</div>
        <div class="ex-stat-label">Avg Rubrics</div>
        <div class="ex-stat-note">Multi-dimensional scoring rubrics per case, with differential weights and critical negatives</div>
    </div>
</div>

<hr class="ex-section-rule">

<!-- ==================== DATA DISTRIBUTION ==================== -->

<div class="ex-reveal">
<h2 id="ex-corpus" style="font-family: var(--ex-font-display); text-align:center; font-size:1.5em; font-weight:700; color:var(--ex-ink); margin-bottom:6px;">Corpus Composition</h2>
<p style="text-align:center; font-family:var(--ex-font-body); font-size:0.95em; color:var(--ex-ink-muted); margin-bottom:28px;"><strong>Three domains selected for the severity of their professional stakes and the irreducibility of their reasoning complexity</strong></p>
</div>

<!-- Doughnut Chart -->
<div class="ex-chart-container ex-reveal">
    <div class="ex-chart-box">
        <div class="ex-chart-title">Domain Distribution</div>
        <div class="ex-domain-layout">
            <div class="ex-domain-plot">
                <canvas id="exDomainChart"></canvas>
            </div>
            <div class="ex-domain-legend">
                <ul class="ex-domain-legend-list">
                    <li class="ex-domain-legend-item">
                        <span class="ex-domain-legend-dot" style="background:#134e4a;"></span>
                        <span class="ex-domain-legend-name">Medicine</span>
                        <span class="ex-domain-legend-value">1,146 cases &middot; 43 scenarios</span>
                    </li>
                    <li class="ex-domain-legend-item">
                        <span class="ex-domain-legend-dot" style="background:#0d9488;"></span>
                        <span class="ex-domain-legend-name">Finance</span>
                        <span class="ex-domain-legend-value">1,147 cases &middot; 58 scenarios</span>
                    </li>
                    <li class="ex-domain-legend-item">
                        <span class="ex-domain-legend-dot" style="background:#2dd4bf;"></span>
                        <span class="ex-domain-legend-name">Law</span>
                        <span class="ex-domain-legend-value">920 cases &middot; 106 scenarios</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="ex-chart-caption">Three professional domains with 3,213 expert-annotated cases in total</div>
    </div>
</div>

<!-- Domain detail cards -->
<div class="ex-vision-grid ex-reveal">
    <div class="ex-vision-card">
        <h4>Medicine</h4>
        <div class="ex-domain-count">1,146 cases &middot; 43 scenarios</div>
        <div class="ex-scenario-tags">
            <span class="ex-case-tag ex-tag-scenario">Perioperative ICU Management</span>
            <span class="ex-case-tag ex-tag-scenario">Multi-organ Failure Triage</span>
            <span class="ex-case-tag ex-tag-scenario">Pharmacokinetic Conflict</span>
            <span class="ex-case-tag ex-tag-scenario">Immunosuppression Sequencing</span>
            <span class="ex-case-tag ex-tag-scenario">Sepsis Bundle Escalation</span>
            <span class="ex-case-tag ex-tag-scenario">Coagulopathy Management</span>
            <span class="ex-case-tag ex-tag-scenario">Ventilator Weaning Protocol</span>
            <span class="ex-scenario-more">… 36 more</span>
        </div>
    </div>
    <div class="ex-vision-card">
        <h4>Finance</h4>
        <div class="ex-domain-count">1,147 cases &middot; 58 scenarios</div>
        <div class="ex-scenario-tags">
            <span class="ex-case-tag ex-tag-scenario">Distressed Asset Valuation</span>
            <span class="ex-case-tag ex-tag-scenario">M&amp;A Deal Structuring</span>
            <span class="ex-case-tag ex-tag-scenario">Derivatives Pricing</span>
            <span class="ex-case-tag ex-tag-scenario">Capital Structure Analysis</span>
            <span class="ex-case-tag ex-tag-scenario">Cross-default Propagation</span>
            <span class="ex-case-tag ex-tag-scenario">Credit Risk Modeling</span>
            <span class="ex-case-tag ex-tag-scenario">Portfolio Stress Testing</span>
            <span class="ex-scenario-more">… 51 more</span>
        </div>
    </div>
    <div class="ex-vision-card">
        <h4>Law</h4>
        <div class="ex-domain-count">920 cases &middot; 106 scenarios</div>
        <div class="ex-scenario-tags">
            <span class="ex-case-tag ex-tag-scenario">Cross-border Labor Dispute</span>
            <span class="ex-case-tag ex-tag-scenario">Data Privacy Compliance</span>
            <span class="ex-case-tag ex-tag-scenario">Criminal Sentencing Threshold</span>
            <span class="ex-case-tag ex-tag-scenario">Multi-jurisdiction Liability</span>
            <span class="ex-case-tag ex-tag-scenario">Securities Fraud Litigation</span>
            <span class="ex-case-tag ex-tag-scenario">Regulatory Enforcement</span>
            <span class="ex-case-tag ex-tag-scenario">Contract Interpretation</span>
            <span class="ex-scenario-more">… 99 more</span>
        </div>
    </div>
</div>

<hr class="ex-section-rule">

<!-- ==================== PRINCIPLED EVALUATION DESIGN ==================== -->

<div class="ex-reveal">
<h2 id="ex-eval-design" style="font-family: var(--ex-font-display); text-align:center; font-size:1.5em; font-weight:700; color:var(--ex-ink); margin-bottom:6px;">Principled Evaluation Design</h2>
<p style="text-align:center; font-family:var(--ex-font-body); font-size:0.95em; color:var(--ex-ink-muted); margin-bottom:28px;">A four-principle rubric methodology that transforms subjective expert judgment into deterministic, independently reproducible scoring</p>
</div>

<p class="ex-section-desc ex-reveal" style="text-align:left; max-width:none;">
The central methodological challenge in expert-level evaluation is not data volume but <strong>scoring surface design</strong>. A rubric that merely asks "is the answer correct?" collapses the rich internal structure of professional reasoning into a degenerate binary signal. We adopt four design principles that, taken together, ensure our rubrics faithfully encode the full structure of expert judgment, its verifiability constraints, and its domain-characteristic failure modes.
</p>

<div class="ex-pipeline ex-reveal">
    <div class="ex-pipeline-step">
        <div class="ex-pipeline-icon step1">1</div>
        <div class="ex-pipeline-content">
            <h4>Specificity</h4>
            <p>Vague evaluative language is categorically excluded. Every criterion must specify quantifiable, deterministic assessment standards: a drug dosage threshold in mg/kg, a statutory penalty range with sentencing tiers, a recovery rate calculation with explicit numerator and denominator. This constraint eliminates evaluator subjectivity at the criterion level and guarantees that two independent assessors, operating without communication, will converge on materially identical scores.</p>
        </div>
    </div>
    <div class="ex-pipeline-step">
        <div class="ex-pipeline-icon step2">2</div>
        <div class="ex-pipeline-content">
            <h4>Verifiability</h4>
            <p>Every criterion that depends on domain knowledge external to the case itself is anchored to an authoritative primary source via a stable URL, including clinical practice guidelines published by professional societies, SEC/CSRC regulatory filings, and statutory provisions with article-level citation. This transforms rubric-based evaluation from an exercise in "expert opinion" (inherently non-reproducible) into independently auditable fact-verification against the same source material available to any qualified practitioner.</p>
        </div>
    </div>
    <div class="ex-pipeline-step">
        <div class="ex-pipeline-icon step3">3</div>
        <div class="ex-pipeline-content">
            <h4>Structured Rubrics</h4>
            <p>Rubric criteria are organized into coherent reasoning chains. When a prerequisite criterion is unmet (e.g., a model fails to correctly identify the governing legal entity in a cross-border dispute), all downstream criteria whose validity logically depends on that determination are automatically invalidated and score zero. This prevents inflated scores arising from partially correct but inferentially unsound reasoning.</p>
        </div>
    </div>
    <div class="ex-pipeline-step">
        <div class="ex-pipeline-icon step4">4</div>
        <div class="ex-pipeline-content">
            <h4>Critical Negatives</h4>
            <p>We systematically encode domain-characteristic professional pitfalls as negative-weight rubric items. A model that recommends lipid emulsion infusion in a patient with severe hypertriglyceridemia (TG &gt; 5.6 mmol/L), or that ignores structural subordination when computing offshore bond recovery rates, receives substantial score penalties, faithfully mirroring the disproportionate real-world cost these specific errors carry in clinical practice, financial advisory, and legal counsel respectively.</p>
        </div>
    </div>
</div>

<hr class="ex-section-rule">

<!-- ==================== VALIDATION RESULTS ==================== -->

<div class="ex-reveal">
<h2 id="ex-validation" style="font-family: var(--ex-font-display); text-align:center; font-size:1.5em; font-weight:700; color:var(--ex-ink); margin-bottom:6px;">Empirical Validation</h2>
<p style="text-align:center; font-family:var(--ex-font-body); font-size:0.95em; color:var(--ex-ink-muted); margin-bottom:28px;">We validate the dataset's empirical utility across three complementary evaluation settings, demonstrating that expert-authored rubrics yield a training signal of sufficient quality to measurably shift model reasoning behavior, and a scoring surface of sufficient granularity to discriminate among frontier-class systems.</p>
</div>

<!-- === Section 1: Training & Evaluation on Test Set === -->
<h3 id="ex-exp1" class="ex-sub-title ex-reveal">Experiment I: Training Signal Quality</h3>

<p class="ex-section-desc ex-reveal" style="text-align:left; max-width:none;">
We evaluate whether expert-annotated rubrics provide a training signal of sufficient quality to produce measurable improvements in professional reasoning capability. We employ a stratified hold-out design: <strong>90 questions</strong> (30 per domain, uniformly sampled across scenario types) constitute the test set, with the remaining ~<strong>2,500 cases</strong> allocated to supervised fine-tuning of <strong>Qwen3.5-35B-A3B</strong>. Two training regimes are compared: standard SFT using ReAct-style information synthesis trajectories, and a <em>Heavy</em> variant incorporating 8-sample response aggregation to increase training signal density.
</p>

<div class="ex-result-container ex-single ex-reveal">
    <!-- Training Improvement -->
    <div class="ex-result-box">
        <h4>Training Improvement</h4>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">Baseline</span>
            <div class="ex-bar-track">
                <div class="ex-bar-fill ours" style="width:61.9%;">
                    <span class="ex-bar-value">54.76%</span>
                </div>
            </div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">SFT</span>
            <div class="ex-bar-track">
                <div class="ex-bar-fill ours" style="width:90.6%;">
                    <span class="ex-bar-value">66.22%</span>
                </div>
            </div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">SFT, Heavy</span>
            <div class="ex-bar-track">
                <div class="ex-bar-fill ours" style="width:97.4%;">
                    <span class="ex-bar-value">68.94%</span>
                </div>
            </div>
        </div>
        <div class="ex-improvement-note">
            <span>Baseline &rarr; SFT: +11.46%</span>
            <span>SFT &rarr; Heavy: +2.72%</span>
        </div>
    </div>
</div>

<div class="ex-result-container ex-single ex-reveal" style="max-width: 700px;">
    <!-- Model Ranking -->
    <div class="ex-result-box">
        <h4>Model Ranking</h4>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours" title="Qwen3.5-35B-A3B (SFT, Heavy)">Ours (SFT, Heavy)</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:97.4%;"><span class="ex-bar-value">68.94</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Claude-Opus-4.6">Claude-Opus-4.6</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:92.2%;"><span class="ex-bar-value">66.88</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours" title="Qwen3.5-35B-A3B (SFT)">Ours (SFT)</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:90.6%;"><span class="ex-bar-value">66.22</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="GPT-5.4-High">GPT-5.4-High</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:90.5%;"><span class="ex-bar-value">66.20</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Qwen3.6-Plus">Qwen3.6-Plus</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:83.3%;"><span class="ex-bar-value">63.32</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Gemini-3.1-Pro-Preview">Gemini-3.1-Pro-Preview</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:82.5%;"><span class="ex-bar-value">63.00</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="GLM-5">GLM-5</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:73.2%;"><span class="ex-bar-value">59.27</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Kimi-K2.5">Kimi-K2.5</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:70.6%;"><span class="ex-bar-value">58.24</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Doubao-Seed-2.0-Pro">Doubao-Seed-2.0-Pro</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:65.6%;"><span class="ex-bar-value">56.22</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours" title="Qwen3.5-35B-A3B (Baseline)">Ours (Baseline)</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:61.9%;"><span class="ex-bar-value">54.76</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Qwen3-Deep-Research">Qwen3-Deep-Research</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:46.3%;"><span class="ex-bar-value">48.52</span></div></div>
        </div>
        <div class="ex-bar-legend">
            <span><span class="ex-bar-legend-dot" style="background:linear-gradient(90deg, #2dd4bf, #0d9488);"></span> Ours</span>
            <span><span class="ex-bar-legend-dot" style="background:#4A9EFF;"></span> Other Models (w/ tools)</span>
        </div>
    </div>
</div>

<div class="ex-highlight-box ex-reveal">
    <strong>Key finding:</strong> SFT on expert rubric data lifts the base model from 54.76% to 66.22% (+11.46 percentage points), surpassing GPT-5.4-High, Qwen3.6-Plus, and Gemini-3.1-Pro, all of which are substantially larger systems with tool-use capabilities. The Heavy variant with 8-sample aggregation reaches <strong>68.94%</strong>, achieving state-of-the-art on the held-out test set and ranking above Claude-Opus-4.6 (66.88%). A 35B sparse mixture-of-experts model, trained exclusively on <em>our</em> expert-annotated data, outperforms frontier systems with orders of magnitude more parameters, providing empirical evidence that training signal quality, not model scale, is the binding constraint.
</div>

<!-- === Section 2: One-Million Bench === -->
<h3 id="ex-exp2" class="ex-sub-title ex-reveal">Experiment II: Cross-Benchmark Generalization</h3>

<p class="ex-section-desc ex-reveal" style="text-align:left; max-width:none;">
A natural question arises: does training on our rubric-annotated data improve performance only on our own test distribution, or does the acquired reasoning capability generalize to entirely independent evaluation instruments? We evaluate on the <strong>One-Million Bench</strong>, a large-scale external benchmark constructed by a separate research group with no overlap in annotation methodology. Four metrics are reported: <strong>Expert Score</strong> and <strong>Pass Rate</strong>, each evaluated in both English and Chinese.
</p>

<div class="ex-result-container ex-reveal">
    <!-- Training Improvement: Expert Score -->
    <div class="ex-result-box">
        <h4>Training Improvement &mdash; Expert Score</h4>
        <p style="font-size:0.85em; color:var(--ex-ink-muted); margin:0 0 10px;">EN</p>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">Baseline</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:69.4%;"><span class="ex-bar-value">45.0</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">SFT</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:84.9%;"><span class="ex-bar-value">55.0</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">SFT, Heavy</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:100%;"><span class="ex-bar-value">64.8</span></div></div>
        </div>
        <p style="font-size:0.85em; color:var(--ex-ink-muted); margin:14px 0 10px 0;">CN</p>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">Baseline</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:67.9%;"><span class="ex-bar-value">44.0</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">SFT</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:80.4%;"><span class="ex-bar-value">52.1</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">SFT, Heavy</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:94.6%;"><span class="ex-bar-value">61.3</span></div></div>
        </div>
    </div>

    <!-- Training Improvement: Pass Rate -->
    <div class="ex-result-box">
        <h4>Training Improvement &mdash; Pass Rate</h4>
        <p style="font-size:0.85em; color:var(--ex-ink-muted); margin:0 0 10px;">EN</p>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">Baseline</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:42.5%;"><span class="ex-bar-value">18.5</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">SFT</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:63.2%;"><span class="ex-bar-value">27.5</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">SFT, Heavy</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:100%;"><span class="ex-bar-value">43.5</span></div></div>
        </div>
        <p style="font-size:0.85em; color:var(--ex-ink-muted); margin:14px 0 10px 0;">CN</p>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">Baseline</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:38.1%;"><span class="ex-bar-value">16.0</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">SFT</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:63.1%;"><span class="ex-bar-value">26.5</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours">SFT, Heavy</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:96.6%;"><span class="ex-bar-value">42.0</span></div></div>
        </div>
    </div>
</div>

<!-- One-Million Bench Model Ranking -->
<div class="ex-result-container ex-reveal">
    <!-- EN Ranking -->
    <div class="ex-result-box">
        <h4>Model Ranking &mdash; EN</h4>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours" title="Ours (SFT, Heavy)">Ours (SFT, Heavy)</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:100%;"><span class="ex-bar-value">64.8</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Claude-Opus-4.6">Claude-Opus-4.6</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:97.2%;"><span class="ex-bar-value">63.0</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="GPT-5.4-High">GPT-5.4-High</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:91.4%;"><span class="ex-bar-value">59.2</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours" title="Ours (SFT)">Ours (SFT)</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:84.9%;"><span class="ex-bar-value">55.0</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Doubao-Seed-2.0-Pro">Doubao-Seed-2.0-Pro</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:79.9%;"><span class="ex-bar-value">51.8</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Qwen3.6-Plus">Qwen3.6-Plus</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:75.6%;"><span class="ex-bar-value">49.0</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Gemini-3.1-Pro-Preview">Gemini-3.1-Pro-Preview</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:68.8%;"><span class="ex-bar-value">44.6</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Kimi-K2.5">Kimi-K2.5</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:63.6%;"><span class="ex-bar-value">41.2</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="GLM-5">GLM-5</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:63.4%;"><span class="ex-bar-value">41.1</span></div></div>
        </div>
        <div class="ex-bar-legend">
            <span><span class="ex-bar-legend-dot" style="background:linear-gradient(90deg, #2dd4bf, #0d9488);"></span> Ours</span>
            <span><span class="ex-bar-legend-dot" style="background:#4A9EFF;"></span> Other Models</span>
        </div>
    </div>

    <!-- CN Ranking -->
    <div class="ex-result-box">
        <h4>Model Ranking &mdash; CN</h4>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Claude-Opus-4.6">Claude-Opus-4.6</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:100%;"><span class="ex-bar-value">64.5</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours" title="Ours (SFT, Heavy)">Ours (SFT, Heavy)</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:95.0%;"><span class="ex-bar-value">61.3</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="GPT-5.4-High">GPT-5.4-High</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:91.0%;"><span class="ex-bar-value">58.7</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours" title="Ours (SFT)">Ours (SFT)</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:80.8%;"><span class="ex-bar-value">52.1</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Qwen3.6-Plus">Qwen3.6-Plus</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:80.8%;"><span class="ex-bar-value">52.1</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Doubao-Seed-2.0-Pro">Doubao-Seed-2.0-Pro</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:78.3%;"><span class="ex-bar-value">50.5</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Gemini-3.1-Pro-Preview">Gemini-3.1-Pro-Preview</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:72.7%;"><span class="ex-bar-value">46.9</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Kimi-K2.5">Kimi-K2.5</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:67.8%;"><span class="ex-bar-value">43.7</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="GLM-5">GLM-5</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:63.7%;"><span class="ex-bar-value">41.1</span></div></div>
        </div>
        <div class="ex-bar-legend">
            <span><span class="ex-bar-legend-dot" style="background:linear-gradient(90deg, #2dd4bf, #0d9488);"></span> Ours</span>
            <span><span class="ex-bar-legend-dot" style="background:#4A9EFF;"></span> Other Models</span>
        </div>
    </div>
</div>

<div class="ex-highlight-box ex-reveal">
    <strong>The training signal generalizes.</strong> On an entirely independent benchmark with no methodological overlap, our Heavy-SFT model achieves the highest Expert Score in English (64.8, surpassing Claude-Opus-4.6 at 63.0) and ranks second in Chinese (61.3, narrowly trailing Claude-Opus-4.6 at 64.5). Pass Rate improvements are especially striking, rising from 18.5% at baseline to 43.5% after Heavy SFT in English. This indicates that expert rubric data teaches not merely surface-level accuracy but the structured reasoning discipline required to <em>fully satisfy</em> professional evaluation criteria across independent assessment frameworks.
</div>

<!-- === Section 3: DeepResearch Bench === -->
<h3 id="ex-exp3" class="ex-sub-title ex-reveal">Experiment III: Deep Research Capability</h3>

<p class="ex-section-desc ex-reveal" style="text-align:left; max-width:none;">
As a final evaluation axis, we assess performance on the <strong>DeepResearch Bench</strong>, a benchmark specifically engineered to test multi-step information synthesis and extended reasoning under compositional constraints. This evaluation setting most closely mirrors the task structure our dataset is designed to optimize for: long-horizon reasoning chains requiring tool-calling sequences, multi-source evidence integration, and the sustained application of professional-grade judgment across complex decision trees.
</p>

<div class="ex-result-container ex-reveal">
    <div class="ex-result-box">
        <h4>DeepResearch Bench</h4>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours" title="Ours (SFT)">Ours (SFT)</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:100%;"><span class="ex-bar-value">47.63</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="OpenAI">OpenAI</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:98.6%;"><span class="ex-bar-value">46.98</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Perplexity">Perplexity</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:88.7%;"><span class="ex-bar-value">42.25</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Grok">Grok</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:84.5%;"><span class="ex-bar-value">40.24</span></div></div>
        </div>
        <div class="ex-bar-legend">
            <span><span class="ex-bar-legend-dot" style="background:linear-gradient(90deg, #2dd4bf, #0d9488);"></span> Ours</span>
            <span><span class="ex-bar-legend-dot" style="background:#4A9EFF;"></span> Other Models</span>
        </div>
    </div>

    <div class="ex-result-box">
        <h4>DeepResearch Bench II</h4>
        <div class="ex-bar-row">
            <span class="ex-bar-label ours" title="Ours (SFT)">Ours (SFT)</span>
            <div class="ex-bar-track"><div class="ex-bar-fill ours" style="width:100%;"><span class="ex-bar-value">50.45</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="GPT-o3">GPT-o3</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:90.0%;"><span class="ex-bar-value">45.40</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Gemini-3-Pro">Gemini-3-Pro</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:88.4%;"><span class="ex-bar-value">44.60</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Doubao">Doubao</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:81.2%;"><span class="ex-bar-value">40.99</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Qwen3-Max">Qwen3-Max</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:77.8%;"><span class="ex-bar-value">39.25</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Grok">Grok</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:77.8%;"><span class="ex-bar-value">39.23</span></div></div>
        </div>
        <div class="ex-bar-row">
            <span class="ex-bar-label" title="Perplexity">Perplexity</span>
            <div class="ex-bar-track"><div class="ex-bar-fill" style="width:76.5%;"><span class="ex-bar-value">38.58</span></div></div>
        </div>
        <div class="ex-bar-legend">
            <span><span class="ex-bar-legend-dot" style="background:linear-gradient(90deg, #2dd4bf, #0d9488);"></span> Ours</span>
            <span><span class="ex-bar-legend-dot" style="background:#4A9EFF;"></span> Other Models</span>
        </div>
    </div>
</div>

<div class="ex-highlight-box ex-reveal">
    <strong>State-of-the-art on both evaluation rounds.</strong> Our system achieves 47.63 on DeepResearch Bench (vs. OpenAI at 46.98) and 50.45 on DeepResearch Bench II (vs. GPT-o3 at 45.40 and Gemini-3-Pro at 44.60). Notably, the performance margin widens in the second, more challenging round, suggesting that the structured reasoning patterns internalized from expert rubric training produce compounding returns as task complexity increases. This is precisely the scaling behavior one would expect from genuine capability acquisition rather than superficial pattern memorization.
</div>

<hr class="ex-section-rule">

<!-- ==================== SAMPLE CASES ==================== -->

<div class="ex-reveal">
<h2 id="ex-cases" style="font-family: var(--ex-font-display); text-align:center; font-size:1.5em; font-weight:700; color:var(--ex-ink); margin-bottom:6px;">Representative Cases</h2>
<p style="text-align:center; font-family:var(--ex-font-body); font-size:0.95em; color:var(--ex-ink-muted); margin-bottom:28px;">To convey the difficulty calibration and domain specificity of our evaluation instrument, we present three illustrative cases, one from each professional domain, selected to exhibit the characteristic reasoning structures, dependency topologies, and failure modes that our rubric design is engineered to capture.</p>
</div>

<!-- Case 1: Medicine -->
<div class="ex-case-item ex-reveal">
    <div class="ex-case-head">
        <span class="ex-case-number">01</span>
        <h4>Medicine &mdash; Perioperative Critical Care</h4>
    </div>
    <div class="ex-case-meta">
        <span class="ex-case-tag ex-tag-med">Medicine</span>
        <span class="ex-case-tag ex-tag-scenario">Perioperative ICU Management</span>
    </div>
    <div class="ex-query-box">I am an attending physician in hepatobiliary-pancreatic surgery and SICU. I am currently managing a patient on postoperative day 8 after a standard Whipple procedure (pancreaticoduodenectomy), who has developed severe new-onset complications. Requesting MDT (multidisciplinary team) consultation for the next steps.

Patient: Female, 62 years old, 55 kg. Operated for pancreatic head ductal adenocarcinoma. History of severe refractory rheumatoid arthritis (RA) for 12 years, on long-term Abatacept and low-dose steroids. Last Abatacept IV infusion was 3 days before surgery.

Current status: Abdominal drainage output surged to 850 mL of turbid dark-red fluid with tissue debris; drain amylase 45,000 U/L. Vitals: invasive arterial BP 82/45 mmHg, HR 135, temp 40.2°C. Norepinephrine at 0.6 µg/kg/min. Hb dropped from 105 to 68 g/L. PLT 12×10⁹/L, WBC 1.1×10⁹/L; ferritin 38,500 µg/L, TG 7.2 mmol/L, sCD25 22,000 U/mL. Suspected secondary macrophage activation syndrome (MAS).

Rheumatology and hematology recommend immediate therapeutic plasma exchange (TPE) plus high-dose Abatacept. The surgical team objects — massive pancreatic fistula with highly corrosive enzymes makes aggressive immunosuppression extremely risky. Anesthesiology refuses open re-exploration due to PLT 12 and severe capillary leak.

Please provide specific guidance on: (1) pharmacokinetic conflict between Abatacept (large-molecule fusion protein) and TPE — design a precise 48-hour timeline; (2) optimal non-open bedside/IR interventions for suspected pseudoaneurysm/sentinel bleed with 850 mL/day pancreatic enzyme-rich drainage; (3) enteral/parenteral nutrition sequencing strategy via existing nasojejunal tube given high-output fistula, extreme inflammatory consumption, and hepatorenal impairment.</div>
    <div class="ex-rubrics-container">
        <div class="ex-rubrics-header" onclick="toggleExRubrics('case1')">
            <h5>Rubrics (click to expand/collapse)</h5>
            <div style="display:flex;align-items:center;gap:10px;">
                <span class="ex-rubrics-count">29 rubrics</span>
                <span class="ex-toggle-icon" id="ex-toggle-case1">&#x25BC;</span>
            </div>
        </div>
        <div class="ex-rubrics-collapsed" id="ex-rubrics-case1">
            <table class="ex-rtbl">
                <thead><tr><th>#</th><th>Weight</th><th>Type</th><th>Description</th><th>Deps</th></tr></thead>
                <tbody>
<tr><td>1</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Extraction</span></td><td>Identify that Abatacept is a large-molecule fusion protein with a very small volume of distribution (Vd ≤ 0.1 L/kg).</td><td></td></tr>
<tr><td>2</td><td class="ex-w-pos">6.0</td><td><span class="ex-tp">Reasoning</span></td><td>Calculate that a single TPE session non-selectively removes &gt;60% of intravascular Abatacept (specifically 63%–78%).</td><td>[1]</td></tr>
<tr><td>3</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Specify that Abatacept must be administered after TPE completion (within 30–60 minutes post-TPE).</td><td></td></tr>
<tr><td>4</td><td class="ex-w-pos">8.0</td><td><span class="ex-tp">Reasoning</span></td><td>Recognize that concurrent severe capillary leak syndrome causes additional third-space Abatacept loss, significantly shortening its effective plasma half-life.</td><td></td></tr>
<tr><td>5</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Require that TPE replacement fluid consist entirely or predominantly of fresh frozen plasma (FFP).</td><td></td></tr>
<tr><td>6</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Diagnose the GI hemorrhage as late postoperative hemorrhage (Late PPH) / sentinel bleed caused by corrosive pancreatic enzyme erosion of target vessels.</td><td></td></tr>
<tr><td>7</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Reasoning</span></td><td>Precisely localize the most likely culprit vessel of pseudoaneurysm rupture as the gastroduodenal artery (GDA) stump or common/proper hepatic artery.</td><td>[6]</td></tr>
<tr><td>8</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Reasoning</span></td><td>Propose "sandwich technique" for transcatheter arterial embolization (TAE) — simultaneous proximal and distal embolization of the parent artery.</td><td></td></tr>
<tr><td>9</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Set platelet count ≥ 50×10⁹/L as the absolute safety threshold before TAE.</td><td></td></tr>
<tr><td>10</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Reasoning</span></td><td>Propose a provocation test (e.g., intra-arterial papaverine injection) to unmask intermittent bleeding and localize the culprit vessel when DSA shows no active extravasation.</td><td></td></tr>
<tr><td>11</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Require urgent pre-/intraoperative infusion of fibrinogen concentrate or cryoprecipitate, with a target fibrinogen level ≥ 2.0 g/L.</td><td></td></tr>
<tr><td>12</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Style</span></td><td>Suggest direct application of thrombin or fibrin sealant around the suspected fistula site via the existing abdominal double-lumen drain for adjunctive physical sealing.</td><td></td></tr>
<tr><td>13</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Mandate 100% carbohydrate-based non-protein calories in PN — strictly lipid-free formulation.</td><td></td></tr>
<tr><td>14</td><td class="ex-w-pos">8.0</td><td><span class="ex-tp">Reasoning</span></td><td>Set total caloric target at "permissive underfeeding" strategy (15–25 kcal/kg/d) during the acute hyper-inflammatory phase.</td><td></td></tr>
<tr><td>15</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Reasoning</span></td><td>Prescribe trophic enteral feeding initiated at an ultra-low infusion rate of 10–20 mL/h.</td><td></td></tr>
<tr><td>16</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Specify that enteral formula delivered via nasojejunal tube must be a pre-digested, easily absorbed semi-elemental or short-peptide low-residue formulation.</td><td>[15]</td></tr>
<tr><td>17</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Require prophylactic high-dose IV thiamine (vitamin B1) supplementation before refeeding after prolonged catabolic depletion to prevent refeeding syndrome.</td><td></td></tr>
<tr><td>18</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Warn that enteral nutrition at norepinephrine ≥ 0.5 µg/kg/min carries a high risk of non-occlusive mesenteric ischemia (NOMI).</td><td></td></tr>
<tr><td>19</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Reasoning</span></td><td>Mandate that abdominal double-lumen drain management use only continuous low-negative-pressure suction (e.g., −10 to −20 cmH₂O); high-pressure irrigation is strictly prohibited.</td><td></td></tr>
<tr><td>20</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Require IV infusion of 20% or 25% concentrated human albumin to leverage hyperosmotic colloid oncotic pressure for mobilizing third-space fluid ("autologous volume resuscitation").</td><td></td></tr>
<tr><td>21</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Reasoning</span></td><td>Recommend continuous low-dose vasopressin (pitressin) infusion to augment blood pressure while simultaneously constricting the splanchnic vascular bed and reducing portal pressure.</td><td></td></tr>
<tr><td>22</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Style</span></td><td>Suggest assessment of extravascular lung water (EVLW) or venous congestion via transpulmonary thermodilution (PiCCO) or ultrasound VExUS scoring to precisely guide volume removal.</td><td></td></tr>
<tr><td>23</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Reasoning</span></td><td>Recommend early initiation of continuous renal replacement therapy (CRRT) with an initial net ultrafiltration target of 100–200 mL/h under vasopressor support.</td><td></td></tr>
<tr><td>24</td><td class="ex-w-neg">−3.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Recommending Abatacept administration before or during TPE.</td><td></td></tr>
<tr><td>25</td><td class="ex-w-neg">−3.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Using pure albumin as TPE replacement fluid in a patient with active hemorrhage and consumptive coagulopathy (PLT 12).</td><td></td></tr>
<tr><td>26</td><td class="ex-w-neg">−3.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Selecting regional citrate anticoagulation (RCA) as the first-line anticoagulation strategy for blood purification in a patient with severe hepatic impairment (TBil 65) and high-lactate shock.</td><td></td></tr>
<tr><td>27</td><td class="ex-w-neg">−3.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Initiating a second TPE cycle within &lt;24 hours of Abatacept administration (e.g., at 12–18 hours), before adequate drug exposure is achieved.</td><td></td></tr>
<tr><td>28</td><td class="ex-w-neg">−3.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Administering any IV lipid emulsion during severe hypertriglyceridemia (TG 7.2 mmol/L).</td><td></td></tr>
<tr><td>29</td><td class="ex-w-neg">−3.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Using hydroxyethyl starch (HES) for fluid resuscitation in acute kidney injury with severe capillary leak.</td><td></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<p class="ex-section-desc ex-reveal" style="text-align:left; max-width:none; font-style:italic; color:var(--ex-ink-muted);">
This case exemplifies the core challenge of clinical multidisciplinary reasoning: the pharmacokinetic conflict between therapeutic plasma exchange and biologic agent administration, the surgical contraindications imposed by consumptive coagulopathy (PLT 12 &times; 10&sup9;/L), and the nutritional sequencing dilemma under high-output pancreatic fistula, all operating under simultaneous time pressure with interdependent decision nodes. The Critical Negatives are particularly diagnostic: recommending Abatacept <em>before</em> TPE completion, or administering IV lipid emulsion at TG 7.2 mmol/L, represent errors that a junior resident might plausibly and confidently commit but that carry potentially fatal hemodynamic consequences.
</p>

<!-- Case 2: Finance -->
<div class="ex-case-item ex-reveal">
    <div class="ex-case-head">
        <span class="ex-case-number">02</span>
        <h4>Finance &mdash; Distressed Asset Analysis</h4>
    </div>
    <div class="ex-case-meta">
        <span class="ex-case-tag ex-tag-fin">Finance</span>
        <span class="ex-case-tag ex-tag-scenario">Distressed Asset Analysis</span>
    </div>
    <div class="ex-query-box">Vanke's (000002.SZ) USD bonds have dropped to 42 cents. S&P downgraded the rating from B− to CCC+ last month with a negative outlook — "further downgrade to selective default (SD) is only a matter of time." Last week our AMC special opportunities desk acquired \$50M face value of the 2027 4.25% USD bonds at an average price of 42 cents, cost \$21M — the largest single bet of our desk this year.

Debt structure: ~RMB 320B total interest-bearing debt. Onshore bank loans ~180B (65% or ~117B secured with land/construction mortgages; 35% or ~63B unsecured, pari passu with bonds). Onshore public bonds ~68B (all unsecured). Offshore USD bonds ~42B equivalent (unsecured, issued by Cayman entity). Revenue 375B but net loss of 19.8B — first annual loss in 30 years of listing; operating cash flow negative 8.5B.

Our valuation team's project-by-project reappraisal: Shenzhen projects (18%, 75.6B book) at 70% = 52.9B; Tier-1/2 non-Shenzhen (35%, 147B) at 60% = 88.2B; Tier-3/4 (47%, 197.4B) at 45% = 88.8B — total revaluation ~229.9B vs. 420B book (45% haircut). Cross-default is our largest risk variable.

Tasks: (1) Calculate unsecured creditor recovery rates under "orderly restructuring" vs. "disorderly liquidation" scenarios; (2) Assess whether the December-maturing "21 Vanke 04" (4.5B) will be repaid and cross-default impact; (3) Evaluate three Shenzhen SOE intervention modes — equity injection, guarantee, coordinated extension — impact on different creditor tiers; (4) Answer whether 42 cents provides adequate margin of safety, IRR ≥ 15% conditions, position-sizing triggers and stop-loss signals.</div>
    <div class="ex-rubrics-container">
        <div class="ex-rubrics-header" onclick="toggleExRubrics('case2')">
            <h5>Rubrics (click to expand/collapse)</h5>
            <div style="display:flex;align-items:center;gap:10px;">
                <span class="ex-rubrics-count">35 rubrics</span>
                <span class="ex-toggle-icon" id="ex-toggle-case2">&#x25BC;</span>
            </div>
        </div>
        <div class="ex-rubrics-collapsed" id="ex-rubrics-case2">
            <table class="ex-rtbl">
                <thead><tr><th>#</th><th>Weight</th><th>Type</th><th>Description</th><th>Deps</th></tr></thead>
                <tbody>
<tr><td>1</td><td class="ex-w-pos">1.0</td><td><span class="ex-tp">Extraction</span></td><td>Report that Vanke's total interest-bearing debt is approximately RMB 320B (onshore bank loans ~180B + onshore bonds ~68B + offshore USD bonds ~42B + other ~30B).</td><td></td></tr>
<tr><td>2</td><td class="ex-w-pos">1.0</td><td><span class="ex-tp">Extraction</span></td><td>Report that Vanke's under-construction and completed inventory has a book value of ~420B, with market revaluation at approximately 240B–280B.</td><td></td></tr>
<tr><td>3</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Reasoning</span></td><td>Calculate secured creditor claims at ~117B (180B bank loans × 65%).</td><td>[1]</td></tr>
<tr><td>4</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Reasoning</span></td><td>Under "orderly restructuring," compute distributable assets for unsecured creditors = revaluation − secured claims ≈ 240B–280B − 117B = 123B–163B.</td><td>[2, 3]</td></tr>
<tr><td>5</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Reasoning</span></td><td>Total unsecured claims ~173B (unsecured bank loans 63B + onshore bonds 68B + offshore USD bonds 42B) — note the 63B unsecured loans are pari passu.</td><td>[1]</td></tr>
<tr><td>6</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Orderly restructuring recovery rate = (229.9B − 117B) / 173B ≈ 65% (internal revaluation) or (260B − 117B) / 173B ≈ 83% (sell-side median).</td><td>[4, 5]</td></tr>
<tr><td>7</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Under "disorderly liquidation," estimate a significantly lower recovery rate (deeper inventory liquidation discount at 40%–50%, yielding only 30%–50% recovery).</td><td>[2, 5]</td></tr>
<tr><td>8</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Extraction</span></td><td>Identify that offshore USD bondholders face "structural subordination" — the Cayman issuer is 2–3 legal layers removed from onshore assets, imposing 6–12 months of additional recovery time.</td><td></td></tr>
<tr><td>9</td><td class="ex-w-pos">6.0</td><td><span class="ex-tp">Reasoning</span></td><td>Structural subordination discount: offshore USD bonds at 85%–90% of the 65% base recovery → actual recovery ~55–59 cents — 42 cents offers ~13–17 cents (31%–40%) margin of safety.</td><td>[6, 7, 8]</td></tr>
<tr><td>10</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Extraction</span></td><td>Identify "21 Vanke 04" (RMB 4.5B, maturing December 2025) as the nearest trigger — non-payment would constitute an onshore bond default, satisfying the cross-default clause ("financial indebtedness unpaid above USD 100M equivalent").</td><td></td></tr>
<tr><td>11</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Extraction</span></td><td>An onshore bond default would trigger cross-default acceleration of all offshore USD bonds (~42B, ~USD 5.8B), entitling all USD bondholders to demand immediate repayment.</td><td>[10]</td></tr>
<tr><td>12</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Reasoning</span></td><td>Quantify post-cross-default price impact on USD bonds (e.g., from 42 to 25–30 cents).</td><td>[11]</td></tr>
<tr><td>13</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Extraction</span></td><td>Shenzhen Metro (~28% stake) would most likely intervene via credit guarantee for onshore bonds (rather than direct equity injection) — a guarantee does not constitute state-asset leakage and resolves the near-term liquidity crisis through maturity extension.</td><td></td></tr>
<tr><td>14</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Reasoning</span></td><td>SOE credit guarantee mainly benefits onshore creditors (recovery 65% → 80%–90%), limited benefit to offshore USD bonds (55–59 → 60–65 cents) — structural subordination not eliminated by guarantee.</td><td>[13]</td></tr>
<tr><td>15</td><td class="ex-w-pos">6.0</td><td><span class="ex-tp">Reasoning</span></td><td>Clearly answer whether 42 cents provides adequate margin of safety.</td><td></td></tr>
<tr><td>16</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Reasoning</span></td><td>Define position-sizing triggers: add to position if USD bonds fall below 35 cents and Shenzhen Metro signals explicit intervention (e.g., guarantee announcement), increasing to USD 80M face value; stop-loss: liquidate if onshore default occurs with no SOE rescue and price breaches 25 cents.</td><td>[15]</td></tr>
<tr><td>17</td><td class="ex-w-pos">1.0</td><td><span class="ex-tp">Extraction</span></td><td>Report that Vanke posted a net loss of approximately RMB 19.8B in 2024 — the first annual loss since listing.</td><td></td></tr>
<tr><td>18</td><td class="ex-w-pos">1.0</td><td><span class="ex-tp">Extraction</span></td><td>Report that onshore non-standard debt has been overdue by more than 90 days (RMB 3.8B) but has not yet triggered an onshore bond default event.</td><td></td></tr>
<tr><td>19</td><td class="ex-w-pos">1.0</td><td><span class="ex-tp">Extraction</span></td><td>Report that the offshore USD bonds (2027 maturity, 4.25% coupon) currently trade in the 35–42 cents range.</td><td></td></tr>
<tr><td>20</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Calculate P&amp;L for the USD 21M position under different recovery rate scenarios.</td><td>[6, 7, 9]</td></tr>
<tr><td>21</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Extraction</span></td><td>Provide city-tier differentiated inventory discount: Shenzhen projects (18%, 75.6B book) at 70% = 52.9B; Tier-1/2 non-Shenzhen (35%, 147B) at 60% = 88.2B; Tier-3/4 (47%, 197.4B) at 45% = 88.8B — total revaluation ~229.9B.</td><td></td></tr>
<tr><td>22</td><td class="ex-w-pos">1.0</td><td><span class="ex-tp">Extraction</span></td><td>Report that onshore bonds (e.g., "20 Vanke 06") trade at approximately 72–78 cents on the dollar.</td><td></td></tr>
<tr><td>23</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Extraction</span></td><td>Identify that the S&amp;P downgrade to CCC+ triggers a triple negative feedback loop: (1) banks withdraw or refuse to roll over credit, accelerating cash burn; (2) asset buyers exploit distress to bid below revaluation; (3) refinancing costs spike, shutting all capital market access.</td><td></td></tr>
<tr><td>24</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Style</span></td><td>Provide a recovery rate calculation model in the appendix.</td><td></td></tr>
<tr><td>25</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Reasoning</span></td><td>Position recommendation: hold at 42 cents (expected recovery 55–59 cents, 31%–40% return); add below 35 if SOE signals emerge; stop-loss at 25 cents if onshore default + no bailout.</td><td>[15, 16]</td></tr>
<tr><td>26</td><td class="ex-w-neg">−5.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Ignoring cross-default clause — treating onshore and offshore bond defaults as independent events.</td><td></td></tr>
<tr><td>27</td><td class="ex-w-neg">−5.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Ignoring structural subordination — assigning identical recovery rates to offshore and onshore unsecured creditors.</td><td></td></tr>
<tr><td>28</td><td class="ex-w-neg">−5.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Using book value (420B) instead of market revaluation (240B–280B) to compute recovery rates.</td><td></td></tr>
<tr><td>29</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Reasoning</span></td><td>Margin of safety at 42 cents: expected recovery 55–59 cents vs. 42-cent entry yields ~13–17 cents profit (31%–40% return) — sufficient to absorb structural subordination discount and time-value erosion.</td><td>[9]</td></tr>
<tr><td>30</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Extraction</span></td><td>Forming an ad hoc committee requires assembling at least 25%–33% of USD bondholders (~10.5B–13.9B face value) to obtain an effective blocking position against restructuring proposals.</td><td></td></tr>
<tr><td>31</td><td class="ex-w-pos">2.0</td><td><span class="ex-tp">Extraction</span></td><td>Filing a winding-up petition in the Cayman court can serve as a negotiation pressure tool to accelerate SOE intervention — but risks triggering disorderly liquidation, making it a double-edged sword.</td><td></td></tr>
<tr><td>32</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Reasoning</span></td><td>Offshore USD bonds (42B) represent only 24.3% of total unsecured claims (173B) — the pari passu pro-rata share is inherently limited, further compressed by structural subordination.</td><td>[5]</td></tr>
<tr><td>33</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Reasoning</span></td><td>Operating cash flow of negative 8.5B implies ~700M monthly cash burn — without external capital injection, remaining cash reserves (~20B) can sustain operations for approximately 28 months.</td><td></td></tr>
<tr><td>34</td><td class="ex-w-neg">−4.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Excluding 63B unsecured bank loans from the unsecured creditor pool — using only 68B + 42B = 110B instead of the correct 173B.</td><td></td></tr>
<tr><td>35</td><td class="ex-w-neg">−3.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Failing to consider homebuyer pre-sale priority — under "Bao Jiao Lou" policy, homebuyers may rank ahead of all financial creditors.</td><td></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<p class="ex-section-desc ex-reveal" style="text-align:left; max-width:none; font-style:italic; color:var(--ex-ink-muted);">
The finance case demands simultaneous mastery of credit analysis, legal capital structure, and portfolio risk management: computing recovery rates under competing restructuring scenarios, modeling the structural subordination discount applicable to Cayman-issued offshore bonds, evaluating differential SOE intervention modes and their tier-specific creditor implications, and synthesizing these into actionable position-sizing and stop-loss recommendations. The Critical Negatives are especially revealing: ignoring cross-default propagation mechanics, substituting book value for market revaluation in recovery analysis, or treating offshore and onshore unsecured creditors as symmetric are precisely the errors that a model fluent in financial language would generate with high confidence, and that a trained analyst would immediately flag as disqualifying.
</p>

<!-- Case 3: Law -->
<div class="ex-case-item ex-reveal">
    <div class="ex-case-head">
        <span class="ex-case-number">03</span>
        <h4>Law &mdash; Cross-border Labor Dispute</h4>
    </div>
    <div class="ex-case-meta">
        <span class="ex-case-tag ex-tag-law">Law</span>
        <span class="ex-case-tag ex-tag-scenario">Cross-border Labor Dispute</span>
    </div>
    <div class="ex-query-box">TechGlobal Inc., a Delaware-incorporated tech company, established a wholly-owned subsidiary — Shanghai TaiKe Technology Co., Ltd. — in Pudong New Area, Shanghai in 2018. Shanghai TaiKe has independent legal personality, with registered capital of \$5M.

Mr. Li joined Shanghai TaiKe in March 2019 as General Manager and legal representative, signing an open-ended employment contract at RMB 80,000/month. He reports to TechGlobal Inc.'s APAC VP.

In August 2024, an anonymous tip alleged Mr. Li received supplier kickbacks. Internal investigation confirmed: between Jan 2023 and Jun 2024, Mr. Li received RMB 350,000 in procurement kickbacks deposited to his personal account.

On October 15, 2024, TechGlobal Inc.'s headquarters directly issued a termination notice to Mr. Li, signed by the APAC VP with TechGlobal Inc.'s seal — citing "serious violation of company rules and damage to company interests."

Mr. Li disputes the termination: (1) his contract is with Shanghai TaiKe — the parent company has no authority to terminate; (2) insufficient evidence of kickbacks; (3) even if kickbacks occurred, proper legal procedures were not followed.

Required analysis: (1) Employment relationship determination — legal relationship between Mr. Li, Shanghai TaiKe, and TechGlobal Inc.; (2) Labor arbitration feasibility — proper respondent, jurisdiction, and calculation of illegal termination compensation; (3) Criminal risk assessment — whether accepting RMB 350K in kickbacks constitutes "bribery by non-state personnel" and potential penalties; (4) Criminal complaint feasibility — whether Mr. Li can file criminal charges against TechGlobal or Shanghai TaiKe.</div>
    <div class="ex-rubrics-container">
        <div class="ex-rubrics-header" onclick="toggleExRubrics('case3')">
            <h5>Rubrics (click to expand/collapse)</h5>
            <div style="display:flex;align-items:center;gap:10px;">
                <span class="ex-rubrics-count">35 rubrics</span>
                <span class="ex-toggle-icon" id="ex-toggle-case3">&#x25BC;</span>
            </div>
        </div>
        <div class="ex-rubrics-collapsed" id="ex-rubrics-case3">
            <table class="ex-rtbl">
                <thead><tr><th>#</th><th>Weight</th><th>Type</th><th>Description</th><th>Deps</th></tr></thead>
                <tbody>
<tr><td>1</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Extraction</span></td><td>Identify that Shanghai TaiKe is a legally established subsidiary with independent legal personality.</td><td></td></tr>
<tr><td>2</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Reasoning</span></td><td>Establish that a subsidiary and parent are two independent legal entities, each bearing independent civil liability.</td><td>[1]</td></tr>
<tr><td>3</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Extraction</span></td><td>Confirm that Mr. Li signed an employment contract with Shanghai TaiKe, establishing an employment relationship between them.</td><td></td></tr>
<tr><td>4</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Extraction</span></td><td>Identify that Mr. Li's employer is Shanghai TaiKe, not TechGlobal Inc.</td><td>[3]</td></tr>
<tr><td>5</td><td class="ex-w-pos">6.0</td><td><span class="ex-tp">Reasoning</span></td><td>Conclude that TechGlobal Inc., as the parent company, is not Mr. Li's employer and has no authority to directly terminate his employment contract.</td><td>[2, 4]</td></tr>
<tr><td>6</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Confirm that TechGlobal Inc.'s direct termination of Mr. Li's employment contract constitutes unlawful termination.</td><td>[5]</td></tr>
<tr><td>7</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Determine that the proper respondent in labor arbitration should be Shanghai TaiKe, not TechGlobal Inc.</td><td>[4]</td></tr>
<tr><td>8</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Extraction</span></td><td>State that labor arbitration jurisdiction lies with the labor dispute arbitration commission at the place of contract performance or the employer's domicile.</td><td></td></tr>
<tr><td>9</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Reasoning</span></td><td>Determine that the competent arbitration body is the Shanghai Pudong New Area Labor and Personnel Dispute Arbitration Commission.</td><td>[8]</td></tr>
<tr><td>10</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Extraction</span></td><td>State that Mr. Li may claim compensation for unlawful termination of the employment contract.</td><td>[6]</td></tr>
<tr><td>11</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Calculate illegal termination compensation at 2× the economic compensation standard.</td><td>[10]</td></tr>
<tr><td>12</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Calculate the economic compensation as RMB 480,000 (monthly salary 80K × 6 years of service).</td><td></td></tr>
<tr><td>13</td><td class="ex-w-pos">6.0</td><td><span class="ex-tp">Reasoning</span></td><td>Calculate total illegal termination compensation: RMB 960,000 (economic compensation 80K × 6 years × 2).</td><td>[11, 12]</td></tr>
<tr><td>14</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Identify that accepting 350K in kickbacks may constitute "bribery by non-state personnel" (非国家工作人员受贿罪).</td><td></td></tr>
<tr><td>15</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Extraction</span></td><td>State that the subject of bribery by non-state personnel is an employee of a company, enterprise, or other entity.</td><td></td></tr>
<tr><td>16</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Reasoning</span></td><td>Confirm that Mr. Li, as General Manager of Shanghai TaiKe, satisfies the subject element of bribery by non-state personnel.</td><td>[15]</td></tr>
<tr><td>17</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Extraction</span></td><td>State that the prosecution threshold for bribery by non-state personnel is RMB 30,000 or more.</td><td></td></tr>
<tr><td>18</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Reasoning</span></td><td>Confirm that RMB 350K exceeds the prosecution threshold (30K), warranting criminal liability.</td><td>[17]</td></tr>
<tr><td>19</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Extraction</span></td><td>State the sentencing range for "relatively large amount" (60K–1M) in bribery by non-state personnel: up to 3 years imprisonment or criminal detention, plus a fine.</td><td></td></tr>
<tr><td>20</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Extraction</span></td><td>State the sentencing range for "especially large amount" (1M or above) in bribery by non-state personnel: 3–10 years imprisonment, plus a fine.</td><td></td></tr>
<tr><td>21</td><td class="ex-w-pos">5.0</td><td><span class="ex-tp">Reasoning</span></td><td>Determine that RMB 350K falls under "relatively large amount" (60K–1M) — potential sentence: ≤ 3 years imprisonment or detention with fine.</td><td>[19, 20]</td></tr>
<tr><td>22</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Reasoning</span></td><td>Correctly conclude that the kickback behavior does not constitute embezzlement (职务侵占罪).</td><td></td></tr>
<tr><td>23</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Reasoning</span></td><td>Analyze whether Mr. Li can file a criminal complaint against TechGlobal Inc. or Shanghai TaiKe, and reach a negative conclusion.</td><td></td></tr>
<tr><td>24</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Extraction</span></td><td>State that the statute of limitations for labor arbitration is one year, commencing from the date the rights holder knew or should have known of the infringement.</td><td></td></tr>
<tr><td>25</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Reasoning</span></td><td>Confirm that Mr. Li's labor arbitration claim has not exceeded the limitation period.</td><td>[24]</td></tr>
<tr><td>26</td><td class="ex-w-pos">4.0</td><td><span class="ex-tp">Reasoning</span></td><td>Advise strategic coordination between labor arbitration and criminal defense — exercise caution when discussing kickback facts in arbitration proceedings.</td><td></td></tr>
<tr><td>27</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Reasoning</span></td><td>Recommend that Mr. Li seek to hold Shanghai TaiKe liable for unlawful termination compensation in labor arbitration.</td><td>[7, 13]</td></tr>
<tr><td>28</td><td class="ex-w-pos">3.0</td><td><span class="ex-tp">Reasoning</span></td><td>Advise Mr. Li of the criminal prosecution risk and recommend pursuing mitigating factors in criminal proceedings (e.g., voluntary return of illicit gains, guilty plea and acceptance of penalty).</td><td>[14, 18]</td></tr>
<tr><td>29</td><td class="ex-w-pos">1.0</td><td><span class="ex-tp">Style</span></td><td>The legal opinion is structured with three main sections: "Case Facts," "Legal Analysis," and "Conclusions and Recommendations."</td><td></td></tr>
<tr><td>30</td><td class="ex-w-pos">1.0</td><td><span class="ex-tp">Style</span></td><td>Each legal opinion is supported by the corresponding statutory provisions.</td><td></td></tr>
<tr><td>31</td><td class="ex-w-neg">−5.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Erroneously concluding that TechGlobal Inc. can directly terminate Mr. Li's employment contract.</td><td></td></tr>
<tr><td>32</td><td class="ex-w-neg">−5.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Erroneously listing TechGlobal Inc. as the respondent in labor arbitration.</td><td></td></tr>
<tr><td>33</td><td class="ex-w-neg">−5.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Erroneously concluding that accepting kickbacks constitutes embezzlement (职务侵占罪).</td><td></td></tr>
<tr><td>34</td><td class="ex-w-neg">−5.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Erroneously classifying RMB 350K as "especially large amount" instead of "relatively large amount."</td><td></td></tr>
<tr><td>35</td><td class="ex-w-neg">−5.0</td><td><span class="ex-tp ex-tp-cn">Critical Negative</span></td><td>Erroneously concluding that Mr. Li can file a criminal complaint against the company.</td><td></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<p class="ex-section-desc ex-reveal" style="text-align:left; max-width:none; font-style:italic; color:var(--ex-ink-muted);">
This case probes the intersection of corporate law, employment law, and criminal law within a single integrated fact pattern. The rubric structure is particularly instructive: the parent/subsidiary legal independence determination cascades into arbitration respondent identification, which in turn cascades into compensation quantum calculation, forming a multi-level reasoning chain where an error at the root invalidates the entire downstream analysis. Meanwhile, the criminal liability assessment operates on a parallel inferential track where misclassifying the offense type (embezzlement vs. bribery by non-state personnel) or the statutory amount tier produces categorically erroneous sentencing outcomes with no self-correcting mechanism. Each of these characteristic failure modes is independently encoded as a Critical Negative with substantial penalty weight.
</p>

<!-- ==================== DISCUSSION ==================== -->

<hr class="ex-section-rule">

<div class="ex-reveal">
<h2 id="ex-enables" style="font-family: var(--ex-font-display); text-align:center; font-size:1.5em; font-weight:700; color:var(--ex-ink); margin-bottom:6px;">What This Enables</h2>
<p style="text-align:center; font-family:var(--ex-font-body); font-size:0.95em; color:var(--ex-ink-muted); margin-bottom:28px;">Three methodological implications of expert-authored evaluation infrastructure for the broader field</p>
</div>

<div class="ex-discussion-card ex-reveal">
    <h4>Diagnostic Benchmarking at Professional Grade</h4>
    <p>Prevailing benchmarks measure surface-level task completion, collapsing the internal structure of professional reasoning into aggregate accuracy scores that obscure the distinction between genuine competence and superficial fluency. Our rubric architecture, with differentially weighted criteria and Critical Negatives, enables evaluation that diagnostically separates a model producing a plausible-sounding answer from one that reasons through the correct causal chain with appropriate failure-mode awareness. This is the difference between a system that passes a standardized medical examination and one to which a practicing clinician would delegate patient care.</p>
</div>

<div class="ex-discussion-card ex-reveal">
    <h4>Expert Signal as Training Data</h4>
    <p>Our experiments establish that rubric-annotated expert data functions not merely as an evaluative instrument but as a generative training signal: supervised fine-tuning on this corpus produces measurable and consistent gains not only on our own held-out test distribution but on entirely independent evaluation benchmarks constructed by separate research groups. The structured reasoning patterns encoded in expert rubrics (dependency awareness, failure-mode avoidance, source-grounded justification) appear to transfer as a domain-general capability improvement, suggesting that expert annotation quality may be a more efficient lever for capability gain than data volume or model scale.</p>
</div>

<div class="ex-discussion-card ex-reveal">
    <h4>Toward Domain-Specific Alignment</h4>
    <p>Generic RLHF and instruction-tuning paradigms optimize for user satisfaction, a useful but fundamentally imprecise proxy for the kind of professional correctness that high-stakes domains require. Our dataset opens a methodological path toward domain-specific alignment, where the reward signal is defined not by aggregate human preference ratings but by the structured, verifiable judgment of credentialed practitioners operating under the professional standards and liability frameworks that govern real-world practice.</p>
</div>

<!-- ==================== CLOSING ==================== -->

<hr class="ex-section-rule">

<div class="ex-closing-cta ex-reveal">
    <h2 style="font-family:var(--ex-font-display); font-size:1.5em; font-weight:700; text-align:center; margin-bottom:16px; color:var(--ex-ink);">Built by Domain Experts, for Domain Intelligence</h2>
    <p>
        ExpertEval represents a deliberate methodological departure from the scale-driven paradigm that dominates contemporary benchmark design. Rather than pursuing breadth through automated generation or crowd-sourced annotation, we invest in depth through expert authorship, producing 3,213 cases where every query and every rubric criterion reflects the professional judgment of a credentialed practitioner with verifiable domain expertise.
    </p>
    <p>
        The empirical results validate the hypothesis that motivates this design philosophy: a 35B sparse mixture-of-experts model, trained on our expert-annotated corpus, achieves state-of-the-art performance across held-out expert evaluation, cross-benchmark generalization, and deep research tasks — consistently outperforming frontier systems with orders of magnitude more parameters and substantially larger training budgets. We interpret this as convergent evidence that the quality of training signal, rather than the quantity of training data or the scale of model parameters, constitutes the binding constraint on professional-grade AI capability.
    </p>
    <div style="text-align:center; margin-top:28px;">
        <span class="ex-cta-badge">3,213 Cases</span>
        <span class="ex-cta-badge">207 Scenarios</span>
        <span class="ex-cta-badge">21.83 Avg Rubrics</span>
    </div>
</div>

<div class="ex-closing-cta ex-reveal" style="margin-top: 32px;">
    <h2 style="font-family:var(--ex-font-display); font-size:1.5em; font-weight:700; text-align:center; margin-bottom:16px; color:var(--ex-ink);">Contact</h2>
    <p style="text-align:center;">
        For questions, collaborations, or access requests, reach us at:<br>
        <a href="mailto:contact@unipat.ai">contact@unipat.ai</a>
    </p>
</div>

<!-- ==================== JAVASCRIPT ==================== -->
<script>
(function() {
    /* ---------- Rubric Toggle ---------- */
    window.toggleExRubrics = function(caseId) {
        var el = document.getElementById('ex-rubrics-' + caseId);
        var icon = document.getElementById('ex-toggle-' + caseId);
        if (!el) return;
        if (el.classList.contains('ex-rubrics-collapsed')) {
            el.classList.remove('ex-rubrics-collapsed');
            el.classList.add('ex-rubrics-expanded');
            if (icon) icon.classList.add('expanded');
        } else {
            el.classList.remove('ex-rubrics-expanded');
            el.classList.add('ex-rubrics-collapsed');
            if (icon) icon.classList.remove('expanded');
        }
    };

    /* ---------- Scroll Reveal ---------- */
    var revealEls = document.querySelectorAll('.ex-reveal');
    if ('IntersectionObserver' in window) {
        var obs = new IntersectionObserver(function(entries) {
            entries.forEach(function(e) {
                if (e.isIntersecting) {
                    e.target.classList.add('ex-visible');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.15 });
        revealEls.forEach(function(el) { obs.observe(el); });
    } else {
        revealEls.forEach(function(el) { el.classList.add('ex-visible'); });
    }

    /* ---------- Domain Doughnut Chart ---------- */
    var canvas = document.getElementById('exDomainChart');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var size = 220;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);

    var data = [
        { label: 'Medicine', value: 1146, color: '#134e4a' },
        { label: 'Finance', value: 1147, color: '#0d9488' },
        { label: 'Law',     value: 920,  color: '#2dd4bf' }
    ];
    var total = data.reduce(function(s, d) { return s + d.value; }, 0);
    var cx = size / 2, cy = size / 2, R = 90, r = 52;
    var startAngle = -Math.PI / 2;

    data.forEach(function(seg) {
        var sweep = (seg.value / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.arc(cx, cy, R, startAngle, startAngle + sweep);
        ctx.arc(cx, cy, r, startAngle + sweep, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = seg.color;
        ctx.fill();
        startAngle += sweep;
    });

    /* Centre label */
    ctx.fillStyle = '#1a1a2e';
    ctx.font = '700 22px Inter, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('3,213', cx, cy - 8);
    ctx.fillStyle = '#6b7280';
    ctx.font = '500 11px Inter, system-ui, sans-serif';
    ctx.fillText('Total Cases', cx, cy + 12);
})();

// TOC scroll progress
document.addEventListener('scroll', function() {
    var bar = document.getElementById('ex-toc-bar');
    if (bar) {
        var h = document.documentElement;
        var pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
        bar.style.width = Math.min(pct, 100) + '%';
    }
});

// TOC click handling — prevent global page-transition from intercepting
(function() {
    var toc = document.getElementById('ex-toc');
    if (toc) {
        toc.addEventListener('click', function(e) {
            var anchor = e.target.closest('a');
            if (!anchor) return;
            var href = anchor.getAttribute('href');
            if (href && href.charAt(0) === '#') {
                e.preventDefault();
                e.stopPropagation();
                var target = document.getElementById(href.slice(1));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    history.replaceState(null, '', href);
                }
            }
        });
    }
})();

// TOC active-link tracking
(function() {
    var tocLinks = document.querySelectorAll('.ex-toc-link');
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

