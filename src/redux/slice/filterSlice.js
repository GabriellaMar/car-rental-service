import { createSlice } from "@reduxjs/toolkit";



export const initialState = {
    filter: '',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload
        }
    }

})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;