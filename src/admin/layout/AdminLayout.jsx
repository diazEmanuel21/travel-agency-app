import { useState } from "react";
import { Navbar, SideBar } from "../components"
import { Toolbar, Box } from "@mui/material";

export const AdminLayout = ({ children }) => {
    const [state, setState] = useState(false);

    const handleDrawer = value => {
        setState(value)
    }

    return (
        <Box 
        className='animate__animated animate__fadeIn animate__faster'
        sx={{ display: 'flex' }}>

            <Navbar handleDrawer={handleDrawer} />

            <SideBar handleDrawer={handleDrawer}  stateDrawer={state}/>
            <Box
                component='main'
                sx={{ flex: 1, p: 3 }}
            >
                <Toolbar/>
                {children}
            </Box>
        </Box>
    )
}
