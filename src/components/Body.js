import React, { useState , useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

  
const Body = () => {

  const [listOfRestaurants , setlistOfRestaurants] = useState([]);

  const handleTopRatedRestaurants = () => {
    const filtArr = listOfRestaurants.filter(res => res?.info.avgRating > 4);
    setlistOfRestaurants(filtArr);
    console.log(filtArr)
  };

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    console.log(data);
    const json = await data.json();
    console.log(json.data);
     setlistOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  };

    return (
        <div className='body'>
          <div>
            <button className='filter-btn' onClick={handleTopRatedRestaurants}>Top Rated Restaurants</button>
          </div>
            <div className='search'>Search Bar</div>
            <div className='res-container'>
                {
                  listOfRestaurants.map((restaurant)=> (
                    <RestaurantCard key = {restaurant?.info?.id} resData = {restaurant} />
                  ))
                }

            </div>
            
        </div>
    )
};

export default Body;