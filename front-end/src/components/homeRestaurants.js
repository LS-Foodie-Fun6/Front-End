import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import home from '../components/homecss.css';
import links from './navcss.css';
import styled from 'styled-components';


import AddRestaurant from './addRestaurant';
import RestaurantCard from './restaurantCard';
import axiosWithAuth from '../utils/axiosWithAuth';
import {connect} from 'react-redux';
import EditRestaurantfile from './editRestaurant';
import {deleteRestaurant} from '../actions/restaurantActions'


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


const HomeRestaurants = ({editRestaurant, deleteRestaurant, restar, history}) => {

    const [restaurant,setRestaurant] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
    axiosWithAuth()
    .get('/restaurants')
    .then(res => {
        
        const info = res.data.filter(p =>
        p.id.toLowerCase().includes(query.toLowerCase()),
        setRestaurant(info))
        // setRestaurant(res.data)
        console.log(res.data, 'restaurant list')
    })
    .catch(err => {
        console.log(err)

    }) 
    },[query])

    
    
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

const handleInputChange = event => {
    setQuery(event.target.value);
  };
    return(
        <div>
            <Header>
            <h2 className="header">Home</h2>

            <form>
                <input className="Input"
                type="text"
                onChange={handleInputChange}
                value={query}
                name="name"
                placeholder="Search Restaurant"
                autoComplete="off"
                />
            </form>
        
            <Link className='links' to={'/addrestaurant'}>Add Restaurant</Link>
            </Header>
            <AddRestaurant/>
            {/* <RestaurantCard/> */}
        
          {restaurant.map(r => {
            return (
            <div>
                <h2>NAME:</h2> <h3>{r.name}</h3>
                <h2>CUISINE:</h2><h3>{r.cuisine}</h3>
                <h2>LOCATION:</h2><h3>{r.location}</h3>
                <h2>OPENS:</h2><h3>{r.opens}</h3>
                <h2>CLOSES:</h2><h3>{r.closes}</h3>
                <h2>RATING:</h2><h3>{r.rating}</h3>

                <button className="button"><Link to={`/editrestaurant/${r.id}`}>Edit Restaurant</Link></button>
                
                <button className="button"><Link to={'/addreview'}>Add a Review</Link></button>
                <button className="button"><Link to={'/review'}>Review</Link></button>
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