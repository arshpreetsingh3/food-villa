
import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestrauntCard = (props)=> {
    console.log(props); 
    return (
        <div className="r-card">
            <img src={IMG_CDN_URL + props.restaurant.data?.cloudinaryImageId}/>
            <h2>{props.restaurant.data?.name}</h2>
            <h3>{props.restaurant.data?.cuisines.join(",")}</h3>
            <h4>{props.restaurant.data?.lastMileTravelString}Rating</h4>
        </div>
    )
}
// Using Object Destructuring 
const RestrauntCard1 = ({restaurant})=> {
    

    return (
        <div className="r-card">
            <img src={IMG_CDN_URL+ restaurant.data?.cloudinaryImageId}/>
            <h2>{restaurant.data?.name}</h2>
            <h3>{restaurant.data?.cuisines.join(",")}</h3>
            <h4>{restaurant.data?.lastMileTravelString}Rating</h4>

        </div>
    )
}

// Using Object Destructuring 
// Destructring restraunt again here
// this can be called in parent component like this 
//  <RestrauntCard2 restaurant = {restaurantList[5]}/>
const RestrauntCard2 = ({restaurant})=> {

    const {name,cuisines,cloudinaryImageId,lastMileTravelString}=restaurant.data;
    return (
        <div className="r-card">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{lastMileTravelString}Rating</h4>
        </div>
    )
}


//Object destructuring on the fly
const FoodItem = ({name,description,imageId,price})=> {
   
    return (
        <div className="w-48 p-2 m-2 shadow-lg bg-gray-100">
            <img src={IMG_CDN_URL+imageId}/>
            <h2 className="font-bold text-lg">{name}</h2>
            <h4 className="p-0">{description}</h4>
            <h5 className="font-bold">Rupees: {price/100}</h5>              
        </div>
    )
}
// Passing in props as attritubes eg restaurant = {} is the prop there
// Way of passing data
// Passing data from parent component to child component
// React wraps all properties in side a variable known as "props"

export default FoodItem;