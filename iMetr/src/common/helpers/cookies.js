import {DOMAIN} from '../constants/actions';

export const setCookie = (name, value, options) => dispatch =>{
    const  option = options || {};
    let expires = option.expires;

    if (typeof expires === "number" && expires) {
        let d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = option.expires = d;
    }
    if (expires && expires.toUTCString) {
        option.expires = expires.toUTCString();
    }

    let val = encodeURIComponent(value);

    let updatedCookie = name + "=" + val;

    for (let propName in option) {
        updatedCookie += "; " + propName;
        let propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }
    document.cookie = updatedCookie;
};

export const getCookie = (name) => dispatch => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    let sessionToken = matches ? decodeURIComponent(matches[1]) : null;
    return sessionToken;
};

export const deleteCookie = (name) => dispatch => {
    dispatch(setCookie(name, "", {expires: -1, domain: DOMAIN}))
};