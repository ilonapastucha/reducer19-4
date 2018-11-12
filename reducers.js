import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP, THUMB_DOWN} from './actions';

import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const app = combineReducers({
    comments,
    users
});