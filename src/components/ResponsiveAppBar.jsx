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
    Tooltip
} from '@mui/material';
/* ICONS */
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LoginIcon from '@mui/icons-material/Login';
import DiamondIcon from '@mui/icons-material/Diamond';

const settings = ['Login', 'Reserves', 'Favorites'];

export const ResponsiveAppBar = ({ handleDrawer }) => {
    const navigate = useNavigate();
    const { mode } = useContext(ColorModeContext);
    const { status } = useSelector(store => store.auth);

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const showOption = (option) => {
        setAnchorElUser(null);
        if (option === 'Login') {
            const route = status === 'authenticated' ? 'admin' : 'auth';
            navigate(`/${route}`);
            return;
        };
        if (option === 'Reserves') return handleDrawer(true);
        if (option === 'Favorites') return;
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
                            padding: '8px',
                            bgcolor: `${mode === 'dark' ? 'primary.main' : 'secondary.main'}`,
                            overflow: 'hidden'
                        }}>
                            <IconButton
                                size='large'
                                color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                                onClick={handleOpenUserMenu}
                            >
                                <LoginIcon />
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
            </Toolbar>
        </AppBar>
    );
}