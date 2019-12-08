import * as actions from './actionTypes';

export const signInLocal = (signinData) => ({
    type: actions.SIGN_IN_LOCAL,
    signinData
})

export const signInLocalSuccess = (userData) => ({
    type: actions.SIGN_IN_LOCAL_SUCCESS,
    userData
})