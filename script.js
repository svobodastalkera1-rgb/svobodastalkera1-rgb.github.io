/* Localization keeps exact English text nodes and never replaces element markup. */
(() => {
  const storageKey = "portfolio-language";
  const supported = ["en", "ru", "no"];
  const translations = [
  [
    "About",
    "Обо мне",
    "Om meg"
  ],
  [
    "Stack",
    "Стек",
    "Teknologier"
  ],
  [
    "Projects",
    "Проекты",
    "Prosjekter"
  ],
  [
    "Contact",
    "Контакты",
    "Kontakt"
  ],
  [
    "Python Backend Developer",
    "Бэкенд-разработчик на Python",
    "Backendutvikler med Python"
  ],
  [
    "Building backend systems",
    "Создаю бэкенд-системы",
    "Jeg bygger backendsystemer"
  ],
  [
    "with Python",
    "на Python",
    "med Python"
  ],
  [
    "and AI-assisted workflows",
    "и использую ИИ в рабочих процессах",
    "og arbeidsflyter støttet av KI"
  ],
  [
    "Hi, I'm",
    "Привет, я",
    "Hei, jeg er"
  ],
  [
    "Oleg Marikov",
    "Олег Мариков",
    "Oleg Marikov"
  ],
  [
    ". I build backend applications, APIs and project architecture with a focus on practical engineering, structured development and real products.",
    ". Я создаю бэкенд-приложения, API и архитектуру проектов, уделяя внимание практическим инженерным задачам, системной разработке и реальным продуктам.",
    ". Jeg bygger backendapplikasjoner, API-er og prosjektarkitektur med vekt på praktisk ingeniørarbeid, strukturert utvikling og reelle produkter."
  ],
  [
    "View Projects",
    "Смотреть проекты",
    "Se prosjekter"
  ],
  [
    "GitHub Profile",
    "Профиль GitHub",
    "GitHub-profil"
  ],
  [
    "Backend Focus",
    "Специализация на бэкенде",
    "Fokus på backend"
  ],
  [
    "APIs, databases and architecture",
    "API, базы данных и архитектура",
    "API-er, databaser og arkitektur"
  ],
  [
    "AI-assisted Development",
    "Разработка с помощью ИИ",
    "Utvikling med KI-støtte"
  ],
  [
    "Codex, ChatGPT and structured AI workflows",
    "Codex, ChatGPT и системные рабочие процессы с ИИ",
    "Codex, ChatGPT og strukturerte arbeidsflyter med KI"
  ],
  [
    "AI-assisted engineering",
    "Инженерная работа с помощью ИИ",
    "Ingeniørarbeid med KI-støtte"
  ],
  [
    "Who I am",
    "Кто я",
    "Hvem jeg er"
  ],
  [
    "Practical development",
    "Практическая разработка",
    "Praktisk utvikling"
  ],
  [
    "I focus on learning backend development through real projects: architecture, APIs, databases, automated testing, CI/CD and deployment workflows.",
    "Я изучаю бэкенд-разработку на реальных проектах: архитектуру, API, базы данных, автоматизированное тестирование, CI/CD и процессы развёртывания.",
    "Jeg lærer backendutvikling gjennom reelle prosjekter: arkitektur, API-er, databaser, automatisert testing, CI/CD og arbeidsflyter for utrulling."
  ],
  [
    "AI-enhanced engineering",
    "Инженерная работа с поддержкой ИИ",
    "Ingeniørarbeid styrket av KI"
  ],
  [
    "I use AI tools as part of the engineering workflow for research, implementation, code review, testing and structured iteration.",
    "Я использую инструменты ИИ в инженерном процессе для исследований, реализации, ревью кода, тестирования и последовательных доработок.",
    "Jeg bruker KI-verktøy som en del av utviklingsarbeidet til undersøkelser, implementering, kodegjennomgang, testing og systematiske forbedringer."
  ],
  [
    "Product-oriented thinking",
    "Продуктовое мышление",
    "Produktorientert tenkning"
  ],
  [
    "I am interested in building complete products: from requirements and architecture to implementation, validation and future scaling.",
    "Мне интересно создавать полноценные продукты: от требований и архитектуры до реализации, проверки и дальнейшего масштабирования.",
    "Jeg er interessert i å bygge komplette produkter: fra krav og arkitektur til implementering, validering og fremtidig skalering."
  ],
  [
    "Tech Stack",
    "Технологический стек",
    "Teknologistakk"
  ],
  [
    "Tools I work with",
    "Инструменты, с которыми я работаю",
    "Verktøyene jeg bruker"
  ],
  [
    "Backend",
    "Бэкенд",
    "Backend"
  ],
  [
    "Data",
    "Данные",
    "Data"
  ],
  [
    "Data modeling",
    "Моделирование данных",
    "Datamodellering"
  ],
  [
    "Engineering",
    "Инженерные инструменты",
    "Utviklingsverktøy"
  ],
  [
    "AI Tools",
    "Инструменты ИИ",
    "KI-verktøy"
  ],
  [
    "AI-assisted development",
    "Разработка с помощью ИИ",
    "Utvikling med KI-støtte"
  ],
  [
    "Workflow automation",
    "Автоматизация рабочих процессов",
    "Automatisering av arbeidsflyter"
  ],
  [
    "Selected work",
    "Избранные работы",
    "Utvalgte prosjekter"
  ],
  [
    "Learning Platform",
    "Обучающая платформа",
    "Læringsplattform"
  ],
  [
    "A Norwegian learning platform built around structured educational content, Natural Method methodology and production-oriented application architecture.",
    "Платформа для изучения норвежского языка, построенная на структурированных учебных материалах, методике Natural Method и архитектуре приложения, ориентированной на эксплуатацию.",
    "En plattform for å lære norsk, bygget rundt strukturert undervisningsinnhold, Natural Method-metodikken og en applikasjonsarkitektur rettet mot produksjonsbruk."
  ],
  [
    "View repository",
    "Открыть репозиторий",
    "Se kodelager"
  ],
  [
    "Automation",
    "Автоматизация",
    "Automatisering"
  ],
  [
    "An application for automating tender product processing, supplier search and structured result management.",
    "Приложение для автоматизации обработки тендерных товаров, поиска поставщиков и систематизированного управления результатами.",
    "En applikasjon som automatiserer behandling av produkter i anbud, søk etter leverandører og strukturert håndtering av resultater."
  ],
  [
    "Let's connect",
    "Будем на связи",
    "La oss ta kontakt"
  ],
  [
    "Explore my projects, follow my development progress or get in touch through GitHub, email or Telegram.",
    "Посмотрите мои проекты, следите за моим прогрессом в разработке или свяжитесь со мной через GitHub, электронную почту или Telegram.",
    "Se prosjektene mine, følg utviklingen min eller ta kontakt via GitHub, e-post eller Telegram."
  ],
  [
    "The fastest way to reach me",
    "Самый быстрый способ связаться со мной",
    "Den raskeste måten å nå meg på"
  ],
  [
    "Message me",
    "Написать мне",
    "Send meg en melding"
  ],
  [
    "Email me",
    "Написать на почту",
    "Send meg en e-post"
  ],
  [
    "Built with HTML, CSS & JavaScript",
    "Создано с помощью HTML, CSS и JavaScript",
    "Bygget med HTML, CSS og JavaScript"
  ],
  [
    "Browser Automation",
    "Браузерная автоматизация",
    "Nettleserautomatisering"
  ],
  [
    "A Python tool that detects HLS video streams in embedded players with Playwright and saves authorized video content locally using yt-dlp.",
    "Python-инструмент, который обнаруживает HLS-видеопотоки во встроенных плеерах с помощью Playwright и сохраняет видео локально через yt-dlp при наличии разрешения на скачивание.",
    "Et Python-verktøy som finner HLS-videostrømmer i innebygde spillere med Playwright og lagrer videoinnhold lokalt med yt-dlp når nedlasting er tillatt."
  ]
];
  const dictionary = new Map(translations.map(([en, ru, no]) => [en, { ru, no }]));
  const normalize = (text) => text.trim().replace(/\s+/g, " ");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const entries = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest("script, style, .language-switcher")) continue;
    const translation = dictionary.get(normalize(node.nodeValue));
    if (translation) entries.push({ node, original: node.nodeValue, translation });
  }
  const title = document.title;
  const description = document.querySelector('meta[name="description"]');
  const originalDescription = description?.content;
  const metadata = {
    ru: {
      title: "Олег Мариков | Бэкенд-разработчик на Python",
      description: "Портфолио Олега Марикова — бэкенд-разработчика на Python, создающего бэкенд-приложения, API и программные проекты с помощью ИИ.",
      label: "Язык"
    },
    no: {
      title: "Oleg Marikov | Backendutvikler med Python",
      description: "Porteføljen til Oleg Marikov — backendutvikler med Python som bygger backendapplikasjoner, API-er og programvareprosjekter med KI-støtte.",
      label: "Språk"
    }
  };
  const buttons = document.querySelectorAll("[data-language]");
  function applyLanguage(language) {
    entries.forEach(({ node, original, translation }) => {
      node.nodeValue = language === "en" ? original
        : original.match(/^\s*/)[0] + translation[language] + original.match(/\s*$/)[0];
    });
    document.documentElement.lang = language === "no" ? "nb" : language;
    document.title = language === "en" ? title : metadata[language].title;
    if (description) description.content = language === "en" ? originalDescription : metadata[language].description;
    document.querySelector(".language-switcher").setAttribute("aria-label",
      language === "en" ? "Language" : metadata[language].label);
    buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.language === language)));
  }
  function detectLanguage() {
    // Follow the user's first browser language; unsupported languages use English.
    const preferred = (navigator.languages?.[0] || navigator.language || "en").toLowerCase();
    if (preferred.startsWith("ru")) return "ru";
    if (/^(no|nb|nn)/.test(preferred)) return "no";
    return "en";
  }
  let saved;
  try { saved = localStorage.getItem(storageKey); } catch (_) { /* Storage may be blocked. */ }
  applyLanguage(supported.includes(saved) ? saved : detectLanguage());
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      if (!supported.includes(language)) return;
      applyLanguage(language);
      try { localStorage.setItem(storageKey, language); } catch (_) { /* Switching still works. */ }
    });
  });
})();

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* ----------------------------------
   Lucide icons
