# Contributing

## Keeping TABLE.md in sync

- **Automatically:** When you merge to `main`, the [Sync TABLE.md](.github/workflows/sync-table.yml) workflow runs if `README.md` (or the generator script) changed, regenerates `TABLE.md`, and commits it.
- **Locally:** Run `node scripts/generate-table.js` after editing `README.md` to update `TABLE.md` before pushing (optional).

## How to Add a Tool

- Add the tool under the correct emoji category in [README.md](README.md).
- Use the format: `- [Tool Name](primary-url) - Brief description.`
- Description must start with a capital letter and end with a period.
- Add indented bullets for extra links if needed: `  - [Label](url)`.
- Keep descriptions concise and objective (what the tool does, not marketing).
- Prefer official sources (repos, store pages, docs) when linking.

## Branch Protection

This repository requires pull request reviews before merging to main. All changes must be approved by a maintainer.
