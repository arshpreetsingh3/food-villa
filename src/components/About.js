import React from 'react'
import {Outlet} from  "react-router-dom";
import Profile from "./Profile";
import ProfileClass from './ProfileClass';
import UserContext from '../utils/UserContext';
//userconext will be used as ca component 


const About2 = () => {
  return (
    <div>
        <h1>About Us Page</h1>
        
  
        <p>This is the about is page. Food Villa coming!!</p>
        <Profile name={"Arshpreet"}/>
        <ProfileClass name={"Arshpreet Class"}/>
        {/* 
        This profile component can also be called directly without outlet in that case just call <Profile/>
        */}
    </div>
  )
}

class About extends React.Component {

  constructor(props){
    super(props);
    //console.log(" Parent - constructor");
  }

 componentDidMount(){
    //Best place to make api call
    //console.log("Parent -component did mount");
  }

  render(){
    //console.log("Parent -render");
    return (
      <div className='bg-pink-50'>
              <UserContext.Consumer>
          {({user})=> <h4 className='font-bold text-xl p-1'>{user.name}</h4>}
        </UserContext.Consumer>
          <h1 className='text-2xl'>About US</h1>
          <p>This is the about is page. Food Villa coming!!</p>
          {/**<Profile name={"Arshpreet"}/>*/}
          <ProfileClass name={"Arshpreet Class"}/>
          {/* 
          This profile component can also be called directly without outlet in that case just call <Profile/>
          */}
      </div>
    )

  }
}
export default About
//pare