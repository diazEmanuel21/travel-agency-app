import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        isSaving: false,
        messageSaved: '',
        hotels: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 123456,
        //     imageUrls: [],
        // }
    },
    reducers: {
        savingNewHotel: (state) => {
            state.isSaving = true;
        },
        addNewEmptyHotel: (state, action) => {
            state.hotels.push(action.payload);
            state.isSaving = false;
        },
        setActiveHotel: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setHotels: (state, action) => {
            state.hotels = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateHotel: (state, action) => {
            state.isSaving = false;
            state.hotels = state.hotels.map(hotel => {
                if (hotel.id === action.payload.id) {
                    return action.payload;
                }
                return hotel;
            });

            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        },
        setPhotosToActiveHotel: (state, action) => {
            state.active.imageUrl = [...state.active.imageUrl, ...action.payload];
            state.isSaving = false;
        },
        clearHotelsLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.hotels = [];
            state.active = null;
        },
        deleteHotelById: (state, action) => {
            state.active = null;
            state.hotels = state.hotels.filter(hotel => hotel.id !== action.payload);
        }
    }
});
export const {
    addNewEmptyHotel,
    clearHotelsLogout,
    deleteHotelById,
    savingNewHotel,
    setActiveHotel,
    setHotels,
    setPhotosToActiveHotel,
    setSaving,
    updateHotel,
} = adminSlice.actions;