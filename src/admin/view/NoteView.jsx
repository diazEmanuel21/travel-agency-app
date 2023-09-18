import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { setActiveHotel, startDeletingHotel, startSaveHotel } from '../../store/admin';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { CityTexfield } from '../../home/components/CityTexfield';

import { Card, CardContent, Typography, TextField, Grid, FormControl, FormControlLabel, Box, CardActions, Button, Switch } from '@mui/material';

export const NoteView = () => {
  const dispatch = useDispatch();
  const { mode } = useContext(ColorModeContext);
  const colorMode = `${mode === 'dark' ? 'secondary' : 'primary'}`;

  const { setNotify } = useContext(TravelAgencyContext);
  const { active: noteActive, messageSaved, isSaving } = useSelector(state => state.admin);

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
    /* Validations */
    onInputChange,
    formState,
  } = useForm(noteActive);

  useEffect(() => {
    if (messageSaved !== '') return setNotify('success', 'Hotel updated correctly.');
  }, [messageSaved])

  const saveHotel = (e) => {
    e.preventDefault();
    dispatch(setActiveHotel(formState));
    dispatch(startSaveHotel());
  };

  return (
    <Card>
      <Box sx={{
        bgcolor: `${mode === 'dark' ? '#12151C' : '#001e3c'}`,
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
          onClick={saveHotel}
          disabled={isSaving}
          variant="contained"
          color={colorMode}
          fullWidth
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
};