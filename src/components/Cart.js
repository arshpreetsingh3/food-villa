import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice';


const Cart = () => {
  
    //if cart is subscribing to store 
    //then automatically every time store changes my cart will change 
    //will rerender the component 
    //always subscribe to specific portion of store which is used in the component 
    // will be a major performance improved
 
  const cartItems = useSelector(store => store.cart.items)
  const dispatch = useDispatch();
  const handleClearCart = () => {
        dispatch(clearCart());
  }

  return (
    <div className='text-center'>
        <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
        <button className="bg-green-100 p-2 m-5 " onClick={()=> handleClearCart()}>CLEAR</button>
     <div className="flex">    
        {
            cartItems.map(item => (
            <FoodItem key = {item.id} {...item}  />
            ))
        }
    </div>   

    </div>
  )
};

export default Cart;