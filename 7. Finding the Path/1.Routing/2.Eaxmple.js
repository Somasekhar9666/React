import React from "react";
import ReactDOM from "react-dom/client";
import  Header from "./src/components/Header"
import Body from "./src/components/Body";
import {createBrowserRouter, RouterProvider} from "react-router-dom"






const WholeApp= ()=> {
           return ( 
           <div className="app">
                <Header/> 
                <Body/>
            </div>
        );
    };






const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<WholeApp/>
    },
                                                                                    //defining Routes so that when url changes the specified compomnet is renderd
    {
        path:"/about",                  
        element:<About/>
    }

])




// Render  paragraph(a unifiefd React Component)
const root = ReactDOM.createRoot(document.getElementById("root1"));



root.render(<RouterProvider router={appRouter}/>);                                                                  // intially rendering the router through the react provider 






