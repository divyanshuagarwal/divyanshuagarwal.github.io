# Project Guide

## Overview

This repository is a static, one-page portfolio site for a Digital Marketing Specialist. It uses plain HTML, CSS, and vanilla JavaScript, with no package manager, framework, build step, linter, or automated test suite.

## Development

Edit the files directly and open `index.html` in a browser to preview the site. A static server such as `npx serve .` is optional when testing browser behavior locally.

There is no compilation or automated validation command. After changes, confirm the page loads and check the affected desktop and mobile layout manually.

## Deployment

Pushes to `main`, or a manual workflow dispatch, run `.github/workflows/static.yml`. The workflow uploads the repository unchanged to GitHub Pages; every referenced file must therefore use a GitHub Pages-compatible relative path.

## Project Structure

- `index.html` contains all page content in the `#app` wrapper. The DOM order is the visual order: `#hero`, `#about`, `#projects`, `#services`, `#tools`, `#clients`, `#why-hire`, and `#contact`. Navigation uses in-page anchors.
- `assets/css/style.css` is the single global stylesheet. Keep section-specific rules in the same order as the HTML and place responsive overrides in the existing `max-width: 768px` block.
- `assets/js/app.js` contains the site's vanilla JavaScript behavior, currently smooth scrolling for in-page anchors.
- `assets/images/` stores local image assets. `5-Leaf-Clover.jpg` and `BlackClover.jpg` are currently unused; add image references with paths relative to `index.html`, such as `assets/images/<filename>`.
- `Divyanshu_Agarwal_Resume.pdf` is the root-level resume file downloaded by the hero CTA.
- `.github/workflows/static.yml` deploys the static site to GitHub Pages.

## Styling Conventions

Use the CSS custom properties in `:root` for colors, glass surfaces, and typography instead of adding repeated literal theme values. The established design is a dark, red-accented glassmorphism interface using `Outfit` for body copy and `Cinzel` for display headings.

Reuse existing components and patterns where appropriate: `.container`, `.glass-nav`, `.glass-card`, `.btn`, `.btn-primary`, `.btn-outline`, and the fade-up animation delay classes. Font Awesome 6 icons and the Google-hosted Outfit and Cinzel fonts are loaded from CDNs in `index.html`; no local dependency installation is needed.

When adding a section, give it a stable `id`, add its CSS in page order, provide mobile styling where needed, and add a navigation link only when it should be part of the primary navigation. Keep new resource paths relative to `index.html`.
