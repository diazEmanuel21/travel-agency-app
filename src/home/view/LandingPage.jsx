import { useContext } from 'react'
import { Card, CardContent, Grid, Button } from '@mui/material'
import { CityTexfield, CounterClients, FilterComponent } from '../components'
import { ColorModeContext } from '../../context'

export const LandingPage = () => {
    const { mode } = useContext(ColorModeContext);

    return (
        <Grid
            container
            sx={{
                backgroundImage: `url(../../Bg-Agency-${mode === 'dark' ? 'Secondary' : 'Primary'}.svg)`,
                // backgroundImage: `url(../../Bg-Agency-Primary.svg)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundColor: `${mode === 'dark' ? 'darkslategrey' : 'lightslategrey'}`,
                display: 'flex',
                flex: '1',
                alignItems: 'end',
                padding: '0 8px 8px 8px'
            }}>
            <Grid item
                sx={{ display: 'flex', width: '100%' }}
            >
                <Card
                    sx={{
                        display: 'flex',
                        flex: 1,
                        background: `${mode === 'dark' ? 'rgba(18, 18, 18, 0.41)' : 'rgba(255, 255, 255, 0.8)'}`,
                        backdropFilter: 'blur(8.5px)',
                        WebkitBackdropFilter: 'blur(8.5px)',
                    }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                        <FilterComponent />
                        <CounterClients />
                        <CityTexfield />
                        <Button
                            variant="contained"
                            color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                            fullWidth
                        >
                            Search
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
