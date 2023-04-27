import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

//comes from the core library 
//containes slices

//how to provide store to the application?
//Using provider

//redux store can be used by entire apllication or some components

const store = configureStore({
    reducer:{
        cart: cartSlice,
    },

});


export default store;

/**
 * Create Store
 *  - configureStore() - RTK
 * 
 * Provide my store to app 
 *  - using <Provider store = {store}> - import from react-redux
 * 
 * Slice 
 *   - RTK  - createSlice({
 *    name:"",
 *    initialState:,
 *    reducers:{
 *      contains action and its reducer function
 *      which wont wont return anything
 *      addItem: (state,action) =>{ state = action.payload
 *   
 *   }
 *  })
 *   
 * export default cartSlice.reducer;
 * export const {addItem, removeItem} = cartSlice.actions;
 * 
 * Put that slice into store
 * Each slice will exxport its reducer
 * - 
 * {
 *  reducer : {
 *      cart:cartSlice,
 *      user:UserSlice,
 * }
 * 
 * }
 * 
 * 
 * 
 * 
 * 
 */