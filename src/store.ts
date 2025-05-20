import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './features/filters/slice';
import { authReducer } from './features/auth/slice';
import { favoritesReducer } from './features/favorite/slice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    auth: authReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
