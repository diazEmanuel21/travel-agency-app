import { useState } from 'react';
import { locationData } from '../../data';
import {
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Collapse,
  ListItem,
} from '@mui/material';
/* ICONS */
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import GroupsIcon from '@mui/icons-material/Groups';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const formatDate = value => {
  const dateString = value;
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = dateObject.toLocaleString('default', { month: 'short' });
  const year = dateObject.getFullYear();
  const formattedDateString = `${day} ${month} ${year}`;

  return formattedDateString;
};


export const ReservesComponent = ({ reserve }) => {
  const [open, setOpen] = useState(false);

  const entrydate = formatDate(reserve.entry_date);
  const enddate = formatDate(reserve.departure_date);
  const destination_city = locationData.filter((location) => location.id === reserve.destination_city)[0];

  const listItem = [
    {
      id: 'roomID',
      title: 'Room',
      description: reserve.bedrooms_id,
      icon: <AirlineSeatFlatIcon />,
    },
    {
      id: 'location',
      title: 'Destination city',
      description: destination_city.city,
      icon: <FmdGoodIcon />,
    },
    {
      id: 'people',
      title: 'People',
      description: reserve.amount_people,
      icon: <GroupsIcon />,
    },
    {
      id: 'nights',
      title: 'Nights',
      description: reserve.stay_days,
      icon: <BedtimeIcon />,
    },
    {
      id: 'price',
      title: 'Total price with tax included',
      description: reserve.price_booking,
      icon: <MonetizationOnIcon />,
    }
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <EventAvailableIcon />
        </ListItemIcon>
        <ListItemText primary={reserve.hotel_name} secondary={`From ${entrydate} - to ${enddate}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {listItem.map((item) => (
            <ListItem key={item.id} sx={{ pl: 4 }}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} secondary={item.description} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
