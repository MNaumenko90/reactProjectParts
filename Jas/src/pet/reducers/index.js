import {combineReducers} from 'redux';

import list from './list';
import edit from './edit';
import errors from './errors';
import config from './config';




export default combineReducers({
    list,
    edit,
    errors,
    config,
});
