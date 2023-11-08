import { configureStore } from '@reduxjs/toolkit';
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
;
import { advertReducer } from './slice/advertSlice';
import { favoriteReducer } from './slice/favoriteSlice';
import { filterReducer } from './slice/filterSlice';



const favoritePersistConfig = {
    key: 'favorite',
    storage,
     whitelist: ['favorite'],
  };

  const persistedFavoriteReducer = persistReducer(favoritePersistConfig, favoriteReducer);
export const store = configureStore({
  reducer: { 
    advert: advertReducer,
    filter: filterReducer,
   favorite: persistedFavoriteReducer,
   
  
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

