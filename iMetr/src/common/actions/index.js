import {push as routerGo, goBack as routerBack} from 'react-router-redux';

import Parse from 'parse';

import {VIEW} from '../constants/actions';

import {SUCCESS_ALERT, ERROR_ALERT, REMOVE_ALERT, INC_LOADER, DEC_LOADER, SET_SUBDOMEN} from '../constants/actions';

export const go = page => dispatch => {
    dispatch(routerGo(page));
};

export const goBack = () => dispatch => {
    dispatch(routerBack());
};

export const setSubdomen = (subdomen) => dispatch => {
    dispatch({type : SET_SUBDOMEN , payload : subdomen });
};

export const goSubdomen = (subdomain, path, filters) => dispatch => {
    let filter = JSON.stringify(filters);
    let host = window.location.host;
    let protocol = window.location.protocol;
    let parts = host.split(".");
        if (subdomain === null && parts.length >= 3) {
            if(parts[0] !== 'dev' && parts[0] !== 'imetr' && parts[0] !== 'Imetr')
                window.location.href = protocol + "//" + parts.slice(1).join('.') + path + '?filter=' + filter;
            else{
                window.location.href = protocol + "//" + parts.join('.') + path + '?filter=' + filter
            }
            return
        }
        if (subdomain !== null ) {
            if (parts.length < 3) {
                window.location.href = protocol + "//" + subdomain + '.' + host + path + '?filter=' +  filter
            }
            if (parts.length >= 3) {
                if(parts[0] !== 'dev' && parts[0] !== 'imetr' && parts[0] !== 'Imetr') {
                    if (subdomain === parts[0])
                        return dispatch(go(path));
                    window.location.href = protocol + "//" + subdomain + '.' + parts.slice(1).join('.') + path + '?filter=' +  filter
                }
                else{
                    window.location.href = protocol + "//" + subdomain + '.' + parts.join('.') + path + '?filter=' +  filter
                }
            }
            return
        }
    dispatch(go(path));
};

export const removeAlert = () => dispatch => {
    dispatch({type: REMOVE_ALERT});
};

export const addErrorAlert = (message, options) => dispatch => {
    dispatch({type: ERROR_ALERT, payload: {message, ...options}});
};
export const addSuccessAlert = (title, options) => dispatch => {
    dispatch({type: SUCCESS_ALERT, payload: {message, ...options}});
};

export const startLoading = () => dispatch => {
    dispatch({type : INC_LOADER});
};
export const stopLoading = () => dispatch => {
    dispatch({type: DEC_LOADER});
};


export const getPopularObject = () => dispatch => {
    return Parse.Cloud.run('realty-object:popular:get', {})
        .then(reply=>{
            dispatch({ type: VIEW, payload: reply });
            // console.log('>>>>>> sucsess >>>>>>>>>', reply);
        })
        .catch(reply=>{
            console.log('>>>>>> ERROR >>>>>>>>>', reply)
        })
};