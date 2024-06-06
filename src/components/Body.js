import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

  
const Body = () => {

  const [updatedResList , setUpdatedResList] = useState(resList);

  const handleTopRatedRestaurants = () => {
    const filtArr = updatedResList.filter(res => res?.info.avgRating > 4);
    setUpdatedResList(filtArr);
    console.log(filtArr)
  };

    return (
        <div className='body'>
          <div>
            <button className='filter-btn' onClick={handleTopRatedRestaurants}>Top Rated Restaurants</button>
          </div>
            <div className='search'>Search Bar</div>
            <div className='res-container'>
                {
                  updatedResList.map((restaurant)=> (
                    <RestaurantCard key = {restaurant?.info?.id} resData = {restaurant} />
                  ))
                }

            </div>
            
        </div>
    )
};

export default Body;