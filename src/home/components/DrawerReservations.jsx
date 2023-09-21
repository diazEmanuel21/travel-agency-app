import { Box, List, ListSubheader, SwipeableDrawer } from '@mui/material';
import { useSelector } from 'react-redux';
import { ReservesComponent } from './';

export const DrawerReservations = ({ stateDrawer, handleDrawer }) => {
    const { bookings } = useSelector(store => store.home);

    return (
        <SwipeableDrawer
            open={stateDrawer}
            anchor={'left'}
            onClose={() => handleDrawer(false)}
            onOpen={() => handleDrawer(true)}
        >
            <Box sx={{
                width: 300
            }}>
                <List
                    sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Bookings
                        </ListSubheader>
                    }
                >
                    {bookings.length > 0 && (
                        bookings.map((booking) => (
                            <ReservesComponent key={booking.id} reserve={booking} />
                        ))
                    )}
                </List>
            </Box>
        </SwipeableDrawer>
    );
}
