import React, { useMemo, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { ColorModeContext } from './ColorModeContext';

export const ColorModeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [setMode]
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: '#001e3c'
                    },
                    secondary: {
                        main: '#6DB3EC',
                    },
                },
            }),
        [mode]
    );

    const main = {
        colorMode,
        theme,
        mode
    };
    return (
        <ColorModeContext.Provider value={main}>
            {children}
        </ColorModeContext.Provider >
    )
}