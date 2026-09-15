---
SCHEMA: 4
FORMAT: project-tracker
ID: FEAT-01M2K2QDZ47Y1TCT5RF5TQ82J7
TYPE: feature
STATUS: DONE
PRIORITY: null
SEVERITY: null
EFFORT: S
OWNER: null
CONFIDENCE: Medium
TAGS: null
RELATIONS:
  depends_on:
    - TASK-01M2HDHQM2MT2VQX0CNDJCJAJ9
AFFECTS:
  files:
    - src/components/experience.astro
LINKS: null
VERIFIED_BY: null
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-15T17:44:38.116863+00:00'
UPDATED_AT: '2026-09-15T17:44:38.116863+00:00'
---

# Role-first experience layout

## Background

Replace the logo-card work experience section with a role-first editorial timeline. Show each role and organization before a readable summary paragraph, keep dates as quiet metadata, and present supporting contribution points beneath the description.

## Investigation


## Decision


## Implementation

- Removed the large institution logo cards and replaced them with a subtle responsive timeline rail.
- Added role summaries as readable prose before supporting contribution points.
- Moved dates into quiet metadata on the role header and simplified the experience data model.

## Verification

- `npm run build` passes with 0 errors, warnings, and hints from Astro check.
- Static build generated all 30 routes successfully.

## Follow-up
