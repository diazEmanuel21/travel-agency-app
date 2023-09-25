import { useSelector } from 'react-redux';
import { BedRoomsCard } from './BedRoomsCard';
import { Grid, AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

export const FavoritesComponent = ({ handleDrawer }) => {
    const { hotels } = useSelector(store => store.home);
    const { favorites } = useSelector(store => store.auth);

    const getRooms = () => {
        let roomsToFind = [];

        hotels.forEach((hotel) => {
            hotel.rooms.forEach((room) => {
                if (favorites.includes(room.id)) {
                    roomsToFind.push(room);
                }
            });
        });
        return roomsToFind;
    };
    
    const rooms = getRooms();

    const handleExit = () => {
        handleDrawer(false);
    }

    return (
        <>
            <AppBar position="sticky" color="primary">
                <Toolbar sx={{ p: 1, display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                        <IconButton aria-label="close" color='secondary' onClick={handleExit}>
                            <CancelIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                        <Typography variant="h6">
                            Favorite rooms
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            {rooms.length > 0 && (
                <Grid container sx={{ justifyContent: 'center' }}>
                    {rooms.map((favorite, index) => (
                        <BedRoomsCard
                            key={favorite.id}
                            data={favorite}
                            index={index}
                            handleDrawer={handleDrawer}
                            favorite
                        />
                    ))}
                </Grid>
            )}
        </>
    );
}