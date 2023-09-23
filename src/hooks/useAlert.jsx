import { useContext, useState } from 'react';
import { ColorModeContext } from '../context';
import {
    Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';

export const useAlert = ({
    title = 'Default text',
    description = 'Default description',
    onAgree = () => { }, // Función de callback por defecto vacía
}) => {
    const { mode } = useContext(ColorModeContext);
    const [state, setState] = useState(false);

    const colorMode = mode === 'dark' ? 'secondary' : 'primary';

    const handleState = value => {
        setState(value);
    };

    const handleAgree = () => {
        handleState(false); // Cierra el diálogo
        onAgree(); // Ejecuta la función de callback cuando se hace clic en "Agree"
    };

    const DialogComponent = () => (
        <Dialog
            open={state}
            onClose={() => handleState(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title.toUpperCase()}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color={colorMode} onClick={() => handleState(false)}>Disagree</Button>
                <Button color={colorMode} onClick={handleAgree} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )

    return {
        DialogComponent,
        handleState,
    }
}
