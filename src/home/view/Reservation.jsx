import { useContext } from 'react';
import { Card, CardContent, Typography, TextField, Grid, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, Select, MenuItem, InputLabel, Box } from '@mui/material';
import { ColorModeContext } from '../../context';

export const Reservation = () => {
  const { mode } = useContext(ColorModeContext);
  const colorMode = `${mode === 'dark' ? 'secondary' : 'primary'}`;

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
            <FormControl xs={12} sm={6} fullWidth>
              <TextField
                color={colorMode}
                label="Name"
                variant="outlined"
                required
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl xs={12} sm={6} fullWidth>
              <TextField
                color={colorMode}
                label="Birthdate"
                type="date"
                variant="outlined"
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
              required
            >
              <FormLabel color={colorMode} id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio color={colorMode} />} label="Female" />
                <FormControlLabel value="male" control={<Radio color={colorMode} />} label="Male" />
                <FormControlLabel value="other" control={<Radio color={colorMode} />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl item xs={12} sm={6} fullWidth required>
              <InputLabel color={colorMode} id="type-document-label">Type of Document</InputLabel>
              <Select
                color={colorMode}
                labelId="type-document-label"
                id="type-document"
                value={10}
                // onChange={handleChange}
                label="Type of Document"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl >
          </Grid>
          <Grid item>
            <FormControl xs={12} sm={6} fullWidth>
              <TextField
                color={colorMode}
                label="Document Number"
                variant="outlined"
                type='number'
                required
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl xs={12} sm={6} fullWidth>
              <TextField
                color={colorMode}
                label="Email"
                variant="outlined"
                required
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl xs={12} sm={6} fullWidth>
              <TextField
                color={colorMode}
                label="Phone"
                variant="outlined"
                required
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
            <FormControl xs={12} sm={6} fullWidth>
              <TextField
                color={colorMode}
                label="Name emergency contact"
                variant="outlined"
                required
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl xs={12} sm={6} fullWidth>
              <TextField
                color={colorMode}
                label="Phone emergency contact"
                variant="outlined"
                required
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
