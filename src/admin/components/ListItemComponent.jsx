import { useContext } from "react";
import { ColorModeContext } from "../../context";
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { OptionsList } from "./OptionsList";
/* ICONS */
import ApartmentIcon from '@mui/icons-material/Apartment';
export const ListItemComponent = ({ hotel, handleOpen }) => {
    const { mode } = useContext(ColorModeContext);

    return (
        <>
            <ListItem
                secondaryAction={
                    <OptionsList hotel={hotel} handleOpen={handleOpen}/>
                }
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: `${mode === 'dark' ? 'secondary.main' : 'primary.main'}` }}>
                        <ApartmentIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={hotel.hotelName} secondary={hotel.details} />
            </ListItem>
            <Divider />
        </>
    )
}
