---
SCHEMA: 4
FORMAT: project-tracker
ID: FEAT-01M2KQKSAW7CM2MHZ8VZ10SQPF
TYPE: feature
STATUS: DONE
PRIORITY: null
SEVERITY: null
EFFORT: M
OWNER: null
CONFIDENCE: Medium
TAGS:
- blog
- nav
- responsive
- accessibility
RELATIONS: null
AFFECTS:
  files:
    - src/components/blog-nav.astro
    - src/layouts/BlogLayout.astro
LINKS: null
VERIFIED_BY: null
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-15T23:49:38.780681+00:00'
UPDATED_AT: '2026-09-15T23:49:38.780681+00:00'
---

# Publication-style blog navigation

## Background

Implemented a full-width blog header with RM identity badge, writing navigation, active route states, RSS/CV/theme actions, and a keyboard-accessible mobile drawer. Removed the duplicate standalone theme/CV control from BlogLayout.

## Investigation


## Decision

Use the same wide, rounded header language as the homepage while giving the blog its own publication identity: a text-based RM badge and Writing label, explicit All Posts/Tags navigation, and the existing CV/theme actions on the right. On small screens, collapse the links into a drawer instead of shrinking the header into a crowded pill.


## Implementation

- Added route-aware desktop navigation with active underline states for the blog index, pagination, and tag routes.
- Added a responsive mobile drawer with backdrop dismissal, Escape handling, focus containment, and focus return.
- Integrated RSS, CV, and theme actions into one header and removed the duplicate standalone ThemeToggle from BlogLayout.


## Verification

- `npm run build` — passed; Astro check reported 0 errors, 0 warnings, and 0 hints; 30 pages generated.
- Generated HTML confirms active states on `/blog`, `/blog/2`, and tag pages.


## Follow-up
