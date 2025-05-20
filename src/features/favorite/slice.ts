import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  favoriteMovieIds: string[];
}

const getInitialFavoriteIds = (): string[] => {
  const stored = localStorage.getItem('favoriteMovieIds');
  try {
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const initialState: FavoritesState = {
  favoriteMovieIds: getInitialFavoriteIds(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const movieId = action.payload;
      if (state.favoriteMovieIds.includes(movieId)) {
        state.favoriteMovieIds = state.favoriteMovieIds.filter(id => id !== movieId);
      } else {
        state.favoriteMovieIds.push(movieId);
      }
      localStorage.setItem('favoriteMovieIds', JSON.stringify(state.favoriteMovieIds));
    },
    setFavorites(state, action: PayloadAction<string[]>) {
      state.favoriteMovieIds = action.payload;
    },
  },
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;  // именованный экспорт редьюсера
