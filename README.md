# divyanshuagarwal.github.io

Personal portfolio site for Divyanshu Agarwal, a Digital Marketing Specialist. A single-page site showcasing case studies, services, tools/tech stack, and contact info.

Live at: https://divyanshuagarwal.github.io

## Structure

```
index.html          # All page content, organized as sections (hero, about, projects, services, tools, clients, why-hire, contact)
styles/style.css     # Global stylesheet (dark glassmorphism theme, CSS custom properties for colors/fonts)
scripts/app.js       # Vanilla JS (smooth scrolling for in-page nav links)
```

No build tools, package manager, or framework — plain HTML/CSS/JS.

## Local development

Just open `index.html` in a browser, or serve the directory with any static file server, e.g.:

```
npx serve .
```

## Deployment

Pushes to `main` are automatically deployed to GitHub Pages via `.github/workflows/static.yml` — the repository is uploaded as-is, with no build step.
