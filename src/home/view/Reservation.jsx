import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { useForm } from '../../hooks';
import { updateUserData } from '../../store/home/thunks';
import { setShowBackdrop } from '../../store/home/homeSlice';
import { Card, CardContent, Typography, TextField, Grid, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Select, MenuItem, InputLabel, Box, CardActions, Button } from '@mui/material';

export const Reservation = ({ fields }) => {
  const dispatch = useDispatch();
  const { mode } = useContext(ColorModeContext);
  const { setNotify } = useContext(TravelAgencyContext);
  const { displayName, email, uid } = fields;
  const [formSubmited, setformSubmited] = useState(false);

  const colorMode = `${mode === 'dark' ? 'secondary' : 'primary'}`;

  const formValidations = {
    document_number: [(value) => value.length >= 1, 'Field Required'],
    phone: [(value) => value.length >= 1, 'Field Required'],
    name_contact: [(value) => value.length >= 1, 'Field Required'],
    phone_contact: [(value) => value.length >= 1, 'Field Required'],
  };

  const {
    birthdate,
    gender,
    type_document,
    document_number,
    phone,
    name_contact,
    phone_contact,
    onInputChange,
    isFormValid,
    document_numberValid,
    phoneValid,
    name_contactValid,
    phone_contactValid,
    formState,
  } = useForm(fields, formValidations);


  const handleUpdateUserData = async (uid, formData) => {
    dispatch(setShowBackdrop(true));
    const result = await dispatch(updateUserData(uid, formData));
    if (result.ok) {
      dispatch(setShowBackdrop(false));
      setNotify('success', result.message);
    } else {
      dispatch(setShowBackdrop(false));
      setNotify('error', result.errorMessage);
    }
  };

  const updateInfoUser = (e) => {
    e.preventDefault();
    setformSubmited(true);
    if (!isFormValid) return setNotify('error', 'Incorrect or empty fields, please validate again.');
    handleUpdateUserData(uid, formState);
  }

  return (
    <Card>
      <Box sx={{
        bgcolor: `${mode === 'dark' ? 'secondary.main' : 'primary.main'}`,
        color: "#FFF",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography variant="button" p={1}>
          Account information
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
                value={displayName}
                variant="outlined"
                required
                inputProps={{
                  readOnly: true
                }}
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl xs={12} sm={6} onChange={onInputChange} fullWidth>
              <TextField
                color={colorMode}
                variant="outlined"
                label="Email"
                type="email"
                value={email}
                required
                inputProps={{
                  readOnly: true
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
            >
              <InputLabel color={colorMode} >Type of Document</InputLabel>
              <Select
                color={colorMode}
                name={"type_document"}
                value={type_document}
                onChange={onInputChange}
                label="Type of Document"
              >
                <MenuItem value={'C.C'}>C.C</MenuItem>
                <MenuItem value={'Passport'}>Passport</MenuItem>
                <MenuItem value={'C.E'}>C.E</MenuItem>
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
                label="Phone"
                type="number"
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
          onClick={updateInfoUser}
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