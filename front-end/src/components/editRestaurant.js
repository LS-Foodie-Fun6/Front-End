import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import edit from "../components/editcss.css"
import styled from 'styled-components';


import {createRestaurant, deleteRestaurant, editRestaurant, fetchRestaurant} from '../actions/restaurantActions'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import RestaurantCard from './restaurantCard';

// import {useDispatch} from 'react-redux';

const EditContainer = styled.div`
    background-color: #e5e059;
    background-image: linear-gradient(147deg, #e5e059 0%, #bdd358 81%); 
    margin: 2rem;
    height: 18rem;
    width: 35rem;
    border-radius: 1rem;
    flex-wrap:wrap;
    align-items:center;
    padding: 1rem;
    justify-content: center;
    box-shadow: 2px 5px 20px #637a7d;
    `;


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
     


console.log(editRest, '*********')
    return (
     
      <div className="edit-page">
      <EditContainer>
          <h1 className='edit-header'>Edit Restaurant</h1>
        <form className="form" onSubmit={(e) => handleUpdate(e,editRest)}>
          <input
            className="input"
            type="text"
            placeholder="Add Restaurant"
            name="name"
            value={editRest && editRest.name}
            onChange={handleChange}
          />

          <input
          className="input"
            type="text"
            placeholder="Cuisine"
            name="cuisine"
            value={editRest && editRest.cuisine}
            onChange={handleChange}
          />  


          <input
          className="input"
            type="text"
            placeholder="Location"
            name="location"
            value={editRest && editRest.location}
            onChange={handleChange}
          />  


          <input
          className="input"
            type="text"
            placeholder="Opens"
            name="opens"
            value={editRest && editRest.opens}
            onChange={handleChange}
          />

          <input
          className="input"
            type="number"
            placeholder="Closes"
            name="closes"
            value={editRest && editRest.closes}
            onChange={handleChange}
          />

          <input
            className="input"
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

        
      
          
        <button className="edit-button">Submit</button>
        </form>

        <div>
        

       


        </div>

      

        </EditContainer> 
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