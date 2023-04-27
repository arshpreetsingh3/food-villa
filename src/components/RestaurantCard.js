
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
const RestrauntCard3 = ({name,cuisines,cloudinaryImageId,lastMileTravelString,avgRating,costForTwoString,deliveryTime})=> {
    const {user} = useContext(UserContext);
    return (
        <div className="flex flex-col overflow-hidden w-48 p-2 m-2 rounded-sm hover:shadow-xl duration-300 font-poppins bg-white shadow-sm">
            <img   className="w-full border rounded-sm" src={IMG_CDN_URL + cloudinaryImageId}/>
            <span className="block font-bold text-lg mt-3 ">{name}</span>
            <span className="mt-3 text-gray-600">{cuisines.join(", ")}</span>
            <span
        className="w-12 text-center mt-3 border rounded-md text-white"
        style={
          avgRating >= 4
            ? { backgroundColor: "#48c479" }
            : avgRating >= 3
            ? { backgroundColor: "#DB7C38" }
            : avgRating === "--"
            ? { backgroundColor: "#48c479" }
            : { backgroundColor: "#E31837" }
        }
      >
        {avgRating} &#9733;
      </span>
      <div className="flex flex-row mt-5 ">
        <span className="font-medium">{costForTwoString}</span>
        <span className="font-medium">{deliveryTime} MINS</span>
      </div>
            {/* <h5 className="font-bold">{user.name}</h5>               */}
        </div>
    )
}
// Passing in props as attritubes eg restaurant = {} is the prop there
// Way of passing data
// Passing data from parent component to child component
// React wraps all properties in side a variable known as "props"

export default RestrauntCard3;