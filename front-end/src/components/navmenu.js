import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ManuBar = styled.div
    `
color: blue;
text-decoration: none;
`;

    // const NavLink =styled.NavLink`

    // `;

export default function Menu() {

    return (
        <ManuBar>
            <p>Hello</p>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/homerestaurants'> Profile </NavLink>
            <NavLink to='/'> Favorites </NavLink>
            {/* <NavLink onClick={props.onClick} className='navLinkStyle' to="/" >DASHBOARD</NavLink>
            <NavLink onClick={props.onClick} className='navLinkStyle' to="/profile">PROFILE</NavLink>
            <NavLink onClick={logout} className='navLinkStyle' to="/login">LOGOUT</NavLink> */}
        </ManuBar>
    )
}