import { Link as RouterLink } from "react-router-dom";
import { useContext, useState } from "react";
import { TravelAgencyContext } from '../../context';
import { Login } from './Login';
import { configApp } from '../../JS';
import {
    Card, CardActions, CardContent, Button, AppBar, Toolbar, Box,
    IconButton,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormControl,
    Link, Typography
} from '@mui/material';
/* ICONS */
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { HomeRounded } from '@mui/icons-material';


export const LoginPage = () => {
    const { setNotify } = useContext(TravelAgencyContext);
    const [showLogin, setShowLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState('');

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
                    : (<>
                        <AppBar position="sticky" color="primary">
                            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="button" color="inherit">Admin</Typography>
                                <Button variant="contained" color="secondary">
                                    <HomeRounded />
                                    <Link component={RouterLink} color='inherit' to="/home">Home</Link>
                                </Button>
                            </Toolbar>
                        </AppBar>
                        < Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '90vh',
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
                                        color="primary"
                                        onClick={verifyPassword}
                                    >
                                        send
                                    </Button>
                                </CardActions>
                            </Card>
                        </Box >
                    </>
                    )
            }
        </>
    )
}