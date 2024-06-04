import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (  
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s'/>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>

            </ul>
        </div>
    </div>
);
};

const RestaurantCard = (props) => {
    const {resData} = props;
    return(
        <div className='res-card' >
            
            <img className='res-logo' src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.info?.cloudinaryImageId} alt='meghanafoods'/>
            <h3>{resData?.info?.name}</h3>
            <h4> {resData?.info?.cuisines.join(", ")}</h4>
            <h4>{resData?.info?.avgRating}</h4>
            <h4>{resData?.info?.costForTwo}</h4>
            <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
        </div>
    )
};

const resObj = {
    "id": "10576",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Koramangala",
    "areaName": "Koramangala",
    "costForTwo": "₹350 for two",
    "cuisines": [
        "Pizzas"
    ],
    "avgRating": 4.1,
    "parentId": "721",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
        "nextCloseTime": "2024-06-05 04:00:00",
        "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
        "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
        }
    },
    "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹189"
    },
    "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
    },
    "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
        }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "analytics": {
        "context": "seo-data-f83d343e-32d0-4add-9b5f-05ca30e4aec9"
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
};

const resList = [
    {
      "info": {
        "id": "10576",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-05 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹189"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-f83d343e-32d0-4add-9b5f-05ca30e4aec9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "393840",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "Chikka Lakshmaiah Layout",
        "areaName": "Adugodi",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "61955",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-05 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹149"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-f83d343e-32d0-4add-9b5f-05ca30e4aec9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chinese-wok-chikka-lakshmaiah-layout-adugodi-bangalore-393840",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "581809",
        "name": "UBQ by Barbeque Nation",
        "cloudinaryImageId": "muaktnk5xb3zop4bvj6l",
        "locality": "7th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 3.8,
        "parentId": "10804",
        "avgRatingString": "3.8",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-04 16:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-f83d343e-32d0-4add-9b5f-05ca30e4aec9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-7th-block-koramangala-bangalore-581809",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "59627",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "ntjshqsv2k7vxtv7vmib",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹251 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "4961",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-05 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-f83d343e-32d0-4add-9b5f-05ca30e4aec9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-koramangala-bangalore-59627",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "581808",
        "name": "Barbeque Nation",
        "cloudinaryImageId": "koxmlppfprrurmmcvxp9",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 3.8,
        "parentId": "2438",
        "avgRatingString": "3.8",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-04 16:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-f83d343e-32d0-4add-9b5f-05ca30e4aec9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/barbeque-nation-koramangala-bangalore-581808",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "621512",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
        "locality": "K.H.B Colony",
        "areaName": "Koramangala",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "2233",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-05 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-f83d343e-32d0-4add-9b5f-05ca30e4aec9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-k-h-b-colony-koramangala-bangalore-621512",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "375041",
        "name": "Andhra Gunpowder",
        "cloudinaryImageId": "byilgyrcfz690ryoasww",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Andhra",
          "Biryani",
          "South Indian"
        ],
        "avgRating": 4.5,
        "parentId": "10496",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 0.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-05 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-f83d343e-32d0-4add-9b5f-05ca30e4aec9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-6th-block-koramangala-bangalore-375041",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "392828",
        "name": "Big Bowl",
        "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
        "locality": "Chikka Lakshmaiah Layout",
        "areaName": "Adugodi",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "434792",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-05 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹179"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-f83d343e-32d0-4add-9b5f-05ca30e4aec9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/big-bowl-chikka-lakshmaiah-layout-adugodi-bangalore-392828",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "25620",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25620.JPG",
        "locality": "Intermediate Ring Road",
        "areaName": "Ejipura",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.2,
        "parentId": "547",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-04 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-f83d343e-32d0-4add-9b5f-05ca30e4aec9"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ];


const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search Bar</div>
            <div className='res-container'>
                <RestaurantCard resData = {resList[0]}/>
                <RestaurantCard resData = {resList[1]}/>
                <RestaurantCard resData = {resList[2]}/>
                <RestaurantCard resData = {resList[3]}/>
                <RestaurantCard resData = {resList[4]}/>
                <RestaurantCard resData = {resList[5]}/>
                <RestaurantCard resData = {resList[6]}/>
                <RestaurantCard resData = {resList[7]}/>
                <RestaurantCard resData = {resList[8]}/>

            </div>
            
        </div>
    )
}

/**
 * Header
 * -logo
 * -Nav Items
 * Body
 * -search
 * Resturant container
 * -res cards
 * footer
 * -copyright
 * -links
 * -addresses
 * -contact information 
 * */

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
