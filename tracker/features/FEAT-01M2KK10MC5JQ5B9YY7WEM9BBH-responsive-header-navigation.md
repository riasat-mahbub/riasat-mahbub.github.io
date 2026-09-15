---
SCHEMA: 4
FORMAT: project-tracker
ID: FEAT-01M2KK10MC5JQ5B9YY7WEM9BBH
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
    - src/components/nav.astro
    - src/components/theme-toggle.astro
    - src/layouts/Layout.astro
    - src/pages/index.astro
LINKS: null
VERIFIED_BY: null
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-15T22:29:29.356601+00:00'
UPDATED_AT: '2026-09-15T22:29:29.356601+00:00'
---

# Responsive header navigation

## Background

Replace the crowded floating navbar with a stable responsive header, integrated CV/theme actions, and a labeled mobile navigation drawer.

## Investigation

The previous navbar squeezed seven destinations into a floating pill, hid all
mobile labels, and changed width while scrolling. The CV and theme controls
were separate from the navigation, creating competing fixed UI elements.


## Decision

Use a stable rounded header with the identity at the left, labeled links at
desktop widths, and integrated actions. Use a labeled, focusable mobile drawer
when the full link set cannot fit comfortably.


## Implementation

- Added a stable max-width responsive header with RM identity and active-link
  underline states.
- Integrated CV and theme controls into the homepage header.
- Added a mobile menu drawer with numbered links, backdrop/Escape dismissal,
  inert state, focus management, and body scroll locking.
- Removed the scroll-based width animation and the old mobile bottom bar.
- Kept standalone theme controls for blog and 404 layouts.


## Verification

`npm run build` passes with 0 Astro errors, warnings, or hints; 30 pages built.


## Follow-up
