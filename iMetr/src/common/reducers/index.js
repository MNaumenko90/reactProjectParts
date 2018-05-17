
import {combineReducers} from 'redux';

import load from './load';
import subdomen from './subdomen';
import loader from './loader';
import alert from './alert';
import object from './objectPopular';
import wiki from './wiki';

export default combineReducers({
    load,
    subdomen,
    loader,
    alert,
    object,
    wiki,
});
