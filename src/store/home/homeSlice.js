import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        dataRooms: [],
        bedRoomSelected: [],
    },
    reducers: {
        setDataRoom: (state, action) => {
            state.dataRooms = action.payload;
        },
        setBedRoom: (state, action) => {
            state.bedRoomSelected = action.payload;
        },
    }
});
export const {
    setDataRoom,
    setBedRoom
} = homeSlice.actions;