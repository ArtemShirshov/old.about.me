// @flow
import {combineReducers} from 'redux';

// information about current page
import {route} from './route/route';

// Record day form
import {recordForm} from './recordForm';

const reducers = {
    route,
    recordForm,
};

export type ReducersType = typeof reducers;

export default combineReducers(reducers);
