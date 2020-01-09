import React, {useState} from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import img from '../images/loginbgphoto.jpg'
import axiosWithAuth from '../utils/axiosWithAuth';
import buttons from '../components/navcss.css';


//--- Styled Components ---

const EntirePage = styled.div`
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
    <EntirePage styles={{ backgroundImage:`url(${img})` }}>
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
                <Button>Let's Eat!</Button>
        {/*  --- End of Submit Button --- */}

                <RegBtn> <Link className='buttons' to={'/register'}>Register</Link></RegBtn>

        {/* --- End of Form --- */}
            </form>
    {/* --- End of Login container --- */}
            </LoginBG>
            </EntirePage>
    )
}