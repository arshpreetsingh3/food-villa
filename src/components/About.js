import React from 'react'
import {Outlet} from  "react-router-dom";
import Profile from "./Profile";
import ProfileClass from './ProfileClass';
import UserContext from '../utils/UserContext';
import { GITHUB_LINK, GMAIL_LINK,LINKEDIN_LINK } from '../config';
import { SiGithub, SiLinkedin, SiGoogle} from "react-icons/si";
import avatar from "../assets/avatar.jpg";
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
              {/* <UserContext.Consumer>
          {({user})=> <h4 className='font-bold text-xl p-1'>{user.name}</h4>}
        </UserContext.Consumer> */}
          <h1 className='text-center text-2xl'>About US</h1>
          <p className='text-center'>This is the about is page. Food Villa coming!!</p>
          {/**<Profile name={"Arshpreet"}/>*/}
          {/* <ProfileClass name={"Arshpreet Class"}/> */}
          {/* 
          This pro
        file component can also be called directly without outlet in that case just call <Profile/>
          */}
            <div className="flex-1 flex justify-center items-center font-poppins bg-slate-50">
      <div className="flex flex-col justify-center items-center mt-4 gap-5 shadow-lg border w-fit max-w-xs">
        <p className="font-medium text-xl w-full text-center py-2">About Me</p>
        <img
          className="rounded-full w-[150px] h-[150px] border-none align-middle"
          src={avatar}
          alt="user photo"
        />
        <div className="bg-slate-900 text-white p-4 rounded-sm">
          <p className="pb-4 text-lg font-normal text-slate-300 text-center">
            ReactJs | JavaScript | HTML5 | CSS3 | Tailwind CSS | Front End
            Developer
          </p>
          <div className=" text-[2em] text-center w-full flex items-center justify-center mt-2">
            <a
              href={GITHUB_LINK}
              className="mb-2 pr-4 hover:scale-105"
              target="_blank"
            >
              <i className="bg-[#333] icon--i">
                <SiGithub className="m-auto" />
              </i>
            </a>
            <a
              href={LINKEDIN_LINK}
              className="mb-2 pr-4 hover:scale-105"
              target="_blank"
            >
              <i className="bg-[#0e76a8] icon--i">
                <SiLinkedin className="m-auto" />
              </i>
            </a>
            <a href={GMAIL_LINK} className="mb-2 hover:scale-105">
              <i className="bg-[#ea4335] icon--i">
                <SiGoogle className="m-auto" />
              </i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  


      </div>
    )

  }
}
export default About
//pare