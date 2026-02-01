# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for dougmilvaney.com, hosted on GitHub Pages. Jekyll is explicitly disabled (`.nojekyll`). Custom domain configured via `CNAME`.

## Running Locally

No build step. Serve the static files directly:

```bash
python -m http.server 8000
# or
npx http-server
```

## Deployment

Push to `master` branch — GitHub Pages deploys automatically.

## Architecture

- **Static site** — plain HTML/CSS/JS, no frameworks, no build tooling, no npm dependencies
- **index.html** — single-page layout with sections: hero, about, four pillars (focus areas), career timeline, footer
- **static/css/main.css** — all styles using CSS custom properties, Grid/Flexbox layout, CSS animations. Mobile-first with breakpoints at 640px and 1024px
- **static/js/main.js** — vanilla JS using IntersectionObserver for navbar scroll state, scroll-triggered reveal animations, active nav tracking, mobile nav toggle, and dynamic footer year
- **static/img/** — images organized by section (`landing/`, `portfolio/`)
- **static/pdf/** — downloadable documents (resume, thesis, project papers)

## Key Technical Details

- CSS custom properties define the earth-tone color palette and spacing scale in `:root`
- Google Fonts: Playfair Display (headings) and Source Sans 3 (body)
- BEM class naming convention throughout
- All scroll behavior uses `IntersectionObserver` (no jQuery)
- Animations use CSS transitions triggered by adding `.is-visible` class to `.animate-on-scroll` elements
- Hero uses CSS `background-image` with a gradient overlay
- `@media (prefers-reduced-motion: reduce)` disables animations for accessibility
