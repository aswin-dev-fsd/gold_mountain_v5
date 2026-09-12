# BUILD PLAN

This is the default slow-and-steady implementation plan for Antigravity.

## Stage 0 - Repository inspection

Inspect:
- full project tree
- package manager and lockfile
- Next.js/React/TypeScript versions
- existing routes
- global CSS/theme
- components
- public/static assets
- image dimensions/formats
- existing environment variables
- build/lint/typecheck scripts

Do not modify code before this inspection is reported.

## Stage 1 - Foundation

Set/verify:
- Next.js App Router
- TypeScript
- stable production-supported Next.js version
- Tailwind CSS + small custom CSS layer if needed
- path aliases
- lint/typecheck/build scripts
- basic metadata structure
- font strategy
- image strategy

Acceptance: clean local development and production build.

## Stage 2 - Design system

Implement:
- brand colours
- typography
- spacing
- container rules
- buttons
- links
- dividers
- focus states
- responsive tokens

Acceptance: design-system test page visually matches the supplied brand direction.

## Stage 3 - Site chrome

Implement:
- header
- mobile nav
- enquiry CTA
- WhatsApp action
- footer
- global metadata

Acceptance: navigation works on desktop/mobile and all links are structurally correct.

## Stage 4 - Homepage, section by section

Build in this exact order:
1. Hero
2. Wellness
3. Arunachala / Location
4. Food
5. Resort
6. Experience
7. Stay
8. Trust
9. Blog
10. Final enquiry CTA
11. Footer refinement

After every section:
- inspect desktop
- inspect mobile
- run checks
- fix layout problems
- avoid continuing while obvious defects remain

## Stage 5 - Wellness page

Build the full Wellness page according to `PAGES/WELLNESS.md`.

## Stage 6 - Stay page

Build only confirmed room/package information; otherwise use temporary development placeholders tracked in `REPLACEMENTS.md`.

## Stage 7 - Experience page

Build the experience storytelling with factual claims gated by client confirmation.

## Stage 8 - About, Blog, Contact, Enquire

Build each route from its own page spec.

## Stage 9 - Temporary asset registry

Record every online image and every temporary content block.

## Stage 10 - QA and refinement

Run:
- typecheck
- lint
- production build
- link checks
- responsive checks
- accessibility review
- Lighthouse / Core Web Vitals review
- image payload review
- metadata/SEO review

## Stage 11 - Content and asset replacement pass

Replace temporary items using `REPLACEMENTS.md`.

Re-run visual and functional QA after every meaningful replacement batch.

## Git checkpoint rule

Create a checkpoint commit after each major stage passes acceptance criteria.
