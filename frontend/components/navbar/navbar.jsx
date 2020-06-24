import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import NavDropdown from './nav_dropdown';

const NavBar = props => {

    const navRight = props.currentUser ? (
        <>
            <NavLink id='right-btn'>Try Pro</NavLink>
            <NavLink id='profile-drop'>Profile</NavLink>
        </>
    ) : (
        <>
            <NavLink className='nav-session' id='login' to='/login'>Sign in</NavLink>
            <NavLink className='nav-session' id='signup' to='/signup'>Create account</NavLink>
        </>
    )

    return (
        <div id='navbar'>
            <div className='nav-left'>
                <Link id='nav-logo' to='/'></Link>
                <NavLink className='left-btn' to='/' className='home'>Home</NavLink>
                <NavLink className='left-btn' to='/login'>Stream</NavLink>
                <NavLink className='left-btn' to='/login'>Library</NavLink>
            </div>

            <input id='search' type="search"/>

            <div id='nav-right'>
                {navRight}
                <button id='logout' onClick={props.logout}>Logout</button>
                <NavLink id='right-btn' to='/login'>Upload</NavLink>
                <NavDropdown logout={props.logout} />
            </div>
        </div>
    )
}


export default NavBar;