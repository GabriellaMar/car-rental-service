import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://64cb5d01700d50e3c705c6c0.mockapi.io';


export const fetchAdvertThunk = createAsyncThunk('advert/fetchAllAdvert',
    async ({ page, limit }, thunkApi) => {
        try {
            const url = new URL(`${BASE_URL}/advert`);
            url.searchParams.append('page', page);
            url.searchParams.append('limit', limit);
            

            const response = await axios.get(url.href);
            const adverts = response.data;
            return adverts;
            
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);






