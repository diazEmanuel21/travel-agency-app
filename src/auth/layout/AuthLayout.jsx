import { Grid, Typography } from '@mui/material'
import React from 'react'

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh', padding: 4 }}
            >
                <Grid
                    item
                    className='box-shadown'
                    xs={3}
                    sx={{ width: { md: 450 }, padding: 3, borderRadius: 2 }}

                >
                    <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>

                    {children}

                </Grid>
            </Grid>
        </>
    )
}
