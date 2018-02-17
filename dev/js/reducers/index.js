import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const allReducers = combineReducers({
    router: routerReducer
});
export default allReducers;
