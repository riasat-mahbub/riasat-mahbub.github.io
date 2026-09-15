---
SCHEMA: 4
FORMAT: project-tracker
ID: FEAT-01M2KAWPWZMJZ6TQVNDKE6P7XP
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
    - src/components/education.astro
LINKS: null
VERIFIED_BY: null
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-15T20:07:19.711438+00:00'
UPDATED_AT: '2026-09-15T20:07:19.711438+00:00'
---

# Education credential index

## Background

Replaced the education cards and descriptive bullets with a minimal credential index using institution logos, degree hierarchy, and subdued completion dates.

## Investigation


## Decision


## Implementation

- Removed the descriptive education bullets and card backgrounds.
- Added a borderless two-row credential index with logos, degree titles, institutions, and subdued dates.
- Added completion months: October 2025 and November 2021.

## Verification

- `npm run build` passes with 0 errors, warnings, and hints from Astro check.
- Static build generated all 30 routes successfully.


## Follow-up
