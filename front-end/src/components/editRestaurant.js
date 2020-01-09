import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import {createRestaurant, deleteRestaurant, editRestaurant, fetchRestaurant} from '../actions/restaurantActions'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import RestaurantCard from './restaurantCard';

// import {useDispatch} from 'react-redux';

const EditRestaurant = ({restar,editRestaurant,fetchRestaurant, match, restrantOnProps}) => {
     //console.log(restar, 'restar!')
        console.log(restrantOnProps)
     const [editRest, setEditRest] = useState({})
    const {restaurant} = restrantOnProps

    const handleUpdate = (e, changes) => {
        e.preventDefault();
        const payload = {
            name: changes.name,
            cuisine: changes.cuisine,
            location: changes.location,
            opens: changes.opens,
            closes: changes.closes,
            rating: changes.rating,
              //photos: null
        }
        editRestaurant(match.params.id,payload)
    }
    useEffect(() => {
        fetchRestaurant()
        console.log(restaurant, 'restttt')
    },[])
       
    useEffect(() => {
        const itemToEdit = restaurant.length && restaurant.find((rest, index) => {
console.log(rest)
console.log(match.params.id)
         return   rest.id === parseInt( match.params.id )
        }      
            )
        console.log(itemToEdit)
        if (itemToEdit) {
           
        }
        setEditRest(itemToEdit)   
        console.log(editRest)
    },[])
    
    const handleChange = e => {
        setEditRest({
            ...editRest,
            [e.target.name]: e.target.value
        }); 
    };
     
    // const [restrant, setRestrant] = useState({
        
    //     name: editRest && editRest.name,
    //     cuisine: editRest && editRest.cuisine,
    //     location: editRest && editRest.location,
    //       opens: editRest && editRest.opens,
    //        closes: editRest && editRest.closes,
    //       rating: editRest && editRest.rating,
    //       // photos: null
  
    //    });

console.log(editRest, '*********')
    return (
     

      <div>
          <h1>Edit Restaurant</h1>
        <form onSubmit={(e) => handleUpdate(e,editRest)}>
          <input
            type="text"
            placeholder="Add Restaurant"
            name="name"
            value={editRest && editRest.name}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Cuisine"
            name="cuisine"
            value={editRest && editRest.cuisine}
            onChange={handleChange}
          />  


          <input
            type="text"
            placeholder="Location"
            name="location"
            value={editRest && editRest.location}
            onChange={handleChange}
          />  


          <input
            type="text"
            placeholder="Opens"
            name="opens"
            value={editRest && editRest.opens}
            onChange={handleChange}
          />

 	        <input
            type="number"
            placeholder="Closes"
            name="closes"
            value={editRest && editRest.closes}
            onChange={handleChange}
          />

	<input
            type="number"
            placeholder="Rating"
            name="rating"
            value={editRest && editRest.rating}
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
          
        <button className="button">Update Restaurant</button>
        </form>

        <div>
        

          
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
        restrantOnProps: state.restaurantReducer
    }
  }

export default connect(
  mapStatetoProps,
  {createRestaurant,deleteRestaurant, editRestaurant,fetchRestaurant}
)(EditRestaurant);