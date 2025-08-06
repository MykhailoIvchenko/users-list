# Users List

## Description

This project is a React application built with Vite, TypeScript, and styled-components. It is deployed on GitHub Pages.

---

## Getting Started (Setup)

### Prerequisites

- Node.js (recommended version 18+)
- npm (or yarn if preferred)
- Access to GitHub for deploying to GitHub Pages

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
