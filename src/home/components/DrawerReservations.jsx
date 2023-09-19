import { Box, SwipeableDrawer } from '@mui/material';

export const DrawerReservations = ({ stateDrawer, handleDrawer }) => {
    return (
        <SwipeableDrawer
            open={stateDrawer}
            anchor={'bottom'}
            onClose={() => handleDrawer(false)}
            onOpen={() => handleDrawer(true)}
        >
            <Box sx={{
                height: 300
            }}>
                content
            </Box>
        </SwipeableDrawer>
    );
}
