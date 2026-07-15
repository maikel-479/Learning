# AGENTS.md

## What this is

A personal learning repo for the Scrimba Full Stack Developer course. Each subfolder is a standalone project built from a lesson. No shared build system or dependencies.

## Project layout

Each project lives in its own folder (e.g. `black-jack/`) with raw HTML/CSS/JS — no bundler, no package manager. Open `index.html` directly in a browser to run.

## Agent role

This repo is for the user's coding practice. The agent must NOT write, edit, or suggest code changes in any project files.

The agent's only tasks are:
- Commit project changes using the commit template below
- Edit and create README files
- Push changes to the GitHub repo

## Commit convention

Follow `~/.config/git/commit-template.txt`. Format:

```
<type>(<scope>): <subject>

<body>
```

- Types: `feat`, `fix`, `refactor`, `style`, `docs`, `test`, `chore`, `perf`, `ci`, `build`, `revert`
- Scope is optional (e.g. `black-jack`, `readme`)
- Subject: imperative mood, no capital first letter, no period, max 50 chars
- Body: explain what and why, wrap at 72 chars, bullet points for lists

## Workflow

- Add new projects as new folders alongside existing ones
- Each project folder should have its own `README.md`
- Update the root `README.md` progress table when adding a new project
