import { useSelector } from 'react-redux';
import { BedRoomsCard } from '../components';
import { Box, Grid } from '@mui/material';

export const Rooms = () => {
  const { hotelRooms } = useSelector(store => store.home);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box sx={
        {
          display: 'flex',
          flex: '1',
          minHeight: '77vh',
        }
      }>
        {hotelRooms.length > 0 && (
          <Grid container sx={{ justifyContent: 'center' }}>
            {hotelRooms.map((bedRoom, index) => (
              <BedRoomsCard
                key={bedRoom.roomID}
                data={bedRoom}
                index={index}
              />
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}
