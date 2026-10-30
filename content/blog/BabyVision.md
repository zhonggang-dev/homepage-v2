Title: BabyVision: Visual Reasoning Beyond Language
Date: 2026-01-12
Summary: State-of-the-art MLLMs achieve PhD-level language reasoning but struggle with visual tasks that 3-year-olds solve effortlessly. We introduce BabyVision, a benchmark revealing the infancy of AI vision.
HeaderImage: /static/images/babyvision/baby_logo2.png


<!-- Affiliations: UniPat AI, Peking University, Tsinghua University, UWM -->

<style>
/* ============================================
   BabyVision Blog Styles - Scoped with bv- prefix
   ============================================ */

/* Floating Table of Contents - Notion Style */




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
</style>

<!-- <div style="margin: 24px 0 32px 0; padding: 16px 0; border-top: 1px solid var(--border, #e5e7eb); border-bottom: 1px solid var(--border, #e5e7eb);">
  <p style="margin: 8px 0; font-size: 14px;"><strong>Contributors:</strong> Liang Chen<sup>1,6*</sup>, Weichu Xie<sup>1,6*</sup>, Yiyan Liang<sup>1,6*</sup>, Hongfeng He<sup>1*</sup>, Hans Zhao<sup>1*</sup>, Haiyang Shen<sup>1,6</sup>, Xuanzhong Chen<sup>1,7</sup>, Zhibo Yang<sup>3</sup>, Zhiqi Huang<sup>4</sup>, Yuantao Fan<sup>5</sup>, Guopeng Li<sup>5</sup>, Shuzheng Si<sup>7</sup>, Zefan Cai<sup>8</sup>, Tianyu Liu<sup>6, </sup> Baobao Chang<sup>6</sup>, Kuan Li<sup>1</sup></p>
  <p style="margin: 8px 0; font-size: 14px;"><strong>Affiliations:</strong> <sup>1</sup>UniPat AI, <sup>2</sup>Hongshan Group, <sup>3</sup>Alibaba Group, <sup>4</sup>MoonShot AI, <sup>5</sup>Stepfun, <sup>6</sup>Peking University, <sup>7</sup>Tsinghua University, <sup>8</sup>UWM </p>
</div> -->




<div class="bv-lb-hero">
    <div class="bv-lb-links">
        <a href="/benchmarks/BabyVision" class="bv-lb-link">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/></svg>
            Leaderboard
        </a>
        <a href="https://www.arxiv.org/abs/2601.06521" class="bv-lb-link" target="_blank">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            Paper
        </a>
        <a href="https://github.com/UniPat-AI/BabyVision" class="bv-lb-link" target="_blank">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
        </a>
        <a href="https://huggingface.co/collections/UnipatAI/babyvision" class="bv-lb-link" target="_blank">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            Dataset
        </a>
    </div>
    <div style="margin: 24px 0 32px 0; padding: 16px 0; border-top: 1px solid var(--border, #e5e7eb); border-bottom: 1px solid var(--border, #e5e7eb);">
        <p style="margin: 8px 0; font-size: 14px;"><strong>Contributors:</strong> Liang Chen<sup>1,6*</sup>, Weichu Xie<sup>1,6*</sup>, Yiyan Liang<sup>1,6*</sup>, Hongfeng He<sup>1*</sup>, Hans Zhao<sup>1*</sup>, Zhibo Yang<sup>3</sup>, Zhiqi Huang<sup>4</sup>, Haoning Wu<sup>4</sup>, Haoyu Lu<sup>4</sup>, Y.charles<sup>4</sup>, Yiping Bao<sup>4</sup>, Yuantao Fan<sup>5</sup>, Guopeng Li<sup>5</sup>, Haiyang Shen<sup>1,6</sup>, Xuanzhong Chen<sup>1,7</sup>, Wendong Xu<sup>1</sup>, Shuzheng Si<sup>7</sup>, Zefan Cai<sup>8</sup>, Wenhao Chai<sup>9</sup>, Ziqi Huang<sup>10</sup>, Fangfu Liu<sup>7</sup>, Tianyu Liu<sup>6</sup>, Baobao Chang<sup>6</sup>, Xiaobo Hu<sup>2</sup>, Kaiyuan Chen<sup>2</sup>, Yixin Ren<sup>2</sup>, Yang Liu<sup>2</sup>, Yuan Gong<sup>2</sup>, Kuan Li<sup>1</sup></p>
        <p style="margin: 8px 0; font-size: 14px;"><strong>Affiliations:</strong> <sup>1</sup>UniPat AI, <sup>2</sup>xbench, <sup>3</sup>Alibaba Group, <sup>4</sup>MoonShot AI, <sup>5</sup>Stepfun, <sup>6</sup>Peking University, <sup>7</sup>Tsinghua University, <sup>8</sup>University of Wisconsin–Madison, <sup>9</sup>Princeton University, <sup>10</sup>Nanyang Technological University</p>
        <p style="margin: 8px 0; font-size: 14px;"><strong>Correspondence:</strong> Liang Chen &lt;liangchen@unipat.ai&gt;, Kuan Li &lt;kuanli@unipat.ai&gt;</p>
    </div>



    <div class="bv-joint-logo">
        <img loading="lazy" src="/static/images/babyvision/joint_logo.png" alt="Joint Logo" />
    </div>

    <p class="subtitle">
        Can MLLMs See Like a 3-Year-Old?
    </p>



    
    
</div>


# Introduction


Designing benchmarks is essential for measuring AI progress and guiding future research. Yet benchmarking LLMs is becoming increasingly difficult: today’s models achieve exceptional scores on elite tasks such as Humanity’s Last Exam (HLE) and the International Mathematical Olympiad (IMO), reaching—even surpassing—PhD-level performance in language and textual reasoning.

But do multimodal LLMs (MLLMs) show similar expertise in vision? Meaningful evaluation requires disentangling visual ability from linguistic ability. When a visual task can be fully verbalized, it effectively becomes a language problem, allowing models to lean on strong textual reasoning rather than genuine visual understanding. Robust vision benchmarks must therefore be designed to minimize such linguistic shortcuts.



<div class="bv-scroll-gallery">
<div class="bv-scroll-container">

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_362_input.jpg" alt="Pattern Recognition">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Pattern Recognition</div>
<div class="bv-qa-question">Which of the three graphics below should be filled in the question mark according to the pattern?</div>
<div class="bv-qa-answer">Answer: <strong>the left one</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_431_input.jpg" alt="3D Views">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / 3D Views</div>
<div class="bv-qa-question">Which of the following 4 options is the front view of this 3D figure?</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_434_input.jpg" alt="Overlay Patterns">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Pattern Recognition / Overlay</div>
<div class="bv-qa-question">The image shows two rows of graphics. According to the pattern, which option should be the 3rd graphic in the second row?</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_437_input.jpg" alt="Find the Same">
<div class="bv-qa-content">
<div class="bv-qa-type">Fine-grained Discrimination / Find the Same</div>
<div class="bv-qa-question">In the image, there are five pairs of identical shoe patterns. Find the pairs of numbers for these identical shoes.</div>
<div class="bv-qa-answer">Answer: <strong>1-7, 2-9, 3-10, 4-8, 6-11</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_441_input.jpg" alt="Overlay Patterns">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Pattern Recognition / Overlay</div>
<div class="bv-qa-question">Based on the pattern of the three pictures in the first row, what should the third picture in the second row be?</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_445_input.jpg" alt="Find the Different">
<div class="bv-qa-content">
<div class="bv-qa-type">Fine-grained Discrimination / Find the Different</div>
<div class="bv-qa-question">The image shows 49 tiger patterns arranged in 7 rows and 7 columns. One of them is different. Which row and column is it in?</div>
<div class="bv-qa-answer">Answer: <strong>(4,7)</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_494_input.jpg" alt="2D Pattern Completion">
<div class="bv-qa-content">
<div class="bv-qa-type">Fine-grained Discrimination / Pattern Completion</div>
<div class="bv-qa-question">Choose the appropriate option to fill in the blank so that the image is complete.</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_512_input.jpg" alt="3D Cube">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / 3D Reasoning</div>
<div class="bv-qa-question">The image shows a large cube made of 27 small cubes with a part scooped out. Which option represents the scooped-out part?</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_514_input.jpg" alt="3D Views">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / 3D Views</div>
<div class="bv-qa-question">Which of the following options represents the view of the solid figure from the direction of the arrow?</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_817_input.jpg" alt="Maze">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Tracking / Maze</div>
<div class="bv-qa-question">The image is a maze; find which of the three entrances connects to the exit.</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_826_input.jpg" alt="Find Shadow">
<div class="bv-qa-content">
<div class="bv-qa-type">Fine-grained Discrimination / Shadow Matching</div>
<div class="bv-qa-question">Find all the matching pairs where the pencil pattern corresponds to its shadow pattern.</div>
<div class="bv-qa-answer">Answer: <strong>1-6, 3-4, 5-8, 7-12, 9-10, 11-2</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_3234_input.png" alt="Paper Folding">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / Paper Folding</div>
<div class="bv-qa-question">According to the diagram, after folding and cutting the card, what is the shape of the entire card?</div>
<div class="bv-qa-answer">Answer: <strong>D</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_4330_input.jpg" alt="Line Tracking">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Tracking / Connect the Lines</div>
<div class="bv-qa-question">In the picture, into which color of trash can will "plastic cup", "newspaper", and "apple core" go respectively?</div>
<div class="bv-qa-answer">Answer: <strong>A-blue, B-yellow, C-green</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_4552_input.png" alt="Count Patterns">
<div class="bv-qa-content">
<div class="bv-qa-type">Fine-grained Discrimination / Counting</div>
<div class="bv-qa-question">How many black squares are there in the picture?</div>
<div class="bv-qa-answer">Answer: <strong>54</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_4597_input.png" alt="Count 3D Blocks">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / Count 3D Blocks</div>
<div class="bv-qa-question">The image shows a 3D shape made of stacked cubes. None are suspended. How many cubes are there at least?</div>
<div class="bv-qa-answer">Answer: <strong>13</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_4616_input.png" alt="Count 3D Blocks">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / Count 3D Blocks</div>
<div class="bv-qa-question">The image shows a large cube composed of 3*3*3 small cubes, with some missing. How many cubes are there at most?</div>
<div class="bv-qa-answer">Answer: <strong>23</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_4759_input.png" alt="Cube Unfold">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / 3D Cube Unfold</div>
<div class="bv-qa-question">Merge the square flat figures to form a cubic 3D figure. Which options conform to the cubic figure?</div>
<div class="bv-qa-answer">Answer: <strong>B, C</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_5142_input.png" alt="Maze">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Tracking / Maze</div>
<div class="bv-qa-question">How many small frog patterns will the large frog pass through along the shortest path to reach the pond?</div>
<div class="bv-qa-answer">Answer: <strong>52</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_5249_input.png" alt="Letter Recognition">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Tracking / Letter Recognition</div>
<div class="bv-qa-question">Starting from the letters in the yellow area, follow the lines to form 3 complete English words.</div>
<div class="bv-qa-answer">Answer: <strong>Daddy, draws, doors</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_6509_input.jpg" alt="Number Recognition">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Tracking / Number Recognition</div>
<div class="bv-qa-question">Observe the image and provide the numbers corresponding to blue, green, red, and orange respectively.</div>
<div class="bv-qa-answer">Answer: <strong>4, 6, 5, 5</strong></div>
</div>
</div>

