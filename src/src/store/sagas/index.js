import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import { signInLocalSaga } from './auth';

export function* watchAuth() {
    yield takeEvery(actionTypes.SIGN_IN_LOCAL, signInLocalSaga);
    debugger;
    // yield takeEvery(actionTypes.SIGN_UP_LOCAL, signUpLocalSaga);
    // yield takeEvery(actionTypes.GET_USER_INFO, getInfoUserSaga);
    // yield takeEvery(actionTypes.UPDATE_PASSWORD, updatePasswordSaga);
    // yield takeEvery(actionTypes.UPDATE_PROFILE, updateProfileSaga);
}