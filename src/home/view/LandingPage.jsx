import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ColorModeContext, TravelAgencyContext } from '../../context'
import { dataHotels } from '../../data/dataHotels'
import { setDestination, setResHotels } from '../../store/home/homeSlice'
import { Card, CardContent, Grid, Button } from '@mui/material'
import { CityTexfield, CounterClients, FilterComponent } from '../components'

export const LandingPage = () => {
    const dispatch = useDispatch();
    const { destination_city } = useSelector(store => store.home);
    const { mode } = useContext(ColorModeContext);
    const { setNotify } = useContext(TravelAgencyContext);

    useEffect(() => {
        return () => {
            dispatch(setDestination(''));
        }
    }, []);

    const searchHotels = () => {
        /* Data nights */
        const filterHotel = dataHotels.filter((hotel) => hotel.location === destination_city);
        if (filterHotel.length < 1) return setNotify('warning', 'No results found');

        dispatch(setResHotels(filterHotel));
    }

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
                            onClick={searchHotels}
                            variant="contained"
                            color={`${mode === 'dark' ? 'secondary' : 'primary'}`}
                            disabled={destination_city === ""}
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
