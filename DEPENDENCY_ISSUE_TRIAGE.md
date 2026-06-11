# Dependency Issue Triage

Source: GitHub security advisory emails received in Gmail on 2026-05-28 and 2026-06-10.

## Reported Issues

| Severity | Dependency | Advisory | Affected file |
| --- | --- | --- | --- |
| Critical | `shell-quote` | CVE-2026-9277 / GHSA-w7jw-789q-3m8p | `package-lock.json` |
| High | `tmp` | CVE-2026-44705 / GHSA-ph9p-34f9-6g65 | `package-lock.json` |

## What Needs To Be Done

- Review the Dependabot alerts for `package-lock.json`.
- Update the dependency chain that brings in `shell-quote` and `tmp`.
- Regenerate the lockfile with the package manager already used by this repo.
- Run the repo's existing install, test, lint, and build checks before merging.

## Suggestions

- Start with `npm audit` or GitHub Dependabot's suggested patch path to identify the top-level package that needs an update.
- Prefer the smallest compatible version bump that clears the alerts.
- If the vulnerable packages are transitive dependencies, update the parent package first instead of editing lockfile entries by hand.
