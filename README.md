# jakevose.github.io

Static CV site for GitHub Pages.

## Technical Stack

- Static site generator: Eleventy (`@11ty/eleventy`)
- Runtime management: `mise`
- Node version: `26.13.1` (active LTS)
- Templates: Nunjucks (`.njk`)
- Styling: plain CSS in `src/assets/app.css`
- Content model: JavaScript data files in `src/_data/`
- Static assets: copied through Eleventy from `src/assets/`
- Fonts: self-hosted from `@fontsource` packages (variable fonts for the site, static instances for the PDF so it embeds proper TrueType text)
- Deployment: GitHub Actions to GitHub Pages

## Project Structure

- `src/index.njk`: main page template
- `src/resume.njk`: print-oriented two-page resume template
- `src/_data/profile.js`: profile content and homepage data
- `src/_data/resume.js`: print resume structure derived from the profile content
- `src/_data/site.js`: site metadata, social metadata, and canonical values
- `src/_data/schema.js`: schema.org `ProfilePage`/`Person` JSON-LD, generated from the profile data
- `src/llms.njk`, `src/llms-full.njk`: `/llms.txt` and `/llms-full.txt` (Markdown profile for AI agents)
- `src/robots.njk`, `src/sitemap.njk`: `/robots.txt` and `/sitemap.xml`
- `src/assets/app.css`: site styles
- `src/assets/print-resume.css`: print and PDF resume styles
- `src/assets/fonts.css`, `src/assets/print-fonts.css`: `@font-face` rules for site and PDF
- `scripts/render-resume-pdf.mjs`: renders the PDF resume (with title/author/keyword metadata) and the PNG social card
- `src/assets/social-card.svg`: social preview image
- `.eleventy.js`: Eleventy configuration
- `mise.toml`: pinned runtime and local task aliases
- `.github/workflows/deploy.yml`: Pages build and deploy workflow

## Local Development

Install dependencies:

```sh
mise run install
```

Start the local dev server:

```sh
mise run dev
```

Build the production site:

```sh
mise run site
```

Build the production site and print-ready two-page PDF resume together:

```sh
mise run build
```

Build the print-ready two-page PDF resume:

```sh
mise run pdf
```

Build everything, then serve it locally with live reload (PDF included):

```sh
mise run preview
```

Regenerate the PDF automatically while editing:

```sh
mise run pdf-watch
```

The generated output is written to `_site/`.

The PDF pipeline also renders `src/assets/social-card.svg` to `_site/assets/social-card.png`, which is the `og:image` (most social platforms ignore SVG previews).

The PDF pipeline renders `_site/resume/index.html` to `_site/resume/jake-vose-resume.pdf` and fails if the output is not exactly two pages.
The PDF render depends on the built site output, so the site and PDF cannot be rendered fully in parallel. The combined build runs them in a single pipeline and avoids separate deployment commands.

## Build Pipeline

The GitHub Pages workflow does the following on pushes to `main`:

1. Checks out the repository
2. Sets up GitHub Pages
3. Installs the pinned toolchain with `mise`
4. Runs `npm ci`
5. Installs Playwright Chromium for headless PDF rendering
6. Runs `mise run build`, which builds the site and regenerates the PDF in `_site/resume/`
7. Uploads `_site/` as the Pages artifact
8. Deploys the artifact with `actions/deploy-pages`

## Notes

- Metadata is driven from `src/_data/site.js`; JSON-LD comes from `src/_data/schema.js`
- The homepage, PDF, and `llms*.txt` files all read the same data files, so edit content once in `src/_data/`
- The public site content is intentionally source-driven from `src/_data/profile.js`
- `_site/` is build output, not source
