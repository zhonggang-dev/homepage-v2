Title: Monthly-SWEBench 
Date: 2026-06-30
Rank: 🏆 2026.06: GPT-5.5-High
Domain: Coding
Summary: A continuously updated benchmark evaluating AI coding agents on real-world software engineering tasks from GitHub issues.
HeaderImage: /static/images/swebench/swe_logo.png

<style>
/* ============================================
   Monthly-SWEBench Leaderboard
   ============================================ */

/* Break out of the narrow .markdown / .container wrappers */
.markdown:has(.swe-section) { max-width: 100% !important; }
.container:has(.swe-section) { max-width: 1260px !important; width: 95% !important; }
/* Fallback for browsers without :has() */
.markdown { max-width: 100% !important; }

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.swe-section {
  position: relative;
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #1a1a1a;
  --font-r: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.swe-inner {
  max-width: 1160px;
  margin: 0 auto;
}

/* ---------- Header ---------- */
.swe-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  padding-top: 0.5rem;
}

.swe-title {
  font-family: var(--font-r);
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: #0f172a;
  text-align: center;
  margin: 0;
}

.swe-intro {
  font-family: var(--font-r);
  font-size: 1rem;
  line-height: 1.65;
  color:rgb(0, 0, 0);
  text-align: center;
  max-width: 680px;
  margin: 0;
}

.swe-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.swe-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-r);
  font-size: 0.85rem;
  font-weight: 500;
  color:rgb(240, 140, 0);
  text-decoration: none !important;
  padding: 7px 18px;
  border: 1px solid rgb(240, 140, 0);
  border-radius: 20px;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.swe-link-btn:hover {
  color: #1a1a1a;
  border-color: #999;
  background: #f5f5f5;
  text-decoration: none !important;
}

.swe-link-btn svg { flex-shrink: 0; }

/* ---------- Category Tabs ---------- */
.swe-cat-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
}

.swe-cat-tab {
  font-family: var(--font-r);
  font-size: 0.8rem;
  font-weight: 600;
  color: #888;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 6px 18px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
  white-space: nowrap;
}

.swe-cat-tab:hover {
  color: #333;
  background: #eee;
  border-color: #ccc;
}

.swe-cat-tab.is-active {
  color: #fff;
  background: #1a1a1a;
  border-color: #1a1a1a;
}

/* ---------- Timeline Player ---------- */
.swe-player {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 0 1.25rem;
}

.swe-play-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid #ddd;
  background: #f8f8f8;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}

.swe-play-btn:hover {
  background: #eee;
  border-color: #bbb;
  color: #333;
}

.swe-timeline {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 4px;
}

.swe-tl-dot {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
}

.swe-tl-dot-inner {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  border: 2px solid #ccc;
  transition: background 0.3s, border-color 0.3s, transform 0.3s;
}

.swe-tl-dot.is-past .swe-tl-dot-inner {
  background: #888;
  border-color: #888;
}

.swe-tl-dot.is-active .swe-tl-dot-inner {
  background: #333;
  border-color: #333;
  transform: scale(1.3);
  box-shadow: 0 0 8px rgba(0,0,0,0.15);
}

.swe-tl-label {
  font-family: var(--font-r);
  font-size: 0.68rem;
  color: #aaa;
  white-space: nowrap;
  transition: color 0.3s;
}

