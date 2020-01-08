import React, {useState} from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

//--- Styled Components ---

const EntirePage = styled.div`
background-color: #e5625e;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

    const LoginBG = styled.div`
        background-color: #bdd358;
        margin: 2rem;
        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        //flex-wrap:wrap;
        //flex-direction: column;
        box-shadow: 2px 6px 20px #6e2724;
        width: 40rem;
    `;

            const LoginTitle = styled.div`
                display: flex;
                padding: .5rem;
                box-shadow: 2px 5px 6px #5c6924;
                border-radius: 1rem;
                justify-content: center;
                font-size: 3rem;
                font-weight:bold;
                color: white;
                background-color: #e5625e;
                margin: 2rem;
            `;

            const Label = styled.label`
                color: white;
                font-weight:bold;
                display:flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            `;

            const Input = styled.input`
                padding: 0.75em;
                margin: 0.75em;
                color: #e5625e
                background: white;
                border: none;
                border-radius: 3px;
                // display:flex;
                // flex-direction: row;
                // align-items: center;
                //justify-content: center;
            `;

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
    //axiosWithAuth()
    axios
    .post('https://foodiefunsix.herokuapp.com/users/login', user)
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
    <EntirePage>
        <LoginBG>
            <LoginTitle>Login</LoginTitle>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    {/* --- Form --- */}
        <form onSubmit={onSubmit}>
        {/* --- Username Field --- */}
            {/* --- label --- */}
            <Label htmlFor="username">
                {/* <span> Are you a new user? <Link tag={Link} to="/signup"> Sign up </Link></span> */}
                Username:
                </Label>
                <Input type="text"
                name="username"
                placeholder="username"
                ref={ register({ required: true, minLength: 5, maxLength: 15})} 
                ////////////
                value={user.username}
                onChange={handleChange}
                ///////////
                />

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
            <Label htmlFor="password">
                Password:  
            </Label>
            <Input
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
            </LoginBG>
            </EntirePage>
    )
}