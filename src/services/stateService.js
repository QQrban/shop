import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    products: null,
    openCart: false,
    catalogue: []
};

export const setOpenCart = createAction('setOpenCart');
export const setTotalPrice = createAction('setTotalPrice');
export const setProducts = createAction('setProducts');
export const setCatalogue = createAction('setCatalogue');

const prodReducer = createReducer(initialState, {
    [setProducts]: (state, action) => {
        state.products = action.payload;
    },
    [setOpenCart]: (state, action) => {
        state.openCart = action.payload;
    },
    [setCatalogue]: (state, action) => {
        state.catalogue = action.payload;
    },
});

export default prodReducer;