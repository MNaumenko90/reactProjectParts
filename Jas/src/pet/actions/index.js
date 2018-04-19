
import Parse from 'parse';

import {push, goBack} from 'react-router-redux';

import {PET_LIST, PET_SAVE, PET_DELETE, PET_EDIT_START, PET_BREEDS, PET_COLORS, ACTION_ERRORS, ERROR_PET_ADD, ERROR_PET_RM, ERROR_PET_RESET} from '../constants/actions';

const PARSE_CLASS_NAME = 'Pet';

export const editStartPet = (pet) => dispatch => {
    return Promise.resolve()
        .then(reply => {
                return dispatch({type: PET_EDIT_START, payload: pet});
            }
        );
};

export const createStartPet = () => dispatch => {
    return Promise.resolve()
        .then(reply => {
                return dispatch({type: PET_EDIT_START, payload: {} });
            }
        );
};

export const getPetsList = () => dispatch => {
    const user = Parse.User.current();
    const qPet = new Parse.Query(PARSE_CLASS_NAME);
    qPet.equalTo('Owner', user);
    qPet.include(['GisAddress']);

    return qPet.find()
        .then(reply => {
                return dispatch({type: PET_LIST, payload: reply.map(v=>v.toJSON())});
            }
        )
};

export const savePet = (data) => dispatch => {
    const user = Parse.User.current();
    const GisAddress = user.get('GisAddress');
    const {objectId, name, type, breed, color, sex, chip, neutered, age } = data;
    const pet = new Parse.Object(PARSE_CLASS_NAME);
    if(objectId){
        pet.set('objectId', objectId);
    } else {
        pet.set('Owner', user);
        pet.set('GisAddress', GisAddress);
    }
    pet.set('name', name);
    pet.set('type', type);
    pet.set('breed', breed);
    pet.set('color', color);
    pet.set('sex', sex);
    pet.set('chip', chip);
    pet.set('neutered', neutered);
    pet.set('age', age);

    return pet.save()
        .then(reply => {
                return dispatch({type: PET_SAVE, payload: reply.toJSON()});
            }
        )
};

export const deletePet = (objectId) => dispatch => {
    const pet = new Parse.Object(PARSE_CLASS_NAME);
    pet.set('objectId', objectId);
    return pet.destroy()
        .then(reply => {
                return dispatch({type: PET_DELETE, payload: objectId});
            }
        )
};

export const petSold = (petId) => dispatch => {
    let pet = new Parse.Object("Pet");
    pet.set("objectId", petId);
    pet.set("status", "sold");
    return pet.save()
        .then(reply => {
            return dispatch({type: PET_SAVE, payload: reply.toJSON()});
            }
        )
};

export const petDeceased = (petId) => dispatch => {
    let pet = new Parse.Object("Pet");
    pet.set("objectId", petId);
    pet.set("status", "deceased");
    return pet.save()
        .then(reply => {
            return dispatch({type: PET_SAVE, payload: reply.toJSON()});
            }
        )
};

export const addError = (error) => dispatch => {
    return dispatch({type: ERROR_PET_ADD, payload: error });
};

export const rmError = (error) => dispatch => {
    return dispatch({type: ERROR_PET_RM, payload: error });
};

/**
 *
 * @param property optional
 */
export const resetErrors = (property) => dispatch => {
    return dispatch({type: ERROR_PET_RESET, payload: property });
};

const _errorHandler = (error, dispatch)  =>{
    let ae =  ACTION_ERRORS.find(v=>v.code == error.code);
    if(ae){
        return dispatch({type: ERROR_PET_ADD, payload: ae });
    }

    console.log('Error ::', error);
    let message = error.message || "error";
    dispatch({type: ERROR_ALERT, payload:  {message}});
};

export const getPetBreedsColors = () => dispatch => {
    return Promise.all([
        Parse.Cloud.run("pet:get:breeds", {})
    ])
        .then(reply => {
            let breeds = reply[0].map(v=>{
               if(!v.sort)
                   v.sort=v.name;
               return v;
            });
            dispatch({type: PET_BREEDS, payload: reply[0]});
            Promise.all([
                Parse.Cloud.run("pet:get:colors", {}),
            ]).then(reply => {
                    dispatch({type: PET_COLORS, payload: reply[0]});
                }
            )
            }
        )
};
