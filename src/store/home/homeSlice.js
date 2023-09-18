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
        showNotifyReserve: false,
        showHotels: false,
        enabledBtnSaveReserve: false,
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
        updateRoomState: (state, action) => {
            const { roomId, newState } = action.payload;
            state.hotels = state.hotels.map((room) =>
                room.roomID === roomId ? { ...room, state: newState } : room
            );
        },
        setShowHotels: (state, action) => {
            state.showHotels = action.payload;
        },
        setShowNotifyReserve: (state, action) => {
            state.showNotifyReserve = action.payload;
        },
        setActiveStep: (state, action) => {
            state.activeStep = action.payload;
        },
        setEnabledBtnSaveReserve: (state, action) => {
            state.enabledBtnSaveReserve = action.payload;
        },
        setDestination: (state, action) => {
            state.destination_city = action.payload;
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
    updateRoomState,
    setShowHotels,
    setShowNotifyReserve,
    setActiveStep,
    setEnabledBtnSaveReserve,
} = homeSlice.actions;