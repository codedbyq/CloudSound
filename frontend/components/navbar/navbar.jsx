import React from 'react';
import { NavLink } from 'react-router-dom'
import NavDropdown from './nav_dropdown';
import { render } from 'react-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({ search: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.search(this.state.search)
            .then(res => this.props.history.push(`/search/${this.state.search}`));
    }

    render() {
        const placeholderMsg = this.props.currentUser ? 'Search for artists, bands, tracks, podcasts...' : 'Search for artists, tracks...';
        const searchBar = this.props.currentUser ? 'search-long' : 'search';
        const navRight = this.props.currentUser ? (
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
    
                <form onSubmit={this.handleSubmit}>
                    <input id={searchBar} type="search" placeholder={placeholderMsg} onChange={this.handleInput}/>
                </form>
    
                <div id='nav-right'>
                    {navRight}
                    <NavLink id='right-btn' to='/upload'>Upload</NavLink>
                    <NavDropdown logout={this.props.logout} />
                </div>
            </div>
        )
    }
}


export default NavBar;