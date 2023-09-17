import { useContext, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { HomeLayout } from '../layout/HomeLayout'
import { HotelComponent, LandingPage } from '../view'
import { ColorModeContext } from '../../context'
import { Box } from '@mui/material'

export const HomePage = () => {
  const { mode } = useContext(ColorModeContext);
  const { resHotels } = useSelector(store => store.home);
  const scrollTargetRef = useRef(null);

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
          <HotelComponent data={resHotels} />
        )}
      </Box>
    </HomeLayout >
  )
}
