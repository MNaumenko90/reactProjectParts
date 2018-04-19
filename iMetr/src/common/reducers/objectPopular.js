
import {VIEW} from '../constants/actions';

function object(state = null, action) {
    switch (action.type) {
        case VIEW:
            return action.payload;
        default:
            return state;
    }
}

export default object;
