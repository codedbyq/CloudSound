import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchUsers } from './actions/user_actions';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;

    // initial state with a logged in user
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };

        delete window.currentUser;
    };

    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root);

    //! REMOVE BEFORE HEROKU PUSH - window methods and variables for testing 
    window.state = store.getState;
    window.dispatch = store.dispatch;
    window.fetchUsers = fetchUsers;
});