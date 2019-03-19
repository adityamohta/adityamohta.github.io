/* global process */
// External Imports
import {createStore, applyMiddleware} from 'redux';
import {connectRouter, routerMiddleware,} from 'connected-react-router';
import thunk from 'redux-thunk';    // allows us to dispatch asynchronous actions.
import promise from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
import logger from 'redux-logger';
// My Imports
import allReducers from './reducers';

const DEBUG = window.DEBUG === 'true';
export const history = createHistory();


const middleware_list = [];

if (DEBUG) {
    middleware_list.push(logger);
}

const middleware = applyMiddleware(...middleware_list, promise(), thunk, routerMiddleware(history));

// logger
const store = createStore(
    connectRouter(history)(allReducers),
    middleware
);

export default store;
