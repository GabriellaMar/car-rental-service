
// import { createSelector } from "@reduxjs/toolkit";
// Селектор для отримання усіх оголошень
export const selectAdvertList = state => state.advert.advert;

// Селектор для отримання статусу завантаження
export const selectAdvertLoading = state => state.advert.isLoading;

// Селектор для отримання помилки
export const selectAdvertError = state => state.advert.error;
// Селектор для додавання фавориту
export const selectFavorites = state=> state.favorite.favorite;
