import React, { useState } from 'react';
import { TravelAgencyContext } from './TravelAgencyContext';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const TravelAgencyProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [notification, setNotification] = useState({ type: '', message: '' });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const setNotify = (type, message) => {
        const typeComing = Object.keys(type).length < 1 && true;
        const messageComing = Object.keys(message).length < 1 && true;
        if (typeComing && messageComing) return;

        setNotification({ type, message });
        setOpen(true);
    };

    const main = {
        setNotify
    };

    return (
        <TravelAgencyContext.Provider value={main}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity={notification.type} sx={{ width: '100%' }}>
                    {notification.message}
                </Alert>
            </Snackbar>
            {children}
        </TravelAgencyContext.Provider>
    );
};
