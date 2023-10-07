import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const getDateNow = (isDate) => {
  debugger;
  const currentDate = new Date();

  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const year = currentDate.getFullYear().toString();

  const parseDay = parseInt(day);
  const endDay = (isDate === 'end' ? parseDay + 1 : day);

  const formatDate = `${month} ${endDay.toString()} ${year}`;
  return formatDate;
};

export const FilterComponent = () => {
  const initDateFrom = getDateNow('start');
  const initDateTo = getDateNow('end');

  const [dataForm, setDataForm] = useState({
    dateFrom: dayjs(initDateFrom),
    dateTo: dayjs(initDateTo),
  });


  useEffect(() => {
    const checkIn = dataForm.dateFrom;
    const checkOut = dataForm.dateTo;
    const duration = checkOut.diff(checkIn, 'day');

    localStorage.setItem('stay_days', duration)
    localStorage.setItem('entry_date', checkIn)
    localStorage.setItem('departure_date', checkOut)
  }, [dataForm]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DatePicker', 'DatePicker']}
        sx={{
          width: '100%',
          marginBottom: '0.5em',
          justifyContent: 'space-between'
        }}>

        <DatePicker
          sx={{ display: 'flex', flex: 1 }}
          disablePast
          label='Check-in'
          value={dataForm.dateFrom}
          onChange={(newValue) => {
            setDataForm({ ...dataForm, dateFrom: newValue });
          }}
        />

        <DatePicker
          sx={{ display: 'flex', flex: 1 }}
          label='Check-out'
          minDate={dataForm.dateFrom}
          value={dataForm.dateTo}
          onChange={(newValue) => {
            setDataForm({ ...dataForm, dateTo: newValue });
          }}
        />

      </DemoContainer>
    </LocalizationProvider>
  );
}
