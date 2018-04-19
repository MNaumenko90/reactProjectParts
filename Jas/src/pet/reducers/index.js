/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */

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
