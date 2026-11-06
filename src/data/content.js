// Все тексты сайта в одном месте — удобно править без копания по компонентам.
export const profile = {
  name: 'odium22',
  role: 'QA Engineer · Manual + Automation · Dev',
  tagline: ['Тестирую то,', 'что должно', 'работать.'],
  heroSub:
    'Ручное и автоматизированное тестирование на Selenium, API-тесты в Postman, тест-планы, чек-листы и баг-репорты. Параллельно — разработка лендингов, многостраничников и информационных систем на React + FastAPI.',
  stats: [
    { count: 3, label: 'рабочих проекта' },
    { count: 4, label: 'QA-проекта в работе' },
    { count: 3, label: 'языка программирования' },
  ],
  marquee: [
    'Selenium', 'Postman', 'React', 'FastAPI',
    'JavaScript', 'C#', 'Python', 'REST API',
    'Test Plan', 'Bug Report',
  ],
};

export const about = {
  title: ['Процесс важнее,', 'чем «нажать кнопки»'],
  paragraphs: [
    'Мой подход — процесс: понять требования → спланировать → прогнать по чек-листам → оформить баги с шагами и доказательствами → закрыть автотестами. Хороший тестировщик видит продукт глазами пользователя и говорит с командой на языке фактов.',
    'Параллельно занимаюсь разработкой: лендинги, многостраничники и информационные системы на React + FastAPI. Этот опыт делает меня тестировщиком, который понимает, как продукт устроен изнутри — от API-контракта до последней кнопки в UI.',
  ],
  cards: [
    { num: '01', title: 'Ручное тестирование', text: 'Тест-планы, чек-листы, исследовательское тестирование' },
    { num: '02', title: 'Автоматизация', text: 'Selenium, POM, data-driven, отчёты' },
    { num: '03', title: 'API-тестирование', text: 'Postman, Newman, проверка схем и контрактов' },
    { num: '04', title: 'Разработка', text: 'React, FastAPI, лендинги, многостраничники, ИС' },
  ],
};

export const skills = [
  { tag: 'UI',   title: 'Автотесты UI',     text: 'Selenium, WebDriver, Page Object Model' },
  { tag: 'API',  title: 'API-тестирование', text: 'Postman, Newman, REST, JSON Schema, негативные кейсы' },
  { tag: 'DEV',  title: 'Веб-разработка',   text: 'React, FastAPI, REST API' },
  { tag: 'CODE', title: 'Языки',            text: 'JavaScript, C#, Python' },
  { tag: 'DOC',  title: 'Документация',     text: 'Test Plan, Checklist, Bug Report' },
  { tag: 'NEXT', title: 'CI/CD — в планах', text: 'GitHub Actions, Docker, Allure' },
];

export const works = [
  {
    num: '01',
    title: 'Bulkin Auto',
    status: 'live',
    url: 'https://bulkin-auto.steyn91.xyz',
    text: 'Лендинг сервиса кузовного ремонта и покраски автомобилей. Интерактивный калькулятор сметы по кликам на схему авто, блок преимуществ, отзывы с Яндекс.Карт / 2ГИС / Авито, заявки в WhatsApp и Telegram. Полноценный коммерческий лендинг.',
    tags: ['React', 'FastAPI', 'Лендинг', 'Калькулятор'],
  },
  {
    num: '02',
    title: 'TTA',
    status: 'live',
    url: 'https://tta.steyn91.xyz',
    text: 'Веб-приложение на React + FastAPI. SPA с подгрузкой контента через API — клиентский роутинг и динамические данные с бэкенда.',
    tags: ['React', 'FastAPI', 'SPA'],
  },
  {
    num: '03',
    title: 'Order Frontend',
    status: 'wip',
    url: 'https://order-frontend.steyn91.xyz',
    text: 'Фронтенд для системы заказов на React + FastAPI. Сейчас на стадии подъёма — скоро заработает.',
    tags: ['React', 'FastAPI', 'ИС'],
  },
];

export const projects = [
  { num: '01', title: 'UI-тестирование магазина', text: 'Ручной прогон + автотесты Selenium. Тест-план, чек-листы, баг-репорты в Issues.' },
  { num: '02', title: 'API-тестирование',         text: 'Postman-коллекция: позитивные, негативные, граничные кейсы. Newman + CI.' },
  { num: '03', title: 'Фреймворк + CI/CD',        text: 'POM, data-driven, параллельный запуск, Allure, GitHub Actions, Docker.' },
  { num: '04', title: 'Полный QA-цикл',           text: 'Требования → тест-план → прогон → баг-репорты → автотесты → отчёт.' },
];

export const contacts = {
  title: ['Давай', 'поработаем'],
  lead: 'Открыт к задачам по тестированию и разработке. Отвечаю в Telegram.',
  links: [
    { label: 'Telegram @Odiumy', href: 'https://t.me/Odiumy', primary: true },
    { label: 'dan.dorogkin@gmail.com', href: 'mailto:dan.dorogkin@gmail.com' },
    { label: 'Резюме', href: '/resume.jpg' },
    { label: 'GitHub', href: 'https://github.com/odium22' },
  ],
};

export const nav = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Стек', href: '#skills' },
  { label: 'Работы', href: '#work' },
  { label: 'QA-портфолио', href: '#projects' },
  { label: 'Контакты', href: '#contacts' },
];
