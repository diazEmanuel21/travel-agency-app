import { Link as RouterLink } from "react-router-dom";
import { useMemo } from "react";
import { Google } from '@mui/icons-material'
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material'
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";

const formData = {
    email: '',
    password: '',
}

export const Login = () => {
    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector(state => state.auth);

    const { email, password, onInputChange } = useForm(formData);

    const isAuthenticateding = useMemo(() => status === 'cheking', [status]);

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
                        justifyContent="end"
                    >
                        <Link component={RouterLink} color='inherit' to="/auth/register">Crear una cuenta</Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}
