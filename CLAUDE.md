# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static one-page portfolio/marketing site (`divyanshuagarwal.github.io`) for a Digital Marketing Specialist. There is no build system, package manager, framework, or test suite — just plain HTML, CSS, and vanilla JS served directly.

## Development

There are no build/lint/test commands — this repo has no `package.json` or tooling of any kind. To work on the site, edit the files directly and open `index.html` in a browser (or serve the directory with any static file server, e.g. `npx serve .`) to preview changes.

## Deployment

Pushes to `main` trigger `.github/workflows/static.yml`, which uploads the entire repository as-is to GitHub Pages (no build step). Whatever is committed on `main` is what gets deployed.

## Architecture

The entire site is one page, structured as three files:

- `index.html` — all content, laid out as a sequence of `<section>`s in a single `#app` div (hero → about → projects/case studies → services → tools/tech stack → clients → why-hire → contact/footer). Section order in the DOM is the page's visual order; nav links (`.glass-nav`) are anchor links (`#hero`, `#about`, etc.) into these sections.
- `styles/style.css` — one global stylesheet, no preprocessor. Theme values (colors, fonts) are defined once as CSS custom properties in `:root` (`--bg-color`, `--text-color`, `--primary-color`, `--secondary-color`, `--glass-bg`, `--glass-border`, `--font-main`, `--font-heading`) — change the theme by editing these rather than hardcoding colors in new rules. Visual style is a dark "glassmorphism" look (`.glass-card`, `.glass-nav` use `backdrop-filter: blur(...)` over translucent backgrounds). CSS is organized in the same top-to-bottom order as the sections in `index.html`, plus a single mobile breakpoint (`max-width: 768px`) at the bottom.
- `scripts/app.js` — minimal vanilla JS, currently just smooth-scroll behavior for in-page anchor links.

External dependencies are all CDN-loaded in `<head>`: Google Fonts (Outfit) and Font Awesome icons. There is no local dependency management.

When adding a new section, follow the existing pattern: add a `<section id="...">` with a `.container` and `.section-title` inside `index.html`, add a corresponding block of rules to `style.css` in DOM order, and add a nav link if it should be reachable from `.glass-nav`.
