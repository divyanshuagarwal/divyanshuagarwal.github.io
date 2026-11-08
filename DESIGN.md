# Design guide

## Direction

A dark developer aesthetic for a digital marketing portfolio. Keep the real marketing identity, campaign results, clients, tools, contact destinations, and resume. Technical styling communicates precision without implying a software development role.

## Theme and typography

All colors, fonts, spacing, and corner sizes are CSS custom properties in `:root`. Use charcoal backgrounds, subtly lighter surfaces, quiet borders, off-white text, and muted red accents. `--primary-color` is the readable accent; `--secondary-color` is for decorative edges. Use Outfit for body text and headings, IBM Plex Mono for labels, section numbers, metrics, and tool chips. Both have system fallbacks.

Headings use sentence case, medium weight, tight letter spacing, and fluid sizing. Keep body text readable with a 1.65 line height. Avoid ornate fonts, gradient text, heavy glow, and animated decorative imagery.

## Layout and components

The content width is 1160px including fluid side gutters. Sections use fluid vertical spacing and thin dividers. Maintain HTML section order: hero, about, projects, services, tools, clients, why-hire, contact.

- Hero: left-aligned introduction and existing CTAs beside a campaign snapshot using verified metrics.
- `.glass-card`: solid charcoal surface, thin border, 12px radius. The name is retained for compatibility.
- Buttons: compact 6px corners, 46px minimum height, one filled accent action per group.
- Case studies: prominent outcome, client and category, then the problem, action, and result. Never invent metrics.
- Tools: three compact groups with monospace chips. Clients remain text tiles.
- `.section-number`: decorative numbered labels hidden from assistive technology.

Keep CSS in page order. Put all mobile layout changes in the existing 768px breakpoint. On mobile, stack the hero, projects, services, tools, and working-together cards. Clients use two columns.

## Navigation and accessibility

Use a fixed navigation bar, linked logo, visible keyboard focus, and a skip link. Native fragment links retain URL hashes and work without JavaScript; CSS provides smooth scrolling and header offsets.

The mobile menu progressively enhances visible navigation. Its button starts hidden until JavaScript attaches handlers. Keep `aria-expanded` synchronized; close on link selection, Escape, outside click, and breakpoint changes. Escape returns focus to the toggle.

Entrance motion uses a small translation without hiding text. Hover movement stays modest. Honor reduced-motion preferences by disabling smooth scrolling, animation, and transitions. All content and navigation remain usable without JavaScript.

## Content and assets

Write first-person, direct copy with short sentences. Keep claims and numbers grounded in existing evidence. Do not invent projects, qualifications, availability, or client relationships. Preserve existing email, phone, LinkedIn, and resume destinations.

Keep plain HTML, CSS, and vanilla JavaScript, with no build step. Asset paths are relative to `index.html` for GitHub Pages. This redesign does not change hosting or deployment.

## Verification

Preview at 375px, 768px, and 1440px. Check overflow, text wrapping, grids, keyboard focus, mobile navigation, fragment offsets, reduced motion, and the no-JavaScript fallback. Verify assets, download links, contact destinations, and browser console errors.
