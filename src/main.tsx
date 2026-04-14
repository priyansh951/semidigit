import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  } catch (error) {
    console.error('Initial render error:', error);
    rootElement.innerHTML = `
      <div style="padding: 20px; background: #1a1a1a; color: white; font-family: sans-serif; min-height: 100vh;">
        <h1 style="color: #C8FF00;">Application Error</h1>
        <p>The application failed to start. This might be due to a configuration issue or a browser incompatibility.</p>
        <pre style="background: #000; padding: 15px; border-radius: 4px; overflow: auto; border: 1px solid #333;">${error instanceof Error ? error.stack || error.message : String(error)}</pre>
        <button onclick="window.location.reload()" style="background: #C8FF00; color: black; border: none; padding: 10px 20px; font-weight: bold; cursor: pointer; margin-top: 20px;">Reload Page</button>
      </div>
    `;
  }
}
