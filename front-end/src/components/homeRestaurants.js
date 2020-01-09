import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import AddRestaurant from './addRestaurant';
import RestaurantCard from './restaurantCard';
import axiosWithAuth from '../utils/axiosWithAuth';

const homeRestaurants = () => {

    //const [restaurant,setRestaurant] = useState([]);

    // axiosWithAuth()
    // .get('/restaurants')
    // .then(res => {
    //     setRestaurant(res.data)
    //     console.log(res.data, 'restaurant list')
    // })
    // .catch(err => {
    //     console.log(err)
    // })


    return(
        <div>
            HOME PAGE
        
            <button className="button"><Link to={'/addrestaurant'}>Add Restaurant</Link></button>
            <AddRestaurant/>
            <RestaurantCard/>
            
           {/* {restaurant.map(r => {
            <div>
                <h2>NAME:</h2> <h3>{r.name}</h3>
                <h2>CUISINE:</h2><h3>{r.cuisine}</h3>
                <h2>LOCATION:</h2><h3>{r.location}</h3>
            </div>
           })} */}

           
            
        </div>
    )
}
export default homeRestaurants;