import { Navigate, Route, Routes } from "react-router-dom"
import { useCheckAuth } from "../hooks"

import { CheckingAuth } from "../ui/"
import { HomeRoutes } from "../home/routes/HomeRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"

export const AppRouter = () => {
    const status = useCheckAuth();

    if (status === 'cheking') return <CheckingAuth />

    return (
        <Routes>
            <Route path="/home" element={<HomeRoutes />} />
            <Route path="auth/*" element={<AuthRoutes />} />

            <Route path="/*" element={<Navigate to='/home' />} />
        </Routes>
        /*         <Routes>
                    {
                        status === 'authenticated'
                            ? (<Route path="/*" element={<JournalRoutes />} />)
        
                            : (<Route path="auth/*" element={<AuthRoutes />} />)
                    }
                    <Route path="/*" element={<Navigate to='/auth/login' />} />
                </Routes> */
    )
}
