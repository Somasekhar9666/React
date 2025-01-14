import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import  Header from "./src/components/Header"
import Body from "./src/components/Body";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"






const WholeApp= ()=> {
           return ( 
           <div className="app">
                <Header/> 
                <Outlet/>                      {/* This will take care  of the children routing as the URL matches */}
            </div>
        );
    };






const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<WholeApp/>,
        children:[

            {
                path:"/",
                element:<body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ],
        errorElemnet:<Error/>
        
    
    }

])




// Render  paragraph(a unifiefd React Component)
const root = ReactDOM.createRoot(document.getElementById("root1"));



root.render(<RouterProvider router={appRouter}/>);                                                                  // intially rendering the router through the react provider 






