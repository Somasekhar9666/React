import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_RESTUARANT_URL } from "../utils/constants";

const RestaurantMenu=()=>{
    useEffect(()=>{
        fetchMenu();

}, []);


{/*Why the {} in useEffect Causes Issues

In your original code:
            useEffect({
                fetchMenu();
            }, []);

The {} is interpreted as an object literal. The code inside the curly braces (fetchMenu();) is treated as a statement inside an object definition, not a function body. This results in a syntax error because an object literal cannot be executed as a function.*/}

const[resData ,setresData] =useState(null);
const {resId}=useParams()

const fetchMenu=async ()=>{
                            const data=await fetch(MENU_RESTUARANT_URL+resId);
                            const json= await data.json();

                            setresData(json.data);   
};


   
if  (resData===null) {
    return <Shimmer/> 
}  

console.log(resData);

{/*

1.
return resData===null ? <Shimmer/> : 
    ( <div>
        <h1>{name}</h1>
        .
        .
        .
    </div> 


2.
if  (resData===null) {
    return <Shimmer/> 
}   
const {name,costForTwo,locality,cloudinaryImageId,areaName,id,avgRating,cuisines} =resData?.cards?.[2]?.card?.card?.info || null

return(
    <div>
        <h1>{name}</h1>
        .
        .
        .
    </div> 
        



why 2 snippet works fine , not the 1 st?

    In the Working Code:
                        The fetchMenu function is called in the useEffect hook on mount ([] dependency).
                        
                        *The component doesn't directly attempt to access resData immediately after the API call. Instead, it waits for the state (resData) to update and conditionally renders the <Shimmer /> until resData is populated.
                        
                        *This ensures that the data is available before destructuring or accessing properties, avoiding errors caused by accessing properties of null or undefined.




    In the Earlier Code:
                        The console.log(resData.cards[2].card.card.info.name) is executed outside of the useEffect, before the state (resData) is updated. This causes an error because resData is initially null, and you are trying to access a deeply nested property (cards[2].card.card.info.name) on a null value.
                        
                        *Accessing properties of null leads to a runtime error, making the component fail to render properly.

*/}











const {name,costForTwo,locality,cloudinaryImageId,areaName,id,avgRating,cuisines} =resData?.cards?.[2]?.card?.card?.info || null







const AuthenticHyderabadiDumBiryanis =resData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.categories?.[0]?.itemCards     || [];

console.log(AuthenticHyderabadiDumBiryanis)




return(
    <div>
        <h1>{name}</h1>
        <h2>{costForTwo}</h2>
        <h3>{locality}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h5>{avgRating}</h5>
        <h6>{areaName}</h6>
        <h1> Menu:</h1>
        <ul>
            {AuthenticHyderabadiDumBiryanis.map((item)=><li key={item.card.info.id}>{item.card.info.name}-{"  Rs."}-{item.card.info.price/100}</li>)}
            
        </ul>
    </div> 
)
}


export default RestaurantMenu