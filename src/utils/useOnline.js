import React, { useState, useEffect} from 'react'
const useOnline = () => {

    const [isOnline,setIsOnline] = useState(true);

    //online offline in javascript
    //event listener has to be tracked once 
    //thus we will use useEffect
    useEffect(()=>{

        const handleOnline = () => {
            setIsOnline(true);    
        }

        const handleOffline = () => {
            setIsOnline(false);
        }
        window.addEventListener("online", handleOnline
            //this code will trigger when you go online
       )

        window.addEventListener("offline",handleOffline
            //this code will trigger when you go online
        )

        return () => {
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }


    },[]);

  

  return isOnline; // returns true and false;
}

export default useOnline;