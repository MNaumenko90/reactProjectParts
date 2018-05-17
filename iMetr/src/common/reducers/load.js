
import {LOAD} from '../constants/actions';


function current(state = false, action) {
    switch (action.type) {
        case LOAD:
            return true;
        default:
            return state;
    }
}

export default current;
