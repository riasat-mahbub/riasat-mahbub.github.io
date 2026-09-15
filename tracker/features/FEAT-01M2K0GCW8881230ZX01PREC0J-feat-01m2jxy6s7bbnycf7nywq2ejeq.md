---
SCHEMA: 4
FORMAT: project-tracker
ID: FEAT-01M2K0GCW8881230ZX01PREC0J
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
  - FEAT-01M2JXY6S7BBNYCF7NYWQ2EJEQ
AFFECTS:
  files:
    - src/components/projects.astro
    - public/videos/aergia.mp4
    - public/videos/aergia.webm
    - public/videos/aergia-poster.webp
    - public/videos/project-tracker.mp4
    - public/videos/project-tracker.webm
    - public/videos/project-tracker-poster.webp
LINKS: null
VERIFIED_BY: codex
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-15T17:05:50.472331+00:00'
UPDATED_AT: '2026-09-15T17:05:50.472331+00:00'
---

# FEAT-01M2JXY6S7BBNYCF7NYWQ2EJEQ

## Background

Integrated the provided Aergia and unified Project Tracker showcase outputs into public/videos as MP4, WebM, and WebP posters. The project media component now prefers WebM with MP4 fallback and supports a future image slot; MBuddy remains a placeholder until its image is supplied.

## Investigation


## Decision


## Implementation

- Copied the provided Aergia and Project Tracker showcase MP4, WebM, and poster WebP files into `public/videos/`.
- Added WebM-first, MP4-fallback sources and switched the two project posters to the supplied showcase posters.
- Added optional image media support; MBuddy is currently a placeholder until its image is supplied.


## Verification

- `npm run build` passes with 0 Astro errors, 0 warnings, and 30 static pages generated.
- SHA-256 checksums match both source MP4 files.


## Follow-up

- Add MBuddy’s image and set its `mediaType` to `image` with the supplied image path.
