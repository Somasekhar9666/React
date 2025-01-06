import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { useState } from "react"

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
                    <li>About</li>
                    <li>contact</li>
                    <li>cart</li>
                    {/*Rendering button with conditioanl  */}
                    <button className="header-logout"  onClick={()=>(logstate==="Login" ? updateLogState("Logout") : updateLogState("Login"))}>{logstate}</button>
                </ul>
            </div>
        </div>
    
    )

}

export default Header

