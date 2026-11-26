---
SCHEMA: 4
FORMAT: project-tracker
ID: TASK-01M8ANKTKWTDBJ272M9CVGYKCY
TYPE: task
STATUS: DONE
PRIORITY: null
SEVERITY: null
EFFORT: XS
OWNER: null
CONFIDENCE: Medium
TAGS: null
RELATIONS:
  supersedes:
  - TASK-01M8AMX9QCXNPVZWVHF5Y8KT1V
AFFECTS:
  files:
  - src/components/projects.astro
  - public/videos/tandnevis-poster.webp
  - public/videos/tandnevis.mp4
  - public/videos/tandnevis.webm
LINKS: null
VERIFIED_BY: codex
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-11-26T00:55:43.996807+00:00'
UPDATED_AT: '2026-11-26T00:55:43.996807+00:00'
---

# Match the Tandnevis preview to project videos and expand feature details

## Background

Deliver the Tandnevis README tour through the shared project video player with a still poster, WebM and MP4 sources, and the built-in fallback. Describe the stock character templates, emotion and tone blocks, export formats, and optional ChatGPT drafting.

## Investigation


## Decision


## Implementation

Encoded the README tour as WebM and MP4 and moved the existing still into the shared video poster path. The player now also detects posters that failed before it attached the error listener. The card lists the 58 stock character templates, 24 emotion blocks, 18 tone blocks, and three manuscript formats, and explains the optional ChatGPT drafting workflow.

## Verification

The production build passed. Chromium verified desktop and mobile playback, reduced motion, MP4 fallback, and the poster and text fallbacks with simulated request failures.

## Follow-up
