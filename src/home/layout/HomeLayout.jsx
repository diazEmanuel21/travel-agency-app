import { useState } from "react";
import { ResponsiveAppBar } from "../../components";
import { DrawerReservations, InfoBar } from "../components";
import { Backdrop, Box, CircularProgress, Divider } from "@mui/material";

export const HomeLayout = ({ children }) => {
    const [state, setDrawerState] = useState(false);

    const handleDrawer = (value) => {
        setDrawerState(value);
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column' }}>
            <ResponsiveAppBar handleDrawer={handleDrawer} />
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
            <DrawerReservations stateDrawer={state} handleDrawer={handleDrawer} />
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