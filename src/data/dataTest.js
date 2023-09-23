export const dataHotels = [
    {
        "id": 1,
        "imgURL": 'https://images.unsplash.com/photo-1566071683285-e3558907b1e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        "hotelName": "Passarela Hotel",
        "location": 30,
        "state": true,
        "details": "Description of Hotel A",
        "rate": 2,
        "wifi": false,
        "pool": false,
        "restaurant": false,
        "rooms": [
            {
                "id": 101,
                "hotel_id": 1,
                "type_bedroom": "Double Room",
                "base_cost": 150000,
                "taxes": 19,
                "rate_room": 1,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "Ocean View",
                "type_bedroom": "King",
                "amount_people": 1,
                "state": false,
                "roomDetails": {
                    "floor_level": "Floor 2",
                    "views": "Ocean View",
                    "orientation": "North Orientation",
                    "distance_to_amenities": "Close to the restaurant and pool",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            },
        ]
    },
    {
        "id": 2,
        "imgURL": 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        "hotelName": "Queen Hotel",
        "location": 30,
        "state": true,
        "details": "Description of Hotel B",
        "rate": 3,
        "wifi": true,
        "pool": false,
        "restaurant": true,
        "rooms": [
            {
                "id": 201,
                "hotel_id": 2,
                "type_bedroom": "Family Suite",
                "base_cost": 300000,
                "taxes": 19,
                "rate_room": 5,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "Ocean View",
                "type_bedroom": "King",
                "amount_people": 4,
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 4",
                    "views": "Ocean View",
                    "orientation": "West Orientation",
                    "distance_to_amenities": "Close to the restaurant and pool",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            },
            {
                "id": 202,
                "hotel_id": 2,
                "type_bedroom": "Double Room",
                "base_cost": 180000,
                "taxes": 19,
                "rate_room": 4,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "City View",
                "type_bedroom": "King",
                "amount_people": 1,
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 2",
                    "views": "City View",
                    "orientation": "North Orientation",
                    "distance_to_amenities": "Close to the gym",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Possible noise due to proximity to the street"
                }
            },
            {
                "id": 203,
                "hotel_id": 2,
                "type_bedroom": "Single Room",
                "base_cost": 120000,
                "taxes": 19,
                "rate_room": 3,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "Garden View",
                "type_bedroom": "King",
                "amount_people": 2,
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 3",
                    "views": "Garden View",
                    "orientation": "East Orientation",
                    "distance_to_amenities": "Close to the restaurant and pool",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            }
        ]
    },
    {
        "id": 3,
        "imgURL": 'https://images.unsplash.com/photo-1578681041175-9717c16b0d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80',
        "hotelName": "Hotel El Bosque",
        "location": 4,
        "state": true,
        "details": "Description of Hotel C",
        "rate": 5,
        "wifi": true,
        "pool": true,
        "restaurant": true,
        "rooms": [
            {
                "id": 301,
                "hotel_id": 3,
                "type_bedroom": "Executive Suite",
                "base_cost": 280000,
                "taxes": 19,
                "rate_room": 5,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "Pool View",
                "type_bedroom": "King",
                "amount_people": 4,
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 5",
                    "views": "Pool View",
                    "orientation": "South Orientation",
                    "distance_to_amenities": "Close to the gym and pool",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            },
            {
                "id": 302,
                "hotel_id": 3,
                "type_bedroom": "Double Room",
                "base_cost": 170000,
                "taxes": 19,
                "rate_room": 3,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "City View",
                "type_bedroom": "Queen",
                "amount_people": 2,
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 2",
                    "views": "City View",
                    "orientation": "North Orientation",
                    "distance_to_amenities": "Close to the restaurant and pool",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Possible noise due to proximity to the street"
                }
            },
            {
                "id": 303,
                "hotel_id": 3,
                "type_bedroom": "Single Room",
                "base_cost": 90000,
                "taxes": 19,
                "room_location": "Garden View",
                "type_bedroom": "Queen",
                "amount_people": 4,
                "rate_room": 5,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 1",
                    "views": "Garden View",
                    "orientation": "East Orientation",
                    "distance_to_amenities": "Close to the restaurant and pool",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            }
        ]
    },
    {
        "id": 4,
        "imgURL": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "hotelName": "Candel Resort",
        "location": 4,
        "state": true,
        "details": "Description of Hotel C",
        "rate": 5,
        "wifi": true,
        "pool": true,
        "restaurant": true,
        "rooms": [
            {
                "id": 402,
                "hotel_id": 4,
                "type_bedroom": "Deluxe Double Room",
                "base_cost": 220000,
                "taxes": 19,
                "rate_room": 4,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "City View",
                "type_bedroom": "Queen",
                "amount_people": 3,
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 3",
                    "views": "City View",
                    "orientation": "East Orientation",
                    "distance_to_amenities": "Close to the lobby and restaurant",
                    "accessibility": "Not accessible for people with reduced mobility",
                    "noise": "Moderate noise level"
                }
            },
            {
                "id": 403,
                "hotel_id": 4,
                "type_bedroom": "Standard Room",
                "base_cost": 180000,
                "taxes": 19,
                "rate_room": 3,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "Mountain View",
                "type_bedroom": "Twin",
                "amount_people": 2,
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 2",
                    "views": "Mountain View",
                    "orientation": "West Orientation",
                    "distance_to_amenities": "Close to the hiking trails",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            },
            {
                "id": 404,
                "hotel_id": 4,
                "type_bedroom": "Family Suite",
                "base_cost": 350000,
                "taxes": 19,
                "rate_room": 5,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "Garden View",
                "type_bedroom": "King",
                "amount_people": 3,
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 4",
                    "views": "Garden View",
                    "orientation": "North Orientation",
                    "distance_to_amenities": "Close to the playground and garden",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            },
            {
                "id": 405,
                "hotel_id": 4,
                "type_bedroom": "Honeymoon Suite",
                "base_cost": 400000,
                "taxes": 19,
                "rate_room": 5,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "Beachfront",
                "type_bedroom": "Queen",
                "amount_people": 3,
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 6",
                    "views": "Beachfront",
                    "orientation": "South Orientation",
                    "distance_to_amenities": "On the beach",
                    "accessibility": "Not accessible for people with reduced mobility",
                    "noise": "Ocean sounds"
                }
            },
            {
                "id": 406,
                "hotel_id": 4,
                "type_bedroom": "Standard Double Room",
                "base_cost": 200000,
                "taxes": 19,
                "rate_room": 4,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "City View",
                "type_bedroom": "Double",
                "amount_people": 3,
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 2",
                    "views": "City View",
                    "orientation": "East Orientation",
                    "distance_to_amenities": "Close to the lobby and restaurant",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Moderate noise level"
                }
            },
            {
                "id": 407,
                "hotel_id": 4,
                "type_bedroom": "Junior Suite",
                "base_cost": 280000,
                "taxes": 19,
                "rate_room": 5,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "Mountain View",
                "type_bedroom": "King",
                "amount_people": 3,
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 4",
                    "views": "Mountain View",
                    "orientation": "West Orientation",
                    "distance_to_amenities": "Close to the hiking trails",
                    "accessibility": "Not accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            },
            {
                "id": 408,
                "hotel_id": 4,
                "type_bedroom": "Economy Room",
                "base_cost": 150000,
                "taxes": 19,
                "rate_room": 2,
                "image_room_URL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "room_location": "Garden View",
                "type_bedroom": "Twin",
                "amount_people": 3,
                "state": true,
                "roomDetails": {
                    "floor_level": "Floor 1",
                    "views": "Garden View",
                    "orientation": "North Orientation",
                    "distance_to_amenities": "Close to the playground and garden",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            }
        ]

    }
];