<!-- Duplicated cards for seamless infinite scroll -->
<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_362_input.jpg" alt="Pattern Recognition">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Pattern Recognition</div>
<div class="bv-qa-question">Which of the three graphics below should be filled in the question mark according to the pattern?</div>
<div class="bv-qa-answer">Answer: <strong>the left one</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_431_input.jpg" alt="3D Views">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / 3D Views</div>
<div class="bv-qa-question">Which of the following 4 options is the front view of this 3D figure?</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_434_input.jpg" alt="Overlay Patterns">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Pattern Recognition / Overlay</div>
<div class="bv-qa-question">The image shows two rows of graphics. According to the pattern, which option should be the 3rd graphic in the second row?</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_437_input.jpg" alt="Find the Same">
<div class="bv-qa-content">
<div class="bv-qa-type">Fine-grained Discrimination / Find the Same</div>
<div class="bv-qa-question">In the image, there are five pairs of identical shoe patterns. Find the pairs of numbers for these identical shoes.</div>
<div class="bv-qa-answer">Answer: <strong>1-7, 2-9, 3-10, 4-8, 6-11</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_441_input.jpg" alt="Overlay Patterns">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Pattern Recognition / Overlay</div>
<div class="bv-qa-question">Based on the pattern of the three pictures in the first row, what should the third picture in the second row be?</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_445_input.jpg" alt="Find the Different">
<div class="bv-qa-content">
<div class="bv-qa-type">Fine-grained Discrimination / Find the Different</div>
<div class="bv-qa-question">The image shows 49 tiger patterns arranged in 7 rows and 7 columns. One of them is different. Which row and column is it in?</div>
<div class="bv-qa-answer">Answer: <strong>(4,7)</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_494_input.jpg" alt="2D Pattern Completion">
<div class="bv-qa-content">
<div class="bv-qa-type">Fine-grained Discrimination / Pattern Completion</div>
<div class="bv-qa-question">Choose the appropriate option to fill in the blank so that the image is complete.</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_512_input.jpg" alt="3D Cube">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / 3D Reasoning</div>
<div class="bv-qa-question">The image shows a large cube made of 27 small cubes with a part scooped out. Which option represents the scooped-out part?</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_514_input.jpg" alt="3D Views">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / 3D Views</div>
<div class="bv-qa-question">Which of the following options represents the view of the solid figure from the direction of the arrow?</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_817_input.jpg" alt="Maze">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Tracking / Maze</div>
<div class="bv-qa-question">The image is a maze; find which of the three entrances connects to the exit.</div>
<div class="bv-qa-answer">Answer: <strong>A</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_826_input.jpg" alt="Find Shadow">
<div class="bv-qa-content">
<div class="bv-qa-type">Fine-grained Discrimination / Shadow Matching</div>
<div class="bv-qa-question">Find all the matching pairs where the pencil pattern corresponds to its shadow pattern.</div>
<div class="bv-qa-answer">Answer: <strong>1-6, 3-4, 5-8, 7-12, 9-10, 11-2</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_3234_input.png" alt="Paper Folding">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / Paper Folding</div>
<div class="bv-qa-question">According to the diagram, after folding and cutting the card, what is the shape of the entire card?</div>
<div class="bv-qa-answer">Answer: <strong>D</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_4330_input.jpg" alt="Line Tracking">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Tracking / Connect the Lines</div>
<div class="bv-qa-question">In the picture, into which color of trash can will "plastic cup", "newspaper", and "apple core" go respectively?</div>
<div class="bv-qa-answer">Answer: <strong>A-blue, B-yellow, C-green</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_4552_input.png" alt="Count Patterns">
<div class="bv-qa-content">
<div class="bv-qa-type">Fine-grained Discrimination / Counting</div>
<div class="bv-qa-question">How many black squares are there in the picture?</div>
<div class="bv-qa-answer">Answer: <strong>54</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_4597_input.png" alt="Count 3D Blocks">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / Count 3D Blocks</div>
<div class="bv-qa-question">The image shows a 3D shape made of stacked cubes. None are suspended. How many cubes are there at least?</div>
<div class="bv-qa-answer">Answer: <strong>13</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_4616_input.png" alt="Count 3D Blocks">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / Count 3D Blocks</div>
<div class="bv-qa-question">The image shows a large cube composed of 3*3*3 small cubes, with some missing. How many cubes are there at most?</div>
<div class="bv-qa-answer">Answer: <strong>23</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_4759_input.png" alt="Cube Unfold">
<div class="bv-qa-content">
<div class="bv-qa-type">Spatial Perception / 3D Cube Unfold</div>
<div class="bv-qa-question">Merge the square flat figures to form a cubic 3D figure. Which options conform to the cubic figure?</div>
<div class="bv-qa-answer">Answer: <strong>B, C</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_5142_input.png" alt="Maze">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Tracking / Maze</div>
<div class="bv-qa-question">How many small frog patterns will the large frog pass through along the shortest path to reach the pond?</div>
<div class="bv-qa-answer">Answer: <strong>52</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_5249_input.png" alt="Letter Recognition">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Tracking / Letter Recognition</div>
<div class="bv-qa-question">Starting from the letters in the yellow area, follow the lines to form 3 complete English words.</div>
<div class="bv-qa-answer">Answer: <strong>Daddy, draws, doors</strong></div>
</div>
</div>

<div class="bv-qa-card">
<img src="/static/images/babyvision/gallery_6509_input.jpg" alt="Number Recognition">
<div class="bv-qa-content">
<div class="bv-qa-type">Visual Tracking / Number Recognition</div>
<div class="bv-qa-question">Observe the image and provide the numbers corresponding to blue, green, red, and orange respectively.</div>
<div class="bv-qa-answer">Answer: <strong>4, 6, 5, 5</strong></div>
</div>
</div>

</div>

<div class="bv-scroll-gallery-caption">20 Tasks (BabyVision-Mini) we use to evaluate visual reasoning—among humans of different ages and state-of-the-art AI</div>
</div>


To rigorously assess models’ pure visual reasoning ability and compare it with human performance, we curate 20 vision-centric tasks—collectively referred to as BabyVision-Mini. We then evaluate models alongside children aged 3–12. The results are striking: even the strongest models perform at approximately the level of a three-year-old child. Gemini 3-Pro-Preview still lags typical six-year-old performance by roughly 20%, and other MLLMs fall below the average abilities of a three-year-old.

<div style="text-align: center; margin: 32px 0;" id="figure1">
  <img loading="lazy" src="/static/images/babyvision/bars.jpg" alt="BabyVision: Performance comparison between MLLMs and human children" style="max-width: 100%; border-radius: 10px;" />
  <p style="font-size: 12px; color: var(--muted, #6b7280); margin-top: 12px;">Pilot Study Result on BabyVision-Mini Dataset. We report the average pass@1 accuracy for 3 random runs for MLLMs and the average accuracy among human testers of different ages.</p>
</div>


This striking gap compels us to ask: why do models that master PhD-level language struggle with 3-year-old-level vision? Specifically, which fundamental components of visual understanding are absent in current MLLMs? In response to these questions, we introduce BabyVision, a multi-modal benchmark at **the starting point of human visual reasoning.** 

<!-- According to cognitive science literature, human visual understanding emerges remarkably early in life—well before the acquisition of language or formal symbolic reasoning. Within the first months, infants can already discriminate shapes and textures, track moving objects, infer occlusion and depth, and form expectations about future physical events. -->

In the construction of the full benchmark, we split vision-centric reasoning into four core categories—Fine-grained Discrimination, Visual Tracking, Spatial Perception, and Visual Pattern Recognition—which together comprise **22** basic subtypes, each targeting a specific fundamental visual capability. We then employ a careful and rigorous data curation pipeline—including data collection, filtering, annotation, and cross-checking—to construct **388** questions spanning a wide diversity of visual reasoning tasks.

- **Fine-grained Discrimination** — Detecting subtle visual differences (8 subtypes)
- **Visual Tracking** — Following paths, lines, and trajectories (5 subtypes)
- **Spatial Perception** — Understanding 3D structures and relationships (5 subtypes)
- **Visual Pattern Recognition** — Identifying logical and geometric patterns (4 subtypes)

<div style="text-align: center; margin: 24px 0;">
  <img loading="lazy" src="/static/images/babyvision/full_table.jpg" alt="BabyVision-Full Results Table" style="max-width: 100%; border-radius: 10px;" />
</div>

Our philosophy is not to stump the model, but to measure the "atomic capabilities" of a model's visual reasoning—those fundamental tasks that are intuitive to humans but serve as the building blocks of visual intelligence.


# Quantitative Results

We test BabyVision on leading open-source and proprietary MLLMs and human baselines. We use two versions: BabyVision-Mini (20 questions) and the full BabyVision (388 questions across 22 atomic types). 

Children aged 3–12 (20+ per group, one school, consent obtained) take the Mini, while 16 adults complete the full benchmark.

Together, the evaluations ask: How old does the MLLM look? and Which visual primitives are missing?

## BabyVision-Mini: Comparing Young Humans and Models

