import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://64cb5d01700d50e3c705c6c0.mockapi.io';



// export const fetchAdvertThunk = createAsyncThunk('advert/fetchAllAdvert',
//     async (_, thunkApi) => {

//         try {
//             const response = await axios.get(`${BASE_URL}/advert`)
//             const adverts = response.data;
//             // console.log(adverts)
//             return adverts;
//         } catch (error) {
//             return thunkApi.rejectWithValue(error.message);
//         }
//     })
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


// export const addFavoriteThunk = createAsyncThunk('advert/addFavorite',
//     async (advert, thunkApi) => {
//         try {
//             const response = await axios.post(`${BASE_URL}/advert`, advert);
//             const data = response.data;
            
//             // Отримайте айді з відповіді сервера та додайте його до пейлоаду
//             const id = data.id;
//             return { id, ...advert };
//         } catch (error) {
//             return thunkApi.rejectWithValue(error.message);
//         }
//     }
// )
// export const deleteFavoriteThunk = createAsyncThunk('advert/deleteFavorite',
//   async (advertId, thunkApi) => {
//     try {
//         const response = await axios.delete(`${BASE_URL}/advert/${advertId}`);
//         console.log(response.data);
//         const data = response.data;
//         console.log(data);
//         return advertId; 
//     } catch (error) {
//         return thunkApi.rejectWithValue(error.message);
//     }
//   }
// )
export const addFavoriteThunk = createAsyncThunk('advert/addFavorite', async (advert, thunkApi) => {
    try {
        const response = await axios.post(`${BASE_URL}/advert`, advert);
        const data = response.data;
        
      
        const id = data.id;
        
        
        const favoriteFromLocalStorage = JSON.parse(localStorage.getItem('favorite')) || [];
        favoriteFromLocalStorage.push({ id, ...advert });
        localStorage.setItem('favorite', JSON.stringify(favoriteFromLocalStorage));
        
        return { id, ...advert };
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const deleteFavoriteThunk = createAsyncThunk('advert/deleteFavorite', async (advertId, thunkApi) => {
    try {
        const response = await axios.delete(`${BASE_URL}/advert/${advertId}`);
        
    
        const favoriteFromLocalStorage = JSON.parse(localStorage.getItem('favorite')) || [];
        const indexOfObjectToDelete = favoriteFromLocalStorage.findIndex((favorite) => favorite.id === advertId);
        if (indexOfObjectToDelete !== -1) {
            favoriteFromLocalStorage.splice(indexOfObjectToDelete, 1);
            localStorage.setItem('favorite', JSON.stringify(favoriteFromLocalStorage));
        }
        
        const data = response.data;
        return advertId;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})