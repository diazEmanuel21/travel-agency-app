import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Typography, TextField, Grid, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Select, MenuItem, InputLabel, Box, CardActions, Button } from '@mui/material';
import { setEnabledBtnSaveReserve, setDataGuest, setBooking, getHotels } from '../../store/home/homeSlice';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { useForm } from '../../hooks';

const fields = {
  name_user: '',
  birthdate: '',
  gender: '',
  type_document: 0,
  document_number: '',
  email: '',
  phone: '',
  name_contact: '',
  phone_contact: '',
};

const formValidations = {
  name_user: [(value) => value.length >= 1, 'Field Required'],
  birthdate: [(value) => value.length >= 1, 'Field Required'],
  // gender: [(value) => value === '', 'Field Required'],
  // type_document: [(value) => value.length >= 1, 'Field Required'],
  document_number: [(value) => value.length >= 1, 'Field Required'],
  email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
  phone: [(value) => value.length >= 1, 'Field Required'],
  name_contact: [(value) => value.length >= 1, 'Field Required'],
  phone_contact: [(value) => value.length >= 1, 'Field Required'],
};

export const Reservation = () => {
  const dispatch = useDispatch();
  const { mode } = useContext(ColorModeContext);
  const { setNotify } = useContext(TravelAgencyContext);
  const { hotels, enabledBtnSaveReserve, bedRoomSelected, dataGuest, destination_city, hotelSelected } = useSelector(store => store.home);
  const [formSubmited, setformSubmited] = useState(false);

  const colorMode = `${mode === 'dark' ? 'secondary' : 'primary'}`;

  const {
    /* Fields */
    name_user,
    birthdate,
    gender,
    type_document,
    document_number,
    email,
    phone,
    name_contact,
    phone_contact,
    /* Validations */
    onInputChange,
    formState,
    isFormValid,
    /* HelperText */
    name_userValid,
    birthdateValid,
    // genderValid,
    // type_documentValid,
    document_numberValid,
    emailValid,
    phoneValid,
    name_contactValid,
    phone_contactValid,
  } = useForm(fields, formValidations);


  useEffect(() => {
    dispatch(setDataGuest(formState));
  }, [formState])

  const updateRoomState = (roomId) => {
    const updatedHotels = hotels.map((hotel) => {
      const updatedRooms = hotel.rooms.map((room) => {
        if (room.roomID === roomId) {
          // Si el roomID es igual a 101, cambia el state a false
          return {
            ...room,
            state: false,
          };
        } else {
          return room;
        }
      });

      return {
        ...hotel,
        rooms: updatedRooms,
      };
    });

    dispatch(getHotels(updatedHotels));
  }

  const saveGuestData = (e) => {
    e.preventDefault();
    setformSubmited(true);
    if (!isFormValid) return setNotify('info', 'Incorrect or empty fields, please check the form and try again.');
    const booking = {
      id: `${hotelSelected.id}${bedRoomSelected.roomID}`,
      bedrooms_id: bedRoomSelected.roomID,
      user_id: dataGuest.document_number,
      entry_date: localStorage.getItem('entry_date'),
      amount_people: localStorage.getItem('amount_people'),
      departure_date: localStorage.getItem('departure_date'),
      destination_city,
      price_booking: localStorage.getItem('price_booking'),
    };
    dispatch(setBooking(booking));

    dispatch(setEnabledBtnSaveReserve(true));
    setNotify('success', 'Correct! You are one step away from finishing the reservation.');

    updateRoomState(booking.bedrooms_id);
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
          Guest information
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
                label="Name"
                name="name_user"
                value={name_user}
                variant="outlined"
                error={!!name_userValid && formSubmited}
                helperText={name_userValid}
                required
                inputProps={{
                  maxLength: 40,
                  minLength: 2,
                }}
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl
              xs={12}
              sm={6}
              fullWidth
            >
              <TextField
                color={colorMode}
                label="Birthdate"
                type="date"
                variant="outlined"
                name="birthdate"
                value={birthdate}
                onChange={onInputChange}
                error={!!birthdateValid && formSubmited}
                helperText={birthdateValid}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl
              xs={12} sm={6}
              fullWidth
              // error={!!genderValid && formSubmited}
              // helperText={genderValid}
              value={gender}
              required
            >
              <FormLabel
                color={colorMode}
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                name="gender"
                aria-required
                onChange={onInputChange}
              >
                <FormControlLabel value="female" control={<Radio color={colorMode} />} label="Female" />
                <FormControlLabel value="male" control={<Radio color={colorMode} />} label="Male" />
                <FormControlLabel value="other" control={<Radio color={colorMode} />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl
              item
              xs={12}
              sm={6}
              fullWidth
              required
            // error={!!type_documentValid && formSubmited}
            // helperText={type_documentValid}
            >
              <InputLabel color={colorMode} >Type of Document</InputLabel>
              <Select
                color={colorMode}
                name={"type_document"}
                value={type_document}
                onChange={onInputChange}
                label="Type of Document"
              >
                <MenuItem value={0}>C.C</MenuItem>
                <MenuItem value={1}>Passport</MenuItem>
                <MenuItem value={2}>C.E</MenuItem>
              </Select>
            </FormControl >
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
                label="Document Number"
                variant="outlined"
                name={"document_number"}
                value={document_number}
                type='number'
                error={!!document_numberValid && formSubmited}
                helperText={document_numberValid}
                required
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl xs={12} sm={6} onChange={onInputChange} fullWidth>
              <TextField
                color={colorMode}
                variant="outlined"
                label="Email"
                name="email"
                type="email"
                value={email}
                error={!!emailValid && formSubmited}
                helperText={emailValid}
                required
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl xs={12} sm={6} onChange={onInputChange} fullWidth>
              <TextField
                color={colorMode}
                label="Phone"
                variant="outlined"
                required
                name="phone"
                error={!!phoneValid && formSubmited}
                helperText={phoneValid}
                value={phone}
              />
            </FormControl>
          </Grid>

          <Box sx={{
            bgcolor: `${mode === 'dark' ? '#12151C' : '#001e3c'}`,
            color: "#FFF",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2
          }}>
            <Typography variant="button" p={0.5}>
              Emergency contact
            </Typography>
          </Box>

          <Grid item>
            <FormControl xs={12} sm={6} onChange={onInputChange} fullWidth>
              <TextField
                color={colorMode}
                label="Name emergency contact"
                variant="outlined"
                name="name_contact"
                value={name_contact}
                error={!!name_contactValid && formSubmited}
                helperText={name_contactValid}
                required
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl xs={12} sm={6} onChange={onInputChange} fullWidth>
              <TextField
                color={colorMode}
                label="Phone emergency contact"
                variant="outlined"
                name="phone_contact"
                value={phone_contact}
                type="number"
                error={!!phone_contactValid && formSubmited}
                helperText={phone_contactValid}
                required
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          disabled={enabledBtnSaveReserve}
          onClick={saveGuestData}
          variant="contained"
          color={colorMode}
          fullWidth
        >
          Reserve
        </Button>
      </CardActions>
    </Card>
  );
};