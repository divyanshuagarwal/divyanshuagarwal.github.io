# Divyanshu Agarwal | Portfolio

Personal portfolio site for Divyanshu Agarwal, a Digital Marketing Specialist. A single-page site showcasing case studies, services, tools/tech stack, and contact info.

Live at: https://divyanshuagarwal.github.io

## Structure

```
.
|-- index.html                      # Page content and sections
|-- Divyanshu_Agarwal_Resume.pdf    # Resume downloaded from the hero CTA
`-- assets/
	|-- css/
	|   `-- style.css                # Global stylesheet
	|-- images/                      # Local image assets
	`-- js/
		`-- app.js                   # Smooth scrolling for in-page anchors
```

No build tools, package manager, or framework — plain HTML/CSS/JS.

## Local development

Just open `index.html` in a browser, or serve the directory with any static file server, e.g.:

```
npx serve .
```

## Deployment

Pushes to `main` are automatically deployed to GitHub Pages via `.github/workflows/static.yml` — the repository is uploaded as-is, with no build step.
