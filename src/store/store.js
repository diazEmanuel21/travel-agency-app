import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { adminSlice } from './admin/adminSlice'
import { homeSlice } from './home'
import { userSlice } from './user'
import { emailSlice } from './mail'


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        admin: adminSlice.reducer,
        home: homeSlice.reducer,
        user: userSlice.reducer,
        email: emailSlice.reducer, // Agrega el reducer de emailSlice aquí
    },
})