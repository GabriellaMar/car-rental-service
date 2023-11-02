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
import { advertReducer } from './slice/advertSlice';



// const advertPersistConfig = {
//     // key: 'auth',
//     // storage,
//     // whitelist: ['token'],
//   };

export const store = configureStore({
  reducer: {
    //   auth: persistReducer(authPersistConfig, authReducer), 
    advert: advertReducer,
    // filter: filterReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);