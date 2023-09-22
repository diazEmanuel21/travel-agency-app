import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeLayout } from '../layout/HomeLayout';
import { getHotels } from '../../store/home/homeSlice';
import { HotelComponent, LandingPage } from '../view';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { dataHotels } from '../../data/dataHotels';
import { Box, Grid } from '@mui/material';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { mode } = useContext(ColorModeContext);
  const { setNotify } = useContext(TravelAgencyContext);
  const { resHotels, showHotels, showNotifyReserve, showBackdrop } = useSelector(store => store.home);
  const scrollTargetRef = useRef(null);

  useEffect(() => {
    dispatch(getHotels(dataHotels));
  }, []);

  useEffect(() => {
    if (showNotifyReserve) return setNotify('success', 'The reservation has been created successfully.');
  }, [showNotifyReserve])

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
          padding: '',
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
      {
        showHotels && (
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
            {resHotels.length > 0 && (
              <HotelComponent />
            )}
          </Grid>
        )
      }
    </HomeLayout >
  )
}
