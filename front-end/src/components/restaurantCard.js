import React from "react";
import {Link} from 'react-router-dom';

const RestaurantCard = ({editRestaurant,restar}) => {
    

    const handleUpdate = (e, _changes) => {
        editRestaurant(e.target.id, _changes)
    }


    return (
    <div className="restCard">
        <h1>RESTAURANT CARD</h1>
        {/* <h3>{restar.name}</h3>
        <h3>{restar.cuisine}</h3>
        <h3>{restar.location}</h3>
        <h3>{restar.opens}</h3>
        <h3>{restar.closes}</h3>
        <h3>{restar.rating}</h3> */}

        
            {/* <div>
                <h2>NAME: El Serape</h2>
                <h2>CUISINE: Mexican </h2>
                <h2>LOCATION: Blue Bell, PA</h2>
                <h2>OPENS: 11am</h2>
                <h2>CLOSES:10pm</h2>
                <h2>RATING: 4</h2>
           </div> */}
    
 
    <button className="button"><Link to={'/review'}>Add Review</Link></button>
    <button onClick={(e) => handleUpdate(e,restar)}>Edit Restaurant</button>
     {/* <button><Link to={'/homerestaurants'}>Home Restaurants</Link></button> */}

    </div>
        )
    }

    
export default RestaurantCard