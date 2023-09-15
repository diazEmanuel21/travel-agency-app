import { Box } from '@mui/material'
import { HomeLayout } from '../layout/HomeLayout'
import { HotelComponent, LandingPage } from '../view'
import { useContext } from 'react'
import { ColorModeContext } from '../../context'
import { dataHotels } from '../../data/dataHotels'

export const HomePage = () => {
  const { mode } = useContext(ColorModeContext);
  const data = dataHotels ?? [];

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
        sx={{
          display: 'flex',
          flex: 1,
          msOverflowX: 'hidden',
          p: 1,
          backgroundColor: `${mode === 'dark' ? 'darkslategrey' : 'lightslategrey'}`,
        }}
      >
        {data.length > 0 && (
          <HotelComponent data={data} />
        )}
      </Box>
    </HomeLayout >
  )
}
