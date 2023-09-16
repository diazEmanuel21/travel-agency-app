import { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { ColorModeContext } from '../../context';
import { setBedRoom } from '../../store/home/homeSlice';
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

const tableRoomQuality = ['Poor ', 'Fair', 'Good', 'Excellent', 'Very Good'];

const useStyles = () => ({
    contentIcons: {
        display: 'flex',
        overflow: 'hidden',
        height: '30px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    }
});

export const BedRoomsCard = ({ data, index }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { mode } = useContext(ColorModeContext);


    const [expanded, setExpanded] = useState(-1);

    const qualityRoom = tableRoomQuality[data.rateRoom - 1];
    const isExpanded = expanded === index;

    const handleExpandClick = () => {
        setExpanded(isExpanded ? -1 : index);
    };

    const setRoomSelected = () => {
        dispatch(setBedRoom(data))
    }

    return (
        <Grid item sx={{ m: 1 }}>
            <Card sx={{ maxWidth: 298, minWidth: 298 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: `${mode === 'dark' ? 'secondary.main' : 'primary.main'}` }} aria-label="Diamond Agency">
                            <DiamondIcon />
                        </Avatar>
                    }
                    action={
                        <IconButton color="error" aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    }
                    title={data.roomType}
                    subheader={`${data.rateRoom}/5 ${qualityRoom}`}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={data.imageRoomURL}
                    alt="Paella dish"
                />
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={classes.contentIcons}
                    >
                        <HotelIcon sx={{ mr: 1 }} />
                        <Typography fontSize={14}>{`${data.numberBed} bed ${data.typeBed}`}</Typography>
                    </Box>
                    <Box
                        sx={classes.contentIcons}
                    >
                        <FmdGoodIcon sx={{ mr: 1 }} />
                        <Typography fontSize={14}>{data.roomLocation}</Typography>
                    </Box>
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
                                <Box
                                    key={key}
                                    sx={classes.contentIcons}
                                >
                                    <CheckIcon
                                        color='success'
                                        sx={{ mr: 1 }}
                                    />
                                    <Typography fontSize={14}>
                                        {data.roomDetails[key]}
                                    </Typography>
                                </Box>
                            ))
                        }
                        <Box
                            sx={{
                                mt: 1
                            }}
                        >
                            <Box
                                sx={classes.contentIcons}
                            >
                                <Typography variant='h6'>
                                    COP ${data.baseCost} total
                                </Typography>
                            </Box>
                            <Box
                                sx={classes.contentIcons}
                            >
                                <Typography variant='subtitle2'>
                                    COP %{data.taxes} taxes
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}