import { createSlice } from '@reduxjs/toolkit';

const catalogueSlice = createSlice({
    name: 'catalogue',
    initialState: {
        catalogue: [],
        filteredItems: [],
        filters: {
            color: [],
            producer: '',
            year: [],
            price: [],
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
            !state.filters.color.includes(action.payload) && state.filters.color.push(action.payload);
            state.filteredItems = state.catalogue.filter(item => state.filters.color.includes(item.color))
        },
        removeColor(state, action) {
            state.filters.color.splice(state.filters.color.indexOf(action.payload), 1);
        },
        addYear(state, action) {
            !state.filters.year.includes(action.payload) && state.filters.year.push(action.payload);
        },
        removeYear(state, action) {
            state.filters.year.splice(state.filters.year.indexOf(action.payload), 1);
        },
        filterByCompany(state, action) {
            state.filters.producer = action.payload;
        },
        showAll(state) {
            state.filters.producer = '';
            state.filteredItems = state.catalogue;
        },
        filterItems(state) {
            const color = state.filters.color;
            const producer = state.filters.producer;
            const year = state.filters.year;
            const catalogue = state.catalogue;
            if (producer !== '' && color.length === 0 && year.length === 0) {
                state.filteredItems = catalogue.filter(item => item.producer === producer)
            }
            if (color.length !== 0 && producer !== '' && year.length === 0) {
                state.filteredItems = catalogue.filter(item => item.producer === producer && color.includes(item.color))
            }
            if (color.length !== 0 && producer === '' && year.length === 0) {
                state.filteredItems = catalogue.filter(item => color.includes(item.color))
            }
            if (year.length !== 0 && color.length === 0 && producer !== '') {
                state.filteredItems = catalogue.filter(item => item.producer === producer && year.includes(item.year))
            }
            if (year.length !== 0 && color.length !== 0 && producer === '') {
                state.filteredItems = catalogue.filter(item => color.includes(item.color) && year.includes(item.year))
            }
            if (year.length !== 0 && color.length === 0 && producer === '') {
                state.filteredItems = catalogue.filter(item => year.includes(item.year))
            }
            if (year.length !== 0 && color.length !== 0 && producer !== '') {
                state.filteredItems = catalogue.filter(item => item.producer === producer && color.includes(item.color) && year.includes(item.year))
            }
            if (year.length === 0 && color.length === 0 && producer === '') {
                state.filteredItems = catalogue;
            }
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
    showAll,
} = catalogueSlice.actions;

export default catalogueSlice.reducer;
