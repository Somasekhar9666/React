import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
// WholeApp component that will render Header and Outlet
const WholeApp = () => {
    return (
        <div className="app">
            <Header />
            <Outlet /> {/* This will render child routes */}
        </div>
    );
};

// Define routes using createBrowserRouter
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <WholeApp />, // Render WholeApp for the root route
        errorElement: <Error />, // Render Error component for invalid routes
        children: [
            {
                path: "/", // Default child route for "/"
                element: <Body />, // Render Body component for the root path
            },
            {
                path: "about", // Child route for "/about"
                element: <About />,
            },
            {
                path: "contact", // Child route for "/contact"
                element: <Contact />,
            },
            {
                path: "/resturants/:resId",                                                               // it is like http://localhost:1234/resturants/x  Ex: http://localhost:1234/resturants/143 
                element: <RestaurantMenu/>,
            },
        ],
    },
]);

// Render the app with RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(<RouterProvider router={appRouter} />);
