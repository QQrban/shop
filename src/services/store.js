import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import prodReducer from './stateService';
import catalogueSlice from './catalogueSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        products: prodReducer,
        catalogue: catalogueSlice,
    },
});
