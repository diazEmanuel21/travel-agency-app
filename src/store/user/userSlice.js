import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        favorites: [],
        reserves: [],
    },
    reducers: {
        setFavorites: (state, action) => {
            state.favorites = action.payload;
        },
        setReserves: (state, action) => {
            state.reserves = action.payload;
        },
    }
});
export const { setFavorites, setReserves } = userSlice.actions;