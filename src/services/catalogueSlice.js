import { createSlice } from '@reduxjs/toolkit';

const catalogueSlice = createSlice({
    name: 'catalogue',
    initialState: {
        catalogue: [],
        filteredItems: [],
        filter: {
            color: [],
            producer: '',
            year: [],
            minPrice: '',
            maxPrice: '',
        },
    },
    reducers: {
        setCatalogue(state, action) {
            state.catalogue = action.payload;
        },
        setFilteredItems(state, action) {
            state.filteredItems = action.payload;
        },
        addColor(state, action) {
            !state.filter.color.includes(action.payload) && state.filter.color.push(action.payload);
            state.filteredItems = state.catalogue.filter(item => state.filter.color.includes(item.color))
        },
        removeColor(state, action) {
            state.filter.color.splice(state.filter.color.indexOf(action.payload), 1);
        },
        addYear(state, action) {
            !state.filter.year.includes(action.payload) && state.filter.year.push(action.payload);
        },
        setMinPrice(state, action) {
            state.filter.minPrice = action.payload;
        },
        setMaxPrice(state, action) {
            state.filter.maxPrice = action.payload;
        },
        removeYear(state, action) {
            state.filter.year.splice(state.filter.year.indexOf(action.payload), 1);
        },
        filterByCompany(state, action) {
            state.filter.producer = action.payload;
        },
        showAll(state) {
            state.filter.producer = '';
            state.filteredItems = state.catalogue;
        },
        filterItems(state) {
            const { color, producer, year, minPrice, maxPrice } = state.filter;
            let filteredItems = state.catalogue;

            if (color.length > 0) {
                filteredItems = filteredItems.filter(item => color.includes(item.color));
            }
            if (producer.length > 0) {
                filteredItems = filteredItems.filter(item => item.producer === producer);
            }
            if (year.length > 0) {
                filteredItems = filteredItems.filter(item => year.includes(item.year));
            }
            if (minPrice.length > 0 && maxPrice.length > 0) {
                filteredItems = filteredItems.filter(item => +item.price >= +minPrice && +item.price <= +maxPrice);
            }
            state.filteredItems = filteredItems;

        },
    },
});

export const {
    setCatalogue,
    setFilteredItems,
    filterItems,
    addColor,
    removeColor,
    filterByCompany,
    addYear,
    removeYear,
    setMinPrice,
    setMaxPrice,
    showAll,
} = catalogueSlice.actions;

export default catalogueSlice.reducer;
