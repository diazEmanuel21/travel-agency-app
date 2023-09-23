import { forwardRef, useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ColorModeContext } from '../../context';
import { setActiveStep, setBedRoom, setFavorite } from '../../store/home/homeSlice';
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

    const stay_days = parseInt(localStorage.getItem('stay_days'));

    const { mode } = useContext(ColorModeContext);
    const { activeStep } = useSelector(store => store.home);

    const [expanded, setExpanded] = useState(-1);

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

    const handleExpandClick = () => {
        setExpanded(isExpanded ? -1 : index);
    };

    const setRoomSelected = () => {
        dispatch(setBedRoom(data))
        dispatch(setActiveStep(activeStep + 1));
        if(favorite) {
            handleDrawer(false);
        }
    };

    const setItemFavorite = () => {
        dispatch(setFavorite([data]));
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
                                    onClick={setRoomSelected}
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
        </>
    )
}