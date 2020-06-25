import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import LoginContainer from './session_forms/login_container';
import SigninContainer from './session_forms/signup_container';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import LandingContainer from './landing/landing_container';
import SongShowContainer from './song/show_container';
import SongFormContainer from './song/song_form_container';

const App = () => (
    <div>
        <div id='fake-header'></div>
        <div id='app-container'>
            <NavBarContainer />

            <AuthRoute exact path='/login' component={LoginContainer} />
            <AuthRoute exact path='/signup' component={SigninContainer} />
            <Route path='/songs/:songId' component={SongShowContainer} />
            <ProtectedRoute path='/upload' component={SongFormContainer} />
            <Route exact path='/' component={LandingContainer} />

            <Footer />
        </div>
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