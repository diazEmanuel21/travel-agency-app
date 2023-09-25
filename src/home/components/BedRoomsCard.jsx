import { forwardRef, useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { addRoomToBookings, addRoomToFavorites, markRoomAsBooked } from '../../store/user/thunks';
import { setActiveSteepBooking, setFavorite, setShowBackdrop } from '../../store/home/homeSlice';
import { createBooking } from '../../store/home/thunks';
import { useAlert } from '../../hooks/useAlert';
import axios from 'axios';
import {
    Box, Grid, Button, Tooltip, Card,
    CardHeader, CardMedia, CardContent, CardActions,
    Collapse, Avatar, IconButton, Typography,
} from '@mui/material';
/* ICONS */
import HotelIcon from '@mui/icons-material/Hotel';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CheckIcon from '@mui/icons-material/Check';
import DiamondIcon from '@mui/icons-material/Diamond';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { updateBooking } from '../../store/auth';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ContentIcons = forwardRef(function contentIcons(props, ref) {
    return <Box
        sx={{
            display: 'flex',
            overflow: 'hidden',
            height: '30px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        }}
        ref={ref}
    >
        {props.children}
    </Box>

});

const tableRoomQuality = ['Poor ', 'Fair', 'Good', 'Excellent', 'Very Good'];

export const BedRoomsCard = ({ data, index, favorite, handleDrawer }) => {
    const dispatch = useDispatch();
    const { setNotify } = useContext(TravelAgencyContext);
    const { mode } = useContext(ColorModeContext);
    const {
        uid,
        birthdate,
        gender,
        type_document,
        document_number,
        phone,
        name_contact,
        phone_contact
    } = useSelector(store => store.auth);

    const { activeSteepBooking, hotelSelected } = useSelector(store => store.home);
    const { bookings: userBookings, email, displayName } = useSelector(store => store.auth);
    const [expanded, setExpanded] = useState(-1);
    const { DialogComponent, handleState: handelAlert } = useAlert({
        title: 'Creation booking',
        description: 'A booking will be created, are you sure?',
        onAgree: () => {
            setRoomSelected()
        },
    });

    const stay_days = parseInt(localStorage.getItem('stay_days'));
    const qualityRoom = tableRoomQuality[data.rate_room - 1];
    const isExpanded = expanded === index;

    /* taxes */
    const taxes = data.taxes / 100;
    /* format */
    const copPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    });
    /* Night */
    const priceRoom = data.base_cost;
    const priceNight = copPrice.format(priceRoom);
    /* Total */
    const nightPrice = priceRoom * stay_days;
    const totalReserve = nightPrice * (1 + taxes);
    const priceTotal = totalReserve;
    const totalPrice = copPrice.format(priceTotal);

    localStorage.setItem('price_booking', priceTotal);

    const booking = {
        id: `${hotelSelected.id}_${data.id}_${uid}`,
        bedrooms_id: data.id,
        hotel_id: hotelSelected.id,
        hotel_name: hotelSelected.hotelName,
        user_id: uid,
        entry_date: localStorage.getItem('entry_date'),
        amount_people: localStorage.getItem('amount_people'),
        departure_date: localStorage.getItem('departure_date'),
        price_booking: localStorage.getItem('price_booking'),
        stay_days: localStorage.getItem('stay_days'),
        destination_city: hotelSelected.location,
    };

    const handleExpandClick = () => {
        setExpanded(isExpanded ? -1 : index);
    };

    const setRoomSelected = () => {
        if (favorite) {
            handleDrawer(false);
            return;
        };

        const dataUser = {
            birthdate,
            gender,
            type_document,
            document_number,
            phone,
            name_contact,
            phone_contact
        };

        const nullKeysString = validateDataUser(dataUser);

        if (nullKeysString.length > 0) {
            setNotify('info', `Complete your information in the ACCOUNT option. ${nullKeysString}.`, 10000);
            return;
        };

        createNewBooking();
    };

    const createNewBooking = async () => {
        dispatch(setShowBackdrop(true));
        const result = await dispatch(createBooking(booking));
        if (result.ok) {
            addBookingToUser();
        } else {
            dispatch(setShowBackdrop(false));
            setNotify('error', result.errorMessage);
        }
    };

    const addBookingToUser = async () => {
        const result = await dispatch(addRoomToBookings(uid, `${hotelSelected.id}_${data.id}_${uid}`));
        if (result.ok) {
            changeStateInReserveBedRoom();
        } else {
            dispatch(setShowBackdrop(false));
            setNotify('error', result.errorMessage);
        }
    };

    const changeStateInReserveBedRoom = async () => {
        const result = await dispatch(markRoomAsBooked(hotelSelected.id, data.id));
        if (result.ok) {
            updateUserBooking();
            dispatch(setActiveSteepBooking(activeSteepBooking + 1));
            setNotify('success', result.message);
        } else {
            dispatch(setShowBackdrop(false));
            setNotify('error', result.errorMessage);
        }
    };


    const updateUserBooking = () => {
        const bookingPush = [...userBookings, booking.id];
        dispatch(updateBooking(bookingPush));
        sendEmailToUser();
    };

    const sendEmailToUser = async () => {
        const dataEmail = {
            email,
            displayName,
            inDate: booking.entry_date,
            outDate: booking.departure_date,
            hotel_name: booking.hotel_name,
        };
        try {
            const response = await axios.post('https://api-send-mail-l2zv.vercel.app/api/email/sendEmail', dataEmail);
            if (response.status === 200) {
                dispatch(setShowBackdrop(false));
                setNotify('success', 'Email enviado con éxito');
            } else {
                dispatch(setShowBackdrop(false));
                setNotify('error', 'Hubo un error al enviar el email');
            }
        } catch (error) {
            dispatch(setShowBackdrop(false));
            setNotify('error', 'Hubo un error al enviar el email');
        }
    };


    const handleAddToFavorites = async () => {
        dispatch(setShowBackdrop(true));
        const result = await dispatch(addRoomToFavorites(uid, data.id));
        if (result.ok) {
            dispatch(setShowBackdrop(false));
            setNotify('success', result.message);
        } else {
            dispatch(setShowBackdrop(false));
            setNotify('error', result.errorMessage);
        }
    };

    const validateDataUser = (obj) => {
        const nullKeys = Object.keys(obj).filter(key => obj[key] === null);
        return nullKeys.join(', ');
    };

    const setItemFavorite = () => {
        dispatch(setFavorite([data]));
        handleAddToFavorites();
    };

    return (
        <>
            {
                data.state ? (
                    <Grid item sx={{ m: 1 }}>
                        <Card sx={{ maxWidth: 298, minWidth: 298 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: `${mode === 'dark' ? 'secondary.main' : 'primary.main'}` }} aria-label="Diamond Agency">
                                        <DiamondIcon />
                                    </Avatar>
                                }
                                action={
                                    <IconButton disabled={favorite} onClick={setItemFavorite} color="error" aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                }
                                title={data.type_bedroom}
                                subheader={`${data.rate_room}/5 ${qualityRoom}`}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={data.image_room_URL}
                                alt="Paella dish"
                            />
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <ContentIcons>
                                    <PeopleAltIcon sx={{ mr: 1 }} />
                                    <Typography fontSize={14}>{`Capacity for ${data.amount_people}`}</Typography>
                                </ContentIcons>
                                <ContentIcons>
                                    <HotelIcon sx={{ mr: 1 }} />
                                    <Typography fontSize={14}>{`Type bed ${data.type_bedroom}`}</Typography>
                                </ContentIcons>
                                <ContentIcons>
                                    <FmdGoodIcon sx={{ mr: 1 }} />
                                    <Typography fontSize={14}>{data.room_location}</Typography>
                                </ContentIcons>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                                    onClick={handelAlert}
                                >
                                    Book now
                                </Button>
                                <Tooltip title="More info" placement="top">
                                    <ExpandMore
                                        expand={isExpanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={isExpanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </Tooltip>
                            </CardActions>
                            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    {
                                        Object.keys(data.roomDetails).map((key) => (
                                            <ContentIcons
                                                key={key}
                                            >
                                                <CheckIcon
                                                    color='success'
                                                    sx={{ mr: 1 }}
                                                />
                                                <Typography fontSize={14}>
                                                    {data.roomDetails[key]}
                                                </Typography>
                                            </ContentIcons>
                                        ))
                                    }
                                    <Box
                                        sx={{
                                            mt: 1
                                        }}
                                    >
                                        <ContentIcons>
                                            <Typography variant='subtitle1'>
                                                COP {priceNight} to night
                                            </Typography>
                                        </ContentIcons>
                                        <ContentIcons>
                                            <Typography variant='subtitle2'>
                                                COP %{data.taxes} taxes
                                            </Typography>
                                        </ContentIcons>
                                        <ContentIcons>
                                            <Typography variant='h6'>
                                                COP {totalPrice}
                                            </Typography>
                                        </ContentIcons>
                                    </Box>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ) : (
                    <h1>No found rooms </h1>
                )}
            <DialogComponent />
        </>
    )
}