---------------------------------- */

if (window.lucide) {
  window.lucide.createIcons();
}


/* ----------------------------------
   Reveal on scroll
---------------------------------- */

const revealElements =
  document.querySelectorAll(".reveal");

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


if (prefersReducedMotion) {

  revealElements.forEach((element) => {
    element.classList.add("visible");
  });

} else {

  const observer =
    new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target
              .classList
              .add("visible");

            observerInstance
              .unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12,
      }
    );


  revealElements.forEach((element) => {
    observer.observe(element);
  });

}


/* ----------------------------------
   Cursor glow
---------------------------------- */

const cursorGlow =
  document.querySelector(".cursor-glow");

const finePointer =
  window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;


if (
  cursorGlow &&
  finePointer &&
  !prefersReducedMotion
) {

  let mouseX = 0;
  let mouseY = 0;

  let glowX = 0;
  let glowY = 0;


  window.addEventListener(
    "pointermove",
    (event) => {

      mouseX = event.clientX;
      mouseY = event.clientY;

      cursorGlow.style.opacity = "1";

    }
  );


  document.addEventListener(
    "mouseleave",
    () => {

      cursorGlow.style.opacity = "0";

    }
  );


  function animateGlow() {

    glowX +=
      (mouseX - glowX) * 0.12;

    glowY +=
      (mouseY - glowY) * 0.12;


    cursorGlow.style.left =
      `${glowX}px`;

    cursorGlow.style.top =
      `${glowY}px`;


    requestAnimationFrame(
      animateGlow
    );

  }


  animateGlow();

}