As our pilot study, BabyVision-Mini is built for meaningful developmental comparison. Its tasks are strictly vision-centric, minimizing language and prior-knowledge demands so that scores reflect visual reasoning rather than text-based inference. Its small size also makes it practical to complete within a single class period for young children.

Under this lens, the gap is striking as shown in the comparison figure (<a href="#figure1">see Figure&nbsp;1</a>). Most frontier MLLMs perform well below the average 3-year-old, despite their PhD-level results on language benchmarks. Gemini3-Pro-Preview is the notable outlier—the only model consistently above the Age-3 band—yet it still lags typical 6-year-olds by ~20 points.

This highlights a core limitation: the issue is not solving “hard problems,” but struggling with pre-language visual primitives—the early perceptual and spatial abilities humans acquire before language becomes the main reasoning tool.



## BabyVision-Full: A Full Capability Profile of MLLMs

In the full and fine-grained evaluaiton, models' best performance is still far from human-level (94.1%). ​Across closed-source systems, ​Gemini3-Pro-Preview leads overall (49.7%)​, followed by ​GPT-5.2 (34.4%)​ and Doubao-Seed-1.8 (30.2%)​, with other models substantially lower (e.g., ​Qwen3-VL-Plus ​19.2%​, Grok-4 16.2%, ​Claude-4.5-Opus 14.2%​).

<div style="text-align: center; margin: 24px 0;">
  <img loading="lazy" src="/static/images/babyvision/radar1.png" alt="Performance Radar Chart" style="max-width: 70%; border-radius: 10px;" />
</div>

These gaps relative to humans are consistent across categories: performance drops appear in all four families, not just one. This suggests current models lack foundational visual competencies overall—a systemic limitation, not an isolated weakness.

<div style="text-align: center; margin: 24px 0;" id="figure-finegrain">
  <img loading="lazy" src="/static/images/babyvision/finegrain_tables.png" alt="Performance Table" style="max-width: 100%; border-radius: 10px;" />
  <p style="font-size: 12px; color: var(--muted, #6b7280); margin-top: 12px;"><strong>Performance (Pass@1) of Closed Source MLLMs on BabyVision.</strong> The best results for each question type are marked in <strong>bold</strong>. Reported values represent the average Pass@1 accuracy across three random runs, accompanied by the standard deviation. All models are in thinking mode with highest reasoning budget.</p>
</div>



## Gemini3-Pro vs. the Rest

Gemini3-Pro-Preview not only leads the overall leaderboard but is also strong across all four families, suggesting a more genuinely visual backbone than competing models. GPT-5.2 ranks second overall and leads in Visual Pattern Recognition, but trails Gemini on more perception-heavy tasks—especially fine-grained discrimination and visual tracking.

For open-source models, the best performer (Qwen3VL-235B-Thinking) reaches 22.2% overall. Two trends emerge. **First, test-time “thinking” yields measurable gains:** within Qwen3VL, the Thinking variant generally outperforms the Instruct variant (e.g., 22.2% vs. 19.5% at 235B), indicating that explicit intermediate reasoning can partly offset visual uncertainty once the signal is extracted. **Second, scaling helps but saturates quickly:** even the largest open model remains far below the best closed-source system, implying that more parameters or longer chains alone are insufficient—what’s missing likely relates to data and training paradigms that foster visual rather than text-dominant reasoning.


In short, today’s MLLMs pair strong language reasoning with immature visual foundations. **BabyVision** quantifies this mismatch and offers fine-grained diagnostics to guide progress toward truly grounded visual reasoning.





# The "Unspeakable" Challenge in Visual Reasoning

Why do MLLMs fail at these seemingly simple tasks? The key insight is that these problems are <strong>"unspeakable"</strong>—they cannot be fully described in language without information loss. When models try to reason through text, they lose critical visual details.


**The core problem:** MLLMs try to compress visual reasoning into language tokens, but these tasks require direct perceptual processing that cannot be faithfully represented in text. We summarize 4 classic vision-centric challenges for current MLLMs observed during our evaluation.

<!-- Challenge 1: Observing Non-Verbal Details + Case 2: Hexagon Puzzle -->
<div class="bv-challenge-merged">
<div class="bv-challenge-merged-header">
<h3 id="challenge-1-observing-non-verbal-details">Challenge 1: Observing Non-Verbal Details</h3>
</div>
<div class="bv-challenge-merged-body">
<div class="bv-challenge-merged-image">
<img loading="lazy" src="/static/images/babyvision/mllm_case2_hexagon.png" alt="Hexagon Puzzle">
<div class="bv-challenge-merged-caption">
<div class="bv-q-label">Fine-grained Discrimination / Pattern Completion</div>
<div class="bv-question-text">Find the missing piece that fits into the empty white space within the large hexagonal structure.</div>
<div class="bv-answer-text">Answer: <strong>B</strong></div>
</div>
</div>
<div class="bv-challenge-merged-analysis">
<p>A pervasive weakness we observe across BabyVision is the <strong>loss of fine, non-verbal detail</strong>. When a solution depends on subtle visual cues—such as a tiny offset, a specific boundary curve, or a single-pixel difference—MLLMs often treat distinct choices as interchangeable. The issue is not logical difficulty, but a lack of <strong>high-fidelity perception</strong>.</p>
<p>Humans typically solve such tasks almost instantly through <strong>direct shape matching</strong>: mentally translating and rotating each candidate to check boundary alignment. This is a largely perceptual operation—continuous, parallel, and geometry-driven—without needing to name or describe anything.</p>
<p>MLLMs, by contrast, rely on <strong>implicit verbalization</strong>: (1) Verbalize the shape ("a hook at the top, two legs at the bottom"), (2) Reduce to coarse features (approximate counts, gross topology), (3) Compare candidates in language space. This compression becomes an <strong>information bottleneck</strong>—once fine structure is flattened into words, micro-differences become indistinguishable.</p>
<p><strong>Core weakness:</strong> MLLMs struggle to preserve and manipulate fine spatial structure end-to-end. Even young children can reliably judge "fit" versus "mismatch" through direct visual comparison—this is a <em>perception problem</em>, not a reasoning problem.</p>
</div>
</div>
<div class="bv-challenge-merged-gemini">
<div class="bv-challenge-merged-gemini-header">
<span class="bv-model-badge">Gemini3-Pro-Preview</span>
<div class="bv-wrong-note">Wrong observations are highlighted in red</div>
</div>
<div class="bv-thinking">The goal is to find the puzzle piece that fits into the empty white space within the large hexagonal structure. Let's break down the geometric constraints of the "hole" to determine the correct piece.

1. <strong>The Bottom "Island":</strong>

Looking at the bottom center of the empty space, there is a single orange hexagon belonging to the main structure that points upward. This creates an obstruction in the middle of the base.

* <strong>Constraint:</strong> The missing piece must have an indentation or arch at the bottom to straddle this "island" block. It needs two "legs" separated by a gap.
* <strong>Observation:</strong> All four options (A, B, C, and D) feature this split-leg design, so we must look at other features.

2. <strong>The Right Flank (The "Neck"):</strong>

Examine the right side boundary of the hole. Start from the very top peak and move down the right edge. Shortly below the top, the orange wall juts <em>inward</em> (to the left).

* <strong>Constraint:</strong> The missing piece cannot have a solid block immediately to the bottom-right of its top "head" hexagon. It needs a "neck" or indentation on the right side to accommodate the wall's protrusion.
<div class="bv-wrong-observation">
* <strong>Evaluation:</strong>
  * <strong>Option A:</strong> Has a hexagon sticking out to the right below the top. This would collide with the wall.
  * <strong>Option B:</strong> Also has a "shoulder" block sticking out to the right. This would collide.
  * <strong>Option C:</strong> Has a straight vertical right edge, which places a block where the wall protrudes. This would likely collide.
  * <strong>Option D:</strong> Below the top hexagon, the right side is empty (creating a narrow "neck"). This perfectly accommodates the jutting wall on the right.</div>

3. <strong>The Left Flank (The "Arm"):</strong>

Examine the left side boundary of the hole. There is a distinct "C"-shaped cutout in the wall. Specifically, below the top section, the wall recedes to the left, creating a deep pocket or void.

* <strong>Constraint:</strong> The missing piece must have a protrusion or "arm" extending to the left to fill this pocket.
<div class="bv-wrong-observation">
* <strong>Evaluation:</strong>
  * <strong>Option C:</strong> Is flat on the left side and lacks this protrusion.
  * <strong>Option B:</strong> Is relatively compact and doesn't have a distinct arm reaching out far enough to the left compared to its vertical axis.
  * <strong>Option D:</strong> Features a prominent hexagon sticking out to the left, which fits the "pocket" in the hole's left wall perfectly.</div>

<strong>Conclusion:</strong>

* <strong>Option D</strong> matches all the specific contours of the empty space.
  * It has the single top hexagon ("Head").
  * It has the gap on the right side ("Neck") to avoid the wall protrusion.
  * It has the protrusion on the left side ("Arm") to fill the wall pocket.
  * It has the split legs at the bottom to fit over the base block.

Therefore, the correct piece is <strong>D</strong>.</div>
<div class="bv-result-row">
<div><span style="color: var(--muted);">Model Answer:</span> <span class="bv-wrong">D</span></div>
<div><span style="color: var(--muted);">Ground Truth:</span> <span class="bv-correct">B</span></div>
</div>
</div>
</div>



