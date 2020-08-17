import React from 'react';
import { Redirect } from 'react-router-dom';


const NavDropdown = ({logout}) => {

    const handleClick = (e) => {
        e.preventDefault();
        const dropLinks = document.querySelectorAll('.droplink');
        dropLinks.forEach(li => li.classList.toggle('show'));
    }

    const handleLogout = (e) => {
        e.preventDefault()
        logout()
        const dropLinks = document.querySelectorAll('.droplink');
        dropLinks.forEach(li => li.classList.toggle('show'));
    }
    
    return (
        <nav className='dropdown-nav'>
            <button id='drop-trigger' onClick={handleClick}>&#x25CF;&#x25CF;&#x25CF;</button>
            <ul className='dropdown-list'>
                <li className='droplink'><a  href="https://www.linkedin.com/in/marquisbentley/">LinkedIn</a></li>
                <li className='droplink'><a  href="https://github.com/codedbyq">GitHub</a></li>
                <li className='droplink'><button id='logout' onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    )
}

export default NavDropdown;