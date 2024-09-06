import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { psychologistsReducer } from './psychologists/slice';
import storage from 'redux-persist/lib/storage';

const psychologistsPersistConfig = {
  key: 'psychologists',
  storage,
  whitelist: ['favoritesList'],
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    psychologists: persistReducer(
      psychologistsPersistConfig,
      psychologistsReducer,
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
