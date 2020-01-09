import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import home from '../components/homecss.css';
import links from './navcss.css';
import styled from 'styled-components';


import AddRestaurant from './addRestaurant';
import RestaurantCard from './restaurantCard';
import axiosWithAuth from '../utils/axiosWithAuth';


const Header = styled.div`
    background-color: #bdd358;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
`;

// const Buttons = styled.button`
//     background-color: #e5625e;
//     border: none;
//     padding: .75rem;
//     border-radius: 1rem;
//     font-size: 1rem;
// `;

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
            <Header>
            <h2 className="header">Home</h2>
        
            <Link className='links' to={'/addrestaurant'}>Add Restaurant</Link>
            </Header>
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