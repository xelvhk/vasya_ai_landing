# Vasya AI Landing

[Русская версия](README.ru.md)

Static bilingual product landing page for [Vasya AI](https://github.com/xelvhk/vasya_ai), a local-first desktop assistant for voice tasks, notes, calendar flows, and daily automation.

## Problem

- A technical assistant repository needs a clear product entry point for non-code review.
- Long README sections are not enough to explain user value, privacy boundaries, and setup flow quickly.
- A landing page should be deployable without a backend or build pipeline.

## Stack

- HTML, CSS, JavaScript
- Static GitHub Pages deployment
- Optimized AVIF/WebP/PNG assets
- RU/EN copy with URL-based language switching

## Setup

```bash
git clone https://github.com/xelvhk/vasya_ai_landing.git
cd vasya_ai_landing
python3 -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173
http://127.0.0.1:4173/?lang=ru
http://127.0.0.1:4173/?lang=en
```

No `.env` file is required.

## Architecture

```text
index.html        page structure, metadata, and content containers
styles.css        responsive layout, product visual system, animations
script.js         language switching, interactive UI behavior
assets/           hero images, social preview, favicon, ambient audio
.github/workflows GitHub Pages deployment workflow
```

The project is intentionally backend-free: every feature must work as a static page on GitHub Pages.

## Demo

- Production: [https://xelvhk.github.io/vasya_ai_landing/](https://xelvhk.github.io/vasya_ai_landing/)
- Screenshot placeholder: add `docs/screenshots/home.png` after the next visual refresh.

## Quality Checks

```bash
node --check script.js
python3 -m http.server 4173
```

Manual checks:

- mobile width has no horizontal overflow;
- RU/EN switch updates visible copy and metadata;
- hero images load successfully;
- no private local paths are present in public files.

## Roadmap

- [ ] Add fresh product screenshots from `vasya_ai`.
- [ ] Add a short demo video section.
- [ ] Add a lightweight visual regression check for the landing page.

## Status

Active development

## License

License is not specified yet.
