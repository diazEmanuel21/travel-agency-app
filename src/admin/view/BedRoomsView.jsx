import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { FormBedRooms } from '../components';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography
} from '@mui/material';

export const BedRoomsView = ({ steps = [{ id: 0 }] }) => {
  const { mode } = useContext(ColorModeContext);
  const { setNotify } = useContext(TravelAgencyContext);
  const [activeStep, setActiveStep] = useState(0);

  const colorMode = mode === 'dark' ? 'secondary' : 'primary';

 /*  useEffect(() => {
    setNotify('info', 'Remember to click "Save room" to save your changes.')
  }, []) */

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      {
        steps.length > 0 && (
          <>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.id} >
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {'Hotel Room'}
                  </StepLabel>
                  <StepContent>
                    <Box>
                      <FormBedRooms />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          color={colorMode}
                          variant="contained"
                          onClick={handleNext}
                          sx={{
                            mt: 1,
                            mr: 1,
                            display: `${index === steps.length - 1 ? 'none' : 'flex'}`
                          }}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                          color={colorMode}
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button
                  color={colorMode}
                  onClick={handleReset}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Reset
                </Button>
              </Paper>
            )}
          </>
        )
      }
    </Box>
  );
}
