import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        totalPrice: JSON.parse(localStorage.getItem('price')) || 0,
    },
    reducers: {
        addItem(state, action) {
            const findItem = state.cart.find(item => item.id === action.payload.id);
            if (findItem) {
                findItem.count++
            } else {
                state.cart.push({
                    ...action.payload,
                    count: 1,
                })
            }
        },
        calculateTotals(state) {
            state.totalPrice = state.cart.reduce((prevValue, item) => {
                return prevValue + item.price * item.count
            }, 0)
        },
        plusItem(state, action) {
            const findItem = state.cart.find(item => item.id === action.payload.id);
            if (findItem) findItem.count++
        },
        minusItem(state, action) {
            const findItem = state.cart.find(item => item.id === action.payload.id);
            if (findItem.count === 1) return;
            if (findItem) findItem.count--
        },
        removeItem(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
    }
});

export const { addItem, plusItem, minusItem, removeItem, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;