# Alert System UI

A React-based alert system UI built with Mantine components. This project demonstrates a clean implementation of an alert acknowledgment system without backend dependencies.

## Features

- Alert acknowledgment flow
- Alert history viewing
- Clean and modern UI using Mantine components
- Client-side routing with Wouter

## Project Structure

```
src/
  ├── components/
  │   ├── atoms/         # Basic UI components
  │   ├── molecules/     # Composite components
  │   └── organisms/     # Complex components
  ├── assets/           # Static assets
  └── App.tsx          # Main application component
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) to view the app

## Available Routes

- `/` - Home page
- `/alert/acknowledge` - Alert acknowledgment page
- `/alert/alerts` - Alert history page

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Mantine UI](https://mantine.dev/)
- [Wouter](https://github.com/molefrog/wouter)
- [Tabler Icons](https://tabler-icons.io/)

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

# React App with Mantine UI

This is a React application built with Vite and Mantine UI, ready for deployment on Vercel.

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Deployment to Vercel

1. Install Vercel CLI (optional):
```bash
npm install -g vercel
```

2. Deploy to Vercel:
- Using Vercel CLI: Run `vercel` in the project directory
- Or connect your GitHub repository to Vercel for automatic deployments

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Mantine UI](https://mantine.dev/)
- [TypeScript](https://www.typescriptlang.org/)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
