import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ColorModeContext } from '../context';
import { useCheckAuth } from '../hooks';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Container,
    Button,
    Tooltip
} from '@mui/material';

import DiamondIcon from '@mui/icons-material/Diamond';

export const ResponsiveAppBar = () => {
    const navigate = useNavigate();
    const status = useCheckAuth();

    const { mode } = useContext(ColorModeContext);

    const handleCloseNavMenu = () => {
        const route = status === 'authenticated' ? 'admin' : 'auth';
        navigate(`/${route}`,
            {
                replace: true,
            });
    };

    return (
        <AppBar
            position="static"
            sx={{ bgcolor: `${mode === 'dark' ? '#000' : '#001e3c'}` }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <DiamondIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Diamond Agency
                    </Typography>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Diamond A.
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            maxWidth: '92px',
                            height: 69,
                            flex: 1,
                            bgcolor: `${mode === 'dark' ? 'primary.main' : 'secondary.main'}`
                        }}>
                            <Tooltip title="Discover the world to suit you!">
                                <Button
                                    onClick={handleCloseNavMenu}
                                    variant='contained'
                                    color={`${mode === 'dark' ? 'primary' : 'secondary'}`}
                                >
                                    <DiamondIcon />
                                </Button>
                            </Tooltip>

                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
