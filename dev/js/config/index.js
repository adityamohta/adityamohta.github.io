import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';    // allows us to dispatch asynchronous actions.
import axios from 'axios';
import promise from 'redux-promise-middleware'; // allows us to pass axios request as action payload.

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reducers';

export const history = createHistory();

// add logger, for logs
const middleware = composeWithDevTools(applyMiddleware(promise(), thunk, routerMiddleware(history)));


const store = createStore(
    allReducers,
    middleware
);

export default store;
