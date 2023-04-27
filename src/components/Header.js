import { useState,useContext} from "react";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const LoggedUser = () => {
    //API Call to check authentication
    return true;
}


//SPA - Single Page Application 
 
export const Title = () => {
    return(
    <a href="/">
    <img data-testid="logo" 
        className="h-28 p-2"
        alt="logo"
        src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg" 
    />
    </a>
    )
};

const HeaderComponent = () =>{

    //const [isLoggedIn,setIsLoggedIn] = useState(false);
    const {user} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems);
    return(
    
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <Title/>
            <div className="nav-items">
                <ul className="flex py-10 mx-2">
                    <li className="px-2 text-xl"> <Link to="/">HOME </Link></li>
                    <li className="px-2 text-xl"> <Link to="/about">ABOUT</Link></li>
                    {// <a href="/about"> <li>About</li></a>
                    //this will make the entire page reload again
                    //{user.name} can be used as we are using use context
                    }
                    <li className="px-2 text-xl"><Link to="/contact">CONTACT</Link></li>
                    <li className="px-2 text-xl"><Link to="/instamart">INSTAMART</Link></li>

                    <li className="px-2 text-xl" data-testid="cart"><Link to="/cart">CART - {cartItems.length} items </Link></li>
                </ul>
            </div>
            {//isLoggedIn ? (
            //<button onClick={()=> setIsLoggedIn(false)}>Logout</button>
            //) : (
            //<button onClick={()=> setIsLoggedIn(true)}>Login</button>
            //)
            //Suppose website crosses threshhold of small device, then make my header purple
            //sm:bg-b small device crossed then: change color to bg-blue
            //benefits of tailwind css
            //less code shipped
            //easy to use
            //no duplicate css
            //bundle size small
            //easy to debug
            //con of using tailwind
            //not all people know tailwind
            }

        </div>

        )
    };

    export default HeaderComponent;