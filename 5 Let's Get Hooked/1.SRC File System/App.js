import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./src/components/Header";
import Body from "./src/components/Body";






const WholeApp= ()=> {
           return ( 
           <div className="app">
                <Header/> 
                <Body/>
            </div>
        );
    };
// Render  paragraph(a unifiefd React Component)
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(<WholeApp/>);






