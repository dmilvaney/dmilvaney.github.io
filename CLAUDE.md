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

- **Static site** — plain HTML/CSS/JS, no framework or build tooling
- **index.html** — single-page layout with all content sections (about, career timeline, projects, learning) and inline JavaScript for scroll-triggered animations
- **portfolio.html** — separate portfolio page
- **static/css/me.css** — custom styles; `style.css`/`style.min.css` are the base Bootstrap theme
- **static/img/** — images organized by section (`landing/`, `portfolio/`)
- **static/pdf/** — downloadable documents (resume, thesis, project papers)
- **node_modules/** — vendored frontend dependencies (Bootstrap 4.4.1, jQuery 3.5.1, Popper.js, Animate.css 3.7.2)

## Key Technical Details

- Bootstrap 4 grid for responsive layout
- jQuery handles scroll event listeners, element visibility detection (`isElementEnteringView`), and CSS animation triggers (fadeIn, slideIn, zoomIn via Animate.css classes)
- Navbar background toggles on scroll
- Header uses Bootstrap carousel
- Font Awesome loaded via CDN for icons
