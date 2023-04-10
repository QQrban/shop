import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    totalPrice: 0,
    products: null,

};

export const setCart = createAction('setCart');
export const setTotalPrice = createAction('setTotalPrice');
export const setProducts = createAction('setProducts');

const reducer = createReducer(initialState, {
    [setCart]: (state, action) => {
        state.cart.push(action.payload);
    },
    [setTotalPrice]: (state, action) => {
        state.totalPrice = action.payload;
    },
    [setProducts]: (state, action) => {
        state.products = action.payload;
    },
});

export const store = configureStore({ reducer });