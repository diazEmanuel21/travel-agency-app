import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        resHotels: [],
        hotelSelected: [],
        hotelRooms: [],
        bedRoomSelected: [],
        dataGuest: [],
        bookings: [],
        activeStep: 0,
        flagReserve: true,
        destination_city: '',
    },
    reducers: {
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
            state.booking = action.payload;
        },
        setActiveStep: (state, action) => {
            state.activeStep = action.payload;
        },
        setFlagServe: (state, action) => {
            state.flagReserve = action.payload;
        },
        setDestination: (state, action) => {
            state.destination_city = action.payload;
        },
    }
});
export const {
    setResHotels,
    setHotel,
    setHotelRooms,
    setBedRoom,
    setDataGuest,
    setBooking,
    setDestination,
    setActiveStep,
    setFlagServe,
} = homeSlice.actions;