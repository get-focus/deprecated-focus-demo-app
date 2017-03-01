import {combineReducers} from 'redux';
import confirmReducers from 'focus-application/confirm/confirm-reducer';
import movieReducers from './movie';
import notificationReducers from './notification';


export default combineReducers({
    ...confirmReducers,
    ...movieReducers,
    ...notificationReducers,
});
