import { List, SwipeableDrawer } from '@mui/material';
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({ handleDrawer, stateDrawer }) => {
    const { hotels } = useSelector(state => state.admin);

    return (
        <SwipeableDrawer
            anchor={'left'}
            open={stateDrawer}
            onClose={() => handleDrawer(false)}
            onOpen={() => handleDrawer(true)}
        >
            <List sx={{ maxWidth: 360, bgcolor: 'background.paper' }}>
                {hotels.map(hotel => (
                    <SideBarItem key={hotel.id}  {...hotel} />
                ))}
            </List>
        </SwipeableDrawer>
    )
}