import React, { useContext, useState } from 'react';
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
    Avatar
} from '@mui/material';
/* ICONS */
import LoginIcon from '@mui/icons-material/Login';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DiamondIcon from '@mui/icons-material/Diamond';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'

export const ResponsiveAppBar = ({ handleDrawerReserve, handleDrawerFavorite, handleDrawerAccount, module: module_call }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mode } = useContext(ColorModeContext);
    const { status, rol, photoURL } = useSelector(store => store.auth);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const settingsAuth = status === 'authenticated' ? ['Logout', 'Account', 'Reserves', 'Favorites'] : ['Login'];
    const settings = rol === 'admin' ? ['Logout', 'Hotel manager'] : settingsAuth;

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const onLogout = () => {
        dispatch(startLogout());
    }

    const showOption = (option) => {
        setAnchorElUser(null);
        if (option === 'Account') return handleDrawerAccount(true);

        if (option === 'Logout') return onLogout();

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
                                                        {setting === 'Hotel manager' && (<AccountCircleIcon fontSize="small" />)}
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

                {
                    module_call === 'admin-manager' && (
                        <Box sx={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'end',
                            pr: 1,
                        }}>
                            <IconButton
                                sx={{
                                    backgroundColor: `${mode === 'dark' ? 'primary.main' : 'secondary.main'}`, 
                                    color: '#fff'
                                }}
                                size='large'
                                // onClick={}
                            >
                                <MenuOutlined />
                            </IconButton>
                        </Box>
                    )
                }

            </Toolbar>
        </AppBar>
    );
}