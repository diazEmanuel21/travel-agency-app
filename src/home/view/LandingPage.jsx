import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ColorModeContext, TravelAgencyContext } from '../../context'
import { setDestination, setResHotels, setShowHotels } from '../../store/home/homeSlice'
import { Card, CardContent, Grid, Button } from '@mui/material'
import { CityTexfield, CounterClients, FilterComponent } from '../components'

export const LandingPage = () => {
    const dispatch = useDispatch();
    const { destination_city, hotels } = useSelector(store => store.home);
    const { mode } = useContext(ColorModeContext);
    const { setNotify } = useContext(TravelAgencyContext);

    useEffect(() => {
        return () => {
            dispatch(setDestination(''));
        }
    }, []);

    const filterHotelsByRoomCapacity = (hotels, minPersons) => {
        return hotels.reduce((filteredHotels, hotel) => {
            const filteredRooms = hotel.rooms.filter((room) => room.amountPeople >= minPersons);
            if (filteredRooms.length > 0) {
                filteredHotels.push({ ...hotel, rooms: filteredRooms });
            }
            return filteredHotels;
        }, []);
    };


    const searchHotels = () => {
        const amount_people = parseInt(localStorage.getItem('amount_people'));
        const filterHotel = hotels.filter((hotel) => hotel.location === destination_city);
        if (filterHotel.length < 1) return setNotify('info', 'No results found for that date range.');

        const resFilter = filterHotelsByRoomCapacity(filterHotel, amount_people);
        if (resFilter.length < 1) return setNotify('info', 'No results found with that amount of people.');

        dispatch(setResHotels(resFilter));
        dispatch(setShowHotels(true));
    }

    return (
        <Grid item display={'flex'} flex={1}>
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
    )
}
