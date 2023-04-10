import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import cartReducer from "./services/stateService"
import App from './App';

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
