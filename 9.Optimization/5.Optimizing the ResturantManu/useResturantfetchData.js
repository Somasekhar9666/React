import { useEffect, useState } from "react";
import { MENU_RESTUARANT_URL } from "../utils/constants";


const useResturantfetchData= (resId)=>{

    const [resData, setResData] =useState(null);


    useEffect(()=>{

        fetchData();

    },[]);


    const fetchData= async ()=>{
        const data = await fetch(MENU_RESTUARANT_URL+resId);
        const json =await data.json();
        setResData(json.data)
    };
    return resData;
}

 export default useResturantfetchData;