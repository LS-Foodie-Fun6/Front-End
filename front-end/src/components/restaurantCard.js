import React from "react";
import {Link} from 'react-router-dom';
import card from '../components/cardcss.css';

const RestaurantCard = ({editRestaurant,restar}) => {
    

    const handleUpdate = (e, _changes) => {
        editRestaurant(e.target.id, _changes)
    }


    return (
        <div>
        <div className="card-header">
            <h1>Restaurants</h1>
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
    
{/* 
        <button className="card-button"><Link to={'/review'}>Add Review</Link></button>
        <button className="card-button" onClick={(e) => handleUpdate(e,restar)}>Edit Restaurant</button> */}
     {/* <button><Link to={'/homerestaurants'}>Home Restaurants</Link></button> */}

    </div>
    </div> 
        )
    }

    
export default RestaurantCard;