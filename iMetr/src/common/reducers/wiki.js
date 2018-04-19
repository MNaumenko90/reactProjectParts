import {combineReducers} from 'redux';
import {
    WIKI_WEB_LOADED_SUCCESS,
    SET_ACTIVE_WEB_PAGE,
    WIKI_WEB_GET_COUNT,
    WIKI_WEB_ONE_GET
} from '../constants/actions';

function wikiList(state = null, action) {
    switch (action.type) {
        case WIKI_WEB_LOADED_SUCCESS:
            state = action.payload;
            break;
    }
    return state;
}

function activePage(state = 1, action) {
    switch (action.type) {
        case SET_ACTIVE_WEB_PAGE:
            state = action.payload;
            break;
    }
    return state;
}

function count(state = null, action) {
    switch (action.type) {
        case WIKI_WEB_GET_COUNT:
            state = action.payload;
            break;
    }
    return state;
}

function oneTermin(state = null, action) {
    switch (action.type) {
        case WIKI_WEB_ONE_GET:
            state = action.payload;
            break;
    }
    return state;
}

export default combineReducers({
    wikiList,
    activePage,
    count,
    oneTermin,
});