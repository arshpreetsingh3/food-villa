import React, { useEffect } from 'react'
import { useState } from 'react';

const Profile = (props) => {

const [count,setCount] = useState(0);
const [count2,setCount2] = useState(0);
console.log("render functional component");

useEffect(()=>
//useEffect called after every render
//api call can be made because
//we render whatever we can using the default state then 
// we update the state
//then it re renders
{});
  return (
    <div>
        <h2> Created By Arshpreet Singh</h2>
        <h3>Name: {props.name}</h3>
        <h3>Count : {count}</h3>
        <button onClick={() => {
            setCount(1);
            setCount2(2);
        }}>Count</button>
        {/**
         * setCount is used because react tracks it, it knows how to keep ui in sync with state variables
         * As soon as state variable is changed react will trigger it reconciliation cycle
         */}
    </div>
  )
}

export default Profile