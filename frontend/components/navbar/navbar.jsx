import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = props => {

    const navRight = props.currentUser ? (
        <>
            <NavLink>Try Pro</NavLink>
            <NavLink>Profile</NavLink>
        </>
    ) : (
        <>
            <NavLink to='/login'>Sign In</NavLink>
            <NavLink to='/signup'>Create Account</NavLink>
        </>
    )

    return (
        <div id='navbar'>
            <div id='nav-left'>
                <button id='nav-logo'></button>
                <NavLink to='/' className='home'>Home</NavLink>
                <NavLink to='/login'>Stream</NavLink>
                <NavLink to='/login'>Library</NavLink>
            </div>

            <input id='search' type="search"/>

            <div id='nav-right'>
                {navRight}
                <NavLink to='/login'>Upload</NavLink>
                <button>&#x22EF;</button>
            </div>
        </div>
    )
}


export default NavBar;