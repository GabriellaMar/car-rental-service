import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
  favorite: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialState,
  // add favorite
  reducers: {
    addFavorite(state, action) {
      state.favorite.push(action.payload)
    },
    // delete  favorite
    deleteFavorite(state, action) {
      const index = state.favorite.findIndex(favorite => favorite.id === action.payload);
      state.favorite.splice(index, 1);
    }
  }

})

export const { addFavorite, deleteFavorite } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer;