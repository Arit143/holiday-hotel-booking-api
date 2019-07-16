# holiday-hotel-booking-api
An API app to search hotels online

## Authors
Aritra Ghosh

## Installation

```
rm -rf node_modules
npm install

```

Fire up with `npm start` to start the server navigate to http://localhost:3000 to start the server in action.

## Packages

1. Express
2. Nodemon
3. Morgan
4. pm2

## Features

1. The app contains both integration and unit test cases
2. Contains request validation
3. Has appropriate error handling

## Request

```
http://54.149.213.214:3000/hotels?searchTerm=singapore&page=2&limit=20bedrooms=2&order=asc

searchTerm: string - For finding searchTerm (required)
page: number - For pagination (optional) (default: 0)
limit: number - For get results per page (default: 20)
bedrooms: number - Handle bedrooms filter (optional)
order: asc | desc - Handle sort order (optional)

```

## Response

```
{
    "message": "Standard response for successful HTTP requests.",
    "data": {
        "listings": [
            {
                "images": [
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/20eed859-ad9c-426c-98b9-ea0d57b71e3c.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/20eed859-ad9c-426c-98b9-ea0d57b71e3c.c9.jpg"
                    },
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/03e05827-387b-4448-8b33-79f5b8767ca8.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/03e05827-387b-4448-8b33-79f5b8767ca8.c9.jpg"
                    },
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/afd6a238-eb87-489a-b604-a7cc498105ff.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/afd6a238-eb87-489a-b604-a7cc498105ff.c9.jpg"
                    }
                ],
                "bedrooms": 2,
                "bathrooms": {
                    "full": 2,
                    "half": 0,
                    "toiletOnly": 0
                },
                "propertyType": "Apartment",
                "sleeps": 4,
                "petsAllowed": false,
                "averagePrice": {
                    "currencyUnits": "USD",
                    "periodType": "NIGHTLY",
                    "value": 114
                },
                "averageRating": 5,
                "reviewCount": 6,
                "detailPageUrl": "/4349249ha?adultsCount=1&childrenCount=1&noDates=true&petIncluded=0",
                "instantBookable": true,
                "listingNumber": 4349249,
                "propertyMetadata": {
                    "headline": "Home Away From Home in Our Luxurious Apt",
                    "propertyName": "Home Away From Home in Our Luxurious Apt"
                },
                "reviewBadges": [
                    {
                        "name": "Exceptional! 5/5"
                    }
                ],
                "geoCode": {
                    "latitude": 1.3922981,
                    "longitude": 103.9129534
                }
            },
            {
                "images": [
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/30da4242-af6a-4869-ad1e-a65facf33705.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/30da4242-af6a-4869-ad1e-a65facf33705.c9.jpg"
                    },
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/334a1d97-2a2f-47ff-a9cd-896f3cd56a59.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/334a1d97-2a2f-47ff-a9cd-896f3cd56a59.c9.jpg"
                    },
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/e45f49a2-229a-49a8-a996-2ba16757239b.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/e45f49a2-229a-49a8-a996-2ba16757239b.c9.jpg"
                    }
                ],
                "bedrooms": 2,
                "bathrooms": {
                    "full": 3,
                    "half": 0,
                    "toiletOnly": 0
                },
                "propertyType": "Apartment",
                "sleeps": 6,
                "petsAllowed": false,
                "averagePrice": {
                    "currencyUnits": "USD",
                    "periodType": "NIGHTLY",
                    "value": 171
                },
                "averageRating": 5,
                "reviewCount": 1,
                "detailPageUrl": "/7148221ha?adultsCount=1&childrenCount=1&noDates=true&petIncluded=0",
                "instantBookable": null,
                "listingNumber": 7148221,
                "propertyMetadata": {
                    "headline": "Great Penthouse near Train Station @Town",
                    "propertyName": "Great Penthouse near Train Station @Town"
                },
                "reviewBadges": [],
                "geoCode": {
                    "latitude": 1.31481,
                    "longitude": 103.854756
                }
            },
            {
                "images": [
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/1b682104-9c28-45b9-8286-f95a1573f36a.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/1b682104-9c28-45b9-8286-f95a1573f36a.c9.jpg"
                    },
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/0e8f19b2-f489-446f-9c85-94d00b5b0c68.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/0e8f19b2-f489-446f-9c85-94d00b5b0c68.c9.jpg"
                    },
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/d3230bb3-3bf9-4803-9171-3a5dda023e96.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/d3230bb3-3bf9-4803-9171-3a5dda023e96.c9.jpg"
                    }
                ],
                "bedrooms": 2,
                "bathrooms": {
                    "full": 2,
                    "half": 1,
                    "toiletOnly": 0
                },
                "propertyType": "Apartment",
                "sleeps": 3,
                "petsAllowed": false,
                "averagePrice": {
                    "currencyUnits": "USD",
                    "periodType": "NIGHTLY",
                    "value": 188
                },
                "averageRating": 5,
                "reviewCount": 1,
                "detailPageUrl": "/7196728ha?adultsCount=1&childrenCount=1&noDates=true&petIncluded=0",
                "instantBookable": null,
                "listingNumber": 7196728,
                "propertyMetadata": {
                    "headline": "2 Bedroom Apt Orchard/ Stevens Area #57",
                    "propertyName": "2 Bedroom Apt Orchard/ Stevens Area #57"
                },
                "reviewBadges": [],
                "geoCode": {
                    "latitude": 1.316166,
                    "longitude": 103.826941
                }
            },
            {
                "images": [
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/d9563564-b05b-4e17-be72-75db4e897b0a.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/d9563564-b05b-4e17-be72-75db4e897b0a.c9.jpg"
                    },
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/292ae066-577b-4afa-8446-4c51603ad90f.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/292ae066-577b-4afa-8446-4c51603ad90f.c9.jpg"
                    },
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/2e425514-4050-4ee0-a44e-c9bb93045b1b.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/2e425514-4050-4ee0-a44e-c9bb93045b1b.c9.jpg"
                    }
                ],
                "bedrooms": 2,
                "bathrooms": {
                    "full": 2,
                    "half": 0,
                    "toiletOnly": 0
                },
                "propertyType": "Apartment",
                "sleeps": 4,
                "petsAllowed": false,
                "averagePrice": null,
                "averageRating": null,
                "reviewCount": null,
                "detailPageUrl": "/7655644ha?adultsCount=1&childrenCount=1&noDates=true&petIncluded=0",
                "instantBookable": true,
                "listingNumber": 7655644,
                "propertyMetadata": {
                    "headline": "(3BR) Spacious & Cozy Apartment near Farrer Park Mrt!",
                    "propertyName": "(3BR) "
                },
                "reviewBadges": [],
                "geoCode": {
                    "latitude": 1.31486909,
                    "longitude": 103.86138377
                }
            },
            {
                "images": [
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/ab9211c3-7e71-4c5c-9f74-610bccec1731.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/ab9211c3-7e71-4c5c-9f74-610bccec1731.c9.jpg"
                    },
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/1b4db0e4-e2d0-4099-ac01-22bc4f21f959.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/1b4db0e4-e2d0-4099-ac01-22bc4f21f959.c9.jpg"
                    },
                    {
                        "altText": "",
                        "c6_uri": "https://odis.homeaway.com/odis/listing/e8c11288-8a61-4d64-aa45-62174efd5e16.c6.jpg",
                        "c9_uri": "https://odis.homeaway.com/odis/listing/e8c11288-8a61-4d64-aa45-62174efd5e16.c9.jpg"
                    }
                ],
                "bedrooms": 2,
                "bathrooms": {
                    "full": 1,
                    "half": 0,
                    "toiletOnly": 0
                },
                "propertyType": "Apartment",
                "sleeps": 6,
                "petsAllowed": false,
                "averagePrice": {
                    "currencyUnits": "USD",
                    "periodType": "NIGHTLY",
                    "value": 165
                },
                "averageRating": null,
                "reviewCount": null,
                "detailPageUrl": "/4261889ha?adultsCount=1&childrenCount=1&noDates=true&petIncluded=0",
                "instantBookable": null,
                "listingNumber": 4261889,
                "propertyMetadata": {
                    "headline": "Fabulous & Cozy 2BR 1 min Walk to MRT",
                    "propertyName": "Fabulous & Cozy 2BR 1 min Walk to MRT"
                },
                "reviewBadges": [],
                "geoCode": {
                    "latitude": 1.3148121,
                    "longitude": 103.8521805
                }
            }
        ],
        "pageTitle": "Top 50 Singapore Vacation Rentals | Vrbo.com",
        "totalRecords": 5
    }
}

```

The app is running in EC2 instance. http://54.149.213.214:3000/. 

## Bonus Points

1. Application is deployed to cloud instances - http://54.149.213.214:3000/

2. Proper error handling