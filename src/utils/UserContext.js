import { createContext } from "react";

//takes in some data which is needed all around the application
//context is like usestate for whole big application 
// can be used wherever we wish too 
//is like a user store 
const UserContext = createContext({
   user: {
    name:"Arshpreet Singh",
    email:"sarshpreet07@gmail.com",
},
});

//reacat dev tools dont track userontext name 

UserContext.displayName = "UserContext";

//this way we can debug in the console
export default UserContext;