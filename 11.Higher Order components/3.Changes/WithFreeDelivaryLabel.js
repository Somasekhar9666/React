import ResturantCard from "./ResturantCard";




// input -ResturantCard  ==> ResturantCardWithDeliveryLabel
const WithFreeDelivaryLabel= (ResturantCard) => {
    return (props)=>{

        return (
            <div>
                <label>Free Delivery</label>
                <ResturantCard {...props}/>

            </div>
        )

    }

}

export default WithFreeDelivaryLabel