.swe-tl-dot.is-active .swe-tl-label { color: #333; }

.swe-tl-track {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: #e0e0e0;
  transform: translateY(-3px);
  z-index: 1;
  border-radius: 1px;
  overflow: hidden;
}

.swe-tl-progress {
  height: 100%;
  background: #888;
  border-radius: 1px;
  transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Coming Soon dot */
.swe-tl-dot.is-coming-soon .swe-tl-dot-inner {
  background: transparent;
  border: 2px dashed #bbb;
}

.swe-tl-dot.is-coming-soon.is-active .swe-tl-dot-inner {
  border-color: #888;
  background: transparent;
  box-shadow: none;
  transform: scale(1.3);
}

.swe-tl-dot.is-coming-soon .swe-tl-label {
  font-style: italic;
  color: #bbb;
}

.swe-tl-dot.is-coming-soon.is-active .swe-tl-label { color: #888; }

/* ---------- Table Header ---------- */
.swe-table-header {
  display: flex;
  align-items: center;
  padding: 0.85rem 1.5rem;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-bottom: 2px solid #e9ecef;
  border-radius: 10px 10px 0 0;
  font-family: var(--font-r);
  font-size: 0.72rem;
  font-weight: 700;
  color: #94a3b8;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.swe-th-rank  { width: 56px; flex-shrink: 0; }
.swe-th-model { flex: 1; min-width: 0; padding-left: 0.5rem; }
.swe-th-pass1 { width: 92px; flex-shrink: 0; text-align: right; padding-right: 0.65rem; }
.swe-th-avgep { width: 112px; flex-shrink: 0; text-align: right; padding-right: 0.65rem; }
.swe-th-maxturns { width: 92px; flex-shrink: 0; text-align: right; padding-right: 0.65rem; }
.swe-th-timeouts { width: 88px; flex-shrink: 0; text-align: right; padding-right: 0.65rem; }
.swe-th-timeoutturns { width: 142px; flex-shrink: 0; text-align: right; padding-right: 0.65rem; }
.swe-th-agent { width: 100px; flex-shrink: 0; text-align: right; padding-right: 0.65rem; }
.swe-th-date  { width: 82px;  flex-shrink: 0; text-align: right; }

/* ---------- Table Body ---------- */
.swe-table-body {
  position: relative;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-top: none;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
}

/* ---------- Animated Row ---------- */
.swe-row {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  height: 60px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.5s ease,
              background 0.15s ease;
  will-change: transform, opacity;
}

.swe-row:hover { background: #f8fafc; }

.swe-row::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 1px;
  background: #f0f0f0;
}

.swe-row.is-faded {
  opacity: 0;
  pointer-events: none;
}

/* Rank column */
.swe-col-rank {
  width: 60px;
  flex-shrink: 0;
}

.swe-rank-badge {
  font-family: var(--font-r);
  font-size: 1.15rem;
  font-weight: 700;
  color: #94a3b8;
}

.swe-rank-1 .swe-rank-badge { color: #d4850a; font-weight: 800; font-size: 1.25rem; }
.swe-rank-2 .swe-rank-badge { color: #3b5bdb; font-weight: 800; font-size: 1.25rem; }
.swe-rank-3 .swe-rank-badge { color: #c2255c; font-weight: 800; font-size: 1.25rem; }

/* Model column */
.swe-col-model {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-left: 0.5rem;
}

.swe-model-avatar {
  width: 38px;
  height: 38px;
  border-radius: 18%;
  object-fit: cover;
  flex-shrink: 0;
  background: #ffffff;
  border: 1.5px solid #e0e0e0;
  padding: 3px;
}

.swe-model-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.swe-model-name {
  font-family: var(--font-r);
  font-size: 0.95rem;
  font-weight: 600;
  color: #1e293b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.swe-model-org {
  font-family: var(--font-r);
  font-size: 0.72rem;
  color: #94a3b8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 2px;
}

.swe-col-pass1 {
  width: 92px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.65rem;
}

.swe-score-value {
  font-family: var(--font-r);
  font-size: 1.05rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: #1e293b;
  white-space: nowrap;
}

.swe-col-avgep {
  width: 112px;
  flex-shrink: 0;
  text-align: right;
  padding-right: 0.65rem;
  font-family: var(--font-r);
  font-size: 0.88rem;
  font-variant-numeric: tabular-nums;
  color: #64748b;
}

.swe-col-maxturns {
  width: 92px;
  flex-shrink: 0;
  text-align: right;
  padding-right: 0.65rem;
  font-family: var(--font-r);
  font-size: 0.88rem;
  font-variant-numeric: tabular-nums;
  color: #64748b;
}

.swe-col-timeouts {
  width: 88px;
  flex-shrink: 0;
  text-align: right;
  padding-right: 0.65rem;
  font-family: var(--font-r);
  font-size: 0.88rem;
  font-variant-numeric: tabular-nums;
  color: #64748b;
}

.swe-col-timeoutturns {
  width: 142px;
  flex-shrink: 0;
  text-align: right;
  padding-right: 0.65rem;
  font-family: var(--font-r);
  font-size: 0.82rem;
  font-variant-numeric: tabular-nums;
  color: #64748b;
  white-space: nowrap;
}

.swe-col-agent {
  width: 100px;
  flex-shrink: 0;
  text-align: right;
  padding-right: 0.65rem;
  font-family: var(--font-r);
  font-size: 0.82rem;
  color: #94a3b8;
}

.swe-agent-tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-size: 0.78rem;
  font-weight: 500;
  white-space: nowrap;
}

.swe-col-date {
  width: 82px;
  flex-shrink: 0;
  text-align: right;
  font-family: var(--font-r);
  font-size: 0.85rem;
  font-variant-numeric: tabular-nums;
  color: #94a3b8;
}

/* ---------- Stats bar ---------- */
.swe-stats {
  display: flex;
  gap: 1px;
  background: #e9ecef;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.25rem;
}

.swe-stat-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
  background: #fff;
  text-align: center;
  transition: background 0.15s;
}

.swe-stat-item:first-child { border-radius: 11px 0 0 11px; }
.swe-stat-item:last-child  { border-radius: 0 11px 11px 0; }
.swe-stat-item:hover { background: #f8fafc; }

.swe-stat-num {
  font-family: var(--font-r);
  font-size: 1.6rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

.swe-stat-label {
  font-family: var(--font-r);
  font-size: 0.68rem;
  font-weight: 500;
  color: #94a3b8;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-top: 6px;
}

/* Info cards grid */
.swe-info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2.5rem;
}

.swe-info-card {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  overflow: hidden;
}

.swe-card-accent { height: 3px; width: 100%; }

.swe-card-body { padding: 1.1rem 1.25rem 1.25rem; }

.swe-card-title {
  font-family: var(--font-r);
  font-size: 0.9rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.2rem;
}

.swe-card-sub {
  font-family: var(--font-r);
  font-size: 0.77rem;
  color: #94a3b8;
  margin: 0 0 0.85rem;
  line-height: 1.5;
}

/* Category split */
.swe-cat-split {
  display: flex;
  border: 1px solid #f1f5f9;
  border-radius: 10px;
  overflow: hidden;
}

.swe-cat-block {
  flex: 1;
  padding: 0.7rem 0.85rem;
}

.swe-cat-block:first-child {
  border-right: 1px solid #e9ecef;
  background: #fff5f6;
}

.swe-cat-block:last-child { background: #f0f4ff; }

.swe-cat-big {
  font-family: var(--font-r);
  font-size: 2rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

.swe-cat-badge {
  display: inline-block;
  margin: 5px 0 6px;
  padding: 1px 7px;
  border-radius: 5px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.72rem;
  font-weight: 600;
}

.swe-cat-badge.l-red  { background: #fff1f2; border: 1px solid #fecdd3; color: #e11d48; }
.swe-cat-badge.l-blue { background: #eff6ff; border: 1px solid #bfdbfe; color: #2563eb; }

.swe-cat-desc {
  font-family: var(--font-r);
  font-size: 0.75rem;
  color: #64748b;
  line-height: 1.45;
}

/* Pipeline steps */
.swe-pipeline {
  list-style: none;
  margin: 0;
  padding: 0;
}

.swe-pipeline-step {
  display: flex;
  gap: 10px;
  align-items: stretch;
}

.swe-pipeline-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22px;
  flex-shrink: 0;
}

.swe-pipeline-num {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #1e293b;
  color: #fff;
  font-family: var(--font-r);
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.swe-pipeline-line {
  width: 1.5px;
  flex: 1;
  background: #e2e8f0;
  min-height: 8px;
}

.swe-pipeline-text {
  font-family: var(--font-r);
  font-size: 0.8rem;
  color: #475569;
  line-height: 1.55;
  padding: 2px 0 12px;
}

.swe-pipeline-step:last-child .swe-pipeline-text { padding-bottom: 0; }

/* Inline code pill */
.swe-code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.76rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 0 5px;
  border-radius: 4px;
  color: #334155;
}

/* QA checklist */
.swe-qa-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.swe-qa-item {
  display: flex;
  gap: 9px;
  align-items: flex-start;
  font-family: var(--font-r);
  font-size: 0.8rem;
  color: #475569;
  line-height: 1.55;
}

.swe-qa-check {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #f0fdf4;
  border: 1.5px solid #86efac;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

/* Contributors */
.swe-contributors {
  /* margin-top: 2rem; */
  text-align: center;
  font-family: var(--font-r);
  font-size: 0.82rem;
  color:rgb(0, 0, 0);
}

.swe-contributors-label {
  font-weight: 600;
  color: #64748b;
  margin-right: 6px;
}

/* Detail sections */
.swe-detail {
  margin-top: 2.5rem;
}

.swe-detail-title {
  font-family: var(--font-r);
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.75rem;
}

.swe-detail-text {
  font-family: var(--font-r);
  font-size: 0.88rem;
  color: #475569;
  line-height: 1.7;
  margin: 0 0 1.5rem;
}

.swe-findings {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.swe-finding {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 0.85rem 1rem;
  background: #f8fafc;
  border-left: 3px solid #3b82f6;
  border-radius: 0 8px 8px 0;
}

.swe-finding-num {
  font-family: var(--font-r);
  font-size: 0.78rem;
  font-weight: 700;
  color: #3b82f6;
  background: #eff6ff;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.swe-finding-body {
  font-family: var(--font-r);
  font-size: 0.84rem;
  color: #334155;
  line-height: 1.6;
}

.swe-finding-label {
  font-weight: 700;
  color: #0f172a;
}

@media (max-width: 860px) {
  .swe-info-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 560px) {
  .swe-info-grid { grid-template-columns: 1fr; }
  .swe-stats { flex-wrap: wrap; }
  .swe-stat-item { min-width: 45%; border-radius: 0; }
}

/* Fade-in animation */
.swe-fade-in {
  animation: sweFadeIn 0.8s ease;
}

@keyframes sweFadeIn {
  0%   { opacity: 0; transform: translateY(4px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* ---------- Coming Soon ---------- */
.swe-coming-soon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 10px;
}

.swe-coming-soon p {
  font-family: var(--font-r);
  font-size: 1.1rem;
  color: #94a3b8;
  font-style: italic;
  margin: 0;
}

/* ---------- Eval Note ---------- */
.swe-eval-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 2rem 0 0;
  padding: 14px 24px;
  background: #f0f9ff;
  border: 1px solid #bfdbfe;
  border-radius: 10px;
  font-family: var(--font-r);
  font-size: 0.85rem;
  color: #1e40af;
  font-weight: 500;
}

.swe-eval-note svg { flex-shrink: 0; width: 18px; height: 18px; }

/* ---------- Responsive ---------- */
@media (max-width: 768px) {
  .swe-cat-tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 4px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .swe-cat-tabs::-webkit-scrollbar { display: none; }
}

@media (max-width: 700px) {
  .swe-table-header,
  .swe-row { padding: 0 0.75rem; }
  .swe-row::after { left: 0.75rem; right: 0.75rem; }
  .swe-col-agent, .swe-th-agent { display: none; }
  .swe-col-date,  .swe-th-date  { display: none; }
  .swe-col-timeoutturns, .swe-th-timeoutturns { display: none; }
  .swe-col-pass1 { width: auto; }
  .swe-th-pass1  { width: auto; }
  .swe-col-avgep { width: auto; }
  .swe-th-avgep  { width: auto; }
  .swe-model-name { font-size: 0.88rem; }
  .swe-model-org  { font-size: 0.65rem; }
  .swe-score-value { font-size: 0.92rem; }
  .swe-col-rank { width: 44px; }
  .swe-th-rank  { width: 44px; }
  .swe-rank-badge { font-size: 1rem; }
  .swe-model-avatar { width: 32px; height: 32px; }
  .swe-play-btn { width: 34px; height: 34px; }
  .swe-tl-label { font-size: 0.6rem; }
  .swe-title { font-size: 1.8rem; }
}

@media (max-width: 480px) {
  .swe-table-header,
  .swe-row { padding: 0 0.5rem; }
  .swe-row::after { left: 0.5rem; right: 0.5rem; }
  .swe-col-avgep, .swe-th-avgep { display: none; }
  .swe-col-timeouts, .swe-th-timeouts { display: none; }
  .swe-model-name { font-size: 0.82rem; }
  .swe-col-model { gap: 0.4rem; padding-left: 0.25rem; }
}

/* ============================================
   Blog Content Styles (sl- prefix)
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap');

:root {
    --sl-font-display: 'Inter', -apple-system, sans-serif;
    --sl-font-body: 'Inter', 'Segoe UI', sans-serif;
    --sl-font-mono: 'JetBrains Mono', ui-monospace, monospace;
    --sl-font-serif: 'Crimson Pro', Georgia, serif;
    --sl-ink: #0c1222;
    --sl-ink-soft: #334155;
    --sl-ink-muted: #64748b;
    --sl-surface: #ffffff;
    --sl-surface-raised: #f8fafc;
    --sl-surface-sunken: #f1f5f9;
    --sl-border: #e2e8f0;
    --sl-accent: #1e40af;
    --sl-accent-light: #3b82f6;
    --sl-accent-lighter: #dbeafe;
    --sl-accent-dark: #1e3a8a;
    --sl-success: #059669;
    --sl-danger: #dc2626;
    --sl-warning: #d97706;
    --sl-radius-sm: 8px;
    --sl-radius-md: 14px;
    --sl-radius-lg: 20px;
    --sl-shadow-sm: 0 1px 3px rgba(15,23,42,0.04), 0 1px 2px rgba(15,23,42,0.06);
    --sl-shadow-md: 0 4px 16px rgba(15,23,42,0.06), 0 2px 4px rgba(15,23,42,0.04);
    --sl-shadow-lg: 0 12px 40px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.04);
}

/* --- Section Divider --- */
.sl-section-rule {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--sl-border) 20%, var(--sl-accent) 50%, var(--sl-border) 80%, transparent);
    margin: 56px 0;
    opacity: 0.5;
}

/* --- Epigraph --- */
.sl-epigraph {
    max-width: 700px;
    margin: 0 auto 48px;
    padding: 28px 36px;
    border-left: 4px solid var(--sl-accent);
    background: linear-gradient(135deg, rgba(30,64,175,0.04) 0%, rgba(59,130,246,0.02) 100%);
    border-radius: 0 var(--sl-radius-md) var(--sl-radius-md) 0;
    font-family: var(--sl-font-serif);
    font-size: 1.1em;
    line-height: 1.85;
    color: var(--sl-ink);
    position: relative;
}

.sl-epigraph::before {
    content: '\201C';
    position: absolute;
    top: -8px;
    left: 16px;
    font-family: var(--sl-font-serif);
    font-size: 4em;
    color: var(--sl-accent);
    opacity: 0.12;
    line-height: 1;
    pointer-events: none;
}

.sl-epigraph-author {
    margin-top: 12px;
    font-size: 0.85em;
    color: var(--sl-ink-muted);
    text-align: right;
    font-style: italic;
}

/* --- Pillar Cards --- */
.sl-pillars-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 36px 0;
}

@media (max-width: 1024px) {
    .sl-pillars-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
    .sl-pillars-grid { grid-template-columns: 1fr; }
}

.sl-pillar-card {
    border: 1px solid var(--sl-border);
    border-radius: var(--sl-radius-md);
    padding: 28px 24px;
    background: var(--sl-surface);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.sl-pillar-card:hover {
    box-shadow: var(--sl-shadow-md);
    transform: translateY(-2px);
}

.sl-pillar-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--sl-accent);
}

.sl-pillar-icon {
    width: 48px;
    height: 48px;
    background: var(--sl-accent-lighter);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    font-size: 24px;
}

.sl-pillar-title {
    font-family: var(--sl-font-display);
    font-size: 1.05em;
    font-weight: 700;
    color: var(--sl-ink);
    margin-bottom: 10px;
}

.sl-pillar-text {
    font-size: 0.9em;
    color: var(--sl-ink-soft);
    line-height: 1.65;
}

/* --- Pipeline Steps --- */
.sl-pipeline {
    margin: 40px 0;
    position: relative;
}

.sl-pipeline-step {
    display: flex;
    gap: 24px;
    margin-bottom: 36px;
    position: relative;
}

.sl-pipeline-step::before {
    content: '';
    position: absolute;
    left: 27px;
    top: 56px;
    bottom: -36px;
    width: 2px;
    background: var(--sl-border);
}

.sl-pipeline-step:last-child::before { display: none; }

.sl-pipeline-number {
    width: 56px;
    height: 56px;
    min-width: 56px;
    border-radius: 50%;
    background: var(--sl-accent);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--sl-font-display);
    font-size: 1.2em;
    font-weight: 800;
    position: relative;
    z-index: 1;
}

.sl-pipeline-content {
    flex: 1;
    background: var(--sl-surface);
    border: 1px solid var(--sl-border);
    border-radius: var(--sl-radius-md);
    padding: 24px;
    transition: box-shadow 0.3s ease;
}

.sl-pipeline-content:hover { box-shadow: var(--sl-shadow-md); }

.sl-pipeline-content h3 {
    font-family: var(--sl-font-display);
    font-size: 1.1em;
    font-weight: 700;
    color: var(--sl-ink);
    margin: 0 0 12px 0;
}

.sl-pipeline-content ul {
    margin: 0;
    padding-left: 20px;
    font-size: 0.92em;
    color: var(--sl-ink-soft);
    line-height: 1.7;
}

.sl-pipeline-content li { margin-bottom: 6px; }

.sl-pipeline-tag {
    display: inline-block;
    padding: 2px 10px;
    font-size: 0.75em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 999px;
    margin-right: 6px;
    margin-bottom: 4px;
}

.sl-tag-filter { background: #fef3c7; color: #92400e; }
.sl-tag-quality { background: #dbeafe; color: #1e40af; }
.sl-tag-verify { background: #d1fae5; color: #065f46; }
.sl-tag-fairness { background: #ede9fe; color: #5b21b6; }

/* --- Quality Gate Detail Box --- */
.sl-gate-box {
    background: var(--sl-surface-raised);
    border: 1px solid var(--sl-border);
    border-radius: var(--sl-radius-md);
    padding: 24px;
    margin: 20px 0;
}

.sl-gate-box h4 {
    font-size: 0.95em;
    font-weight: 700;
    color: var(--sl-accent);
    margin: 0 0 8px 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.sl-gate-box p {
    font-size: 0.9em;
    color: var(--sl-ink-soft);
    line-height: 1.65;
    margin: 0;
}

/* --- Oracle Verification Table --- */
.sl-oracle-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9em;
    margin: 24px 0;
}

.sl-oracle-table th {
    background: var(--sl-accent);
    color: #fff;
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
}

.sl-oracle-table td {
    padding: 12px 16px;
    border-bottom: 1px solid var(--sl-border);
}

.sl-oracle-table tr:nth-child(even) td { background: var(--sl-surface-raised); }

.sl-pass { color: var(--sl-success); font-weight: 700; }
.sl-fail { color: var(--sl-danger); font-weight: 700; }

/* --- Callout Box --- */
.sl-callout {
    background: linear-gradient(135deg, rgba(30,64,175,0.06) 0%, rgba(59,130,246,0.03) 100%);
    border: 1px solid var(--sl-accent-lighter);
    border-radius: var(--sl-radius-md);
    padding: 24px 28px;
    margin: 32px 0;
}

.sl-callout-title {
    font-family: var(--sl-font-display);
    font-size: 1.05em;
    font-weight: 700;
    color: var(--sl-accent);
    margin-bottom: 10px;
}

.sl-callout p {
    font-size: 0.92em;
    color: var(--sl-ink-soft);
    line-height: 1.7;
    margin: 0;
}

/* --- Pipeline Flow Diagram --- */
.sl-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0;
    margin: 32px 0;
    padding: 24px 0;
}

.sl-flow-node {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px 12px;
    min-width: 100px;
    max-width: 130px;
}

.sl-flow-icon {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    margin-bottom: 10px;
    box-shadow: var(--sl-shadow-sm);
}

.sl-flow-icon-blue { background: var(--sl-accent-lighter); color: var(--sl-accent); }
.sl-flow-icon-green { background: #d1fae5; color: #065f46; }
.sl-flow-icon-amber { background: #fef3c7; color: #92400e; }
.sl-flow-icon-violet { background: #ede9fe; color: #5b21b6; }

.sl-flow-label {
    font-size: 0.78em;
    font-weight: 600;
    color: var(--sl-ink);
    line-height: 1.35;
}

.sl-flow-arrow {
    font-size: 20px;
    color: var(--sl-border);
    margin: 0 2px;
    flex-shrink: 0;
}

@media (max-width: 900px) {
    .sl-flow { flex-direction: column; gap: 4px; }
    .sl-flow-arrow { transform: rotate(90deg); }
    .sl-flow-node { flex-direction: row; max-width: none; gap: 12px; padding: 8px 0; }
    .sl-flow-icon { margin-bottom: 0; }
}

/* --- Funnel Diagram --- */
.sl-funnel {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px 0;
    gap: 0;
}

.sl-funnel-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 12px 0;
}

.sl-funnel-bar {
    height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.82em;
    font-weight: 700;
    color: #fff;
    transition: all 0.3s ease;
    min-width: 60px;
}

.sl-funnel-bar:hover { opacity: 0.85; transform: scaleY(1.05); }

.sl-funnel-label {
    font-size: 0.8em;
    color: var(--sl-ink-soft);
    width: 160px;
    text-align: right;
    font-weight: 500;
}

.sl-funnel-arrow {
    color: var(--sl-border);
    font-size: 14px;
    text-align: center;
}

/* --- Comparison Table --- */
.sl-compare-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88em;
    margin: 24px 0;
}

.sl-compare-table th {
    background: var(--sl-surface-sunken);
    padding: 12px 16px;
    text-align: left;
    font-weight: 700;
    color: var(--sl-ink);
    border-bottom: 2px solid var(--sl-accent);
}

.sl-compare-table td {
    padding: 12px 16px;
    border-bottom: 1px solid var(--sl-border);
    color: var(--sl-ink-soft);
}

.sl-compare-table tr:hover td { background: var(--sl-surface-raised); }

.sl-check { color: var(--sl-success); font-weight: 700; }
.sl-cross { color: var(--sl-danger); font-weight: 700; }
.sl-partial { color: var(--sl-warning); font-weight: 700; }

/* --- Citation Block --- */
.sl-cite-block {
    background: var(--sl-surface-sunken);
    border: 1px solid var(--sl-border);
    border-radius: var(--sl-radius-md);
    padding: 24px 28px;
    margin: 40px 0 0;
}

.sl-cite-block h3 {
    font-size: 1em;
    font-weight: 700;
    margin: 0 0 12px;
}

.sl-cite-block pre {
    background: #1e293b;
    color: #e2e8f0;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 12px;
    margin: 0;
}

/* --- Blog text paragraphs --- */
.sl-text {
    font-family: var(--sl-font-body);
    font-size: 0.92em;
    color: var(--sl-ink-soft);
    line-height: 1.7;
    margin: 0 0 16px;
}

.sl-text a {
    color: var(--sl-accent);
    text-decoration: none;
}

.sl-text a:hover {
    text-decoration: underline;
}

/* --- Blog section headings --- */
.sl-heading {
    font-family: var(--sl-font-display);
    font-size: 1.6em;
    font-weight: 800;
    color: var(--sl-ink);
    margin: 0 0 24px;
}
</style>


<div class="swe-section">
  <div class="swe-inner">

    <!-- Header -->
    <div class="swe-header">
      <h2 class="swe-title">Monthly-SWEBench Leaderboard</h2>
      <div class="swe-contributors" style="line-height: 1.8;">
        <strong>Contributors:</strong> Haiyang Shen*<sup>1</sup> · Xinbo Xu*<sup>1</sup> · Xuanzhong Chen<sup>1</sup> · Wendong Xu<sup>1</sup> · Kaiyuan Chen<sup>2</sup> · Rui Wang<sup>2</sup> <br> Xiaobo Hu<sup>2</sup> · Yang Liu<sup>2</sup> · Yixin Ren<sup>2</sup> · Yuan Gong<sup>2</sup> · Liang Chen<sup>1</sup> · Kuan Li<sup>1</sup>
        <br>
        <span style="font-size: 1rem; color:rgb(0, 0, 0);"><sup>1</sup>UniPat AI, <sup>2</sup>xbench</span>
        <p style="margin: 8px 0; font-size: 14px;"><strong>Correspondence:</strong> &lt;wendongxu@unipat.ai&gt;, &lt;kuanli@unipat.ai&gt;</p>
      </div>
      <p class="swe-intro">
        A continuously updated benchmark with fresh, real GitHub issues across multiple programming languages. Every month, we source ~100 new high-quality tasks from freshly merged PRs, keeping the benchmark alive and the leaderboard honest. Each leaderboard row also reports the agent harness used for that monthly run.
      </p>
      <div class="swe-links">
        <a class="swe-link-btn" href="https://huggingface.co/collections/UnipatAI/monthly-swebench" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1.4446 11.5059c0 1.1021.1673 2.1585.4847 3.1563-.0378-.0028-.0691-.0058-.1058-.0058-.4209 0-.8015.16-1.0704.4512-.3454.3737-.4984.8335-.4316 1.293a1.576 1.576 0 0 0 .2148.5978c-.2319.1864-.4018.4456-.4844.7578-.0646.2448-.131.7543.2149 1.2794a1.4552 1.4552 0 0 0-.0625.1055c-.208.3923-.2207.8372-.0371 1.25.2783.6258.9696 1.1175 2.3126 1.6467.8356.3292 1.5988.5411 1.6056.543 1.1046.2847 2.104.4277 2.969.4277 1.4173 0 2.4754-.3849 3.1525-1.1446 1.538.2651 2.791.1403 3.592.006.6773.7555 1.7332 1.1387 3.1467 1.1387.8649 0 1.8643-.143 2.969-.4278.0068-.0019.77-.2138 1.6056-.543 1.343-.5292 2.0343-1.0208 2.3126-1.6466.1836-.4129.171-.8577-.037-1.25a1.4685 1.4685 0 0 0-.0626-.1056c.346-.525.2795-1.0346.2149-1.2793-.0826-.3122-.2525-.5714-.4844-.7579.11-.1816.1831-.3788.2148-.5977.0669-.4595-.0862-.9193-.4316-1.293-.2688-.2913-.6495-.4513-1.0704-.4513-.0209 0-.0376.0008-.0588.0018.3162-.9966.4846-2.0518.4846-3.1523 0-5.807-4.7362-10.5144-10.5789-10.5144-5.8426 0-10.5788 4.7073-10.5788 10.5144Zm10.5788-9.4831c5.2727 0 9.5476 4.246 9.5476 9.483a9.4201 9.4201 0 0 1-.2696 2.2365c-.0039-.0047-.0079-.011-.0117-.0156-.274-.3255-.6679-.5059-1.1075-.5059-.352 0-.714.1155-1.0763.3438-.2403.1517-.5058.422-.7793.7598-.2534-.3492-.608-.5832-1.0137-.6465a1.5174 1.5174 0 0 0-.2344-.0176c-.9263 0-1.4828.7993-1.6935 1.5177-.1046.2426-.6065 1.3482-1.3614 2.0978-1.1681 1.1601-1.4458 2.3534-.8396 3.6382-.843.1029-1.5836.0927-2.365-.006.5906-1.212.3626-2.4388-.8426-3.6322-.755-.7496-1.2568-1.8552-1.3614-2.0978-.2107-.7184-.7673-1.5177-1.6935-1.5177-.078 0-.1568.0054-.2344.0176-.4057.0633-.7604.2973-1.0137.6465-.2735-.3379-.539-.6081-.7794-.7598-.3622-.2283-.7243-.3438-1.0762-.3438-.4266 0-.8094.171-1.0821.4786a9.4208 9.4208 0 0 1-.2598-2.1936c0-5.237 4.2749-9.483 9.5475-9.483zM8.6443 7.0036c-.4838.0043-.9503.2667-1.1934.7227-.3536.6633-.1006 1.4873.5645 1.84.351.1862.4883-.5261.836-.6485.3107-.1095.841.399 1.0078.086.3536-.6634.1025-1.4874-.5625-1.84a1.3659 1.3659 0 0 0-.6524-.1602Zm6.8403 0c-.2199-.002-.4426.05-.6504.1602-.665.3526-.9181 1.1766-.5645 1.84.1669.313.6971-.1955 1.0079-.086.3476.1224.4867.8347.838.6485.6649-.3527.916-1.1767.5624-1.84-.243-.456-.7096-.7184-1.1934-.7227Zm-9.7565 1.418a.8768.8768 0 0 0-.877.877c0 .4846.3925.877.877.877a.8768.8768 0 0 0 .877-.877.8768.8768 0 0 0-.877-.877zm12.6434 0c-.4845 0-.879.3925-.879.877 0 .4846.3945.877.879.877a.8768.8768 0 0 0 .877-.877.8768.8768 0 0 0-.877-.877zM8.7927 11.459c-.179-.003-.2793.1107-.2793.416 0 .8097.3874 2.125 1.4279 2.924.207-.7123 1.3453-1.2832 1.5079-1.2012.2315.1167.2191.4417.6074.7266.3884-.285.374-.6098.6056-.7266.1627-.082 1.3009.4889 1.5079 1.2012 1.0404-.799 1.4278-2.1144 1.4278-2.924 0-1.2212-1.583.6402-3.5413.6485-1.4686-.0061-2.7266-1.0558-3.2639-1.0645zM4.312 14.4768c.5792.365 1.6964 2.2751 2.1056 3.0177.1371.2488.371.3536.582.3536.4188 0 .7465-.4138.0391-.9395-1.0636-.791-.6914-2.0846-.1836-2.1642a.4302.4302 0 0 1 .0664-.004c.4616 0 .666.7892.666.7892s.5959 1.4898 1.6213 2.508c.942.9356 1.062 1.703.4961 2.6661-.0164-.004-.0159.0236-.1484.2149-.1853.2673-.4322.4688-.7188.6152-.5062.2269-1.1397.2696-1.7833.2696-1.037 0-2.1017-.1824-2.6975-.336-.0293-.0075-3.6505-.9567-3.1916-1.8224.0771-.1454.2033-.2031.3633-.2031.6463 0 1.823.9551 2.3283.9551.113 0 .196-.0865.2285-.2031.2249-.8045-3.2787-1.0522-2.9846-2.1642.0519-.1967.193-.2757.3907-.2754.854 0 2.7704 1.4923 3.172 1.4923.0307 0 .0525-.0085.0645-.0274.2012-.3227.1096-.5865-1.3087-1.4395-1.4182-.8533-2.4315-1.329-1.8653-1.9416.0651-.0707.1574-.1015.2695-.1015.8611.0002 2.8948 1.84 2.8948 1.84s.5487.5683.8809.5683c.0762 0 .1416-.0315.1855-.1054.2355-.3946-2.1858-2.2183-2.3224-2.971-.0926-.51.0641-.7676.3555-.7676-.0006.008.1701-.0285.4942.1759zm16.2257.5918c-.1366.7526-2.5579 2.5764-2.3224 2.9709.044.074.1092.1055.1855.1055.3321 0 .881-.5684.881-.5684s2.0336-1.8397 2.8947-1.84c.1121 0 .2044.0308.2695.1016.5662.6125-.447 1.0882-1.8653 1.9415-1.4183.853-1.51 1.1168-1.3087 1.4396.012.0188.0337.0273.0644.0273.4016 0 2.3181-1.4923 3.1721-1.4923.1977-.0002.3388.0787.3907.2754.294 1.112-3.2095 1.3597-2.9846 2.1642.0325.1166.1156.2032.2285.2032.5054 0 1.682-.9552 2.3283-.9552.16 0 .2862.0577.3633.2032.459.8656-3.1623 1.8149-3.1916 1.8224-.5958.1535-1.6605.336-2.6975.336-.6351 0-1.261-.0409-1.7638-.2599-.2949-.1472-.5488-.3516-.7383-.625-.0411-.0682-.1026-.1476-.1426-.205-.5726-.9679-.455-1.7371.4903-2.676 1.0254-1.0182 1.6212-2.508 1.6212-2.508s.2044-.7891.666-.7891a.4318.4318 0 0 1 .0665.0039c.5078.0796.88 1.3732-.1836 2.1642-.7074.5257-.3797.9395.039.9395.211 0 .445-.1047.5821-.3535.4092-.7426 1.5264-2.6527 2.1056-3.0178.5588-.3524.99-.1816.8497.5918z"/></svg>
          Dataset
        </a>
      </div>

      
    </div>

    <!-- Stats bar -->
    <div class="swe-stats">
      <div class="swe-stat-item">
        <span class="swe-stat-num" id="swe-stat-total">100</span>
        <span class="swe-stat-label">Total Tasks</span>
      </div>
      <div class="swe-stat-item">
        <span class="swe-stat-num" id="swe-stat-bugfix">50</span>
        <span class="swe-stat-label">Bug Fix</span>
      </div>
      <div class="swe-stat-item">
        <span class="swe-stat-num" id="swe-stat-nonbugfix">50</span>
        <span class="swe-stat-label">Non-Bug Fix</span>
      </div>
      <div class="swe-stat-item">
        <span class="swe-stat-num" id="swe-stat-models">19</span>
        <span class="swe-stat-label">LLMs Evaluated</span>
      </div>
      <div class="swe-stat-item">
        <span class="swe-stat-num" id="swe-stat-metric">Pass@1</span>
        <span class="swe-stat-label">Metric</span>
      </div>
    </div>

    <!-- Category Tabs -->
    <div class="swe-cat-tabs" id="swe-cat-tabs"></div>

    <!-- Timeline Player -->
    <div class="swe-player" id="swe-player">
      <button class="swe-play-btn" id="swe-play-btn" aria-label="Play">
        <svg id="swe-play-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z" />
        </svg>
      </button>
      <div class="swe-timeline" id="swe-timeline"></div>
    </div>

    <!-- Table / Coming Soon -->
    <div id="swe-table-container"></div>

    <!-- Eval note -->
    <div class="swe-eval-note">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
      <span id="swe-eval-note-text">2026-06 benchmark snapshot: 100 tasks selected from closed GitHub PRs and validated with oracle=1/nop=0. Avg Turns and timeout turn statistics count OpenHands agent iterations/trajectory steps, not raw LLM API calls. Temporary publication rule: missing or not-yet-clean required-model rows are counted as reward 0 and will be replaced after clean reruns finish.</span>
    </div>

    <!-- Info cards -->
    <div class="swe-info-grid">

      <!-- Task Categories -->
      <div class="swe-info-card">
        <div class="swe-card-accent" style="background:linear-gradient(90deg,#6366f1,#3b82f6)"></div>
        <div class="swe-card-body">
          <h3 class="swe-card-title">Task Categories</h3>
          <p class="swe-card-sub" id="swe-task-card-sub">100 real-world tasks selected from June 2026 closed GitHub PRs</p>
          <div class="swe-cat-split">
            <div class="swe-cat-block">
              <div class="swe-cat-big" id="swe-card-bugfix">50</div>
              <div><span class="swe-cat-badge l-red">bugfix</span></div>
              <div class="swe-cat-desc">Bug-oriented fixes &amp; maintenance patches</div>
            </div>
            <div class="swe-cat-block">
              <div class="swe-cat-big" id="swe-card-nonbugfix">50</div>
              <div><span class="swe-cat-badge l-blue">non_bugfix</span></div>
              <div class="swe-cat-desc">Feature additions, API evolution &amp; engineering improvements</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Construction Pipeline -->
      <div class="swe-info-card">
        <div class="swe-card-accent" style="background:linear-gradient(90deg,#22c55e,#10b981)"></div>
        <div class="swe-card-body">
          <h3 class="swe-card-title">Construction Pipeline</h3>
          <p class="swe-card-sub">From GitHub PRs to a fixed evaluation pool</p>
          <ul class="swe-pipeline">
            <li class="swe-pipeline-step">
              <div class="swe-pipeline-left">
                <span class="swe-pipeline-num">1</span>
                <span class="swe-pipeline-line"></span>
              </div>
              <span class="swe-pipeline-text">Candidates sampled from closed PRs with multi-round filtering by time window, repository scope, and task quality</span>
            </li>
            <li class="swe-pipeline-step">
              <div class="swe-pipeline-left">
                <span class="swe-pipeline-num">2</span>
                <span class="swe-pipeline-line"></span>
              </div>
              <span class="swe-pipeline-text">Construct each task: environment, instruction, and verifier</span>
            </li>
            <li class="swe-pipeline-step">
              <div class="swe-pipeline-left">
                <span class="swe-pipeline-num">3</span>
              </div>
              <span class="swe-pipeline-text">All in <a href="https://harborframework.com/">Harbor</a> format. Run <span class="swe-code">oracle</span> to validate solvability and verifier correctness; retain only stably-evaluable tasks</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Quality Assurance -->
      <div class="swe-info-card">
        <div class="swe-card-accent" style="background:linear-gradient(90deg,#f59e0b,#f97316)"></div>
        <div class="swe-card-body">
          <h3 class="swe-card-title">Quality Assurance</h3>
          <p class="swe-card-sub">Multi-layer QC before entering the eval pool</p>
          <ul class="swe-qa-list">
          <li class="swe-qa-item">
              <span class="swe-qa-check"><svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span>
              Remove future branches to avoid contamination.
          </li>
          <li class="swe-qa-item">
              <span class="swe-qa-check"><svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span>
              Multi-round filtering during PR selection and task construction
          </li>
          <li class="swe-qa-item">
              <span class="swe-qa-check"><svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span>
              <span class="swe-code">oracle</span> pass — every task has a known-reachable reference solution
          </li>
          <li class="swe-qa-item">
              <span class="swe-qa-check"><svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span>
              Agent rollouts to calibrate difficulty and fairness; reported snapshots include the agent harness used for each monthly run
          </li>
          </ul>
        </div>
      </div>

    </div>

    <!-- Key Findings -->
    <div class="swe-detail">
      <h3 class="swe-detail-title" id="swe-findings-title">Key Findings (2026-06)</h3>
      <div class="swe-findings">
        <div class="swe-finding">
          <span class="swe-finding-num">1</span>
          <span class="swe-finding-body" id="swe-finding-1"><span class="swe-finding-label">Balanced monthly source set.</span> The 2026-06 snapshot contains 100 tasks selected from that month's closed GitHub PRs, split evenly between 50 bug-fix and 50 non-bug-fix tasks.</span>
        </div>
        <div class="swe-finding">
          <span class="swe-finding-num">2</span>
          <span class="swe-finding-body" id="swe-finding-2"><span class="swe-finding-label">Difficulty-controlled final set.</span> The final 100 tasks were reselected from the 148 validated candidates to keep the leading score at 76.00% while preserving model disagreement.</span>
        </div>
        <div class="swe-finding">
          <span class="swe-finding-num">3</span>
          <span class="swe-finding-body" id="swe-finding-3"><span class="swe-finding-label">Current leading tier.</span> GPT-5.5-High leads the overall leaderboard; the top tier is GPT-5.5-High at 76.00%, Claude-Opus-4.8-XHigh at 69.00%, and GLM-5.2-Max at 65.00%.</span>
        </div>
        <div class="swe-finding">
          <span class="swe-finding-num">4</span>
          <span class="swe-finding-body" id="swe-finding-4"><span class="swe-finding-label">Task type split.</span> On bug-fix tasks, the leaders are GPT-5.5-High at 80.00%, Claude-Opus-4.8-XHigh at 70.00%, and GLM-5.2-Max at 68.00%; on non-bug-fix tasks, the leaders are GPT-5.5-High at 72.00%, Claude-Opus-4.8-XHigh at 68.00%, and GLM-5.2-Max at 62.00%.</span>
        </div>
        <div class="swe-finding">
          <span class="swe-finding-num">5</span>
          <span class="swe-finding-body" id="swe-finding-5"><span class="swe-finding-label">Timeout accounting.</span> Timeout rows are counted as model failures only after the benchmark policy classifies them as non-completions; timeout turn statistics use the same OpenHands iteration/trajectory-step definition as Avg/Max Turns. Doubao-Seed-2.1-Pro-High: 5 timeouts and 10 other unfinished rows; timeout limit min/median/avg/max=1800/3600/3240.00/3600s; timeout turns min/median/avg/max=145/239/225.80/264 Claude-Opus-4.8-XHigh: 1 timeouts and 2 other unfinished rows; timeout limit=3600s; timeout turns min/median/avg/max=188/188/188.00/188 GLM-5.2-Max: 2 timeouts; timeout limit min/median/avg/max=900/1350/1350.00/1800s; timeout turns min/median/avg/max=75/145.0/145.00/215 Qwen-3.7-Plus-Thinking: 1 timeouts and 1 other unfinished rows; timeout limit=1800s; timeout turns min/median/avg/max=133/133/133.00/133</span>
        </div>
      </div>
    </div>

    <!-- ===== BLOG CONTENT: The Rise and Fall of Static Benchmarks ===== -->
    <hr class="sl-section-rule">

    <h2 class="sl-heading" id="sl-intro">The Rise and Fall of Static Benchmarks</h2>

    <div class="sl-epigraph">
        If you can't measure it, you can't improve it. But if your measurement never changes, you stop improving and start memorizing.
        <div class="sl-epigraph-author">On the lifecycle of AI benchmarks</div>
    </div>

    <p class="sl-text">
        <a href="https://www.swebench.com/">SWE-bench</a> (2023) took a practical approach to evaluating coding agents: derive tasks from real GitHub issues in popular Python repositories and use the existing test suites to judge correctness. The benchmark gained wide adoption, and model performance on it improved rapidly over the following years.
    </p>

    <p class="sl-text">
        But scores went up faster than real-world usefulness.
    </p>

    <p class="sl-text">
        As more teams optimized for <a href="https://www.swebench.com/">SWE-bench</a>, scores kept rising while practitioners reported little matching improvement in day-to-day coding assistance. The benchmark was being overfitted, not through explicit cheating, but through the gradual contamination of training data that inevitably absorbs widely-studied public benchmarks.
    </p>

    <div class="sl-callout">
        <div class="sl-callout-title">The Overfitting Cycle</div>
        <p>
            A benchmark is released &rarr; the community studies it intensely &rarr; solutions, discussions, and patch patterns enter the public corpus &rarr; models train on that corpus &rarr; benchmark scores inflate &rarr; the benchmark loses its ability to discriminate real capability. This cycle is not a failure of any single team; it is a structural property of static benchmarks.
        </p>
    </div>

    <p class="sl-text">
        <a href="https://openai.com/index/introducing-swe-bench-verified/">SWE-bench Verified</a> attempted to address quality concerns. OpenAI partnered with the original authors to have human annotators review 500 tasks from the original 2,294, filtering out under-specified or ambiguous problems. This improved the benchmark&rsquo;s reliability, but it was still a static, fixed set. OpenAI eventually <a href="https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/">announced they would no longer evaluate on SWE-bench Verified</a>, citing concerns that even the curated subset was becoming saturated.
    </p>

    <p class="sl-text">
        <a href="https://arxiv.org/abs/2509.16941">SWE-bench-Pro</a> pushed further with harder tasks. Yet the underlying problem remains: any fixed set of tasks has an expiration date. The moment a benchmark is published, its clock starts ticking toward obsolescence.
    </p>

    <p class="sl-text">
        <a href="https://swe-bench-live.github.io/">SWE-bench Live</a> introduced periodic updates with new tasks, taking a step toward liveness. However, it remains Python-focused, covers only bug fixes, and lacks rigorous instruction-test alignment verification, leaving room for ambiguous or under-specified tasks to slip through.
    </p>

    <!-- ===== BLOG CONTENT: Why We Need a Living and Verified Benchmark ===== -->
    <hr class="sl-section-rule">

    <h2 class="sl-heading" id="sl-why-living">Why We Need a Living, Verified, and Broad Benchmark</h2>

    <p class="sl-text">
        The problems outlined above are not isolated issues. They reflect fundamental gaps in existing benchmarks: <strong>liveness</strong> (static task sets expire), <strong>verification</strong> (task quality is not systematically guaranteed), and <strong>breadth</strong> (limited to Python and bug fixes only). A next-generation software engineering benchmark must address all three. Monthly-SWEBench is built around six pillars spanning these dimensions.
    </p>

    <div class="sl-pillars-grid" style="grid-template-columns: repeat(3, 1fr);">
        <div class="sl-pillar-card">
            <div class="sl-pillar-icon">&#128337;</div>
            <div class="sl-pillar-title">Anti-Contamination by Design</div>
            <div class="sl-pillar-text">
                Every month, ~100 new tasks from freshly merged PRs across fresh repositories. All repositories and PRs are newly selected and did not exist in any previous release, making data contamination and benchmark-specific optimization structurally impossible.
            </div>
        </div>
        <div class="sl-pillar-card">
            <div class="sl-pillar-icon">&#127760;</div>
            <div class="sl-pillar-title">Broad Coverage</div>
            <div class="sl-pillar-text">
                Covering Python, Go, C++, Java, Rust, TypeScript, JavaScript and more across ~20 repositories per month, reflecting the real diversity of open-source ecosystems.
            </div>
        </div>
        <div class="sl-pillar-card">
            <div class="sl-pillar-icon">&#9878;</div>
            <div class="sl-pillar-title">Sufficient Complexity</div>
            <div class="sl-pillar-text">
                Tasks are challenging enough to differentiate model capabilities. Typical tasks span 2+ files and 30+ lines of meaningful changes, requiring genuine repository-level understanding.
            </div>
        </div>
        <div class="sl-pillar-card">
            <div class="sl-pillar-icon">&#128279;</div>
            <div class="sl-pillar-title">Instruction-Test Alignment</div>
            <div class="sl-pillar-text">
                Every tested behavior is explicitly described in the instruction. No hidden API names, parameter orders, or interface contracts that silently fail correct implementations.
            </div>
        </div>
        <div class="sl-pillar-card">
            <div class="sl-pillar-icon">&#128300;</div>
            <div class="sl-pillar-title">Rigorous Test Quality</div>
            <div class="sl-pillar-text">
                Tests run real code with multiple inputs and check actual outputs. No source-code text matching, no single-case tests bypassable by hardcoding.
            </div>
        </div>
        <div class="sl-pillar-card">
            <div class="sl-pillar-icon">&#128736;</div>
            <div class="sl-pillar-title">Bug Fix + Feature Tasks</div>
            <div class="sl-pillar-text">
                Unlike prior benchmarks that focus exclusively on bug fixes, we include both bug fixes and feature additions. We carefully curate feature PRs that extend existing interfaces, making fail-to-pass verification possible for a broader task spectrum.
            </div>
        </div>
    </div>

    <div class="sl-callout">
        <div class="sl-callout-title">Why "Live" Alone Is Not Enough</div>
        <p>
            Freshness prevents overfitting, but fresh tasks can still be poorly constructed. <strong>Instruction-test misalignment</strong>: the issue description says one thing, but the test suite silently requires specific API names or implementation details never mentioned. <strong>Insufficient tests</strong>: some tasks have only one or two test cases, trivially bypassable through hardcoded outputs. <strong>Dirty PRs</strong>: real-world PRs bundle unrelated changes, and tasks inherit this noise. <strong>Non-behavioral verification</strong>: some test scripts check source code text rather than running the code. <strong>Bug-fix-only coverage</strong>: feature additions, behavior changes, and API extensions are equally important in real development but are excluded by prior benchmarks because they are harder to validate with fail-to-pass testing. Monthly-SWEBench addresses all of these through systematic verification at every stage of the pipeline.
        </p>
    </div>

    <!-- Info cards removed: data changes monthly, decoupled from blog content -->

    <!-- ===== BLOG CONTENT: Benchmark Comparison ===== -->
    <hr class="sl-section-rule">

    <p class="sl-text">The following table summarizes where each benchmark stands across these dimensions:</p>

    <table class="sl-compare-table">
    <thead>
    <tr>
        <th>Benchmark</th>
        <th>Tasks</th>
        <th>Languages</th>
        <th>Task Types</th>
        <th>Updated</th>
        <th>Test Quality</th>
        <th>Instruction-Test Alignment</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><a href="https://www.swebench.com/" style="color: var(--sl-accent); text-decoration: none;">SWE-bench</a></td>
        <td>2,294</td>
        <td>Python only</td>
        <td>Bug fix only</td>
        <td><span class="sl-cross">Static</span></td>
        <td><span class="sl-partial">Partial</span></td>
        <td><span class="sl-cross">No</span></td>
    </tr>
    <tr>
        <td><a href="https://openai.com/index/introducing-swe-bench-verified/" style="color: var(--sl-accent); text-decoration: none;">SWE-bench Verified</a></td>
        <td>500</td>
        <td>Python only</td>
        <td>Bug fix only</td>
        <td><span class="sl-cross">Static</span></td>
        <td><span class="sl-check">Human review</span></td>
        <td><span class="sl-partial">Partial</span></td>
    </tr>
    <tr>
        <td>SWE-bench-Pro</td>
        <td>Varies</td>
        <td>Python only</td>
        <td>Bug fix only</td>
        <td><span class="sl-cross">Static</span></td>
        <td><span class="sl-check">Yes</span></td>
        <td><span class="sl-partial">Partial</span></td>
    </tr>
    <tr>
        <td><a href="https://swe-bench-live.github.io/" style="color: var(--sl-accent); text-decoration: none;">SWE-bench Live</a></td>
        <td>Growing</td>
        <td>Python-focused</td>
        <td>Bug fix only</td>
        <td><span class="sl-check">Periodic</span></td>
        <td><span class="sl-partial">Partial</span></td>
        <td><span class="sl-partial">Partial</span></td>
    </tr>
    <tr>
        <td><strong>Monthly-SWEBench</strong></td>
        <td><strong>~100/month</strong></td>
        <td><strong>Multiple languages</strong></td>
        <td><strong><span class="sl-check">Bug fix + Feature</span></strong></td>
        <td><span class="sl-check"><strong>Monthly</strong></span></td>
        <td><span class="sl-check"><strong>Rigorous pipeline</strong></span></td>
        <td><span class="sl-check"><strong>Strict alignment</strong></span></td>
    </tr>
    </tbody>
    </table>

    <!-- ===== BLOG CONTENT: The SWE-Bench-Live Pipeline ===== -->
    <hr class="sl-section-rule">

    <h2 class="sl-heading" id="sl-pipeline">The Monthly-SWEBench Pipeline</h2>

    <p class="sl-text">
        Our benchmark is not hand-crafted. It is produced by a multi-stage pipeline that starts from the global stream of open-source activity and distills it into high-quality, verified tasks. Here is what happens at each stage.
    </p>

    <div class="sl-flow">
        <div class="sl-flow-node">
            <div class="sl-flow-icon sl-flow-icon-blue">&#128269;</div>
            <div class="sl-flow-label">Repository<br>Discovery</div>
        </div>
        <div class="sl-flow-arrow">&#9654;</div>
        <div class="sl-flow-node">
            <div class="sl-flow-icon sl-flow-icon-blue">&#128336;</div>
            <div class="sl-flow-label">PR Collection<br>&amp; Filtering</div>
        </div>
        <div class="sl-flow-arrow">&#9654;</div>
        <div class="sl-flow-node">
            <div class="sl-flow-icon sl-flow-icon-green">&#9874;</div>
            <div class="sl-flow-label">Task Construction<br>&amp; Quality Gates</div>
        </div>
        <div class="sl-flow-arrow">&#9654;</div>
        <div class="sl-flow-node">
            <div class="sl-flow-icon sl-flow-icon-green">&#9989;</div>
            <div class="sl-flow-label">Fail-to-Pass<br>Verification</div>
        </div>
        <div class="sl-flow-arrow">&#9654;</div>
        <div class="sl-flow-node">
            <div class="sl-flow-icon sl-flow-icon-violet">&#9878;</div>
            <div class="sl-flow-label">Alignment<br>Verification</div>
        </div>
        <div class="sl-flow-arrow">&#9654;</div>
        <div class="sl-flow-node">
            <div class="sl-flow-icon sl-flow-icon-amber">&#128640;</div>
            <div class="sl-flow-label">Monthly<br>Release</div>
        </div>
    </div>

    <div class="sl-pipeline">

    <!-- Stage 1 -->
    <div class="sl-pipeline-step" id="sl-repo-filter">
        <div class="sl-pipeline-number">1</div>
        <div class="sl-pipeline-content">
            <h3><span class="sl-pipeline-tag sl-tag-filter">Filter</span> Repository Discovery &amp; Filtering</h3>
            <ul>
                <li>Scan GitHub for actively maintained repositories across Python, Go, C++, Java, Rust, TypeScript, and JavaScript</li>
                <li>Require a minimum star count (&ge;500) and recent activity (pushed within the last 30 days)</li>
                <li>Apply multi-dimensional filtering: test signal presence, release cadence (&ge;3 releases), code scale (10K~1M lines of code), commit activity</li>
                <li>Each monthly batch targets ~20 high-quality, actively maintained repositories spanning multiple language ecosystems</li>
            </ul>
        </div>
    </div>

    <!-- Stage 2 -->
    <div class="sl-pipeline-step" id="sl-pr-filter">
        <div class="sl-pipeline-number">2</div>
        <div class="sl-pipeline-content">
            <h3><span class="sl-pipeline-tag sl-tag-filter">Filter</span> PR Collection &amp; Filtering</h3>
            <ul>
                <li>Collect PRs merged to the default branch within a specific time window (e.g., the past 30 days)</li>
                <li>Must include test changes: PRs without any test file modifications are excluded, ensuring every candidate PR has a verifiable testing signal</li>
                <li>Minimum complexity: at least 1 changed source file and 30+ lines of code additions (excluding pure documentation, configuration, or formatting changes)</li>
                <li>Maximum scope: exclude overly large PRs (&le;100 changed files) that would be impractical as individual tasks</li>
                <li>Exclude pure UI/cosmetic changes, dependency bumps, and CI configuration updates</li>
            </ul>
        </div>
    </div>

    <!-- Stage 3 -->
    <div class="sl-pipeline-step" id="sl-quality-gates">
        <div class="sl-pipeline-number">3</div>
        <div class="sl-pipeline-content">
            <h3><span class="sl-pipeline-tag sl-tag-quality">Quality</span> Task Construction &amp; Quality Gates</h3>
            <p style="font-size: 0.92em; color: var(--sl-ink-soft); line-height: 1.7; margin-bottom: 16px;">
                Each PR that passes the earlier filters is transformed into a standalone benchmark task in <a href="https://harborframework.com/">Harbor</a> format. The task construction process enforces multiple quality gates:
            </p>

            <div class="sl-gate-box">
                <h4>&#128196; Instruction-Test Strict Alignment</h4>
                <p>Every behavior that the test suite verifies must be explicitly described in the task instruction. If the test checks a specific function name, parameter signature, return type, CLI flag, or file path, the instruction must specify it. No hidden requirements.</p>
            </div>

            <div class="sl-gate-box">
                <h4>&#128683; Irrelevant Functionality Filtering</h4>
                <p>Real-world PRs are often "dirty": a single PR may fix a bug, refactor adjacent code, update docs, and tweak CI, all in one commit. We extract the core functional change and filter out everything else. The resulting task focuses on one coherent problem.</p>
            </div>

            <div class="sl-gate-box">
                <h4>&#128300; Optimized Verification Scripts</h4>
                <p>Tests must be behavioral verification: run the actual code with real inputs and check the actual outputs. We prohibit source-code text matching (<code>grep</code> for function names), exit-code-only checks, and single-input tests that can be trivially hardcoded around. Each fail-to-pass test requires multiple distinct inputs and checks output content with sufficient information density.</p>
            </div>

            <div class="sl-gate-box">
                <h4><span class="sl-pipeline-tag sl-tag-fairness">Fairness</span> Solver-Perspective Review</h4>
                <p>
                    Every task is reviewed from the perspective of a solver who has never seen the original PR and can only read the instruction plus the unpatched repository. If a reasonable solver could produce a semantically correct implementation that differs in interface shape (e.g., different method naming) and the test would reject it, the task is disqualified until the instruction or test is fixed.
                </p>
            </div>

            <div class="sl-gate-box">
                <h4>&#128218; Multi-dimensional Test Roles</h4>
                <p>Each task includes multiple test categories working together:</p>
                <ul style="margin-top: 8px; font-size: 0.88em; color: var(--sl-ink-soft);">
                    <li>Regression tests: guard existing functionality that must not break</li>
                    <li>Fail-to-pass core tests: directly verify the primary fix or feature</li>
                    <li>Fail-to-pass edge tests: cover boundary conditions and special inputs</li>
                    <li>Fail-to-pass error handling tests: verify graceful handling of invalid inputs</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Stage 4 -->
    <div class="sl-pipeline-step" id="sl-f2p-verify">
        <div class="sl-pipeline-number">4</div>
        <div class="sl-pipeline-content">
            <h3><span class="sl-pipeline-tag sl-tag-verify">Verify</span> Fail-to-Pass Verification</h3>
            <p style="font-size: 0.92em; color: var(--sl-ink-soft); line-height: 1.7; margin-bottom: 12px;">
                Every task must pass a two-phase verification to confirm that the task is solvable and that the tests correctly distinguish between unpatched and patched states.
            </p>

            <div class="sl-gate-box">
                <h4>Beyond Bug Fixes: Why Feature Tasks Are Hard but Valuable</h4>
                <p>
                    Most existing SWE-bench variants focus exclusively on bug fix PRs: for bug fixes, the code already exists and simply produces wrong results, making fail-to-pass straightforward. But real-world software engineering is not just about fixing bugs. Feature additions, behavior changes, and API extensions are equally important and often harder.
                </p>
                <p style="margin-top: 8px;">
                    We invest significant effort in carefully selecting feature-type PRs that modify or extend existing interfaces rather than creating entirely new modules. For example, adding a new parameter to an existing function, changing the behavior of an existing command, or extending an existing data format. In all these cases, the pre-patch code runs but behaves differently, making fail-to-pass verification possible. This careful curation allows Monthly-SWEBench to cover a fuller spectrum of real development work that prior benchmarks have left out.
                </p>
            </div>

            <div class="sl-gate-box">
                <h4>Two-Phase Verification</h4>
                <p>Each task is run twice from the same repository snapshot:</p>
            </div>

            <table class="sl-oracle-table">
                <thead>
                    <tr>
                        <th>Phase</th>
                        <th>Solve Script</th>
                        <th>Expected Reward</th>
                        <th>Regression Tests</th>
                        <th>Fail-to-Pass Tests</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Phase 1</strong> (unpatched)</td>
                        <td>Empty (no fix)</td>
                        <td><span class="sl-fail">reward = 0</span></td>
                        <td><span class="sl-pass">All pass</span></td>
                        <td><span class="sl-fail">All fail</span></td>
                    </tr>
                    <tr>
                        <td><strong>Phase 2</strong> (patched)</td>
                        <td>Reference solution</td>
                        <td><span class="sl-pass">reward = 1</span></td>
                        <td><span class="sl-pass">All pass</span></td>
                        <td><span class="sl-pass">All pass</span></td>
                    </tr>
                </tbody>
            </table>

            <p style="font-size: 0.9em; color: var(--sl-ink-soft); line-height: 1.7; margin-top: 12px;">
                This guarantees that tests are neither too easy (passing without a fix) nor broken (failing even with the correct fix). In Phase 1, the fail-to-pass tests must fail because the code itself is buggy, not because infrastructure is missing.
            </p>
        </div>
    </div>

    <!-- Stage 5 -->
    <div class="sl-pipeline-step" id="sl-difficulty">
        <div class="sl-pipeline-number">5</div>
        <div class="sl-pipeline-content">
            <h3><span class="sl-pipeline-tag sl-tag-quality">Quality</span> Instruction-Test Alignment Verification</h3>
            <ul>
                <li>Direct review of instructions and test cases to ensure every tested behavior is explicitly described in the task instruction</li>
                <li>Review of agent reasoning trajectories to distinguish genuine task difficulty from errors caused by ambiguous or under-specified instructions</li>
                <li>The final task set is carefully curated to be discriminative across current agent models</li>
            </ul>
        </div>
    </div>

    <!-- Stage 6 -->
    <div class="sl-pipeline-step">
        <div class="sl-pipeline-number">6</div>
        <div class="sl-pipeline-content">
            <h3><span class="sl-pipeline-tag sl-tag-verify">Release</span> Monthly Release</h3>
            <ul>
                <li>~100 verified tasks are released each month along with updated leaderboard results and the agent harness used for each run</li>
                <li>All tasks come from fresh PRs and fresh repositories that were not part of any previous release</li>
                <li>Every released task has passed all quality gates, fail-to-pass verification, and instruction-test alignment verification</li>
            </ul>
        </div>
    </div>

    </div>

    <div class="sl-funnel">
        <div class="sl-funnel-row">
            <div class="sl-funnel-label">Raw PRs</div>
            <div class="sl-funnel-bar" style="width: 480px; background: var(--sl-accent);">~10,000</div>
        </div>
        <div class="sl-funnel-arrow">&#9660;</div>
        <div class="sl-funnel-row">
            <div class="sl-funnel-label">Merged to default branch</div>
            <div class="sl-funnel-bar" style="width: 380px; background: #2563eb;">~5,000</div>
        </div>
        <div class="sl-funnel-arrow">&#9660;</div>
        <div class="sl-funnel-row">
            <div class="sl-funnel-label">Has test changes</div>
            <div class="sl-funnel-bar" style="width: 280px; background: #3b82f6;">~2,000</div>
        </div>
        <div class="sl-funnel-arrow">&#9660;</div>
        <div class="sl-funnel-row">
            <div class="sl-funnel-label">Meets complexity threshold</div>
            <div class="sl-funnel-bar" style="width: 200px; background: #0ea5e9;">~800</div>
        </div>
        <div class="sl-funnel-arrow">&#9660;</div>
        <div class="sl-funnel-row">
            <div class="sl-funnel-label">Passes quality gates</div>
            <div class="sl-funnel-bar" style="width: 140px; background: #059669;">~300</div>
        </div>
        <div class="sl-funnel-arrow">&#9660;</div>
        <div class="sl-funnel-row">
            <div class="sl-funnel-label">Fail-to-Pass verified</div>
            <div class="sl-funnel-bar" style="width: 100px; background: #047857;">~150</div>
        </div>
        <div class="sl-funnel-arrow">&#9660;</div>
        <div class="sl-funnel-row">
            <div class="sl-funnel-label">Alignment verified</div>
            <div class="sl-funnel-bar" style="width: 70px; background: #065f46;">~100</div>
        </div>
    </div>

    <!-- ===== BLOG CONTENT: Conclusion ===== -->
    <hr class="sl-section-rule">

    <h2 class="sl-heading" id="sl-conclusion">Conclusion</h2>

    <p class="sl-text">
        The era of static, unverified software engineering benchmarks is ending. As language models grow more capable, three problems become critical: fixed task sets get overfitted, poorly constructed tasks give misleading signals, and narrow scope fails to reflect the diversity of real-world engineering. A benchmark must address all three.
    </p>

    <p class="sl-text">
        <strong>Monthly-SWEBench</strong> addresses all three:
    </p>

    <ul style="font-size: 0.92em; color: var(--sl-ink-soft); line-height: 1.7; padding-left: 20px; margin-bottom: 24px;">
        <li><strong>Live</strong>: monthly releases of ~100 tasks from freshly merged PRs across fresh repositories ensure models cannot memorize their way to high scores</li>
        <li><strong>Verified</strong>: every task passes strict instruction-test alignment review, behavioral test quality checks, fail-to-pass dual-phase verification, and solver-perspective auditing to ensure no hidden requirements</li>
        <li><strong>Broad</strong>: covering Python, Go, C++, Java, Rust, TypeScript, JavaScript and more across ~20 repositories, with both bug fixes and feature additions covering a fuller spectrum of real-world software engineering than any prior benchmark</li>
    </ul>

    <p class="sl-text">
        Honest evaluation is a prerequisite for genuine progress. We need benchmarks that reflect where AI coding agents actually are, not where they were six months ago.
    </p>

    <div class="sl-cite-block">
        <h3>Citation</h3>
        <p>If you find Monthly-SWEBench useful in your research, please cite:</p>
        <pre>
@misc{monthlyswebench2026,
    title={Monthly-SWEBench: A Living, Rigorously Verified Benchmark
           for Real-World Software Engineering},
    author={Haiyang Shen and Xinbo Xu and Xuanzhong Chen and Wendong Xu and Kaiyuan Chen and Xiaobo Hu and Rui Wang and Yang Liu and Yixin Ren and Yuan Gong and Liang Chen and Kuan Li},
    year={2026},
    note={Blog post: https://unipat.ai/benchmarks/MonthlySWEBench}
}</pre>
    </div>

  </div>
</div>


<script>
/* ============================================
   Monthly-SWEBench Data & Logic
   ============================================ */

var SWE_ICONS = {
  'opus': '/static/images/swebench/logos/claude.png',
  'claude': '/static/images/swebench/logos/claude.png',
  'gpt': '/static/images/swebench/logos/openai.png',
  'openai': '/static/images/swebench/logos/openai.png',
  'gemini': '/static/images/swebench/logos/gemini.png',
  'kimi': '/static/images/swebench/logos/kimi.png',
  'glm': '/static/images/swebench/logos/glm.png',
  'qwen': '/static/images/swebench/logos/qwen.png',
  'doubao': '/static/images/swebench/logos/seed.png',
  'seed': '/static/images/swebench/logos/seed.png',
  'minimax': '/static/images/swebench/logos/minimax.png',
  'xiaomi': '/static/images/swebench/logos/xiaomi.png',
  'mimo': '/static/images/swebench/logos/xiaomi.png',
  'deepseek': '/static/images/roadmapbench/logos/deepseek.png'
};

function sweGetFallbackIcon(name) {
  var initial = name.charAt(0).toUpperCase();
  var colors = ['#e11d48','#3b82f6','#10a37f','#d97706','#7c3aed'];
  var hash = 0;
  for (var i = 0; i < name.length; i++) hash += name.charCodeAt(i);
  var c = colors[hash % colors.length];
  return "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="' + c + '"/><text x="24" y="32" text-anchor="middle" fill="#fff" font-size="20" font-weight="bold" font-family="Arial">' + initial + '</text></svg>');
}

function sweGetIcon(name) {
  var lower = name.toLowerCase();
  for (var key in SWE_ICONS) {
    if (lower.indexOf(key) !== -1) return SWE_ICONS[key];
  }
  return sweGetFallbackIcon(name);
}

/* ========================================================================
   DATA: Edit numbers here for monthly updates.
   To add a new month: push to "batches", add matching key in "snapshots".
   ======================================================================== */
var SWE_DATA = {
  "meta": {
    "2026-06": {
      "totalTasks": 100,
      "bugFix": 50,
      "nonBugFix": 50,
      "models": 12,
      "metric": "Pass@1",
      "note": "2026-06 benchmark snapshot: 100 tasks selected from closed GitHub PRs and validated with oracle=1/nop=0. Avg Turns and timeout turn statistics count OpenHands agent iterations/trajectory steps, not raw LLM API calls. Temporary publication rule: missing or not-yet-clean required-model rows are counted as reward 0 and will be replaced after clean reruns finish.",
      "sourceNote": "100 real-world tasks selected from 2026-06 closed GitHub PRs",
      "findingsTitle": "Key Findings (2026-06)",
      "findings": [
            "<span class=\"swe-finding-label\">Balanced monthly source set.</span> The 2026-06 snapshot contains 100 tasks selected from that month's closed GitHub PRs, split evenly between 50 bug-fix and 50 non-bug-fix tasks.",
            "<span class=\"swe-finding-label\">Difficulty-controlled final set.</span> The final 100 tasks were reselected from the 148 validated candidates to keep the leading score at 76.00% while preserving model disagreement.",
            "<span class=\"swe-finding-label\">Current leading tier.</span> GPT-5.5-High leads the overall leaderboard; the top tier is GPT-5.5-High at 76.00%, Claude-Opus-4.8-XHigh at 69.00%, and GLM-5.2-Max at 65.00%.",
            "<span class=\"swe-finding-label\">Task type split.</span> On bug-fix tasks, the leaders are GPT-5.5-High at 80.00%, Claude-Opus-4.8-XHigh at 70.00%, and GLM-5.2-Max at 68.00%; on non-bug-fix tasks, the leaders are GPT-5.5-High at 72.00%, Claude-Opus-4.8-XHigh at 68.00%, and GLM-5.2-Max at 62.00%.",
            "<span class=\"swe-finding-label\">Timeout accounting.</span> Timeout rows are counted as model failures only after the benchmark policy classifies them as non-completions; timeout turn statistics use the same OpenHands iteration/trajectory-step definition as Avg/Max Turns. Doubao-Seed-2.1-Pro-High: 5 timeouts and 10 other unfinished rows; timeout limit min/median/avg/max=1800/3600/3240.00/3600s; timeout turns min/median/avg/max=145/239/225.80/264 Claude-Opus-4.8-XHigh: 1 timeouts and 2 other unfinished rows; timeout limit=3600s; timeout turns min/median/avg/max=188/188/188.00/188 GLM-5.2-Max: 2 timeouts; timeout limit min/median/avg/max=900/1350/1350.00/1800s; timeout turns min/median/avg/max=75/145.0/145.00/215 Qwen-3.7-Plus-Thinking: 1 timeouts and 1 other unfinished rows; timeout limit=1800s; timeout turns min/median/avg/max=133/133/133.00/133"
      ]
},
    "2026-05": {
      "totalTasks": 100,
      "bugFix": 50,
      "nonBugFix": 50,
      "models": 19,
      "metric": "Pass@1",
      "note": "2026-05 benchmark snapshot: 100 tasks selected from closed GitHub PRs and validated with oracle=1/nop=0. Avg Turns and timeout turn statistics count OpenHands agent iterations/trajectory steps, not raw LLM API calls. Doubao-Seed-2.1-Pro-High is included from current official artifacts; three non-clean Seed 2.1 Pro reruns are counted as failures under the benchmark missing-attempt policy.",
      "sourceNote": "100 real-world tasks selected from 2026-05 closed GitHub PRs",
      "findingsTitle": "Key Findings (2026-05)",
      "findings": [
        "<span class=\"swe-finding-label\">Balanced monthly source set.</span> The 2026-05 snapshot contains 100 tasks selected from that month's closed GitHub PRs, split evenly between 50 bug-fix and 50 non-bug-fix tasks.",
        "<span class=\"swe-finding-label\">Difficulty-controlled final set.</span> The final 100 tasks were reselected from the 148 validated candidates to keep the leading score at 82.00% while preserving model disagreement.",
        "<span class=\"swe-finding-label\">Current leading tier.</span> GPT-5.5-High leads the overall leaderboard; the top tier is GPT-5.5-High at 82.00%, Gemini-3.5-Flash-High at 81.00%, and Claude-Opus-4.8-XHigh at 80.00%.",
        "<span class=\"swe-finding-label\">Seed 2.1 Pro added.</span> Doubao-Seed-2.1-Pro-High reaches 75.00% overall, 70.00% on bug-fix tasks, and 80.00% on non-bug-fix tasks; three non-clean official reruns are counted as failures in this published snapshot.",
        "<span class=\"swe-finding-label\">Task type split.</span> On bug-fix tasks, the leaders are GPT-5.5-High at 78.00%, Gemini-3.5-Flash-High at 74.00%, and Claude-Opus-4.8-XHigh at 70.00%; on non-bug-fix tasks, the leaders are Claude-Opus-4.8-XHigh at 90.00%, Gemini-3.5-Flash-High at 88.00%, and GPT-5.5-High at 86.00%.",
        "<span class=\"swe-finding-label\">Timeout accounting.</span> Timeout rows are counted as model failures only after the benchmark policy classifies them as non-completions; timeout turn statistics use the same OpenHands iteration/trajectory-step definition as Avg/Max Turns. Step-3.7-Flash-High: 4 timeouts; timeout limit=1800s; timeout turns min/median/avg/max=67/90.0/86.00/97 MiMo-V2.5-Pro-High: 1 timeouts; timeout limit=1800s; timeout turns min/median/avg/max=127/127/127.00/127 MiniMax-M3-Adaptive: 1 timeouts; timeout limit=1800s; timeout turns min/median/avg/max=131/131/131.00/131"
      ]
    },
    "2026-03": {
      "totalTasks": 112,
      "bugFix": 68,
      "nonBugFix": 44,
      "models": 10,
      "metric": "Pass@1",
      "note": "March 2026 final snapshot. New models and updated scores are added monthly.",
      "findingsTitle": "Key Findings (Mar 2026)",
      "findings": [
        "<span class=\"swe-finding-label\">High task difficulty.</span> Most models average 30~60 episodes per task, indicating these are real multi-step engineering challenges requiring extended reasoning and trial-and-error, not simple one-shot patches.",
        "<span class=\"swe-finding-label\">Trajectory efficiency varies widely.</span> Gemini achieves strong accuracy with the lowest avg episodes (~13), while GLM-5.1, MiniMax, Qwen, and GLM-5 require 3~5x more steps, revealing significant differences in how directly models solve problems.",
        "<span class=\"swe-finding-label\">Clear model tiers.</span> Opus leads decisively; GLM-5.1 and GPT-5.4-High form a strong second tier; Qwen-3.6-Plus and Gemini compete closely behind; GLM-5, Kimi, and MiniMax cluster together, showing emerging but still maturing agent capabilities across providers.",
        "<span class=\"swe-finding-label\">Bug fix vs non-bug fix signal.</span> All models score higher on bug fix tasks (localized repairs, regression fixes) than non-bug fix tasks (feature additions, API evolution), confirming that broader-scope changes remain significantly harder for current agents."
      ]
    },
    "2026-04": {
      "totalTasks": 90,
      "bugFix": 43,
      "nonBugFix": 47,
      "models": 10,
      "metric": "Pass@1",
      "note": "April 2026 provisional snapshot. Model tests used each task's configured agent timeout, which was typically about 30 minutes. Scores use each model's completed reward-bearing runs as the denominator while remaining jobs continue.",
      "findingsTitle": "Key Findings (Apr 2026 provisional)",
      "findings": [
        "<span class=\"swe-finding-label\">Fail2pass pool.</span> April currently reports 90 oracle-validated fail2pass tasks: 43 bug fixes and 47 non-bug fixes.",
        "<span class=\"swe-finding-label\">Timeout policy.</span> April tests used the timeout configured on each task, which was typically about 30 minutes; completed reward-bearing runs are reported while remaining jobs continue.",
        "<span class=\"swe-finding-label\">Current leading tier.</span> GPT-5.5-High, GLM-5.1-Thinking, Claude-Opus-4.7-High, DeepSeek-V4-Pro-High, and Qwen-3.7-Max-Thinking form the current leading group, with Qwen-3.7-Max-Thinking reaching 61.11% overall.",
        "<span class=\"swe-finding-label\">Bug fix vs non-bug fix signal.</span> Most models perform better on bug fixes than non-bug fixes; Qwen-3.7-Max-Thinking ties the 67.44% bug-fix group and the 55.32% non-bug-fix group."
      ]
    }
  },
  "categories": [
    "Overall",
    "Bug Fix",
    "Non-Bug Fix"
  ],
  "data": {
    "Overall": {
      "batches": [
        "2026-03",
        "2026-04",
        "2026-05", "2026-06"],
      "snapshots": {
        "2026-06": [
          {
                    "rank": 1,
                    "modelId": 10,
                    "modelName": "GPT-5.5-High",
                    "organization": "OpenAI",
                    "passAt1": 76.0,
                    "avgEp": 115.59,
                    "avgTurns": 115.59,
                    "maxTurns": 405,
                    "turnsCompleted": 100,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 100,
                    "passed": 76,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 2,
                    "modelId": 12,
                    "modelName": "Claude-Opus-4.8-XHigh",
                    "organization": "Anthropic",
                    "passAt1": 69.0,
                    "avgEp": 107.09,
                    "avgTurns": 107.09,
                    "maxTurns": 300,
                    "turnsCompleted": 97,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 100,
                    "passed": 69,
                    "timeoutCount": 1,
                    "timeoutTurnsMin": 188,
                    "timeoutTurnsMedian": 188,
                    "timeoutTurnsAvg": 188.0,
                    "timeoutTurnsMax": 188,
                    "timeoutTurnsCompleted": 1,
                    "timeoutLimitSecondsMin": 3600.0,
                    "timeoutLimitSecondsMedian": 3600.0,
                    "timeoutLimitSecondsAvg": 3600.0,
                    "timeoutLimitSecondsMax": 3600.0,
                    "unfinishedCount": 3,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 1,
                              "zero_filled:missing_result_json": 2
                    }
          },
          {
                    "rank": 3,
                    "modelId": 11,
                    "modelName": "GLM-5.2-Max",
                    "organization": "Zhipu AI",
                    "passAt1": 65.0,
                    "avgEp": 283.28,
                    "avgTurns": 283.28,
                    "maxTurns": 907,
                    "turnsCompleted": 98,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 100,
                    "passed": 65,
                    "timeoutCount": 2,
                    "timeoutTurnsMin": 75,
                    "timeoutTurnsMedian": 145.0,
                    "timeoutTurnsAvg": 145.0,
                    "timeoutTurnsMax": 215,
                    "timeoutTurnsCompleted": 2,
                    "timeoutLimitSecondsMin": 900.0,
                    "timeoutLimitSecondsMedian": 1350.0,
                    "timeoutLimitSecondsAvg": 1350.0,
                    "timeoutLimitSecondsMax": 1800.0,
                    "unfinishedCount": 2,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 2
                    }
          },
          {
                    "rank": 4,
                    "modelId": 1,
                    "modelName": "MiniMax-M3-Adaptive",
                    "organization": "MiniMax",
                    "passAt1": 58.0,
                    "avgEp": 456.75,
                    "avgTurns": 456.75,
                    "maxTurns": 975,
                    "turnsCompleted": 100,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 100,
                    "passed": 58,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 5,
                    "modelId": 4,
                    "modelName": "DeepSeek-V4-Pro-High",
                    "organization": "DeepSeek",
                    "passAt1": 57.0,
                    "avgEp": 127.47,
                    "avgTurns": 127.47,
                    "maxTurns": 283,
                    "turnsCompleted": 99,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 100,
                    "passed": 57,
                    "timeoutCount": 1,
                    "timeoutTurnsMin": 75,
                    "timeoutTurnsMedian": 75,
                    "timeoutTurnsAvg": 75.0,
                    "timeoutTurnsMax": 75,
                    "timeoutTurnsCompleted": 1,
                    "timeoutLimitSecondsMin": 1200.0,
                    "timeoutLimitSecondsMedian": 1200.0,
                    "timeoutLimitSecondsAvg": 1200.0,
                    "timeoutLimitSecondsMax": 1200.0,
                    "unfinishedCount": 1,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 1
                    }
          },
          {
                    "rank": 6,
                    "modelId": 6,
                    "modelName": "Doubao-Seed-2.1-Pro-High",
                    "organization": "ByteDance",
                    "passAt1": 53.0,
                    "avgEp": 215.73,
                    "avgTurns": 215.73,
                    "maxTurns": 621,
                    "turnsCompleted": 85,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 100,
                    "passed": 53,
                    "timeoutCount": 5,
                    "timeoutTurnsMin": 145,
                    "timeoutTurnsMedian": 239,
                    "timeoutTurnsAvg": 225.8,
                    "timeoutTurnsMax": 264,
                    "timeoutTurnsCompleted": 5,
                    "timeoutLimitSecondsMin": 1800.0,
                    "timeoutLimitSecondsMedian": 3600.0,
                    "timeoutLimitSecondsAvg": 3240.0,
                    "timeoutLimitSecondsMax": 3600.0,
                    "unfinishedCount": 15,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 5,
                              "zero_filled:missing_result_json": 10
                    }
          },
          {
                    "rank": 7,
                    "modelId": 8,
                    "modelName": "Qwen-3.7-Max-Thinking",
                    "organization": "Alibaba",
                    "passAt1": 51.0,
                    "avgEp": 98.64,
                    "avgTurns": 98.64,
                    "maxTurns": 306,
                    "turnsCompleted": 98,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 100,
                    "passed": 51,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 2,
                    "unfinishedReasons": {
                              "zero_filled:missing_result_json": 2
                    }
          },
          {
                    "rank": 8,
                    "modelId": 9,
                    "modelName": "Qwen-3.7-Plus-Thinking",
                    "organization": "Alibaba",
                    "passAt1": 47.0,
                    "avgEp": 115.74,
                    "avgTurns": 115.74,
                    "maxTurns": 444,
                    "turnsCompleted": 98,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 100,
                    "passed": 47,
                    "timeoutCount": 1,
                    "timeoutTurnsMin": 133,
                    "timeoutTurnsMedian": 133,
                    "timeoutTurnsAvg": 133.0,
                    "timeoutTurnsMax": 133,
                    "timeoutTurnsCompleted": 1,
                    "timeoutLimitSecondsMin": 1800.0,
                    "timeoutLimitSecondsMedian": 1800.0,
                    "timeoutLimitSecondsAvg": 1800.0,
                    "timeoutLimitSecondsMax": 1800.0,
                    "unfinishedCount": 2,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 1,
                              "zero_filled:missing_result_json": 1
                    }
          },
          {
                    "rank": 9,
                    "modelId": 5,
                    "modelName": "DeepSeek-V4-Flash-High",
                    "organization": "DeepSeek",
                    "passAt1": 45.0,
                    "avgEp": 161.18,
                    "avgTurns": 161.18,
                    "maxTurns": 481,
                    "turnsCompleted": 98,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 100,
                    "passed": 45,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 2,
                    "unfinishedReasons": {
                              "zero_filled:missing_result_json": 2
                    }
          },
          {
                    "rank": 10,
                    "modelId": 2,
                    "modelName": "Hunyuan-HY3-Preview-High",
                    "organization": "Tencent",
                    "passAt1": 38.0,
                    "avgEp": 234.04,
                    "avgTurns": 234.04,
                    "maxTurns": 575,
                    "turnsCompleted": 99,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 100,
                    "passed": 38,
                    "timeoutCount": 1,
                    "timeoutTurnsMin": 189,
                    "timeoutTurnsMedian": 189,
                    "timeoutTurnsAvg": 189.0,
                    "timeoutTurnsMax": 189,
                    "timeoutTurnsCompleted": 1,
                    "timeoutLimitSecondsMin": 1200.0,
                    "timeoutLimitSecondsMedian": 1200.0,
                    "timeoutLimitSecondsAvg": 1200.0,
                    "timeoutLimitSecondsMax": 1200.0,
                    "unfinishedCount": 1,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 1
                    }
          },
          {
                    "rank": 11,
                    "modelId": 7,
                    "modelName": "Gemini-3.5-Flash-High",
                    "organization": "Google",
                    "passAt1": 29.0,
                    "avgEp": 135.08,
                    "avgTurns": 135.08,
                    "maxTurns": 811,
                    "turnsCompleted": 100,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 100,
                    "passed": 29,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 12,
                    "modelId": 3,
                    "modelName": "Step-3.7-Flash-High",
                    "organization": "StepFun",
                    "passAt1": 22.0,
                    "avgEp": 176.22,
                    "avgTurns": 176.22,
                    "maxTurns": 565,
                    "turnsCompleted": 74,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 100,
                    "passed": 22,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          }
],
        "2026-05": [
          {
            "rank": 1,
            "modelId": 13,
            "modelName": "GPT-5.5-High",
            "organization": "OpenAI",
            "passAt1": 82.0,
            "avgEp": 78.65,
            "avgTurns": 78.65,
            "maxTurns": 203,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 82,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 2,
            "modelId": 10,
            "modelName": "Gemini-3.5-Flash-High",
            "organization": "Google",
            "passAt1": 81.0,
            "avgEp": 122.92,
            "avgTurns": 122.92,
            "maxTurns": 363,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 81,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 3,
            "modelId": 16,
            "modelName": "Claude-Opus-4.8-XHigh",
            "organization": "Anthropic",
            "passAt1": 80.0,
            "avgEp": 62.24,
            "avgTurns": 62.24,
            "maxTurns": 178,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 80,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "modelId": 19,
            "modelName": "Doubao-Seed-2.1-Pro-High",
            "organization": "ByteDance",
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "passAt1": 75.0,
            "avgEp": 148.74,
            "avgTurns": 148.74,
            "maxTurns": 420,
            "turnsCompleted": 97,
            "passed": 75,
            "unfinishedCount": 3,
            "unfinishedReasons": {
              "NonZeroAgentExitCodeError": 3
            },
            "rank": 4
          },
          {
            "rank": 4,
            "modelId": 18,
            "modelName": "GLM-5.2-Max",
            "organization": "Zhipu AI",
            "passAt1": 75.0,
            "avgEp": 144.69,
            "avgTurns": 144.69,
            "maxTurns": 351,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 75,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 6,
            "modelId": 8,
            "modelName": "Kimi-K2.7-Code-Thinking",
            "organization": "Moonshot AI",
            "passAt1": 73.0,
            "avgEp": 130.52,
            "avgTurns": 130.52,
            "maxTurns": 337,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 73,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 7,
            "modelId": 12,
            "modelName": "Qwen-3.7-Max-Thinking",
            "organization": "Alibaba",
            "passAt1": 72.0,
            "avgEp": 91.27,
            "avgTurns": 91.27,
            "maxTurns": 331,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 72,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 8,
            "modelId": 14,
            "modelName": "GLM-5.1-Thinking",
            "organization": "Zhipu AI",
            "passAt1": 71.0,
            "avgEp": 139.78,
            "avgTurns": 139.78,
            "maxTurns": 481,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 71,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 8,
            "modelId": 17,
            "modelName": "Hunyuan-HY3-Preview-High",
            "organization": "Tencent",
            "passAt1": 71.0,
            "avgEp": 142.95,
            "avgTurns": 142.95,
            "maxTurns": 539,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 71,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 10,
            "modelId": 6,
            "modelName": "DeepSeek-V4-Flash-High",
            "organization": "DeepSeek",
            "passAt1": 69.0,
            "avgEp": 115.96,
            "avgTurns": 115.96,
            "maxTurns": 463,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 69,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 10,
            "modelId": 7,
            "modelName": "Kimi-K2.6-Thinking",
            "organization": "Moonshot AI",
            "passAt1": 69.0,
            "avgEp": 114.92,
            "avgTurns": 114.92,
            "maxTurns": 304,
            "turnsCompleted": 99,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 69,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 12,
            "modelId": 15,
            "modelName": "Claude-Opus-4.7-High",
            "organization": "Anthropic",
            "passAt1": 67.0,
            "avgEp": 113.08,
            "avgTurns": 113.08,
            "maxTurns": 500,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 67,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 12,
            "modelId": 5,
            "modelName": "DeepSeek-V4-Pro-High",
            "organization": "DeepSeek",
            "passAt1": 67.0,
            "avgEp": 93.0,
            "avgTurns": 93.0,
            "maxTurns": 333,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 67,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 12,
            "modelId": 4,
            "modelName": "MiMo-V2.5-Pro-High",
            "organization": "Xiaomi",
            "passAt1": 67.0,
            "avgEp": 155.76,
            "avgTurns": 155.76,
            "maxTurns": 341,
            "turnsCompleted": 99,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 67,
            "timeoutCount": 1,
            "timeoutTurnsMin": 127,
            "timeoutTurnsMedian": 127,
            "timeoutTurnsAvg": 127.0,
            "timeoutTurnsMax": 127,
            "timeoutTurnsCompleted": 1,
            "timeoutLimitSecondsMin": 1800.0,
            "timeoutLimitSecondsMedian": 1800.0,
            "timeoutLimitSecondsAvg": 1800.0,
            "timeoutLimitSecondsMax": 1800.0,
            "unfinishedCount": 1,
            "unfinishedReasons": {
              "timeout:CancelledError": 1
            }
          },
          {
            "rank": 12,
            "modelId": 2,
            "modelName": "MiniMax-M3-Adaptive",
            "organization": "MiniMax",
            "passAt1": 67.0,
            "avgEp": 180.35,
            "avgTurns": 180.35,
            "maxTurns": 549,
            "turnsCompleted": 93,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 67,
            "timeoutCount": 1,
            "timeoutTurnsMin": 131,
            "timeoutTurnsMedian": 131,
            "timeoutTurnsAvg": 131.0,
            "timeoutTurnsMax": 131,
            "timeoutTurnsCompleted": 1,
            "timeoutLimitSecondsMin": 1800.0,
            "timeoutLimitSecondsMedian": 1800.0,
            "timeoutLimitSecondsAvg": 1800.0,
            "timeoutLimitSecondsMax": 1800.0,
            "unfinishedCount": 1,
            "unfinishedReasons": {
              "timeout:CancelledError": 1
            }
          },
          {
            "rank": 16,
            "modelId": 11,
            "modelName": "Gemini-3.1-Pro-High",
            "organization": "Google",
            "passAt1": 62.0,
            "avgEp": 62.92,
            "avgTurns": 62.92,
            "maxTurns": 183,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 62,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 17,
            "modelId": 3,
            "modelName": "Step-3.7-Flash-High",
            "organization": "StepFun",
            "passAt1": 53.0,
            "avgEp": 154.62,
            "avgTurns": 154.62,
            "maxTurns": 471,
            "turnsCompleted": 95,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 53,
            "timeoutCount": 4,
            "timeoutTurnsMin": 67,
            "timeoutTurnsMedian": 90.0,
            "timeoutTurnsAvg": 86.0,
            "timeoutTurnsMax": 97,
            "timeoutTurnsCompleted": 4,
            "timeoutLimitSecondsMin": 1800.0,
            "timeoutLimitSecondsMedian": 1800.0,
            "timeoutLimitSecondsAvg": 1800.0,
            "timeoutLimitSecondsMax": 1800.0,
            "unfinishedCount": 4,
            "unfinishedReasons": {
              "timeout:AgentTimeoutError": 4
            }
          },
          {
            "rank": 18,
            "modelId": 9,
            "modelName": "Doubao-Seed-2.0-Pro-High",
            "organization": "ByteDance",
            "passAt1": 52.0,
            "avgEp": 34.3,
            "avgTurns": 34.3,
            "maxTurns": 89,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 52,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 19,
            "modelId": 1,
            "modelName": "MiniMax-M2.7-Reasoning",
            "organization": "MiniMax",
            "passAt1": 50.0,
            "avgEp": 119.1,
            "avgTurns": 119.1,
            "maxTurns": 335,
            "turnsCompleted": 100,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 100,
            "passed": 50,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          }
        ],
        "2026-03": [
          {
            "rank": 1,
            "modelId": 1,
            "modelName": "Claude-Opus-4.6",
            "organization": "Anthropic",
            "passAt1": 75,
            "avgEp": 36.61,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 2,
            "modelId": 12,
            "modelName": "GLM-5.1",
            "organization": "Zhipu AI",
            "passAt1": 66.96,
            "avgEp": 55,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 3,
            "modelId": 2,
            "modelName": "GPT-5.4-High",
            "organization": "OpenAI",
            "passAt1": 64.3,
            "avgEp": 46.4,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 4,
            "modelId": 10,
            "modelName": "Qwen-3.6-Plus",
            "organization": "Alibaba",
            "passAt1": 57.14,
            "avgEp": 44.82,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 5,
            "modelId": 3,
            "modelName": "Gemini-3.1-Pro",
            "organization": "Google",
            "passAt1": 54.46,
            "avgEp": 12.99,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 6,
            "modelId": 4,
            "modelName": "Kimi-K2.5",
            "organization": "Moonshot AI",
            "passAt1": 50,
            "avgEp": 48.6,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 7,
            "modelId": 5,
            "modelName": "GLM-5",
            "organization": "Zhipu AI",
            "passAt1": 50,
            "avgEp": 49.43,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 8,
            "modelId": 11,
            "modelName": "MiMo-V2-Pro",
            "organization": "Xiaomi",
            "passAt1": 46.43,
            "avgEp": 47.5,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 9,
            "modelId": 8,
            "modelName": "MiniMax-2.7",
            "organization": "MiniMax",
            "passAt1": 46.43,
            "avgEp": 59.81,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 10,
            "modelId": 6,
            "modelName": "Qwen-3.5-397B-A17B",
            "organization": "Alibaba",
            "passAt1": 43.75,
            "avgEp": 54.75,
            "agent": "Terminus-2",
            "date": "2026-03"
          }
        ],
        "2026-04": [
          {
            "rank": 1,
            "modelId": 2,
            "modelName": "GPT-5.5-High",
            "organization": "OpenAI",
            "passAt1": 64.44,
            "avgEp": 47.92,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 90,
            "passed": 58
          },
          {
            "rank": 2,
            "modelId": 12,
            "modelName": "GLM-5.1-Thinking",
            "organization": "Zhipu AI",
            "passAt1": 63.33,
            "avgEp": 71.05,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 90,
            "passed": 57
          },
          {
            "rank": 3,
            "modelId": 1,
            "modelName": "Claude-Opus-4.7-High",
            "organization": "Anthropic",
            "passAt1": 62.22,
            "avgEp": 40.47,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 90,
            "passed": 56
          },
          {
            "rank": 4,
            "modelId": 15,
            "modelName": "DeepSeek-V4-Pro-High",
            "organization": "DeepSeek",
            "passAt1": 62.22,
            "avgEp": 55.36,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 90,
            "passed": 56
          },
          {
            "rank": 5,
            "modelId": 17,
            "modelName": "Qwen-3.7-Max-Thinking",
            "organization": "Alibaba",
            "passAt1": 61.11,
            "avgEp": 39.84,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 90,
            "passed": 55
          },
          {
            "rank": 6,
            "modelId": 4,
            "modelName": "Kimi-K2.6-Thinking",
            "organization": "Moonshot AI",
            "passAt1": 58.89,
            "avgEp": 60.84,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 65,
            "passed": 53
          },
          {
            "rank": 7,
            "modelId": 10,
            "modelName": "Qwen-3.6-Plus-Thinking",
            "organization": "Alibaba",
            "passAt1": 57.78,
            "avgEp": 69.01,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 90,
            "passed": 52
          },
          {
            "rank": 8,
            "modelId": 3,
            "modelName": "Gemini-3.1-Pro-High",
            "organization": "Google",
            "passAt1": 55.56,
            "avgEp": 32.21,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 90,
            "passed": 50
          },
          {
            "rank": 8,
            "modelId": 16,
            "modelName": "Gemini-3.5-Flash-High",
            "organization": "Google",
            "passAt1": 55.56,
            "avgEp": 67.4,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 90,
            "passed": 50
          },
          {
            "rank": 9,
            "modelId": 11,
            "modelName": "MiMo-V2.5-Pro-High",
            "organization": "Xiaomi",
            "passAt1": 53.93,
            "avgEp": 43.5,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 89,
            "passed": 48
          }
        ]
      }
    },
    "Bug Fix": {
      "batches": [
        "2026-03",
        "2026-04",
        "2026-05", "2026-06"],
      "snapshots": {
        "2026-06": [
          {
                    "rank": 1,
                    "modelId": 10,
                    "modelName": "GPT-5.5-High",
                    "organization": "OpenAI",
                    "passAt1": 80.0,
                    "avgEp": 110.48,
                    "avgTurns": 110.48,
                    "maxTurns": 405,
                    "turnsCompleted": 50,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 40,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 2,
                    "modelId": 12,
                    "modelName": "Claude-Opus-4.8-XHigh",
                    "organization": "Anthropic",
                    "passAt1": 70.0,
                    "avgEp": 99.9,
                    "avgTurns": 99.9,
                    "maxTurns": 300,
                    "turnsCompleted": 48,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 35,
                    "timeoutCount": 1,
                    "timeoutTurnsMin": 188,
                    "timeoutTurnsMedian": 188,
                    "timeoutTurnsAvg": 188.0,
                    "timeoutTurnsMax": 188,
                    "timeoutTurnsCompleted": 1,
                    "timeoutLimitSecondsMin": 3600.0,
                    "timeoutLimitSecondsMedian": 3600.0,
                    "timeoutLimitSecondsAvg": 3600.0,
                    "timeoutLimitSecondsMax": 3600.0,
                    "unfinishedCount": 2,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 1,
                              "zero_filled:missing_result_json": 1
                    }
          },
          {
                    "rank": 3,
                    "modelId": 11,
                    "modelName": "GLM-5.2-Max",
                    "organization": "Zhipu AI",
                    "passAt1": 68.0,
                    "avgEp": 253.63,
                    "avgTurns": 253.63,
                    "maxTurns": 768,
                    "turnsCompleted": 49,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 34,
                    "timeoutCount": 1,
                    "timeoutTurnsMin": 75,
                    "timeoutTurnsMedian": 75,
                    "timeoutTurnsAvg": 75.0,
                    "timeoutTurnsMax": 75,
                    "timeoutTurnsCompleted": 1,
                    "timeoutLimitSecondsMin": 1800.0,
                    "timeoutLimitSecondsMedian": 1800.0,
                    "timeoutLimitSecondsAvg": 1800.0,
                    "timeoutLimitSecondsMax": 1800.0,
                    "unfinishedCount": 1,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 1
                    }
          },
          {
                    "rank": 4,
                    "modelId": 4,
                    "modelName": "DeepSeek-V4-Pro-High",
                    "organization": "DeepSeek",
                    "passAt1": 64.0,
                    "avgEp": 111.37,
                    "avgTurns": 111.37,
                    "maxTurns": 268,
                    "turnsCompleted": 49,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 32,
                    "timeoutCount": 1,
                    "timeoutTurnsMin": 75,
                    "timeoutTurnsMedian": 75,
                    "timeoutTurnsAvg": 75.0,
                    "timeoutTurnsMax": 75,
                    "timeoutTurnsCompleted": 1,
                    "timeoutLimitSecondsMin": 1200.0,
                    "timeoutLimitSecondsMedian": 1200.0,
                    "timeoutLimitSecondsAvg": 1200.0,
                    "timeoutLimitSecondsMax": 1200.0,
                    "unfinishedCount": 1,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 1
                    }
          },
          {
                    "rank": 5,
                    "modelId": 9,
                    "modelName": "Qwen-3.7-Plus-Thinking",
                    "organization": "Alibaba",
                    "passAt1": 58.0,
                    "avgEp": 98.94,
                    "avgTurns": 98.94,
                    "maxTurns": 424,
                    "turnsCompleted": 48,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 29,
                    "timeoutCount": 1,
                    "timeoutTurnsMin": 133,
                    "timeoutTurnsMedian": 133,
                    "timeoutTurnsAvg": 133.0,
                    "timeoutTurnsMax": 133,
                    "timeoutTurnsCompleted": 1,
                    "timeoutLimitSecondsMin": 1800.0,
                    "timeoutLimitSecondsMedian": 1800.0,
                    "timeoutLimitSecondsAvg": 1800.0,
                    "timeoutLimitSecondsMax": 1800.0,
                    "unfinishedCount": 2,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 1,
                              "zero_filled:missing_result_json": 1
                    }
          },
          {
                    "rank": 6,
                    "modelId": 1,
                    "modelName": "MiniMax-M3-Adaptive",
                    "organization": "MiniMax",
                    "passAt1": 56.0,
                    "avgEp": 398.3,
                    "avgTurns": 398.3,
                    "maxTurns": 975,
                    "turnsCompleted": 50,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 28,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 7,
                    "modelId": 8,
                    "modelName": "Qwen-3.7-Max-Thinking",
                    "organization": "Alibaba",
                    "passAt1": 52.0,
                    "avgEp": 88.04,
                    "avgTurns": 88.04,
                    "maxTurns": 292,
                    "turnsCompleted": 48,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 26,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 2,
                    "unfinishedReasons": {
                              "zero_filled:missing_result_json": 2
                    }
          },
          {
                    "rank": 8,
                    "modelId": 6,
                    "modelName": "Doubao-Seed-2.1-Pro-High",
                    "organization": "ByteDance",
                    "passAt1": 50.0,
                    "avgEp": 184.66,
                    "avgTurns": 184.66,
                    "maxTurns": 471,
                    "turnsCompleted": 41,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 25,
                    "timeoutCount": 3,
                    "timeoutTurnsMin": 145,
                    "timeoutTurnsMedian": 219,
                    "timeoutTurnsAvg": 201.0,
                    "timeoutTurnsMax": 239,
                    "timeoutTurnsCompleted": 3,
                    "timeoutLimitSecondsMin": 1800.0,
                    "timeoutLimitSecondsMedian": 3600.0,
                    "timeoutLimitSecondsAvg": 3000.0,
                    "timeoutLimitSecondsMax": 3600.0,
                    "unfinishedCount": 9,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 3,
                              "zero_filled:missing_result_json": 6
                    }
          },
          {
                    "rank": 9,
                    "modelId": 5,
                    "modelName": "DeepSeek-V4-Flash-High",
                    "organization": "DeepSeek",
                    "passAt1": 46.0,
                    "avgEp": 148.5,
                    "avgTurns": 148.5,
                    "maxTurns": 481,
                    "turnsCompleted": 50,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 23,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 10,
                    "modelId": 2,
                    "modelName": "Hunyuan-HY3-Preview-High",
                    "organization": "Tencent",
                    "passAt1": 40.0,
                    "avgEp": 217.88,
                    "avgTurns": 217.88,
                    "maxTurns": 575,
                    "turnsCompleted": 49,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 20,
                    "timeoutCount": 1,
                    "timeoutTurnsMin": 189,
                    "timeoutTurnsMedian": 189,
                    "timeoutTurnsAvg": 189.0,
                    "timeoutTurnsMax": 189,
                    "timeoutTurnsCompleted": 1,
                    "timeoutLimitSecondsMin": 1200.0,
                    "timeoutLimitSecondsMedian": 1200.0,
                    "timeoutLimitSecondsAvg": 1200.0,
                    "timeoutLimitSecondsMax": 1200.0,
                    "unfinishedCount": 1,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 1
                    }
          },
          {
                    "rank": 11,
                    "modelId": 7,
                    "modelName": "Gemini-3.5-Flash-High",
                    "organization": "Google",
                    "passAt1": 28.0,
                    "avgEp": 126.34,
                    "avgTurns": 126.34,
                    "maxTurns": 811,
                    "turnsCompleted": 50,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 14,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 12,
                    "modelId": 3,
                    "modelName": "Step-3.7-Flash-High",
                    "organization": "StepFun",
                    "passAt1": 24.0,
                    "avgEp": 148.86,
                    "avgTurns": 148.86,
                    "maxTurns": 434,
                    "turnsCompleted": 37,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 12,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          }
],
        "2026-05": [
          {
            "rank": 1,
            "modelId": 13,
            "modelName": "GPT-5.5-High",
            "organization": "OpenAI",
            "passAt1": 78.0,
            "avgEp": 79.66,
            "avgTurns": 79.66,
            "maxTurns": 201,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 39,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 2,
            "modelId": 10,
            "modelName": "Gemini-3.5-Flash-High",
            "organization": "Google",
            "passAt1": 74.0,
            "avgEp": 125.38,
            "avgTurns": 125.38,
            "maxTurns": 363,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 37,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 3,
            "modelId": 16,
            "modelName": "Claude-Opus-4.8-XHigh",
            "organization": "Anthropic",
            "passAt1": 70.0,
            "avgEp": 67.18,
            "avgTurns": 67.18,
            "maxTurns": 178,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 35,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "modelId": 19,
            "modelName": "Doubao-Seed-2.1-Pro-High",
            "organization": "ByteDance",
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "passAt1": 70.0,
            "avgEp": 164.77,
            "avgTurns": 164.77,
            "maxTurns": 411,
            "turnsCompleted": 48,
            "passed": 35,
            "unfinishedCount": 2,
            "unfinishedReasons": {
              "NonZeroAgentExitCodeError": 2
            },
            "rank": 3
          },
          {
            "rank": 3,
            "modelId": 18,
            "modelName": "GLM-5.2-Max",
            "organization": "Zhipu AI",
            "passAt1": 70.0,
            "avgEp": 151.7,
            "avgTurns": 151.7,
            "maxTurns": 351,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 35,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 3,
            "modelId": 12,
            "modelName": "Qwen-3.7-Max-Thinking",
            "organization": "Alibaba",
            "passAt1": 70.0,
            "avgEp": 105.02,
            "avgTurns": 105.02,
            "maxTurns": 331,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 35,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 7,
            "modelId": 8,
            "modelName": "Kimi-K2.7-Code-Thinking",
            "organization": "Moonshot AI",
            "passAt1": 68.0,
            "avgEp": 142.2,
            "avgTurns": 142.2,
            "maxTurns": 337,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 34,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 8,
            "modelId": 6,
            "modelName": "DeepSeek-V4-Flash-High",
            "organization": "DeepSeek",
            "passAt1": 66.0,
            "avgEp": 121.72,
            "avgTurns": 121.72,
            "maxTurns": 463,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 33,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 8,
            "modelId": 4,
            "modelName": "MiMo-V2.5-Pro-High",
            "organization": "Xiaomi",
            "passAt1": 66.0,
            "avgEp": 159.34,
            "avgTurns": 159.34,
            "maxTurns": 319,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 33,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 10,
            "modelId": 14,
            "modelName": "GLM-5.1-Thinking",
            "organization": "Zhipu AI",
            "passAt1": 64.0,
            "avgEp": 152.56,
            "avgTurns": 152.56,
            "maxTurns": 481,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 32,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 10,
            "modelId": 17,
            "modelName": "Hunyuan-HY3-Preview-High",
            "organization": "Tencent",
            "passAt1": 64.0,
            "avgEp": 159.2,
            "avgTurns": 159.2,
            "maxTurns": 539,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 32,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 10,
            "modelId": 7,
            "modelName": "Kimi-K2.6-Thinking",
            "organization": "Moonshot AI",
            "passAt1": 64.0,
            "avgEp": 124.9,
            "avgTurns": 124.9,
            "maxTurns": 304,
            "turnsCompleted": 49,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 32,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 13,
            "modelId": 5,
            "modelName": "DeepSeek-V4-Pro-High",
            "organization": "DeepSeek",
            "passAt1": 62.0,
            "avgEp": 106.4,
            "avgTurns": 106.4,
            "maxTurns": 333,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 31,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 14,
            "modelId": 15,
            "modelName": "Claude-Opus-4.7-High",
            "organization": "Anthropic",
            "passAt1": 56.0,
            "avgEp": 153.82,
            "avgTurns": 153.82,
            "maxTurns": 500,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 28,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 14,
            "modelId": 11,
            "modelName": "Gemini-3.1-Pro-High",
            "organization": "Google",
            "passAt1": 56.0,
            "avgEp": 64.48,
            "avgTurns": 64.48,
            "maxTurns": 125,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 28,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 14,
            "modelId": 2,
            "modelName": "MiniMax-M3-Adaptive",
            "organization": "MiniMax",
            "passAt1": 56.0,
            "avgEp": 190.13,
            "avgTurns": 190.13,
            "maxTurns": 549,
            "turnsCompleted": 45,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 28,
            "timeoutCount": 1,
            "timeoutTurnsMin": 131,
            "timeoutTurnsMedian": 131,
            "timeoutTurnsAvg": 131.0,
            "timeoutTurnsMax": 131,
            "timeoutTurnsCompleted": 1,
            "timeoutLimitSecondsMin": 1800.0,
            "timeoutLimitSecondsMedian": 1800.0,
            "timeoutLimitSecondsAvg": 1800.0,
            "timeoutLimitSecondsMax": 1800.0,
            "unfinishedCount": 1,
            "unfinishedReasons": {
              "timeout:CancelledError": 1
            }
          },
          {
            "rank": 17,
            "modelId": 3,
            "modelName": "Step-3.7-Flash-High",
            "organization": "StepFun",
            "passAt1": 44.0,
            "avgEp": 175.43,
            "avgTurns": 175.43,
            "maxTurns": 471,
            "turnsCompleted": 47,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 22,
            "timeoutCount": 2,
            "timeoutTurnsMin": 97,
            "timeoutTurnsMedian": 97.0,
            "timeoutTurnsAvg": 97.0,
            "timeoutTurnsMax": 97,
            "timeoutTurnsCompleted": 2,
            "timeoutLimitSecondsMin": 1800.0,
            "timeoutLimitSecondsMedian": 1800.0,
            "timeoutLimitSecondsAvg": 1800.0,
            "timeoutLimitSecondsMax": 1800.0,
            "unfinishedCount": 2,
            "unfinishedReasons": {
              "timeout:AgentTimeoutError": 2
            }
          },
          {
            "rank": 18,
            "modelId": 1,
            "modelName": "MiniMax-M2.7-Reasoning",
            "organization": "MiniMax",
            "passAt1": 42.0,
            "avgEp": 132.6,
            "avgTurns": 132.6,
            "maxTurns": 321,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 21,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 19,
            "modelId": 9,
            "modelName": "Doubao-Seed-2.0-Pro-High",
            "organization": "ByteDance",
            "passAt1": 40.0,
            "avgEp": 34.44,
            "avgTurns": 34.44,
            "maxTurns": 89,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 20,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          }
        ],
        "2026-03": [
          {
            "rank": 1,
            "modelId": 1,
            "modelName": "Claude-Opus-4.6",
            "organization": "Anthropic",
            "passAt1": 77.94,
            "avgEp": 34.92,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 2,
            "modelId": 12,
            "modelName": "GLM-5.1",
            "organization": "Zhipu AI",
            "passAt1": 70.59,
            "avgEp": 49.3,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 3,
            "modelId": 2,
            "modelName": "GPT-5.4-High",
            "organization": "OpenAI",
            "passAt1": 69.1,
            "avgEp": 44.7,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 4,
            "modelId": 10,
            "modelName": "Qwen-3.6-Plus",
            "organization": "Alibaba",
            "passAt1": 60.29,
            "avgEp": 43.37,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 5,
            "modelId": 5,
            "modelName": "GLM-5",
            "organization": "Zhipu AI",
            "passAt1": 57.35,
            "avgEp": 48.75,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 6,
            "modelId": 3,
            "modelName": "Gemini-3.1-Pro",
            "organization": "Google",
            "passAt1": 55.88,
            "avgEp": 12.72,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 7,
            "modelId": 4,
            "modelName": "Kimi-K2.5",
            "organization": "Moonshot AI",
            "passAt1": 55.88,
            "avgEp": 49.05,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 8,
            "modelId": 6,
            "modelName": "Qwen-3.5-397B-A17B",
            "organization": "Alibaba",
            "passAt1": 48.53,
            "avgEp": 51.42,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 9,
            "modelId": 11,
            "modelName": "MiMo-V2-Pro",
            "organization": "Xiaomi",
            "passAt1": 47.06,
            "avgEp": 46.9,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 10,
            "modelId": 8,
            "modelName": "MiniMax-2.7",
            "organization": "MiniMax",
            "passAt1": 47.06,
            "avgEp": 60.69,
            "agent": "Terminus-2",
            "date": "2026-03"
          }
        ],
        "2026-04": [
          {
            "rank": 1,
            "modelId": 1,
            "modelName": "Claude-Opus-4.7-High",
            "organization": "Anthropic",
            "passAt1": 69.77,
            "avgEp": 39.2,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 43,
            "passed": 30
          },
          {
            "rank": 2,
            "modelId": 12,
            "modelName": "GLM-5.1-Thinking",
            "organization": "Zhipu AI",
            "passAt1": 69.77,
            "avgEp": 72.21,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 43,
            "passed": 30
          },
          {
            "rank": 3,
            "modelId": 2,
            "modelName": "GPT-5.5-High",
            "organization": "OpenAI",
            "passAt1": 69.77,
            "avgEp": 48.02,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 43,
            "passed": 30
          },
          {
            "rank": 4,
            "modelId": 15,
            "modelName": "DeepSeek-V4-Pro-High",
            "organization": "DeepSeek",
            "passAt1": 67.44,
            "avgEp": 52.17,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 43,
            "passed": 29
          },
          {
            "rank": 5,
            "modelId": 4,
            "modelName": "Kimi-K2.6-Thinking",
            "organization": "Moonshot AI",
            "passAt1": 67.44,
            "avgEp": 61.09,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 33,
            "passed": 29
          },
          {
            "rank": 5,
            "modelId": 17,
            "modelName": "Qwen-3.7-Max-Thinking",
            "organization": "Alibaba",
            "passAt1": 67.44,
            "avgEp": 41.23,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 43,
            "passed": 29
          },
          {
            "rank": 6,
            "modelId": 3,
            "modelName": "Gemini-3.1-Pro-High",
            "organization": "Google",
            "passAt1": 62.79,
            "avgEp": 31.4,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 43,
            "passed": 27
          },
          {
            "rank": 7,
            "modelId": 10,
            "modelName": "Qwen-3.6-Plus-Thinking",
            "organization": "Alibaba",
            "passAt1": 60.47,
            "avgEp": 71.91,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 43,
            "passed": 26
          },
          {
            "rank": 8,
            "modelId": 11,
            "modelName": "MiMo-V2.5-Pro-High",
            "organization": "Xiaomi",
            "passAt1": 58.14,
            "avgEp": 43.36,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 43,
            "passed": 25
          },
          {
            "rank": 9,
            "modelId": 16,
            "modelName": "Gemini-3.5-Flash-High",
            "organization": "Google",
            "passAt1": 55.81,
            "avgEp": 68.89,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 43,
            "passed": 24
          }
        ]
      }
    },
    "Non-Bug Fix": {
      "batches": [
        "2026-03",
        "2026-04",
        "2026-05", "2026-06"],
      "snapshots": {
        "2026-06": [
          {
                    "rank": 1,
                    "modelId": 10,
                    "modelName": "GPT-5.5-High",
                    "organization": "OpenAI",
                    "passAt1": 72.0,
                    "avgEp": 120.7,
                    "avgTurns": 120.7,
                    "maxTurns": 231,
                    "turnsCompleted": 50,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 36,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 2,
                    "modelId": 12,
                    "modelName": "Claude-Opus-4.8-XHigh",
                    "organization": "Anthropic",
                    "passAt1": 68.0,
                    "avgEp": 114.14,
                    "avgTurns": 114.14,
                    "maxTurns": 270,
                    "turnsCompleted": 49,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 34,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 1,
                    "unfinishedReasons": {
                              "zero_filled:missing_result_json": 1
                    }
          },
          {
                    "rank": 3,
                    "modelId": 11,
                    "modelName": "GLM-5.2-Max",
                    "organization": "Zhipu AI",
                    "passAt1": 62.0,
                    "avgEp": 312.92,
                    "avgTurns": 312.92,
                    "maxTurns": 907,
                    "turnsCompleted": 49,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 31,
                    "timeoutCount": 1,
                    "timeoutTurnsMin": 215,
                    "timeoutTurnsMedian": 215,
                    "timeoutTurnsAvg": 215.0,
                    "timeoutTurnsMax": 215,
                    "timeoutTurnsCompleted": 1,
                    "timeoutLimitSecondsMin": 900.0,
                    "timeoutLimitSecondsMedian": 900.0,
                    "timeoutLimitSecondsAvg": 900.0,
                    "timeoutLimitSecondsMax": 900.0,
                    "unfinishedCount": 1,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 1
                    }
          },
          {
                    "rank": 4,
                    "modelId": 1,
                    "modelName": "MiniMax-M3-Adaptive",
                    "organization": "MiniMax",
                    "passAt1": 60.0,
                    "avgEp": 515.2,
                    "avgTurns": 515.2,
                    "maxTurns": 968,
                    "turnsCompleted": 50,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 30,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 5,
                    "modelId": 6,
                    "modelName": "Doubao-Seed-2.1-Pro-High",
                    "organization": "ByteDance",
                    "passAt1": 56.0,
                    "avgEp": 244.68,
                    "avgTurns": 244.68,
                    "maxTurns": 621,
                    "turnsCompleted": 44,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 28,
                    "timeoutCount": 2,
                    "timeoutTurnsMin": 262,
                    "timeoutTurnsMedian": 263.0,
                    "timeoutTurnsAvg": 263.0,
                    "timeoutTurnsMax": 264,
                    "timeoutTurnsCompleted": 2,
                    "timeoutLimitSecondsMin": 3600.0,
                    "timeoutLimitSecondsMedian": 3600.0,
                    "timeoutLimitSecondsAvg": 3600.0,
                    "timeoutLimitSecondsMax": 3600.0,
                    "unfinishedCount": 6,
                    "unfinishedReasons": {
                              "timeout:AgentTimeoutError": 2,
                              "zero_filled:missing_result_json": 4
                    }
          },
          {
                    "rank": 6,
                    "modelId": 4,
                    "modelName": "DeepSeek-V4-Pro-High",
                    "organization": "DeepSeek",
                    "passAt1": 50.0,
                    "avgEp": 143.26,
                    "avgTurns": 143.26,
                    "maxTurns": 283,
                    "turnsCompleted": 50,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 25,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 6,
                    "modelId": 8,
                    "modelName": "Qwen-3.7-Max-Thinking",
                    "organization": "Alibaba",
                    "passAt1": 50.0,
                    "avgEp": 108.82,
                    "avgTurns": 108.82,
                    "maxTurns": 306,
                    "turnsCompleted": 50,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 25,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 8,
                    "modelId": 5,
                    "modelName": "DeepSeek-V4-Flash-High",
                    "organization": "DeepSeek",
                    "passAt1": 44.0,
                    "avgEp": 174.4,
                    "avgTurns": 174.4,
                    "maxTurns": 445,
                    "turnsCompleted": 48,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 22,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 2,
                    "unfinishedReasons": {
                              "zero_filled:missing_result_json": 2
                    }
          },
          {
                    "rank": 9,
                    "modelId": 2,
                    "modelName": "Hunyuan-HY3-Preview-High",
                    "organization": "Tencent",
                    "passAt1": 36.0,
                    "avgEp": 249.88,
                    "avgTurns": 249.88,
                    "maxTurns": 505,
                    "turnsCompleted": 50,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 18,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 9,
                    "modelId": 9,
                    "modelName": "Qwen-3.7-Plus-Thinking",
                    "organization": "Alibaba",
                    "passAt1": 36.0,
                    "avgEp": 131.88,
                    "avgTurns": 131.88,
                    "maxTurns": 444,
                    "turnsCompleted": 50,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 18,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 11,
                    "modelId": 7,
                    "modelName": "Gemini-3.5-Flash-High",
                    "organization": "Google",
                    "passAt1": 30.0,
                    "avgEp": 143.82,
                    "avgTurns": 143.82,
                    "maxTurns": 569,
                    "turnsCompleted": 50,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 15,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          },
          {
                    "rank": 12,
                    "modelId": 3,
                    "modelName": "Step-3.7-Flash-High",
                    "organization": "StepFun",
                    "passAt1": 20.0,
                    "avgEp": 203.57,
                    "avgTurns": 203.57,
                    "maxTurns": 565,
                    "turnsCompleted": 37,
                    "agent": "OpenHands",
                    "date": "2026-06",
                    "completed": 50,
                    "passed": 10,
                    "timeoutCount": 0,
                    "timeoutTurnsMin": null,
                    "timeoutTurnsMedian": null,
                    "timeoutTurnsAvg": null,
                    "timeoutTurnsMax": null,
                    "timeoutTurnsCompleted": 0,
                    "timeoutLimitSecondsMin": null,
                    "timeoutLimitSecondsMedian": null,
                    "timeoutLimitSecondsAvg": null,
                    "timeoutLimitSecondsMax": null,
                    "unfinishedCount": 0,
                    "unfinishedReasons": {}
          }
],
        "2026-05": [
          {
            "rank": 1,
            "modelId": 16,
            "modelName": "Claude-Opus-4.8-XHigh",
            "organization": "Anthropic",
            "passAt1": 90.0,
            "avgEp": 57.3,
            "avgTurns": 57.3,
            "maxTurns": 173,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 45,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 2,
            "modelId": 10,
            "modelName": "Gemini-3.5-Flash-High",
            "organization": "Google",
            "passAt1": 88.0,
            "avgEp": 120.46,
            "avgTurns": 120.46,
            "maxTurns": 291,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 44,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 3,
            "modelId": 13,
            "modelName": "GPT-5.5-High",
            "organization": "OpenAI",
            "passAt1": 86.0,
            "avgEp": 77.64,
            "avgTurns": 77.64,
            "maxTurns": 203,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 43,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "modelId": 19,
            "modelName": "Doubao-Seed-2.1-Pro-High",
            "organization": "ByteDance",
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "passAt1": 80.0,
            "avgEp": 133.04,
            "avgTurns": 133.04,
            "maxTurns": 420,
            "turnsCompleted": 49,
            "passed": 40,
            "unfinishedCount": 1,
            "unfinishedReasons": {
              "NonZeroAgentExitCodeError": 1
            },
            "rank": 4
          },
          {
            "rank": 4,
            "modelId": 18,
            "modelName": "GLM-5.2-Max",
            "organization": "Zhipu AI",
            "passAt1": 80.0,
            "avgEp": 137.68,
            "avgTurns": 137.68,
            "maxTurns": 349,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 40,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 6,
            "modelId": 15,
            "modelName": "Claude-Opus-4.7-High",
            "organization": "Anthropic",
            "passAt1": 78.0,
            "avgEp": 72.34,
            "avgTurns": 72.34,
            "maxTurns": 500,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 39,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 6,
            "modelId": 14,
            "modelName": "GLM-5.1-Thinking",
            "organization": "Zhipu AI",
            "passAt1": 78.0,
            "avgEp": 127.0,
            "avgTurns": 127.0,
            "maxTurns": 288,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 39,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 6,
            "modelId": 17,
            "modelName": "Hunyuan-HY3-Preview-High",
            "organization": "Tencent",
            "passAt1": 78.0,
            "avgEp": 126.7,
            "avgTurns": 126.7,
            "maxTurns": 295,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 39,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 6,
            "modelId": 8,
            "modelName": "Kimi-K2.7-Code-Thinking",
            "organization": "Moonshot AI",
            "passAt1": 78.0,
            "avgEp": 118.84,
            "avgTurns": 118.84,
            "maxTurns": 277,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 39,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 6,
            "modelId": 2,
            "modelName": "MiniMax-M3-Adaptive",
            "organization": "MiniMax",
            "passAt1": 78.0,
            "avgEp": 171.19,
            "avgTurns": 171.19,
            "maxTurns": 393,
            "turnsCompleted": 48,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 39,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 11,
            "modelId": 7,
            "modelName": "Kimi-K2.6-Thinking",
            "organization": "Moonshot AI",
            "passAt1": 74.0,
            "avgEp": 105.14,
            "avgTurns": 105.14,
            "maxTurns": 245,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 37,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 11,
            "modelId": 12,
            "modelName": "Qwen-3.7-Max-Thinking",
            "organization": "Alibaba",
            "passAt1": 74.0,
            "avgEp": 77.52,
            "avgTurns": 77.52,
            "maxTurns": 200,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 37,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 13,
            "modelId": 6,
            "modelName": "DeepSeek-V4-Flash-High",
            "organization": "DeepSeek",
            "passAt1": 72.0,
            "avgEp": 110.2,
            "avgTurns": 110.2,
            "maxTurns": 333,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 36,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 13,
            "modelId": 5,
            "modelName": "DeepSeek-V4-Pro-High",
            "organization": "DeepSeek",
            "passAt1": 72.0,
            "avgEp": 79.6,
            "avgTurns": 79.6,
            "maxTurns": 182,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 36,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 15,
            "modelId": 11,
            "modelName": "Gemini-3.1-Pro-High",
            "organization": "Google",
            "passAt1": 68.0,
            "avgEp": 61.36,
            "avgTurns": 61.36,
            "maxTurns": 183,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 34,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 15,
            "modelId": 4,
            "modelName": "MiMo-V2.5-Pro-High",
            "organization": "Xiaomi",
            "passAt1": 68.0,
            "avgEp": 152.1,
            "avgTurns": 152.1,
            "maxTurns": 341,
            "turnsCompleted": 49,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 34,
            "timeoutCount": 1,
            "timeoutTurnsMin": 127,
            "timeoutTurnsMedian": 127,
            "timeoutTurnsAvg": 127.0,
            "timeoutTurnsMax": 127,
            "timeoutTurnsCompleted": 1,
            "timeoutLimitSecondsMin": 1800.0,
            "timeoutLimitSecondsMedian": 1800.0,
            "timeoutLimitSecondsAvg": 1800.0,
            "timeoutLimitSecondsMax": 1800.0,
            "unfinishedCount": 1,
            "unfinishedReasons": {
              "timeout:CancelledError": 1
            }
          },
          {
            "rank": 17,
            "modelId": 9,
            "modelName": "Doubao-Seed-2.0-Pro-High",
            "organization": "ByteDance",
            "passAt1": 64.0,
            "avgEp": 34.16,
            "avgTurns": 34.16,
            "maxTurns": 63,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 32,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          },
          {
            "rank": 18,
            "modelId": 3,
            "modelName": "Step-3.7-Flash-High",
            "organization": "StepFun",
            "passAt1": 62.0,
            "avgEp": 134.25,
            "avgTurns": 134.25,
            "maxTurns": 393,
            "turnsCompleted": 48,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 31,
            "timeoutCount": 2,
            "timeoutTurnsMin": 67,
            "timeoutTurnsMedian": 75.0,
            "timeoutTurnsAvg": 75.0,
            "timeoutTurnsMax": 83,
            "timeoutTurnsCompleted": 2,
            "timeoutLimitSecondsMin": 1800.0,
            "timeoutLimitSecondsMedian": 1800.0,
            "timeoutLimitSecondsAvg": 1800.0,
            "timeoutLimitSecondsMax": 1800.0,
            "unfinishedCount": 2,
            "unfinishedReasons": {
              "timeout:AgentTimeoutError": 2
            }
          },
          {
            "rank": 19,
            "modelId": 1,
            "modelName": "MiniMax-M2.7-Reasoning",
            "organization": "MiniMax",
            "passAt1": 58.0,
            "avgEp": 105.6,
            "avgTurns": 105.6,
            "maxTurns": 335,
            "turnsCompleted": 50,
            "agent": "OpenHands",
            "date": "2026-05",
            "completed": 50,
            "passed": 29,
            "timeoutCount": 0,
            "timeoutTurnsMin": null,
            "timeoutTurnsMedian": null,
            "timeoutTurnsAvg": null,
            "timeoutTurnsMax": null,
            "timeoutTurnsCompleted": 0,
            "timeoutLimitSecondsMin": null,
            "timeoutLimitSecondsMedian": null,
            "timeoutLimitSecondsAvg": null,
            "timeoutLimitSecondsMax": null,
            "unfinishedCount": 0,
            "unfinishedReasons": {}
          }
        ],
        "2026-03": [
          {
            "rank": 1,
            "modelId": 1,
            "modelName": "Claude-Opus-4.6",
            "organization": "Anthropic",
            "passAt1": 70.45,
            "avgEp": 39.45,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 2,
            "modelId": 12,
            "modelName": "GLM-5.1",
            "organization": "Zhipu AI",
            "passAt1": 61.36,
            "avgEp": 63.7,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 3,
            "modelId": 2,
            "modelName": "GPT-5.4-High",
            "organization": "OpenAI",
            "passAt1": 56.8,
            "avgEp": 49,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 4,
            "modelId": 10,
            "modelName": "Qwen-3.6-Plus",
            "organization": "Alibaba",
            "passAt1": 52.27,
            "avgEp": 47.02,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 5,
            "modelId": 3,
            "modelName": "Gemini-3.1-Pro",
            "organization": "Google",
            "passAt1": 52.27,
            "avgEp": 13.41,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 6,
            "modelId": 11,
            "modelName": "MiMo-V2-Pro",
            "organization": "Xiaomi",
            "passAt1": 45.45,
            "avgEp": 48.4,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 7,
            "modelId": 8,
            "modelName": "MiniMax-2.7",
            "organization": "MiniMax",
            "passAt1": 45.45,
            "avgEp": 58.48,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 8,
            "modelId": 4,
            "modelName": "Kimi-K2.5",
            "organization": "Moonshot AI",
            "passAt1": 40.91,
            "avgEp": 47.9,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 9,
            "modelId": 5,
            "modelName": "GLM-5",
            "organization": "Zhipu AI",
            "passAt1": 38.64,
            "avgEp": 50.41,
            "agent": "Terminus-2",
            "date": "2026-03"
          },
          {
            "rank": 10,
            "modelId": 6,
            "modelName": "Qwen-3.5-397B-A17B",
            "organization": "Alibaba",
            "passAt1": 36.36,
            "avgEp": 59.15,
            "agent": "Terminus-2",
            "date": "2026-03"
          }
        ],
        "2026-04": [
          {
            "rank": 1,
            "modelId": 2,
            "modelName": "GPT-5.5-High",
            "organization": "OpenAI",
            "passAt1": 59.57,
            "avgEp": 47.83,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 47,
            "passed": 28
          },
          {
            "rank": 2,
            "modelId": 15,
            "modelName": "DeepSeek-V4-Pro-High",
            "organization": "DeepSeek",
            "passAt1": 57.45,
            "avgEp": 58.15,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 47,
            "passed": 27
          },
          {
            "rank": 3,
            "modelId": 12,
            "modelName": "GLM-5.1-Thinking",
            "organization": "Zhipu AI",
            "passAt1": 57.45,
            "avgEp": 70.02,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 47,
            "passed": 27
          },
          {
            "rank": 4,
            "modelId": 1,
            "modelName": "Claude-Opus-4.7-High",
            "organization": "Anthropic",
            "passAt1": 55.32,
            "avgEp": 41.57,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 47,
            "passed": 26
          },
          {
            "rank": 5,
            "modelId": 17,
            "modelName": "Qwen-3.7-Max-Thinking",
            "organization": "Alibaba",
            "passAt1": 55.32,
            "avgEp": 38.51,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 47,
            "passed": 26
          },
          {
            "rank": 6,
            "modelId": 10,
            "modelName": "Qwen-3.6-Plus-Thinking",
            "organization": "Alibaba",
            "passAt1": 55.32,
            "avgEp": 66.36,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 47,
            "passed": 26
          },
          {
            "rank": 6,
            "modelId": 16,
            "modelName": "Gemini-3.5-Flash-High",
            "organization": "Google",
            "passAt1": 55.32,
            "avgEp": 66.07,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 47,
            "passed": 26
          },
          {
            "rank": 7,
            "modelId": 4,
            "modelName": "Kimi-K2.6-Thinking",
            "organization": "Moonshot AI",
            "passAt1": 51.06,
            "avgEp": 60.58,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 32,
            "passed": 24
          },
          {
            "rank": 8,
            "modelId": 11,
            "modelName": "MiMo-V2.5-Pro-High",
            "organization": "Xiaomi",
            "passAt1": 50,
            "avgEp": 43.63,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 46,
            "passed": 23
          },
          {
            "rank": 9,
            "modelId": 3,
            "modelName": "Gemini-3.1-Pro-High",
            "organization": "Google",
            "passAt1": 48.94,
            "avgEp": 32.96,
            "agent": "OpenHands",
            "date": "2026-04",
            "completed": 47,
            "passed": 23
          }
        ]
      }
    }
  }
};
/* ======================================================================== */

