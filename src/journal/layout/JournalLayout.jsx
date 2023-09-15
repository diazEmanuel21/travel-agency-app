import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { Navbar, SideBar } from "../components"

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box 
        className='animate__animated animate__fadeIn animate__faster'
        sx={{ display: 'flex' }}>

            <Navbar drawerWidth={drawerWidth} />

            <SideBar drawerWidth={drawerWidth} />
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
