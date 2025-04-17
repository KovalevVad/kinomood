import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GenresEnum } from "src/shared/config/genres";

type FiltersType = {
  genre?: GenresEnum | 'все';
  rating?: string;
};

const initialState: FiltersType = {
  genre: GenresEnum.Drama,
  rating: "6-10"
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<FiltersType>) => {
      state.genre = action.payload.genre;
    },

    setRating: (state, action: PayloadAction<FiltersType>) => {
      state.rating = action.payload.rating
    },

    clearFilter: () => {
      return initialState;
    },
  },
});

export const filtersActions = slice.actions;
export const filtersReducer = slice.reducer
