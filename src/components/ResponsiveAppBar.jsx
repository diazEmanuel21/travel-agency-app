import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
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
    Avatar
} from '@mui/material';
/* ICONS */
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LoginIcon from '@mui/icons-material/Login';
import DiamondIcon from '@mui/icons-material/Diamond';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

export const ResponsiveAppBar = ({ handleDrawerReserve, handleDrawerFavorite, module: module_call }) => {
    const navigate = useNavigate();
    const { mode } = useContext(ColorModeContext);
    const { status, rol, photoURL } = useSelector(store => store.auth);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const settingsAuth = status === 'authenticated' ? ['Account', 'Reserves', 'Favorites'] : ['Login', 'Reserves', 'Favorites'];
    const settings = rol === 'admin' ? ['Login'] : settingsAuth;

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const showOption = (option) => {
        setAnchorElUser(null);
        if (option === 'Account') return alert('Account box');

        if (option === 'Login') {
            const route = status === 'authenticated' ? 'admin' : 'auth';
            navigate(`/${route}`);
            return;
        };
        if (option === 'Reserves') return handleDrawerReserve(true);
        if (option === 'Favorites') return handleDrawerFavorite(true);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: `${mode === 'dark' ? '#000' : '#001e3c'}` }} >
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
                {
                    module_call === 'home' && (
                        <>
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
                                                        {setting === 'Account' && (<AccountCircleIcon fontSize="small" />)}
                                                        {setting === 'Login' && (<LoginIcon fontSize="small" />)}
                                                        {setting === 'Reserves' && (<EventAvailableIcon fontSize="small" />)}
                                                        {setting === 'Favorites' && (<FavoriteIcon fontSize="small" />)}
                                                    </ListItemIcon>
                                                    <Typography variant="inherit" noWrap>
                                                        {setting}
                                                    </Typography>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Box>
                                </Tooltip>
                            </Box>
                        </>
                    )
                }

                {
                    module_call === 'login' && (
                        <Box sx={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'end',
                            pr: 1,
                        }}>
                            <IconButton
                                sx={{
                                    backgroundColor: `${mode === 'dark' ? 'primary.main' : 'secondary.main'}`,
                                }}
                                size='large'
                                href='/'
                            >
                                <HomeIcon />
                            </IconButton>
                        </Box>
                    )
                }

            </Toolbar>
        </AppBar>
    );
}