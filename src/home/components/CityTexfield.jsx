import { useDispatch } from 'react-redux';
import { locationData } from '../../data';
import { setDestination } from '../../store/home/homeSlice';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled, lighten, darken } from '@mui/system';
import { setInitialDestination } from '../../store/admin';

const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor:
        theme.palette.mode === 'light'
            ? lighten(theme.palette.primary.light, 0.85)
            : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled('ul')({
    padding: 0,
});

export const CityTexfield = ({ admin = false }) => {
    const dispatch = useDispatch();
    const options = locationData.map((option) => {
        const firstLetter = option.city[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    const destinationSet = admin ? setInitialDestination : setDestination;
    const labelField = admin ? 'Location' : 'Destination city';

    return (
        <Autocomplete
            id="locationData"
            onChange={(event, newValue) => {
                dispatch(destinationSet(newValue === null ? '' : newValue.id));
            }}
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.city}
            fullWidth
            sx={{ marginBottom: '0.5em' }}
            renderInput={(params) => <TextField {...params} label={labelField} />}
            renderGroup={(params) => (
                <li key={params.key}>
                    <GroupHeader>{params.group}</GroupHeader>
                    <GroupItems>{params.children}</GroupItems>
                </li>
            )}
        />
    );
}