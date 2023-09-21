import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Navbar, SideBar } from "../components"
import { TravelAgencyContext } from "../../context";
import { Toolbar, Box } from "@mui/material";
import { HomeLayout } from "../../home/layout/HomeLayout";

export const AdminLayout = ({ children }) => {
    const { hotels } = useSelector(state => state.admin);
    const { setNotify } = useContext(TravelAgencyContext);

    const [state, setState] = useState(false);

    const handleDrawer = value => {
        if (hotels.length < 1) return setNotify('info', 'There are no registered hotels yet.')
        setState(value)
    }

    return (
        <HomeLayout module={'admin-manager'}>
            {children}
        </HomeLayout>
        /*    <Box
               className='animate__animated animate__fadeIn animate__faster'
               sx={{ display: 'flex' }}>
   
               <Navbar handleDrawer={handleDrawer} />
   
               <SideBar handleDrawer={handleDrawer} stateDrawer={state} />
               <Box
                   component='main'
                   sx={{ flex: 1, p: 3 }}
               >
                   <Toolbar />
                   {children}
               </Box>
           </Box> */
    )
}
