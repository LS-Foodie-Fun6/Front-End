import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import registerUser from '../actions/userActions';
import axios from 'axios';

//--- Styled Components ---
const EntirePage = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

    const RegBG = styled.div`
        background-color: #bdd358;
        margin: 2rem;
        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 40rem;
        border-radius: 1rem;
    `;

            const LoginTitle = styled.div`
                display: flex;
                padding: 1.75rem;
                //box-shadow: 2px 5px 6px #5c6924;
                border-radius: 1rem;
                justify-content: center;
                font-size: 3rem;
                font-weight:bold;
                color: white;
                background-color: #e5625e;
                //margin: 2rem;
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
                padding: 0.5em;
                margin: 0.5em 0;
                color: #e5625e
                background: white;
                font-size: 1 rem;
                border: none;
                border-radius: 3px;
                justify-content:center;
                align-items: center;
            `;

            const Button = styled.button`
            background-color: #e5625e;
            border: none;
            color: white;
            font-size: 1rem;
            display:flex;
            align-items:center;
            margin: .5rem 0;
            padding: .5rem;
            text-decoration: none;
            border-radius:1rem;
            width: 100px;
            justify-content: center;
            `;
            
            const RegBtn = styled.button`
            background-color: #a63a37;
            border: none;
            color: white;
            font-size: 1rem;
            display:flex;
            align-items:center;
            margin: .5rem 0;
            padding: .5rem;
            border-radius:1rem;
            justify-content: center;
            width: 100px;
            text-decoration: none;
            `;

//-------------------------

export default function RegistrationForm(props) {

// --- useForm ---
    const { register, handleSubmit, errors } = useForm();
// ---------------


  ///////////////////////////////////
const [user,setUser] = useState({   
    username: '',
    password: '',
    location: '',
    email: '',
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
//axiosWithAuth()
axios
.post('https://foodiefunsix.herokuapp.com/users/register', user)
//.post('/users/login', login)
.then(res => {
    console.log(res.data)
    // localStorage.setItem('token', res.data.token);
    props.history.push('/');
})
.catch(err => console.log(err));
}

    // --- Return Statement ---
    return (
    // --- Div container ---
        <EntirePage>
            <RegBG>
            <div className="header">Register</div>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}

    {/* --- Form --- */}
        <form onSubmit={onSubmit}>

        {/* --- Username Field --- */}
            {/* --- label --- */}
            <label htmlFor="username">
                {/* <span> Do you already have an account? <Link tag={Link} to="/login"> Sign in </Link></span> */}
                Username: 
                <input type="text"
                name="username"
                placeholder="username"
                ref={ register({ required: true, minLength: 6, maxLength: 15})}
                value={user.username}
                onChange={handleChange}
                />
            </label>
            {/* --- end of label --- */}

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
            {/* --- end of errors --- */}
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
                ref={ register ({ required: true, minLength: 8})}
                value={user.password}
                onChange={handleChange}
                />

            {/* --- errors --- */}
            {errors.password && errors.password.type === "required" && (
                <span>Password is required</span>
                )}
            {errors.password && errors.password.type === "minLength" && (
                <span> Password is too short - 8 characters</span>
                )}
        {/* --- End of Password Field --- */}

        {/* --- Location Field --- */}
            {/* --- label --- */}
            <label htmlFor="location">
                Location: 
            </label>
            <input
                type="text"
                placeholder="Location"
                name="location"
                ref={ register ({ required: true})} 
                value={user.location}
                onChange={handleChange}
                />

            {/* --- errors --- */}
            {errors.location && errors.location.type === "required" && (
                <span>Location is required</span>
                )}
        {/* --- End of Location Field --- */}

        {/* --- Submit Button --- */}
                <button className="button">Let's Eat!</button>
        {/*  --- End of Submit Button --- */}

        {/* --- Email Field --- */}
            {/* --- label --- */}
            <label htmlFor="email">
                Email: 
            </label>
            <input
                type="email"
                placeholder="Email"
                name="email"
                ref={ register ({ required: true})}
                value={user.email}
                onChange={handleChange}
                />

            {/* --- errors --- */}
            {errors.email && errors.email.type === "required" && (
                <span>Email is required</span>
                )}
        {/* --- End of Email Field --- */}

    {/* --- End of Form --- */}
        </form>
        </RegBG>
    {/* --- End of Login container --- */}
            </EntirePage>
    )
}
