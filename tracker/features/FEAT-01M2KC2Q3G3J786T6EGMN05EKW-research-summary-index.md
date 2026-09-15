---
SCHEMA: 4
FORMAT: project-tracker
ID: FEAT-01M2KC2Q3G3J786T6EGMN05EKW
TYPE: feature
STATUS: DONE
PRIORITY: null
SEVERITY: null
EFFORT: S
OWNER: null
CONFIDENCE: Medium
TAGS: null
RELATIONS: null
AFFECTS:
  files:
    - src/components/research.astro
LINKS: null
VERIFIED_BY: null
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-15T20:28:05.104230+00:00'
UPDATED_AT: '2026-09-15T20:28:05.104230+00:00'
---

# Research summary index

## Background

Replaced the research card grid with a compact two-column summary: plain-language research context and descriptions on the left, dates and external reading links on the right.

## Investigation


## Decision


## Implementation

- Replaced the rounded research card grid and tag pills with border-separated, linked rows.
- Added a plain-language research summary and CV-informed publication dates and descriptions.
- Positioned each date and `Read` link in a quiet right-hand metadata column, with a mobile-friendly stacked layout.

## Verification

- `npm run build` passes with 0 errors, warnings, and hints from Astro check.
- Static build generated all 30 routes successfully.


## Follow-up
