/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */

import { PET_COLORS, PET_BREEDS} from '../constants/actions';

export default function list(state = {colors:[], breeds: []}, action) {
    switch (action.type) {
        case PET_BREEDS:
            return  Object.assign({}, state, {breeds: action.payload});
        case PET_COLORS:
            return  Object.assign({}, state, {colors: action.payload});
        default:
            return state;
    }
}
