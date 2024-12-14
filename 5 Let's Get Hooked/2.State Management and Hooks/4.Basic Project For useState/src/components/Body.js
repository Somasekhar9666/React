import ResturantCard from "./ResturantCard"
import SwiggyDataList from "../utils/mockData"
import {useState} from "react"




const  Body= ()=>{

  const array= useState([
    {
      "card": {
        "id": "434623",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/14/2d590619-cc13-4895-b07e-3257a5f11580_711d044b-7179-4745-94a0-9af316c47331.jpg",
        "name": "The Spicy Venue",
        "avgRating": 4.4,
        "cuisines": [
              "Biryani",
              "Andhra",
              "North Indian",
              "Kebabs",
              "Mughlai",
              "Tandoor"
            ],}
    },
        
    {"card": 
      {
        "id": "70891",
            "name": "Vasista's Srilakshmi",
            "cloudinaryImageId": "f3bf891a0796fe9d9784201f3bf071c0",
            "cuisines": [
              "Biryani",
              "Andhra",
              "Chinese",
              "Mughlai"],
            "avgRating": 7,
        }
    },

    {
      "card": {
        "id": "211703",
        "name": "Balaji Dhaba",
        "cloudinaryImageId": "615cb98234f8cfa1d5eef00aabb156d2",
        "cuisines": [
              "North Indian",
              "Biryani",
              "Chinese"
            ],
            "avgRating": 4.1
        } 
    },

    {
      "card": {
        "id": "845001",
            "name": "Nanamma Ruchulu",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/4/42ac7ee4-d561-4a82-9411-7968081d5abe_a6ceb1d1-e720-44c2-969a-defb6147c4b2.jpeg",
            "cuisines": [
              "Indian",
              "Snacks"
            ],
            "avgRating": 4.1}
      },
 
    {
      "card": {
        "id": "34633",
            "name": "Srikanya",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/7/4e98fc76-53aa-4ab3-b99b-a74d55214dca_b2db7e6f-ff48-4fa4-8170-5adebe2af74c.jpg",
            "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian"
            ],
            "avgRating": 4.2}
          
      },
        
    {
      "card": {

        "id": "1389",
        "name": "Blue Fox",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/23/2549c862-7abb-4c69-8d00-4761b7c5c734_25c6ddcd-d758-4cec-8a16-17c3b92953f9.jpg_compressed",
        "cuisines": [
              "Biryani",
              "Chinese",
              "Tandoor"
            ],
            "avgRating": 4.2
           }}]);

  // same 👇 const [resList,setResList]=arr;

  const resList=array[0]
  const setResList=array[1]



  // or you can directly write like this :const [resList,setResList] =useState(....)     //this is De-Structuring on the Fly

    return (
        <div className="body">
            <div className="filter-btn">
                <button 
                className="filter-btn" 
                onClick={() => {

                  const topRes=resList.filter((res)=>res.card.avgRating>6);
                  
                  setResList(topRes)                                                        // calling the function is like a trigger, react will got to know that Dom is changed ,so that it will re-render the UI

                  console.log("Top Rated Restaurant is:",topRes);

                }}>Top Rated
                </button>
            </div>

  
            <div className="rest-container">
                  {console.log("The Final resturnats are:",resList)}
                  {resList.map((resturant) => (<ResturantCard  key ={resturant.card.id} Details={resturant}/>))} 
            </div>

        </div>

    )
}




export default Body
