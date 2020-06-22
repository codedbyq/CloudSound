import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let preloadedState;

    // initial state with a logged in user
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };

        delete window.currentUser;
    };

    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root);
});