<!-- Challenge 2: Manifold Understanding + Case 1: Trash Bins -->
<div class="bv-challenge-merged">
<div class="bv-challenge-merged-header">
<h3 id="challenge-2-manifold-understanding">Challenge 2: Manifold Understanding</h3>
</div>
<div class="bv-challenge-merged-body">
<div class="bv-challenge-merged-image">
<img loading="lazy" src="/static/images/babyvision/mllm_case1_trashbin.png" alt="Trash Bin Maze">
<div class="bv-challenge-merged-caption">
<div class="bv-q-label">Visual Tracking / Connect the Lines</div>
<div class="bv-question-text">Into which color bin would "plastic cup," " newspaper," and "apple core" go respectively in the picture? ("plastic cup," "newspaper," and "apple core" are A, B, C respectively; answer format is like: A-yellow, B-blue)</div>
<div class="bv-answer-text">Answer: <strong>A-blue, B-yellow, C-green</strong></div>
</div>
</div>
<div class="bv-challenge-merged-analysis">
<p>Another failure mode we observe is <strong>loss of manifold identity</strong>: MLLMs struggle to maintain <strong>continuous identity</strong> of even a thin curve. When the answer is encoded in <em>connectivity</em>—not in object semantics—models often degrade from "following a line" to "guessing an endpoint."</p>
<p>Humans solve such tasks by <strong>visual tracking</strong>: they "lock onto" one curve and continuously follow it through crossings until it terminates. This is an early-acquired visual routine—the perceptual system performs contour integration and maintains "which line I am on" through intersections almost automatically, without naming intermediate steps.</p>
<p>For MLLMs, the core difficulty is that the answer is encoded in the <strong>connectivity of a 1D manifold embedded in 2D</strong>—a continuous curve that winds, overlaps, and self-intersects. The model tries to translate the curve into discrete instructions (left/right/up/down), but crossings create combinatorial branching. Without a faithful, persistent representation of the curve, the model easily "switches tracks" after a crossing—an error visually obvious to humans but difficult to detect once compressed into words.</p>
<p><strong>Core weakness:</strong> MLLMs do not reliably maintain perceptual identity across extended spatial trajectories. Success depends on robust contour integration, continuity-preserving tracking, and resistance to interference from nearby curves—capabilities humans acquire effortlessly in early childhood.</p>
</div>
</div>
<div class="bv-challenge-merged-gemini">
<div class="bv-challenge-merged-gemini-header">
<span class="bv-model-badge">Gemini3-Pro-Preview</span>
<div class="bv-wrong-note">Wrong observations are highlighted in red</div>
</div>
<div class="bv-thinking">Based on a careful tracing of the lines in the maze:

1. <strong>Plastic Cup (Item A):</strong>
   • Start at the dot below the plastic cup.
<div class="bv-wrong-observation">
   • Follow the line to the left. It curves down and forms the outermost path on the left side of the maze.</div>
   • It continues down to the bottom-left corner and turns right.
   • It runs horizontally along the very bottom edge of the puzzle, passing underneath the connections for the yellow and blue bins.
   • Finally, it curves up to connect to the dot above the green bin on the right.
   • Result: <strong>A-green</strong>

2. <strong>Apple Core (Item C):</strong>
   • Start at the dot below the apple core.
   • The line moves left, traversing the top edge of the maze.
   • It reaches the top-left corner and turns down, running vertically parallel to the cup's line (it is the second line from the left).
   • At the bottom of this vertical drop, it curves into the blue bin in the middle.
   • Result: <strong>C-blue</strong>

3. <strong>Old Newspaper (Item B):</strong>
   • Start at the dot below the newspaper.
   • The line goes left and immediately winds downwards through the center of the maze.
   • By elimination (and verifying the trace), it connects to the remaining bin. Tracing from the yellow bin (leftmost bin) upwards: the line goes right, loops up and left across the middle, then up and right to connect to the newspaper.
   • Result: <strong>B-yellow</strong>

Answer:
\boxed{A-green, B-yellow, C-blue}</div>
<div class="bv-result-row">
<div><span style="color: var(--muted);">Model Answer:</span> <span class="bv-wrong">A-green, B-yellow, C-blue</span></div>
<div><span style="color: var(--muted);">Ground Truth:</span> <span class="bv-correct">A-blue, B-yellow, C-green</span></div>
</div>
</div>
</div>



<!-- Challenge 3: Spatial Imagination + Case 7: 3D View -->
<div class="bv-challenge-merged">
<div class="bv-challenge-merged-header">
<h3 id="challenge-3-spatial-imagination">Challenge 3: Spatial Imagination</h3>
</div>
<div class="bv-challenge-merged-body">
<div class="bv-challenge-merged-image">
<img loading="lazy" src="/static/images/babyvision/mllm_case7_3dview.png" alt="3D View">
<div class="bv-challenge-merged-caption">
<div class="bv-q-label">Spatial Perception / 3D Views</div>
<div class="bv-question-text">Which is the correct view when looking at the 3D structure from the direction indicated by the arrow?</div>
<div class="bv-answer-text">Answer: <strong>A</strong></div>
</div>
</div>
<div class="bv-challenge-merged-analysis">
<p>A third pervasive bottleneck we observe is <strong>spatial imagination</strong>: the ability to construct a stable internal 3D representation from a 2D depiction, then mentally transform it (change viewpoint, project to silhouette, infer hidden volume) while preserving structural consistency. This skill is fundamental to human vision—children develop it early through play with blocks, drawings, and everyday navigation.</p>
<p>Humans solve such tasks by a brief act of <strong>imagination</strong>: they mentally view the object from the indicated direction and simply count or compare. Importantly, this is not a verbal process—people do not enumerate every element in language; they just hold the image in their mind and reason directly.</p>
<p>MLLMs, by contrast, translate the visual scene into a language summary before reasoning: (1) Approximate the viewpoint ("arrow points from lower right"), (2) Describe the object in words ("Analyze the Structure's Dimensions (Grid and Heights)"), (3) Guess the 2D features from coarse descriptions. The breakdown is that <strong>narration is not a faithful spatial state</strong>—once the precise image is compressed into a vague text summary, the model makes predictable errors: missing hidden blocks, miscounting layers, or applying wrong 3D projections.</p>
<p><strong>Core weakness:</strong> MLLMs do not reliably "imagine" the 3D object. Spatial imagination—the ability to preserve structure while transforming it—is an ability humans acquire early through perception and interaction, but current MLLMs still rely on language logic, which is a poor substitute for simply holding a shape in mind.</p>
</div>
</div>
<div class="bv-challenge-merged-gemini">
<div class="bv-challenge-merged-gemini-header">
<span class="bv-model-badge">Gemini3-Pro-Preview</span>
<div class="bv-wrong-note">Wrong observations are highlighted in red</div>
</div>
<div class="bv-thinking">To determine the correct view, let's analyze the 3D structure and the viewing direction indicated by the arrow.

<strong>1. Analyze the Viewing Direction:</strong>

The red arrow originates from the bottom right and points towards the object. In technical drawing conventions for isometric projections:

• This represents the <strong>Right Side View</strong>.
• We need to project the object onto a 2D plane perpendicular to this viewing direction.
• In this projected view:
  • The <strong>horizontal axis</strong> will represent the depth of the object, running from the "front" corner (closest to the viewer's left side) to the "back-right" corner (closest to the viewer's right side).
  • The <strong>vertical axis</strong> will represent the height of the block stacks.
  • Essentially, for every column from left to right in the view, we see the maximum height of the blocks in that "slice" of the object.

<strong>2. Analyze the Structure's Dimensions (Grid and Heights):</strong>

Let's break down the object into a grid of columns. Based on the visual cues (vertical lines and proportions):

• The grid appears to be <strong>4 units wide</strong> along the viewing axis. Let's call these Column 1 to Column 4, from Left to Right in our 2D view.
• Let's estimate heights in units of single blocks:
  • <strong>The Tower:</strong> The tallest part is the "L-shaped" wall at the back-left corner. Let's assign this a height of <strong>4 units</strong>. This corresponds to the tallest columns in the options.
  • <strong>The Seat:</strong> The flat platform in front of the tower appears to be one unit lower than the tower top. Let's assign this a height of <strong>3 units</strong>. (Alternatively, if the drop is 2 units, the seat is height 2, but let's look at the steps).
  • <strong>The Step:</strong> The rightmost column is one step lower than the seat. If the seat is 3, this is <strong>2 units</strong>.

<strong>3. Determine the Height of Each Projected Column:</strong>

