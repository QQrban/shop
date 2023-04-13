import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    products: null,
    openCart: false,
};

export const setOpenCart = createAction('setOpenCart');
export const setTotalPrice = createAction('setTotalPrice');
export const setProducts = createAction('setProducts');

const prodReducer = createReducer(initialState, {
    [setProducts]: (state, action) => {
        state.products = action.payload;
    },
    [setOpenCart]: (state, action) => {
        state.openCart = action.payload;
    },
});

export default prodReducer;