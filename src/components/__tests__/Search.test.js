import Body from "../Body";
import {render, waitFor,fireEvent} from "@testing-library/react";
import store from "../../utils/store";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import {RESTAURANT_DATA} from "../../mocks/data";
import "@testing-library/jest-dom";


//to mock the fetch 
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA);
        }, 
    });
});

test("Shimmer should load on Homepage", () => {

    //Load header
    const body = render(
        <StaticRouter>
       <Provider store={store}> 
          <Body /> 
        </Provider>
        </StaticRouter>
        );

        //console.log(body);

    const shimmer = body.getByTestId("shimmer");

    expect(shimmer.children.length).toBe(10);
   
    console.log(shimmer);
        
   
});


test("Restaurants should load on Homepage", async() => {

    //Load header
    const body = render(
        <StaticRouter>
       <Provider store={store}> 
          <Body /> 
        </Provider>
        </StaticRouter>
        );

        //console.log(body);

    await waitFor(() => expect(body.getByTestId("search-btn")));

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(15);
   
  
        
   
});


test("Search for food string on Homepage", async() => {

    //Load header
    const body = render(
        <StaticRouter>
       <Provider store={store}> 
          <Body /> 
        </Provider>
        </StaticRouter>
        );

        //console.log(body);

    await waitFor(() => expect(body.getByTestId("search-btn")));

    const input = body.getByTestId("search-input");

    fireEvent.change(input, {target:{
        value:"fusion",
    }
});
    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);
    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(1);
   
});