• <strong>Column 1 (Leftmost in view):</strong>
  • This corresponds to the "front" slice of the object (the corner closest to the bottom of the image).
  • Visible in this slice is the front of the seat stack (<strong>Height 3</strong>).
  • However, directly <strong>behind</strong> this stack (from the arrow's perspective) stands the tall tower.
  • Since the tower is taller (<strong>Height 4</strong>), it will be visible rising above the seat.
  • Therefore, the silhouette for this column will have a height of <strong>4</strong>.
• <strong>Column 2:</strong>
  • This corresponds to the next slice to the right.
  • Similar to the first column, there is a seat stack in front (<strong>Height 3</strong>).
  • Behind it, the tower continues (the tower is 2 blocks wide). The tower's height is <strong>4</strong>.
  • Therefore, the silhouette for this column will also have a height of <strong>4</strong>.
• <strong>Column 3:</strong>
  • This corresponds to the next slice.
  • Here we see the seat stack (<strong>Height 3</strong>).
  • Is there anything behind it? Looking at the inner corner of the "L", the tall tower wall ends after the second column. There is no tall wall behind column 3.
  • Therefore, the maximum visible height is just the seat itself, which is <strong>3</strong>.
• <strong>Column 4 (Rightmost in view):</strong>
  • This corresponds to the far right slice.
  • This stack is clearly stepped down from the main seat level.
<div class="bv-wrong-observation">
  • Its height is <strong>2</strong>.
  • There is nothing taller behind it.
  • Therefore, the silhouette height is <strong>2</strong>.</div>

<strong>4. Match with Options:</strong>

We are looking for a 2D histogram-like shape with column heights (from left to right): <strong>4, 4, 3, 2</strong>.

• <strong>Option A:</strong> Shows relative heights High, High, Low, High (4, 4, 2, 4). The last column is tall, which contradicts the object's shape (the right end is the lowest point).
• <strong>Option B:</strong> Shows relative heights Medium, High, Low, Low (3, 4, 2, 2). The first column is shown as shorter than the second. This is incorrect because the tall tower stands behind the first column, making its silhouette full height.
• <strong>Option C:</strong> Shows relative heights High, High, Medium, Low (4, 4, 3, 2). This matches our analysis perfectly: two tall columns for the tower section, stepping down to the seat, and stepping down again to the end.

Therefore, the correct view is <strong>C</strong>.</div>
<div class="bv-result-row">
<div><span style="color: var(--muted);">Model Answer:</span> <span class="bv-wrong">C</span></div>
<div><span style="color: var(--muted);">Ground Truth:</span> <span class="bv-correct">A</span></div>
</div>
</div>
</div>


<!-- Challenge 4: Visual Pattern Induction + Case 9: Pattern Completion -->
<div class="bv-challenge-merged">
<div class="bv-challenge-merged-header">
<h3 id="challenge-4-visual-pattern-induction">Challenge 4: Visual Pattern Induction</h3>
</div>
<div class="bv-challenge-merged-body">
<div class="bv-challenge-merged-image">
<img loading="lazy" src="/static/images/babyvision/mllm_case9_pattern.png" alt="Pattern Completion">
<div class="bv-challenge-merged-caption">
<div class="bv-q-label">Pattern Recognition / Visual Reasoning</div>
<div class="bv-question-text">Among the three given options, choose the most suitable one to fill in the question mark, so that it shows a certain pattern.</div>
<div class="bv-answer-text">Answer: <strong>C</strong></div>
</div>
</div>
<div class="bv-challenge-merged-analysis">
<p>A fourth challenge we repeatedly observe is <strong>visual pattern induction</strong>: the ability to abstract a generalized transformation rule from a few visual examples and apply it to a new input. Humans typically handle such problems by comparing visual example pairs directly, constructing a small causal graph: <em>which shape contains which</em>, <em>which element is the frame</em>, and how these roles are reassigned from input to output.</p>
<p>The key human ability is to see <strong>relational rules</strong> (what changed) rather than <strong>object attributes</strong> (what is there). Whether the pattern involves rotation, swap, reflection, or containment—humans extract the abstract transformation and apply it to novel inputs. The specific shapes, colors, or positions do not matter; only their <em>roles</em> in the transformation do.</p>
<p>MLLMs, by contrast, approach such problems through <strong>attribute counting</strong> rather than relational mapping. Instead of seeing an abstract operation, they rely on semantic description: describe the source, describe the target, attempt to bridge via text. This approach fails because the model often hallucinates rules based on surface features (e.g., "...two green, two brown, and four orange segments") rather than structural logic. The model focuses on objects as fixed entities rather than elements in a transformation sequence.</p>
<p><strong>Core weakness:</strong> MLLMs often mix up <strong>appearance</strong> with <strong>structure</strong>. Pattern induction requires ignoring specific visual elements to see the abstract pattern. Success in these tasks requires <strong>abstract reasoning over visual relations</strong>—a step beyond simple recognition that remains a significant hurdle for current architectures.</p>
</div>
</div>
<div class="bv-challenge-merged-gemini">
<div class="bv-challenge-merged-gemini-header">
<span class="bv-model-badge">Qwen3-VL-Plus</span>
<div class="bv-wrong-note">Wrong observations are highlighted in red</div>
</div>
<div class="bv-thinking">To determine the correct answer, we analyze the pattern in the sequence of three octagons provided at the top of the image. <span class="bv-wrong-observation" style="display: inline; padding: 2px 6px;"> Each octagon is composed of 8 equal segments, with two green, two brown, and four orange segments.</span>

<strong>Step 1: Identify the Movement Pattern</strong>

We focus on the <strong>brown segments</strong>, which are always two adjacent segments. Observing their positions across the three figures:

• <strong>First octagon</strong>: Brown segments are on the <strong>right side</strong> (positions 3–4).  
• <strong>Second octagon</strong>: Brown segments have moved to the <strong>bottom</strong> (positions 5–6).  
• <strong>Third octagon</strong>: Brown segments are now on the <strong>left side</strong> (positions 7–8).  

This indicates that the <strong>brown block moves two positions counterclockwise</strong> with each step.

<strong>Step 2: Predict the Next Position</strong>

Following this pattern:

• From <strong>right (3–4)</strong> → <strong>bottom (5–6)</strong> → <strong>left (7–8)</strong>,  
• The next logical position is <strong>top (1–2)</strong>.  

So, the <strong>next figure should have the brown segments at the top</strong> (two adjacent segments).

<strong>Step 3: Evaluate the Options</strong>

Now, we examine the answer choices to find the one where <strong>the brown segments are at the top</strong> (i.e., two adjacent segments at the top of the octagon):

• <strong>Option A</strong>: Brown segments are at the <strong>top right</strong> and <strong>bottom</strong> — not at the top.  
• <strong>Option B</strong>: Brown segments are <strong>at the top</strong> (two adjacent), and green is on the left — this matches the expected pattern.  
• <strong>Option C</strong>: Brown segments are at <span class="bv-wrong-observation" style="display: inline; padding: 2px 6px;"> the <strong>top left</strong> and <strong>bottom</strong></span> — again, not fully at the top.  

Only <strong>Option B</strong> has the <strong>brown segments correctly placed at the top</strong>, consistent with the observed movement pattern.

<strong>Conclusion</strong>

The pattern shows the brown segments moving <strong>two positions counterclockwise</strong> in each step. Based on this, the next figure should have the brown segments at the <strong>top</strong>, which is only true for <strong>Option B</strong>.

<strong>[B]</strong></div>
<div class="bv-result-row">
<div><span style="color: var(--muted);">Model Answer:</span> <span class="bv-wrong">B</span></div>
<div><span style="color: var(--muted);">Ground Truth:</span> <span class="bv-correct">C</span></div>
</div>
</div>
</div>



# Insights from Training: How to Achieve Better Result on BabyVision.

We have identified large performance gaps in BabyVision, not only among human and frontier models, but also across closed- and open-source models. We are further interested in: **how can we develop stronger visual reasoning skills and achieve better scores on BabyVision with open models?**

As Reinforcement Learning with Verifiable Rewards (RLVR) has recently demonstrated strong gains in language-reasoning performance for LLMs, we conduct a preliminary study to investigate whether RLVR can similarly improve visual abilities measured by BabyVision. We use Qwen3-VL-8B-Thinking as the base model and apply RLVR fine-tuning. For data collection, we adopt a BabyVision-style pipeline but draw from larger image sources and remove duplicates, yielding 1,400 training examples. The collected data covers all four major BabyVision task families, yet its difficulty distribution is not completely aligned with BabyVision: the model achieves 34.2% inital accuracy on the RLVR training set, but only 13.1% on BabyVision, when evaluated with the same base model. 

We fine-tune Qwen3-VL-8B-Thinking for 450 steps using the GRPO algorithm. We observe that RLVR is effective on the collected training dataset: both training accuracy and held-out test accuracy consistently improve over the course of training.

<div style="text-align: center; margin: 24px 0;">
  <img loading="lazy" src="/static/images/babyvision/rl_curves.png" alt="Train_Curves" style="max-width: 100%; border-radius: 10px;" />
</div>


The BabyVision performance of Qwen3-VL-8B-Thinking before and after RL fine-tuning is reported in the following table. The model achieves a +4.8-point overall accuracy improvement after RLVR training. We also observe consistent gains across most task subtypes, with the sole exception of visual tracking, for which RL fine-tuning yields little to even negative improvement. We hypothesize that this is because visual tracking is the least amenable to verbalization; since RLVR primarily enhances performance by encouraging longer and more structured “thinking-token” reasoning, it provides less benefit on tasks that depend on continuous perceptual tracking rather than language-mediated reasoning.

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<thead>
<tr style="border-bottom: 2px solid #333;">
<th style="padding: 12px; text-align: left; border-bottom: 2px solid #333;">Category</th>
<th style="padding: 12px; text-align: center; border-bottom: 2px solid #333;">Before RL</th>
<th style="padding: 12px; text-align: center; border-bottom: 2px solid #333;">After RL</th>
<th style="padding: 12px; text-align: center; border-bottom: 2px solid #333;">Improvement</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom: 1px solid #ddd;">
<td style="padding: 12px; font-weight: bold;">Overall</td>
<td style="padding: 12px; text-align: center;">13.1</td>
<td style="padding: 12px; text-align: center;">17.9</td>
<td style="padding: 12px; text-align: center; color: #22c55e; font-weight: bold;">+4.8</td>
</tr>
<tr style="border-bottom: 1px solid #ddd;">
<td style="padding: 12px;">Fine-grained Discrimination</td>
<td style="padding: 12px; text-align: center;">12.7</td>
<td style="padding: 12px; text-align: center;">19.4</td>
<td style="padding: 12px; text-align: center; color: #22c55e; font-weight: bold;">+6.8</td>
</tr>
<tr style="border-bottom: 1px solid #ddd;">
<td style="padding: 12px;">Visual Tracking</td>
<td style="padding: 12px; text-align: center;">10.8</td>
<td style="padding: 12px; text-align: center;">9.6</td>
<td style="padding: 12px; text-align: center; color: #ef4444; font-weight: bold;">-1.2</td>
</tr>
<tr style="border-bottom: 1px solid #ddd;">
<td style="padding: 12px;">Spatial Perception</td>
<td style="padding: 12px; text-align: center;">15.0</td>
<td style="padding: 12px; text-align: center;">20.9</td>
<td style="padding: 12px; text-align: center; color: #22c55e; font-weight: bold;">+5.9</td>
</tr>
<tr>
<td style="padding: 12px;">Visual Pattern Recognition</td>
<td style="padding: 12px; text-align: center;">15.0</td>
<td style="padding: 12px; text-align: center;">20.9</td>
<td style="padding: 12px; text-align: center; color: #22c55e; font-weight: bold;">+5.9</td>
</tr>
</tbody>
</table>










# Beyond VLMs: Can Generation Help Reasoning?


If text-based reasoning proves insufficient, a natural question arises: can visual generation bridge this gap? Rather than describing solutions in words, could models <strong>draw</strong> the answer—mirroring how children intuitively point to, trace, or mark solutions when reasoning visually?


Motivated by this insight, we introduce **BabyVision-Gen**, a generative extension of BabyVision that evaluates whether image- and video-generation models can perform visual reasoning through visual outputs. BabyVision-Gen comprises 280 questions re-annotated from the original benchmark to support generation-based evaluation, where correctness can be directly and unambiguously verified by comparing the model-generated outputs with **human-drawn ground-truth solutions**. We also develop an automatic evaluation tool for generation models that achieves a **0.96 agreement with human evaluators**.

## Generation Models Show a Promising Direction

Naturally, generative models introduce a new *test-time scaling* dimension for visual reasoning, enabling explicit image manipulation, intermediate markups, and hint drawing during the reasoning process. We evaluate BabyVision-Gen on several state-of-the-art image and video generation models, including ​**Nano-Banana-Pro**​, **GPT-1.5-Image**, ​**Qwen-Image-Edit-2511**​, ​**Veo-3**​, and ​**Sora-2**​.


<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<thead>
<tr style="border-bottom: 2px solid #333;">
<th style="padding: 12px; text-align: left; border-bottom: 2px solid #333;">Category</th>
<th style="padding: 12px; text-align: center; border-bottom: 2px solid #333;">Nano-Banana-Pro</th>
<th style="padding: 12px; text-align: center; border-bottom: 2px solid #333;">GPT-1.5-Image</th>
<th style="padding: 12px; text-align: center; border-bottom: 2px solid #333;">Qwen-Image-Edit-2511</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom: 1px solid #ddd;">
<td style="padding: 12px; font-weight: bold;">Overall</td>
<td style="padding: 12px; text-align: center; font-weight: bold;">18.3</td>
<td style="padding: 12px; text-align: center;">9.8</td>
<td style="padding: 12px; text-align: center;">4.8</td>
</tr>
<tr style="border-bottom: 1px solid #ddd;">
<td style="padding: 12px;">Fine-grained Discrimination</td>
<td style="padding: 12px; text-align: center; font-weight: bold;">24.5</td>
<td style="padding: 12px; text-align: center;">9.6</td>
<td style="padding: 12px; text-align: center;">4.7</td>
</tr>
<tr style="border-bottom: 1px solid #ddd;">
<td style="padding: 12px;">Visual Tracking</td>
<td style="padding: 12px; text-align: center; font-weight: bold;">6.7</td>
<td style="padding: 12px; text-align: center;">2.4</td>
<td style="padding: 12px; text-align: center;">0.0</td>
</tr>
<tr style="border-bottom: 1px solid #ddd;">
<td style="padding: 12px;">Spatial Perception</td>
<td style="padding: 12px; text-align: center; font-weight: bold;">13.0</td>
<td style="padding: 12px; text-align: center;">12.4</td>
<td style="padding: 12px; text-align: center;">7.3</td>
</tr>
<tr>
<td style="padding: 12px;">Visual Pattern Recognition</td>
<td style="padding: 12px; text-align: center; font-weight: bold;">22.8</td>
<td style="padding: 12px; text-align: center;">16.7</td>
<td style="padding: 12px; text-align: center;">7.9</td>
</tr>
</tbody>
</table>


Our results reveal that video generation could serve as a paradigm for multimodal reasoning on tasks that remain challenging for vision–language models (VLMs) as illustrated below. However, despite these encouraging behaviors, current generative models still struggle to consistently arrive at fully correct solutions in most cases as shown in the performance table above. Nevertheless, these findings point to a compelling direction similar to ["Video models are zero-shot
learners and reasoners"](https://video-zero-shot.github.io/): ​**video generation models hold strong potential to evolve into well-rounded multimodal reasoners**​, especially when visual reasoning is grounded in explicit visual manipulation rather than language alone.


<div style="margin: 24px 0; padding: 16px; background: var(--pill, #f1f5f9); border-radius: 10px;">
<p style="margin-bottom: 12px;"><strong>Task:</strong> Draw a red line to trace the complete line extending from the top left figure.</p>
<div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start;">
<div style="flex: 1; min-width: 300px;">
<p style="font-size: 12px; color: var(--muted);">Sora-2:</p>
<video preload="none" controls muted playsinline style="width: 100%; border-radius: 8px;">
<source src="/static/images/babyvision/task770_sora2.mp4" type="video/mp4">
</video>
</div>
<div style="flex: 1; min-width: 300px;">
<p style="font-size: 12px; color: var(--muted);">NanoBanana-Pro:</p>
<img loading="lazy" src="/static/images/babyvision/nano_example.png" alt="NanoBanana-Pro output" style="width: 100%; border-radius: 8px;" />
</div>
</div>
<p style="font-size: 12px; color: var(--muted); margin-top: 12px;">From the generated outputs in the visual tracking task, we observe that these two models exhibit the most human-like visual thinking processes, explicitly drawing trajectories along the paths in the image. However, despite this alignment with human behavior, their generations still contain noticeable errors, indicating that further alignment is required.</p>
</div>

Nevertheless, these findings point to a clear and compelling direction: **video generation models hold strong potential to evolve into well-rounded multimodal reasoners**, especially when visual reasoning is grounded in explicit visual manipulation rather than language alone.

## Cases for Generative Visual Reasoning

Below we compare multiple generation models on BabyVision-Gen tasks:

<div class="bv-gen-section">

<!-- Case 1: task984 -->
<div class="bv-gen-case-new">
<div class="bv-gen-header">
<div class="bv-type">Fine-grained Discrimination / Find the Different</div>
<div class="bv-question">Which pattern in the figure differs in shape from the others? (H vs 4)</div>
<div class="bv-prompt">Put a red circle on the unique element in the picture</div>
</div>
<div class="bv-gen-content">
<div class="bv-gen-models-grid">
<div class="bv-gen-model-cell input-cell">
<div class="label">Input</div>
<img loading="lazy" src="/static/images/babyvision/task984_input.png" alt="Input">
</div>
<div class="bv-gen-model-cell gt-cell">
<div class="label">Ground Truth <span class="bv-gen-badge gt">GT</span></div>
<img loading="lazy" src="/static/images/babyvision/task984_gt.png" alt="Ground Truth">
</div>
<div class="bv-gen-model-cell">
<div class="label">NanoBanana-Pro <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task984_nano.png" alt="NanoBanana-Pro">
</div>
<div class="bv-gen-model-cell">
<div class="label">Qwen-Image-Edit-2511 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task984_qwen.png" alt="Qwen-Image-Edit-2511">
</div>
</div>
<div class="bv-gen-models-grid row-2">
<div class="bv-gen-model-cell">
<div class="label">GPT-Image-1.5 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task984_gpt.png" alt="GPT-Image-1.5">
</div>
<div class="bv-gen-model-cell">
<div class="label">Sora-2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task984_sora2.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Veo3 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task984_veo3.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Wan2.2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task984_wan.mp4" type="video/mp4">
</video>
</div>
</div>
</div>
</div>

<!-- Case 2: task817 -->
<div class="bv-gen-case-new">
<div class="bv-gen-header">
<div class="bv-type">Visual Tracking / Maze</div>
<div class="bv-question">The diagram is a maze; find which entrance connects to the exit.</div>
<div class="bv-prompt">The entrance at A is the right one to the exit. Please draw in red lines showing the way out of the maze from the entrance to the exit.</div>
</div>
<div class="bv-gen-content">
<div class="bv-gen-models-grid">
<div class="bv-gen-model-cell input-cell">
<div class="label">Input</div>
<img loading="lazy" src="/static/images/babyvision/task817_input.jpg" alt="Input">
</div>
<div class="bv-gen-model-cell gt-cell">
<div class="label">Ground Truth <span class="bv-gen-badge gt">GT</span></div>
<img loading="lazy" src="/static/images/babyvision/task817_gt.png" alt="Ground Truth">
</div>
<div class="bv-gen-model-cell">
<div class="label">NanoBanana-Pro <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task817_nano.png" alt="NanoBanana-Pro">
</div>
<div class="bv-gen-model-cell">
<div class="label">Qwen-Image-Edit-2511 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task817_qwen.png" alt="Qwen-Image-Edit-2511">
</div>
</div>
<div class="bv-gen-models-grid row-2">
<div class="bv-gen-model-cell">
<div class="label">GPT-Image-1.5 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task817_gpt.png" alt="GPT-Image-1.5">
</div>
<div class="bv-gen-model-cell">
<div class="label">Sora-2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task817_sora2.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Veo3 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task817_veo3.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Wan2.2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task817_wan.mp4" type="video/mp4">
</video>
</div>
</div>
</div>
</div>

<!-- Case 3: task770 (Visual Tracking / Connect the Lines) -->
<div class="bv-gen-case-new">
<div class="bv-gen-header">
<div class="bv-type">Visual Tracking / Connect the Lines</div>
<div class="bv-question">Three animal patterns are above, three environmental patterns below. Which animal goes where?</div>
<div class="bv-prompt">Draw a red line to trace the complete line extending from the top left figure.</div>
</div>
<div class="bv-gen-content">
<div class="bv-gen-models-grid">
<div class="bv-gen-model-cell input-cell">
<div class="label">Input</div>
<img loading="lazy" src="/static/images/babyvision/task770_input.png" alt="Input">
</div>
<div class="bv-gen-model-cell gt-cell">
<div class="label">Ground Truth <span class="bv-gen-badge gt">GT</span></div>
<img loading="lazy" src="/static/images/babyvision/task770_gt.png" alt="Ground Truth">
</div>
<div class="bv-gen-model-cell">
<div class="label">NanoBanana-Pro <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task770_nano.png" alt="NanoBanana-Pro">
</div>
<div class="bv-gen-model-cell">
<div class="label">Qwen-Image-Edit-2511 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task770_qwen.png" alt="Qwen-Image-Edit-2511">
</div>
</div>
<div class="bv-gen-models-grid row-2">
<div class="bv-gen-model-cell">
<div class="label">GPT-Image-1.5 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task770_gpt.jpg" alt="GPT-Image-1.5">
</div>
<div class="bv-gen-model-cell">
<div class="label">Sora-2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task770_sora2.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Veo3 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task770_veo3.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Wan2.2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task770_wan.mp4" type="video/mp4">
</video>
</div>
</div>
</div>
</div>

<!-- Collapsible Extra Examples Section -->
<details class="bv-extra-examples">
<summary class="bv-extra-examples-toggle">
More Examples
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
</summary>
<div class="bv-extra-examples-content">

<!-- Extra Case 1: task520 (Visual Tracking / Recognize Numbers) -->
<div class="bv-gen-case-new">
<div class="bv-gen-header">
<div class="bv-type">Visual Tracking / Recognize Numbers</div>
<div class="bv-question">Four uppercase letters or Arabic numerals in different colors. Which are they?</div>
<div class="bv-prompt">The four blanks below are traced by different colors. Fill in the blanks in black respectively with the letter or number who has the same color as the blanks indicate.</div>
</div>
<div class="bv-gen-content">
<div class="bv-gen-models-grid">
<div class="bv-gen-model-cell input-cell">
<div class="label">Input</div>
<img loading="lazy" src="/static/images/babyvision/task520_input.jpg" alt="Input">
</div>
<div class="bv-gen-model-cell gt-cell">
<div class="label">Ground Truth <span class="bv-gen-badge gt">GT</span></div>
<img loading="lazy" src="/static/images/babyvision/task520_gt.png" alt="Ground Truth">
</div>
<div class="bv-gen-model-cell">
<div class="label">NanoBanana-Pro <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task520_nano.png" alt="NanoBanana-Pro">
</div>
<div class="bv-gen-model-cell">
<div class="label">Qwen-Image-Edit-2511 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task520_qwen.png" alt="Qwen-Image-Edit-2511">
</div>
</div>
<div class="bv-gen-models-grid row-2">
<div class="bv-gen-model-cell">
<div class="label">GPT-Image-1.5 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task520_gpt.jpg" alt="GPT-Image-1.5">
</div>
<div class="bv-gen-model-cell">
<div class="label">Sora-2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task520_sora2.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Veo3 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task520_veo3.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Wan2.2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task520_wan.mp4" type="video/mp4">
</video>
</div>
</div>
</div>
</div>

<!-- Extra Case 2: task5432 (Spatial Perception / 3D Views) -->
<div class="bv-gen-case-new">
<div class="bv-gen-header">
<div class="bv-type">Spatial Perception / 3D Views</div>
<div class="bv-question">From the three options, select the top view of the solid figure.</div>
<div class="bv-prompt">Put a red circle on the option corresponding to the top view.</div>
</div>
<div class="bv-gen-content">
<div class="bv-gen-models-grid">
<div class="bv-gen-model-cell input-cell">
<div class="label">Input</div>
<img loading="lazy" src="/static/images/babyvision/task5432_input.png" alt="Input">
</div>
<div class="bv-gen-model-cell gt-cell">
<div class="label">Ground Truth <span class="bv-gen-badge gt">GT</span></div>
<img loading="lazy" src="/static/images/babyvision/task5432_gt.png" alt="Ground Truth">
</div>
<div class="bv-gen-model-cell">
<div class="label">NanoBanana-Pro <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task5432_nano.png" alt="NanoBanana-Pro">
</div>
<div class="bv-gen-model-cell">
<div class="label">Qwen-Image-Edit-2511 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task5432_qwen.png" alt="Qwen-Image-Edit-2511">
</div>
</div>
<div class="bv-gen-models-grid row-2">
<div class="bv-gen-model-cell">
<div class="label">GPT-Image-1.5 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task5432_gpt.jpg" alt="GPT-Image-1.5">
</div>
<div class="bv-gen-model-cell">
<div class="label">Sora-2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task5432_sora2.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Veo3 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task5432_veo3.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Wan2.2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task5432_wan.mp4" type="video/mp4">
</video>
</div>
</div>
</div>
</div>

<!-- Extra Case 3: task6280 -->
<div class="bv-gen-case-new">
<div class="bv-gen-header">
<div class="bv-type">Spatial Perception / 3D Views</div>
<div class="bv-question">Connect the three-dimensional figure with its corresponding top view.</div>
<div class="bv-prompt">Use red lines to connect the solid figures at the top to their corresponding top views at the bottom with lines respectively.</div>
</div>
<div class="bv-gen-content">
<div class="bv-gen-models-grid">
<div class="bv-gen-model-cell input-cell">
<div class="label">Input</div>
<img loading="lazy" src="/static/images/babyvision/task6280_input.png" alt="Input">
</div>
<div class="bv-gen-model-cell gt-cell">
<div class="label">Ground Truth <span class="bv-gen-badge gt">GT</span></div>
<img loading="lazy" src="/static/images/babyvision/task6280_gt.png" alt="Ground Truth">
</div>
<div class="bv-gen-model-cell">
<div class="label">NanoBanana-Pro <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task6280_nano.png" alt="NanoBanana-Pro">
</div>
<div class="bv-gen-model-cell">
<div class="label">Qwen-Image-Edit-2511 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task6280_qwen.png" alt="Qwen-Image-Edit-2511">
</div>
</div>
<div class="bv-gen-models-grid row-2">
<div class="bv-gen-model-cell">
<div class="label">GPT-Image-1.5 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task6280_gpt.jpg" alt="GPT-Image-1.5">
</div>
<div class="bv-gen-model-cell">
<div class="label">Sora-2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task6280_sora2.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Veo3 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task6280_veo3.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Wan2.2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task6280_wan.mp4" type="video/mp4">
</video>
</div>
</div>
</div>
</div>

<!-- Case 7: task8330 -->
<div class="bv-gen-case-new">
<div class="bv-gen-header">
<div class="bv-type">Visual Tracking / Metro Map</div>
<div class="bv-question">How many stations minimum must be passed through when traveling from one station to another?</div>
<div class="bv-prompt">Use a black line to trace the shortest path between the two stations.</div>
</div>
<div class="bv-gen-content">
<div class="bv-gen-models-grid">
<div class="bv-gen-model-cell input-cell">
<div class="label">Input</div>
<img loading="lazy" src="/static/images/babyvision/task8330_input.jpg" alt="Input">
</div>
<div class="bv-gen-model-cell gt-cell">
<div class="label">Ground Truth <span class="bv-gen-badge gt">GT</span></div>
<img loading="lazy" src="/static/images/babyvision/task8330_gt.png" alt="Ground Truth">
</div>
<div class="bv-gen-model-cell">
<div class="label">NanoBanana-Pro <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task8330_nano.png" alt="NanoBanana-Pro">
</div>
<div class="bv-gen-model-cell">
<div class="label">Qwen-Image-Edit-2511 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task8330_qwen.png" alt="Qwen-Image-Edit-2511">
</div>
</div>
<div class="bv-gen-models-grid row-2">
<div class="bv-gen-model-cell">
<div class="label">GPT-Image-1.5 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task8330_gpt.jpg" alt="GPT-Image-1.5">
</div>
<div class="bv-gen-model-cell">
<div class="label">Sora-2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task8330_sora2.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Veo3 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task8330_veo3.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Wan2.2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task8330_wan.mp4" type="video/mp4">
</video>
</div>
</div>
</div>
</div>

<!-- Case 8: task4996 -->
<div class="bv-gen-case-new">
<div class="bv-gen-header">
<div class="bv-type">Fine-grained Discrimination / Find the Shadow</div>
<div class="bv-question">Find the shadow that exactly matches the middle penguin pattern.</div>
<div class="bv-prompt">Put a red circle on the shadow that exactly matches the penguin.</div>
</div>
<div class="bv-gen-content">
<div class="bv-gen-models-grid">
<div class="bv-gen-model-cell input-cell">
<div class="label">Input</div>
<img loading="lazy" src="/static/images/babyvision/task4996_input.png" alt="Input">
</div>
<div class="bv-gen-model-cell gt-cell">
<div class="label">Ground Truth <span class="bv-gen-badge gt">GT</span></div>
<img loading="lazy" src="/static/images/babyvision/task4996_gt.png" alt="Ground Truth">
</div>
<div class="bv-gen-model-cell">
<div class="label">NanoBanana-Pro <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task4996_nano.png" alt="NanoBanana-Pro">
</div>
<div class="bv-gen-model-cell">
<div class="label">Qwen-Image-Edit-2511 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task4996_qwen.png" alt="Qwen-Image-Edit-2511">
</div>
</div>
<div class="bv-gen-models-grid row-2">
<div class="bv-gen-model-cell">
<div class="label">GPT-Image-1.5 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task4996_gpt.jpg" alt="GPT-Image-1.5">
</div>
<div class="bv-gen-model-cell">
<div class="label">Sora-2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task4996_sora2.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Veo3 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task4996_veo3.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Wan2.2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task4996_wan.mp4" type="video/mp4">
</video>
</div>
</div>
</div>
</div>

<!-- Case 9: task637 -->
<div class="bv-gen-case-new">
<div class="bv-gen-header">
<div class="bv-type">Fine-grained Discrimination / 2D Pattern Completion</div>
<div class="bv-question">From the given three options, select the most appropriate one to fill in the blank.</div>
<div class="bv-prompt">Put a red circle on the option that completes the pattern.</div>
</div>
<div class="bv-gen-content">
<div class="bv-gen-models-grid">
<div class="bv-gen-model-cell input-cell">
<div class="label">Input</div>
<img loading="lazy" src="/static/images/babyvision/task637_input.jpg" alt="Input">
</div>
<div class="bv-gen-model-cell gt-cell">
<div class="label">Ground Truth <span class="bv-gen-badge gt">GT</span></div>
<img loading="lazy" src="/static/images/babyvision/task637_gt.png" alt="Ground Truth">
</div>
<div class="bv-gen-model-cell">
<div class="label">NanoBanana-Pro <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task637_nano.png" alt="NanoBanana-Pro">
</div>
<div class="bv-gen-model-cell">
<div class="label">Qwen-Image-Edit-2511 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task637_qwen.png" alt="Qwen-Image-Edit-2511">
</div>
</div>
<div class="bv-gen-models-grid row-2">
<div class="bv-gen-model-cell">
<div class="label">GPT-Image-1.5 <span class="bv-gen-badge image">Image</span></div>
<img loading="lazy" src="/static/images/babyvision/task637_gpt.jpg" alt="GPT-Image-1.5">
</div>
<div class="bv-gen-model-cell">
<div class="label">Sora-2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task637_sora2.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Veo3 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task637_veo3.mp4" type="video/mp4">
</video>
</div>
<div class="bv-gen-model-cell">
<div class="label">Wan2.2 <span class="bv-gen-badge video">Video</span></div>
<video preload="none" controls muted playsinline>
<source src="/static/images/babyvision/task637_wan.mp4" type="video/mp4">
</video>
</div>
</div>
</div>
</div>

</div>
</details>

</div>

# Conclusion

BabyVision reveals a striking truth: **currently MLLMs do not have robust foundational visual competence even compared to children.** Despite their impressive performance on language-heavy and expert-level benchmarks, today's MLLMs still struggle with the pre-linguistic visual primitives that humans acquire in early childhood.

By decomposing visual intelligence into atomic capabilities and benchmarking them independently of language, BabyVision exposes where current models fall short and why scaling language alone is insufficient. Our results further suggest that visual generation—reasoning by drawing, tracing, and manipulating images—offers a promising path forward, partially recovering capabilities that text-based reasoning cannot express.

These atomic visual abilities are also critical for embodied AI: it is difficult to imagine a robot with visual competence below that of a three-year-old being able to reliably assist humans in the physical world. BabyVision provides a diagnostic lens and a research direction: to advance multimodal intelligence, future models must rebuild vision from the ground up rather than linguistic shortcuts.


# Acknowledgements

We would like to thank Xiaotao Gu (Zhipu AI), Junyang Lin (Alibaba Group), Shuai Bai (Alibaba Group) and Shuhuai Ren (Xiaomi MiMo) for their valuable discussions and insightful feedbacks throughout this project.


<div class="bv-lb-about" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);">
    <h2>Citation</h2>
    <p>For details of BabyVision, please read our paper. If you find it useful in your research, please kindly cite:</p>
    <pre style="background: #1e293b; color: #e2e8f0; padding: 16px; border-radius: 8px; overflow-x: auto; font-size: 12px;">
@misc{chen2026babyvisionvisualreasoninglanguage,
      title={BabyVision: Visual Reasoning Beyond Language}, 
      author={Liang Chen and Weichu Xie and Yiyan Liang and Hongfeng He and Hans Zhao and Zhibo Yang and Zhiqi Huang and Haoning Wu and Haoyu Lu and Y. charles and Yiping Bao and Yuantao Fan and Guopeng Li and Haiyang Shen and Xuanzhong Chen and Wendong Xu and Shuzheng Si and Zefan Cai and Wenhao Chai and Ziqi Huang and Fangfu Liu and Tianyu Liu and Baobao Chang and Xiaobo Hu and Kaiyuan Chen and Yixin Ren and Yang Liu and Yuan Gong and Kuan Li},
      year={2026},
      eprint={2601.06521},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2601.06521}, 
}</pre>
</div>


