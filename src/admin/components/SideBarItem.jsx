import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/admin';

export const SideBarItem = ({ title, body, id, date, imageUrl = [] }) => {
    const dispatch = useDispatch();

    const handleActiveNote = () => {
        dispatch(setActiveNote({
            title,
            body,
            id,
            date,
            imageUrl
        }));
    }

    const newTitle = useMemo(() => {
        return title.length > 15
            ? title.substring(0, 15) + '...'
            : title;
    }, [title]);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={handleActiveNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