(function() {
  var ROW_HEIGHT = 60;
  var PLAY_INTERVAL = 1800;

  var activeCat = SWE_DATA.categories[0];
  var batches, timelineLabels, batchIdx;
  var playing = false;
  var playTimer = null;

  function syncBatches() {
    var cd = SWE_DATA.data[activeCat];
    batches = cd.batches;
    timelineLabels = batches.concat(['Coming Soon']);
  }

  syncBatches();
  batchIdx = batches.length - 1;

  function getSnapshot() {
    var cd = SWE_DATA.data[activeCat];
    if (batchIdx < batches.length) return cd.snapshots[batches[batchIdx]];
    return null;
  }

  function getActiveBatch() {
    if (batchIdx < batches.length) return batches[batchIdx];
    return batches[batches.length - 1];
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function setHtml(id, value) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = value;
  }

  function renderMeta() {
    var batch = getActiveBatch();
    var meta = SWE_DATA.meta[batch];
    if (!meta) return;

    setText('swe-stat-total', meta.totalTasks);
    setText('swe-stat-bugfix', meta.bugFix);
    setText('swe-stat-nonbugfix', meta.nonBugFix);
    setText('swe-stat-models', meta.models);
    setText('swe-stat-metric', meta.metric);
    setText('swe-eval-note-text', meta.note);
    setText('swe-task-card-sub', meta.sourceNote || (meta.totalTasks + ' real-world tasks sourced from closed GitHub PRs'));
    setText('swe-card-bugfix', meta.bugFix);
    setText('swe-card-nonbugfix', meta.nonBugFix);
    setText('swe-findings-title', meta.findingsTitle);
    for (var clearIdx = 1; clearIdx <= 5; clearIdx++) {
      setHtml('swe-finding-' + clearIdx, '');
      var clearEl = document.getElementById('swe-finding-' + clearIdx);
      if (clearEl && clearEl.parentElement) clearEl.parentElement.style.display = 'none';
    }
    if (meta.findings) {
      meta.findings.forEach(function(finding, i) {
        setHtml('swe-finding-' + (i + 1), finding);
        var findingEl = document.getElementById('swe-finding-' + (i + 1));
        if (findingEl && findingEl.parentElement) findingEl.parentElement.style.display = '';
      });
    }
  }

  function renderCatTabs() {
    var el = document.getElementById('swe-cat-tabs');
    el.innerHTML = '';
    SWE_DATA.categories.forEach(function(cat) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'swe-cat-tab' + (cat === activeCat ? ' is-active' : '');
      btn.textContent = cat;
      btn.onclick = function() {
        var currentBatch = batchIdx < batches.length ? batches[batchIdx] : null;
        var wasComingSoon = batchIdx >= batches.length;
        activeCat = cat;
        syncBatches();
        if (wasComingSoon) {
          batchIdx = batches.length;
        } else {
          var nextIdx = batches.indexOf(currentBatch);
          batchIdx = nextIdx >= 0 ? nextIdx : batches.length - 1;
        }
        stopPlay();
        renderCatTabs();
        renderTimeline();
        renderMeta();
        renderTable();
      };
      el.appendChild(btn);
    });
  }

  function renderTimeline() {
    var tl = document.getElementById('swe-timeline');
    tl.innerHTML = '';
    timelineLabels.forEach(function(label, i) {
      var isCS = i >= batches.length;
      var cls = 'swe-tl-dot';
      if (i === batchIdx) cls += ' is-active';
      if (i < batchIdx) cls += ' is-past';
      if (isCS) cls += ' is-coming-soon';
      var btn = document.createElement('button');
      btn.className = cls;
      btn.setAttribute('aria-label', label);
      btn.innerHTML = '<span class="swe-tl-dot-inner"></span><span class="swe-tl-label">' + label + '</span>';
      btn.onclick = function() {
        stopPlay();
        batchIdx = i;
        renderTimeline();
        renderMeta();
        renderTable();
      };
      tl.appendChild(btn);
    });
    var track = document.createElement('div');
    track.className = 'swe-tl-track';
    var progress = document.createElement('div');
    progress.className = 'swe-tl-progress';
    var pct = timelineLabels.length > 1 ? (Math.min(batchIdx, batches.length - 1) / (timelineLabels.length - 1)) * 100 : 0;
    progress.style.width = pct + '%';
    track.appendChild(progress);
    tl.appendChild(track);
  }

  function updatePlayIcon() {
    var svg = document.getElementById('swe-play-icon');
    if (playing) {
      svg.innerHTML = '<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>';
    } else {
      svg.innerHTML = '<path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"/>';
    }
  }

  function startPlay() {
    if (batchIdx >= batches.length - 1) batchIdx = 0;
    playing = true;
    updatePlayIcon();
    renderTimeline();
    renderMeta();
    renderTable();
    playTimer = setInterval(function() {
      if (batchIdx >= batches.length - 1) { stopPlay(); return; }
      batchIdx++;
      renderTimeline();
      renderMeta();
      renderTable();
    }, PLAY_INTERVAL);
  }

  function stopPlay() {
    playing = false;
    updatePlayIcon();
    if (playTimer) { clearInterval(playTimer); playTimer = null; }
  }

  document.getElementById('swe-play-btn').onclick = function() {
    if (playing) stopPlay(); else startPlay();
  };

  function renderTable() {
    var container = document.getElementById('swe-table-container');
    var isComingSoon = batchIdx >= batches.length;

    if (isComingSoon) {
      container.innerHTML = '<div class="swe-coming-soon"><p>Next evaluation coming soon...</p></div>';
      return;
    }

    var items = getSnapshot();
    if (!items || items.length === 0) {
      container.innerHTML = '<div class="swe-coming-soon"><p>No ranking data</p></div>';
      return;
    }

    var html = '';
    html += '<div class="swe-table-header">';
    html += '<span class="swe-th-rank">Rank</span>';
    html += '<span class="swe-th-model">Model</span>';
    html += '<span class="swe-th-pass1">Pass@1</span>';
    html += '<span class="swe-th-avgep">Avg Turns</span>';
    html += '<span class="swe-th-maxturns">Max Turns</span>';
    html += '<span class="swe-th-timeouts">Timeouts</span>';
    html += '<span class="swe-th-timeoutturns">Timeout Turns</span>';
    html += '<span class="swe-th-agent">Agent</span>';
    html += '<span class="swe-th-date">Date</span>';
    html += '</div>';

    var bodyH = items.length * ROW_HEIGHT;
    html += '<div class="swe-table-body" style="height:' + bodyH + 'px">';

    var lastScore = null;
    var displayRank = 0;

    items.forEach(function(d, idx) {
      if (lastScore === null || Math.abs(d.passAt1 - lastScore) > 0.005) {
        displayRank = idx + 1;
        lastScore = d.passAt1;
      }
      var rankCls = displayRank <= 3 ? ' swe-rank-' + displayRank : '';
      var icon = sweGetIcon(d.modelName);

      html += '<div class="swe-row' + rankCls + '" style="transform:translateY(' + (idx * ROW_HEIGHT) + 'px)">';
      html += '<span class="swe-col-rank"><span class="swe-rank-badge swe-fade-in">' + displayRank + '</span></span>';
      html += '<span class="swe-col-model">';
      html += '<img class="swe-model-avatar" src="' + icon + '" alt="' + d.modelName + '"/>';
      html += '<span class="swe-model-info">';
      html += '<span class="swe-model-name">' + d.modelName + '</span>';
      if (d.organization) html += '<span class="swe-model-org">' + d.organization + '</span>';
      html += '</span></span>';
      html += '<span class="swe-col-pass1"><span class="swe-score-value swe-fade-in">' + d.passAt1.toFixed(2) + '%</span></span>';
      var avgTurnsValue = typeof d.avgTurns === 'number' ? d.avgTurns : d.avgEp;
      var avgTurnsText = typeof avgTurnsValue === 'number' ? avgTurnsValue.toFixed(1) : 'N/A';
      var turnsTitle = d.turnsCompleted ? ('Turns counted: ' + d.turnsCompleted + '/' + (d.completed || '')) : '';
      html += '<span class="swe-col-avgep swe-fade-in" title="' + turnsTitle + '">' + avgTurnsText + '</span>';
      var maxTurnsText = typeof d.maxTurns === 'number' ? d.maxTurns : 'N/A';
      html += '<span class="swe-col-maxturns swe-fade-in">' + maxTurnsText + '</span>';
      var timeoutCount = typeof d.timeoutCount === 'number' ? d.timeoutCount : 0;
      var unfinishedCount = typeof d.unfinishedCount === 'number' ? d.unfinishedCount : timeoutCount;
      var reasonParts = [];
      if (d.unfinishedReasons) {
        Object.keys(d.unfinishedReasons).forEach(function(reason) {
          reasonParts.push(reason + ': ' + d.unfinishedReasons[reason]);
        });
      }
      if (typeof d.timeoutLimitSecondsMin === 'number') {
        if (d.timeoutLimitSecondsMin === d.timeoutLimitSecondsMax) {
          reasonParts.push('timeout limit: ' + d.timeoutLimitSecondsMin + 's');
        } else {
          reasonParts.push('timeout limit min/median/avg/max: ' + d.timeoutLimitSecondsMin + '/' + d.timeoutLimitSecondsMedian + '/' + d.timeoutLimitSecondsAvg + '/' + d.timeoutLimitSecondsMax + 's');
        }
      }
      var timeoutTitle = reasonParts.length ? ('Unfinished: ' + reasonParts.join(', ')) : '';
      html += '<span class="swe-col-timeouts swe-fade-in" title="' + timeoutTitle + '">' + timeoutCount + (unfinishedCount > timeoutCount ? '/' + unfinishedCount : '') + '</span>';
      var timeoutTurnsText = 'N/A';
      if (typeof d.timeoutTurnsMin === 'number' && typeof d.timeoutTurnsMedian === 'number' && typeof d.timeoutTurnsAvg === 'number' && typeof d.timeoutTurnsMax === 'number') {
        timeoutTurnsText = d.timeoutTurnsMin + '/' + d.timeoutTurnsMedian + '/' + d.timeoutTurnsAvg.toFixed(1) + '/' + d.timeoutTurnsMax;
      }
      var timeoutTurnsTitle = d.timeoutTurnsCompleted ? ('Timeout turns counted: ' + d.timeoutTurnsCompleted + '/' + timeoutCount + ' (min/median/avg/max)') : 'No timeout turn evidence available';
      html += '<span class="swe-col-timeoutturns swe-fade-in" title="' + timeoutTurnsTitle + '">' + timeoutTurnsText + '</span>';
      html += '<span class="swe-col-agent swe-fade-in"><span class="swe-agent-tag">' + d.agent + '</span></span>';
      html += '<span class="swe-col-date swe-fade-in">' + d.date + '</span>';
      html += '</div>';
    });

    html += '</div>';
    container.innerHTML = html;
  }

  renderCatTabs();
  renderTimeline();
  renderMeta();
  renderTable();
})();
</script>
