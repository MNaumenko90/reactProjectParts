import Parse from 'parse';

import {
    WIKI_WEB_LOADED_SUCCESS,
    SET_ACTIVE_WEB_PAGE,
    WIKI_WEB_GET_COUNT,
    WIKI_WEB_ONE_GET,
} from '../constants/actions';

export const getWebWikiList = (params) => dispatch => {
    const query = new Parse.Query("Wiki");
    query.limit(params.limit);
    query.skip(params.skip);

    return query.find()
        .then(reply => {
            dispatch({type: WIKI_WEB_LOADED_SUCCESS, payload: reply ? reply.map(v => v.toJSON()) : {}})
        })
};

export const getWebWikiCount = () => dispatch => {
    const query = new Parse.Query("Wiki");
    return query.count()
        .then(reply => {
            dispatch({type: WIKI_WEB_GET_COUNT, payload: reply})
        })
        .catch(reply => console.error(reply, 'getWikiWebCount ERROR'))
};

export const setActiveWikiPage = (page) => dispatch => {
    dispatch({type: SET_ACTIVE_WEB_PAGE, payload: page})
};

export const getOneWiki = (wikiId) => dispatch => {
    const query = new Parse.Query("Wiki");
    return query.get(wikiId)
        .then(reply => {
            dispatch({type: WIKI_WEB_ONE_GET, payload: reply.toJSON() });
        })
        .catch(reply => console.error(reply, 'getOneWiki ERROR'))
};