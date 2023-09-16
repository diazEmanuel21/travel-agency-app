import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        dataRooms: [],
        bedRoomSelected: [],
        activeStep: 0
    },
    reducers: {
        setDataRoom: (state, action) => {
            state.dataRooms = action.payload;
        },
        setBedRoom: (state, action) => {
            state.bedRoomSelected = action.payload;
        },
        setActiveStep: (state, action) => {
            state.activeStep = action.payload;
        },
    }
});
export const {
    setDataRoom,
    setBedRoom,
    setActiveStep
} = homeSlice.actions;