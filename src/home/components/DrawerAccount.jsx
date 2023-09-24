import { useSelector } from 'react-redux';
import { AccountComponent } from '../view';
import { Box, SwipeableDrawer, Toolbar } from '@mui/material';

export const DrawerAccount = ({ stateDrawer, handleDrawer }) => {
    const { uid,
        displayName,
        email,
        birthdate,
        gender,
        type_document,
        document_number,
        phone,
        name_contact,
        phone_contact,
    } = useSelector(store => store.auth);

    const initFields = {
        uid,
        displayName,
        email,
        birthdate: birthdate || '2000-01-01',
        gender: gender || 'other',
        type_document: type_document || 'C.C',
        document_number: document_number || '',
        phone: phone || '',
        name_contact: name_contact || '',
        phone_contact: phone_contact || '',
    };

    return (
        <SwipeableDrawer
            open={stateDrawer}
            anchor={'right'}
            onClose={() => handleDrawer(false)}
            onOpen={() => handleDrawer(true)}
        >
            <Box sx={{
                width: { xs: 300, md: 500 }
            }}>
                <Toolbar />
                <AccountComponent handleDrawer={handleDrawer} fields={initFields} />
            </Box>
        </SwipeableDrawer>
    );
}
