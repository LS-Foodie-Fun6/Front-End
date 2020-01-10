import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import {createReview, deleteReview, editReview, fetchReview} from '../actions/reviewActions'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import RestaurantCard from './restaurantCard';

// import {useDispatch} from 'react-redux';

const EditRestaurant = ({restar,editReview,fetchReview, match, restrantOnProps}) => {
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
        editReview(match.params.id,payload)
    }
    useEffect(() => {
        fetchReview()
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
     



    return (
     

      <div>
          <h1>Edit Review</h1>
          <form onSubmit={(e) => handleUpdate(e,editRest)}>
            <input
                type="text"
                placeholder="Cuisine"
                name="cuisine"
                value={editRest && editRest.cuisine}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Menu Item Name"
                name="menuItemName"
                value={editRest && editRest.menuItemName}
                onChange={handleChange}
            />

            <input
                type="number"
                placeholder="Price"
                name="price"
                value={editRest && editRest.price}
                onChange={handleChange}
            />

            <input
                type="number"
                placeholder="Rating"
                name="rating"
                value={editRest && editRest.rating}
                onChange={handleChange}
            />

            <input
                type="textarea"
                placeholder="Review"
                name="review"
                value={editRest && editRest.review}
                onChange={handleChange}
            />


	{/* <input
            type="img"
            placeholder="Image"
            name="photos"
            value={restrant.photos}
            onChange={handleChange}
          /> */}

        
      
          
        <button className="button">Update Restaurant</button>
        </form>

        <div>
        

       


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
  {createReview,deleteReview, editReview,fetchReview}
)(EditRestaurant);