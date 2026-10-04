# Designr.Pro

Personal portfolio of Vegar Berentsen, designer and developer based in Norway. The site presents selected apps, web projects, community work, writing, and professional information.

**Live site:** [designr.pro](https://designr.pro)

## Tech stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- React 19 and TypeScript
- [styled-components](https://styled-components.com/)
- npm (lockfile included)
- Deployed on Vercel

## Run locally

### Requirements

Install a current Node.js LTS release and npm.

### Install and start

```bash
git clone https://github.com/Designrpros/Designr-Pro.git
cd Designr-Pro
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create and run a production build locally:

```bash
npm run build
npm run start
```

The scripts and dependency versions are defined in `package.json`; use `npm ci` to install the versions recorded in `package-lock.json`.

## Site routes

- `/` — portfolio homepage with a typewriter introduction and a filterable journey through selected projects
- `/about` — about Vegar and his approach to design and development
- `/contact` — contact information and contact form
- `/cv` — CV information with a request-by-email option; the page is not password-protected
- `/gallery` — responsive photo gallery
- `/blog` and `/blog/[slug]` — blog posts
- `/news` and `/news/[slug]` — news posts
- `/privacy-policy` — privacy policy
- `/terms-of-service` — terms of service

The Next.js App Router pages live under `src/app/`. Shared navigation is in `src/components/NavBar.tsx`. Global styles are in `src/app/globals.css`; route-specific styling and behavior are generally defined alongside each page.

## Assets and content

- Gallery photos are stored in `public/gallery/` and served from `/gallery/`.
- Other static assets, including logos and blog imagery, are in `public/`.
- Blog and news content includes Markdown files under `src/app/blog/` and `src/app/news/`.

When adding a public route, review `src/app/sitemap.ts`, `src/app/robots.ts`, and the route metadata so the new page is discoverable and presented correctly when shared. SEO configuration and shared metadata helpers are in `src/app/seo.ts`.

## Project checks

Before proposing a change, run the project build and review the affected routes at desktop and mobile sizes. The repository defines `npm run build` and `npm run lint`; verify the appropriate checks against the current dependencies and resolve any failures before merging.

## Deployment

The project is configured as a Next.js site and is deployed on Vercel. Connect the GitHub repository to a Vercel project, use the standard Next.js build settings, and configure any required environment variables in the Vercel project settings.

## Contributing

1. Create a branch for your change.
2. Keep changes focused and follow the existing App Router and TypeScript patterns.
3. Run relevant checks and review the affected pages at mobile and desktop widths.
4. Open a pull request describing the change and any checks performed.

## Contact

For portfolio or project inquiries, use the contact form on [designr.pro/contact](https://designr.pro/contact).