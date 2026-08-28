const copyButton = document.querySelector("[data-copy-command]");
const languageButtons = document.querySelectorAll("[data-language-option]");
const setupCommand = `git clone https://github.com/xelvhk/vasya_ai.git
cd vasya_ai
bash scripts/setup_mac.sh
source .venv/bin/activate
ollama pull llama3
python scripts/doctor.py
python main.py`;

const translations = {
  ru: {
    metaTitle: "Vasya AI: локальный голосовой ассистент",
    metaDescription: "Vasya AI: локальный голосовой ассистент для продуктивности: голосовое управление, память, интеграции и FastAPI gateway.",
    brandHome: "Vasya AI: главная",
    mainNav: "Основная навигация",
    languageSwitch: "Выбор языка",
    navProduct: "Продукт",
    navCapabilities: "Возможности",
    navSystem: "Система",
    navLaunch: "Запуск",
    navCta: "Запустить локально",
    navGithub: "GitHub",
    heroBadge: "локальный голосовой слой",
    heroLede: "Голосовой ассистент, который живет рядом с рабочим столом: понимает команды, ведет память, запускает интеграции и остается под вашим контролем.",
    heroPrimary: "Запустить локально",
    heroGithub: "GitHub",
    statsAria: "Готовность продукта",
    statOneLabel: "ГОЛОСОВОЙ ЦИКЛ",
    statOneValue: "STT → намерение → действие → TTS",
    statTwoLabel: "ЛОКАЛЬНОЕ ЯДРО",
    statTwoValue: "SQLite, файлы, Ollama",
    statThreeLabel: "API СЛОЙ",
    statThreeValue: "FastAPI для thin clients",
    trustAria: "Ключевые поверхности продукта",
    trustVoice: "голосовой pipeline",
    trustMemory: "центр памяти",
    trustDesktop: "desktop shell",
    proofLabel: "Что уже работает",
    proofTitle: "У лендинга есть продуктовая опора, а не только настроение.",
    proofOneStatus: "live",
    proofOneTitle: "Voice loop",
    proofOneBody: "STT, intent routing, tool dispatch и TTS-ответы формируют основной путь взаимодействия.",
    proofTwoStatus: "ready",
    proofTwoTitle: "Doctor checks",
    proofTwoBody: "Setup validation проверяет Python, зависимости, Ollama, storage, API auth и optional integrations.",
    proofThreeStatus: "growing",
    proofThreeTitle: "Memory Center",
    proofThreeBody: "Локальный поиск, история дайджестов и проверяемые артефакты сохраняют контекст прозрачным.",
    proofFourStatus: "open",
    proofFourTitle: "FastAPI gateway",
    proofFourBody: "Chat, pipeline, realtime voice и memory routes готовят проект к thin clients.",
    productLabel: "Продукт",
    productTitle: "Не chatbot, а персональный operating layer.",
    productBody: "Vasya AI собирает голос, память, задачи, календарь и локальные артефакты в одну понятную систему. Фокус не на магии, а на проверяемом пути от команды до результата.",
    featureOneTitle: "Голосовой цикл команд",
    featureOneBody: "Hotkey, recorder, speech-to-text, routing policy и быстрые голосовые ответы.",
    featureTwoTitle: "Память с provenance",
    featureTwoBody: "Поиск по локальному контексту, дайджесты, recent artifacts и понятные границы источников.",
    featureThreeTitle: "Интеграции как адаптеры",
    featureThreeBody: "Obsidian, Notion, GitHub и календарные сценарии живут отдельно от ядра ассистента.",
    showcaseLabel: "Рабочий поток",
    showcaseTitle: "Один экран для ежедневного потока: сказать, уточнить, сохранить, выполнить.",
    showcaseBody: "Утренний брифинг, напоминания, диктовка, заметки и интеграционные обновления спроектированы как обычные рабочие пути, а не demo-only tricks.",
    showcaseCta: "Смотреть возможности",
    showcaseAria: "Превью рабочего потока Vasya AI",
    panelTopline: "голосовая сессия",
    sessionInputLabel: "ввод",
    sessionInput: "Добавь встречу с Сашей завтра в 18:00 и напомни за час.",
    sessionRouteLabel: "маршрут",
    sessionRoute: "calendar.create_event + reminder.confirmation + memory.note",
    sessionReplyLabel: "ответ",
    sessionReply: "Готово. Я добавил событие и поставил напоминание.",
    capabilitiesLabel: "Возможности",
    capabilitiesTitle: "Полезность строится слоями, а не обещаниями.",
    capOneTitle: "Ежедневный ассистент",
    capOneBody: "Утренний брифинг, напоминания, быстрые заметки и контекст задач на день.",
    capTwoTitle: "Присутствие на desktop",
    capTwoBody: "Tray control, widget, hotkey и видимые состояния ассистента без зависимости от браузера.",
    capThreeTitle: "Управляемая память",
    capThreeBody: "Локальный поиск, история дайджестов, quick-open действия и проверяемые артефакты.",
    capFourTitle: "Безопасные defaults",
    capFourBody: "Auth на API routes, throttling, safer dictation hosts и редактирование чувствительных логов.",
    systemLabel: "Архитектура",
    systemTitle: "Чистые границы вместо хаотичной “магии ассистента”.",
    systemBody: "Input, orchestration, domain agents, services, storage, integrations and API layer разделены так, чтобы проект можно было развивать без расползания логики по UI.",
    sysOneLabel: "Ввод",
    sysOneValue: "voice recorder<br />text commands",
    sysTwoLabel: "Router",
    sysTwoValue: "intent parser<br />policy layer",
    sysThreeLabel: "Agents",
    sysThreeValue: "task<br />calendar<br />note",
    sysFourLabel: "Services",
    sysFourValue: "memory<br />integrations",
    sysFiveLabel: "Output",
    sysFiveValue: "TTS<br />desktop<br />API",
    launchLabel: "Запуск",
    launchTitle: "Запуск должен быть таким же ясным, как первый ответ Васи.",
    launchBody: "Clone, setup, doctor, model pull and first run. Минимум ceremony, максимум проверяемости.",
    setupStepsAria: "Шаги локального запуска",
    setupOneKicker: "подготовка",
    setupOneTitle: "Setup",
    setupOneBody: "Собирает окружение и локальные файлы без перезаписи существующего `.env`.",
    setupTwoKicker: "проверка",
    setupTwoTitle: "Doctor",
    setupTwoBody: "Проверяет зависимости, storage, модель, TTS и интеграции перед первым запуском.",
    setupThreeKicker: "первый ответ",
    setupThreeTitle: "First run",
    setupThreeBody: "Запускает ассистента и показывает первый рабочий путь без ручной сборки контекста.",
    copySetup: "Копировать setup",
    copied: "Скопировано",
    copyFallback: "Выделите текст",
    footerText: "Vasya AI / локальный / голосовой / active development",
    backToTop: "Наверх",
  },
  en: {
    metaTitle: "Vasya AI: local-first voice assistant",
    metaDescription: "Vasya AI is a local-first voice assistant for desktop productivity with voice control, memory, integrations, and a FastAPI gateway.",
    brandHome: "Vasya AI home",
    mainNav: "Main navigation",
    languageSwitch: "Language selection",
    navProduct: "Product",
    navCapabilities: "Capabilities",
    navSystem: "System",
    navLaunch: "Launch",
    navCta: "Run locally",
    navGithub: "GitHub",
    heroBadge: "local-first voice layer",
    heroLede: "A voice assistant that lives beside your desktop: understands commands, keeps memory, runs integrations, and stays under your control.",
    heroPrimary: "Run locally",
    heroGithub: "GitHub",
    statsAria: "Product readiness",
    statOneLabel: "VOICE LOOP",
    statOneValue: "STT → intent → action → TTS",
    statTwoLabel: "LOCAL CORE",
    statTwoValue: "SQLite, files, Ollama",
    statThreeLabel: "API SURFACE",
    statThreeValue: "FastAPI for thin clients",
    trustAria: "Key product surfaces",
    trustVoice: "voice pipeline",
    trustMemory: "memory center",
    trustDesktop: "desktop shell",
    proofLabel: "What works today",
    proofTitle: "The landing page now rests on product proof, not just mood.",
    proofOneStatus: "live",
    proofOneTitle: "Voice loop",
    proofOneBody: "STT, intent routing, tool dispatch, and TTS replies form the core interaction path.",
    proofTwoStatus: "ready",
    proofTwoTitle: "Doctor checks",
    proofTwoBody: "Setup validation covers Python, dependencies, Ollama, storage, API auth, and optional integrations.",
    proofThreeStatus: "growing",
    proofThreeTitle: "Memory Center",
    proofThreeBody: "Local search, digest history, and inspectable artifacts keep context auditable.",
    proofFourStatus: "open",
    proofFourTitle: "FastAPI gateway",
    proofFourBody: "Chat, pipeline, realtime voice, and memory routes prepare the project for thin clients.",
    productLabel: "Product view",
    productTitle: "Not a chatbot. A personal operating layer.",
    productBody: "Vasya AI brings voice, memory, tasks, calendar, and local artifacts into one clear system. The focus is not magic, but a verifiable path from command to outcome.",
    featureOneTitle: "Voice command loop",
    featureOneBody: "Hotkey, recorder, speech-to-text, routing policy, and fast spoken replies.",
    featureTwoTitle: "Memory with provenance",
    featureTwoBody: "Searchable local context, digests, recent artifacts, and clear source boundaries.",
    featureThreeTitle: "Integrations as adapters",
    featureThreeBody: "Obsidian, Notion, GitHub, and calendar workflows sit outside the assistant core.",
    showcaseLabel: "Workflow",
    showcaseTitle: "One screen for the daily flow: say it, confirm it, save it, run it.",
    showcaseBody: "Morning brief, reminders, dictation, notes, and integration updates are designed as ordinary working paths, not demo-only tricks.",
    showcaseCta: "See capabilities",
    showcaseAria: "Vasya AI workflow preview",
    panelTopline: "voice session",
    sessionInputLabel: "input",
    sessionInput: "Add a meeting with Sasha tomorrow at 18:00 and remind me one hour before.",
    sessionRouteLabel: "route",
    sessionRoute: "calendar.create_event + reminder.confirmation + memory.note",
    sessionReplyLabel: "reply",
    sessionReply: "Done. I added the event and set the reminder.",
    capabilitiesLabel: "Capabilities",
    capabilitiesTitle: "Usefulness is built in layers, not promises.",
    capOneTitle: "Daily assistant",
    capOneBody: "Morning briefing, reminders, quick notes, and task context for the day.",
    capTwoTitle: "Desktop presence",
    capTwoBody: "Tray control, widget, hotkey, and visible assistant states without browser dependency.",
    capThreeTitle: "Managed memory",
    capThreeBody: "Local search, digest history, quick-open actions, and inspectable artifacts.",
    capFourTitle: "Security defaults",
    capFourBody: "Auth on API routes, throttling, safer dictation hosts, and redacted sensitive logs.",
    systemLabel: "System design",
    systemTitle: "Clean boundaries instead of chaotic assistant magic.",
    systemBody: "Input, orchestration, domain agents, services, storage, integrations, and the API layer are separated so the project can evolve without UI-coupled logic sprawl.",
    sysOneLabel: "Input",
    sysOneValue: "voice recorder<br />text commands",
    sysTwoLabel: "Router",
    sysTwoValue: "intent parser<br />policy layer",
    sysThreeLabel: "Agents",
    sysThreeValue: "task<br />calendar<br />note",
    sysFourLabel: "Services",
    sysFourValue: "memory<br />integrations",
    sysFiveLabel: "Output",
    sysFiveValue: "TTS<br />desktop<br />API",
    launchLabel: "Launch",
    launchTitle: "Startup should be as clear as Vasya’s first reply.",
    launchBody: "Clone, setup, doctor, model pull, and first run. Less ceremony, more verifiability.",
    setupStepsAria: "Local launch steps",
    setupOneKicker: "prepare",
    setupOneTitle: "Setup",
    setupOneBody: "Prepares the environment and local files without overwriting an existing `.env`.",
    setupTwoKicker: "check",
    setupTwoTitle: "Doctor",
    setupTwoBody: "Checks dependencies, storage, model, TTS, and integrations before the first run.",
    setupThreeKicker: "first reply",
    setupThreeTitle: "First run",
    setupThreeBody: "Starts the assistant and shows the first working path without manual context assembly.",
    copySetup: "Copy setup",
    copied: "Copied",
    copyFallback: "Select text",
    footerText: "Vasya AI / local-first / voice-first / active development",
    backToTop: "Back to top",
  },
};

