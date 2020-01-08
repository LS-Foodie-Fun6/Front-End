import React from 'react';
import {Link} from 'react-router-dom';

const homeRestaurants = () => {
    return(
        <div>
            HOME PAGE
        
            <button className="button"><Link to={'/addrestaurant'}>Add Restaurant</Link></button>

            
        </div>
    )
}
export default homeRestaurants;