/* ----------------------------------
   Card spotlight
---------------------------------- */

const interactiveCards =
  document.querySelectorAll(
    ".interactive-card"
  );


interactiveCards.forEach((card) => {

  card.addEventListener(
    "pointermove",
    (event) => {

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;


      card.style.setProperty(
        "--spot-x",
        `${x}px`
      );

      card.style.setProperty(
        "--spot-y",
        `${y}px`
      );

    }
  );

});


/* ----------------------------------
   Subtle 3D tilt
---------------------------------- */

if (
  finePointer &&
  !prefersReducedMotion
) {

  const tiltCards =
    document.querySelectorAll(
      ".tilt-card"
    );


  tiltCards.forEach((card) => {

    card.addEventListener(
      "pointermove",
      (event) => {

        const rect =
          card.getBoundingClientRect();


        const x =
          event.clientX -
          rect.left;


        const y =
          event.clientY -
          rect.top;


        const centerX =
          rect.width / 2;


        const centerY =
          rect.height / 2;


        const rotateX =
          ((y - centerY) /
            centerY) *
          -2.5;


        const rotateY =
          ((x - centerX) /
            centerX) *
          2.5;


        card.style.transform = `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-4px)
        `;

      }
    );


    card.addEventListener(
      "pointerleave",
      () => {

        card.style.transform = `
          perspective(900px)
          rotateX(0deg)
          rotateY(0deg)
          translateY(0)
        `;

      }
    );

  });

}

