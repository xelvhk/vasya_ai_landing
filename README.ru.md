# Vasya AI Landing

[English version](README.md)

Статическая двуязычная продуктовая страница для [Vasya AI](https://github.com/xelvhk/vasya_ai): local-first desktop-ассистента для голосовых задач, заметок, календаря и ежедневной автоматизации.

## Проблема

- Техническому репозиторию ассистента нужна понятная продуктовая входная точка.
- Длинного README недостаточно, чтобы быстро показать ценность, границы приватности и сценарий запуска.
- Лендинг должен публиковаться без backend и сложного build-процесса.

## Стек

- HTML, CSS, JavaScript
- Статический деплой через GitHub Pages
- Оптимизированные AVIF/WebP/PNG-ассеты
- RU/EN-контент с переключением языка через URL

## Setup

```bash
git clone https://github.com/xelvhk/vasya_ai_landing.git
cd vasya_ai_landing
python3 -m http.server 4173
```

Откройте:

```text
http://127.0.0.1:4173
http://127.0.0.1:4173/?lang=ru
http://127.0.0.1:4173/?lang=en
```

Файл `.env` не требуется.

## Архитектура

```text
index.html        структура страницы, metadata и контейнеры контента
styles.css        responsive layout, визуальная система, анимации
script.js         переключение языка и интерактивное поведение
assets/           hero images, social preview, favicon, ambient audio
.github/workflows workflow деплоя на GitHub Pages
```

Проект намеренно остаётся backend-free: всё должно работать как статическая страница на GitHub Pages.

## Demo

- Production: [https://xelvhk.github.io/vasya_ai_landing/](https://xelvhk.github.io/vasya_ai_landing/)
- Screenshot placeholder: добавить `docs/screenshots/home.png` после следующего визуального обновления.

## Проверки качества

```bash
node --check script.js
python3 -m http.server 4173
```

Ручные проверки:

- на mobile width нет горизонтального overflow;
- RU/EN переключает видимый текст и metadata;
- hero images успешно загружаются;
- в публичных файлах нет приватных локальных путей.

## Roadmap

- [ ] Добавить свежие product screenshots из `vasya_ai`.
- [ ] Добавить короткий demo video section.
- [ ] Добавить лёгкую visual regression проверку лендинга.

## Статус

Active development

## Лицензия

Лицензия пока не указана.
