import React from "react";

const RestaurantCard = ({restar}) => {
    
    return (
    <div>
        <h1>RESTAURANT CARD</h1>
    <h3>{restar.name}</h3>
    <h3>{restar.cuisine}</h3>
    <h3>{restar.location}</h3>
    

    </div>
        )
    }

    
export default RestaurantCard