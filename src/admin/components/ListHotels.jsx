import { useSelector } from "react-redux";
import { ListItemComponent } from "./ListItemComponent";
import { List, ListSubheader, Paper } from "@mui/material";


export const ListHotels = ({ handleOpen }) => {
    const { hotels } = useSelector(state => state.admin);

    return (
        <Paper elevation={3} sx={{ p: 1, width: '100%' }}>
            <List
                sx={{ width: '100%' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Hotel list
                    </ListSubheader>
                }
            >
                {hotels.map(hotel => (
                    <ListItemComponent key={hotel.id} hotel={hotel} handleOpen={handleOpen} />
                ))}
            </List>
        </Paper>
    )
}