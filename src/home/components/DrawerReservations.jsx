import { Box, List, ListSubheader, SwipeableDrawer, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { ReservesComponent } from './';

export const DrawerReservations = ({ stateDrawer, handleDrawer }) => {
    const { reserves } = useSelector(store => store.user);
    const { bookings, rol } = useSelector(store => store.auth);
    const isAdmin = rol === 'admin' && true;
    const resBooking = reserves.filter((reserva) => bookings.includes(reserva.id));

    const reserves_res = isAdmin ? reserves : resBooking;

    return (
        <SwipeableDrawer
            open={stateDrawer}
            anchor={'left'}
            onClose={() => handleDrawer(false)}
            onOpen={() => handleDrawer(true)}
        >
            <Box sx={{
                width: { xs: 300, md: 500 }
            }}>
                <Toolbar />
                <List
                    sx={{ width: '100%', maxWidth: { xs: 300, md: 500 }, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Bookings
                        </ListSubheader>
                    }
                >
                    {reserves_res.length > 0 && (
                        reserves_res.map((booking) => (
                            <ReservesComponent key={booking.id} reserve={booking} />
                        ))
                    )}
                </List>
            </Box>
        </SwipeableDrawer>
    );
}
