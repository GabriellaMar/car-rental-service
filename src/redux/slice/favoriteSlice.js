import { createSlice } from '@reduxjs/toolkit';
import { addFavoriteThunk, deleteFavoriteThunk } from '../operation';

export const initialState = {
  favorite: [],
  isLoading: false,
  error: null,

}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: initialState,
  
    extraReducers: builder =>
      builder
        .addCase(addFavoriteThunk.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(addFavoriteThunk.fulfilled, (state, action) => {
          state.isLoading = false;
          state.favorite.push(action.payload);
          state.error = null;
        })
        .addCase(addFavoriteThunk.rejected, (state, action) => {
          state.isLoading = true;
          state.error = action.payload;
        })
        .addCase(deleteFavoriteThunk.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(deleteFavoriteThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            // state.favorite.push(action.payload);
            state.favorite = state.favorite.filter((favorite) => favorite.id !== action.payload.id)
            state.error = null;
          })
          .addCase(deleteFavoriteThunk.rejected, (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
          })
  
    })


    export const favoriteReducer = favoriteSlice.reducer;