import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        isSaving: false,
        messageSaved: '',
        hotels: [],
        active: null,
        activeRoom: [],
        location: 0,
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
        setActiveRoom: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.activeRoom.findIndex(item => item.id === newItem.id);

            if (existingItemIndex !== -1) {
                // Si el elemento ya existe, actualiza los datos
                state.activeRoom[existingItemIndex] = newItem;
            } else {
                // Si el elemento no existe, agrégalo al arreglo
                state.activeRoom.push(newItem);
            }
        },
        cleanActiveRoom: (state) => {
            state.activeRoom = [];
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
        setInitialDestination: (state, action) => {
            state.location = action.payload;
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
    setInitialDestination,
    deleteHotelById,
    savingNewHotel,
    setActiveHotel,
    setHotels,
    setActiveRoom,
    cleanActiveRoom,
    setPhotosToActiveHotel,
    setSaving,
    updateHotel,
} = adminSlice.actions;