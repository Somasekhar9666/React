import {SWIGGY_CDN_IMAGE_URL} from "../utils/constants"





  const ResturantCard= (props)=>{


    
    const { Details } = props;
  


    const {cloudinaryImageId,
            name,
            avgRating,
            cuisines,
            loyaltyDiscoverPresentationInfo
          }= Details?.info || {};     // here we get entire object of each resturnat , then we are extracting only about info , which had all details 
          
          
  

      return (
          <div className="res-card" style={{backgrounfColor: "#f0f0f0"}}> {/*In line CSS */}
              <img 
              className="res-logo"
              alt="res-logo" 
              /*src={SWIGGY_CDN_IMAGE_URL/${cloudinaryImageId}}*/
              /*The error occurs because SWIGGY_CDN_IMAGE_URL is treated as a function due to backticks (`) being mistakenly used in its srcattribute. In JavaScript, backticks create a **template literal**, and using${}inside them expects variables or expressions. However,SWIGGY_CDN_IMAGE_URL` is a string constant, not a function. */
              src={`${SWIGGY_CDN_IMAGE_URL}/${cloudinaryImageId}`} 
              />
              {console.log(console.log(loyaltyDiscoverPresentationInfo?.freedelMessage))}

              {loyaltyDiscoverPresentationInfo ? (
      <h4>{loyaltyDiscoverPresentationInfo.freedelMessage}</h4>)
      : 
      (<h4>No delivery message available</h4>)}




              <h3 >{name}</h3>
              <h4>{cuisines.join(',')}</h4>
              <h4>Rating {avgRating}</h4>
              <h4>{loyaltyDiscoverPresentationInfo?.freedelMessage}</h4>
          </div>
      )
  }
  

export default ResturantCard