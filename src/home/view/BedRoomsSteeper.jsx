import { forwardRef, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ColorModeContext } from '../../context';
import { Rooms, Summary } from '.';
import {
    AppBar, Box, Dialog, DialogContent,
    IconButton, Slide, Tab,
    Tabs, Toolbar
} from '@mui/material';
/* ICONS */
import CloseOutlined from '@mui/icons-material/CloseOutlined';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const steeps = ['Rooms', 'Reservation'];

export const BedRoomsSteeper = ({ open, handleClose }) => {
    const { mode } = useContext(ColorModeContext);
    const { activeSteepBooking = 0, } = useSelector(store => store.home);

    return (
        <>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar position="static" sx={{ bgcolor: `${mode === 'dark' ? '#12151C' : '#001e3c'}` }} >
                    <Toolbar>
                        <IconButton
                            onClick={handleClose}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <CloseOutlined />
                        </IconButton>
                        <Box sx={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center'
                        }}>
                            <Box>
                                <Tabs
                                    sx={{ flex: 1 }}
                                    indicatorColor='secondary'
                                    textColor='inherit'
                                    value={activeSteepBooking}
                                    centered
                                >
                                    {steeps.map((steep, index) => (
                                        <Tab
                                            key={steep}
                                            value={index}
                                            label={steeps[index]}
                                            wrapped
                                        />
                                    ))}
                                </Tabs>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
                <DialogContent
                    sx={{
                        backgroundColor: `${mode === 'dark' ? 'darkslategrey' : 'lightslategrey'}`,
                    }}>
                    {activeSteepBooking === 0 ? (<Rooms />) : (<Summary />)}
                </DialogContent>
            </Dialog >
        </>
    );
}