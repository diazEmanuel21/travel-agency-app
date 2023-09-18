import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Card, CardActions, CardContent, Button } from '@mui/material';
import { Login } from './Login';
import { configApp } from '../../JS';
import { TravelAgencyContext } from '../../context';

export const LoginPage = () => {
    const { setNotify } = React.useContext(TravelAgencyContext);
    const [showLogin, setShowLogin] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [value, setValue] = React.useState('');

    const handlePassword = ({ target }) => {
        setValue(target.value);
    }

    const verifyPassword = () => {
        if (value !== configApp.passwordAdmin) return setNotify('error', 'Incorrect password');
        setShowLogin(true);
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <>
            {
                showLogin
                    ? (<Login />)
                    : (
                        < Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',
                            width: '100vw',
                            backgroundImage: `url(../../password.svg)`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <FormControl
                                        sx={{ m: 1, width: '25ch' }}
                                        variant="outlined"
                                    >
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            onChange={handlePassword}
                                            value={value}
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="inherit"
                                        onClick={verifyPassword}
                                    >
                                        send
                                    </Button>
                                </CardActions>
                            </Card>
                        </Box >
                    )
            }
        </>
    )
}