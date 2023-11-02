import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://64cb5d01700d50e3c705c6c0.mockapi.io';


export const fetchAdvertThunk = createAsyncThunk('advert/fetchAllAdvert',
    async (_, thunkApi) => {

        try {
            const response = await axios.get(`${BASE_URL}/advert`)
            const adverts = response.data;
            console.log(adverts)
            return adverts;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    })