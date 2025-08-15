# NECYSC — Developer / Handoff Notes (11ty SSG)

This README adapts the original "Website Handoff Documentation.pdf" for the site's migration from a static HTML site to an 11ty (Eleventy) static-site generator. It contains the essential steps to develop locally, build, and deploy via FTP.

## Quick checklist

- Requirements: Node 18+ (Node 20 recommended), npm
- Local dev: `npx @11ty/eleventy --serve`
- Build output: `build/` (static site ready to upload)
- Deploy: GitHub Actions workflow uploads `build/` to the FTP site (see `.github/workflows/main.yml`)

## Project layout (important)

- `src/` — 11ty source content and templates
  - `_includes/` — shared includes (head, navbar, footer)
  - `_data/` — site data such as `site.json`
  - `*.md` — page content (index.md, about.md, etc.)
- `build/` — generated site (what gets deployed)
- `src/_includes/*` — update asset links here (they use relative paths)

## Local development

1. Install Node.js (LTS or newer). Recommended: Node 20.
2. Install dependencies (if `package.json` exists):

```bash
npm install
```

3. Run 11ty in dev mode (serves on localhost and rebuilds on change):

```bash
npx @11ty/eleventy --serve
```

4. Open the local server (usually `http://localhost:8080`) and verify pages and static assets load.

Notes:

- This project serves static assets from `build/static/necysc_app/` and templates use relative paths (e.g. `static/necysc_app/style.css`) so the site works locally and when served from a subdirectory like `/v3/`.

## Building for production

- Build the site into `build/`:

```bash
npx @11ty/eleventy --output=build
```

- Inspect `build/` to confirm `index.html`, `about/`, `static/`, etc. are present.

## Deployment (FTP)

- The repo contains a GitHub Actions workflow at `.github/workflows/main.yml` that:

  1. Checks out the repo
  2. Sets up Node
  3. Installs dependencies and runs the 11ty build
  4. Uploads the `build/` folder to the FTP server using `SamKirkland/FTP-Deploy-Action`

- The workflow expects a repository secret named `ftp_password` and uploads `build/` to `necysc.org/v3/` on the remote server. If you want the deployed site to appear at the domain root (`/static/...`), adjust either the webserver or the templates' asset paths.

## Asset path strategies (we use relative paths)

- Relative paths (recommended): `static/necysc_app/style.css` — works both locally and when deployed to `/v3/`.
- Base URL variable: set a `baseurl` in 11ty config and use `{{ baseurl }}` in templates when you need different prefixes between environments.
- Server-side alias: create a symlink or webserver alias so `/static/` points to `/v3/static/` on the host.

## Common tasks for maintainers

- Update site data: `src/_data/site.json` and markdown files in `src/`.
- Add images or assets: place them under `src/static/necysc_app/images/` (or the project asset folder) and ensure passthrough copy is configured in 11ty config.
- Run a local build and smoke test before pushing.

## Troubleshooting

- Missing `package.json` or lockfile: the GitHub Actions workflow uses `npm ci`, which requires `package-lock.json`. If CI fails with `EUSAGE`, either add a lockfile to the repo (commit `package-lock.json`) or switch the workflow to `npm install`.
- Static assets not loading after deploy: check whether templates reference leading-slash absolute paths (`/static/...`) — switch them to relative paths (`static/...`) or update the server to serve the site from the root.

## Useful commands

```bash
# serve locally (dev)
npx @11ty/eleventy --serve

# build
npx @11ty/eleventy --output=build

# quick local preview of build folder
npx http-server build -p 8081
```

## Notes / Handoff pointers from the original doc

- The site was previously a static HTML/CSS site hosted on Dreamhost; after migrating to 11ty, the `build/` output reproduces the same final HTML structure used by the public site.
- Keep copies of any server-side scripts and legacy content under `archive/`.

If you want, I can also:

- Add a `package.json` with scripts (`dev`, `build`, `preview`) and pin 11ty as a dependency.
- Change the GitHub Actions workflow to use `npm install` instead of `npm ci` (if you prefer not to commit a lockfile).To run the code, you need to have the following dependencies installed:

- Node 18+

Run

```bash
npx @11ty/eleventy --serve
```
