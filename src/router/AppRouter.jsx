import { Navigate, Route, Routes } from "react-router-dom"
import { useCheckAuth } from "../hooks"

import { CheckingAuth } from "../ui/"
import { HomeRoutes } from "../home/routes/HomeRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { AdminRoutes } from "../admin/routes/AdminRoutes"

export const AppRouter = () => {
    const status = useCheckAuth();
    if (status === 'cheking') return <CheckingAuth />

    return (
        <Routes>
            <Route path="/*" element={<Navigate to='/home' />} />
            <Route path="/home" element={<HomeRoutes />} />
            {status === 'authenticated'
                ? <Route path="admin/*" element={<AdminRoutes />} />
                : <Route path="auth/*" element={<AuthRoutes />} />
            }
        </Routes>
        /*         <Routes>
                    {
                        status === 'authenticated'
                            ? (<Route path="/*" element={<AdminRoutes />} />)
        
                            : (<Route path="auth/*" element={<AuthRoutes />} />)
                    }
                    <Route path="/*" element={<Navigate to='/auth/login' />} />
                </Routes> */
    )
}
