import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { BedRoomsSteeper } from './BedRoomsSteeper';
import { setActiveStep, setBedRoom, setEnabledBtnSaveReserve, setHotel, setHotelRooms, setShowBackdrop } from '../../store/home/homeSlice';
import { locationData } from '../../data';
import {
    Badge,
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Rating,
    Button, Tooltip, Grid
} from '@mui/material';
/* ICONS */
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import RoomIcon from '@mui/icons-material/Room';
import { useEffect } from 'react';

export const HotelComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { setNotify } = useContext(TravelAgencyContext);
    const { hotels, resHotels, hotelSelected: existingHotel } = useSelector(store => store.home);
    const { status, rol } = useSelector(state => state.auth);
    const { mode } = useContext(ColorModeContext);

    const [open, setOpen] = useState(false);

    const filterHotels = resHotels.length > 0 ? resHotels : hotels;

/*     useEffect(() => {
        dispatch(setShowBackdrop(true));
        setTimeout(() => {
            dispatch(setShowBackdrop(false));
        }, 5000);
    }, []); */

    const handleOpenBedRooms = (hotelRooms, id) => {
        if (status !== "authenticated") {
            setNotify('info', 'To make a reservation you must log-in.');
            navigate(`/auth`);
        };
        if (rol === "admin") return setNotify('info', 'You cannot make reservations if you are an administrator.');
        const hotelInReservationProcess = existingHotel?.id;

        if (hotelInReservationProcess !== undefined) {
            if (hotelInReservationProcess !== id) {
                dispatch(setBedRoom([]));
                dispatch(setActiveStep(0));
                dispatch(setEnabledBtnSaveReserve(false));
            }
        };

        setOpen(true);
        const hotelSelected = filterHotels.filter((hotel) => hotel.id === id)[0];
        dispatch(setHotel(hotelSelected));
        dispatch(setHotelRooms(hotelRooms));
    };

    const handleCloseBedRooms = () => {
        setOpen(false);
    };

    const sortedHotels = filterHotels.slice().sort((a, b) => {
        const roomsInTrueStateA = a.rooms.filter((room) => room.state === true).length;
        const roomsInTrueStateB = b.rooms.filter((room) => room.state === true).length;
        return roomsInTrueStateB - roomsInTrueStateA;
    });

    return (
        <Grid item>
            {sortedHotels.map((hotel) => {
                const city = locationData.filter((city) => city.id === hotel.location)[0];
                const roomsInTrueState = hotel.rooms.filter((room) => room.state === true);
                const cantRoomsInTrueState = roomsInTrueState.length;

                return (
                    <Box
                        key={hotel.id}
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
                                                        {city?.location}
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

                                                <Tooltip title="Amount rooms">
                                                    <Badge
                                                        badgeContent={cantRoomsInTrueState}
                                                        color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                                                    >
                                                        <LocalHotelIcon color="action" />
                                                    </Badge>
                                                </Tooltip>
                                            </Box>
                                        </Box>
                                        <Button
                                            fullWidth
                                            disabled={cantRoomsInTrueState < 1}
                                            variant="contained"
                                            onClick={() => handleOpenBedRooms(hotel.rooms, hotel.id)}
                                            color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                                        >
                                            Book Now!
                                        </Button>
                                    </CardContent>
                                </Box>
                            </Card >
                        )
                        }
                    </Box >
                )
            })}

            <BedRoomsSteeper
                open={open}
                handleClose={handleCloseBedRooms}
            />
        </Grid >
    );
}