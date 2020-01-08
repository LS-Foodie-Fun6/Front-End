import React, {useState} from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

//--- Styled Components ---

//-------------------------


// // --- Login Page Function ---
export default function Login(props) {
// --- useForm ---
    const { register, handleSubmit, errors } = useForm();

    ///////////////////////////////////
    const [user,setUser] = useState({   
        username: '',
        password: ''
     });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })}; 
    ///////////////////////////////////


// --- onSubmit ---
    const onSubmit = e => {
        e.preventDefault();
        console.log(register)
    axiosWithAuth()
    //axios
    .post('/users/login', user)
    //.post('/users/login', login)
    .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
        props.history.push('/homerestaurants');
      })
      .catch(err => console.log(err));
    }
    // --- End of Axios Call ---

    // --- Return Statement ---
    return (
    // --- Div container ---
        <div className="login-container">
            <div className="header">Login</div>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    {/* --- Form --- */}
        <form onSubmit={onSubmit}>
        {/* --- Username Field --- */}
            {/* --- label --- */}
            <label htmlFor="username">
                {/* <span> Are you a new user? <Link tag={Link} to="/signup"> Sign up </Link></span> */}
                Username: 
                <input type="text"
                name="username"
                placeholder="username"
                ref={ register({ required: true, minLength: 5, maxLength: 15})} 
                ////////////
                value={user.username}
                onChange={handleChange}
                ///////////
                />
            </label>

            {/* --- errors --- */}
            {errors.username && errors.username.type === "required" && (
                <span> Username is required </span>
                )}
            {errors.username && errors.username.type === "minLength" && (
                <span> Username is too short </span>
                )}
            {errors.username && errors.username.type === "maxLength" && (
                <span> Username is too long </span>
                )}
        {/* --- End of Username Field--- */}
            
        {/* --- Password Field --- */}
            {/* --- label --- */}
            <label htmlFor="password">
                Password: 
            </label>
            <input
                type="password"
                placeholder="Password"
                name="password"
                ref={ register ({ required: true, minLength: 3})} 
                ///////////
                value={user.password}
                onChange={handleChange}
                //////////
                />
            
            {/* --- errors --- */}
            {errors.password && errors.password.type === "required" && (
                <span>Password is required</span>
                )}
            {errors.password && errors.password.type === "minLength" && (
                <span> Password is too short - 3 characters</span>
                )}
        {/* --- End of Password Field --- */}

        {/* --- Submit Button --- */}
                <button className="button">Let's Eat!</button>
        {/*  --- End of Submit Button --- */}

                <button className="button"> <Link to={'/register'}>Register</Link></button>

        {/* --- End of Form --- */}
            </form>
    {/* --- End of Login container --- */}
            </div>
    )
}