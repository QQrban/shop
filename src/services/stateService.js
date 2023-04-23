import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    products: null,
    openCart: false,
    language: 'en'
};

export const setOpenCart = createAction('setOpenCart');
export const setTotalPrice = createAction('setTotalPrice');
export const setProducts = createAction('setProducts');
export const setLanguage = createAction('setLanguage');

const prodReducer = createReducer(initialState, {
    [setProducts]: (state, action) => {
        state.products = action.payload;
    },
    [setOpenCart]: (state, action) => {
        state.openCart = action.payload;
    },
    [setLanguage]: (state, action) => {
        state.language = action.payload;
    },
});

export default prodReducer;
