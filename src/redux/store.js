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

import storage from 'redux-persist/lib/storage';
import { configureStore } from "@reduxjs/toolkit";
import { advertReducer } from './slice/advertSlice';
import { favoriteReducer } from './slice/favoriteSlice';



const favoritePersistConfig = {
    key: 'favorite',
    storage,
    whitelist: ['favorite'],
  };

export const store = configureStore({
  reducer: { 
    advert: advertReducer,
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);