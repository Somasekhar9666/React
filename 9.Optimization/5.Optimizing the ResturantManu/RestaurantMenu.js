import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import {useResturantfetchData} from "./useResturantfetchData"

const RestaurantMenu=()=>{

const {resId}=useParams()

resData = useResturantfetchData(resId)

if  (resData===null) {
    return <Shimmer/> 
}  

console.log(resData);

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