import { restaurantList } from "../config";
import RestrauntCard3 from "./RestaurantCard";
import { useState,useEffect,useContext  } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const arr2 = [{name:"Arsh"},{name:"Manan"}];
const vara2 = arr2.filter((p) =>{
    console.log(p.name);
    console.log(p.name.includes("s"));
    return p.name.includes("s");
});
const vara3 = arr2.filter(w => w.name.length > 4);
console.log(vara3);
console.log(vara2);


const Body1= () =>{
    return(
        <div className="r-list">
            {
                res
            }
            <RestrauntCard3 name = {restaurantList[0].data.name} cuisines = {restaurantList[0].data.cuisines} cloudinaryImageId = {restaurantList[0].data.cloudinaryImageId} lastMileTravelString = {restaurantList[0].data.lastMileTravelString}/>
            <RestrauntCard3 {...restaurantList[1].data}/>
            <RestrauntCard2 restaurant = {restaurantList[2]}/>
            <RestrauntCard2 restaurant = {restaurantList[3]}/>
            <RestrauntCard2 restaurant = {restaurantList[4]}/>
            <RestrauntCard2 restaurant = {restaurantList[5]}/>
        </div>
    )
};
const Body2= () =>{
    return(
        <div className="r-list">
            {
                restaurantList.map(restaurant => {
                    return <RestrauntCard3 restaurant = {restaurant}/>
                })
            }
        </div>
    )
};
const Body= () =>{
    const searchTxt = "KFC";
    
    //SearchText is a local state variable 
    //useState hook is used to create local state variables
    //below is how we create local state variable in React
    //the array below the first ele is the state variable and then the other is the function
    // const [] means we are doiing destructuring 
    //const searchVar = useState();
    //const [searchText,setSearchText] = searchVar;
    //Above can also be folowed
    //const stext; = JS 
    // const [searchText, setSearchText] = useState(); => React as the var is not assigned any value thus no parameter in useState
    const [searchInput,setSearchInput] = useState("");
    const [restaurantl,setRestaurantl] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const {user,setUser} = useContext(UserContext);


    useEffect(()=>{
        // API CALL
        getRestraurants();
        console.log("API CALLED")
    },[]);
    
    async function getRestraurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.841561&lng=75.562731&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        console.log(json.data?.cards[1]?.data?.data?.cards);
        //USE OPTIONAL CHAINING INSTEA
        setRestaurantl(json.data?.cards[1].data?.data?.cards);
        setFilteredRestaurants(json.data?.cards[1]?.data?.data?.cards);
    }
    console.log("render");
    const isOnline = useOnline();
  
    if(!isOnline){{
        return <h1>Offline, Please check your internet connection</h1>;
    }}
    //Condtional Rendering
    //if restrauntl is empty => shimmer UI 
    //if restrauntl has data => Actual data UI 
    //Shimmer is only shown when we dont have any data

    //How to avoid rendering a component?
    //Known as Early Return
    if(!restaurantl) return null;

    //if(filteredRestaurants?.length === 0) return <h1>No Matching Restaurants</h1>;

    return (restaurantl?.length === 0) ? (
    <Shimmer/> 
    ) : (
        <>  
            {console.log("inside body")}
           <div className="search-container p-5 bg-pink-50 my-2">
             <input 
                data-testid="search-input"
                type="text" 
                className="focus:bg-cyan-50 p-1 m-1" 
                placeholder="Search" 
                value={searchInput}
                //onChange = {(e) => console.log(e.target.value)}
                //onChange={(e)=>{
                //  searchTxt = e.target.value;
                //}}
                //Modifying value like above cant be done in react thus to modify the variable we need to use a function given by useState
                //Modification in the state variable is done as follows in react 
                //e.target.value holds the value of whatever is written in the input box
                //e gives the power to read whats written in the input box
                onChange={(e)=>{
                    setSearchInput(e.target.value);
                    console.log(e.target.value);
                }}
             />
             <button 
            data-testid="search-btn"
               className="p-0 m-1 bg-pink-600 hover:bg-pink-500 text-white rounded-md px-2 mx-10" 
               onClick={()=>{
                // need to filter the restraunts based on the search input
                console.log("check")
                const data = filterData(searchInput,restaurantl);
                // update the state - restaurant
                setFilteredRestaurants(data);
            }}
            > 
            Search
            </button>
            {/* <input value={user.name} onChange={
                e => setUser({
                    name: e.target.value,
                    email: "new_email@gmail.com",
                })
            }></input> */}
           </div>
  
           <div className="flex flex-wrap" data-testid="res-list">
              {
                 //if(filteredRestaurants.length === 0) return <h1>No Matching Restaurants</h1>;
                
                //restaurantl.map(restaurant => {
                //    return <RestrauntCard3 {...restaurant.data} key={restaurant.data.key}/>
                //})
                filteredRestaurants.map(restaurant => {
                    return (
                    <Link to={"/restaurant/"+ restaurant.data.id}
                       key={restaurant.data.id}
                    >
                        <RestrauntCard3 {...restaurant.data} />
                    </Link>
       
                    
                    
                    )
                })
                }
            </div>
        </> 
    )
};
export default Body