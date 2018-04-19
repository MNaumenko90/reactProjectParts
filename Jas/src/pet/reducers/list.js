/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */

import {PET_LIST, PET_SAVE, PET_DELETE } from '../constants/actions';

export default function list(state = [], action) {
    switch (action.type) {
        case PET_LIST:
            return  action.payload;
        case PET_SAVE:
            const payload = action.payload;
            let list = Object.assign([], state);
            let index = list.findIndex(v=>v.objectId == payload.objectId);
            if(index<0){
                list.push(payload);
            } else {
                list[index] = payload;
            }
            return  list;
        case PET_DELETE:
            const objectId = action.payload;
            return state.filter(v=>v.objectId !== objectId);
        default:
            return state;
    }
}
