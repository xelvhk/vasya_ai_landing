# Vasya AI Landing

Static bilingual landing page for [Vasya AI](https://github.com/xelvhk/vasya_ai), a local-first voice assistant for desktop productivity.

## Overview

The site presents Vasya AI as a product: a voice-first assistant with local memory, desktop presence, integrations, safety-minded defaults, and a clear local setup path.

Live site: https://xelvhk.github.io/vasya_ai_landing/

## Features

- RU / EN language switcher with `?lang=ru` and `?lang=en` shareable URLs
- Cinematic editorial hero section with optimized AVIF image and PNG fallback
- Product proof block for current working surfaces
- GitHub and local setup calls to action
- Responsive layout for mobile and desktop
- Open Graph and Twitter preview metadata
- Static GitHub Pages-compatible implementation

## Project Structure

```text
.
├── assets/
│   ├── favicon.svg
│   ├── vasya-hero-generated.avif
│   └── vasya-hero-generated.png
├── index.html
├── script.js
└── styles.css
```

## Local Preview

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://127.0.0.1:4173
```

Language-specific previews:

```text
http://127.0.0.1:4173/?lang=ru
http://127.0.0.1:4173/?lang=en
```

## Deployment

The repository is designed for GitHub Pages. Any commit pushed to `main` can be deployed as a static site without a build step.

## Quality Checks

Before publishing, verify:

- `node --check script.js`
- mobile width has no horizontal overflow
- RU / EN language switch updates visible copy, metadata, and `html lang`
- hero image assets return `200 OK`
- no local filesystem paths or private source references are present

## Status

Active development.
