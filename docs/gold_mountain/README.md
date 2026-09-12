# Gold Mountain Wellness Resort - Antigravity Build Documentation

This folder is the normalized, implementation-ready source of truth for building the Gold Mountain Wellness Resort website step by step in Google Antigravity.

## Read order

1. `MASTER.md`
2. `DESIGN_SYSTEM.md`
3. `ARCHITECTURE.md`
4. `CONTENT_RULES.md`
5. `ASSET_RULES.md`
6. `COMPONENTS.md`
7. `REPLACEMENTS.md`
8. The relevant file in `PAGES/`
9. `QA/ACCEPTANCE_CRITERIA.md`
10. `BUILD_PLAN.md` for the current stage

## Instruction hierarchy

When instructions conflict, the higher level wins:

`MASTER -> DESIGN SYSTEM -> CONTENT RULES -> ASSET RULES -> PAGE SPEC -> CURRENT TASK`

A lower-level file must not override a higher-level rule unless the higher-level file explicitly permits it.

## Important project rule

Do not build the whole site in one uncontrolled pass. Work in checkpoints. At the end of every major stage, verify the result, fix defects, document the status, and create a Git checkpoint before continuing.

## Temporary content rule

Temporary copy and imagery may be used for visual development when real client content is unavailable, but they must be tracked in `REPLACEMENTS.md`. Temporary material must never be represented as verified Gold Mountain facts in production content.
