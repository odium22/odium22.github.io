# odium22.github.io

Персональный сайт-резюме **odium22** — QA-инженер и разработчик.
Сайт автоматически деплоится на GitHub Pages при пуше в `main`.

🔗 **https://odium22.github.io**

## Стек

- **React 18** + **Vite 5**
- Чистый CSS (без UI-библиотек)
- GitHub Actions → GitHub Pages

## Структура

```
src/
├── components/        # отдельные блоки страницы
│   ├── Background.jsx     # переливающийся фон + прогресс-бар скролла
│   ├── Cursor.jsx         # кастомный курсор (точка + кольцо с инерцией)
│   ├── Nav.jsx            # навигация + бургер-меню на мобилке
│   ├── Hero.jsx           # первый экран + счётчики
│   ├── Marquee.jsx        # бегущая строка со стеком
│   ├── About.jsx          # обо мне + 4 мини-карточки
│   ├── Skills.jsx         # стек (карточки с подсветкой курсора)
│   ├── Work.jsx           # работы (React+FastAPI сайты)
│   ├── Projects.jsx       # 4 QA-проекта
│   ├── Contacts.jsx       # контакты
│   └── Footer.jsx
├── data/content.js    # все тексты сайта в одном месте
├── hooks/useReveal.js # хук появления при скролле
├── App.jsx
├── main.jsx
└── index.css          # все стили + адаптив (планшет/мобилка)
public/
├── favicon.svg
└── resume.jpg         # картинка резюме (ссылка из Hero и Contacts)
.github/workflows/deploy.yml  # авто-деплой на Pages
```

## Разработка

```bash
npm install      # установка зависимостей
npm run dev      # локальный дев-сервер (http://localhost:5173)
npm run build    # сборка в dist/
npm run preview  # предпросмотр сборки
```

## Как поменять контент

Все тексты лежат в **`src/data/content.js`** — правь там, не трогая компоненты:
имя, био, стек, описания работ, проекты, контакты.

## Как обновить резюме

Замени файл `public/resume.jpg` на новый — ссылка на резюме в Hero и Contacts
автоматически подтянет новую картинку.

## Деплой

Автоматический: при пуше в `main` срабатывает GitHub Actions workflow
(`.github/workflows/deploy.yml`), собирает проект и публикует на Pages.

### Первичная настройка Pages (один раз)

1. Открой **Settings → Pages** репозитория `odium22.github.io`.
2. В разделе **Build and deployment → Source** выбери **GitHub Actions**.
3. Следующий пуш в `main` запустит деплой.

## Адаптив

- Десктоп (>1024px): полная сетка, кастомный курсор
- Планшет (≤1024px): одно колоночная верстка блоков
- Мобилка (≤760px): бургер-меню, вертикальные кнопки, курсор отключён

---

© odium22 · QA Engineer · Developer
