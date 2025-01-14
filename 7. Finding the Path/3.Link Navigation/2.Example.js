import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import {Link} from "react-router-dom"

export const Header =()=> {

    let [logstate, updateLogState]=useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
            <img 
                className="logo"
                src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>   
                        <a href="\about">About</a>                                                                      {/*Reloads the Entire application  when navigation happens*/}
                    </li>
                    <li>
                        <Link to="/contact">                                                                                 {/*renders the Only Component with updating the Browsers History API */}
                            Contact US
                        </Link>
                    </li>
                    
                    <li>cart</li>
                    {/*Rendering button with conditioanl  */}
                    <button className="header-logout"  onClick={()=>(logstate==="Login" ? updateLogState("Logout") : updateLogState("Login"))}>{logstate}</button>
                </ul>
            </div>
        </div>

       
    
    )

}

export default Header

