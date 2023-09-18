import { useDispatch } from 'react-redux';
import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import { setActiveHotel } from '../../store/admin';
/* ICONS */
import HotelIcon from '@mui/icons-material/Hotel';

export const SideBarItem = ({
    id,
    imgURL,
    wifi,
    rate,
    numberBedRooms,
    restaurant,
    pool,
    location,
    details,
    state,
    hotelName,
}) => {
    const dispatch = useDispatch();

    const handleActiveNote = () => {
        dispatch(setActiveHotel({
            id,
            imgURL,
            wifi,
            rate,
            restaurant,
            numberBedRooms,
            pool,
            location,
            details,
            state,
            hotelName,
        }));
    }

    return (
        <ListItem>
            <ListItemButton onClick={handleActiveNote}>
                <ListItemAvatar>
                    <Avatar>
                        <HotelIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={hotelName} secondary={details} />
            </ListItemButton>
        </ListItem>
    )
}
