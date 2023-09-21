import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        hotels: [],
        resHotels: [],
        hotelSelected: [],
        hotelRooms: [],
        bedRoomSelected: [],
        dataGuest: [],
        bookings: [],
        destination_city: '',
        activeStep: 0,
        favorite: [],
        showNotifyReserve: false,
        showHotels: false,
        enabledBtnSaveReserve: false,
        showBackdrop: false,
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
        setBedRoom: (state, action) => {
            state.bedRoomSelected = action.payload;
        },
        setDataGuest: (state, action) => {
            state.dataGuest = action.payload;
        },
        setBooking: (state, action) => {
            state.bookings.push(action.payload);
        },
        setDestination: (state, action) => {
            state.destination_city = action.payload;
        },
        setActiveStep: (state, action) => {
            state.activeStep = action.payload;
        },
        setFavorite: (state, action) => {
            state.favorite = action.payload;
        },
        setShowNotifyReserve: (state, action) => {
            state.showNotifyReserve = action.payload;
        },
        setShowHotels: (state, action) => {
            state.showHotels = action.payload;
        },
        setEnabledBtnSaveReserve: (state, action) => {
            state.enabledBtnSaveReserve = action.payload;
        },
        setShowBackdrop: (state, action) => {
            state.showBackdrop = action.payload;
        },
    }
});
export const {
    getHotels,
    setResHotels,
    setHotel,
    setHotelRooms,
    setBedRoom,
    setDataGuest,
    setBooking,
    setDestination,
    setShowHotels,
    setShowNotifyReserve,
    setActiveStep,
    setFavorite,
    setEnabledBtnSaveReserve,
    setShowBackdrop
} = homeSlice.actions;