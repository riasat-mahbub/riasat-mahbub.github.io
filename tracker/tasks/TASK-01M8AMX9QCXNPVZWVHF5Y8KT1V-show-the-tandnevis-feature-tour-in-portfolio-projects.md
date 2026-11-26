---
SCHEMA: 4
FORMAT: project-tracker
ID: TASK-01M8AMX9QCXNPVZWVHF5Y8KT1V
TYPE: task
STATUS: DONE
PRIORITY: null
SEVERITY: null
EFFORT: XS
OWNER: null
CONFIDENCE: Medium
TAGS: null
RELATIONS:
  supersedes:
  - TASK-01M8A64VBJDER7J9A7C8BE8PMN
AFFECTS:
  files:
  - src/components/projects.astro
  - public/images/tandnevis-feature-tour.gif
LINKS: null
VERIFIED_BY: codex
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-11-26T00:43:25.804803+00:00'
UPDATED_AT: '2026-11-26T00:43:25.804803+00:00'
---

# Show the Tandnevis feature tour in portfolio Projects

## Background

The Tandnevis Projects card used a still from the feature tour.

## Investigation


## Decision


## Implementation

Use the feature-tour GIF from the Tandnevis README on the Projects card. Keep the still for visitors who prefer reduced motion.

## Verification

Astro check and the production build passed. Chromium loaded the GIF on desktop and mobile and selected the still when reduced motion was enabled.

## Follow-up
