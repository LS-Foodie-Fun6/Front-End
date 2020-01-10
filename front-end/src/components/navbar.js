import React, { useState, useContext } from 'react'
import styled from 'styled-components';
//import LOGO - ASK KATYA
//import BUTTONS? - BEN AND JUSTIN
//import SEARCHBAR? - MVP?
import Menu from './navmenu';



const NavBarStyle = styled.div`
// height: 10vh;
background-color: #e5625e;
color: white;
display: flex;
justify-content: space-around;
align-items: center;
text-decoration: none;
`;


export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div>
            <NavBarStyle>
                <h1>FoodieFun</h1>
                <Menu/>
            </NavBarStyle>

            {/* <Menu className={(showMenu) ? "menu showMenu" : "menu"} onClick={() => { setShowMenu(!showMenu) }}  ></Menu> */}
        </div>
    )
}