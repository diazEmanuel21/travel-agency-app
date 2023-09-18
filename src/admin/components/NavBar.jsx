import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth';
import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material'
/* ICONS */
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'

export const Navbar = ({handleDrawer}) => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar
            position='fixed'
        >
            <Toolbar>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <IconButton
                        onClick={handleDrawer}
                        color='inherit'
                        edge='start'
                    >
                        <MenuOutlined />
                    </IconButton>

                    <Typography variant='h6' noWrap component='div'>Diamond Agency</Typography>
                    <IconButton color='secondary'
                        onClick={onLogout}
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar >
    )
}
