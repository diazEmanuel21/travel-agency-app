import { createSlice } from '@reduxjs/toolkit';
import { sendEmail } from './thunks';


export const emailSlice = createSlice({
    name: 'email',
    initialState: {
        status: 'idle', // idle, loading, succeeded, failed
        message: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendEmail.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(sendEmail.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
            })
            .addCase(sendEmail.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload; // Accede al error aquí
            });
    },
});
