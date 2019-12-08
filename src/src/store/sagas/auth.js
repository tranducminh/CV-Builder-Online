import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

export function* signInLocalSaga(action) {
    try {    
        debugger;
        let result = yield axios.post(`${process.env.REACT_APP_URL_AUTH}/login`, action.signinData)
        debugger;
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
