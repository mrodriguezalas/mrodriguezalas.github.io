# Mauricio Rodriguez Alas — portfolio

An Astro portfolio for AI research, software engineering, autonomous systems, and scientific instrumentation.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Add a project

Create one Markdown file in `src/content/projects/`. Its frontmatter is validated by `src/content.config.ts`; the homepage timeline is assembled automatically and ordered by its `date` field. Use `featured: true` for a full timeline entry and `featured: false` for the concise Earlier work list.

Required fields are `title`, `shortTitle`, `date`, `category`, `tags`, `summary`, and `organization`. Optional links: `externalUrl`, `paperUrl`, and `githubUrl`.

## Add media

Place approved assets under `public/projects/<project-slug>/`. Add their site path to that project’s frontmatter after extending the project schema and template to render the media field. See `MEDIA_TODO.md` for recommended assets.

## Deployment

The GitHub Pages workflow at `.github/workflows/deploy.yml` runs when `main` is updated. In repository settings, set Pages **Source** to **GitHub Actions**. The Astro config is set for the account-site URL `https://mrodriguezalas.github.io` and no path prefix, matching the requested deployment URL.