<!-- Floating Table of Contents -->
<nav class="bv-toc" id="bv-toc">
<div class="bv-toc-toggle" id="bv-toc-toggle" title="Toggle Table of Contents">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
<div class="bv-toc-title">On This Page</div>
<div class="bv-toc-progress"><div class="bv-toc-progress-bar" id="bv-progress"></div></div>
<ul class="bv-toc-list">
<li class="bv-toc-item"><a href="#introduction" class="bv-toc-link bv-toc-h1">Introduction</a></li>
<li class="bv-toc-item"><a href="#quantitative-results" class="bv-toc-link bv-toc-h1">Quantitative Results</a></li>
<li class="bv-toc-item"><a href="#the-unspeakable-challenge-in-visual-reasoning" class="bv-toc-link bv-toc-h1">The "Unspeakable" Challenge</a></li>
<li class="bv-toc-item"><a href="#insights-from-training-how-to-achieve-better-result-on-babyvision" class="bv-toc-link bv-toc-h1">Insights from Training Experiments</a></li>
<li class="bv-toc-item"><a href="#beyond-vlms-can-generation-help-reasoning" class="bv-toc-link bv-toc-h1">Can Generation Help Reasoning?</a></li>
<li class="bv-toc-item"><a href="#conclusion" class="bv-toc-link bv-toc-h1">Conclusion</a></li>
<li class="bv-toc-item"><a href="#acknowledgements" class="bv-toc-link bv-toc-h1">Acknowledgements</a></li>
</ul>
</nav>

