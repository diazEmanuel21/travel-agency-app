import { useContext, useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid, TextField, Button, Link, Alert
} from '@mui/material'
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWhitEmailPassword } from "../../store/auth";
import { ColorModeContext } from "../../context";

const initState = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
  password: [(value) => value.length >= 6, 'El password debe de tenér más de 6 letras.'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmited, setformSubmited] = useState(false);
  const { status, errorMessage } = useSelector(state => state.auth);
  const isChekinAuthentication = useMemo(() => status === 'cheking', [status]);
  const { mode } = useContext(ColorModeContext);

  const {
    onInputChange, formState, displayName, email, password,
    isFormValid, displayNameValid, emailValid, passwordValid } = useForm(initState, formValidations);

  const colorMode = `${mode === 'dark' ? 'secondary' : 'primary'}`;


  const onSubmit = (e) => {
    e.preventDefault();
    setformSubmited(true);

    if (!isFormValid) return

    dispatch(startCreatingUserWhitEmailPassword(formState));
  }

  return (
    <AuthLayout title="Registro">
      <form
        className='animate__animated animate__fadeIn animate__faster'
        onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              color={colorMode}
              label="Name"
              type="text"
              placeholder="Emanuel Diaz"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>
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
              error={!!emailValid && formSubmited}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{ mb: 2, mt: 1 }}
          >
            <Grid item xs={12}>
              <Button
                disabled={isChekinAuthentication}
                onClick={onSubmit}
                variant="contained"
                color="primary"
                fullWidth>
                Crear cuenta
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
            <Link component={RouterLink} color='inherit' to="/auth/login">Do you already have an account?</Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
