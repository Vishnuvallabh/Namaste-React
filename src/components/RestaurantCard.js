import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId , name , avgRating , cuisines, costForTwo, deliveryTime} = resData?.info
     return(
        <div className='res-card' >
            
            <img className='res-logo' src= {CDN_URL + resData?.info?.cloudinaryImageId} alt='meghanafoods'/>
            <h3>{name}</h3>
            <h4> {cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
        </div>
    )
};

export default RestaurantCard;