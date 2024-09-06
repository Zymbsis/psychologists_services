import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from 'components';
import App from './App.jsx';
import './styles/index.css';
import './services/firebaseApp.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
