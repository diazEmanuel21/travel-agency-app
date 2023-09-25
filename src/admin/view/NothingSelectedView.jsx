import { Alert, Grid, Paper, Stack } from '@mui/material'

export const NothingSelectedView = () => {
    return (
        <Grid
            item
            className='animate__animated animate__fadeIn animate__faster'
            sx={{
                display: 'flex',
                flex: '1',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',

                backgroundImage: `url(../../no_data.svg)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Paper elevation={3} >
                <Stack >
                    <Alert severity="info">Select or create a new hotel</Alert>
                </Stack>
            </Paper>
        </Grid>
    )
}
