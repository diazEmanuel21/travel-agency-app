import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { adminSlice } from './admin/adminSlice'
import { homeSlice } from './home'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        admin: adminSlice.reducer,
        home: homeSlice.reducer,
    },
})