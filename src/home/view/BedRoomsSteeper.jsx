import { forwardRef, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorModeContext } from '../../context';
import { setActiveStep, setDestination } from '../../store/home/homeSlice';
import { Rooms, Summary } from '.';
import {
    AppBar, Box, Dialog, DialogContent,
    DialogActions, IconButton, Slide, Tab,
    Tabs, Toolbar, Button, DialogTitle, DialogContentText,
} from '@mui/material';
/* ICONS */
import CloseOutlined from '@mui/icons-material/CloseOutlined';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const TabPanel = ({ children, value, active }) => {
    return (
        <Box
            role="tabpanel"
            hidden={value !== active}
            id={`tabpanel-${active}`}
            aria-labelledby={`tab-${active}`}
        >
            {value === active && (
                <>
                    {children}
                </>
            )}
        </Box>
    )
};

const steeps = ['Rooms', 'Reservation'];

export const BedRoomsSteeper = ({ open, handleClose }) => {
    const dispatch = useDispatch();

    const { mode } = useContext(ColorModeContext);
    const { activeStep = 0, } = useSelector(store => store.home);

    const [openAlert, setOpen] = useState(false);

    const handleCloseAlert = () => {
        setOpen(false);
    };

    const handleNext = () => {
        if (activeStep < steeps) return;
        dispatch(setActiveStep(activeStep + 1));
    };

    const handleBack = () => {
        if (activeStep > steeps) return;
        dispatch(setActiveStep(activeStep - 1));
    };

    const cleanWizard = () => {
        dispatch(setActiveStep(0));
    }

    const saveReserve = () => {
        dispatch(setDestination(''));
        cleanWizard();
        handleCloseAlert(false);
        handleClose(false);
    };

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
                                    value={activeStep}
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
                    {steeps.map((steep, index) => (
                        <TabPanel
                            key={steep}
                            value={index}
                            active={activeStep}
                        >
                            {index === 0 && (
                                <Rooms
                                    steeps={steeps}
                                    activeStep={activeStep}
                                    handleBack={handleBack}
                                    handleNext={handleNext}
                                />
                            )}
                            {index === 1 && (
                                <Summary
                                />
                            )}
                        </TabPanel>
                    ))}
                </DialogContent>
            </Dialog >

            <div>
                <Dialog
                    open={openAlert}
                    onClose={handleCloseAlert}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Information"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            We will now send you a booking summary to the email provided. Thank you for choosing us!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseAlert}>Disagree</Button>
                        <Button onClick={saveReserve} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        </>
    );
}