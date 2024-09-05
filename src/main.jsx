import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from 'components';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './services/firebaseApp.js';
import './styles/index.css';
import { store } from './redux/store.js';
// import { persistor} from './redux/store.js';
// import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>,
);
