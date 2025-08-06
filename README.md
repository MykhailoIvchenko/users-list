# Users List

## Description

This project is a React application built with Vite, TypeScript, and styled-components. It is deployed on GitHub Pages.

---

## Getting Started (Setup)

### Prerequisites

- Node.js (recommended version 20+)
- npm (or yarn if preferred)

---

### Clone the repository

```bash
git clone https://github.com/mykhailoivchenko/users-list.git
cd users-list
```

---

### Install dependencies

```bash
npm install
```

or

```bash
yarn
```

---

## Development and Deployment Commands

### Local development

Run the local development server with hot reload:

```bash
npm run dev
```

Open your browser at [http://localhost:5173/users-list/](http://localhost:5173/users-list/)

---

### Build for production

```bash
npm run build
```

After building, the production-ready app will be in the `dist` folder.

---

### Preview production build locally

```bash
npm run preview
```

This runs a local server to preview the production build.

---

### Lint the code

Check your code for style issues and potential errors using ESLint:

```bash
npm run lint
```

---

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command builds the project (`predeploy`), then publishes the contents of the `dist` folder to the `gh-pages` branch on GitHub.

---

## Explanation of important scripts in `package.json`

- `predeploy`: runs the build before deployment.
- `deploy`: deploys the `dist` folder to GitHub Pages using the `gh-pages` package.
- `dev`: starts the Vite development server.
- `build`: runs the TypeScript build and then the Vite build.
- `postbuild`: copies `index.html` to `404.html` for proper SPA routing on GitHub Pages.
- `lint`: runs ESLint for code quality checks.

---

## Project Structure

```
.
├── public/              # Static files like
│   └── vite.svg
├── src/                 # Source code folder
│   ├── assets/          # Images and icons
│   │   ├── icons/
│   │   └── img/
│   ├── components/      # Reusable React components
│   │   ├── layout/      # Layout components (Header, Footer, etc.)
│   │   └── ui/          # UI atomic components (Buttons, Cards, Inputs, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Application pages for routing
│   ├── routes/          # Route definitions
│   ├── services/        # API and data services
│   ├── styles/          # Global styles, themes, and typings
│   └── utils/           # Utility functions, constants, and types
├── App.tsx              # Root React component
├── main.tsx             # Entry point
├── vite-env.d.ts        # Vite environment typings
├── package.json         # Project metadata and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite build configuration
```

### Folders descriptions

- `public/` — contains static assets that are copied as-is to the build output.
- `src/assets/` — images and SVG icons used in the UI.
- `src/components/` — reusable React components split into:
  - `layout/` — structural components like Header, Footer, CardsList.
  - `ui/` — basic UI building blocks like buttons, inputs, and notifications.
  - other components used to build pages.
- `src/hooks/` — custom hooks encapsulating logic for data fetching, user state, etc.
- `src/pages/` — top-level React components representing routes/pages.
- `src/routes/` — route configuration and definitions.
- `src/services/` — API calls and data transfer object (DTO) helpers.
- `src/styles/` — theming, global styles, media queries, and styled-components typings.
- `src/utils/` — app-wide constants, enums, and TypeScript types.
