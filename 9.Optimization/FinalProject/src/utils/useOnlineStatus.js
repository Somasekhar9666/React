import { useEffect, useState } from "react"


const useOnlineStatus=()=>{

    const [internetStatus,setInternetStatus]=useState(true)    // assume that user is online so intialize as true

    // to get the User's Internet Status we use a specific event listner that is given by  "Browser Window Object"--------------> "Window:online" event(search in web to know about more info)


    //* we are putting this Event Listner when ever the entire application is Intially rendred , so that it will keep track of the User Internet status durring the entire Session

    //to put that event listner on intial render we use "useEffect" with empty dependcy array

    useEffect(()=>{
        window.addEventListener("online", ()=>{setInternetStatus(true)});

        window.addEventListener("offline", ()=>{setInternetStatus(false)});

    },[])

    //boolean value
    return internetStatus                  //you can use this hook in body.js at render function , based on the conditional renduring : "if (onlineStatus===false) return <h1>Plase Check internet Connection</h1>"" or a Green Dot ...
}



export default useOnlineStatus
