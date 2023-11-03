import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvertThunk } from '../operation';

export const initialState = {
  advert: [],
  isLoading: false,
  error: null,
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
        // state.advert.advert = [...action.payload]; 
        state.error = null;
      })
      .addCase(fetchAdvertThunk.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      })
      // // -----Get details about car-----------
      // .addCase(getAdvertThunk.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(getAdvertThunk.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.advert = state.advert.filter((item) => item.id !== action.payload.id)
      //   state.error = null;
      // })
      // .addCase(getAdvertThunk.rejected, (state, action) => {
      //   state.isLoading = true;
      //   state.error = action.payload;
      // })
})


export const advertReducer = advertSlice.reducer;