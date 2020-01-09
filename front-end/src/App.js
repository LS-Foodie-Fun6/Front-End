import React from 'react';
import ReactDOM from "react-dom";
import {Route, Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import logo from './logo.svg';
import NavBar from './components/navbar';
import './App.css';
import Login from './components/login';
import Register from './components/register';

import PrivateRoute from './utils/privateRoute';
import HomeRestaurants from './components/homeRestaurants';
import addRestaurant from './components/addRestaurant';
import restaurantCard from './components/restaurantCard';
import addReview from './components/addReview';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Link to='/'>Home</Link> */}
      <Route exact path="/" component ={Login} />
      {/* <Route exact path="/login" component ={Login} /> */}
      
      <Route exact path="/register" component ={Register} />
      <PrivateRoute exact path='/homerestaurants' component={HomeRestaurants}/>
      <Route exact path="/addrestaurant" component ={addRestaurant} />
      <Route exact path="/restaurantcard" component ={restaurantCard} />
      <Route exact path="/review" component ={addReview} />
    </div>
  );
}

export default App;
