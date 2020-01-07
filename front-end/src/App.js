import React from 'react';
import ReactDOM from "react-dom";
import {Route, Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';

import PrivateRoute from './utils/privateRoute';
import HomeRestaurants from './components/homeRestaurants';

function App() {
  return (
    <div className="App">
      {/* <Link to='/'>Home</Link> */}
      
      <Route exact path="/login" component ={Login} />
      <Route exact path="/register" component ={Register} />
      <PrivateRoute exact path='/homerestaurants' component={HomeRestaurants}/>
     
    </div>
  );
}

export default App;
