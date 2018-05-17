import { PET_EDIT_START, PET_SAVE} from '../constants/actions';

export default function list(state = null, action) {
    switch (action.type) {
        case PET_EDIT_START:
            return  action.payload;
        case PET_SAVE:
            return  null;
        default:
            return state;
    }
}
