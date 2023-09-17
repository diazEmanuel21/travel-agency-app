import { forwardRef, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { setActiveStep, setBooking, setDataGuest } from '../../store/home/homeSlice';
import { Reservation, Rooms, Summary } from '.';
import { useTheme } from '@mui/material/styles';
import {
    AppBar, Box, Dialog, DialogContent,
    DialogActions, IconButton, Slide, Tab,
    Tabs, Toolbar, MobileStepper, Button, DialogTitle, DialogContentText,
} from '@mui/material';
/* ICONS */
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

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
    const theme = useTheme();
    const dispatch = useDispatch();

    const { mode } = useContext(ColorModeContext);
    const { setNotify } = useContext(TravelAgencyContext);

    const { bedRoomSelected, dataGuest, destination_city, flagReserve, activeStep = 0 } = useSelector(store => store.home);

    const [openAlert, setOpen] = useState(false);

    const maxSteps = steeps.length;

    const handleOpenAlert = () => {
        setOpen(true);
    };

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

    const saveReserve = () => {
        const booking = {
            bedrooms_id: bedRoomSelected.roomID,
            user_id: dataGuest.document_number,
            entry_date: localStorage.getItem('entry_date'),
            amount_people: localStorage.getItem('amount_people'),
            departure_date: localStorage.getItem('departure_date'),
            destination_city,
            price_booking: localStorage.getItem('price_booking'),
        };
        // setNotify('succes', 'Reservation made correctly.');
        debugger;
        /* Close dialog */
        handleClose(false);
        /* Close alert */
        handleCloseAlert(false);
        dispatch(setBooking(booking));
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
                                <Reservation
                                />
                            )}
                            {index === 2 && (
                                <Summary
                                />
                            )}
                        </TabPanel>
                    ))}
                </DialogContent>
                <DialogActions>
                    <MobileStepper
                        sx={{
                            borderRadius: 2,
                            width: '100%',
                            justifyContent: 'space-between'
                        }}
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                variant="contained"
                                onClick={activeStep === (maxSteps - 1) ? handleOpenAlert : handleNext}
                                disabled={activeStep === (maxSteps - 1) ? flagReserve : bedRoomSelected.length < 1}
                                color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                            >
                                {activeStep === (maxSteps - 1) ? 'Save' : 'Next'}
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button
                                variant="contained"
                                onClick={handleBack}
                                disabled={activeStep === 0}
                                color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                            >
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    />
                </DialogActions>
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