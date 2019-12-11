import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

export function* signInLocalSaga(action) {
    try {    
        let result = yield axios.post(`${process.env.REACT_APP_URL_AUTH}/login`, action.signinData)
        localStorage.setItem(
            'token', result.data.success.token
        )
        if(result.data){
            yield put(actions.signInLocalSuccess(result.data.success));
        }
    } catch (error) {
        // debugger;
        // alert(error.response.data.error);
    }
}

export function* signUpLocalSaga(action) {
    try {    
        let result = yield axios.post(`${process.env.REACT_APP_URL_AUTH}/register`, action.signupData)
        localStorage.setItem(
            'token', result.data.success.token
        )
        if(result.data){
            yield put(actions.signUpLocalSuccess(result.data.success));
        }
    } catch (error) {
        // debugger;
        // alert(error.response.data.error);
    }
}

export function* getInfoUserSaga(action) {
    try {    
        let token = localStorage.getItem('token');
        token = "Bearer " + token;
        // debugger;
        let result = yield axios.get(`${process.env.REACT_APP_URL_AUTH}/details`, {headers: {'Authorization': token}})
        // debugger;
        if(result.data){
            yield put(actions.getUserInfoSuccess(result.data.success));
        }
    } catch (error) {
        // debugger;
        // alert(error.response.data.error);
    }
}
