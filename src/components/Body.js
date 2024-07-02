import React, { useState , useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

  
const Body = () => {

  const [listOfRestaurants , setlistOfRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue]  = useState([""]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    console.log(data);
    const json = await data.json();
    console.log(json.data);
     setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const handleTopRatedRestaurants = () => {
    const filtArr = listOfRestaurants.filter(res => res?.info.avgRating > 4);
    setlistOfRestaurants(filtArr);
    console.log(filtArr)
  };
  
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className='body'>
          <div className="filter">
            <div className="search">
              <input type="text" className="search-box" placeholder="Search for Restaurants..." value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
              <button onClick={()=> { 
                const filtArr = listOfRestaurants.filter(res => res?.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                setFilteredRestaurants(filtArr);
                console.log(filtArr);
                }}>Search
                </button>
            </div>
            <button className='filter-btn' onClick={handleTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                  filteredRestaurants.map((restaurant)=> (
                    <RestaurantCard key = {restaurant?.info?.id} resData = {restaurant} />
                  ))
                }
            </div>
        </div>
    )
};

export default Body;