import { Box, SwipeableDrawer } from '@mui/material';
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
                <FavoritesComponent handleDrawer={handleDrawer}/>
            </Box>
        </SwipeableDrawer>
    );
}
