---
SCHEMA: 4
FORMAT: project-tracker
ID: FEAT-01M2K8H8HN05HK32NJG9962EV9
TYPE: feature
STATUS: DONE
PRIORITY: null
SEVERITY: null
EFFORT: S
OWNER: null
CONFIDENCE: Medium
TAGS: null
RELATIONS:
  supersedes:
  - FEAT-01M2K89QZBKMNZH9JRHKCZS8TJ
  depends_on:
  - TASK-01M2HDHQM2MT2VQX0CNDJCJAJ9
AFFECTS:
  files:
    - src/components/experience.astro
LINKS: null
VERIFIED_BY: riasat1998
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-15T19:26:07.413900+00:00'
UPDATED_AT: '2026-09-15T19:26:07.413900+00:00'
---

# FEAT-01M2K89

## Background

Fixed timeline marker alignment by placing the date and dot in the same flex row; the dot now stays vertically centered with the date and its center remains on the rail.

## Investigation


## Decision


## Implementation

- Replaced the marker's absolute vertical offset with a shared flex row containing the date and dot.
- Kept the marker center on the timeline rail with a half-dot horizontal translation.


## Verification

- `npm run build` passes with 0 errors, warnings, and hints from Astro check.
- Static build generated all 30 routes successfully.


## Follow-up
