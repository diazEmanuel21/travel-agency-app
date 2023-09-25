import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        hotels: [],
        resHotels: [],
        hotelSelected: [],
        hotelRooms: [],
        bookings: [],
        destination_city: '',
        activeStep: 0,
        activeSteepBooking: 0,
        favorite: [],
        showBackdrop: false,
        showDialogBooking: false,
    },
    reducers: {
        getHotels: (state, action) => {
            state.hotels = action.payload;
        },
        setResHotels: (state, action) => {
            state.resHotels = action.payload;
        },
        setHotel: (state, action) => {
            state.hotelSelected = action.payload;
        },
        setHotelRooms: (state, action) => {
            state.hotelRooms = action.payload;
        },
        setBooking: (state, action) => {
            state.bookings = action.payload;
        },
        setDestination: (state, action) => {
            state.destination_city = action.payload;
        },
        setActiveStep: (state, action) => {
            state.activeStep = action.payload;
        },
        setActiveSteepBooking: (state, action) => {
            state.activeSteepBooking = action.payload;
        },
        setFavorite: (state, action) => {
            state.favorite = action.payload;
        },
        setShowBackdrop: (state, action) => {
            state.showBackdrop = action.payload;
        },
        closetDialogBooking: (state, action) => {
            state.showDialogBooking = action.payload;
        },
    }
});
export const {
    getHotels,
    setResHotels,
    setHotel,
    setHotelRooms,
    setBooking,
    setDestination,
    setActiveStep,
    setActiveSteepBooking,
    setFavorite,
    setShowBackdrop,
    closetDialogBooking
} = homeSlice.actions;