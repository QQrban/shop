import { createSlice } from '@reduxjs/toolkit';

const catalogueSlice = createSlice({
    name: 'catalogue',
    initialState: {
        catalogue: [],
        filteredItems: [],
        filters: {
            color: [],
            producer: '',
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
            state.filteredItems = [];
            !state.filters.color.includes(action.payload) && state.filters.color.push(action.payload);
        },
        removeColor(state, action) {
            state.filters.color.splice(state.filters.color.indexOf(action.payload), 1
            );
        },
        filterByCompany(state, action) {
            state.filters.producer = action.payload;
        },
        showAll(state) {
            state.filters.producer = '';
        },
        filterItems(state) {
            if (state.filters.color.length === 0 && state.filters.producer === '') {
                state.filteredItems = [];
            } else if (state.filters.producer !== '' && state.filters.color.length !== 0) {
                state.filteredItems = state.catalogue.filter(
                    (item) => item.producer === state.filters.producer && state.filters.color.includes(item.color)
                );
            } else if (state.filters.producer !== '' && state.filters.color.length === 0) {
                state.filteredItems = state.catalogue.filter(
                    (item) => item.producer === state.filters.producer
                );
            } else if (state.filters.color.length !== 0 && state.filters.producer === '') {
                state.filteredItems = state.catalogue.filter((item) =>
                    state.filters.color.includes(item.color)
                );
            }
        },
    },
});

export const {
    setCatalogue,
    filterItems,
    addColor,
    filterByCompany,
    removeColor,
    showAll,
} = catalogueSlice.actions;

export default catalogueSlice.reducer;
