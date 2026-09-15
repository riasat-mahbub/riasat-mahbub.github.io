---
SCHEMA: 4
FORMAT: project-tracker
ID: FEAT-01M2JXY6S7BBNYCF7NYWQ2EJEQ
TYPE: feature
STATUS: DONE
PRIORITY: null
SEVERITY: null
EFFORT: M
OWNER: null
CONFIDENCE: Medium
TAGS: null
RELATIONS:
  supersedes:
  - FEAT-01KYNGQ94FHWM0Q89YVJRRW4DH
AFFECTS:
  files:
    - src/components/projects.astro
LINKS: null
VERIFIED_BY: riasat1998
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-15T16:20:57.255528+00:00'
UPDATED_AT: '2026-09-15T16:20:57.255528+00:00'
---

# FEAT-01KYNGQ94FHWM0Q89YVJRRW4DH

## Background

Replaced the two-column project cards with six alternating feature rows: each row has an autoplaying, muted, controllable demo video stage on desktop, a title, summary, highlights, tags, and GitHub link. Videos resolve from /videos/<project-slug>.mp4; existing Aergia and Wozaro screenshots remain as posters. Added reduced-motion handling and a visual fallback while media is unavailable.

## Investigation


## Decision


## Implementation

- Reworked `src/components/projects.astro` into a data-driven list of six feature rows.
- Added alternating desktop grid order, responsive media-first stacking, video controls, poster support, reduced-motion handling, and a missing-media fallback.
- Replaced paragraph-only descriptions with concise summaries, highlight lists, and technology tags.


## Verification

- `npm run build` passes with 0 Astro errors, 0 warnings, and 30 static pages generated.
- Project videos are referenced from `/videos/<project-slug>.mp4`; Aergia and Wozaro retain their existing screenshot posters.


## Follow-up
