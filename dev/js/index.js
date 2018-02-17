import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import store, { history } from './config';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

const target = document.getElementById('root');

import App from './containers/app';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={ history }>
            <App/>
        </ConnectedRouter>
    </Provider>,
    target
);