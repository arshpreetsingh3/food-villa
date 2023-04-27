import React,{lazy,Suspense,useState} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
//Default Import
import {Title} from "./components/Header";
//Named Inport
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./config";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
//provider is a component
//import Instamart from "./components/Instamart";
//import {Title,HeaderComponet} from "./components/Header"; can also be done
//In case of Header is exported by default & Title has a named import following can be used 
//import HeaderComponent,{Title} from "./components/Header";
//In default exports we can rename the compoment while importing and use it with the new name
//"./components/Header.js"; can also be used 
//Header.jsx can also used in place of Header.js
//In case of multiple imports-exports from single file we can do the following
//import * as Obj from "./components/Header";
//Obj.Title;
//Obj.HeaderComponent;

// 1 Header
// Logo
// Nav Items - List Items(Right Side
// Cart
// 2 Body 
//  2.1 Search Bar 
//  2.2 Restraunt List 
//     2.3 Restraunt Card 
//        2.3.1 Restraunt Image
//        2.3.2 Restraunt Name
//        2.3.3 Restraunt Rating
//        2.3.4 Restraunt Cousines
// 3 Footer
//  3.1 Footer Links
//  3.2 Footer Copyrights
// Always structure app layout first

//chunking 
//code splitting 
//dynamic bulding 
//lazy loading  
//on demand loading of the bundles 
//dynamic import

//lazy loading === dynamic import 
//comes from react library as named import
//in indemand loading react tries to suspend the component loading because the code is not there
//upon on demand loading -> upon render -> suspend loading
//basically its a promise and react will wait for the promise to resolve
//never try to lazy load one component inside another component
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user,setUser] = useState({
    name:"arsh",
    email:"sarshpreet07@gmail.com",
  })
    return (
      // {/* </UserContext.Provider> */}
      // {/* Outlet - Component which gets filled by children's configuration*/}
      // UserContext can be modified using Provider
      //In provider we can override the default value
      //below is the value of provider given by the UserContext
      // we are now updating thaat user by the user above which well get thru an api using useEffect
      //if header was outside the usercontext.provider then the dummy name given in context file will only come 
      //context can modified for smaller portion of the apps 
      //provider value overrides the default value given from context file

   <Provider store = {store}>
        <UserContext.Provider value = {{
        user: user,
        setUser: setUser,
      }}>
            <HeaderComponent />
            <Outlet />
            <Footer />

        </UserContext.Provider>
   </Provider>
    
    );
};
{//Passing about object in children makes about child of app layout}
}
const appRouter = createBrowserRouter([
  {
   path: "/",
   element: <AppLayout/>,
   errorElement:<Error/>,
   children:[
    {
      path: "/",
      element:<Body/>
    },
    {
      path: "/about",
      element:<About />,
      children:[{
        path:"profile", //parentpath/path given here if we write /parent then it will do localhost/profile
        element: <Profile/>,
      }]
    },
    {
      path:"/contact",
      element:<Contact/>,
    },
    {
      path:"/restaurant/:id",
      element:<RestaurantMenu/>,
    },
    {
      path:"/instamart",
      element:
      <Suspense fallback={<Shimmer/>} >
        <Instamart/>
      </Suspense>
    },
    {
      path:"/cart",
      element:<Cart/>

    }
   ]
   }

 ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);  
// passing a react element inside the root
root.render(<RouterProvider router={appRouter}/>);  