---
SCHEMA: 4
FORMAT: project-tracker
ID: FEAT-01M3HV34CF5YD3ZM6MB0BFQ3PY
TYPE: feature
STATUS: DONE
PRIORITY: null
SEVERITY: null
EFFORT: null
OWNER: null
CONFIDENCE: Medium
TAGS: null
RELATIONS: null
AFFECTS:
  files:
  - astro.config.mjs
LINKS: null
VERIFIED_BY: null
CREATED_BY: null
UPDATED_BY: null
CREATED_AT: '2026-09-27T16:27:40.303745+00:00'
UPDATED_AT: '2026-09-27T16:27:40.303745+00:00'
---

# Add personal-domain redirects for CV social and project links

## Background

Added /github, /linkedin, /x, /twitter, /aergia, /project-tracker, and /mbuddy using the destinations already listed on the personal site. Astro emits static redirect pages for GitHub Pages.

## Investigation

The portfolio is a static Astro site deployed to GitHub Pages on pushes to master.
Existing social.ts and projects.astro provide the exact destinations.

## Decision

Use Astro's built-in redirects configuration, producing immediate meta-refresh
pages with canonical destinations, noindex, and clickable fallback links.

## Implementation

Configured seven stable personal-domain paths. /x and /twitter share the same
destination. No URL shortener service, API, credentials, or DNS changes required.

## Verification

npm run build passed; Astro check reported 0 errors, warnings, or hints.
Verified all seven emitted redirect pages have the expected refresh destination,
canonical URL, fallback anchor, and noindex directive.

## Follow-up
Additional profiles and projects can be added to the redirects map when their
destination URLs are supplied. CVs can use these paths after deployment.
