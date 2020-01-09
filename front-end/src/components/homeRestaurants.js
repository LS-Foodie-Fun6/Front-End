import React from 'react';
import {Link} from 'react-router-dom';
import home from '../components/homecss.css';



const homeRestaurants = () => {
    return(
        <div>
            <h2 className="header">Home Page</h2>
        
            <button className="button"><Link to={'/addrestaurant'}>Add Restaurant</Link></button>

            
        </div>
    )
}
export default homeRestaurants;