import { useState } from "react";
import { ResponsiveAppBar } from "../../components";
import { DrawerFavorite, DrawerReservations, InfoBar } from "../components";
import { Backdrop, Box, CircularProgress, Divider } from "@mui/material";

export const HomeLayout = ({ children, module: module_call }) => {
    const [stateDrawerReserve, setStateDrawerReserve] = useState(false);
    const [stateDrawerFavorite, setStateDrawerFavorite] = useState(false);

    const handleDrawerReserve = (value) => {
        setStateDrawerReserve(value);
    };
    const handleDrawerFavorite = (value) => {
        setStateDrawerFavorite(value);
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column' }}>
            <ResponsiveAppBar handleDrawerReserve={handleDrawerReserve} handleDrawerFavorite={handleDrawerFavorite} module={module_call}/>
            <Box sx={{
                display: 'flex',
                flex: '1',
                flexDirection: 'row',
                height: '89vh',
                maxHeight: '89vh'
            }}>
                <InfoBar />
                <Divider orientation="vertical" flexItem />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    overflowX: 'hidden'
                }
                }>
                    {children}
                </Box>
            </Box>
            <DrawerReservations stateDrawer={stateDrawerReserve} handleDrawer={handleDrawerReserve} />
            <DrawerFavorite stateDrawer={stateDrawerFavorite} handleDrawer={handleDrawerFavorite} />
            {/*        
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop> */}
        </Box>
    )
}