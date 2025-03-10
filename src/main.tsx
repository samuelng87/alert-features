import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import App from './App.tsx'
import '@mantine/core/styles.css'
import './index.css'

console.log("Main.tsx is executing");

const rootElement = document.getElementById('root');
console.log("Root element:", rootElement);

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MantineProvider>
        <App />
      </MantineProvider>
    </React.StrictMode>,
  );
} else {
  console.error("Root element not found!");
}
