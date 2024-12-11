import ResturantCard from "./ResturantCard"
import SwiggyDataList from "../utils/mockData"


const  Body= ()=>{
    return (
        <div className="body">
            <div className="search-bar">This placeholder for Searchbar</div>
            <div className="rest-container">
                  {SwiggyDataList.map((resturant) => (<ResturantCard  key ={resturant.card.card.info.id} Details={resturant}/>))}
                    
            </div>
        </div>

    )
}



export default Body