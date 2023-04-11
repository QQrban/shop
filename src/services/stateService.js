import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    totalPrice: 0,
    products: null,
    openCart: false,
};

export const setCart = createAction('setCart');
export const setOpenCart = createAction('setOpenCart');
export const setTotalPrice = createAction('setTotalPrice');
export const setProducts = createAction('setProducts');

const reducer = createReducer(initialState, {
    [setCart]: (state, action) => {
        const findItem = state.cart.find(obj => obj.id === action.payload.id)
        if (findItem) {
            findItem.count++
        } else {
            state.cart.push({
                ...action.payload,
                count: 1,
            });
        }

    },
    [setTotalPrice]: (state, action) => {
        state.totalPrice = action.payload;
    },
    [setProducts]: (state, action) => {
        state.products = action.payload;
    },
    [setOpenCart]: (state, action) => {
        state.openCart = action.payload;
    },
});

export const store = configureStore({ reducer });