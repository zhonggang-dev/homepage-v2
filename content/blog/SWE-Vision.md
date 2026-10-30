Title: SWE-Vision: A Minimal Agent for Advancing Visual Intelligence
Date: 2026-03-09
Summary: While coding capabilities have surpassed human-level performance in many benchmarks, visual reasoning continues to lag behind. In this work, we introduce SWE-Vision, a minimal agentic workflow that leverages a simple coding environment to enhance visual understanding, also a more achievable test time scaling direction.
HeaderImage: /static/images/SWE-Vision/logo_swev.png


<style>



.bv-lb-hero {
    text-align: center;
    padding: 10px 0 30px;
    margin-bottom: 30px;
}

.bv-lb-hero h1 {
    font-size: 2.2em;
    margin-bottom: 12px;
    color: var(--text, #0f172a);
}

.bv-lb-hero .subtitle {
    font-size: 1.1em;
    color: var(--muted, #6b7280);
    max-width: 700px;
    margin: 0 auto 24px;
    line-height: 1.6;
}

.bv-lb-links {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.bv-lb-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border: 1px solid var(--border, #e5e7eb);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s ease;
    text-decoration: none !important;
}

.bv-lb-link:hover {
    background: var(--pill, #f1f5f9);
    border-color: var(--accent, #111827);
    text-decoration: none !important;
}

.bv-lb-link svg {
    width: 18px;
    height: 18px;
}

.bv-joint-logo {
    text-align: center;
    margin: 12px 0;
}

.bv-joint-logo img {
    max-width: 70%;
    height: auto;
}

@media (min-width: 768px) {
    .bv-joint-logo img {
        max-width: 50%;
    }
}

@media (min-width: 1024px) {
    .bv-joint-logo img {
        max-width: 30%;
    }
}

@media (min-width: 1280px) {
    .bv-joint-logo img {
        max-width: 20%;
    }
}

.bv-toc {
    position: fixed;
    right: 5px;
    top: 120px;
    width: 200px;
    max-width: 200px;
    min-width: 160px;
    max-height: calc(100vh - 160px);
    overflow-y: auto;
    padding: 16px;
    background: var(--bg, #ffffff);
    border: 1px solid var(--border, #e5e7eb);
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    z-index: 100;
    font-size: 10px;
    transition: all 0.3s ease;
}

.bv-toc::-webkit-scrollbar {
    width: 4px;
}

.bv-toc::-webkit-scrollbar-track {
    background: transparent;
}

.bv-toc::-webkit-scrollbar-thumb {
    background: var(--border, #e5e7eb);
    border-radius: 2px;
}

.bv-toc-title {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--muted, #6b7280);
    margin-bottom: 12px;
    font-weight: 600;
}

.bv-toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.bv-toc-item {
    margin-bottom: 4px;
}

.bv-toc-link {
    display: block;
    padding: 6px 10px;
    color: var(--muted, #6b7280);
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.2s ease;
    border-left: 2px solid transparent;
    line-height: 1.4;
}

.bv-toc-link:hover {
    background: var(--pill, #f1f5f9);
    color: var(--text, #0f172a);
}

.bv-toc-link.active {
    background: var(--pill, #f1f5f9);
    color: var(--text, #0f172a);
    border-left-color: var(--accent, #111827);
    font-weight: 500;
}

.bv-toc-link.bv-toc-h2 {
    padding-left: 10px;
    font-size: 13px;
}

.bv-toc-link.bv-toc-h3 {
    padding-left: 20px;
    font-size: 12px;
}

/* TOC size is dynamically adjusted by JavaScript based on available space */

.bv-toc.collapsed {
    width: 40px;
    padding: 12px;
    overflow: hidden;
}

.bv-toc.collapsed .bv-toc-title,
.bv-toc.collapsed .bv-toc-progress,
.bv-toc.collapsed .bv-toc-list {
    display: none;
}

.bv-toc-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: var(--pill, #f1f5f9);
    border: 1px solid var(--border, #e5e7eb);
    cursor: pointer;
    margin-bottom: 12px;
    transition: all 0.2s ease;
}

.bv-toc-toggle:hover {
    background: var(--border, #e5e7eb);
}

.bv-toc-toggle svg {
    width: 16px;
    height: 16px;
    color: var(--muted, #6b7280);
    transition: transform 0.3s ease;
}

.bv-toc.collapsed .bv-toc-toggle {
    margin-bottom: 0;
}

.bv-toc.collapsed .bv-toc-toggle svg {
    transform: rotate(180deg);
}

/* Progress indicator */
.bv-toc-progress {
    height: 3px;
    background: var(--border, #e5e7eb);
    border-radius: 2px;
    margin-bottom: 12px;
    overflow: hidden;
}

.bv-toc-progress-bar {
    height: 100%;
    background: var(--accent, #111827);
    width: 0%;
    transition: width 0.1s ease;
    border-radius: 2px;
}

/* Horizontal Scroll Gallery with Auto-scroll */
.bv-scroll-gallery {
    margin: 32px 0;
    overflow: hidden;
    position: relative;
}

.bv-scroll-gallery::before,
.bv-scroll-gallery::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 60px;
    z-index: 2;
    pointer-events: none;
}

.bv-scroll-gallery::before {
    left: 0;
    background: linear-gradient(to right, var(--bg, #ffffff), transparent);
}

.bv-scroll-gallery::after {
    right: 0;
    background: linear-gradient(to left, var(--bg, #ffffff), transparent);
}

.bv-scroll-container {
    display: flex;
    gap: 16px;
    padding: 8px 4px 16px;
    animation: bv-scroll 60s linear infinite;
    width: max-content;
}

.bv-scroll-container:hover {
    animation-play-state: paused;
}

.bv-scroll-gallery-caption {
    text-align: center;
    margin-top: 16px;
    padding-top: 16px;
    font-style: italic;
    color: var(--text, #0f172a);
    font-size: 14px;
}

@keyframes bv-scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

.bv-qa-card {
    flex: 0 0 280px;
    border: 1px solid var(--border, #e5e7eb);
    border-radius: 10px;
    overflow: hidden;
    background: var(--bg, #ffffff);
    transition: box-shadow 0.2s ease;
}

.bv-qa-card:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.bv-qa-card img {
    width: 100%;
    height: 180px;
    object-fit: contain;
    background: var(--pill, #f1f5f9);
    border-bottom: 1px solid var(--border, #e5e7eb);
}

.bv-qa-content {
    padding: 12px;
}

.bv-qa-type {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--muted, #6b7280);
    margin-bottom: 6px;
}

.bv-qa-question {
    font-size: 12px;
    line-height: 1.5;
    color: var(--text, #0f172a);
    margin-bottom: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.bv-qa-answer {
    font-size: 11px;
    color: var(--muted, #6b7280);
    padding-top: 8px;
    border-top: 1px solid var(--border, #e5e7eb);
}

.bv-qa-answer strong {
    color: var(--accent, #111827);
}

/* MLLM Case Study Cards */
.bv-mllm-case {
    border: 1px solid var(--border, #e5e7eb);
    border-radius: 10px;
    margin-bottom: 32px;
    overflow: hidden;
    background: var(--bg, #ffffff);
}

.bv-mllm-header {
    padding: 16px;
    border-bottom: 1px solid var(--border, #e5e7eb);
    background: var(--pill, #f1f5f9);
}

.bv-mllm-header .bv-type {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--muted, #6b7280);
    margin-bottom: 6px;
}

.bv-mllm-header .bv-question {
    font-size: 14px;
    line-height: 1.5;
    color: var(--text, #0f172a);
}

.bv-mllm-body {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 1px;
    background: var(--border, #e5e7eb);
}

.bv-mllm-input {
    background: var(--bg, #ffffff);
    padding: 16px;
}

.bv-mllm-input img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    border: 1px solid var(--border, #e5e7eb);
}

.bv-mllm-response {
    background: var(--bg, #ffffff);
    padding: 16px;
}

.bv-thinking {
    background: #272822;
    color: #f8f8f2;
    padding: 16px;
    border-radius: 6px;
    font-size: 12px;
    line-height: 1.7;
    margin-bottom: 12px;
    max-height: 300px;
    overflow-y: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: 'Space Mono', monospace;
}

.bv-thinking::-webkit-scrollbar {
    width: 6px;
}

.bv-thinking::-webkit-scrollbar-track {
    background: #3e3d32;
    border-radius: 3px;
}

.bv-thinking::-webkit-scrollbar-thumb {
    background: #75715e;
    border-radius: 3px;
}

.bv-thinking strong {
    color: #a6e22e;
}

.bv-thinking em {
    color: #fd971f;
    font-style: normal;
}

.bv-model-answer {
    display: flex;
    gap: 16px;
    align-items: center;
}

.bv-model-answer .bv-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--muted, #6b7280);
}

.bv-model-answer .bv-wrong {
    color: #ef4444;
    font-weight: 700;
}

.bv-model-answer .bv-right {
    color: #22c55e;
    font-weight: 700;
}

.bv-ground-truth {
    font-size: 12px;
    color: var(--muted, #6b7280);
    margin-top: 8px;
}

@media (max-width: 768px) {
    .bv-mllm-body {
        grid-template-columns: 1fr;
    }
}

/* Generative Models Comparison - Enhanced Design */
.bv-gen-section {
    margin: 40px 0;
}

.bv-gen-case {
    border: 1px solid var(--border, #e5e7eb);
    border-radius: 10px;
    margin-bottom: 40px;
    overflow: hidden;
    background: var(--bg, #ffffff);
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

.bv-gen-case:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.bv-gen-header {
    padding: 20px 24px;
    border-bottom: 1px solid var(--border, #e5e7eb);
    background: linear-gradient(to right, var(--pill, #f1f5f9), var(--bg, #ffffff));
}

.bv-gen-header .bv-type {
    display: inline-block;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--accent, #111827);
    background: var(--bg, #ffffff);
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid var(--border, #e5e7eb);
    margin-bottom: 10px;
    font-weight: 600;
}

.bv-gen-header .bv-question {
    font-size: 15px;
    line-height: 1.6;
    color: var(--text, #0f172a);
    font-weight: 500;
}

.bv-gen-header .bv-prompt {
    font-size: 12px;
    color: var(--muted, #6b7280);
    margin-top: 10px;
    padding: 8px 12px;
    background: var(--bg, #ffffff);
    border-radius: 6px;
    border-left: 3px solid var(--accent, #111827);
    font-family: 'Space Mono', monospace;
}

.bv-gen-header .bv-prompt::before {
    content: "Prompt: ";
    font-weight: 600;
    color: var(--accent, #111827);
}

.bv-gen-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0;
    background: var(--bg, #ffffff);
}

.bv-gen-cell {
    background: var(--bg, #ffffff);
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--border, #e5e7eb);
    position: relative;
}

.bv-gen-cell:last-child {
    border-right: none;
}

.bv-gen-cell-label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text, #0f172a);
    margin-bottom: 12px;
    font-weight: 700;
    padding: 6px 12px;
    background: var(--pill, #f1f5f9);
    border-radius: 999px;
    border: 1px solid var(--border, #e5e7eb);
    align-self: center;
}

/* Model-specific label colors */
.bv-gen-cell:nth-child(1) .bv-gen-cell-label {
    background: #f0f9ff;
    border-color: #bae6fd;
    color: #0369a1;
}

.bv-gen-cell:nth-child(2) .bv-gen-cell-label {
    background: #fefce8;
    border-color: #fde047;
    color: #a16207;
}

.bv-gen-cell:nth-child(3) .bv-gen-cell-label {
    background: #f0fdf4;
    border-color: #86efac;
    color: #15803d;
}

.bv-gen-cell:nth-child(4) .bv-gen-cell-label {
    background: #fdf4ff;
    border-color: #e879f9;
    color: #a21caf;
}

.bv-gen-cell:nth-child(5) .bv-gen-cell-label {
    background: #fff7ed;
    border-color: #fdba74;
    color: #c2410c;
}

.bv-gen-cell:nth-child(6) .bv-gen-cell-label {
    background: #fef2f2;
    border-color: #fca5a5;
    color: #dc2626;
}

.bv-gen-cell img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    border: 1px solid var(--border, #e5e7eb);
    transition: transform 0.2s ease;
    cursor: pointer;
}

.bv-gen-cell img:hover {
    transform: scale(1.02);
}

.bv-gen-cell video {
    width: 100%;
    height: auto;
    border-radius: 8px;
    border: 1px solid var(--border, #e5e7eb);
    background: #000;
}

.bv-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 150px;
    background: var(--pill, #f1f5f9);
    border-radius: 8px;
    color: var(--muted, #6b7280);
    font-size: 11px;
    text-align: center;
    border: 1px dashed var(--border, #e5e7eb);
    flex-direction: column;
    gap: 8px;
}

.bv-placeholder::before {
    content: "◌";
    font-size: 24px;
    opacity: 0.3;
}

/* Model Legend */
.bv-model-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 24px;
    padding: 16px;
    background: var(--pill, #f1f5f9);
    border-radius: 10px;
    border: 1px solid var(--border, #e5e7eb);
}

.bv-legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
}

.bv-legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.bv-legend-dot.input { background: #0369a1; }
.bv-legend-dot.nano { background: #a16207; }
.bv-legend-dot.qwen { background: #15803d; }
.bv-legend-dot.sora { background: #a21caf; }
.bv-legend-dot.veo { background: #c2410c; }
.bv-legend-dot.wan { background: #dc2626; }

@media (max-width: 1000px) {
    .bv-gen-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    .bv-gen-cell:nth-child(3) {
        border-right: none;
    }
}

@media (max-width: 640px) {
    .bv-gen-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .bv-gen-cell:nth-child(2),
    .bv-gen-cell:nth-child(4) {
        border-right: none;
    }
    .bv-gen-header {
        padding: 16px;
    }
    .bv-gen-cell {
        padding: 12px;
    }
}

/* Results table styling */
.bv-results-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    margin: 24px 0;
}

.bv-results-table th,
.bv-results-table td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid var(--border, #e5e7eb);
}

.bv-results-table th {
    background: var(--pill, #f1f5f9);
    font-weight: 600;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.bv-results-table tr:hover {
    background: var(--pill, #f1f5f9);
}

.bv-highlight {
    font-weight: 700;
    color: var(--accent, #111827);
}

/* Section dividers */
.bv-section-intro {
    font-size: 15px;
    color: var(--muted, #6b7280);
    margin-bottom: 24px;
    line-height: 1.7;
}

/* Challenge cards responsive */
@media (max-width: 768px) {
    .bv-challenge-flex {
        flex-direction: column !important;
    }
    .bv-challenge-flex > div:first-child {
        flex: none !important;
        width: 100% !important;
    }
}

/* Radar chart container */
.bv-radar-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    margin: 24px 0;
}

.bv-radar-container img {
    max-width: 32%;
    min-width: 280px;
    border-radius: 10px;
    border: 1px solid var(--border, #e5e7eb);
}

@media (max-width: 900px) {
    .bv-radar-container img {
        max-width: 48%;
    }
}

@media (max-width: 600px) {
    .bv-radar-container img {
        max-width: 100%;
    }
}

/* Merged Challenge + Case Layout */
.bv-challenge-merged {
    border: 1px solid var(--border, #e5e7eb);
    border-radius: 12px;
    margin-bottom: 32px;
    overflow: hidden;
    background: var(--bg, #ffffff);
}

.bv-challenge-merged-header {
    padding: 16px 20px;
    background: linear-gradient(to right, var(--pill, #f1f5f9), var(--bg, #ffffff));
    border-bottom: 1px solid var(--border, #e5e7eb);
}

.bv-challenge-merged-header h3 {
    margin: 0;
    font-size: 18px;
    color: var(--text, #0f172a);
}

.bv-challenge-merged-body {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 0;
}

.bv-challenge-merged-image {
    padding: 20px;
    background: var(--pill, #f1f5f9);
    border-right: 1px solid var(--border, #e5e7eb);
}

.bv-challenge-merged-image img {
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--border, #e5e7eb);
}

.bv-challenge-merged-caption {
    margin-top: 12px;
    padding: 12px;
    background: var(--bg, #ffffff);
    border-radius: 6px;
    border: 1px solid var(--border, #e5e7eb);
}

.bv-challenge-merged-caption .bv-q-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--muted, #6b7280);
    margin-bottom: 4px;
}

.bv-challenge-merged-caption .bv-question-text {
    font-size: 12px;
    line-height: 1.5;
    color: var(--text, #0f172a);
    margin-bottom: 8px;
}

.bv-challenge-merged-caption .bv-answer-text {
    font-size: 11px;
    color: var(--muted, #6b7280);
    padding-top: 8px;
    border-top: 1px solid var(--border, #e5e7eb);
}

.bv-challenge-merged-caption .bv-answer-text strong {
    color: var(--accent, #111827);
}

.bv-challenge-merged-analysis {
    padding: 20px;
}

.bv-challenge-merged-analysis p {
    font-size: 14px;
    line-height: 1.7;
    color: var(--text, #0f172a);
    margin-bottom: 12px;
}

.bv-challenge-merged-analysis p:last-child {
    margin-bottom: 0;
}

.bv-challenge-merged-gemini {
    padding: 20px;
    background: var(--pill, #f1f5f9);
    border-top: 1px solid var(--border, #e5e7eb);
}

.bv-challenge-merged-gemini-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
}

.bv-challenge-merged-gemini-header .bv-model-badge {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    background: #4285f4;
    padding: 4px 10px;
    border-radius: 999px;
    font-weight: 600;
}

.bv-challenge-merged-gemini .bv-thinking {
    background: #272822;
    color: #f8f8f2;
    padding: 14px;
    border-radius: 6px;
    font-size: 11px;
    line-height: 1.6;
    max-height: 200px;
    overflow-y: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: 'Space Mono', monospace;
}

.bv-challenge-merged-gemini .bv-thinking strong {
    color: #a6e22e;
}

.bv-challenge-merged-gemini .bv-thinking em {
    color: #fd971f;
    font-style: normal;
}

.bv-challenge-merged-gemini .bv-result-row {
    display: flex;
    gap: 20px;
    margin-top: 12px;
    font-size: 12px;
}

.bv-challenge-merged-gemini .bv-wrong {
    color: #ef4444;
    font-weight: 700;
}

.bv-challenge-merged-gemini .bv-correct {
    color: #22c55e;
    font-weight: 700;
}

/* Wrong Observation Highlight */
.bv-wrong-observation {
    background: rgba(239, 68, 68, 0.15);
    border-left: 3px solid #ef4444;
    padding: 4px 8px;
    margin: 4px 0;
    border-radius: 0 4px 4px 0;
}

.bv-wrong-label {
    display: inline-block;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #ef4444;
    background: rgba(239, 68, 68, 0.2);
    padding: 2px 6px;
    border-radius: 3px;
    margin-bottom: 4px;
    font-weight: 600;
}

.bv-thinking .bv-wrong-observation {
    background: rgba(239, 68, 68, 0.25);
}

.bv-wrong-note {
    font-size: 11px;
    color: var(--muted, #6b7280);
    margin-top: 8px;
    padding: 6px 10px;
    background: rgba(239, 68, 68, 0.08);
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.bv-wrong-note::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background: rgba(239, 68, 68, 0.3);
    border-left: 2px solid #ef4444;
    border-radius: 0 2px 2px 0;
}

@media (max-width: 768px) {
    .bv-challenge-merged-body {
        grid-template-columns: 1fr;
    }
    .bv-challenge-merged-image {
        border-right: none;
        border-bottom: 1px solid var(--border, #e5e7eb);
    }
}

/* ============================================
   Drag-to-Scroll Gallery Enhancement
   ============================================ */
.bv-scroll-gallery {
    cursor: grab;
    user-select: none;
}

.bv-scroll-gallery.dragging {
    cursor: grabbing;
}

.bv-scroll-gallery.dragging .bv-scroll-container {
    animation: none !important;
}

/* ============================================
   Lightbox Overlay for Images/Videos
   ============================================ */
.bv-lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.bv-lightbox.active {
    display: flex;
    opacity: 1;
}

.bv-lightbox-content {
    max-width: 90%;
    max-height: 90%;
    position: relative;
}

.bv-lightbox-content img,
.bv-lightbox-content video {
    max-width: 100%;
    max-height: 85vh;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.bv-lightbox-close {
    position: absolute;
    top: -40px;
    right: 0;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.bv-lightbox-close:hover {
    opacity: 1;
}

.bv-lightbox-caption {
    color: #fff;
    text-align: center;
    margin-top: 16px;
    font-size: 14px;
    opacity: 0.8;
}

/* Make images/videos clickable */
.bv-zoomable {
    cursor: zoom-in;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.bv-zoomable:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

/* ============================================
   Collapsible Table of Contents
   ============================================ */
.bv-toc {
    transition: all 0.3s ease;
}

.bv-toc.collapsed {
    width: 40px;
    padding: 12px;
    overflow: hidden;
}

.bv-toc.collapsed .bv-toc-title,
.bv-toc.collapsed .bv-toc-progress,
.bv-toc.collapsed .bv-toc-list {
    display: none;
}

.bv-toc-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: var(--pill, #f1f5f9);
    border: 1px solid var(--border, #e5e7eb);
    cursor: pointer;
    margin-bottom: 12px;
    transition: all 0.2s ease;
}

.bv-toc-toggle:hover {
    background: var(--border, #e5e7eb);
}

.bv-toc-toggle svg {
    width: 16px;
    height: 16px;
    color: var(--muted, #6b7280);
    transition: transform 0.3s ease;
}

.bv-toc.collapsed .bv-toc-toggle {
    margin-bottom: 0;
}

.bv-toc.collapsed .bv-toc-toggle svg {
    transform: rotate(180deg);
}

/* ============================================
   Redesigned Generative Cases Layout
   ============================================ */
.bv-gen-grid-new {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-top: 16px;
}

.bv-gen-row {
    display: contents;
}

.bv-gen-cell-new {
    background: var(--pill, #f1f5f9);
    border-radius: 8px;
    padding: 8px;
    text-align: center;
}

.bv-gen-cell-new img,
.bv-gen-cell-new video {
    width: 100%;
    height: auto;
    border-radius: 6px;
    border: 1px solid var(--border, #e5e7eb);
    background: #fff;
}

.bv-gen-cell-new .bv-gen-cell-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--muted, #6b7280);
    margin-bottom: 6px;
    font-weight: 600;
}

.bv-gen-header-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 8px;
    padding: 8px 0;
    border-bottom: 1px solid var(--border, #e5e7eb);
}

.bv-gen-header-cell {
    font-size: 11px;
    font-weight: 600;
    color: var(--text, #0f172a);
    text-align: center;
}

/* Model type badges */
.bv-gen-badge {
    display: inline-block;
    font-size: 9px;
    padding: 2px 6px;
    border-radius: 4px;
    margin-left: 4px;
}

.bv-gen-badge.image {
    background: #dbeafe;
    color: #1e40af;
}

.bv-gen-badge.video {
    background: #fce7f3;
    color: #be185d;
}

.bv-gen-badge.gt {
    background: #d1fae5;
    color: #047857;
}

/* Two-row layout for generative cases */
.bv-gen-case-new {
    border: 1px solid var(--border, #e5e7eb);
    border-radius: 12px;
    margin-bottom: 32px;
    overflow: hidden;
    background: var(--bg, #ffffff);
}

.bv-gen-case-new .bv-gen-header {
    padding: 16px;
    border-bottom: 1px solid var(--border, #e5e7eb);
    background: var(--pill, #f1f5f9);
}

.bv-gen-case-new .bv-gen-content {
    padding: 16px;
}

.bv-gen-models-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 16px;
}

.bv-gen-models-grid.row-2 {
    grid-template-columns: repeat(4, 1fr);
    max-width: 100%;
}

.bv-gen-model-cell {
    text-align: center;
}

.bv-gen-model-cell .label {
    font-size: 11px;
    font-weight: 600;
    color: var(--muted, #6b7280);
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
}

.bv-gen-model-cell img,
.bv-gen-model-cell video {
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--border, #e5e7eb);
    background: var(--pill, #f1f5f9);
}

.bv-gen-model-cell.input-cell img {
    border: 2px solid var(--accent, #111827);
}

.bv-gen-model-cell.gt-cell img {
    border: 2px solid #22c55e;
}

@media (max-width: 900px) {
    .bv-gen-models-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .bv-gen-models-grid.row-2 {
        max-width: 100%;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .bv-gen-models-grid,
    .bv-gen-models-grid.row-2 {
        grid-template-columns: 1fr;
    }
}

/* ============================================
   Collapsible Extra Examples Section
   ============================================ */
.bv-extra-examples {
    margin-top: 32px;
    border: 1px solid var(--border, #e5e7eb);
    border-radius: 12px;
    overflow: visible;
}

.bv-extra-examples-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px 20px;
    background: var(--pill, #f1f5f9);
    border: none;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    color: var(--text, #0f172a);
    transition: background 0.2s ease;
}

.bv-extra-examples-toggle:hover {
    background: var(--border, #e5e7eb);
}

.bv-extra-examples-toggle svg {
    width: 20px;
    height: 20px;
    color: var(--muted, #6b7280);
    transition: transform 0.3s ease;
}

.bv-extra-examples[open] .bv-extra-examples-toggle svg {
    transform: rotate(180deg);
}

.bv-extra-examples-content {
    padding: 20px;
    background: var(--bg, #ffffff);
}

.bv-extra-examples summary {
    list-style: none;
}

.bv-extra-examples summary::-webkit-details-marker {
    display: none;
}

/* --- Enhanced Contributors Bar --- */
.fs-contributors-bar {
    margin: 24px 0 32px 0;
    padding: 16px 0;
    border-top: 1px solid var(--fs-border-subtle);
    border-bottom: 1px solid var(--fs-border-subtle);
    animation: fs-fadeInUp 0.6s 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.fs-contributors-bar p {
    margin: 8px 0;
    font-family: var(--fs-font-body);
    font-size: 14px;
}

/* --- Hero --- */
.fs-hero {
    text-align: center;
    padding: 28px 0 48px;
    margin-bottom: 10px;
    position: relative;
}

.fs-hero::before {
    content: '';
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(37,99,235,0.05) 0%, rgba(14,165,233,0.03) 40%, transparent 70%);
    pointer-events: none;
    z-index: 0;
}

.fs-hero > * {
    position: relative;
    z-index: 1;
}

.fs-hero > * + * {
    border-top: 1px solid var(--border, #e5e7eb);
    margin-top: 24px;
    padding-top: 24px;
}

.fs-hero .fs-tagline {
    font-family: var(--fs-font-display);
    font-size: 1.55em;
    font-weight: 300;
    color: var(--fs-ink-soft);
    max-width: 820px;
    margin: 0 auto 28px;
    line-height: 1.55;
    letter-spacing: 0.01em;
    font-style: italic;
    animation: fs-fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* --- Hero Resource Links --- */
.fs-hero-links {
    display: flex;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
    margin: 20px 0 8px;
    animation: fs-fadeInUp 0.5s 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.fs-hero-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 18px;
    border: 1px solid #bfdbfe;
    border-radius: 8px;
    font-family: var(--fs-font-body);
    font-size: 13.5px;
    font-weight: 700;
    color: #1e3a8a;
    background: #eff6ff;
    text-decoration: none !important;
    transition: all 0.2s ease;
}
.fs-hero-link:hover {
    background: #dbeafe;
    border-color: #93c5fd;
    box-shadow: 0 2px 8px rgba(37,99,235,0.1);
    text-decoration: none !important;
}
.fs-hero-link svg { width: 17px; height: 17px; flex-shrink: 0; }
.fs-hero-link .fs-link-badge {
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 2px 6px;
    border-radius: 4px;
    background: #fef9c3;
    color: #854d0e;
    margin-left: 2px;
}

</style>

<!-- <div style="margin: 24px 0 32px 0; padding: 16px 0; border-top: 1px solid var(--border, #e5e7eb); border-bottom: 1px solid var(--border, #e5e7eb);">
  <p style="margin: 8px 0; font-size: 14px;"><strong>Contributors:</strong> Liang Chen<sup>1,6*</sup>, Weichu Xie<sup>1,6*</sup>, Yiyan Liang<sup>1,6*</sup>, Hongfeng He<sup>1*</sup>, Hans Zhao<sup>1*</sup>, Haiyang Shen<sup>1,6</sup>, Xuanzhong Chen<sup>1,7</sup>, Zhibo Yang<sup>3</sup>, Zhiqi Huang<sup>4</sup>, Yuantao Fan<sup>5</sup>, Guopeng Li<sup>5</sup>, Shuzheng Si<sup>7</sup>, Zefan Cai<sup>8</sup>, Tianyu Liu<sup>6, </sup> Baobao Chang<sup>6</sup>, Kuan Li<sup>1</sup></p>
  <p style="margin: 8px 0; font-size: 14px;"><strong>Affiliations:</strong> <sup>1</sup>UniPat AI, <sup>2</sup>Hongshan Group, <sup>3</sup>Alibaba Group, <sup>4</sup>MoonShot AI, <sup>5</sup>Stepfun, <sup>6</sup>Peking University, <sup>7</sup>Tsinghua University, <sup>8</sup>UWM </p>
</div> -->




<div class="fs-hero">


<p class="fs-tagline">
    Test Time Scaling for Visual Understanding<br/>via Interactive Coding and Observing
    <br/>
    <br/>
            <a href="https://github.com/UniPat-AI/SWE-Vision" class="fs-hero-link" target="_blank">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
        </a>
</p>







<div class="fs-contributors-bar">
    <p style="margin: 8px 0; font-size: 14px;"><strong>Contributors:</strong> Liang Chen<sup>1</sup>, Haozhe Zhao<sup>1</sup>, Tianyi Ma<sup>1,2</sup>, Kuan Li<sup>1</sup></p>
    <p style="margin: 8px 0; font-size: 14px;"><strong>Affiliations:</strong> <sup>1</sup>UniPat AI, <sup>2</sup>Michigan State University</p>
    <p style="margin: 8px 0; font-size: 14px;"><strong>Correspondence:</strong> <a href="mailto:liangchen@unipat.ai">liangchen@unipat.ai</a>, <a href="mailto:kuanli@unipat.ai">kuanli@unipat.ai</a></p>
</div>

<div style="text-align: center; margin: 10px 0;">
  <img src="/static/images/SWE-Vision/benchmarks.png" alt="benchmarks" style="max-width: 100%; border-radius: 10px;" />
  <p style="font-size: 12px; color: var(--muted, #6b7280); margin-top: 12px;">SWE-Vision is a multimodal agentic workflow. For BabyVision, ZeroBench-Sub and OmniSpatial, we report the result of SWE-Vision with Seed-2.0-Pro. For CharXiv and MathVision, we report the result of SWE-Vision with GPT-5.2. All tested models are in thinking mode with highest thinking budget.  </p>
</div>

</div>



## Introduction

Visual understanding and coding are two core capabilities of frontier multimodal large language models — yet they exhibit strikingly different performance comparing to human ability. In coding, modern models already operate far beyond expert human levels, capable of generating, debugging, and optimizing complex projects. In vision, however, the gap remains substantial: models still struggle with tasks that humans solve effortlessly, as our previous project [BabyVision](https://unipat.ai/blog/BabyVision) shows. This asymmetry suggests a natural question: **can coding be used to improve vision?**

Many subsequent efforts have followed the “thinking with images” paradigm introduced by OpenAI, incorporating toolchains to enhance visual understanding. In practice, however, the gains have been modest. These systems often rely on manually engineered tools and are narrowly optimized for specific benchmarks—such as high-resolution image understanding—leading to two major limitations: (1) the manually designed tools are unfamiliar to the base model, burdening effective learning and exploration especially for RL; and (2) the evaluations are limited in scope, making it difficult to assess true generalization. As a result, the community still lacks a clean, open-source framework that enables models to improve visual capabilities in a broadly generalizable way.

This is the core idea behind **SWE-Vision** — an agentic loop that equips vision-language models with a simple, **stateful** environment, enabling them to write and execute Python code to reason about visual inputs. Rather than relying solely on internal visual representations or ad hoc tools, SWE-Vision allows the model to *program its way* to the answer: loading images with PIL, performing pixel-level analysis with NumPy, generating visualizations with matplotlib and different libraries, and seamlessly integrating these computational tools with the base model’s native visual understanding and multi-turn coding ability.  


<div style="text-align: center; margin: 10px 0;">
  <img src="/static/images/SWE-Vision/case_swev.png" alt="case" style="max-width: 80%; border-radius: 10px;" />
  <p style="font-size: 12px; color: var(--muted, #6b7280); margin-top: 12px;"> Case study of SWE-Vision (GPT-5.2-xhigh) solving a visual task. We ask the model to determine which subplot has the largest gap between the red dashed curve and the black solid curve at Quarters = 15. The SWE-Vision agent solves this rigorously by first excluding subplot (d), then locating the two curves at Quarters = 15 in each candidate subplot and using executable code to measure the gap precisely. This structured and verifiable process is much more reliable and interpretable than the direct “eyeballing” approach commonly used by conventional vision-language models. </p>
</div>

The benchmark results are also striking. Across five diverse vision benchmarks — spanning foundational perception, chart reasoning, mathematical problem solving, spatial understanding, and complex multi-step visual challenges — SWE-Vision consistently improves the frontier LLM such as GPT-5.2-xhigh and Seed-2.0-Pro and achieves state-of-the-art results: **64.4** on BabyVision, **94.0** on MathVision, **50.1** on Zero-Bench-Sub, **69.0** on OmniSpatial, and **82.5** on CharXiv-RQ. 

The experimental results show that including a general coding tool is a meaningful test-time scaling direction to improve the performance of the frontier LLM on vision tasks. However, we also find that the relative performance gain are to different base models, related to the function calling, coding and long-context ability of the base model. To fully unlock the potential of agentic visual understanding with SWE-Vision, we need more comprehensive training with deeply interleaved visual-and-coding SFT and RL data — enabling models not just to use tools, but to natively integrate perception and programmatic reasoning.



## Cases: Visual Test Time Scaling with Coding

Below we show some trajectories of SWE-Vision solving visual tasks. Each trajectory illustrates the full agentic loop: the model receives an image, reasons about it, writes Python code, inspects the results, and iterates until it reaches an answer.


<div id="swev-traj-root"></div>

<style>
/* ═══ SWE-Vision Trajectory Viewer (scoped) ═══ */
#swev-traj-root { margin: 24px 0 40px; font-family: inherit; }

.swev-tabs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; background: var(--pill, #f1f5f9); padding: 4px; border-radius: 10px; border: 1px solid var(--border, #e5e7eb); margin-bottom: 16px; }
.swev-tab { padding: 10px 14px; background: transparent; color: var(--muted, #6b7280); border: none; border-radius: 8px; font-family: inherit; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.2s; display: flex; flex-direction: column; align-items: center; gap: 5px; }
.swev-tab:hover { background: #fff; color: var(--text, #0f172a); }
.swev-tab.active { background: #fff; color: var(--text, #0f172a); box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.swev-tab-label { font-weight: 600; font-size: 13px; }
.swev-tag-row { display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; }
.swev-tag { display: inline-block; padding: 1px 7px; border-radius: 100px; font-size: 10px; font-weight: 600; }
.swev-tag-perception { background: #dbeafe; color: #1d4ed8; }
.swev-tag-counting { background: #d1fae5; color: #047857; }
.swev-tag-game { background: #fef3c7; color: #b45309; }
.swev-tag-reasoning { background: #ede9fe; color: #6d28d9; }
.swev-tag-spatial { background: #fce7f3; color: #be185d; }
.swev-tag-math { background:rgb(191, 233, 193); color:rgb(39, 170, 135); }
.swev-tag-charts { background:rgb(240, 212, 212); color:rgb(231, 19, 19); } 

.swev-panel { display: none; }
.swev-panel.active { display: block; }

/* Meta */
.swev-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: var(--pill, #f1f5f9); border: 1px solid var(--border, #e5e7eb); border-radius: 10px; padding: 16px; margin-bottom: 16px; font-size: 13px; }
.swev-meta-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted, #6b7280); font-weight: 600; margin-bottom: 2px; }
.swev-meta-val { color: var(--text, #0f172a); font-weight: 500; }
.swev-meta-full { grid-column: 1 / -1; }
.swev-meta-tags { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 2px; }
.swev-meta-tags .swev-tag { font-size: 11px; padding: 2px 9px; }

/* Scrollable frame */
.swev-frame-wrap { position: relative; }
.swev-frame { max-height: 150vh; overflow-y: auto; border: 1px solid var(--border, #e5e7eb); border-radius: 10px; padding: 20px 16px; background: #fff; }
.swev-frame::-webkit-scrollbar { width: 5px; }
.swev-frame::-webkit-scrollbar-track { background: transparent; }
.swev-frame::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; }
.swev-frame-wrap::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 40px; background: linear-gradient(transparent, #fff); pointer-events: none; border-radius: 0 0 10px 10px; z-index: 2; transition: opacity 0.3s; }
.swev-frame-wrap.at-bottom::after { opacity: 0; }

/* Timeline */
.swev-tl { position: relative; padding-left: 28px; }
.swev-tl::before { content: ''; position: absolute; left: 9px; top: 0; bottom: 0; width: 2px; background: linear-gradient(var(--border, #e5e7eb), transparent); }

.swev-step { position: relative; margin-bottom: 14px; }
.swev-dot { position: absolute; left: -28px; top: 14px; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; z-index: 1; color: #fff; }
.swev-dot svg { width: 10px; height: 10px; }
.swev-dot-user { background: #3b82f6; }
.swev-dot-model { background: #10b981; }
.swev-dot-tool { background: #f59e0b; }
.swev-dot-finish { background: #8b5cf6; }

.swev-card { border: 1px solid var(--border, #e5e7eb); border-radius: 10px; overflow: hidden; background: #fff; transition: border-color 0.2s; }
.swev-card:hover { border-color: #d1d5db; }
.swev-card-hdr { display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; border-bottom: 1px solid var(--border, #e5e7eb); background: var(--pill, #f8fafc); }
.swev-card-hdr svg { width: 14px; height: 14px; }
.swev-role { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.swev-role-user { color: #2563eb; }
.swev-role-model { color: #059669; }
.swev-role-tool { color: #d97706; }
.swev-role-finish { color: #7c3aed; }
.swev-time { font-size: 11px; color: var(--muted, #9ca3af); font-family: monospace; }
.swev-card-body { padding: 14px; }

/* User */
.swev-query { font-size: 14px; line-height: 1.7; white-space: pre-wrap; color: var(--text, #0f172a); }
.swev-user-img { margin-top: 12px; }
.swev-user-img img { max-width: 280px; max-height: 280px; border-radius: 8px; border: 1px solid var(--border, #e5e7eb); cursor: zoom-in; }

/* Thinking */
.swev-think { margin-bottom: 12px; }
.swev-think-toggle { display: flex; align-items: center; gap: 6px; width: 100%; padding: 8px 12px; background: #f5f3ff; border: 1px solid #e9e5ff; border-radius: 6px; cursor: pointer; color: #7c3aed; font-size: 12px; font-weight: 500; font-family: inherit; text-align: left; transition: background 0.2s; }
.swev-think-toggle:hover { background: #ede9fe; }
.swev-think-toggle svg { width: 14px; height: 14px; flex-shrink: 0; }
.swev-think-toggle .arr { margin-left: auto; font-size: 10px; transition: transform 0.2s; }
.swev-think-toggle.open .arr { transform: rotate(180deg); }
.swev-think-body { padding: 10px 12px; margin-top: 6px; background: #faf8ff; border-radius: 6px; border-left: 3px solid #8b5cf6; font-size: 12.5px; line-height: 1.7; color: #4b5563; }
.swev-think-body.collapsed { display: none; }
.swev-think-body p { margin-bottom: 6px; }
.swev-think-body p:last-child { margin-bottom: 0; }
.swev-think-body strong { color: var(--text, #0f172a); }

/* Code */
.swev-code-lbl { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 600; color: var(--muted, #9ca3af); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px; }
.swev-code-lbl svg { width: 12px; height: 12px; }
.swev-code { background: #1e1e2e; border: 1px solid #313244; border-radius: 8px; padding: 14px; overflow-x: auto; font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', monospace; font-size: 12px; line-height: 1.65; color: #cdd6f4; white-space: pre; word-wrap: break-word; position: relative; }
.swev-code::after { content: 'python'; position: absolute; top: 6px; right: 10px; font-size: 9px; color: #585b70; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
.swev-code .kw { color: #cba6f7; } .swev-code .bi { color: #f9e2af; } .swev-code .str { color: #a6e3a1; } .swev-code .num { color: #fab387; } .swev-code .cm { color: #6c7086; font-style: italic; }

/* Tool badge */
.swev-tool-badge { display: inline-flex; align-items: center; gap: 3px; padding: 2px 8px; background: #fef3c7; border: 1px solid #fde68a; border-radius: 100px; font-size: 11px; font-weight: 600; color: #b45309; font-family: monospace; margin-bottom: 10px; }
.swev-tool-badge svg { width: 10px; height: 10px; }

/* Output */
.swev-out-lbl { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 600; color: var(--muted, #9ca3af); text-transform: uppercase; letter-spacing: 0.05em; margin: 10px 0 6px; }
.swev-out-lbl svg { width: 12px; height: 12px; }
.swev-out-text { background: #f8fafc; border: 1px solid var(--border, #e5e7eb); border-radius: 6px; padding: 10px 12px; font-family: monospace; font-size: 12px; line-height: 1.6; color: #4b5563; white-space: pre-wrap; word-break: break-word; }
.swev-out-text.err { border-color: #fecaca; color: #dc2626; background: #fef2f2; }
.swev-out-img { margin-top: 10px; text-align: center; }
.swev-out-img img { max-width: 100%; max-height: 420px; border-radius: 8px; border: 1px solid var(--border, #e5e7eb); box-shadow: 0 2px 8px rgba(0,0,0,0.06); cursor: zoom-in; transition: transform 0.2s; }
.swev-out-img img:hover { transform: scale(1.01); }

/* Final answer */
.swev-answer { margin-top: 6px; padding: 16px 20px; background: linear-gradient(135deg, #ecfdf5, #f0fdf4); border: 1px solid #a7f3d0; border-radius: 8px; }
.swev-answer-lbl { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; color: #059669; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
.swev-answer-lbl svg { width: 14px; height: 14px; }
.swev-answer-text { font-size: 15px; line-height: 1.7; color: var(--text, #0f172a); font-weight: 500; }
.swev-answer-text strong { font-weight: 700; }

/* Lightbox */
.swev-lb { display: none; position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.88); backdrop-filter: blur(6px); align-items: center; justify-content: center; cursor: zoom-out; padding: 32px; }
.swev-lb.open { display: flex; }
.swev-lb img { max-width: 90vw; max-height: 90vh; border-radius: 8px; box-shadow: 0 8px 30px rgba(0,0,0,0.4); }

@media (max-width: 640px) {
  .swev-tabs { grid-template-columns: repeat(2, 1fr); }
  .swev-meta { grid-template-columns: 1fr; }
  .swev-tl { padding-left: 22px; }
  .swev-dot { left: -22px; width: 16px; height: 16px; font-size: 8px; }
  .swev-dot svg { width: 8px; height: 8px; }
  .swev-card-body { padding: 10px; }
  .swev-code { font-size: 11px; padding: 10px; }
  .swev-user-img img { max-width: 100%; }
}
</style>

<!-- Lightbox -->
<div class="swev-lb" id="swev-lb" onclick="this.classList.remove('open')"><img id="swev-lb-img" src="" alt=""></div>

<script>
(function(){
const root = document.getElementById('swev-traj-root');
const IC = {
  user:'<svg fill="none" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/></svg>',
  bot:'<svg fill="none" viewBox="0 0 24 24"><path d="M12 2a4 4 0 014 4v1h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2V6a4 4 0 014-4z" stroke="currentColor" stroke-width="2"/><path d="M9 13h2m2 0h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  tool:'<svg fill="none" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  check:'<svg fill="none" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M22 4L12 14.01l-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  brain:'<svg fill="none" viewBox="0 0 24 24"><path d="M9.5 2A5.5 5.5 0 004 7.5c0 1.12.34 2.17.92 3.04A5.5 5.5 0 002 15.5 5.5 5.5 0 007.5 21h1V2h1m0 0h1v19h1a5.5 5.5 0 005.5-5.5 5.5 5.5 0 00-2.92-4.96A5.48 5.48 0 0020 7.5 5.5 5.5 0 0014.5 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  code:'<svg fill="none" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polyline points="8 6 2 12 8 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  term:'<svg fill="none" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="19" x2="20" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
};

function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function fmtT(ts){if(!ts)return'';const d=new Date(ts);return d.toLocaleTimeString('en-US',{hour12:false,hour:'2-digit',minute:'2-digit',second:'2-digit'});}
function hl(c){let s=esc(c);s=s.replace(/(#.*)/g,'<span class="cm">$1</span>');s=s.replace(/((?<!\\)(?:'(?:[^\'\\\\]|\\\\.)*'|"(?:[^"\\\\]|\\\\.)*"))/g,'<span class="str">$1</span>');const kw=['import','from','as','def','class','return','if','elif','else','for','in','while','try','except','finally','with','lambda','not','and','or','is','True','False','None','yield','break','continue','pass','raise'];s=s.replace(new RegExp('\\\\b('+kw.join('|')+')\\\\b','g'),'<span class="kw">$1</span>');const bi=['print','range','len','int','float','str','list','dict','tuple','set','sorted','enumerate','zip','map','filter','type','isinstance','round','abs','max','min','sum','open'];s=s.replace(new RegExp('\\\\b('+bi.join('|')+')(?=[(])','g'),'<span class="bi">$1</span>');s=s.replace(/\b(\d+\.?\d*(?:e[+-]?\d+)?)\b/g,'<span class="num">$1</span>');return s;}

function openLB(src){document.getElementById('swev-lb-img').src=src;document.getElementById('swev-lb').classList.add('open');}

function buildGroups(steps){const g=[];let i=0;while(i<steps.length){const s=steps[i];if(s.role==='user'){g.push({t:'user',s});i++;}else if(s.role==='assistant'){const fin=s.tool_calls&&s.tool_calls.some(tc=>tc.name==='finish');if(fin){g.push({t:'finish',s});i++;}else{const gr={t:'at',a:s,tool:null};if(i+1<steps.length&&steps[i+1].role==='tool'){gr.tool=steps[i+1];i+=2;}else i++;g.push(gr);}}else if(s.role==='tool'){g.push({t:'tool',s});i++;}else i++;}return g;}

function rThink(rd){if(!rd||!rd.length)return'';const sm=rd.filter(r=>r.type==='reasoning.summary'&&r.summary);if(!sm.length)return'';let txt=sm.map(s=>s.summary).join('\n\n');let f=esc(txt);f=f.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');const ps=f.split('\n\n').filter(p=>p.trim());const ph=ps.map(p=>'<p>'+p.replace(/\n/g,'<br>')+'</p>').join('');return '<div class="swev-think"><button class="swev-think-toggle open" onclick="this.classList.toggle(\'open\');this.nextElementSibling.classList.toggle(\'collapsed\')">'+IC.brain+' Reasoning<span class="arr">&#9660;</span></button><div class="swev-think-body">'+ph+'</div></div>';}

function rCode(code){if(!code)return'';return '<div><div class="swev-code-lbl">'+IC.code+' Execute Code</div><div class="swev-code">'+hl(code)+'</div></div>';}

function rUser(s,p){let imgs='';if(s.images&&s.images.length)imgs=s.images.map(i=>{const src=p+'/'+i;return '<div class="swev-user-img"><img src="'+src+'" alt="input" onclick="openLB(\''+src+'\')" loading="lazy"></div>';}).join('');return '<div class="swev-step"><div class="swev-dot swev-dot-user">'+IC.user+'</div><div class="swev-card"><div class="swev-card-hdr"><div class="swev-role swev-role-user">'+IC.user+' User &middot; Step '+s.step+'</div><div class="swev-time">'+fmtT(s.timestamp)+'</div></div><div class="swev-card-body"><div class="swev-query">'+esc(s.content_text)+'</div>'+imgs+'</div></div></div>';}

function rAT(g,p){const a=g.a,tool=g.tool;let tn='';if(a.tool_calls&&a.tool_calls.length)tn=a.tool_calls[0].name||'';let code='';if(a.tool_calls&&a.tool_calls.length){try{code=JSON.parse(a.tool_calls[0].arguments||'{}').code||'';}catch(e){}}if(!code&&tool&&tool.code)code=tool.code;const th=rThink(a.reasoning_details);const ch=rCode(code);let oh='';if(tool){const isE=tool.content_text&&tool.content_text.includes('[Execution Error]');let ot='';if(tool.content_text&&tool.content_text.trim())ot='<div class="swev-out-text'+(isE?' err':'')+'">'+esc(tool.content_text)+'</div>';let oi='';if(tool.images&&tool.images.length)oi=tool.images.map(i=>{const src=p+'/'+i;return '<div class="swev-out-img"><img src="'+src+'" alt="output" onclick="openLB(\''+src+'\')" loading="lazy"></div>';}).join('');if(ot||oi)oh='<div><div class="swev-out-lbl">'+IC.term+' Output</div>'+ot+oi+'</div>';}const sn=a.step;const tsn=tool?' &rarr; '+tool.step:'';return '<div class="swev-step"><div class="swev-dot swev-dot-model">'+sn+'</div><div class="swev-card"><div class="swev-card-hdr"><div class="swev-role swev-role-model">'+IC.bot+' Model &middot; Steps '+sn+tsn+'</div><div class="swev-time">'+fmtT(a.timestamp)+'</div></div><div class="swev-card-body">'+th+(tn?'<div class="swev-tool-badge">'+IC.tool+' '+tn+'</div>':'')+ch+oh+'</div></div></div>';}

function rFinish(s,fa){let ans='';if(s.tool_calls&&s.tool_calls.length){try{ans=JSON.parse(s.tool_calls[0].arguments||'{}').answer||fa||'';}catch(e){ans=fa||'';}}const th=rThink(s.reasoning_details);let f=esc(ans);f=f.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');return '<div class="swev-step"><div class="swev-dot swev-dot-finish">'+IC.check+'</div><div class="swev-card"><div class="swev-card-hdr"><div class="swev-role swev-role-finish">'+IC.check+' Final Answer &middot; Step '+s.step+'</div><div class="swev-time">'+fmtT(s.timestamp)+'</div></div><div class="swev-card-body">'+th+'<div class="swev-answer"><div class="swev-answer-lbl">'+IC.check+' Answer</div><div class="swev-answer-text">'+f+'</div></div></div></div></div>';}

function renderPanel(data,p,td,el){const m=data.metadata;const dur=m.end_time&&m.start_time?((new Date(m.end_time)-new Date(m.start_time))/1000).toFixed(1)+'s':'\u2014';const tgH=td.tags.map(t=>'<span class="swev-tag '+t.c+'">'+t.l+'</span>').join('');let h='<div class="swev-meta"><div><div class="swev-meta-label">Model</div><div class="swev-meta-val">'+(m.model||'\u2014')+'</div></div><div><div class="swev-meta-label">Steps</div><div class="swev-meta-val">'+(m.total_steps||'\u2014')+'</div></div><div><div class="swev-meta-label">Duration</div><div class="swev-meta-val">'+dur+'</div></div><div><div class="swev-meta-label">Category</div><div class="swev-meta-tags">'+tgH+'</div></div><div class="swev-meta-full"><div class="swev-meta-label">Task Query</div><div class="swev-meta-val" style="font-size:13px;line-height:1.6;color:#4b5563;">'+esc(m.query||'')+'</div></div></div>';const fid='swev-frame-'+td.id;h+='<div class="swev-frame-wrap" id="'+fid+'-wrap"><div class="swev-frame" id="'+fid+'"><div class="swev-tl">';const gs=buildGroups(data.steps);for(const g of gs){if(g.t==='user')h+=rUser(g.s,p);else if(g.t==='at')h+=rAT(g,p);else if(g.t==='finish')h+=rFinish(g.s,data.final_answer);else if(g.t==='tool'){const s=g.s;const isE=s.content_text&&s.content_text.includes('[Execution Error]');let ot=s.content_text&&s.content_text.trim()?'<div class="swev-out-text'+(isE?' err':'')+'">'+esc(s.content_text)+'</div>':'';let oi=(s.images&&s.images.length)?s.images.map(i=>{const src=p+'/'+i;return '<div class="swev-out-img"><img src="'+src+'" onclick="openLB(\''+src+'\')" loading="lazy"></div>';}).join(''):'';h+='<div class="swev-step"><div class="swev-dot swev-dot-tool">'+s.step+'</div><div class="swev-card"><div class="swev-card-hdr"><div class="swev-role swev-role-tool">'+IC.tool+' Tool &middot; Step '+s.step+'</div><div class="swev-time">'+fmtT(s.timestamp)+'</div></div><div class="swev-card-body">'+(s.code?rCode(s.code):'')+ot+oi+'</div></div></div>';}}h+='</div></div></div>';el.innerHTML=h;const fr=document.getElementById(fid);if(fr)fr.addEventListener('scroll',()=>{const w=fr.parentElement;w.classList.toggle('at-bottom',fr.scrollHeight-fr.scrollTop-fr.clientHeight<10);});}

function buildUI(SWEV_TASKS){
  let tabsH='<div class="swev-tabs">';SWEV_TASKS.forEach((t,i)=>{const tgH=t.tags.map(tg=>'<span class="swev-tag '+tg.c+'">'+tg.l+'</span>').join('');tabsH+='<button class="swev-tab'+(i===0?' active':'')+'" data-id="'+t.id+'"><span class="swev-tab-label">'+t.title+'</span><div class="swev-tag-row">'+tgH+'</div></button>';});tabsH+='</div>';let pansH='';SWEV_TASKS.forEach((t,i)=>{pansH+='<div class="swev-panel'+(i===0?' active':'')+'" id="swev-p-'+t.id+'"></div>';});root.innerHTML=tabsH+pansH;

  // Tab clicks
  root.querySelectorAll('.swev-tab').forEach(btn=>{btn.addEventListener('click',()=>{root.querySelectorAll('.swev-tab').forEach(b=>b.classList.remove('active'));root.querySelectorAll('.swev-panel').forEach(p=>p.classList.remove('active'));btn.classList.add('active');document.getElementById('swev-p-'+btn.dataset.id).classList.add('active');});});

  // Load data
  SWEV_TASKS.forEach(t=>{fetch(t.path+'/trajectory.json').then(r=>r.json()).then(data=>{renderPanel(data,t.path,t,document.getElementById('swev-p-'+t.id));}).catch(e=>{document.getElementById('swev-p-'+t.id).innerHTML='<div style="color:#dc2626;padding:20px;">Failed to load: '+e.message+'</div>';});});
}

// Fetch task registry from API, then build UI
fetch('/api/swe-vision/tasks').then(r=>r.json()).then(tasks=>{
  if(!tasks.length){root.innerHTML='<div style="color:#6b7280;padding:20px;">No trajectory cases found.</div>';return;}
  buildUI(tasks);
}).catch(e=>{root.innerHTML='<div style="color:#dc2626;padding:20px;">Failed to load task list: '+e.message+'</div>';});

// Expose lightbox
window.openLB=openLB;
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.getElementById('swev-lb').classList.remove('open');});
})();
</script>


<!-- Floating Table of Contents -->
<nav class="bv-toc" id="bv-toc">
<div class="bv-toc-toggle" id="bv-toc-toggle" title="Toggle Table of Contents">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
<div class="bv-toc-title">On This Page</div>
<div class="bv-toc-progress"><div class="bv-toc-progress-bar" id="bv-progress"></div></div>
<ul class="bv-toc-list">
<li class="bv-toc-item"><a href="#introduction" class="bv-toc-link bv-toc-h2">Introduction</a></li>
<li class="bv-toc-item"><a href="#cases-visual-test-time-scaling-with-coding" class="bv-toc-link bv-toc-h2">Demostrations</a></li>
<li class="bv-toc-item"><a href="#swe-vision-system-design" class="bv-toc-link bv-toc-h2">System Design</a></li>
<li class="bv-toc-item"><a href="#experiments" class="bv-toc-link bv-toc-h2">Experiments</a></li>
<li class="bv-toc-item"><a href="#benchmarks" class="bv-toc-link bv-toc-h3">Benchmarks</a></li>
<li class="bv-toc-item"><a href="#results" class="bv-toc-link bv-toc-h3">Results</a></li>
<li class="bv-toc-item"><a href="#discussions" class="bv-toc-link bv-toc-h2">Discussions</a></li>
<li class="bv-toc-item"><a href="#future-directions" class="bv-toc-link bv-toc-h3">Future Directions</a></li>
<li class="bv-toc-item"><a href="#conclusion" class="bv-toc-link bv-toc-h3">Conclusion</a></li>
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
        const toc = document.getElementById('bv-toc');
        const progressBar = document.getElementById('bv-progress');
        const tocLinks = document.querySelectorAll('.bv-toc-link');
        const tocToggle = document.getElementById('bv-toc-toggle');

        if (!toc || !progressBar || tocLinks.length === 0) return;

        if (tocToggle) {
            tocToggle.addEventListener('click', function() {
                toc.classList.toggle('collapsed');
            });
        }

        function adjustTOCSize() {
            if (!toc) return;
            const containerMaxWidth = 980;
            const containerWidth = Math.min(containerMaxWidth, window.innerWidth * 0.9);
            const availableSpace = (window.innerWidth - containerWidth) / 2;
            if (availableSpace < 100) {
                toc.style.display = 'none';
            } else {
                toc.style.display = '';
                const optimalWidth = Math.min(200, availableSpace - 20);
                toc.style.width = Math.max(160, optimalWidth) + 'px';
                toc.style.right = Math.max(5, availableSpace - optimalWidth - 15) + 'px';
            }
        }

        adjustTOCSize();
        window.addEventListener('resize', adjustTOCSize);

        const headings = [];
        tocLinks.forEach(link => {
            const id = link.getAttribute('href').substring(1);
            const heading = document.getElementById(id);
            if (heading) {
                headings.push({ id, element: heading, link });
            }
        });

        function updateActiveSection() {
            const scrollPos = window.scrollY + 150;

            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min((window.scrollY / docHeight) * 100, 100);
            progressBar.style.width = progress + '%';

            let currentSection = null;
            for (let i = headings.length - 1; i >= 0; i--) {
                if (headings[i].element.offsetTop <= scrollPos) {
                    currentSection = headings[i];
                    break;
                }
            }

            tocLinks.forEach(link => link.classList.remove('active'));
            if (currentSection) {
                currentSection.link.classList.add('active');
            }
        }

        window.addEventListener('scroll', updateActiveSection, { passive: true });
        updateActiveSection();
    }
})();
</script>


## SWE-Vision: System Design

*Why Give LLMs Code Execution?*

The key insight is that many visual reasoning failures are not failures of *seeing* but of *processing*. When a model looks at a chart and estimates "about 75%", it may have perceived the bar heights correctly but failed to compute the precise ratio. When it counts objects in a cluttered scene, it may see each object but lose track of the tally. These are exactly the kinds of errors that a few lines of Python can eliminate.

SWE-Vision is designed around a simple principle: **let the model decide when and how to use code**. The model is not forced to write code for every question — it retains the option to answer directly when confident. But when the task benefits from precise computation, pixel-level analysis, or iterative exploration, the model can reach for its Jupyter notebook and work through the problem systematically.

### Architecture Overview

SWE-Vision follows an agentic loop architecture with two core tools, `execute_code` and `finish`:

```
                                User Query (+ images)
                                        │
                                        ▼
                                ┌──────────────────────┐
                                │   LLM (e.g. GPT-5.2) │◄───────────────────────┐
                                │                      │                        │
                                │   Tool Calls:        │                        │
                                │   ┌────────────────┐ │     ┌──────────────┐   │
                                │   │  execute_code  │─┼────►│Jupyter Kernel│   │
                                │   └────────────────┘ │     │  (Docker)    │   │
                                │   ┌────────────────┐ │     └──────┬───────┘   │
                                │   │    finish      │─┼──► Answer  │ (Output)  │
                                │   └────────────────┘ │            │           │
                                └──────────────────────┘    text + images ──────┘
```

The workflow proceeds as follows:

1. **User Input.** The user provides a query along with one or more images. The images are both (a) passed to the LLM as visual content in the conversation and (b) copied into a shared filesystem accessible to the Jupyter kernel.

2. **Reasoning & Tool Selection.** The LLM receives the query and images, reasons about the task, and decides whether to answer directly or invoke the `execute_code` tool to run Python code.

3. **Code Execution.** When the model calls `execute_code`, the provided Python code is executed in a **persistent Jupyter kernel** running inside a Docker container. The kernel retains all state — variables, imports, loaded data — across multiple calls, enabling multi-step analyses.

4. **Result Feedback.** The execution results — including text output (stdout), error messages, and any generated images (e.g., matplotlib plots) — are fed back to the LLM as part of the ongoing conversation. Generated images are captured and returned as visual content, so the model can inspect its own plots and intermediate visualizations.

5. **Iteration.** The model examines the results, decides if more computation is needed, and either calls `execute_code` again or calls the `finish` tool with the final answer.

### Key Design Decisions

**Stateful Jupyter Kernel.** Unlike stateless code execution, a persistent Jupyter kernel lets the agent build up context over multiple tool calls. The model can load an image in one call, inspect its properties, apply transformations in the next call, and compute a final answer in a third — all without reloading data or re-importing libraries. This mirrors how a human data scientist would work in a notebook.

**Docker Sandboxing.** All code runs inside an isolated Docker container with a controlled package environment (NumPy, Pandas, OpenCV, PIL, scikit-image, matplotlib, and more). A shared volume mount (`/mnt/data/`) enables file exchange between the host and the kernel. This provides both security (arbitrary code execution is sandboxed) and reproducibility (the environment is consistent across runs).

**Image-In / Image-Out.** SWE-Vision supports bidirectional image flow. User images are passed to the LLM *and* placed in the kernel's filesystem. Images generated by the kernel (e.g., annotated images, plots, heatmaps) are captured and returned to the LLM as visual content. This creates a powerful feedback loop: the model can generate a visualization to verify its own reasoning, inspect edge detection results, or overlay annotations on the original image.

**OpenAI Function Calling Interface.** SWE-Vision uses the standard OpenAI function calling (tool use) API, making it compatible with any OpenAI-compatible endpoint. The two tools — `execute_code` and `finish` — are defined as structured function schemas. This means SWE-Vision works out of the box with OpenAI models, but also with other providers through OpenAI-compatible APIs.


### System Prompt Design

The system prompt instructs the model to behave as an expert assistant with notebook access. Key elements include:

- Explicit documentation of the file system layout (`/mnt/data/`)
- Guidance to use `print()` for text output and `plt.show()` for plot capture
- Encouragement to work step-by-step and examine intermediate results
- Permission to call `execute_code` multiple times for iterative exploration
- Instructions to call `finish` only when confident in the answer

This prompt design is intentionally minimal — it tells the model *what tools are available* and *how to use them*, but does not prescribe *when* to use code or *what algorithms* to apply. The model's own reasoning capabilities determine the problem-solving strategy.




## Experiments

### Benchmarks

We evaluate SWE-Vision across five diverse vision benchmarks, chosen to cover a broad spectrum of visual reasoning capabilities:

<table style="width:100%; border-collapse:collapse; margin:1.5em 0; font-size:15px; line-height:1.7;">
  <thead>
    <tr style="background:#f8fafc;">
      <th style="border:1px solid #d1d5db; padding:10px 14px; text-align:left; font-weight:600;">Benchmark</th>
      <th style="border:1px solid #d1d5db; padding:10px 14px; text-align:left; font-weight:600;">Category</th>
      <th style="border:1px solid #d1d5db; padding:10px 14px; text-align:left; font-weight:600;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d1d5db; padding:10px 14px;"><strong>BabyVision</strong></td>
      <td style="border:1px solid #d1d5db; padding:10px 14px;">Basic Vision</td>
      <td style="border:1px solid #d1d5db; padding:10px 14px;">Fundamental perceptual tasks: Fine-grained Discrimination, Visual Tracking, Spatial Perception, Visual Pattern Recognition</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db; padding:10px 14px;"><strong>CharXiv-RQ</strong></td>
      <td style="border:1px solid #d1d5db; padding:10px 14px;">Charts &amp; Tables</td>
      <td style="border:1px solid #d1d5db; padding:10px 14px;">Reasoning questions over real-world academic charts from arXiv papers</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db; padding:10px 14px;"><strong>MathVision</strong></td>
      <td style="border:1px solid #d1d5db; padding:10px 14px;">Mathematics</td>
      <td style="border:1px solid #d1d5db; padding:10px 14px;">Mathematical problem solving from visual figures, diagrams, and plots</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db; padding:10px 14px;"><strong>OmniSpatial</strong></td>
      <td style="border:1px solid #d1d5db; padding:10px 14px;">2D &amp; 3D Spatial</td>
      <td style="border:1px solid #d1d5db; padding:10px 14px;">Spatial reasoning tasks including distance estimation, object arrangement, and dynamic reasoning in both 2D and 3D scenes</td>
    </tr>
    <tr>
      <td style="border:1px solid #d1d5db; padding:10px 14px;"><strong>ZeroBench-Sub</strong></td>
      <td style="border:1px solid #d1d5db; padding:10px 14px;">Comprehensive Vision</td>
      <td style="border:1px solid #d1d5db; padding:10px 14px;">Multi-step, multi-skill visual questions requiring fine-grained perception and complex reasoning</td>
    </tr>
  </tbody>
</table>

### Setup

- **Model under test:** Gemini-3-Pro (high), GPT-5.2 (xhigh), Seed-2.0-Pro (high).
- **SWE-Vision configuration:** GPT-5.2/Seed-2.0-Pro with max reasoning effort, max 100 agent iterations per task.
- **Judge model:** GPT-5 as LLM-as-judge for answer correctness evaluation.

### Results

<!-- Bar Chart: GPT-5.2 vs SWE-Vision -->
<div style="display: flex; justify-content: center; margin: 24px 0;">
<svg viewBox="0 0 720 420" style="max-width: 720px; width: 100%; font-family: system-ui, -apple-system, sans-serif;">
  <text x="360" y="22" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2937">GPT-5.2 vs SWE-Vision</text>
  <line x1="50" y1="320" x2="690" y2="320" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="50" y1="264" x2="690" y2="264" stroke="#f3f4f6" stroke-width="1"/>
  <line x1="50" y1="208" x2="690" y2="208" stroke="#f3f4f6" stroke-width="1"/>
  <line x1="50" y1="152" x2="690" y2="152" stroke="#f3f4f6" stroke-width="1"/>
  <line x1="50" y1="96" x2="690" y2="96" stroke="#f3f4f6" stroke-width="1"/>
  <line x1="50" y1="40" x2="690" y2="40" stroke="#f3f4f6" stroke-width="1"/>
  <text x="44" y="324" text-anchor="end" font-size="12" fill="#9ca3af">0</text>
  <text x="44" y="268" text-anchor="end" font-size="12" fill="#9ca3af">20</text>
  <text x="44" y="212" text-anchor="end" font-size="12" fill="#9ca3af">40</text>
  <text x="44" y="156" text-anchor="end" font-size="12" fill="#9ca3af">60</text>
  <text x="44" y="100" text-anchor="end" font-size="12" fill="#9ca3af">80</text>
  <text x="44" y="44" text-anchor="end" font-size="12" fill="#9ca3af">100</text>
  <!-- BabyVision: 34.4 / 52.6 -->
  <rect x="62" y="223.7" width="48" height="96.3" rx="4" fill="#94a3b8"/>
  <rect x="118" y="172.7" width="48" height="147.3" rx="4" fill="#3b82f6"/>
  <text x="86" y="217" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">34.4</text>
  <text x="142" y="166" text-anchor="middle" font-size="12" font-weight="600" fill="#2563eb">52.6</text>
  <text x="114" y="345" text-anchor="middle" font-size="13" fill="#374151">BabyVision</text>
  <!-- CharXiv-RQ: 80.2 / 82.5 -->
  <rect x="190" y="95.4" width="48" height="224.6" rx="4" fill="#94a3b8"/>
  <rect x="246" y="89.0" width="48" height="231.0" rx="4" fill="#3b82f6"/>
  <text x="214" y="89" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">80.2</text>
  <text x="270" y="82" text-anchor="middle" font-size="12" font-weight="600" fill="#2563eb">82.5</text>
  <text x="242" y="345" text-anchor="middle" font-size="13" fill="#374151">CharXiv-RQ</text>
  <!-- MathVision: 86.1 / 94.0 -->
  <rect x="318" y="78.9" width="48" height="241.1" rx="4" fill="#94a3b8"/>
  <rect x="374" y="56.8" width="48" height="263.2" rx="4" fill="#3b82f6"/>
  <text x="342" y="72" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">86.1</text>
  <text x="398" y="50" text-anchor="middle" font-size="12" font-weight="600" fill="#2563eb">94.0</text>
  <text x="370" y="345" text-anchor="middle" font-size="13" fill="#374151">MathVision</text>
  <!-- OmniSpatial: 55.3 / 60.0 -->
  <rect x="446" y="165.2" width="48" height="154.8" rx="4" fill="#94a3b8"/>
  <rect x="502" y="152.0" width="48" height="168.0" rx="4" fill="#3b82f6"/>
  <text x="470" y="159" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">55.3</text>
  <text x="526" y="145" text-anchor="middle" font-size="12" font-weight="600" fill="#2563eb">60.0</text>
  <text x="498" y="345" text-anchor="middle" font-size="13" fill="#374151">OmniSpatial</text>
  <!-- ZeroBench-Sub: 39.8 / 43.7 -->
  <rect x="574" y="208.6" width="48" height="111.4" rx="4" fill="#94a3b8"/>
  <rect x="630" y="197.6" width="48" height="122.4" rx="4" fill="#3b82f6"/>
  <text x="598" y="202" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">39.8</text>
  <text x="654" y="191" text-anchor="middle" font-size="12" font-weight="600" fill="#2563eb">43.7</text>
  <text x="626" y="345" text-anchor="middle" font-size="12" fill="#374151">ZeroBench-Sub</text>
  <!-- Legend -->
  <rect x="240" y="380" width="16" height="16" rx="3" fill="#94a3b8"/>
  <text x="262" y="393" font-size="13" fill="#374151">GPT-5.2</text>
  <rect x="380" y="380" width="16" height="16" rx="3" fill="#3b82f6"/>
  <text x="402" y="393" font-size="13" fill="#374151">SWE-Vision (GPT-5.2)</text>
</svg>
</div>

<!-- Bar Chart: Seed-2.0-Pro vs SWE-Vision -->
<div style="display: flex; justify-content: center; margin: 24px 0;">
<svg viewBox="0 0 720 420" style="max-width: 720px; width: 100%; font-family: system-ui, -apple-system, sans-serif;">
  <text x="360" y="22" text-anchor="middle" font-size="16" font-weight="700" fill="#1f2937">Seed-2.0-Pro vs SWE-Vision</text>
  <line x1="50" y1="320" x2="690" y2="320" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="50" y1="264" x2="690" y2="264" stroke="#f3f4f6" stroke-width="1"/>
  <line x1="50" y1="208" x2="690" y2="208" stroke="#f3f4f6" stroke-width="1"/>
  <line x1="50" y1="152" x2="690" y2="152" stroke="#f3f4f6" stroke-width="1"/>
  <line x1="50" y1="96" x2="690" y2="96" stroke="#f3f4f6" stroke-width="1"/>
  <line x1="50" y1="40" x2="690" y2="40" stroke="#f3f4f6" stroke-width="1"/>
  <text x="44" y="324" text-anchor="end" font-size="12" fill="#9ca3af">0</text>
  <text x="44" y="268" text-anchor="end" font-size="12" fill="#9ca3af">20</text>
  <text x="44" y="212" text-anchor="end" font-size="12" fill="#9ca3af">40</text>
  <text x="44" y="156" text-anchor="end" font-size="12" fill="#9ca3af">60</text>
  <text x="44" y="100" text-anchor="end" font-size="12" fill="#9ca3af">80</text>
  <text x="44" y="44" text-anchor="end" font-size="12" fill="#9ca3af">100</text>
  <!-- BabyVision: 60.6 / 64.4 -->
  <rect x="62" y="150.3" width="48" height="169.7" rx="4" fill="#94a3b8"/>
  <rect x="118" y="139.7" width="48" height="180.3" rx="4" fill="#10b981"/>
  <text x="86" y="144" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">60.6</text>
  <text x="142" y="133" text-anchor="middle" font-size="12" font-weight="600" fill="#059669">64.4</text>
  <text x="114" y="345" text-anchor="middle" font-size="13" fill="#374151">BabyVision</text>
  <!-- CharXiv-RQ: 80.5 / 82.1 -->
  <rect x="190" y="94.6" width="48" height="225.4" rx="4" fill="#94a3b8"/>
  <rect x="246" y="90.1" width="48" height="229.9" rx="4" fill="#10b981"/>
  <text x="214" y="88" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">80.5</text>
  <text x="270" y="84" text-anchor="middle" font-size="12" font-weight="600" fill="#059669">82.1</text>
  <text x="242" y="345" text-anchor="middle" font-size="13" fill="#374151">CharXiv-RQ</text>
  <!-- MathVision: 88.8 / 90.7 -->
  <rect x="318" y="71.4" width="48" height="248.6" rx="4" fill="#94a3b8"/>
  <rect x="374" y="66.0" width="48" height="254.0" rx="4" fill="#10b981"/>
  <text x="342" y="65" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">88.8</text>
  <text x="398" y="59" text-anchor="middle" font-size="12" font-weight="600" fill="#059669">90.7</text>
  <text x="370" y="345" text-anchor="middle" font-size="13" fill="#374151">MathVision</text>
  <!-- OmniSpatial: 67.4 / 69.0 -->
  <rect x="446" y="131.3" width="48" height="188.7" rx="4" fill="#94a3b8"/>
  <rect x="502" y="126.8" width="48" height="193.2" rx="4" fill="#10b981"/>
  <text x="470" y="125" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">67.4</text>
  <text x="526" y="120" text-anchor="middle" font-size="12" font-weight="600" fill="#059669">69.0</text>
  <text x="498" y="345" text-anchor="middle" font-size="13" fill="#374151">OmniSpatial</text>
  <!-- ZeroBench-Sub: 47.6 / 50.1 -->
  <rect x="574" y="186.7" width="48" height="133.3" rx="4" fill="#94a3b8"/>
  <rect x="630" y="179.7" width="48" height="140.3" rx="4" fill="#10b981"/>
  <text x="598" y="180" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">47.6</text>
  <text x="654" y="173" text-anchor="middle" font-size="12" font-weight="600" fill="#059669">50.1</text>
  <text x="626" y="345" text-anchor="middle" font-size="12" fill="#374151">ZeroBench-Sub</text>
  <!-- Legend -->
  <rect x="220" y="380" width="16" height="16" rx="3" fill="#94a3b8"/>
  <text x="242" y="393" font-size="13" fill="#374151">Seed-2.0-Pro</text>
  <rect x="380" y="380" width="16" height="16" rx="3" fill="#10b981"/>
  <text x="402" y="393" font-size="13" fill="#374151">SWE-Vision (Seed-2.0-Pro)</text>
</svg>
</div>

### Analysis

**Consistent improvement across both models and all benchmarks.** SWE-Vision improves over base models on every benchmark tested. With GPT-5.2, gains range from +2.3 to +18.2 points; with Seed-2.0-Pro, gains range from +1.6 to +3.8 points. This consistency across two fundamentally different model families confirms that code execution is a broadly useful capability for visual reasoning, not an artifact of any single model's weaknesses.

**Largest gains on perceptual tasks.** The most dramatic improvement is on BabyVision with GPT-5.2 (+18.2 points, 34.4 → 52.6), which tests basic visual perception — counting, color recognition, and spatial relationships. These are precisely the tasks where code-based analysis (e.g., pixel counting, color histogramming, contour detection) can most directly compensate for the model's visual limitations. Seed-2.0-Pro also sees a meaningful +3.8 point gain on BabyVision (60.6 → 64.4), though the smaller delta reflects its stronger baseline perception.

**Strong mathematical reasoning gains.** MathVision sees the second-largest improvement with GPT-5.2 (+7.9, 86.1 → 94.0), reflecting the model's ability to extract data from visual figures and compute answers programmatically rather than estimating. Even Seed-2.0-Pro, which already scores 88.8, is pushed to 90.7 (+1.9) — demonstrating that code execution continues to help even near the performance ceiling.

**Spatial and comprehensive reasoning.** OmniSpatial (+4.7 for GPT-5.2, +1.6 for Seed-2.0-Pro) and ZeroBench-Sub (+3.9 for GPT-5.2, +2.5 for Seed-2.0-Pro) both see meaningful improvements. Spatial reasoning benefits from the model's ability to measure pixel distances and compute geometric relationships. ZeroBench-Sub, which requires multi-step reasoning across multiple visual skills, benefits from the iterative nature of the notebook — the agent can decompose complex questions into sequential analysis steps.

**Stronger coding models benefit more.** A striking pattern emerges from the dual-model evaluation: GPT-5.2, which has stronger code generation capabilities, consistently sees larger absolute gains from SWE-Vision than Seed-2.0-Pro across all five benchmarks. This is most evident on BabyVision (+18.2 vs +3.8) and MathVision (+7.9 vs +1.9). The result makes intuitive sense — SWE-Vision's power comes from writing and executing code, so a model that produces more correct, targeted programs will extract more value from the framework. This suggests that **investing in a model's coding proficiency yields compounding returns**: not only does the model become a better programmer, it also becomes a better visual reasoner when paired with tool-augmented pipelines like SWE-Vision. 


## Discussions

Several limitations merit discussion:

- **Dependence on the base model's visual reasoning and coding ability.** SWE-Vision's effectiveness is bounded by the LLM's ability to write correct, relevant code and analyze the results correctly. The gap between GPT-5.2 and Seed-2.0-Pro gains may partly reflect differences in coding proficiency, not just visual capability. If the model writes buggy code or chooses inappropriate algorithms, the tool may not help or could even hurt performance.
- **Failure modes.** We observe cases where the agent enters unproductive loops — repeatedly trying similar approaches that fail, or generating overly complex code for simple tasks. The maximum iteration limit provides a safety net, but these cases still consume resources without producing better answers.
- **Errors Introduced by Code.** Programmatic analysis does not always outperform pure LLM visual reasoning. In some cases, writing and executing code to analyze an image can introduce new errors—whether from flawed assumptions, incorrect implementations, or misinterpretation of intermediate results. Therefore, the agent must not only execute code, but also critically evaluate its outputs, revise faulty logic when necessary, and dynamically **reflect** whether coding is beneficial for a given problem. Below, we present an interesting failure case from our experiments that illustrates this challenge.

<div style="text-align: center; margin: 10px 0;">
  <img src="/static/images/SWE-Vision/ErrorCase.png" alt="Error Case" style="max-width: 75%; border-radius: 10px;" />
  <p style="font-size: 12px; color: var(--muted, #6b7280); margin-top: 12px;"> An error case from SWE-Vision (GPT-5.2) illustrates this issue clearly. The task is to count the number of dogs with visible shadows in an image. The agent makes a seemingly clever decision: instead of directly counting shadows, it attempts to count the dogs by detecting their noses as proxies. However, due to the image-processing code, the system incorrectly detects nine noses. This flawed intermediate result propagates through the reasoning chain and ultimately leads to an incorrect final answer of nine.</p>
</div>


### Future Directions

The success of SWE-Vision across multiple model backends points to several promising research directions:

- **Richer tool libraries.** Beyond a general-purpose Python notebook, specialized tools — 3D rendering engines, physics simulators, OCR systems, symbolic math solvers, even CLI and GUI tools — could further expand the model's capabilities, particularly in areas where current gains are smaller.
- **Learning when to use tools.** Currently, the model decides when to use code based on its general reasoning capabilities. Fine-tuning with high-quality human demonstrations or reinforcement learning could optimize this decision, reducing unnecessary code execution on tasks where the base model is already strong.
- **Reflecting on the code execution.** The agent must not only execute code, but also critically evaluate its outputs, revise faulty logic when necessary, and dynamically **reflect** whether coding is beneficial for a given problem.
- **More modalities.** The current image-in/image-out design could be extended to support audio, video, and interactive visualizations, enabling richer feedback loops.
- **Model-adaptive strategies.** Given the finding that the benefit varies across different tasks, future work could explore adaptive execution strategies that allocate more compute budget to tasks where the base model is likely to struggle.
- **Visual agentic data engineering and training.** Unlike traditional data used to train multimodal LLMs, which are basically <question, image, answer> triplets, training visual agentic model requires multimodal interleaved agentic trajectory. It also necessitates an interactive environment to support reinforcement learning, tool use, and  evaluation, enabling the model to learn not just to answer, but to perceive, act, and reflect.

### Conclusion

SWE-Vision demonstrates that vision-language models can substantially enhance their visual reasoning by learning to *write code about what they see*. By embedding a stateful Jupyter notebook within an agentic loop, we allow models to compensate for perceptual limitations through precise, programmatic analysis. The framework is model-agnostic, benchmark-general, and delivers consistent performance gains across all evaluated tasks.

More broadly, this suggests that test-time scaling at the frontier of multimodal AI may not hinge on simply enabling models to see better by allocating more text tokens. Instead, the key may lie in enabling models to *think and act* more effectively with the vision they already possess and a richer multimodal context.


<div class="bv-lb-about" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);">
    <h2>Citation</h2>
    <p>If you find it useful in your research, please kindly cite:</p>
    <pre style="background: #1e293b; color: #e2e8f0; padding: 16px; border-radius: 8px; overflow-x: auto; font-size: 12px;">
@misc{unipat2026swevision,
  title   = {SWE-Vision: A Minimal Agent for Advancing Visual Intelligence},
  author  = {Liang Chen and Haozhe Zhao and Tianyi Ma and Kuan Li},
  year    = {2026},
  url     = {https://unipat.ai/blog/SWE-Vision}, 
}</pre>
</div>