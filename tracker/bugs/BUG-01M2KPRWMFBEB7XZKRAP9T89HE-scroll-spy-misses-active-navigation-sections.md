---
SCHEMA: 4
FORMAT: project-tracker
ID: BUG-01M2KPRWMFBEB7XZKRAP9T89HE
TYPE: bug
STATUS: DONE
PRIORITY: null
SEVERITY: null
EFFORT: S
OWNER: null
CONFIDENCE: Medium
TAGS:
- nav
- scroll-spy
- intersection-observer
RELATIONS: null
AFFECTS:
  files:
    - src/components/nav.astro
    - src/styles/global.css
LINKS: null
VERIFIED_BY: null
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-15T23:34:57.423212+00:00'
UPDATED_AT: '2026-09-15T23:34:57.423212+00:00'
---

# Scroll spy misses active navigation sections

## Background

The navigation IntersectionObserver required 60% of each section to be visible, which made active states unreliable for tall sections and did not account for the fixed header when scrolling to anchors.

## Investigation

The Projects section and other tall sections could fail to satisfy the 60%
visibility threshold as the viewport moved through them. That left the
previous link active even though the reader had moved into a later section.

## Decision

Use a narrow observer zone near the top of the viewport so section height does
not determine whether a link becomes active. Reserve space below the fixed
header when anchor scrolling.

## Implementation

- Changed the observer to `threshold: 0` with
  `rootMargin: "-20% 0px -70% 0px"`.
- Added `scroll-margin-top: 6rem` to all identified sections.

## Verification

`npm run build` passes with 0 Astro errors, warnings, or hints; 30 pages built.

## Follow-up
