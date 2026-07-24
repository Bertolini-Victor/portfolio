# Victor Bertolini Agaras — Portfolio

🇺🇸 English | [🇦🇷 Español](README.es.md)

[![Live site](https://img.shields.io/badge/site-victorbertolini.com.ar-4C5FD5?style=flat-square)](https://victorbertolini.com.ar)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

Personal portfolio, built from scratch with React and TypeScript. Bilingual, with light/dark mode, a responsive sidebar navigation, and per-project detail pages.

**Live site:** [victorbertolini.com.ar](https://victorbertolini.com.ar)

<!-- Suggestion: add a screenshot here (home in light and dark mode, for example) -->

## Features

- **Bilingual (ES/EN):** detects the browser's language on load, with a manual toggle to switch anytime.
- **Light / dark mode:** follows the OS preference by default, updates live if the user changes their system theme mid-session, and can be overridden manually.
- **Responsive sidebar navigation:** fixed sidebar on desktop, collapses to a bottom bar on mobile. Highlights the active section automatically while scrolling.
- **Project detail pages:** each project has its own view with a full story, feature list, screenshot gallery, and tech stack.
- **Searchable project catalog:** an "all projects" view with text/technology filtering.
- **Working contact form:** sends messages via EmailJS, no backend required.
- **Downloadable CV**, in Spanish or English depending on the active language.

## Tech stack

| Category | Technology |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Plain CSS, with custom properties for theming (no CSS framework) |
| Contact form | EmailJS |
| Linting | oxlint |
| Deploy | gh-pages, custom domain via NIC.ar |

## Project structure

```text
src/
├── components/
│   ├── about/          # "About me" section + skills
│   ├── allProjects/     # Full catalog with search
│   ├── contact/         # Contact form
│   ├── navbar/           # Sidebar / bottom navigation
│   ├── projectDetail/   # Per-project detail view
│   └── projects/         # Featured projects (home)
├── context/
│   └── LanguageContext.tsx   # Global language state
├── data/
│   ├── projects/         # Project data (es / en)
│   ├── translations/     # UI copy (es / en)
│   └── types.ts           # Shared types
└── utils/
    └── getIconUrl.ts      # Technology icon resolution (Simple Icons)
```

## Running it locally

```bash
git clone https://github.com/Bertolini-Victor/portfolio.git
cd portfolio
npm install
```

The contact form needs [EmailJS](https://www.emailjs.com/) credentials. Copy `.env.example` to `.env` and fill in your own values:

```bash
cp .env.example .env
```

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Start the dev server:

```bash
npm run dev
```

## Build and deploy

```bash
npm run build     # generates dist/
npm run deploy    # build + publish to gh-pages
```

## License

Not defined yet — consider adding an [MIT license](https://choosealicense.com/licenses/mit/) if you'd like the code to be reusable by others.
