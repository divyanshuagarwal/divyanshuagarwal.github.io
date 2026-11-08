# Design Guide

This guide covers how the portfolio looks, moves, and sounds. It is meant for anyone editing `index.html` or `assets/css/style.css`. For project setup, file structure and deployment, see `CLAUDE.md`.

## Feel

The site is dark, warm, and a little dramatic. It uses blood-red accents, frosted-glass cards, and a five-leaf clover in the hero. The copy is the opposite: casual and direct, like a person talking. Keep that contrast. Visual polish comes from the styling, so the words don't need to sound polished.

## Color

All theme colors live as custom properties in `:root`. Use them instead of typing hex values again.

| Token | Value | Use |
| --- | --- | --- |
| `--bg-color` | `#030302` | Page background |
| `--text-color` | `#f2ead8` | Default text (warm off-white) |
| `--primary-color` | `#b3261e` | Accent: buttons, icons, stat numbers, labels, borders on hover |
| `--secondary-color` | `#26201f` | Charcoal, used only as a gradient end stop. Never use it for text. |
| `--glass-bg` | `rgba(255, 255, 255, 0.04)` | Card fill |
| `--glass-border` | `rgba(255, 255, 255, 0.08)` | Card and divider borders |

These supporting shades currently appear as literals in the stylesheet. If you use one in a new rule, promote it to a token rather than copying it.

| Value | Use |
| --- | --- |
| `#fff` | Card headings (`h3`) |
| `#e8968f` | Soft red: hero name gradient, pills, link hover |
| `#cdc7c2` | Body copy inside cards and the hero |
| `#938c88` | Secondary text: subtitles, stat labels, client names |
| `#e5e1da` | Tool tag text |
| `#6f6864` | Footer text |
| `#d4af37` | Gold, only for the "What happened" label in case studies |

Red tints for fills and glows use the primary color at low alpha, for example `rgba(179, 38, 30, 0.1)` for pill backgrounds and `0.4`–`0.6` for button glows.

## Typography

Both fonts load from Google Fonts in `index.html`.

- **Cinzel** (`--font-heading`, weights 600/700) is for display text only: the logo, the hero name and greeting, and section titles. Cinzel only has capital letters, so heading case doesn't change how it looks. Write headings in sentence case anyway, so the HTML reads naturally.
- **Outfit** (`--font-main`, weights 300–700) is for everything else, including card headings, buttons and body copy.

| Element | Size |
| --- | --- |
| Hero name (`h1`) | `5rem` desktop, `3rem` mobile |
| Section title | `2.5rem` |
| Stat number | `2.5rem` |
| Card heading | `1.5rem` in case studies and tool categories, browser default elsewhere |
| Hero paragraph | `1.25rem` |
| Card body / subtitle | `1.1rem` |
| Pills and badges | `0.8rem`–`0.9rem` |

Body line height is `1.6`, or `1.8` inside glass cards. The hero name and section titles use a gradient text fill (`background-clip: text`).

## Layout

- `.container` is up to `1200px` wide with `2rem` side padding.
- Each section has `8rem` of vertical padding. The contact section uses `8rem 0 4rem`.
- Single-card sections such as About, Tools and Clients use a `.glass-card` capped at `800px` and centered.
- Card grids use `repeat(auto-fit, minmax(…, 1fr))` with a `2rem` gap: `300px` minimum for projects and services, `250px` for Why work with me, and `200px` for stats. They reflow without media queries.
- There is a single breakpoint, `max-width: 768px`. All responsive overrides go in that one block. Below it, the nav links and the hero clover are hidden. There is no mobile menu yet.

## Components

| Class | What it is |
| --- | --- |
| `.glass-nav` | Fixed top bar, near-black with `blur(10px)` |
| `.glass-card` | Main surface: glass fill, `1px` border, `20px` radius, `3rem` padding, `blur(12px)` |
| `.btn` | Pill button, `50px` radius. Sentence case, not uppercase. |
| `.btn-primary` | Red-to-charcoal gradient with a red glow. Use one per group. |
| `.btn-outline` | Transparent with a red border, for secondary actions |
| `.section-title` / `.section-subtitle` | Centered heading, with an optional one-line muted subtitle under it |
| `.stat-item` | Small bordered tile with a big red number and a lowercase label |
| `.project-type` | Small red pill next to a case study title, such as "gaming app" |
| `.detail-item` | A case study row. The `<strong>` label sits on its own line, and `.highlight` turns the label gold. |
| `.tech-tags span` | Tool chip, `8px` radius |
| `.client-logo` | Text-only brand tile, `12px` radius |
| `.hire-card` | Glass card with a `3px` red top border |
| `.tldr` | One-line summary with a solid red "tl;dr" badge |

Corner radius tells you what kind of element you're looking at: pills (`30px`–`50px`) are actions and tags, `20px` is a card, and `8px`–`15px` is a tile or chip inside a card.

## Motion

Keep motion slow and subtle. Nothing should bounce or spin.

- **Entrance:** `.animate-fade-up` fades in and rises `20px` over `0.8s`. Stagger elements with `.delay-1`, `.delay-2` and `.delay-3`, which add 0.2s, 0.4s and 0.6s.
- **Ambient:** the hero glow pulses on a `4s` loop, and the clover sways and fades on a `6s` loop.
- **Hover:** things lift with `translateY` (`-2px` on buttons, `-5px` on tiles, `-10px` on case study cards) and the border turns red. Case study cards also get a light sweep across them. Transitions run `0.3s`–`0.5s ease`.

## Icons and images

- Use Font Awesome 6 solid icons (`fas` / `fa-solid`) and the brand icons (`fab`). Service icons are `2.5rem` and red.
- Store images in `assets/images/` and reference them relative to `index.html`. The hero clover is an inline SVG data URI in `.geometric-shape`, so changing it means editing the CSS.

## Voice and copy

Write the way Divyanshu would explain his work to a friend: first person, plain words, short sentences.

**Do**
- Lead with what happened and the number: "CPI dropped 65%."
- Use light, current slang where it fits naturally, such as "the receipts", "results, not vibes" and "no ghosting". One or two per section is plenty.
- Write headings in sentence case, and keep stat labels and pills lowercase.
- Make button labels short verbs: "See the work", "Let's talk", "Say hi".
- Use contractions (I've, what's, isn't).

**Don't**
- Use corporate filler words: "leverage", "synergy", "data-driven" as an adjective, "unlock", "elevate", "craft", "seamless", "cutting-edge", "passionate about".
- Use em dashes. Split the sentence or use a comma or period instead.
- Use LinkedIn-style hashtags, rows of emoji, or exclamation marks for hype.
- Make up facts. Every number, client and tool must be real. Change the wording, never the claim.

**Case study format:** a title with a `.project-type` pill, then three rows labelled **The problem**, **What I did** and **What happened**. Each row is one or two sentences.

## Adding a section

1. Give it a stable `id` and put it in the HTML at the position you want it to appear.
2. Use `.container` and `.section-title`, plus `.glass-card` or an existing grid pattern.
3. Add its CSS in the same order as the HTML, and add any mobile tweaks to the `768px` block.
4. Write the copy using the voice rules above.
5. Add a nav link only if it belongs in the main navigation. Nav labels are short and casual, like "Work" and "Say Hi".
