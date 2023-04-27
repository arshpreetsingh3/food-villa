import { useState, useEffect} from "react";
import { FETCH_MENU_URL } from "../config";
const useRestaurant = (id) => {
   //get data from api 
   //should return restaurant data 
    const [restaurant,setRestaurant] = useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo(){
        const data = await fetch(FETCH_MENU_URL+id+"&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
    }
    return restaurant;
};

export default useRestaurant ;