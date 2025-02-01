import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import  {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header =()=> {

    let [logstate, updateLogState]=useState("Login")
    const onlineStatus=useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container"> 
            <Link to={"/"}>
                <img className="logo"src={LOGO_URL} alt="logo"/>
            </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status:{onlineStatus? "🟢": "🔴"}
                    </li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
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

