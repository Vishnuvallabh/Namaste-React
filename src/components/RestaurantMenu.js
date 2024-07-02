import {useState , useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo , setResInfo] = useState(null);

    useEffect(()=> {
       fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();
            console.log(json.data);
            setResInfo(json.data);
    };
if (resInfo === null) return <Shimmer/>;   

const {name, cloudinaryImageId , cuisines , costForTwoMessage} = resInfo?.cards?.[2]?.card?.card?.info;

const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);     

   

    return (
        <div>
            <h1>{name}</h1>
            <h3> {cuisines.join(" ,")} - {costForTwoMessage}</h3>
            <ul>
                <li>{itemCards[0]?.card?.info?.name}</li>
            </ul>
        </div>
    )
};

export default RestaurantMenu;