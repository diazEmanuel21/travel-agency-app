import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorModeContext, TravelAgencyContext } from '../../context';
import { changeSteepRoom, setActiveRoom } from '../../store/admin';
import {
    FormControl,
    TextField,
    Button,
    Grid,
    Checkbox,
    FormControlLabel,
    Card,
    CardContent,
} from '@mui/material';

export const FormBedRooms = ({ id }) => {
    const dispatch = useDispatch();
    const { mode } = useContext(ColorModeContext);
    const { setNotify } = useContext(TravelAgencyContext);
    const { active } = useSelector(store => store.admin);
    const roomActive = active.rooms[id];
    const hotel_data = { ...roomActive };
    const data_bedRoom = {
        type_bedroom: hotel_data.type_bedroom,
        base_cost: hotel_data.base_cost,
        taxes: hotel_data.taxes,
        rate_room: hotel_data.rate_room,
        image_room_URL: hotel_data.image_room_URL,
        room_location: hotel_data.room_location,
        type_bed: hotel_data.type_bed,
        amount_people: hotel_data.amount_people,
        state: hotel_data.state,
        floor_level: hotel_data.roomDetails.floor_level,
        views: hotel_data.roomDetails.views,
        orientation: hotel_data.roomDetails.orientation,//agregar
        distance_to_amenities: hotel_data.roomDetails.distance_to_amenities,
        accessibility: hotel_data.roomDetails.accessibility,
        noise: hotel_data.roomDetails.noise,
    };

    const [formData, setFormData] = useState(data_bedRoom);

    const colorMode = mode === 'dark' ? 'secondary' : 'primary';

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { ...formData, };
        const {
            floor_level,
            views,
            orientation,
            distance_to_amenities,
            accessibility,
            noise
        } = newItem;

        const {
            type_bedroom,
            base_cost,
            taxes,
            rate_room,
            image_room_URL,
            room_location,
            type_bed,
            amount_people,
            state,
        } = newItem;

        const roomDetails = {
            floor_level,
            views,
            orientation,
            distance_to_amenities,
            accessibility,
            noise,
        };

        const room = {
            id,
            hotel_id: active.id,
            type_bedroom,
            base_cost,
            taxes,
            rate_room,
            image_room_URL,
            room_location,
            type_bed,
            amount_people,
            state,
            roomDetails: roomDetails,
        };

        dispatch(setActiveRoom(room));
        dispatch(changeSteepRoom(id + 1));
        setNotify('success', 'Add room correctly.')
    };

    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} flexDirection={'column'}>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Type Bedroom"
                                    name="type_bedroom"
                                    value={formData.type_bedroom}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Base Cost"
                                    name="base_cost"
                                    type="number"
                                    value={formData.base_cost}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Taxes"
                                    name="taxes"
                                    type="number"
                                    value={formData.taxes}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Rate room"
                                    name="rate_room"
                                    type="number"
                                    value={formData.rate_room}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Room Location"
                                    name="room_location"
                                    value={formData.room_location}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color={colorMode}
                                        checked={formData.state}
                                        onChange={handleChange}
                                        name="state"
                                    />
                                }
                                label="State"
                            />
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Floor Level"
                                    name="floor_level"
                                    value={formData.floor_level}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Views"
                                    name="views"
                                    value={formData.views}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Orientation"
                                    name="orientation"
                                    value={formData.orientation}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Distance to Amenities"
                                    name="distance_to_amenities"
                                    value={formData.distance_to_amenities}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Accessibility"
                                    name="accessibility"
                                    value={formData.accessibility}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Noise"
                                    name="noise"
                                    value={formData.noise}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Image URL"
                                    name="image_room_URL"
                                    value={formData.image_room_URL}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Amount of People"
                                    name="amount_people"
                                    type="number"
                                    value={formData.amount_people}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl xs={12} sm={6} fullWidth>
                                <TextField
                                    color={colorMode}
                                    label="Type Bed"
                                    name="type_bed"
                                    value={formData.type_bed}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Button
                                color={colorMode}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                next
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
}