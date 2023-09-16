import { useContext, useState } from 'react';
import { ColorModeContext } from '../../context';
import { BedRoomsSteeper } from './BedRoomsSteeper';
import { setDataRoom } from '../../store/home/homeSlice';
import {
    Badge,
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Rating,
    Button
} from '@mui/material';
/* ICONS */
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import RoomIcon from '@mui/icons-material/Room';
import { useDispatch } from 'react-redux';

export const HotelComponent = ({ data }) => {
    const { mode } = useContext(ColorModeContext);
    const dispatch = useDispatch();


    const [open, setOpen] = useState(true);

    const handleOpenBedRooms = (dataRoom) => {
        setOpen(true);
        dispatch(setDataRoom(dataRoom));
    };

    const handleCloseBedRooms = () => {
        setOpen(false);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            {data.map((hotel) => (
                <Box
                    key={hotel.hotelID}
                >
                    {hotel.rooms.length > 0 && hotel.state && (
                        <Card
                            sx={{
                                display: 'flex',
                                width: '100%',
                                mb: 1.5,
                                height: 250
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{ minWidth: 151 }}
                                image={hotel.imgURL}
                                alt="Hotel IMG"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <CardContent
                                    sx={{
                                        display: 'flex',
                                        flex: '1',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flex: '1',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-evenly',
                                            }}
                                        >
                                            <Typography component="div" variant="h5">
                                                {hotel.hotelName}
                                            </Typography>
                                            <Rating name="Hotel rating" value={hotel.rate} readOnly />
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                }}
                                            >
                                                <RoomIcon />
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {hotel.address}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-around',
                                            }}>
                                            {hotel.wifi && (<WifiIcon />)}
                                            {hotel.pool && (<PoolIcon />)}
                                            {hotel.restaurant && (<RestaurantMenuIcon />)}

                                            <Badge
                                                badgeContent={hotel.rooms.length}
                                                color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                                            >
                                                <LocalHotelIcon color="action" />
                                            </Badge>
                                        </Box>
                                    </Box>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={() => handleOpenBedRooms(hotel.rooms)}
                                        color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                                    >
                                        Book Now!
                                    </Button>
                                </CardContent>
                            </Box>
                        </Card >
                    )}
                </Box>

            ))

            }

            <BedRoomsSteeper
                open={open}
                handleClose={handleCloseBedRooms}
            />
        </Box >
    );
}