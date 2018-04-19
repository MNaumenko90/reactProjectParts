import {SET_SUBDOMEN} from '../constants/actions';

function subdomen(state = null, action) {
    switch (action.type) {
        case SET_SUBDOMEN:
            return action.payload;
        default:
            return state;
    }
}

export default subdomen;
