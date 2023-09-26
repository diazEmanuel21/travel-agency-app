import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { setActiveStep, setShowBackdrop } from '../../store/home/homeSlice';
import { useAlert } from '../../hooks/useAlert';
import { FormBedRooms } from '../components';
import { changeSteepRoom, cleanActiveRoom, setActiveHotel, startSaveHotel } from '../../store/admin';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
  Paper
} from '@mui/material';

export const BedRoomsView = ({ steps = [{ id: 0 }], handleClose }) => {
  const dispatch = useDispatch();
  const { steepActiveRoom, active, activeRoom } = useSelector(store => store.admin);
  const { mode } = useContext(ColorModeContext);
  const { setNotify } = useContext(TravelAgencyContext);
  const { DialogComponent, handleState: handelAlert } = useAlert({
    title: 'Creation of new hotel',
    description: 'A new hotel will be created, are you sure?',
    onAgree: () => {
      saveReserve()
    },
  });

  const colorMode = mode === 'dark' ? 'secondary' : 'primary';

  const handleBack = () => {
    dispatch(changeSteepRoom(steepActiveRoom - 1));
  };

  const openAlert = () => {
    handelAlert(true)
  };

  const saveReserve = () => {
    let hotel = { ...active };
    hotel.rooms = activeRoom;
    dispatch(setActiveHotel(hotel));
    handleSaveHotel();
  };

  const handleSaveHotel = async () => {
    dispatch(setShowBackdrop(true));
    const result = await dispatch(startSaveHotel());
    if (result.ok) {
      dispatch(setShowBackdrop(false));
      setNotify('success', result.message);
      /* Clean */
      dispatch(setActiveStep(0));
      dispatch(changeSteepRoom(0))
      dispatch(setActiveHotel(null))
      dispatch(cleanActiveRoom());
      handleClose();

    } else {
      dispatch(setShowBackdrop(false));
      setNotify('error', result.errorMessage);
    }
  };

  return (
    <Box>
      {
        steps.length > 0 && (
          <>
            <Stepper activeStep={steepActiveRoom} orientation="vertical">
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
                      <FormBedRooms id={step.id} />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Button
                        color={colorMode}
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {steepActiveRoom === steps.length && (
              <Paper square elevation={3} sx={{ p: 3 }}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button
                  sx={{ m: 1 }}
                  color={colorMode}
                  variant="contained"
                  onClick={openAlert}
                  fullWidth
                >
                  Save hotel
                </Button>
              </Paper>
            )}
          </>
        )
      }
      <DialogComponent />
    </Box>
  );
}



