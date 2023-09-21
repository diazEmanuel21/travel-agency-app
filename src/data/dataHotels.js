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
                "hotelID": 1,
                "roomType": "Double Room",
                "baseCost": 150000,
                "taxes": 19,
                "rateRoom": 1,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "Ocean View",
                "typeBed": "King",
                "amountPeople": 1,
                "state": false,
                "roomDetails": {
                    "floorOrLevel": "Floor 2",
                    "views": "Ocean View",
                    "orientation": "North Orientation",
                    "distanceToAmenities": "Close to the restaurant and pool",
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
                "hotelID": 2,
                "roomType": "Family Suite",
                "baseCost": 300000,
                "taxes": 19,
                "rateRoom": 5,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "Ocean View",
                "typeBed": "King",
                "amountPeople": 4,
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 4",
                    "views": "Ocean View",
                    "orientation": "West Orientation",
                    "distanceToAmenities": "Close to the restaurant and pool",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            },
            {
                "id": 202,
                "hotelID": 2,
                "roomType": "Double Room",
                "baseCost": 180000,
                "taxes": 19,
                "rateRoom": 4,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "City View",
                "typeBed": "King",
                "amountPeople": 1,
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 2",
                    "views": "City View",
                    "orientation": "North Orientation",
                    "distanceToAmenities": "Close to the gym",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Possible noise due to proximity to the street"
                }
            },
            {
                "id": 203,
                "hotelID": 2,
                "roomType": "Single Room",
                "baseCost": 120000,
                "taxes": 19,
                "rateRoom": 3,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "Garden View",
                "typeBed": "King",
                "amountPeople": 2,
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 3",
                    "views": "Garden View",
                    "orientation": "East Orientation",
                    "distanceToAmenities": "Close to the restaurant and pool",
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
                "hotelID": 3,
                "roomType": "Executive Suite",
                "baseCost": 280000,
                "taxes": 19,
                "rateRoom": 5,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "Pool View",
                "typeBed": "King",
                "amountPeople": 4,
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 5",
                    "views": "Pool View",
                    "orientation": "South Orientation",
                    "distanceToAmenities": "Close to the gym and pool",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            },
            {
                "id": 302,
                "hotelID": 3,
                "roomType": "Double Room",
                "baseCost": 170000,
                "taxes": 19,
                "rateRoom": 3,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "City View",
                "typeBed": "Queen",
                "amountPeople": 2,
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 2",
                    "views": "City View",
                    "orientation": "North Orientation",
                    "distanceToAmenities": "Close to the restaurant and pool",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Possible noise due to proximity to the street"
                }
            },
            {
                "id": 303,
                "hotelID": 3,
                "roomType": "Single Room",
                "baseCost": 90000,
                "taxes": 19,
                "roomLocation": "Garden View",
                "typeBed": "Queen",
                "amountPeople": 4,
                "rateRoom": 5,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 1",
                    "views": "Garden View",
                    "orientation": "East Orientation",
                    "distanceToAmenities": "Close to the restaurant and pool",
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
                "hotelID": 4,
                "roomType": "Deluxe Double Room",
                "baseCost": 220000,
                "taxes": 19,
                "rateRoom": 4,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "City View",
                "typeBed": "Queen",
                "amountPeople": 3,
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 3",
                    "views": "City View",
                    "orientation": "East Orientation",
                    "distanceToAmenities": "Close to the lobby and restaurant",
                    "accessibility": "Not accessible for people with reduced mobility",
                    "noise": "Moderate noise level"
                }
            },
            {
                "id": 403,
                "hotelID": 4,
                "roomType": "Standard Room",
                "baseCost": 180000,
                "taxes": 19,
                "rateRoom": 3,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "Mountain View",
                "typeBed": "Twin",
                "amountPeople": 2,
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 2",
                    "views": "Mountain View",
                    "orientation": "West Orientation",
                    "distanceToAmenities": "Close to the hiking trails",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            },
            {
                "id": 404,
                "hotelID": 4,
                "roomType": "Family Suite",
                "baseCost": 350000,
                "taxes": 19,
                "rateRoom": 5,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "Garden View",
                "typeBed": "King",
                "amountPeople": 3,
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 4",
                    "views": "Garden View",
                    "orientation": "North Orientation",
                    "distanceToAmenities": "Close to the playground and garden",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            },
            {
                "id": 405,
                "hotelID": 4,
                "roomType": "Honeymoon Suite",
                "baseCost": 400000,
                "taxes": 19,
                "rateRoom": 5,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "Beachfront",
                "typeBed": "Queen",
                "amountPeople": 3,
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 6",
                    "views": "Beachfront",
                    "orientation": "South Orientation",
                    "distanceToAmenities": "On the beach",
                    "accessibility": "Not accessible for people with reduced mobility",
                    "noise": "Ocean sounds"
                }
            },
            {
                "id": 406,
                "hotelID": 4,
                "roomType": "Standard Double Room",
                "baseCost": 200000,
                "taxes": 19,
                "rateRoom": 4,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "City View",
                "typeBed": "Double",
                "amountPeople": 3,
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 2",
                    "views": "City View",
                    "orientation": "East Orientation",
                    "distanceToAmenities": "Close to the lobby and restaurant",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Moderate noise level"
                }
            },
            {
                "id": 407,
                "hotelID": 4,
                "roomType": "Junior Suite",
                "baseCost": 280000,
                "taxes": 19,
                "rateRoom": 5,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "Mountain View",
                "typeBed": "King",
                "amountPeople": 3,
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 4",
                    "views": "Mountain View",
                    "orientation": "West Orientation",
                    "distanceToAmenities": "Close to the hiking trails",
                    "accessibility": "Not accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            },
            {
                "id": 408,
                "hotelID": 4,
                "roomType": "Economy Room",
                "baseCost": 150000,
                "taxes": 19,
                "rateRoom": 2,
                "imageRoomURL": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "roomLocation": "Garden View",
                "typeBed": "Twin",
                "amountPeople": 3,
                "state": true,
                "roomDetails": {
                    "floorOrLevel": "Floor 1",
                    "views": "Garden View",
                    "orientation": "North Orientation",
                    "distanceToAmenities": "Close to the playground and garden",
                    "accessibility": "Accessible for people with reduced mobility",
                    "noise": "Quiet area"
                }
            }
        ]

    }
];
