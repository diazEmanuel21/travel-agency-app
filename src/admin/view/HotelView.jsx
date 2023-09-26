import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { changeSteepRoom, setActiveHotel } from '../../store/admin';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { CityTexfield } from '../../home/components/CityTexfield';
import { setActiveStep } from '../../store/home/homeSlice';
import { useAlert } from '../../hooks/useAlert';

import { Card, CardContent, Typography, TextField, Grid, FormControl, FormControlLabel, Box, CardActions, Button, Switch } from '@mui/material';

export const HotelView = () => {
  const dispatch = useDispatch();
  const { mode } = useContext(ColorModeContext);
  const { setNotify } = useContext(TravelAgencyContext);
  const { active: hotelActive, isSaving, location } = useSelector(state => state.admin);

  const {
    hotelName,
    numberBedRooms,
    rate,
    state,
    wifi,
    pool,
    restaurant,
    imgURL,
    details,
    onInputChange,
    formState,
  } = useForm(hotelActive);

  const { DialogComponent, handleState: handelAlert } = useAlert({
    title: 'Save hotel',
    description: `Are you sure to create the hotel with 🏨 ${numberBedRooms} rooms?`,
    onAgree: () => {
      saveHotel()
    },
  });

  const colorMode = `${mode === 'dark' ? 'secondary' : 'primary'}`;

  const saveHotel = () => {
    let form = { ...formState };
    form.location = location
    dispatch(setActiveHotel(form));
    setNotify('success', 'Hotel updated correctly.')
    dispatch(setActiveStep(1));
    dispatch(changeSteepRoom(0));
  };

  return (
    <>
      <Card>
        <Box sx={{
          bgcolor: `${mode === 'dark' ? 'secondary.main' : 'primary.main'}`,
          color: "#FFF",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Typography variant="button" p={1}>
            Modify hotel
          </Typography>
        </Box>
        <CardContent>
          <Grid container spacing={2} flexDirection={'column'}>
            <Grid item>
              <FormControl
                xs={12}
                sm={6}
                fullWidth
                onChange={onInputChange}
              >
                <TextField
                  color={colorMode}
                  label="Name hotel"
                  name="hotelName"
                  value={hotelName}
                  variant="outlined"
                  required
                  inputProps={{
                    maxLength: 40,
                    minLength: 2,
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item>
              <CityTexfield admin />
            </Grid>

            <Grid item>
              <FormControl
                xs={12}
                sm={6}
                onChange={onInputChange}
                fullWidth
              >
                <TextField
                  color={colorMode}
                  label="Bed rooms"
                  variant="outlined"
                  name={"numberBedRooms"}
                  value={numberBedRooms}
                  type='number'
                  required
                />
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl
                xs={12}
                sm={6}
                onChange={onInputChange}
                fullWidth
              >
                <TextField
                  color={colorMode}
                  label="Rate"
                  variant="outlined"
                  name={"rate"}
                  value={rate}
                  type='number'
                  required
                />
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl
                xs={12}
                sm={6}
              >
                <FormControlLabel
                  control={<Switch
                    color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                    checked={state}
                    onChange={onInputChange}
                    name="state"

                  />}
                  label="state"
                  labelPlacement="end"
                />
              </FormControl>
              <FormControl
                xs={12}
                sm={6}
              >
                <FormControlLabel
                  control={<Switch
                    color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                    checked={wifi}
                    onChange={onInputChange}
                    name="wifi"
                  />}
                  label="wifi"
                  labelPlacement="end"
                />
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl
                xs={12}
                sm={6}
              >
                <FormControlLabel
                  control={<Switch
                    color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                    checked={pool}
                    onChange={onInputChange}
                    name="pool"
                  />}
                  label="pool"
                  labelPlacement="end"
                />
              </FormControl>

              <FormControl
                xs={12}
                sm={6}
              >
                <FormControlLabel
                  control={<Switch
                    color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                    checked={restaurant}
                    onChange={onInputChange}
                    name="restaurant"
                  />}
                  label="restaurant"
                  labelPlacement="end"
                />
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl
                xs={12}
                sm={6}
                fullWidth
                onChange={onInputChange}
              >
                <TextField
                  color={colorMode}
                  label="Image URL"
                  name="imgURL"
                  value={imgURL}
                  variant="outlined"
                  required
                />
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl
                xs={12}
                sm={6}
                fullWidth
                onChange={onInputChange}
              >
                <TextField
                  color={colorMode}
                  label="Details"
                  name="details"
                  value={details}
                  variant="outlined"
                  required
                />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            onClick={handelAlert}
            disabled={isSaving}
            variant="contained"
            color={colorMode}
            fullWidth
          >
            Save changes
          </Button>
        </CardActions>
      </Card>
      <DialogComponent />
    </>
  );
};