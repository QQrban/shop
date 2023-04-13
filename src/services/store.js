import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import prodReducer from "./stateService";

export default configureStore({
    reducer: {
        cart: cartReducer,
        products: prodReducer,
    }
})