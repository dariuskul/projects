import {combineReducers} from 'redux';
import posts from './posts';
import users from './users';
import errors from './errors';
export default combineReducers({
    posts,
    users,
    errors
})