import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../store/auth';
import { useNavigate } from 'react-router-dom';
import { ColorModeContext } from '../context';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    IconButton,
    Tooltip,
    Avatar,
    Divider
} from '@mui/material';
/* ICONS */
import DiamondIcon from '@mui/icons-material/Diamond';
import { LogoutOutlined } from '@mui/icons-material'
import LoginIcon from '@mui/icons-material/Login';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HotelIcon from '@mui/icons-material/Hotel';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { SwitchColorMood } from './SwitchColorMood';

export const ResponsiveAppBar = ({ handleDrawerManager, handleDrawerReserve, handleDrawerFavorite, handleDrawerAccount, module: module_call }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mode } = useContext(ColorModeContext);
    const { status, rol, photoURL } = useSelector(store => store.auth);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [settings, setSettings] = useState(['Login']);


    useEffect(() => {
        if (status !== 'authenticated') {
            setSettings(['Login']);
        };

        if (rol === 'user') {
            setSettings(['Account', 'Reserves', 'Favorites', 'Logout']);
        };

        if (rol === 'admin') {
            let local_setting = ['Home', 'Hotel manager', 'Reserves', 'Hotels', 'Rooms', 'Logout'];
            setSettings(local_setting);
        };

        if (module_call === 'login') {
            setSettings(['Home']);
        };
    }, [status, rol, module_call]);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const onLogout = () => {
        dispatch(startLogout());
    }

    const showOption = (option) => {
        setAnchorElUser(null);
        if (option === 'Home') {
            navigate(`/home`);
            return;
        };

        if (option === 'Account') return handleDrawerAccount(true);

        if (option === 'Logout') return onLogout();

        if (option === 'Hotels') return handleDrawerManager();

        if (option === 'Rooms') return null;

        if (option === 'Hotel manager') {
            navigate(`/admin`);
            return;
        };

        if (option === 'Login') {
            navigate(`/auth`);
            return;
        };
        if (option === 'Reserves') return handleDrawerReserve(true);
        if (option === 'Favorites') return handleDrawerFavorite(true);
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                bgcolor: `${mode === 'dark' ? '#000' : '#001e3c'}`,
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar disableGutters sx={{ justifyContent: 'space-between', paddingLeft: '14px' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    flex: 1,
                    alignItems: 'center',
                }}>
                    <DiamondIcon sx={{ mr: 1 }} />
                    <Typography
                        variant="h6"
                        component="a"
                        href="/"
                        noWrap
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Diamond Agency
                    </Typography>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                    {settings.map((page) => (
                        <Button
                            key={page}
                            color="inherit"
                            onClick={() => showOption(page)}
                            sx={{ my: 2 }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>

                <Box sx={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'end',
                }}>
                    <Tooltip title="Open settings" placement='left'>
                        <Box sx={{
                            display: 'flex',
                            overflow: 'hidden'
                        }}>
                            <IconButton
                                size='large'
                                onClick={handleOpenUserMenu}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: `${mode === 'dark' ? 'secondary.main' : 'primary.main'}`
                                    }}
                                    alt="avatar-app-bar" src={photoURL} />
                            </IconButton>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={showOption}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={() => showOption(setting)}>
                                        <ListItemIcon>
                                            {setting === 'Home' && (<HomeIcon fontSize="small" />)}
                                            {setting === 'Account' && (<AccountCircleIcon fontSize="small" />)}
                                            {setting === 'Hotel manager' && (<AdminPanelSettingsIcon fontSize="small" />)}
                                            {setting === 'Hotels' && (<HotelIcon fontSize="small" />)}
                                            {setting === 'Rooms' && (<NightShelterIcon fontSize="small" />)}
                                            {setting === 'Login' && (<LoginIcon fontSize="small" />)}
                                            {setting === 'Reserves' && (<EventAvailableIcon fontSize="small" />)}
                                            {setting === 'Favorites' && (<FavoriteIcon fontSize="small" />)}
                                            {setting === 'Logout' && (<LogoutOutlined fontSize="small" />)}
                                        </ListItemIcon>
                                        <Typography variant="inherit" noWrap>
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                                <Divider />
                                <MenuItem sx={{ display: { xs: 'flex', md: ' none' }, justifyContent: 'center' }}>
                                    <SwitchColorMood />
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}