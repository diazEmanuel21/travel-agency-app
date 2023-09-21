import { useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material'
/* ICONS */
import { Google } from '@mui/icons-material'
import { ColorModeContext } from "../../context";

const formData = {
    email: '',
    password: '',
}

export const LoginPage = () => {
    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector(state => state.auth);
    const { email, password, onInputChange } = useForm(formData);
    const { mode } = useContext(ColorModeContext);
    const isAuthenticateding = useMemo(() => status === 'cheking', [status]);

    const colorMode = `${mode === 'dark' ? 'secondary' : 'primary'}`;


    const onSubmit = (e) => {
        e.preventDefault();
        //Val => ok form
        /* dispatch(chekingAuthentication(email, password)); */
        dispatch(startLoginWithEmailPassword({ email, password }));
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit}
                className='animate__animated animate__fadeIn animate__faster'
            >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            color={colorMode}
                            label="Email"
                            type="email"
                            placeholder="email@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            color={colorMode}
                            label="Password"
                            type="password"
                            placeholder="password"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid
                        container
                        spacing={2}
                        sx={{ mb: 2, mt: 1 }}
                    >
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticateding}
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticateding}
                                onClick={onGoogleSignIn}
                                variant="contained"
                                color="primary"
                                fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            display={!!errorMessage ? '' : 'none'}
                        >
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>

                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                    >
                        <Link component={RouterLink} color='inherit' to="/auth/register">Create an account</Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}