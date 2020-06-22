import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => {
    return (
        <Provider store={store} >
            <HashRouter>
                <h1>CloudSound</h1>
            </HashRouter>
        </Provider>
    )
};

export default Root;