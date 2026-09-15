---
SCHEMA: 4
FORMAT: project-tracker
ID: FEAT-01M2KCJEM2DJ630CYWHG31S7C3
TYPE: feature
STATUS: DONE
PRIORITY: null
SEVERITY: null
EFFORT: M
OWNER: null
CONFIDENCE: Medium
TAGS: null
RELATIONS: null
AFFECTS:
  files:
    - src/components/projects.astro
LINKS: null
VERIFIED_BY: null
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-15T20:36:40.706331+00:00'
UPDATED_AT: '2026-09-15T20:36:40.706331+00:00'
---

# Project media delivery

## Background

Improved project media framing and delivery by preserving complete video aspect ratios, removing unnecessary player controls, and using poster scaffolding with deferred video source loading.

## Investigation


## Decision


## Implementation

- Switched videos from `object-cover` to `object-contain` so their complete frame remains visible.
- Removed native player controls from the ambient project demos.
- Added eager loading for the first poster, lazy loading for later posters, and a poster layer that remains visible until video playback is ready.
- Deferred WebM and MP4 source assignment until each video is within 300px of the viewport, pausing videos when they leave it.

## Verification

- `npm run build` passes with 0 errors, warnings, and hints from Astro check.
- Confirmed generated markup uses `preload="none"`, poster scaffolding, and `data-src` video sources without controls.


## Follow-up
