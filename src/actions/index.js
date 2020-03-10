import { SIGN_IN } from './types';
import apiCall from '../apis/api';

export const submitLogin = (formValues) =>  async dispatch => {

    console.log("submitLogin action creator");
    console.log(formValues);
    const response  = await apiCall.post('/login',{...formValues});

   dispatch({type: SIGN_IN, payload: response.data});
}