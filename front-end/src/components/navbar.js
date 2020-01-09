import React, { useState, useContext } from 'react'
import styled from 'styled-components';
//import LOGO - ASK KATYA
//import BUTTONS? - BEN AND JUSTIN
//import SEARCHBAR? - MVP?
import Menu from './navmenu';


const NavBarStyle = styled.div`
height: 10vh;
background-color: white;
color: white;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
`;


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