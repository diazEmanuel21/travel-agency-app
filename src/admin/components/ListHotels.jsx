import { useDispatch, useSelector } from "react-redux";
import { setActiveHotel, startDeletingHotel } from "../../store/admin";
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
/* ICONS */
import DeleteIcon from '@mui/icons-material/Delete';

export const ListHotels = () => {
    const dispatch = useDispatch();
    const { hotels } = useSelector(state => state.admin);

    const handleActiveNote = () => {
        dispatch(setActiveHotel({ ...hotels }));
    };

    const deleteItem = () => {
        dispatch(startDeletingHotel());
    };

    return (
        <List sx={{ bgcolor: 'background.paper' }}>
            {hotels.map(hotel => (
                <>
                    <ListItem
                        key={hotel.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" color='secondary' onClick={deleteItem}>
                                <DeleteIcon />
                            </IconButton>
                        }>
                        <ListItemButton onClick={handleActiveNote}>
                            <ListItemText primary={hotel.hotelName} secondary={hotel.details} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </>
            ))}
        </List>
    )
}