import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Landing from './landing/landing';
import LoginContainer from './session_forms/login_container';
import SigninContainer from './session_forms/signup_container';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import { AuthRoute } from '../util/route_utils';

const App = () => (
    <div id='app'>
        <header className='nav-header'>
            <NavBarContainer />
        </header>

        <Switch>
            <AuthRoute exact path='/login' component={LoginContainer} />
            <AuthRoute exact path='/signup' component={SigninContainer} />
            <Route exact path='/' component={Landing} />
        </Switch>
        
        <footer>
            <Footer />
        </footer>
    </div>
)

export default App;

// nav
// navlink
// fixed buttons(home, stream, library)
// search
// user buttons(sign in, create account, upload, show)

// logged out landing page /discover
// logged in user dashboard /discover

// user show page /:userId

// sign in /signin
// sign up /signup

// exit page advertising the app /logout