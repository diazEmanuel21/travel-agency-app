import { useContext, useState } from 'react';
import { ColorModeContext } from '../../context';
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
import { FormBedRooms } from '../components';

const steps = [
  {
    label: 'select',
    description: 'Desc.'
  }
];

// Ahora tienes un array con 13 objetos en total.

export const BedRoomsView = () => {
  const { mode } = useContext(ColorModeContext);
  const [activeStep, setActiveStep] = useState(0);

  const colorMode = mode === 'dark' ? 'secondary' : 'primary';


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
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} >
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
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
                    sx={{ mt: 1, mr: 1 }}
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
    </Box>
  );
}
