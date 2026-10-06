const copyButton = document.querySelector("[data-copy-command]");
const languageButtons = document.querySelectorAll("[data-language-option]");
const lofiPlayer = document.querySelector("[data-lofi-player]");
const lofiToggle = document.querySelector("[data-lofi-toggle]");
const lofiVolume = document.querySelector("[data-lofi-volume]");
const lofiStatus = document.querySelector("[data-lofi-status]");
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
    proofTitle: "Уже помогает в реальных задачах",
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
    productTitle: "Не просто чат. Помощник, который умеет действовать",
    productBody: "Попросите Васю создать задачу, добавить встречу, сохранить заметку или найти информацию. Для удаления и очистки памяти он попросит подтверждение.",
    featureOneTitle: "Понимает голосовые команды",
    featureOneBody: "Запускается по горячей клавише, распознаёт речь и отвечает голосом.",
    featureTwoTitle: "Помнит контекст",
    featureTwoBody: "Хранит заметки и историю локально, помогает быстро вернуться к нужной информации.",
    featureThreeTitle: "Работает с вашими сервисами",
    featureThreeBody: "Подключается к Obsidian, Notion, GitHub и календарю, сохраняя понятные границы между сервисами.",
    showcaseLabel: "Пример",
    showcaseTitle: "Попросите. Проверьте. Готово",
    showcaseBody: "Вася показывает, что понял, какое действие выполнит и что сохранил в памяти.",
    showcaseCta: "Что умеет Вася",
    showcaseAria: "Пример того, как Вася выполняет команду",
    showcaseImageAlt: "Пиксельный помощник Вася работает за ноутбуком",
    lofiEyebrow: "lo-fi режим",
    lofiTitle: "Фокус с Васей",
    lofiVolumeLabel: "Громкость музыки",
    lofiPlayLabel: "Включить lo-fi музыку",
    lofiPauseLabel: "Поставить lo-fi музыку на паузу",
    lofiStopped: "Музыка выключена",
    lofiPlaying: "Играет спокойная музыка",
    lofiUnsupported: "Музыка не поддерживается в этом браузере",
    sessionInputLabel: "Вы сказали",
    sessionInput: "Добавь встречу с Сашей завтра в 18:00 и напомни за час.",
    sessionRouteLabel: "Вася делает",
    sessionRoute: "Создать встречу, поставить напоминание и сохранить запись.",
    sessionReplyLabel: "Вася отвечает",
    sessionReply: "Готово. Я добавил событие и поставил напоминание.",
    capabilitiesLabel: "Что умеет",
    capabilitiesTitle: "Вася помогает в повседневной работе",
    capOneTitle: "Начать день собранно",
    capOneBody: "Собирает утренний обзор, напоминает о делах и помогает не потерять задачи на день.",
    capTwoTitle: "Всегда рядом",
    capTwoBody: "Живёт в меню и небольшом виджете, запускается по горячей клавише или клику.",
    capThreeTitle: "Помнить важное",
    capThreeBody: "Находит записи, показывает последние изменения и открывает нужные файлы и ссылки.",
    capFourTitle: "Беречь ваши данные",
    capFourBody: "Хранит основную информацию локально, защищает API и скрывает чувствительные данные в журналах.",
    systemLabel: "Как устроен",
    systemTitle: "Вася разложит всё по полочкам",
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
    launchTitle: "Пара шагов, и Вася ответит на все вопросы",
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
    proofTitle: "Already useful for real work",
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
    productTitle: "More than chat. An assistant that can take action",
    productBody: "Ask Vasya to create a task, add a meeting, save a note, or find information. Deleting data and clearing memory require confirmation.",
    featureOneTitle: "Understands voice commands",
    featureOneBody: "Starts from a keyboard shortcut, recognizes speech, and replies by voice.",
    featureTwoTitle: "Remembers the context",
    featureTwoBody: "Keeps notes and history locally, so useful information is easy to find again.",
    featureThreeTitle: "Works with your services",
    featureThreeBody: "Connects to Obsidian, Notion, GitHub, and your calendar while keeping each service separate.",
    showcaseLabel: "Example",
    showcaseTitle: "Ask. Check. Done",
    showcaseBody: "Vasya shows what he understood, what action he will take, and what he saved to memory.",
    showcaseCta: "What Vasya can do",
    showcaseAria: "Example of Vasya completing a command",
    showcaseImageAlt: "Pixel-art assistant Vasya working at a laptop",
    lofiEyebrow: "lo-fi mode",
    lofiTitle: "Focus with Vasya",
    lofiVolumeLabel: "Music volume",
    lofiPlayLabel: "Play lo-fi music",
    lofiPauseLabel: "Pause lo-fi music",
    lofiStopped: "Music is off",
    lofiPlaying: "Calm music is playing",
    lofiUnsupported: "Music is not supported in this browser",
    sessionInputLabel: "You said",
    sessionInput: "Add a meeting with Sasha tomorrow at 18:00 and remind me one hour before.",
    sessionRouteLabel: "Vasya does",
    sessionRoute: "Create the meeting, set a reminder, and save a note.",
    sessionReplyLabel: "Vasya replies",
    sessionReply: "Done. I added the event and set the reminder.",
    capabilitiesLabel: "What he can do",
    capabilitiesTitle: "Vasya helps with everyday work",
    capOneTitle: "Start the day prepared",
    capOneBody: "Builds a morning brief, reminds you what matters, and keeps the day’s tasks in view.",
    capTwoTitle: "Always close at hand",
    capTwoBody: "Lives in the system menu and a small widget, ready from a keyboard shortcut or a click.",
    capThreeTitle: "Remember what matters",
    capThreeBody: "Finds notes, shows recent changes, and opens the files and links you need.",
    capFourTitle: "Keep your data safer",
    capFourBody: "Stores core information locally, protects the API, and removes sensitive details from logs.",
    systemLabel: "How it works",
    systemTitle: "Vasya keeps everything organized",
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
    launchTitle: "A couple of steps and Vasya is ready to answer your questions",
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

