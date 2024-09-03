import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import ModalProvider from './components/Modal/ModalProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalProvider>
  </StrictMode>,
);
