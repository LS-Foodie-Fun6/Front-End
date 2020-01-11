import axios from 'axios';
import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_RESTAURANT = "FETCH_RESTAURANT"
export const FETCH_RESTAURANT_SUCCESS = "FETCH_RESTAURANT_SUCCESS"
export const FETCH_RESTAURANT_FAIL = "FETCH_RESTAURANT_FAIL"

export const UPDATE_RESTAURANT = "UPDATE_RESTAURANT"
export const UPDATE_RESTAURANT_FAIL = "UPDATE_RESTAURANT_FAIL"

export const DELETE_RESTAURANT = "DELETE_RESTAURANT"
export const DELETE_RESTAURANT_FAIL = "DELETE_RESTAURANT_FAIL" 




// NEED TO ADD ENDPOINTS


///////// CREATE A RESTAURANT

export const createRestaurant = (Restaurant) => dispatch => {
    dispatch({type: FETCH_RESTAURANT});
    console.log(Restaurant)
    axiosWithAuth()
    .post('/restaurants/add', Restaurant)
    .then(res => {
        console.log(res.data, 'dataaa')
        dispatch({
            type: FETCH_RESTAURANT_SUCCESS,
            //payload: res.data
        });
        // localStorage.setItem('token', res.data);
        //props.history.push('/');
      })
      .catch(error => {
        console.log(error);
        dispatch({
            type: FETCH_RESTAURANT_FAIL,
            });
        });
}


////////////////////////////////////////////////////////
//////////////// FETCH RESTAURANT /////////////////////////////
////////////////////////////////////////////////////////

export const fetchRestaurant = id => dispatch => {
    dispatch({type: FETCH_RESTAURANT});
    axiosWithAuth()
        // NEED id? -> .get(`/restaurants/${id}`)
        .get(`/restaurants`)
        .then(response => {
        dispatch({
            type: FETCH_RESTAURANT_SUCCESS,
            payload: response.data
        });
        })

        .catch(error => {
        console.log(error);
        dispatch({
            type: FETCH_RESTAURANT_FAIL,           
            });
        });
    };

////////////////////////////////////////////////////////
//////////////// EDIT RESTAURANT /////////////////////////////
////////////////////////////////////////////////////////

export const editRestaurant = (id, user ) => dispatch => {
    // const payload = {
    //     name: user.name,
    //     cuisine: user.cuisine,
    //     location: user.location,
    //     opens: user.opens,
    //     closes: user.closes,
    //     rating: user.rating,
    //       //photos: null
    // }
console.log(user, 'RESTAURANT DATA')
    axiosWithAuth()
        .put(`/restaurants/${id}`, user)
        .then(res => {
            console.log(res.data)
        dispatch({
            type: UPDATE_RESTAURANT, 
        });
    })
        .catch(error => {
        console.log(error);
        dispatch({
        type: UPDATE_RESTAURANT_FAIL,
        });
    });
    };

/////////////////////////////////////////////////////////
/////////////// DELETE USER   ///////////////////////////
////////////////////////////////////////////////////////

export const deleteRestaurant = id => dispatch => {
    return axiosWithAuth()
        .delete(`/restaurants/${id}`)
        .then(response => {
            console.log(response)
            // localStorage.removeItem('token');
              
        dispatch({
            type: DELETE_RESTAURANT, 
        });
        })
        .catch(error => {
        console.log(error);
        dispatch({
        type: DELETE_RESTAURANT_FAIL,
        });
    });
}