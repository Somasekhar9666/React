import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
  const [resList, setResList] = useState([]); // Complete list of restaurants-------------> Original 
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Filtered restaurants -------> Copy for Opeartions 
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4287518&lng=78.3254948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();

      const restaurants =
        jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setResList(restaurants); //  Updating the Original but not Rendering
      setFilteredRestaurants(restaurants); // updading the Copy to so that  all cards are Rendred on Intial rendered
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }



  const onlineStatus=useOnlineStatus();

  if (onlineStatus===false) return <h1>Plase Check Internet Connection</h1>


  if (resList.length === 0) {
    return <Shimmer />;               // Conditional Rendering untill Fetch gets the Data on Intiall rendering
  }





  return (

    <div className="body">
      <div className="filter-btn">
        <button
          className="filter-btn"
          onClick={() => {
            const topRes = resList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(topRes);  // Filtering the Top Resturants only form original (cause if copy is  modified  , this didn't work ) and updating the Copy
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="search-logic">
        <input
          className="search-input"
          type="text"
          value={searchText}
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value);
            if (value === "") {
              setFilteredRestaurants(resList); // Reset to full list if empty
            }
          }}
        />
        
        <button
          className="search-btn"
          onClick={() => {
            const finalRestaurants = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(finalRestaurants);   // Here also Taking Original , Filtering and Updating the Copy , so that oroginal will be Intact.
          }}
        >
          Search
        </button>
      </div>

      <div className="rest-container">
        { 

          filteredRestaurants.map((restaurant) => (   // **always rendering is from Copy , even for intial rendering  we are updating Copy along with Original
          <Link key={restaurant.info.id} to={"/resturants/"+restaurant.info.id}><ResturantCard  Details={restaurant} />  </Link>   //**beacause of the  click with link ,url is changed , immediatly the Resturant card is rendrened with Props */ 
          ))

        }
      </div>
    </div>


  );



};

export default Body;
