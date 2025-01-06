import ResturantCard from "./ResturantCard"
import SwiggyDataList from "../utils/mockData"
import {useState} from "react"
import { useEffect } from "react"





const  Body= ()=>{

  const [resList,setResList]=useState([])

  
  useEffect(()=>{fetchData()}, [])


  
  //fetchData()
  

  async function fetchData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4287518&lng=78.3254948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json(); // Parse the JSON response
      console.log("Fetched data:", jsonData); // Log the data for debugging
      const restaurants = jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];       //Extracting Entire Resturants array
      console.log(`only resturnats data is: ${restaurants} and type is ${typeof(restaurants)}`)
      setResList(restaurants); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error); // Handle errors
    }
  }



  const fetchData2= async ()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4287518&lng=78.3254948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json=await data.json()
  }
  

  //Conditional Rendering
  if (resList.length===0){
    return <h1>Loading....</h1>                               // Rendering Lodaing Untill UseEffect Fetch call is made 
  }







    return (



        <div className="body">
            <div className="filter-btn">
                <button 
                className="filter-btn" 
                onClick={() => {

                  const topRes=resList.filter((res)=>res.info.avgRating>4.5);
                  
                  setResList(topRes)                                                        // calling the function is like a trigger, react will got to know that Dom is changed ,so that it will re-render the UI

                  console.log("Top Rated Restaurant is:",topRes);

                }}>Top Rated
              </button>
            </div>

  
            
            <div className="rest-container">
              {console.log(resList)}
                  {resList.map(
                                (resturant) => (<ResturantCard  key ={resturant.info.id} Details={resturant}/>)
                              )} 
            </div>
        
        </div>

    )
}




export default Body
