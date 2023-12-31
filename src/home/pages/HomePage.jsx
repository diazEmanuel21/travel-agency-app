import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeLayout } from '../layout/HomeLayout';
import { setShowBackdrop } from '../../store/home/homeSlice';
import { HotelComponent, LandingPage } from '../view';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { startLoadingHotels } from '../../store/admin';
import { fetchReserves } from '../../store/home/thunks';
import { Grid } from '@mui/material';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { mode } = useContext(ColorModeContext);
  const { setNotify } = useContext(TravelAgencyContext);
  const { resHotels } = useSelector(store => store.home);
  const scrollTargetRef = useRef(null);

  const getReserves = async () => {
    dispatch(setShowBackdrop(true));
    const result = await dispatch(fetchReserves());
    if (!result.ok) {
      dispatch(setShowBackdrop(false));
      setNotify('error', result.errorMessage);
    }
  };

  const handleLoadingHotel = async () => {
    const result = await dispatch(startLoadingHotels());
    if (result.ok) {
      dispatch(setShowBackdrop(false));
    } else {
      dispatch(setShowBackdrop(false));
      setNotify('error', result.errorMessage);
    }
  };

  useEffect(() => {
    getReserves();
  }, []);

  useEffect(() => {
    handleLoadingHotel();
  }, []);

  useEffect(() => {
    if (resHotels.length < 1) return;
    scrollToElement();
  }, [resHotels]);

  const scrollToElement = () => {
    const targetElement = scrollTargetRef.current;

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HomeLayout module='home'>
      <Grid
        container
        sx={{
          display: 'flex',
          flex: 1,
          padding: { xs: 1, md: '8px 8px 8px 82px' },
          minHeight: '89vh',
          msOverflowX: 'hidden',
          backgroundColor: `${mode === 'dark' ? 'darkslategrey' : 'lightslategrey'}`,
          alignItems: 'end',
          backgroundImage: `url(../../Bg-Agency-${mode === 'dark' ? 'Secondary' : 'Primary'}.svg)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <LandingPage />
      </Grid>
      <Grid
        container
        ref={scrollTargetRef}
        sx={{
          display: 'flex',
          flex: 1,
          padding: { xs: 1, md: '8px 8px 8px 82px' },
          minHeight: '89vh',
          msOverflowX: 'hidden',
          backgroundColor: `${mode === 'dark' ? 'darkslategrey' : 'lightslategrey'}`,

          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <HotelComponent />
      </Grid>
    </HomeLayout >
  )
}
