import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import LoginContainer from './session_forms/login_container';
import SigninContainer from './session_forms/signup_container';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import LandingContainer from './landing/landing_container';
import SongShowContainer from './song/show_container';

const App = () => (
    <div id='app'>
        <div id='fake-header'></div>
        <NavBarContainer />

        {/* <content id='app-content'> */}
            <AuthRoute exact path='/login' component={LoginContainer} />
            <AuthRoute exact path='/signup' component={SigninContainer} />
            <Route path='/songs/:songId' component={SongShowContainer} />
            <Route exact path='/' component={LandingContainer} />
        {/* </content> */}

        <Footer />
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