import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Homelink from '../components/homecss.css';
// import links from './navcss.css';
import styled from 'styled-components';


import AddRestaurant from './addRestaurant';
import RestaurantCard from './restaurantCard';
import axiosWithAuth from '../utils/axiosWithAuth';
import {connect} from 'react-redux';
import EditRestaurantfile from './editRestaurant';
import {deleteRestaurant} from '../actions/restaurantActions'




const HomeRestaurants = ({editRestaurant, deleteRestaurant, restar, history}) => {

    const [restaurant,setRestaurant] = useState([]);

    useEffect(() => {

    axiosWithAuth()
    .get('/restaurants')
    .then(res => {
        setRestaurant(res.data)
        console.log(res.data, 'restaurant list')
    })
    .catch(err => {
        console.log(err)

    }) 
    },[])
    
    const handleDelete = id => {

        deleteRestaurant(id)
        setTimeout(()=> {history.push('/homerestaurants')} , 1000)
    }

    const handleUpdate = (e ) => {
        //editRestaurant(e.target.id, )
    }
// 1. edit form - restaurant data
// 2. edit form will calll edit restaurant
// 3. take in id and changes.
    return(
        <div>
            <div className="header-cont">
            <h2 className="header">Welcome Back!</h2>
        
            <Link className='res-link' to={'/addrestaurant'}>Add Restaurant</Link>
            </div>
            <AddRestaurant/>
            <RestaurantCard/>
            
          {restaurant.map(r => {
            return (
            <div>
                <h2>NAME:</h2> <h3>{r.name}</h3>
                <h2>CUISINE:</h2><h3>{r.cuisine}</h3>
                <h2>LOCATION:</h2><h3>{r.location}</h3>

                <button className="button"><Link to={`/editrestaurant/${r.id}`}>Edit Rest</Link></button>
                {/* <button onClick={(e) => handleUpdate(e,restar)}>Edit Restaurant</button> */}
                <button onClick={() => handleDelete(r.id)}>Delete Restaurant</button>
            </div>
            )
           })}

        </div>
    )
}


const mapStatetoProps = state => {
    return {
        restrantOnProps: state.restaurantReducer
    }
  }

export default connect(
  mapStatetoProps,
  {deleteRestaurant}
)(HomeRestaurants);