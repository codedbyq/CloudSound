import React from 'react';
import { Dropdown} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


const NavDropdown = () => {
   
    const handleClick = (e) => {
        e.preventDefault();
        const dropLinks = document.querySelectorAll('.droplink');
        dropLinks.forEach(li => li.classList.toggle('show'));
    }
    
    return (
        <nav className='dropdown-nav'>
            <button id='drop-trigger' onClick={handleClick}>&#x22EF;</button>
            <ul className='dropdown-list'>
                <li className='droplink'><a  href="https://www.linkedin.com/in/marquisbentley/">LinkedIn</a></li>
                <li className='droplink'><a  href="https://github.com/codedbyq">GitHub</a></li>
                <li className='droplink'><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    )
}

export default NavDropdown;