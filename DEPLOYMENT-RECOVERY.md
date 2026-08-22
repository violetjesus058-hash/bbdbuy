# Deployment Recovery Plan

## Standard deployment settings

Use Node.js 22, pnpm 10.15.1, `pnpm install --frozen-lockfile`, and `pnpm run build`. The VitePress output directory is `.vitepress/dist`.

Before publishing, confirm that `.vitepress/dist/index.html`, `.vitepress/dist/favicon.ico`, and `.vitepress/dist/favicon.png` exist. The repository workflow performs these checks automatically on every push to `main` and on every pull request targeting `main`.

## Failure handling

If dependency installation fails, do not regenerate or delete the lockfile. Confirm that the deployment environment is using pnpm 10.15.1 and retry `pnpm install --frozen-lockfile`. If the error concerns a blocked native build, verify that `pnpm-workspace.yaml` contains `allowBuilds: esbuild: true`.

If the build fails, inspect the first error in the CI log, reproduce it locally with `pnpm run build`, fix the source issue on a separate branch, and open a pull request. Do not push a bypass that disables build validation.

If the build succeeds but the hosted site is incorrect, retain the previous successful deployment and use the hosting provider's rollback function. If a Git rollback is required, identify the last known-good commit with `git log --oneline`, create a revert commit, and push it to `main`; do not force-push a shared branch.

If only the favicon or static asset is incorrect, restore the last known-good icon files in a separate commit and rerun the workflow before republishing.

## Recovery commands

```bash
pnpm install --frozen-lockfile
pnpm run build
git log --oneline -10
git revert <bad-commit>
git push origin main
```

## Deployment platform settings

Configure the hosting provider explicitly rather than relying on auto-detection:

```text
Install command: pnpm install --frozen-lockfile
Build command: pnpm run build
Output directory: .vitepress/dist
Node version: 22
pnpm version: 10.15.1
```

Never place secrets in Markdown, Vue files, or repository configuration. Keep external analytics and affiliate values in the existing public configuration only when they are intended to be public.
