import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import store, { history } from './store';
import { Provider } from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

const target = document.getElementById('root');

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={ history }>
            <App/>
        </ConnectedRouter>
    </Provider>,
    target
);