function normalizeLanguage(value) {
  return value === "ru" || value === "en" ? value : null;
}

function preferredLanguage() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = normalizeLanguage(params.get("lang"));
  if (fromUrl) return fromUrl;

  const saved = normalizeLanguage(window.localStorage.getItem("vasya-language"));
  if (saved) return saved;

  return navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en";
}

function setText(element, value) {
  if (value.includes("<br")) {
    element.innerHTML = value;
    return;
  }
  element.textContent = value;
}

function syncLanguageUrl(language) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  window.history.replaceState({}, "", `${url.pathname}?${url.searchParams}${url.hash}`);
}

function setMeta(name, value, attr = "name") {
  document.querySelector(`meta[${attr}="${name}"]`)?.setAttribute("content", value);
}

function applyLanguage(language, { updateUrl = false } = {}) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.title = dictionary.metaTitle;
  setMeta("description", dictionary.metaDescription);
  setMeta("og:title", dictionary.metaTitle, "property");
  setMeta("og:description", dictionary.metaDescription, "property");
  setMeta("twitter:title", dictionary.metaTitle);
  setMeta("twitter:description", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) setText(element, dictionary[key]);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.languageOption === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (copyButton) copyButton.textContent = dictionary.copySetup;
  window.localStorage.setItem("vasya-language", language);
  if (updateUrl) syncLanguageUrl(language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.languageOption || "en", { updateUrl: true });
  });
});

copyButton?.addEventListener("click", async () => {
  const language = document.documentElement.lang === "ru" ? "ru" : "en";
  const dictionary = translations[language];
  try {
    await navigator.clipboard.writeText(setupCommand);
    copyButton.textContent = dictionary.copied;
    window.setTimeout(() => {
      copyButton.textContent = dictionary.copySetup;
    }, 1600);
  } catch {
    copyButton.textContent = dictionary.copyFallback;
  }
});

applyLanguage(preferredLanguage());