let activeLanguage = "ru";
let audioContext = null;
let lofiMaster = null;
let lofiScheduler = null;
let nextChordTime = 0;
let chordIndex = 0;
let isLofiPlaying = false;
let lofiTransitioning = false;

const lofiTempo = 72;
const chordDuration = (60 / lofiTempo) * 4;
const chordProgression = [
  [48, 55, 59, 64],
  [45, 52, 55, 60],
  [41, 48, 52, 57],
  [43, 50, 53, 59],
];

function midiToFrequency(note) {
  return 440 * 2 ** ((note - 69) / 12);
}

function createVinylNoise(context) {
  const buffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate);
  const samples = buffer.getChannelData(0);
  let brownNoise = 0;

  for (let index = 0; index < samples.length; index += 1) {
    brownNoise = (brownNoise + 0.02 * (Math.random() * 2 - 1)) / 1.02;
    samples[index] = brownNoise * 2.8;
  }

  const source = context.createBufferSource();
  const highPass = context.createBiquadFilter();
  const lowPass = context.createBiquadFilter();
  const gain = context.createGain();
  source.buffer = buffer;
  source.loop = true;
  highPass.type = "highpass";
  highPass.frequency.value = 320;
  lowPass.type = "lowpass";
  lowPass.frequency.value = 3600;
  gain.gain.value = 0.012;
  source.connect(highPass).connect(lowPass).connect(gain).connect(lofiMaster);
  source.start();
}

function scheduleVoice(note, start, duration, options = {}) {
  const oscillator = audioContext.createOscillator();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  const attack = options.attack || 0.35;
  const level = options.level || 0.03;

  oscillator.type = options.type || "triangle";
  oscillator.frequency.value = midiToFrequency(note);
  oscillator.detune.value = options.detune || 0;
  filter.type = "lowpass";
  filter.frequency.value = options.cutoff || 1100;
  filter.Q.value = 0.5;

  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(level, start + attack);
  gain.gain.setValueAtTime(level, start + Math.max(attack, duration - 0.65));
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  oscillator.connect(filter).connect(gain).connect(lofiMaster);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.05);
}

