import {SIGN_IN} from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: false,
    loggedUser: null
}

export default (state = INITIAL_STATE, action) => {

    console.log("auth reducer");
    switch (action.type) {

        case SIGN_IN:
            return {...state, isSignedIn: true, loggedUser : action.payload}
         default:
             return state;
    }
}