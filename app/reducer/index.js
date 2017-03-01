import {combineReducers} from 'redux';
import movieReducers from './movie';
import personReducers from './person';

export default combineReducers({
    ...movieReducers,
    ...personReducers
});