function scheduleChord(chord, start) {
  chord.forEach((note, index) => {
    scheduleVoice(note, start, chordDuration + 0.08, {
      attack: 0.48,
      cutoff: 920 + index * 90,
      detune: (index - 1.5) * 2,
      level: 0.025,
      type: index % 2 === 0 ? "triangle" : "sine",
    });
  });

  scheduleVoice(chord[0] - 12, start, chordDuration * 0.72, {
    attack: 0.08,
    cutoff: 340,
    level: 0.045,
    type: "sine",
  });

  [0.5, 1.5, 2.5].forEach((beat, index) => {
    scheduleVoice(chord[(index + 2) % chord.length] + 12, start + beat * (60 / lofiTempo), 0.42, {
      attack: 0.012,
      cutoff: 1450,
      level: 0.011,
      type: "sine",
    });
  });
}

function scheduleLofiAhead() {
  if (!audioContext || !isLofiPlaying) return;

  while (nextChordTime < audioContext.currentTime + 0.4) {
    scheduleChord(chordProgression[chordIndex], nextChordTime);
    nextChordTime += chordDuration;
    chordIndex = (chordIndex + 1) % chordProgression.length;
  }
}

function setLofiVolume(value, duration = 0.12) {
  if (!audioContext || !lofiMaster) return;

  const now = audioContext.currentTime;
  lofiMaster.gain.cancelScheduledValues(now);
  lofiMaster.gain.setValueAtTime(lofiMaster.gain.value, now);
  lofiMaster.gain.linearRampToValueAtTime(value, now + duration);
}

function initializeLofi() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return false;

  audioContext = new AudioContextClass();
  const compressor = audioContext.createDynamicsCompressor();
  lofiMaster = audioContext.createGain();
  lofiMaster.gain.value = 0;
  compressor.threshold.value = -18;
  compressor.knee.value = 18;
  compressor.ratio.value = 3;
  compressor.attack.value = 0.02;
  compressor.release.value = 0.35;
  lofiMaster.connect(compressor).connect(audioContext.destination);
  createVinylNoise(audioContext);
  return true;
}

function updateLofiUI(dictionary = translations[activeLanguage]) {
  if (!lofiPlayer || !lofiToggle || !lofiStatus) return;

  const supported = Boolean(window.AudioContext || window.webkitAudioContext);
  const label = isLofiPlaying ? dictionary.lofiPauseLabel : dictionary.lofiPlayLabel;
  lofiPlayer.classList.toggle("is-playing", isLofiPlaying);
  lofiToggle.setAttribute("aria-pressed", String(isLofiPlaying));
  lofiToggle.setAttribute("aria-label", label);
  lofiToggle.title = label;
  lofiToggle.disabled = !supported;
  lofiStatus.textContent = supported
    ? isLofiPlaying
      ? dictionary.lofiPlaying
      : dictionary.lofiStopped
    : dictionary.lofiUnsupported;
}

async function startLofi() {
  if (!audioContext && !initializeLofi()) {
    updateLofiUI();
    return;
  }

  await audioContext.resume();
  isLofiPlaying = true;
  nextChordTime = audioContext.currentTime + 0.05;
  scheduleLofiAhead();
  lofiScheduler = window.setInterval(scheduleLofiAhead, 120);
  setLofiVolume(Number(lofiVolume?.value || 0.32), 0.45);
  updateLofiUI();
}

function stopLofi() {
  if (!audioContext) return;

  isLofiPlaying = false;
  window.clearInterval(lofiScheduler);
  lofiScheduler = null;
  setLofiVolume(0, 0.18);
  updateLofiUI();

  const contextToClose = audioContext;
  window.setTimeout(() => {
    if (isLofiPlaying || audioContext !== contextToClose) return;
    contextToClose.close();
    audioContext = null;
    lofiMaster = null;
  }, 220);
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
  activeLanguage = language;
  updateLofiUI(dictionary);
  window.localStorage.setItem("vasya-language", language);
  if (updateUrl) syncLanguageUrl(language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.languageOption || "en", { updateUrl: true });
  });
});

lofiToggle?.addEventListener("click", async () => {
  if (lofiTransitioning) return;

  lofiTransitioning = true;
  try {
    if (isLofiPlaying) {
      stopLofi();
    } else {
      await startLofi();
    }
  } catch {
    isLofiPlaying = false;
    updateLofiUI();
  } finally {
    lofiTransitioning = false;
  }
});

lofiVolume?.addEventListener("input", () => {
  if (isLofiPlaying) setLofiVolume(Number(lofiVolume.value));
});

window.addEventListener("pagehide", () => {
  window.clearInterval(lofiScheduler);
  audioContext?.close();
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
