import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import {createRestaurant, deleteRestaurant, editRestaurant} from '../actions/restaurantActions'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import RestaurantCard from './restaurantCard';

// import {useDispatch} from 'react-redux';

const AddRestaurant = (props) => {
      console.log(props)
     const [restrant, setRestrant] = useState({
        
      name: '',
      cuisine: '',
      location: '',
	    opens: 1,
 	    closes: 2,
	    rating: 3,
	    // photos: null

     });

 
    const handleSubmit = e => {
        e.preventDefault();
        console.log(restrant, 'add restaurant')
      props.createRestaurant(restrant)
    }
      
    
    const handleDelete = resta => {
        (deleteRestaurant(restrant.id))
    }

    const handleUpdate = resta => {
        (editRestaurant(restrant.id))
    }


  
    const handleChange = e => {
        setRestrant({
            ...restrant,
            [e.target.name]: e.target.value
        }); 
    };
     



    return (
     
	//name, cuisine, location, opens, closes, rating, photos

	//Need Description area??? -  input type = textarea

      <div>
          <h1>Add a Restaurant</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Restaurant"
            name="name"
            value={restrant.name}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Cuisine"
            name="cuisine"
            value={restrant.cuisine}
            onChange={handleChange}
          />  


          <input
            type="text"
            placeholder="Location"
            name="location"
            value={restrant.location}
            onChange={handleChange}
          />  


          <input
            type="text"
            placeholder="Opens"
            name="opens"
            value={restrant.opens}
            onChange={handleChange}
          />

 	        <input
            type="number"
            placeholder="Closes"
            name="closes"
            value={restrant.closes}
            onChange={handleChange}
          />

	<input
            type="number"
            placeholder="Rating"
            name="rating"
            value={restrant.rating}
            onChange={handleChange}
          />

	{/* <input
            type="img"
            placeholder="Image"
            name="photos"
            value={restrant.photos}
            onChange={handleChange}
          /> */}

        
          {/* <button><Link to={'/homerestaurants'}>Add Restaurant</Link></button> */}
          <button>Add Restaurant</button>
          <button onClick={handleUpdate}>Edit Restaurant</button>
          <button onClick={handleDelete}>Delete Restaurant</button>
        </form>

        <div>
        {/* {restrant.map(restar => {
          return <RestaurantCard key={restar.id} restar1={restar}/>
        })} */}
        </div>

      

       
      </div>
    );
  }

  const mapStatetoProps = state => {
    return {
        restrantOnProps: state.restaurant
    }
  }

export default connect(
  mapStatetoProps,
  {createRestaurant,deleteRestaurant, editRestaurant}
)(AddRestaurant);