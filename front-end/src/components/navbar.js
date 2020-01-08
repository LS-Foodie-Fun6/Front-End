import React, { useState, useContext } from 'react'
import styled from 'styled-components';
//import LOGO - ASK KATYA
//import BUTTONS? - BEN AND JUSTIN
//import SEARCHBAR? - MVP?
import Menu from './navmenu';
const NavBarStyle = styled.div
    `
position: fixed;
top: 0px;
margin: .01rem;
width: 100vw;
z-index: 5;
min-height: 3rem;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #FAACA8;
background: linear-gradient(90deg, rgba(61,96,152,1) 0%, rgba(0,212,255,1) 100%);
`


export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div>
            <NavBarStyle>
                <Menu/>
            </NavBarStyle>

            {/* <Menu className={(showMenu) ? "menu showMenu" : "menu"} onClick={() => { setShowMenu(!showMenu) }}  ></Menu> */}
        </div>
    )
}