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
    metaTitle: "Vasya AI: локальный голосовой помощник",
    metaDescription: "Vasya AI помогает голосом управлять задачами, встречами, заметками и памятью. Работает локально и оставляет данные под вашим контролем.",
    brandHome: "Vasya AI: главная",
    skipToContent: "Перейти к содержанию",
    mainNav: "Основная навигация",
    languageSwitch: "Выбор языка",
    navProduct: "О Васе",
    navCapabilities: "Что умеет",
    navSystem: "Как устроен",
    navLaunch: "Как запустить",
    navCta: "Запустить Васю",
    navGithub: "GitHub",
    heroBadge: "локальный голосовой помощник",
    heroLede: "Скажите, что нужно сделать. Вася добавит встречу, сохранит заметку, найдёт нужное и ответит голосом.",
    heroPrimary: "Запустить Васю",
    heroGithub: "GitHub",
    statsAria: "Коротко о Васе",
    statOneLabel: "ОТ СЛОВ К ДЕЛУ",
    statOneValue: "Слышит, понимает, выполняет, отвечает",
    statTwoLabel: "РАБОТАЕТ ЛОКАЛЬНО",
    statTwoValue: "Данные и память остаются у вас",
    statThreeLabel: "МОЖНО РАСШИРЯТЬ",
    statThreeValue: "Подключайте нужные сервисы через API",
    trustAria: "Что есть у Васи",
    trustVoice: "голосовые команды",
    trustMemory: "локальная память",
    trustDesktop: "приложение для компьютера",
    proofLabel: "Что уже работает",
    proofTitle: "Уже помогает в реальных задачах.",
    proofOneStatus: "работает",
    proofOneTitle: "Слышит и отвечает",
    proofOneBody: "Распознаёт речь, понимает просьбу, выполняет команду и отвечает голосом.",
    proofTwoStatus: "готово",
    proofTwoTitle: "Проверяет себя перед запуском",
    proofTwoBody: "Заранее сообщает, всё ли готово: Python, модель, голос, хранилище и подключённые сервисы.",
    proofThreeStatus: "развивается",
    proofThreeTitle: "Помнит важное",
    proofThreeBody: "Ищет по локальной памяти, показывает недавние записи и открывает найденные файлы и ссылки.",
    proofFourStatus: "доступно",
    proofFourTitle: "Готов к новым интерфейсам",
    proofFourBody: "Через FastAPI к Васе можно подключать другие приложения, не меняя его основную логику.",
    productLabel: "О Васе",
    productTitle: "Не просто чат. Помощник, который умеет действовать.",
    productBody: "Попросите Васю создать задачу, добавить встречу, сохранить заметку или найти информацию. Для удаления и очистки памяти он попросит подтверждение.",
    featureOneTitle: "Понимает голосовые команды",
    featureOneBody: "Запускается по горячей клавише, распознаёт речь и отвечает голосом.",
    featureTwoTitle: "Помнит контекст",
    featureTwoBody: "Хранит заметки и историю локально, помогает быстро вернуться к нужной информации.",
    featureThreeTitle: "Работает с вашими сервисами",
    featureThreeBody: "Подключается к Obsidian, Notion, GitHub и календарю, сохраняя понятные границы между сервисами.",
    showcaseLabel: "Пример",
    showcaseTitle: "Попросите. Проверьте. Готово.",
    showcaseBody: "Вася показывает, что понял, какое действие выполнит и что сохранил в памяти.",
    showcaseCta: "Что умеет Вася",
    showcaseAria: "Пример того, как Вася выполняет команду",
    showcaseImageAlt: "Голосовой помощник Вася рядом с ноутбуком",
    sessionInputLabel: "Вы сказали",
    sessionInput: "Добавь встречу с Сашей завтра в 18:00 и напомни за час.",
    sessionRouteLabel: "Вася делает",
    sessionRoute: "Создать встречу, поставить напоминание и сохранить запись.",
    sessionReplyLabel: "Вася отвечает",
    sessionReply: "Готово. Я добавил событие и поставил напоминание.",
    capabilitiesLabel: "Что умеет",
    capabilitiesTitle: "Вася помогает в повседневной работе.",
    capOneTitle: "Начать день собранно",
    capOneBody: "Собирает утренний обзор, напоминает о делах и помогает не потерять задачи на день.",
    capTwoTitle: "Всегда рядом",
    capTwoBody: "Живёт в меню и небольшом виджете, запускается по горячей клавише или клику.",
    capThreeTitle: "Помнить важное",
    capThreeBody: "Находит записи, показывает последние изменения и открывает нужные файлы и ссылки.",
    capFourTitle: "Беречь ваши данные",
    capFourBody: "Хранит основную информацию локально, защищает API и скрывает чувствительные данные в журналах.",
    systemLabel: "Как устроен",
    systemTitle: "Внутри всё разложено по местам.",
    systemBody: "Вася отдельно принимает команду, понимает её, выбирает действие, обращается к нужному сервису и возвращает результат.",
    sysOneLabel: "Команда",
    sysOneValue: "голос<br />или текст",
    sysTwoLabel: "Понимание",
    sysTwoValue: "что вы<br />хотите",
    sysThreeLabel: "Действие",
    sysThreeValue: "задача<br />встреча<br />заметка",
    sysFourLabel: "Сервисы",
    sysFourValue: "память<br />интеграции",
    sysFiveLabel: "Ответ",
    sysFiveValue: "голос<br />приложение<br />API",
    launchLabel: "Как запустить",
    launchTitle: "Запустить Васю можно шаг за шагом.",
    launchBody: "Подготовьте окружение, проверьте зависимости и получите первый ответ. Скрипты подскажут, если чего-то не хватает.",
    setupStepsAria: "Как запустить Васю локально",
    setupOneKicker: "окружение",
    setupOneTitle: "Подготовить проект",
    setupOneBody: "Устанавливает зависимости и создаёт локальные файлы, не перезаписывая существующий `.env`.",
    setupTwoKicker: "проверка",
    setupTwoTitle: "Убедиться, что всё готово",
    setupTwoBody: "Проверяет Python, хранилище, модель, голос и подключённые сервисы.",
    setupThreeKicker: "запуск",
    setupThreeTitle: "Познакомиться с Васей",
    setupThreeBody: "Запускает помощника и показывает, как получить первый рабочий ответ.",
    copySetup: "Скопировать команды",
    copied: "Скопировано",
    copyFallback: "Выделите команды",
    footerText: "Vasya AI. Локальный голосовой помощник в активной разработке.",
    backToTop: "Наверх",
  },
  en: {
    metaTitle: "Vasya AI: your local voice assistant",
    metaDescription: "Vasya AI helps manage tasks, meetings, notes, and memory by voice. It runs locally and keeps your data under your control.",
    brandHome: "Vasya AI home",
    skipToContent: "Skip to content",
    mainNav: "Main navigation",
    languageSwitch: "Language selection",
    navProduct: "Meet Vasya",
    navCapabilities: "What he can do",
    navSystem: "How it works",
    navLaunch: "Get started",
    navCta: "Run Vasya",
    navGithub: "GitHub",
    heroBadge: "local voice assistant",
    heroLede: "Tell Vasya what you need. He can add a meeting, save a note, find context, and reply by voice.",
    heroPrimary: "Run Vasya",
    heroGithub: "GitHub",
    statsAria: "Vasya at a glance",
    statOneLabel: "FROM WORDS TO ACTION",
    statOneValue: "Listens, understands, acts, and replies",
    statTwoLabel: "RUNS LOCALLY",
    statTwoValue: "Your data and memory stay with you",
    statThreeLabel: "READY TO GROW",
    statThreeValue: "Connect the services you need through the API",
    trustAria: "What Vasya includes",
    trustVoice: "voice commands",
    trustMemory: "local memory",
    trustDesktop: "desktop app",
    proofLabel: "What works today",
    proofTitle: "Already useful for real work.",
    proofOneStatus: "working",
    proofOneTitle: "Listens and replies",
    proofOneBody: "Recognizes speech, understands the request, runs the command, and replies by voice.",
    proofTwoStatus: "ready",
    proofTwoTitle: "Checks itself before startup",
    proofTwoBody: "Reports whether Python, the model, voice, local files, and connected services are ready.",
    proofThreeStatus: "growing",
    proofThreeTitle: "Remembers what matters",
    proofThreeBody: "Searches local memory, shows recent entries, and opens the files and links it finds.",
    proofFourStatus: "available",
    proofFourTitle: "Ready for new interfaces",
    proofFourBody: "FastAPI lets other apps connect to Vasya without changing the assistant core.",
    productLabel: "Meet Vasya",
    productTitle: "More than chat. An assistant that can take action.",
    productBody: "Ask Vasya to create a task, add a meeting, save a note, or find information. Deleting data and clearing memory require confirmation.",
    featureOneTitle: "Understands voice commands",
    featureOneBody: "Starts from a keyboard shortcut, recognizes speech, and replies by voice.",
    featureTwoTitle: "Remembers the context",
    featureTwoBody: "Keeps notes and history locally, so useful information is easy to find again.",
    featureThreeTitle: "Works with your services",
    featureThreeBody: "Connects to Obsidian, Notion, GitHub, and your calendar while keeping each service separate.",
    showcaseLabel: "Example",
    showcaseTitle: "Ask. Check. Done.",
    showcaseBody: "Vasya shows what he understood, what action he will take, and what he saved to memory.",
    showcaseCta: "What Vasya can do",
    showcaseAria: "Example of Vasya completing a command",
    showcaseImageAlt: "Vasya, a voice assistant beside a laptop",
    sessionInputLabel: "You said",
    sessionInput: "Add a meeting with Sasha tomorrow at 18:00 and remind me one hour before.",
    sessionRouteLabel: "Vasya does",
    sessionRoute: "Create the meeting, set a reminder, and save a note.",
    sessionReplyLabel: "Vasya replies",
    sessionReply: "Done. I added the event and set the reminder.",
    capabilitiesLabel: "What he can do",
    capabilitiesTitle: "Vasya helps with everyday work.",
    capOneTitle: "Start the day prepared",
    capOneBody: "Builds a morning brief, reminds you what matters, and keeps the day’s tasks in view.",
    capTwoTitle: "Always close at hand",
    capTwoBody: "Lives in the system menu and a small widget, ready from a keyboard shortcut or a click.",
    capThreeTitle: "Remember what matters",
    capThreeBody: "Finds notes, shows recent changes, and opens the files and links you need.",
    capFourTitle: "Keep your data safer",
    capFourBody: "Stores core information locally, protects the API, and removes sensitive details from logs.",
    systemLabel: "How it works",
    systemTitle: "Everything inside has a clear place.",
    systemBody: "Vasya receives the command, understands it, chooses an action, calls the right service, and returns the result.",
    sysOneLabel: "Command",
    sysOneValue: "voice<br />or text",
    sysTwoLabel: "Understanding",
    sysTwoValue: "what you<br />need",
    sysThreeLabel: "Action",
    sysThreeValue: "task<br />meeting<br />note",
    sysFourLabel: "Services",
    sysFourValue: "memory<br />integrations",
    sysFiveLabel: "Reply",
    sysFiveValue: "voice<br />app<br />API",
    launchLabel: "Get started",
    launchTitle: "Run Vasya one step at a time.",
    launchBody: "Prepare the environment, check the dependencies, and get the first reply. The scripts explain what is missing.",
    setupStepsAria: "How to run Vasya locally",
    setupOneKicker: "environment",
    setupOneTitle: "Prepare the project",
    setupOneBody: "Installs dependencies and creates local files without overwriting an existing `.env`.",
    setupTwoKicker: "check",
    setupTwoTitle: "Make sure everything is ready",
    setupTwoBody: "Checks Python, local files, the model, voice, and connected services.",
    setupThreeKicker: "start",
    setupThreeTitle: "Meet Vasya",
    setupThreeBody: "Starts the assistant and shows how to get the first working reply.",
    copySetup: "Copy commands",
    copied: "Copied",
    copyFallback: "Select the commands",
    footerText: "Vasya AI. A local voice assistant, actively being built.",
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

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key]) element.setAttribute("alt", dictionary[key]);
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
