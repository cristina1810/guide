# Tealium Cert · Guía de estudio

Aplicación SPA para preparar la certificación de **Tealium iQ** (parte práctica y teórica), con sidebar fijo, drawer de explicación extendida por paso y chatbot flotante.

## Stack

| Frontend                |                                    |
| ----------------------- | ---------------------------------- |
| UI                      | React 19                           |
| Lenguaje                | JSX (JavaScript)                   |
| Routing                 | React Router DOM v7                |
| Build                   | Vite 8                             |
| Estilos                 | Tailwind CSS v4 + `@tailwindcss/typography` |
| Iconos                  | Lucide React                       |
| Markdown                | react-markdown + remark-gfm        |
| AI client               | OpenAI SDK v4 (vía `/api/chat`)    |
| Linting                 | ESLint 9                           |

| Backend                 |                                    |
| ----------------------- | ---------------------------------- |
| Runtime                 | Node.js                            |
| HTTP framework          | Express 4 (dev) · Vercel Functions (prod) |
| CORS                    | `cors`                             |
| Env                     | `dotenv`                           |
| AI                      | OpenAI SDK v4                      |
| Hosting                 | Vercel                             |

## Estructura

```
.
├── api/                  # Vercel Functions (producción)
│   ├── chat.js
│   └── health.js
├── server/               # Servidor Express (desarrollo local)
│   └── server.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/       # Layout, Sidebar, StepCard, Drawer, Chatbot
│   ├── context/          # ExplanationContext (drawer state)
│   ├── pages/            # SectionPage (renderiza una sección)
│   └── data/
│       ├── sections.js   # Estructura del sidebar
│       ├── palettes.js   # Paletas de color (variables CSS)
│       └── content/      # Un archivo por sección
│           ├── primeros-pasos.js
│           ├── config-general.js
│           ├── snapchat.js
│           ├── chatling.js
│           └── ga4.js
├── preview.html          # Vista previa rápida (sin npm install)
├── index.html            # Entrypoint Vite
├── vite.config.js
├── vercel.json
└── package.json
```

## Desarrollo local

```bash
npm install
cp .env.example .env       # añade OPENAI_API_KEY

# Terminal 1 — backend Express (puerto 3001)
npm run dev:server

# Terminal 2 — frontend Vite (puerto 5173)
npm run dev
```

El proxy de Vite redirige `/api/*` al servidor Express durante el desarrollo.

## Despliegue en Vercel

Ver [`DEPLOYMENT_VERCEL.md`](./DEPLOYMENT_VERCEL.md).

## Personalización

- **Contenido**: edita los archivos en `src/data/content/` — un fichero por sección. Cada paso tiene `title`, `enunciado`, `solucion[]` y `explicacion` (Markdown).
- **Navegación**: añade nuevas secciones/grupos en `src/data/sections.js`.
- **Paleta**: define o cambia paletas en `src/data/palettes.js`. La paleta inicial se aplica en `App.jsx` con `applyPalette()`.
