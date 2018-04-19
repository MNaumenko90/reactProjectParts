/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */

import {ERROR_PET_ADD, ERROR_PET_RM, ERROR_PET_RESET} from '../constants/actions';

let eid = 0;
function current(state = null, action) {
    switch (action.type) {
        case ERROR_PET_ADD:
            let err = Object.assign({},action.payload, {eid: ++eid});
            return Array.isArray(state) ? state.concat(err) : [err];
        case ERROR_PET_RM:
            let eid = action.payload.eid;
            return Array.isArray(state) ? state.filter(v=>v.eid!==eid) : [];
        case ERROR_PET_RESET:
            let property = action.payload;
            return Array.isArray(state) && property ? state.filter(v=>v.property!==property) : [];
        default:
            return state;
    }
}

export default current;
