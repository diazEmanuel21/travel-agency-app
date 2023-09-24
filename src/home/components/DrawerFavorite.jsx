import { Box, SwipeableDrawer, Toolbar } from '@mui/material';
import { FavoritesComponent } from './';

export const DrawerFavorite = ({ stateDrawer, handleDrawer }) => {
    return (
        <SwipeableDrawer
            open={stateDrawer}
            anchor={'bottom'}
            onClose={() => handleDrawer(false)}
            onOpen={() => handleDrawer(true)}
        >
            <Box>
                <Toolbar />
                <FavoritesComponent handleDrawer={handleDrawer} />
            </Box>
        </SwipeableDrawer>
    );
}
