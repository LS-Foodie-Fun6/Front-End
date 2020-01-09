import React from "react";
import {Link} from 'react-router-dom';

const RestaurantCard = ({restar}) => {
    
    return (
    <div className="restCard">
        <h1>RESTAURANT CARD</h1>
        {/* <h3>{restar.name}</h3>
        <h3>{restar.cuisine}</h3>
        <h3>{restar.location}</h3>
        <h3>{restar.opens}</h3>
        <h3>{restar.closes}</h3>
        <h3>{restar.rating}</h3> */}
    
 
    <button className="button"><Link to={'/review'}>Add Review</Link></button>
     {/* <button><Link to={'/homerestaurants'}>Home Restaurants</Link></button> */}

    </div>
        )
    }

    
export default RestaurantCard