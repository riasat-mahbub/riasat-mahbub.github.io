---
SCHEMA: 4
FORMAT: project-tracker
ID: FEAT-01M2KHQYG5FR57Z5X4KTQFKX2V
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
    - src/styles/global.css
    - src/layouts/Layout.astro
    - src/layouts/BlogLayout.astro
    - src/components/home.astro
    - src/components/projects.astro
    - src/components/experience.astro
    - src/components/education.astro
    - src/components/research.astro
    - src/components/blog-section.astro
    - src/components/connect.astro
    - src/pages/blog/[...page].astro
    - src/pages/blog/tags/index.astro
    - src/pages/blog/tags/[tag].astro
LINKS: null
VERIFIED_BY: null
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-15T22:07:03.685682+00:00'
UPDATED_AT: '2026-09-15T22:07:03.685682+00:00'
---

# Wide responsive content rails

## Background

Expand the portfolio's shared content rails for large screens while preserving readable text widths and responsive gutters.

## Investigation

Most homepage sections were capped at 1024px (`max-w-5xl`), Projects at 1152px,
and the main layout added fixed large-screen body padding. This left excessive
empty space on wide displays.


## Decision

Use a shared 90rem content rail with responsive page gutters. Keep existing
section-level text constraints so wider layout does not create hard-to-read
line lengths.


## Implementation

- Added the shared `.site-container` rail using `--content-max: 90rem`.
- Replaced narrow homepage and blog listing rails with the shared container.
- Changed the main layout gutters from fixed large padding to responsive gutters.
- Left article prose constrained to preserve the reading experience.


## Verification

`npm run build` passes with 0 Astro errors, warnings, or hints; 30 pages built.


## Follow-up
