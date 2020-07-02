import React from 'react';
import { NavLink } from 'react-router-dom'
import NavDropdown from './nav_dropdown';

const NavBar = props => {

    const placeholderMsg = props.currentUser ? 'Search for artists, bands, tracks, podcasts...' : 'Search for artists, tracks...';
    const searchBar = props.currentUser ? 'search-long' : 'search';
    const navRight = props.currentUser ? (
        <>
            <NavLink id='right-btn' to='/discover'>Try Pro</NavLink>
            <NavLink id='profile-drop' to='/discover'>Profile</NavLink>
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
                <NavLink id='nav-logo' to='/'></NavLink>
                <NavLink className='left-btn' to='/discover' className='home'>Home</NavLink>
                <a className='left-btn' href="https://github.com/codedbyq/CloudSound">Github</a>
                <a className='left-btn' href="https://www.linkedin.com/in/marquisbentley/">LinkedIn</a>
            </div>

            <input id={searchBar} type="search" placeholder={placeholderMsg} />

            <div id='nav-right'>
                {navRight}
                <NavLink id='right-btn' to='/upload'>Upload</NavLink>
                <NavDropdown logout={props.logout} />
            </div>
        </div>
    )
}


export default NavBar;