<script>
(function() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

    function initAll() {
        initTOC();
        initDragScroll();
        initLightbox();
    }

    // ============================================
    // Table of Contents with Collapse
    // ============================================
    function initTOC() {
        const toc = document.getElementById('bv-toc');
        const progressBar = document.getElementById('bv-progress');
        const tocLinks = document.querySelectorAll('.bv-toc-link');
        const tocToggle = document.getElementById('bv-toc-toggle');

        if (!toc || !progressBar || tocLinks.length === 0) return;

        // TOC Toggle functionality
        if (tocToggle) {
            tocToggle.addEventListener('click', function() {
                toc.classList.toggle('collapsed');
            });
        }

        // Dynamically adjust TOC size and position based on window size
        function adjustTOCSize() {
            if (!toc) return;
            
            const containerMaxWidth = 980;
            const containerWidth = Math.min(containerMaxWidth, window.innerWidth * 0.9);
            const availableSpace = (window.innerWidth - containerWidth) / 2;
            
            if (availableSpace < 100) {
                // Not enough space, hide TOC
                toc.style.display = 'none';
            } else {
                toc.style.display = '';
                // Calculate optimal width (leave at least 20px margin)
                const optimalWidth = Math.min(200, availableSpace - 20);
                toc.style.width = Math.max(160, optimalWidth) + 'px';
                toc.style.right = Math.max(5, availableSpace - optimalWidth - 15) + 'px';
            }
        }

        // Adjust on load and resize
        adjustTOCSize();
        window.addEventListener('resize', adjustTOCSize);

        // Get all section headings
        const headings = [];
        tocLinks.forEach(link => {
            const id = link.getAttribute('href').substring(1);
            const heading = document.getElementById(id);
            if (heading) {
                headings.push({ id, element: heading, link });
            }
        });

        // Update active section on scroll
        function updateActiveSection() {
            const scrollPos = window.scrollY + 150;

            // Update progress bar
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min((window.scrollY / docHeight) * 100, 100);
            progressBar.style.width = progress + '%';

            // Find current section
            let currentSection = null;
            for (let i = headings.length - 1; i >= 0; i--) {
                if (headings[i].element.offsetTop <= scrollPos) {
                    currentSection = headings[i];
                    break;
                }
            }

            // Update active class
            tocLinks.forEach(link => link.classList.remove('active'));
            if (currentSection) {
                currentSection.link.classList.add('active');
            }
        }

        // Smooth scroll to section on click
        tocLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const id = this.getAttribute('href').substring(1);
                const target = document.getElementById(id);
                if (target) {
                    const offset = target.offsetTop - 100;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
            });
        });

        // Throttled scroll handler
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateActiveSection();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Initial update
        updateActiveSection();
    }

    // ============================================
    // Drag-to-Scroll Gallery
    // ============================================
    function initDragScroll() {
        const galleries = document.querySelectorAll('.bv-scroll-gallery');

        galleries.forEach(gallery => {
            const container = gallery.querySelector('.bv-scroll-container');
            if (!container) return;

            let isDown = false;
            let startX;
            let scrollLeft;
            let animationWasPaused = false;

            gallery.addEventListener('mousedown', (e) => {
                isDown = true;
                gallery.classList.add('dragging');
                startX = e.pageX - gallery.offsetLeft;
                scrollLeft = gallery.scrollLeft;
                // Store animation state and pause
                animationWasPaused = container.style.animationPlayState === 'paused';
                container.style.animationPlayState = 'paused';
            });

            gallery.addEventListener('mouseleave', () => {
                if (isDown) {
                    isDown = false;
                    gallery.classList.remove('dragging');
                }
            });

            gallery.addEventListener('mouseup', () => {
                isDown = false;
                gallery.classList.remove('dragging');
                // Resume animation after a short delay if it wasn't paused before
                if (!animationWasPaused) {
                    setTimeout(() => {
                        if (!gallery.matches(':hover')) {
                            container.style.animationPlayState = 'running';
                        }
                    }, 2000);
                }
            });

            gallery.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - gallery.offsetLeft;
                const walk = (x - startX) * 2;
                gallery.scrollLeft = scrollLeft - walk;
            });

            // Touch support
            gallery.addEventListener('touchstart', (e) => {
                isDown = true;
                startX = e.touches[0].pageX - gallery.offsetLeft;
                scrollLeft = gallery.scrollLeft;
                container.style.animationPlayState = 'paused';
            });

            gallery.addEventListener('touchend', () => {
                isDown = false;
                setTimeout(() => {
                    container.style.animationPlayState = 'running';
                }, 2000);
            });

            gallery.addEventListener('touchmove', (e) => {
                if (!isDown) return;
                const x = e.touches[0].pageX - gallery.offsetLeft;
                const walk = (x - startX) * 2;
                gallery.scrollLeft = scrollLeft - walk;
            });
        });
    }

    // ============================================
    // Lightbox for Images and Videos
    // ============================================
    function initLightbox() {
        // Create lightbox element
        const lightbox = document.createElement('div');
        lightbox.className = 'bv-lightbox';
        lightbox.id = 'bv-lightbox';
        lightbox.innerHTML = `
            <div class="bv-lightbox-content">
                <span class="bv-lightbox-close">&times;</span>
                <div id="bv-lightbox-media"></div>
                <div class="bv-lightbox-caption" id="bv-lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(lightbox);

        const mediaContainer = document.getElementById('bv-lightbox-media');
        const captionEl = document.getElementById('bv-lightbox-caption');
        const closeBtn = lightbox.querySelector('.bv-lightbox-close');

        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            mediaContainer.innerHTML = '';
        }

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });

        // Make all images and videos in gen-cases zoomable
        const zoomableImages = document.querySelectorAll('.bv-gen-model-cell img, .bv-gen-cell img, .bv-challenge-merged-image img, .bv-mllm-input img');
        const zoomableVideos = document.querySelectorAll('.bv-gen-model-cell video, .bv-gen-cell video');

        zoomableImages.forEach(img => {
            img.classList.add('bv-zoomable');
            img.addEventListener('click', () => {
                const newImg = document.createElement('img');
                newImg.src = img.src;
                mediaContainer.innerHTML = '';
                mediaContainer.appendChild(newImg);
                captionEl.textContent = img.alt || '';
                lightbox.classList.add('active');
            });
        });

        zoomableVideos.forEach(video => {
            video.classList.add('bv-zoomable');
            video.addEventListener('click', (e) => {
                // Don't trigger lightbox if clicking on video controls
                if (e.target.tagName === 'VIDEO') {
                    const newVideo = document.createElement('video');
                    newVideo.controls = true;
                    newVideo.autoplay = true;
                    newVideo.src = video.querySelector('source')?.src || video.src;
                    mediaContainer.innerHTML = '';
                    mediaContainer.appendChild(newVideo);
                    captionEl.textContent = video.closest('.bv-gen-model-cell')?.querySelector('.label')?.textContent || '';
                    lightbox.classList.add('active');
                }
            });
        });
    }
})();
</script>

