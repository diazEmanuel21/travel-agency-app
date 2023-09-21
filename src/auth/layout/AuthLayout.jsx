import { useContext } from 'react'
import { ColorModeContext } from '../../context'
import { HomeLayout } from '../../home/layout/HomeLayout';
import { Card, CardContent, Grid } from '@mui/material'

export const AuthLayout = ({ children }) => {
    const { mode } = useContext(ColorModeContext);

    return (
        <HomeLayout module='login'>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    minHeight: '89vh',
                    padding: 1,
                    backgroundColor: `${mode === 'dark' ? 'darkslategrey' : 'lightslategrey'}`,
                }}
            >
                <Grid
                    item
                    sx={{ padding: 1, }}
                >
                    <Card sx={{ maxWidth: 275 }}>
                        <CardContent>
                            {children}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </HomeLayout>
    )
}
