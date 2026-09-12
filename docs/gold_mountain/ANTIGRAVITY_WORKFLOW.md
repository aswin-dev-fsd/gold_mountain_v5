# ANTIGRAVITY WORKFLOW

Use this file as the operational playbook for working with Google Antigravity.

## Session startup

Before changing code:

1. Read `docs/gold-mountain/MASTER.md`.
2. Read the applicable design/content/asset/page documents.
3. Inspect the repository and current implementation.
4. Identify existing patterns that can be reused.
5. Produce a short plan and file-change list.

## During implementation

Work in small bounded tasks.

Do not jump ahead.

For each task:

`Inspect -> Plan -> Implement -> Run checks -> Visual verify -> Fix -> Document -> Stop`

## When a task is complete

Report:
- what changed
- which routes/components were affected
- checks run
- visual verification performed
- temporary items introduced or replaced
- known remaining issues

Then create a Git checkpoint.

## When requirements conflict

Use:
`MASTER -> DESIGN SYSTEM -> CONTENT RULES -> ASSET RULES -> PAGE SPEC -> CURRENT TASK`

Do not silently change strategy.

## When content is missing

Use provisional content only when necessary for visual development. Track it in `REPLACEMENTS.md`.

Never generate:
- fake testimonials
- fake prices
- fake availability
- fake certifications
- fake medical claims
- fake contact information

## When imagery is missing

Use a suitable traceable temporary image where necessary. Record it. Do not imply it is Gold Mountain property photography.

## Stop conditions

Stop and report when:
- build/type checks fail and the cause is unclear
- a requirement conflict cannot safely be resolved from the hierarchy
- a missing asset is essential to a truthful final implementation
- adding a dependency becomes necessary but its value is uncertain

Do not continue by inventing a solution.
