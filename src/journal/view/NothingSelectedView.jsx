import { StarOutline } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: 'calc(100vh - 110px)', borderRadius: 4 }}
        >

            <Grid item xs={12}>
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid>
            <Grid item xs={12}>
                {/* <Typography color='white' variant='h5'>Selecciona o crea una nota</Typography> */}
                <>
                    <Button variant="contained" color="primary">primary</Button>
                    <Button variant="contained" color="secondary">Secondary</Button>
                    <Button variant="contained" color="success">Success</Button>
                    <Button variant="contained" color="error">Error</Button>

                    <Button variant="outlined" color="primary">primary</Button>
                    <Button variant="outlined" color="secondary">Secondary</Button>
                    <Button variant="outlined" color="success">Success</Button>
                    <Button variant="outlined" color="error">Error</Button>

                    <Button variant="text" color="primary">primary</Button>
                    <Button variant="text" color="secondary">Secondary</Button>
                    <Button variant="text" color="success">Success</Button>
                    <Button variant="text" color="error">Error</Button>
                </>
            </Grid>

        </Grid>
    )
}
