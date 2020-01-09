import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import links from './navcss.css';


export default function Menu() {

    return (
        <div>
            
            <NavLink className='links' to='/homerestaurants'> Home </NavLink>
            <NavLink className='links' to='/'> Logout </NavLink>

        </div>
    )
}