# Victor Bertolini Agaras — Portfolio

Portfolio personal, desarrollado desde cero con React y TypeScript. Bilingüe, con modo claro/oscuro, navegación lateral responsiva y páginas de detalle por proyecto.

**Sitio en vivo:** [victorbertolini.com.ar](https://victorbertolini.com.ar)

<!-- Sugerencia: sumar acá una captura del sitio (home en modo claro y oscuro, por ejemplo) -->

## Características

- **Bilingüe (ES/EN):** detecta el idioma del navegador al cargar, con toggle manual para cambiarlo en cualquier momento.
- **Modo claro / oscuro:** respeta la preferencia del sistema operativo por defecto, escucha cambios en vivo si el usuario cambia el tema del SO mientras navega, y permite forzar el modo manualmente.
- **Navegación lateral responsiva:** sidebar fija en desktop, colapsa a barra inferior en mobile. Resalta la sección activa automáticamente mientras se scrollea.
- **Detalle de proyecto:** cada proyecto tiene su propia vista con historia, características, galería de capturas y tecnologías usadas.
- **Catálogo completo con búsqueda:** vista de "todos los proyectos" con filtro por texto/tecnología.
- **Formulario de contacto funcional:** envío de mensajes vía EmailJS, sin necesidad de backend propio.
- **CV descargable**, en español e inglés según el idioma activo.

## Stack técnico

| Categoría | Tecnología |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Estilos | CSS puro, con custom properties para theming (sin frameworks de CSS) |
| Contacto | EmailJS |
| Linting | oxlint |
| Deploy | gh-pages, dominio propio vía NIC.ar |

## Estructura del proyecto

```
src/
├── components/
│   ├── about/          # Sección "Sobre mí" + skills
│   ├── allProjects/     # Catálogo completo con búsqueda
│   ├── contact/         # Formulario de contacto
│   ├── navbar/           # Navegación lateral / inferior
│   ├── projectDetail/   # Vista de detalle por proyecto
│   └── projects/         # Proyectos destacados (home)
├── context/
│   └── LanguageContext.tsx   # Estado global de idioma
├── data/
│   ├── projects/         # Datos de proyectos (es / en)
│   ├── translations/     # Textos de la interfaz (es / en)
│   └── types.ts           # Tipos compartidos
└── utils/
    └── getIconUrl.ts      # Resolución de íconos de tecnologías (Simple Icons)
```

## Cómo correrlo localmente

```bash
git clone https://github.com/Bertolini-Victor/portfolio.git
cd portfolio
npm install
```

El formulario de contacto necesita credenciales de [EmailJS](https://www.emailjs.com/). Copiá `.env.example` a `.env` y completá tus propios valores:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

Levantar el servidor de desarrollo:

```bash
npm run dev
```

## Build y deploy

```bash
npm run build     # genera dist/
npm run deploy    # build + publica a gh-pages
```

## Licencia

Sin definir todavía — considerá agregar una [licencia MIT](https://choosealicense.com/licenses/mit/) si querés que el código sea reutilizable por otros.
