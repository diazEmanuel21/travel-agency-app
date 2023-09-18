import { useDispatch } from 'react-redux';
import { Divider, IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { setActiveHotel, startDeletingHotel } from '../../store/admin';
/* ICONS */
import DeleteIcon from '@mui/icons-material/Delete';

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

    const deleteItem = () => {
        dispatch(startDeletingHotel());
    }

    return (
        <>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" color='secondary' onClick={deleteItem}>
                        <DeleteIcon />
                    </IconButton>
                }>
                <ListItemButton onClick={handleActiveNote}>
                    <ListItemText primary={hotelName} secondary={details} />
                </ListItemButton>
            </ListItem>
            <Divider />
        </>
    )
}