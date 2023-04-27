import HeaderComponent from "../Header";
import {render} from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";
import {RESTAURANT_DATA} from "./data";

test("Logo should load on rendering header", () => {

    //Load header
    const header = render(
        <StaticRouter>
       <Provider store={store}> 
          <Body /> 
        </Provider>
        </StaticRouter>
        );

        console.log(header);

        const logo = header.getAllByTestId("logo");

        console.log(logo[0]);

        expect(logo[0].src).toBe("https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg");
   
});

test("Cart should have zero items", () => {

    //Load header
    const header = render(
        <StaticRouter>
       <Provider store={store}> 
          <HeaderComponent /> 
        </Provider>
        </StaticRouter>
        );

        console.log(header);

        const cart = header.getByTestId("cart");


        expect(cart.innerHTML).toBe("<a href=\"/cart\">CART - 0 items </a>");
   
});

 {/* //this render function will create small container 
    // where component can be loaded
    //console.log(header);
    //check if logo is loaded  */}