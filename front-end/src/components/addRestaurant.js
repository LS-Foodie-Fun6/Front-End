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
      
    
    // const handleDelete = e => {
    //     props.deleteRestaurant(e.target.id)
    // }

    // const handleUpdate = (e, _changes) => {
    //     props.editRestaurant(e.target.id, _changes)
    // }


  
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

        
          {/* <button><Link to={'/homerestaurants'}>Home Restaurants</Link></button> */}
          <button className="button">Add Restaurant</button>
          {/* <button onClick={(e) => handleUpdate(e,restrant)}>Edit Restaurant</button> */}
          {/* <button onClick={handleDelete}>Delete Restaurant</button> */}
        </form>

        <div>
        {/* IS THIS NOT WORKING  B/C I DONT HAVE ANY RESTAURANTS YET TO MAP OVER?? */}
          {/* <h1>Upon fill out:</h1> 
            <h2>1. create a - RestaurantCard</h2>  */}

          
        {/* {restrant.map(restar => {
          return <RestaurantCard key={restar.id} restar1={restar}/>
        })} */}


      {/* {restaurants2.map(restar => {
        return<div className="restCard">
              <h3>NAME: {restar.name}</h3>
              <h3>CUISINE: {restar.cuisine}</h3>
              <h3>LOCATION: {restar.location}</h3>
              <h3>OPENS: {restar.opens}</h3>
              <h3>CLOSES: {restar.closes}</h3>
              <h3>RATING: {restar.rating}</h3>
              </div>
        })}  */}


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