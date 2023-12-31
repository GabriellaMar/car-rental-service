import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvertThunk } from '../operation';

export const initialState = {
  advert: [],
  isLoading: false,
  error: null,
  filter: '',
}

const advertSlice = createSlice({
  name: 'advert',
  initialState: initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchAdvertThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdvertThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.advert = action.payload;
     
        state.error = null;
      })
      .addCase(fetchAdvertThunk.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      })
   
})


export const advertReducer = advertSlice.reducer;