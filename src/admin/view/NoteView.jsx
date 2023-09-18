import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';
import { setEnabledBtnSaveReserve, setDataGuest } from '../../store/home/homeSlice';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { CityTexfield } from '../../home/components/CityTexfield';
import { Card, CardContent, Typography, TextField, Grid, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Select, MenuItem, InputLabel, Box, CardActions, Button, Switch } from '@mui/material';

const fields = {
  hotelName: 'Intercontinental', //string  
  location: 30, //number  
  numberBedRooms: 1, //number  
  rate: 1, //number  
  state: true, //boolean  
  wifi: false, //boolean  
  pool: false, //boolean  
  restaurant: false, //boolean  
  imgURL: 'https://images.unsplash.com/photo-1566071683285-e3558907b1e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80', //string  
  details: 'The best rooms in the city',//string
};

const formValidations = {
  hotelName: [(value) => value.length >= 1, 'Field Required'],
  numberBedRooms: [(value) => value.length >= 1, 'Field Required'],
  rate: [(value) => value.length >= 1, 'Field Required'],
  imgURL: [(value) => value.length >= 1, 'Field Required'],
  details: [(value) => value.length >= 1, 'Field Required'],
};

export const NoteView = () => {
  const dispatch = useDispatch();
  const { mode } = useContext(ColorModeContext);
  const { setNotify } = useContext(TravelAgencyContext);

  const {
    /* Fields */
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
    isFormValid,
    /* HelperText */
    hotelNameValid,
    numberBedRoomsValid,
    rateValid,
    imgURLValid,
    detailsValid,
  } = useForm(fields, formValidations);

  const [formSubmited, setformSubmited] = useState(false);

  const colorMode = `${mode === 'dark' ? 'secondary' : 'primary'}`;

  const saveGuestData = (e) => {

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
                error={!!hotelNameValid && formSubmited}
                helperText={hotelNameValid}
                required
                inputProps={{
                  maxLength: 40,
                  minLength: 2,
                }}
              />
            </FormControl>
          </Grid>

          <Grid item>
            {/* <CityTexfield admin /> */}
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
                error={!!numberBedRoomsValid && formSubmited}
                helperText={numberBedRoomsValid}
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
                error={!!rateValid && formSubmited}
                helperText={rateValid}
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
                error={!!imgURLValid && formSubmited}
                helperText={imgURLValid}
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
                error={!!detailsValid && formSubmited}
                helperText={detailsValid}
                required
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          onClick={saveGuestData}
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