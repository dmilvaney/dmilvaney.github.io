# dougmilvaney.com

> Personal portfolio for Doug Milvaney — Product & AI Leader at the Intersection of Technology and the Outdoors

[![Live Site](https://img.shields.io/badge/live-dougmilvaney.com-4a7c59?style=flat-square)](https://dougmilvaney.com)
[![GitHub Pages](https://img.shields.io/badge/hosted_on-GitHub_Pages-181717?style=flat-square&logo=github)](https://pages.github.com)

---

## About

This is the source for [dougmilvaney.com](https://dougmilvaney.com) — a single-page portfolio highlighting my work in AI-first product development at Microsoft, outdoor pursuits, and climate advocacy.

**Sections:**
- **Hero** — intro image
- **About** — bio and contact
- **Passions** — AI/ML, product leadership, trails/bikes/skis, climate & sustainability
- **Project Highlights** — career timeline
- **Connect** — links and contact CTA

---

## Tech Stack

| Concern | Approach |
|---|---|
| Markup | Semantic HTML5 |
| Styles | Vanilla CSS — custom properties, Grid/Flexbox, `@media` breakpoints |
| Scripts | Vanilla JS — `IntersectionObserver`, no dependencies |
| Fonts | Google Fonts: Playfair Display + Source Sans 3 |
| Hosting | GitHub Pages (static, no build step) |
| SEO | Open Graph, Twitter Card, JSON-LD, canonical URL, `robots.txt`, `sitemap.xml` |

No frameworks. No npm. No build tooling. Just files.

---

## Project Structure

```
.
├── index.html              # Single-page site
├── 404.html                # Custom 404
├── sitemap.xml
├── robots.txt
├── CNAME                   # Custom domain: dougmilvaney.com
└── static/
    ├── css/
    │   └── main.css        # All styles (CSS custom properties, BEM naming)
    ├── js/
    │   └── main.js         # Scroll effects, nav behavior, mobile toggle
    ├── img/
    │   ├── landing/        # Hero and profile photos
```

---

## Running Locally

No install required. Serve the static files directly:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Deployment

Push to `master` — GitHub Pages deploys automatically. Custom domain is configured via the `CNAME` file and DNS.

---

## Suggestions Welcome

If you spot something to improve, [let me know](mailto:suggest@dougmilvaney.com).
