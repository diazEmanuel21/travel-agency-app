import { useContext, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HomeLayout } from '../layout/HomeLayout'
import { getHotels } from '../../store/home/homeSlice'
import { HotelComponent, LandingPage } from '../view'
import { ColorModeContext, TravelAgencyContext } from '../../context'
import { dataHotels } from '../../data/dataHotels'
import { Backdrop, Box, CircularProgress } from '@mui/material'

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
    <HomeLayout>
      <Box
        sx={{
          display: 'flex',
          minHeight: '89vh'
        }}
      >
        <LandingPage />
      </Box>
      {
        showHotels && (
          <Box
            ref={scrollTargetRef}
            sx={{
              display: 'flex',
              flex: 1,
              msOverflowX: 'hidden',
              p: 1,
              backgroundColor: `${mode === 'dark' ? 'darkslategrey' : 'lightslategrey'}`,
            }}
          >
            {resHotels.length > 0 && (
              <HotelComponent />
            )}
          </Box>
        )
      }
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </HomeLayout >
  )
}
