

const Restaurants = [
    {
        id: 1,
        image: "https://www.zameen.com/blog/wp-content/uploads/2019/04/image-3-7-1024x640.jpg ",
        title: "Kebabs & Curries Company Family Restaurant",
        shortDescription: "Experience a fun-filled sleepover at a charming compact, perfect for a cozy getaway.",
        address: "90s kids rule at sleepovers. But you already knew that.",
        location: { latitude: 37.7749, longitude: -122.4194 },
        city: "San Francisco",
        country: "USA",
        distance: 1,
        price: "89",
        person: "2",
        phone: "12345678912",
        type: 'Restaurant',
        discount: 10,
        time: {
            startTime: "10am",
            endTime: "11pm"

        },
        deliveryTime: "15",
        images: [
            "https://www.zameen.com/blog/wp-content/uploads/2019/04/image-3-7-1024x640.jpg",
            "https://www.shutterstock.com/image-photo/pakistani-chicken-karahi-naan-traditional-600nw-1790057045.jpg",
            " https://restaurantclicks.com/wp-content/uploads/2023/01/Pakistani-Food.jpg",
            " https://foodnerd.s3.eu-west-1.amazonaws.com/production/blog/cover_image/1/foodnerd-islamabad_s-_desi-restaurants.jpg  ",
            "  https://miro.medium.com/v2/resize:fit:800/1*T4y6lA9p_hBWEl-gZdupsg.jpeg ",


        ],
        menu: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR351LKNGArXjtju6VCSrBCdk1nYnumYPIGv4ms4fZ8x9Sd8sFtz1PEAMjNlgS3RwKx40g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxWUr7Mc-M5chrypMvsWWSvcJI2tRZpHl7e1QjV0U5F0OqldGCVOSQKU8K1Ru56HdrjM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsvavYzYhHnbW9xOb-kl2ba8yIZ8IQwrbjY9lefSzCrgOiu_jbUmFmNzp_etLOpplpu8&usqp=CAU ",
            " https://b.zmtcdn.com/data/menus/607/20294607/a0e22db3b5459cd52d442de31a922cee.jpg",
            " https://b.zmtcdn.com/data/menus/387/19543387/8239b9f3ab332e73b754fc272a1b036c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A ",


        ],
        reviewCategory: [
            "clean",
            "taste",
            "delivery",
            "time",

        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Excellent service and wonderful experience!",
                    "Excelqwertyuiopience!",
                    "good food and quality!",
                    "not bad!",

                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 0,
                userFollowers: 0,

            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 10,

            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 7,

            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 1,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 10,
                userFollowers: 0,

            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 2,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            }
        ],
        items: [
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },

        ],
        amenities: [
            "Mountain view",
            "Garden view",
            "Wifi",
            "Dedicated workspace",

        ],

        cuisines: [
            "Kebab",
            "Desi",
            "FastFood",
            "italian",

        ],

    },
    {
        id: 2,
        image: " https://live.staticflickr.com/2942/15385505506_ac1165d97f_b.jpg  ",
        title: "Bukhara ",
        shortDescription: "A luxurious restaurant known for its North-West Frontier cuisine, especially the kebabs.   ",
        address: "  ITC Maurya, Sardar Patel Marg, Diplomatic Enclave, New Delhi 110021   ",
        location: { latitude: 37.7749, longitude: -122.4194 },
        city: "  New Delhi   ",
        country: "India ",
        distance: "  2.2  ",
        price: " 3500  ",
        person: " 1 ",
        phone: "  +91 11 2611 2233  ",
        type: '  Restaurant  ',
        deliveryTime: "10",
        time: {
            startTime: "10am",
            endTime: "11pm"

        },
        reviewCategory: [
            "clean",
            "taste",
            "delivery",
            "time",

        ],
        images: [
            "   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMyzfmXp2bWMGCMLw2JC4uXpXR1qEGTCBvw&s  ",
            " https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg ",
            " https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg ",
            "  https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill   ",
            " https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg ",


        ],
        menu: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR351LKNGArXjtju6VCSrBCdk1nYnumYPIGv4ms4fZ8x9Sd8sFtz1PEAMjNlgS3RwKx40g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxWUr7Mc-M5chrypMvsWWSvcJI2tRZpHl7e1QjV0U5F0OqldGCVOSQKU8K1Ru56HdrjM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsvavYzYhHnbW9xOb-kl2ba8yIZ8IQwrbjY9lefSzCrgOiu_jbUmFmNzp_etLOpplpu8&usqp=CAU ",
            " https://b.zmtcdn.com/data/menus/607/20294607/a0e22db3b5459cd52d442de31a922cee.jpg",
            " https://b.zmtcdn.com/data/menus/387/19543387/8239b9f3ab332e73b754fc272a1b036c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A ",


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Excellent service and wonderful experience!",
                    "Excelqwertyuiopience!",
                    "good food and quality!",
                    "not bad!",

                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 0,
                userFollowers: 0,

            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 10,

            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 7,

            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 1,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 10,
                userFollowers: 0,

            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 2,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            }
        ],
        items: [
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },

        ],
        amenities: [
            "Mountain view",
            "Garden view",
            "Wifi",
            "Dedicated workspace",

        ],

        cuisines: [
            "Kebab",
            "Desi",
            "FastFood",
            "italian",

        ],

    },
    {
        id: 3,
        image: " https://thumbs.dreamstime.com/b/desi-food-indian-vegkadai-naan-roti-butterchicken-157186601.jpg  ",
        title: "    Karim's ",
        shortDescription: " Famous for its Mughlai cuisine, this iconic eatery offers legendary kebabs and curries.  ",
        address: "  16, Gali Kababian, Jama Masjid, Old Delhi 110006  ",
        location: { latitude: 37.7749, longitude: -122.4194 },
        city: "   New Delhi   ",
        country: "India ",
        distance: "  4  ",
        price: " 700  ",
        person: " 2 ",
        phone: "  +91 11 2326 4981  ",
        type: '  Restaurant  ',
        deliveryTime: "6",
        time: {
            startTime: "10am",
            endTime: "11pm"

        },
        reviewCategory: [
            "clean",
            "taste",
            "delivery",
            "time",

        ],
        images: [
            "   https://www.jollibeefoods.com/cdn/shop/files/29351737_2152446668377854_356570745477300982_o_2152446668377854.jpg?v=1634843436&width=1080  ",
            " https://images.ctfassets.net/pxcfulgsd9e2/articleImage76944/fced4ee60a24295b593cd6214c61e69d/Foods-with-high-water-content-HN1023-iStock-578273202-Sized.jpg ",
            " https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/1296x728-header.jpg?w=1155&h=1528 ",
            "   https://images.immediate.co.uk/production/volatile/sites/30/2020/08/healthy-thai-collection-main-image-3afbf87.jpg?quality=90&resize=500,454  ",
            " https://www.foodandwine.com/thmb/DGdWBTNLWTelOf1NneodQQ5gjFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pad-see-yewxl-r-200509-0c4f03772f8f46a8882b0265dfb3786d.jpg ",


        ],
        menu: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR351LKNGArXjtju6VCSrBCdk1nYnumYPIGv4ms4fZ8x9Sd8sFtz1PEAMjNlgS3RwKx40g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxWUr7Mc-M5chrypMvsWWSvcJI2tRZpHl7e1QjV0U5F0OqldGCVOSQKU8K1Ru56HdrjM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsvavYzYhHnbW9xOb-kl2ba8yIZ8IQwrbjY9lefSzCrgOiu_jbUmFmNzp_etLOpplpu8&usqp=CAU ",
            " https://b.zmtcdn.com/data/menus/607/20294607/a0e22db3b5459cd52d442de31a922cee.jpg",
            " https://b.zmtcdn.com/data/menus/387/19543387/8239b9f3ab332e73b754fc272a1b036c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A ",


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Excellent service and wonderful experience!",
                    "Excelqwertyuiopience!",
                    "good food and quality!",
                    "not bad!",

                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 0,
                userFollowers: 0,

            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 10,

            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 7,

            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 1,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 10,
                userFollowers: 0,

            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 2,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            }
        ],
        items: [
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },

        ],
        amenities: [
            "Mountain view",
            "Garden view",
            "Wifi",
            "Dedicated workspace",

        ],

        cuisines: [
            "Kebab",
            "Desi",
            "FastFood",
            "italian",

        ],

    },
    {
        id: 4,
        image: "  https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/149853157/original/666464f431c052317442b258414870d3448cbea5/teach-you-online-desi-cooking.jpg ",
        title: "    Saravana Bhavan ",
        shortDescription: "  A popular chain serving authentic South Indian vegetarian dishes. ",
        address: "  46 Janpath, New Delhi 110001  ",
        location: { latitude: 37.7749, longitude: -122.4194 },
        city: "   New Delhi  ",
        country: "India ",
        distance: "  8  ",
        price: "  200 ",
        person: " 2 ",
        phone: " +91 11 2331 7755   ",
        type: ' FastFood   ',
        deliveryTime: "6",
        time: {
            startTime: "10am",
            endTime: "11pm"

        },
        reviewCategory: [
            "clean",
            "taste",
            "delivery",
            "time",

        ],
        images: [
            "   https://i0.wp.com/www.thedesiwonderwoman.com/wp-content/uploads/2019/09/RESIZED.jpg?fit=945%2C1139&ssl=1  ",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlbioN5bzOP4MzDmkouGihwYfaE3hnimsgw&s  ",
            " https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/25/0/FNK_Chana-Masala_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1614271965516.jpeg ",
            "   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr55S-iL7SKdTR0iONhTk3ZqSgaC466r726g&s  ",
            " https://www.pakistantravelblog.com/wp-content/uploads/2020/06/1-nihari.jpg ",


        ],
        menu: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR351LKNGArXjtju6VCSrBCdk1nYnumYPIGv4ms4fZ8x9Sd8sFtz1PEAMjNlgS3RwKx40g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxWUr7Mc-M5chrypMvsWWSvcJI2tRZpHl7e1QjV0U5F0OqldGCVOSQKU8K1Ru56HdrjM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsvavYzYhHnbW9xOb-kl2ba8yIZ8IQwrbjY9lefSzCrgOiu_jbUmFmNzp_etLOpplpu8&usqp=CAU ",
            " https://b.zmtcdn.com/data/menus/607/20294607/a0e22db3b5459cd52d442de31a922cee.jpg",
            " https://b.zmtcdn.com/data/menus/387/19543387/8239b9f3ab332e73b754fc272a1b036c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A ",


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Excellent service and wonderful experience!",
                    "Excelqwertyuiopience!",
                    "good food and quality!",
                    "not bad!",

                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 0,
                userFollowers: 0,

            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 10,

            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 7,

            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 1,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 10,
                userFollowers: 0,

            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 2,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            }
        ],
        items: [
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },

        ],
        amenities: [
            "Mountain view",
            "Garden view",
            "Wifi",
            "Dedicated workspace",

        ],

        cuisines: [
            "Kebab",
            "Desi",
            "FastFood",
            "italian",

        ],

    },
    {
        id: 5,
        image: "  https://i.dawn.com/primary/2018/07/5b5412686a55f.jpg ",
        title: " Kesar Da Dhaba ",
        shortDescription: " A popular dhaba known for its authentic Punjabi food, especially the Dal Makhni.  ",
        address: " Chowk Passian, Near Telephone Exchange, Amritsar 143001   ",
        location: { latitude: 37.7749, longitude: -122.4194 },
        city: "  Amritsar   ",
        country: "India ",
        distance: "  9  ",
        price: "  300 ",
        person: " 1 ",
        phone: "  +91 183 255 2103  ",
        type: 'Dhaba',
        discount: 5,
        deliveryTime: " 10  ",
        time: {
            startTime: "10am",
            endTime: "11pm"

        },
        reviewCategory: [
            "clean",
            "taste",
            "delivery",
            "time",

        ],
        images: [
            "  https://img.freepik.com/premium-photo/free-indian-food-photos-pictures-stock-photos-vectors-illustrations_662214-4105.jpg   ",
            " https://homemadedesifood.com/wp-content/uploads/2024/05/Mutton-Biryani-HomeMade-Desi-Food-Birmingham-UK.webp ",
            " https://media-cdn.tripadvisor.com/media/photo-s/1a/87/aa/30/khan-s-indian-cuisine.jpg ",
            "  https://burst.shopifycdn.com/photos/indian-food-on-restaurant-table.jpg?width=925&format=pjpg&exif=0&iptc=0   ",
            " https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-1297854-2474661.jpg&fm=jpg ",


        ],
        menu: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR351LKNGArXjtju6VCSrBCdk1nYnumYPIGv4ms4fZ8x9Sd8sFtz1PEAMjNlgS3RwKx40g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxWUr7Mc-M5chrypMvsWWSvcJI2tRZpHl7e1QjV0U5F0OqldGCVOSQKU8K1Ru56HdrjM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsvavYzYhHnbW9xOb-kl2ba8yIZ8IQwrbjY9lefSzCrgOiu_jbUmFmNzp_etLOpplpu8&usqp=CAU ",
            " https://b.zmtcdn.com/data/menus/607/20294607/a0e22db3b5459cd52d442de31a922cee.jpg",
            " https://b.zmtcdn.com/data/menus/387/19543387/8239b9f3ab332e73b754fc272a1b036c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A ",


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Excellent service and wonderful experience!",
                    "Excelqwertyuiopience!",
                    "good food and quality!",
                    "not bad!",

                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 0,
                userFollowers: 0,

            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 10,

            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 7,

            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 1,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 10,
                userFollowers: 0,

            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 2,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            }
        ],
        items: [
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },

        ],
        amenities: [
            "Mountain view",
            "Garden view",
            "Wifi",
            "Dedicated workspace",

        ],

        cuisines: [
            "Kebab",
            "Desi",
            "FastFood",
            "italian",

        ],

    },
    {
        id: 6,
        image: " https://www.chingssecret.com/public/uploads/blogs/1582286855_1_bfi_im.png  ",
        title: "Farzi Café ",
        shortDescription: "A modern Indian bistro blending global and local flavors with a twist.",
        address: "DLF Cyber Hub, Ground Floor, Gurgaon 122002",
        location: { latitude: 37.7749, longitude: -122.4194 },
        city: "Gurgaon",
        country: "India ",
        distance: "  3  ",
        price: "1500",
        person: " 2 ",
        phone: "   +91 124 492 2273 ",
        type: '  Cafe  ',
        discount: 4,
        deliveryTime: "  4 ",
        time: {
            startTime: "10am",
            endTime: "11pm"

        },
        reviewCategory: [
            "clean",
            "taste",
            "delivery",
            "time",

        ],
        images: [
            "  https://i.dawn.com/primary/2014/10/544de9a7b69b3.jpg?r=1403321791   ",
            " https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2021/04/foodkarachi1.jpg ",
            " https://img.freepik.com/free-photo/plate-lamb-kebabs-with-vegetables-bowl-red-sauce_188544-43095.jpg ",
            "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE40cgTSTjL3506u19caQS8pJRs0cB3RCEkQ3j9fFRDR79wJTd6Kv8y4QPpS81FTE3oY8&usqp=CAU   ",
            " https://static.vecteezy.com/system/resources/previews/015/933/199/non_2x/tandoori-chicken-is-an-indian-non-vegetarian-spicy-food-free-photo.jpg ",


        ],
        menu: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR351LKNGArXjtju6VCSrBCdk1nYnumYPIGv4ms4fZ8x9Sd8sFtz1PEAMjNlgS3RwKx40g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxWUr7Mc-M5chrypMvsWWSvcJI2tRZpHl7e1QjV0U5F0OqldGCVOSQKU8K1Ru56HdrjM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsvavYzYhHnbW9xOb-kl2ba8yIZ8IQwrbjY9lefSzCrgOiu_jbUmFmNzp_etLOpplpu8&usqp=CAU ",
            " https://b.zmtcdn.com/data/menus/607/20294607/a0e22db3b5459cd52d442de31a922cee.jpg",
            " https://b.zmtcdn.com/data/menus/387/19543387/8239b9f3ab332e73b754fc272a1b036c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A ",


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Excellent service and wonderful experience!",
                    "Excelqwertyuiopience!",
                    "good food and quality!",
                    "not bad!",

                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 0,
                userFollowers: 0,

            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 10,

            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 7,

            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 1,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 10,
                userFollowers: 0,

            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 2,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            }
        ],
        items: [
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },

        ],
        amenities: [
            "Mountain view",
            "Garden view",
            "Wifi",
            "Dedicated workspace",

        ],

        cuisines: [
            "Kebab",
            "Desi",
            "FastFood",
            "italian",

        ],

    },
    {
        id: 7,
        image: " https://www.aljazeera.com/wp-content/uploads/2022/11/FTS_Punjab-Resto-Doha_09.jpg?resize=1920%2C1080&quality=80  ",
        title: "Chokhi Dhani ",
        shortDescription: " A themed village resort that provides traditional Rajasthani food in a cultural ambiance.  ",
        address: " 12 Miles, Tonk Road, Jaipur 302001   ",
        location: { latitude: 37.7749, longitude: -122.4194 },
        city: "   Jaipur  ",
        country: "India ",
        distance: " 2.6   ",
        price: "  800 ",
        person: " 1 ",
        phone: "   +91 141 516 5000 ",
        type: '  Restaurant  ',
        deliveryTime: "  3 ",
        time: {
            startTime: "10am",
            endTime: "11pm"

        },
        reviewCategory: [
            "clean",
            "taste",
            "delivery",
            "time",

        ],
        images: [
            "  https://images.squarespace-cdn.com/content/v1/5d96d524052c897425394aaf/40a3b761-a13c-44af-93af-096c75a695f3/cafe-menu-breakfast-ideas.jpeg   ",
            "https://img.freepik.com/free-photo/closeup-shot-croissant-plate-covered-chocolate-cafe_181624-57999.jpg  ",
            "  https://images.unsplash.com/photo-1593954134618-5f29b4bd5433?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhZmUlMjBmb29kfGVufDB8fDB8fHww",
            "   https://perfectdailygrind.com/wp-content/uploads/2019/09/Low-Waste-2.png  ",
            " https://seattlecoffeescene.com/wp-content/uploads/The-Best-Types-of-Foods-to-Offer-at-Your-Coffee-Shop.jpg ",


        ],
        menu: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR351LKNGArXjtju6VCSrBCdk1nYnumYPIGv4ms4fZ8x9Sd8sFtz1PEAMjNlgS3RwKx40g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxWUr7Mc-M5chrypMvsWWSvcJI2tRZpHl7e1QjV0U5F0OqldGCVOSQKU8K1Ru56HdrjM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsvavYzYhHnbW9xOb-kl2ba8yIZ8IQwrbjY9lefSzCrgOiu_jbUmFmNzp_etLOpplpu8&usqp=CAU ",
            " https://b.zmtcdn.com/data/menus/607/20294607/a0e22db3b5459cd52d442de31a922cee.jpg",
            " https://b.zmtcdn.com/data/menus/387/19543387/8239b9f3ab332e73b754fc272a1b036c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A ",


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Excellent service and wonderful experience!",
                    "Excelqwertyuiopience!",
                    "good food and quality!",
                    "not bad!",

                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 0,
                userFollowers: 0,

            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 10,

            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 7,

            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 1,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 10,
                userFollowers: 0,

            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 2,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            }
        ],
        items: [
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },

        ],
        amenities: [
            "Mountain view",
            "Garden view",
            "Wifi",
            "Dedicated workspace",

        ],

        cuisines: [
            "Kebab",
            "Desi",
            "FastFood",
            "italian",

        ],

    },
    {
        id: 8,
        image: " https://images.jdmagicbox.com/comp/def_content_category/mcdonalds/image-1-mcdonalds-1002-5yt6c.jpg ",
        title: "McDonald's ",
        shortDescription: "  Popular fast food chain offering burgers, fries, and shakes with an Indian twist  ",
        address: "Connaught Place, Block A, New Delhi 110001 ",
        location: { latitude: 37.7749, longitude: -122.4194 },
        city: "   New Delhi  ",
        country: "India ",
        distance: "  1.5  ",
        price: "  200 ",
        person: " 1 ",
        phone: "   +91 11 6000 6666 ",
        type: ' FastFood   ',
        discount: 10,
        time: {
            startTime: "10am",
            endTime: "11pm"

        },
        reviewCategory: [
            "clean",
            "taste",
            "delivery",
            "time",

        ],
        deliveryTime: "  10 ",
        images: [
            "  https://images.jdmagicbox.com/comp/def_content_category/mcdonalds/image-1-mcdonalds-1002-5yt6c.jpg   ",
            " https://www.mcdonalds.com/content/dam/sites/uk/nfl/publications/best-burger-pbhalf.jpg ",
            " https://www.pioneeringminds.com/wp-content/uploads/2017/03/McDonalds-Sign.jpg ",
            "  https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/18/7f/03/we-bought-it-even-more.jpg?w=1100&h=-1&s=1   ",
            " https://www.foodandwine.com/thmb/zaL9eyOyTgCjX99DFOhB3iG7YEk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/The-Worst-Time-to-Visit-McDonalds-FT-BLOG0823-711a27313d1a448baf4db4817310ff5d.jpg ",


        ],
        menu: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR351LKNGArXjtju6VCSrBCdk1nYnumYPIGv4ms4fZ8x9Sd8sFtz1PEAMjNlgS3RwKx40g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxWUr7Mc-M5chrypMvsWWSvcJI2tRZpHl7e1QjV0U5F0OqldGCVOSQKU8K1Ru56HdrjM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsvavYzYhHnbW9xOb-kl2ba8yIZ8IQwrbjY9lefSzCrgOiu_jbUmFmNzp_etLOpplpu8&usqp=CAU ",
            " https://b.zmtcdn.com/data/menus/607/20294607/a0e22db3b5459cd52d442de31a922cee.jpg",
            " https://b.zmtcdn.com/data/menus/387/19543387/8239b9f3ab332e73b754fc272a1b036c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A ",


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Excellent service and wonderful experience!",
                    "Excelqwertyuiopience!",
                    "good food and quality!",
                    "not bad!",

                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 0,
                userFollowers: 0,

            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 10,

            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 7,

            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 1,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 10,
                userFollowers: 0,

            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 2,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            }
        ],
        items: [
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },

        ],
        amenities: [
            "Mountain view",
            "Garden view",
            "Wifi",
            "Dedicated workspace",

        ],

        cuisines: [
            "Kebab",
            "Desi",
            "FastFood",
            "italian",

        ],

    },
    {
        id: 9,
        image: " https://i.insider.com/5bd2234bdde867488579161f?width=700 ",
        title: "Burger King ",
        shortDescription: " Known for its flame-grilled burgers and a range of fast-food meals.  ",
        address: "Phoenix Market City, Viman Nagar, Pune 411014",
        location: { latitude: 37.7749, longitude: -122.4194 },
        city: "   Pune  ",
        country: "India ",
        distance: "  1.3  ",
        price: " 250  ",
        person: "1  ",
        phone: "  +91 20 6689 1144  ",
        type: ' FastFood  ',
        deliveryTime: "  4 ",
        time: {
            startTime: "10am",
            endTime: "11pm"

        },
        reviewCategory: [
            "clean",
            "taste",
            "delivery",
            "time",

        ],
        images: [
            "   https://www.thejunctionshopping.com/wp-content/uploads/2017/03/Burger-King.png  ",
            " https://www.greenqueen.com.hk/wp-content/uploads/2024/03/plant-based-burger-king-germany-vegan-cheaper-meat-1.jpg ",
            " https://tb-static.uber.com/prod/image-proc/processed_images/4f2f41c5ddddbd0f7a53084449acce2b/7835428b286acb57646a256c897c0e9e.jpeg ",
            "   https://i.insider.com/5bd2234bdde867488579161f?width=700  ",
            " https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png ",


        ],
        menu: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR351LKNGArXjtju6VCSrBCdk1nYnumYPIGv4ms4fZ8x9Sd8sFtz1PEAMjNlgS3RwKx40g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxWUr7Mc-M5chrypMvsWWSvcJI2tRZpHl7e1QjV0U5F0OqldGCVOSQKU8K1Ru56HdrjM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsvavYzYhHnbW9xOb-kl2ba8yIZ8IQwrbjY9lefSzCrgOiu_jbUmFmNzp_etLOpplpu8&usqp=CAU ",
            " https://b.zmtcdn.com/data/menus/607/20294607/a0e22db3b5459cd52d442de31a922cee.jpg",
            " https://b.zmtcdn.com/data/menus/387/19543387/8239b9f3ab332e73b754fc272a1b036c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A ",


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Excellent service and wonderful experience!",
                    "Excelqwertyuiopience!",
                    "good food and quality!",
                    "not bad!",

                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 0,
                userFollowers: 0,

            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 10,

            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 7,

            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 1,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 10,
                userFollowers: 0,

            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 2,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            }
        ],
        items: [
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },

        ],
        amenities: [
            "Mountain view",
            "Garden view",
            "Wifi",
            "Dedicated workspace",

        ],

        cuisines: [
            "Kebab",
            "Desi",
            "FastFood",
            "italian",

        ],

    },
    {
        id: 10,
        image: " https://miro.medium.com/v2/resize:fit:1400/0*KRAJjbWrI-JVH7gB  ",
        title: " Cafe Delhi Heights ",
        shortDescription: " Trendy cafe offering comfort food, burgers, and coffee in a casual ambiance. ",
        address: " Cross Point Mall, DLF Phase IV, Gurgaon 122002   ",
        location: { latitude: 37.7749, longitude: -122.4194 },
        city: "   Gurgaon  ",
        country: "India ",
        distance: "  2.1  ",
        price: " 800  ",
        person: " 2 ",
        phone: " +91 124 492 2272   ",
        type: '  Cafe  ',
        deliveryTime: " 5  ",
        time: {
            startTime: "10am",
            endTime: "11pm"

        },
        reviewCategory: [
            "clean",
            "taste",
            "delivery",
            "time",

        ],
        images: [
            "   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRphEEHgZplizhGZ1Kq7Fl_FJxpTZ7yFR3-GxLRDki7zgdjp2RcHiMtjUN1HgcZRPodk1A&usqp=CAU  ",
            " https://www.shutterstock.com/image-photo/breakfast-view-bunch-croissant-cup-600nw-2273006551.jpg ",
            " https://i.pinimg.com/236x/f1/73/9f/f1739fe8e055aedfa7c906e44c0cdb22.jpg ",
            "   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxO6PtimdkazzeG-5AYo3iLjE9Z-iGSOD8ZDvxkGXoRbEKJpxBHZjGIPVcQ4RDAkfcZs&usqp=CAU  ",
            "https://perfectdailygrind.com/wp-content/uploads/2019/09/Low-Waste-1.png  ",


        ],
        menu: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR351LKNGArXjtju6VCSrBCdk1nYnumYPIGv4ms4fZ8x9Sd8sFtz1PEAMjNlgS3RwKx40g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxWUr7Mc-M5chrypMvsWWSvcJI2tRZpHl7e1QjV0U5F0OqldGCVOSQKU8K1Ru56HdrjM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsvavYzYhHnbW9xOb-kl2ba8yIZ8IQwrbjY9lefSzCrgOiu_jbUmFmNzp_etLOpplpu8&usqp=CAU ",
            " https://b.zmtcdn.com/data/menus/607/20294607/a0e22db3b5459cd52d442de31a922cee.jpg",
            " https://b.zmtcdn.com/data/menus/387/19543387/8239b9f3ab332e73b754fc272a1b036c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A ",


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Excellent service and wonderful experience!",
                    "Excelqwertyuiopience!",
                    "good food and quality!",
                    "not bad!",

                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 0,
                userFollowers: 0,

            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 10,

            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 7,

            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 1,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 10,
                userFollowers: 0,

            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 2,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            }
        ],
        items: [
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },

        ],
        amenities: [
            "Mountain view",
            "Garden view",
            "Wifi",
            "Dedicated workspace",

        ],

        cuisines: [
            "Kebab",
            "Desi",
            "FastFood",
            "italian",

        ],

    },
    {
        id: 11,
        image: " https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/foodnavigator.com/article/2023/12/05/domino-s-innovation-lead-talks-trends-nutrition-and-sustainability-in-pizza/16991241-1-eng-GB/Domino-s-innovation-lead-talks-trends-nutrition-and-sustainability-in-pizza.jpg ",
        title: " Domino's Pizza ",
        shortDescription: " Popular pizza chain known for its quick delivery and customizable pizzas. ",
        address: " Tardeo Road, Haji Ali, Mumbai 400034  ",
        location: { latitude: 37.7749, longitude: -122.4194 },
        city: "   Mumbai  ",
        country: "India ",
        distance: "  8  ",
        price: " 300  ",
        person: " 2 ",
        phone: " +91 22 6888 6888",
        type: ' FastFood  ',
        discount: 8,
        time: {
            startTime: "10am",
            endTime: "11pm"

        },
        reviewCategory: [
            "clean",
            "taste",
            "delivery",
            "time",

        ],
        deliveryTime: "  10 ",
        images: [
            "   https://www.dominos.com.pk/images/6d2f2aa0-a6c1-11ed-be00-1b26968ea32f-Tex-Mex800x550_variant_0-2023-02-07082840.webp  ",
            " https://www.foodbusinessnews.net/ext/resources/2020/4/DominosOrder_Lead.jpg?height=667&t=1587732170&width=1080 ",
            "  https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/foodnavigator.com/article/2023/12/05/domino-s-innovation-lead-talks-trends-nutrition-and-sustainability-in-pizza/16991241-1-eng-GB/Domino-s-innovation-lead-talks-trends-nutrition-and-sustainability-in-pizza.jpg",
            "   https://clapham-junction.transforms.svdcdn.com/production/assets/images/business-directory/AZ_Dominos.jpg?w=1120&h=800&q=82&fm=webp&fit=crop&dm=1580154259&s=e66397e8cf167aba75d7a81d8809bd8f  ",
            " https://vegnews.com/media/W1siZiIsIjIwOTgxL1ZlZ05ld3MuRG9taW5vc1VLQ2hpY2tBaW50MS5qcGciXSxbInAiLCJjcm9wX3Jlc2l6ZWQiLCIxOTIweDEwMDgrMCswIiwiMTIwMHg2MzBeIix7ImZvcm1hdCI6ImpwZyJ9XSxbInAiLCJvcHRpbWl6ZSJdXQ/VegNews.DominosUKChickAint1.jpg?sha=6061439cdec0247c ",


        ],
        menu: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR351LKNGArXjtju6VCSrBCdk1nYnumYPIGv4ms4fZ8x9Sd8sFtz1PEAMjNlgS3RwKx40g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxWUr7Mc-M5chrypMvsWWSvcJI2tRZpHl7e1QjV0U5F0OqldGCVOSQKU8K1Ru56HdrjM&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsvavYzYhHnbW9xOb-kl2ba8yIZ8IQwrbjY9lefSzCrgOiu_jbUmFmNzp_etLOpplpu8&usqp=CAU ",
            " https://b.zmtcdn.com/data/menus/607/20294607/a0e22db3b5459cd52d442de31a922cee.jpg",
            " https://b.zmtcdn.com/data/menus/387/19543387/8239b9f3ab332e73b754fc272a1b036c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A ",


        ],
        reviews: [
            {
                name: "Alice Johnson",
                city: "New York",
                country: "USA",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Excellent service and wonderful experience!",
                    "Excelqwertyuiopience!",
                    "good food and quality!",
                    "not bad!",

                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Bob Smith",
                city: "Toronto",
                country: "Canada",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 0,
                userFollowers: 0,

            },
            {
                name: "Carlos García",
                city: "Madrid",
                country: "Spain",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 10,

            },
            {
                name: "Diana Patel",
                city: "London",
                country: "UK",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 7,

            },
            {
                name: "Ella Chen",
                city: "Sydney",
                country: "Australia",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 1,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 10,
                userFollowers: 0,

            },
            {
                name: "Franklin Lee",
                city: "San Francisco",
                country: "USA",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Grace Kim",
                city: "Seoul",
                country: "South Korea",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Hannah Wilson",
                city: "Dublin",
                country: "Ireland",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Isaac Martinez",
                city: "Buenos Aires",
                country: "Argentina",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Julia Fischer",
                city: "Berlin",
                country: "Germany",
                date: "2024-08-25",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Kevin Brown",
                city: "Cape Town",
                country: "South Africa",
                date: "2024-08-26",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Lily Davis",
                city: "Athens",
                country: "Greece",
                date: "2024-08-27",
                type: "dining",
                category: "clean",
                star: 3,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Michael Nguyen",
                city: "Ho Chi Minh City",
                country: "Vietnam",
                date: "2024-08-28",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Nina Rossi",
                city: "Rome",
                country: "Italy",
                date: "2024-08-29",
                type: "dining",
                category: "clean",
                star: 2,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Oliver Walker",
                city: "Vienna",
                country: "Austria",
                date: "2024-08-30",
                type: "dining",
                category: "clean",
                star: 4,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            },
            {
                name: "Paula Thompson",
                city: "Brussels",
                country: "Belgium",
                date: "2024-08-31",
                type: "dining",
                category: "clean",
                star: 5,
                comments: [
                    "Great place, but a bit pricey.",
                    " place,and laaaaaaaaaaaaaaaa",
                    "cleannnnnnnnnnnnnnnnn",


                ],
                userReviews: 1,
                userFollowers: 0,

            }
        ],
        items: [
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },
            {
                id: 1,
                image: "https://www.w3schools.com/w3images/nature.jpg",
                name: "Polly",
                category: "bbq",

                price: 10,
                person: 2,

                description: " I’m your average girl that’s not-so-average sized. But even though I’m tiny, ",

            },

        ],
        amenities: [
            "Mountain view",
            "Garden view",
            "Wifi",
            "Dedicated workspace",

        ],

        cuisines: [
            "Kebab",
            "Desi",
            "FastFood",
            "italian",

        ],

    },



];

export default Restaurants;