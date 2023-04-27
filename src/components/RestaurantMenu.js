import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

//whatever we put in the router config eg restaurant/:id this id will come as a parameter here which can be further used
const RestaurantMenu = () => {
    //how to read a dynamic URL
    const params = useParams();
    const {id} = params;

    //const [restaurant,setRestaurant] = useState(null);
    //instead of making this component do all the tasks, its main task is to display the mennu 
    const restaurant = useRestaurant(id);

    const dispatch = useDispatch();

    //dispatch action and pass the payload
    const handleAddItem = () => {
        dispatch(addItem("grapes"));
        //behind the scenes redux tooolkit woukld be making an object { payload : "grapes"}
    }

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };
  
  return (!restaurant) ? <Shimmer/> : (
    <div className='flex'>
        <div className='font-bold'>
            {/* <h1>Restaurant id: {id} </h1> */}
            {/**
             * <h2>        <h2>{restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId}</h2> </h2>
             *             <h4>{console.log(Object.values(restaurant?.cards[0]?.card?.card?.info)}</h4>
             *    <div>
                <ul>
                    {Object.values(restaurant?.cards[2].groupedCard?.cards[4]?.card?.card?.itemCards[0]?.card?.info?.name)}
                </ul>
                {Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]).map(item) => (
                        <li key={item.card.info.id}>{item.card.info.name}</li>
                    ))}
            </div>
            */}
            <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
            <img className='rounded-sm hover:shadow-xl duration-300 font-poppins bg-white shadow-sm' src = {IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId}  />
            <h3> {restaurant?.cards[0]?.card?.card?.info?.city}</h3>
            <h3> {restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
        </div>
        {/* <div>
            <button className="p-2 m-5 bg-green-300" onClick={()=> handleAddItem()}>Add Item</button>
        </div> */}
         <div className="p-5">
            <h1 className='font-semibold'>MENU</h1>
            <ul>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[2]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[2]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[3]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[3]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[4]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[4]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[5]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[5]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[6]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[6]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[7]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[7]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[8]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[8]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[9]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[9]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[10]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[10]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[11]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[11]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[12]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[12]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[13]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[13]?.card?.info)}>ADD</button></li>
                <li>{restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[14]?.card?.info?.name}- <button className="p-1 bg-green-300" onClick={() => addFoodItem(restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[14]?.card?.info)}>ADD</button></li>
            </ul>
         </div>
    </div>
  )
}

export default RestaurantMenu