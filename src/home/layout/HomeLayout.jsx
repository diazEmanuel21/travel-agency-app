import { useState } from "react";
import { useSelector } from "react-redux";
import { ResponsiveAppBar } from "../../components";
import { DrawerAccount, DrawerFavorite, DrawerReservations, InfoBar } from "../components";
// import { TravelAgencyContext } from "../../context";
import { Backdrop, Box, CircularProgress, CssBaseline, Drawer } from "@mui/material";

export const HomeLayout = ({ children, module: module_call }) => {
    const { status } = useSelector(state => state.auth);
    const { showBackdrop } = useSelector(store => store.home);
    // const { setNotify } = useContext(TravelAgencyContext);

    const [stateDrawerReserve, setStateDrawerReserve] = useState(false);
    const [stateDrawerFavorite, setStateDrawerFavorite] = useState(false);
    const [stateDrawerAccount, setStateDrawerAccount] = useState(false);

    const handleDrawerReserve = (value) => {
        setStateDrawerReserve(value);
    };
    const handleDrawerFavorite = (value) => {
        setStateDrawerFavorite(value);
    };
    const handleDrawerAccount = (value) => {
        setStateDrawerAccount(value);
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column' }}>
            <CssBaseline />
            <ResponsiveAppBar
                handleDrawerReserve={handleDrawerReserve}
                handleDrawerFavorite={handleDrawerFavorite}
                handleDrawerAccount={handleDrawerAccount}
                module={module_call}
            />

            <>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: 75,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: 75, boxSizing: 'border-box' },
                        display: { xs: 'none', md: 'flex' }, justifyContent: 'center'
                    }}
                >
                    <InfoBar />
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1 }}>
                    {children}
                </Box>
            </>

            {
                status === 'authenticated' && (
                    <>
                        <DrawerReservations stateDrawer={stateDrawerReserve} handleDrawer={handleDrawerReserve} />
                        <DrawerFavorite stateDrawer={stateDrawerFavorite} handleDrawer={handleDrawerFavorite} />
                        <DrawerAccount stateDrawer={stateDrawerAccount} handleDrawer={handleDrawerAccount} />
                    </>
                )
            }

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }}
                open={showBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    )
}