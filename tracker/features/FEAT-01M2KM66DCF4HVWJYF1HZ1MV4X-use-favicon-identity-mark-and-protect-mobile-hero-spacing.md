---
SCHEMA: 4
FORMAT: project-tracker
ID: FEAT-01M2KM66DCF4HVWJYF1HZ1MV4X
TYPE: feature
STATUS: DONE
PRIORITY: null
SEVERITY: null
EFFORT: S
OWNER: null
CONFIDENCE: Medium
TAGS:
- nav
- hero
- mobile
RELATIONS: null
AFFECTS:
  files:
    - src/components/nav.astro
    - src/components/home.astro
LINKS: null
VERIFIED_BY: null
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-15T22:49:47.692118+00:00'
UPDATED_AT: '2026-09-15T22:49:47.692118+00:00'
---

# Use favicon identity mark and protect mobile hero spacing

## Background

Use the existing favicon as the homepage header identity mark and reserve mobile top space below the fixed header so it does not overlap the hero portrait.

## Investigation

The fixed homepage header occupies the top edge on small screens, while the
hero portrait begins within the section's original mobile padding. The header
identity was also still represented by an initials badge instead of the site's
favicon.

## Decision

Use the existing favicon as the identity mark and increase only the hero's
mobile top padding. Keep desktop spacing and the active-section navigation
behavior unchanged.

## Implementation

- Replaced the RM initials badge with `/favicon.svg` and added an accessible
  home label to the identity link.
- Changed the hero section to use `pt-28 pb-16` on mobile, retaining `md:py-20`
  at desktop widths.

## Verification

`npm run build` passes: 0 Astro errors, warnings, or hints; 30 pages built.

## Follow-up
