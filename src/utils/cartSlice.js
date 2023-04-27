import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state, action) => {
            state.items.push(action.payload);
            //nothing to be returned
        },
        clearCart:(state) => {
            state.items = [];
            //here action is not needed because we dont need to send any info here
        },
        removeItem:(state, action) => {
            state.items.pop();
        }
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

//this reducer will have all the reducers
//export actions and reducers from this slice
//reducers are called on dispatch of action
//addItem is the action when reducer function will be called
//reducers contain mapping of action and reducer functions 
//reducer funtion takes two things - state and action payload 
//action will have items to be added to the cart 
//state is the initial state and action is the data which is coming in 

//these functions dont return anything 
//only take state and modifies it 


/**
 * cartSlice = {
 * reducer:{
 *   reducers
 * }
 * actions:{
 *  addItem,
 *  removeItem,
 *  clearCart
 * }
 * }
 */






