import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import home from '../components/homecss.css';
// import links from './navcss.css';
import styled from 'styled-components';


import AddRestaurant from './addRestaurant';
import RestaurantCard from './restaurantCard';
import axiosWithAuth from '../utils/axiosWithAuth';
import {connect} from 'react-redux';
import EditRestaurantfile from './editRestaurant';
import {deleteRestaurant} from '../actions/restaurantActions'


const CardSection = styled.div`
background-color: #e5e059;
background-image: linear-gradient(147deg, #e5e059 0%, #bdd358 81%);
display:flex;
flex-wrap:wrap;
justify-content: center;
width: 100%;
align-content: space-around;
`;


const Card = styled.div`
background-color:white;
width: 25%;
border-radius: .5rem;
color: #999799;
padding:1rem;
margin: .5rem;
justify-content: center;
// display: flex;
`;


const HomeRestaurants = ({editRestaurant, deleteRestaurant, restar, history}) => {

    const [restaurant,setRestaurant] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
    axiosWithAuth()
    .get('/restaurants')
    .then(res => {
        
        // const info = res.data.filter(p =>
        // p.id.toLowerCase().includes(query.toLowerCase()),
        // setRestaurant(info))
        setRestaurant(res.data)
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
        <div className="header-cont">
            <h2 className="home-header-one">Welcome Back!</h2>

            <form>
                <input 
                className="search-bar"
                type="text"
                onChange={handleInputChange}
                value={query}
                name="name"
                placeholder="Search Restaurant"
                autoComplete="off"
                />
            </form>
        
            {/* <Link className='res-link' to={'/addrestaurant'}>Add Restaurant</Link> */}
            </div>
            <AddRestaurant/>
            <RestaurantCard/>
        <CardSection>

        {restaurant.map(r => {
            return (
            <Card>
                <h3 className="name-string">{r.name}</h3>
                <h5>Cuisine: {r.cuisine}</h5>
                <h5>Location: {r.location}</h5>
                <h5>Hours: {r.opens}am - {r.closes}pm</h5>
                <h5>Rating: {r.rating}</h5>

    
                <Link className="card-link" to={`/editrestaurant/${r.id}`}>Edit</Link>
                <button className="card-button" onClick={() => handleDelete(r.id)}>Delete</button>
                <Link className="card-link" to={'/addreview'}>Add Review</Link>
                <Link className="home-link" to={'/review'}>View Review</Link>
                
            </Card>
            )
        })}
        </CardSection>

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