import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    MobileStepper,
    Button,
} from '@mui/material';
import { ColorModeContext } from '../../context';
/* ICONS */
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { BedRoomsCard } from './BedRoomsCard';

export const SteeperBooking = ({ steeps, activeStep, handleNext, handleBack }) => {
    const { mode } = useContext(ColorModeContext);
    const theme = useTheme();
    const maxSteps = steeps.length;

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            {/* Content */}
            <Box sx={
                {
                    display: 'flex',
                    flex: '1',
                    minHeight: '77vh',
                }
            }>
                <BedRoomsCard />
            </Box>
            {/* Actions */}
            <MobileStepper
                sx={{
                    borderRadius: 2,
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
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
        </Box>
    );
}