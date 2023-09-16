import { forwardRef, useContext, useState } from 'react';
import { AppBar, Dialog, DialogContent, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import { ColorModeContext } from '../../context';
import { SteeperBooking } from '../components';
/* ICONS */
import CloseOutlined from '@mui/icons-material/CloseOutlined';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const steeps = [
    {
        label: 'Choose your favorite room',
    },
    {
        label: 'Reservation, we are glad you have us!',
    },
    {
        label: 'We will wait for you!',
    },
];

export const BedRoomsComponent = ({ open, handleClose }) => {
    const { mode } = useContext(ColorModeContext);

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {steeps[activeStep].label}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent
                    sx={{
                        backgroundColor: `${mode === 'dark' ? 'darkslategrey' : 'lightslategrey'}`,
                    }}>
                    <SteeperBooking
                        steeps={steeps}
                        activeStep={activeStep}
                        handleBack={handleBack}
                        handleNext={handleNext}
                    />
                </DialogContent>
            </Dialog >
        </>
    );
}
