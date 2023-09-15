import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled, lighten, darken } from '@mui/system';

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

export const CityTexfield = () => {
    const options = colombiaLocations.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    return (
        <Autocomplete
            id="grouped-demo"
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.title}
            fullWidth
            sx={{ marginBottom: '0.5em' }}
            renderInput={(params) => <TextField {...params} label="Destination city" />}
            renderGroup={(params) => (
                <li key={params.key}>
                    <GroupHeader>{params.group}</GroupHeader>
                    <GroupItems>{params.children}</GroupItems>
                </li>
            )}
        />
    );
}

const colombiaLocations = [
    { title: 'Amazonas - Leticia', id: 1 },
    { title: 'Antioquia - Medellín', id: 2 },
    { title: 'Arauca - Arauca', id: 3 },
    { title: 'Atlántico - Barranquilla', id: 4 },
    { title: 'Bolívar - Cartagena', id: 5 },
    { title: 'Boyacá - Tunja', id: 6 },
    { title: 'Caldas - Manizales', id: 7 },
    { title: 'Caquetá - Florencia', id: 8 },
    { title: 'Casanare - Yopal', id: 9 },
    { title: 'Cauca - Popayán', id: 10 },
    { title: 'Cesar - Valledupar', id: 11 },
    { title: 'Chocó - Quibdó', id: 12 },
    { title: 'Córdoba - Montería', id: 13 },
    { title: 'Cundinamarca - Bogotá D.C.', id: 14 },
    { title: 'Guainía - Inírida', id: 15 },
    { title: 'Guaviare - San José del Guaviare', id: 16 },
    { title: 'Huila - Neiva', id: 17 },
    { title: 'La Guajira - Riohacha', id: 18 },
    { title: 'Magdalena - Santa Marta', id: 19 },
    { title: 'Meta - Villavicencio', id: 20 },
    { title: 'Nariño - Pasto', id: 21 },
    { title: 'Norte de Santander - Cúcuta', id: 22 },
    { title: 'Putumayo - Mocoa', id: 23 },
    { title: 'Quindío - Armenia', id: 24 },
    { title: 'Risaralda - Pereira', id: 25 },
    { title: 'San Andrés y Providencia - San Andrés', id: 26 },
    { title: 'Santander - Bucaramanga', id: 27 },
    { title: 'Sucre - Sincelejo', id: 28 },
    { title: 'Tolima - Ibagué', id: 29 },
    { title: 'Valle del Cauca - Cali', id: 30 },
    { title: 'Vaupés - Mitú', id: 31 },
    { title: 'Vichada - Puerto Carreño', id: 32 },
];