import { Box, SwipeableDrawer } from '@mui/material';
import { Reservation } from '../view';

export const DrawerAccount = ({ stateDrawer, handleDrawer }) => {
    return (
        <SwipeableDrawer
            open={stateDrawer}
            anchor={'right'}
            onClose={() => handleDrawer(false)}
            onOpen={() => handleDrawer(true)}
        >
            <Box>
                <Reservation/>
            </Box>
        </SwipeableDrawer>
    );
}
