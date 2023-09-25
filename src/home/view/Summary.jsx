import { useDispatch } from 'react-redux';
import { closetDialogBooking } from '../../store/home/homeSlice';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

export const Summary = () => {
  const dispatch = useDispatch();
  return (
    <Grid container justifyContent={'center'}>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="../../booking_card.svg"
            title="booking"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Your Booking has been Successfully Completed!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your reservation has been successfully completed.
              You will soon receive additional information in your email.
              You can also check the details and status of your reservations in the "Reservations" section.
              Thank you for choosing us and see you next time.
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => dispatch(closetDialogBooking(false))} fullWidth>Exit</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
