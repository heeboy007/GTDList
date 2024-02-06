import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../util/createRequestSaga';

import * as authAPI from '../api/auth';
import * as authActions from '../actions/authActions';

// middleware
export const changeField = createAction(
    authActions.CHANGE_FIELD,
    ({ form, key, value }) => ({
        form, // register, login
        key, // username, password, passwordConfrim
        value // 실제 바꾸려는 값
    })
);

export const initalizeForm = createAction(
    authActions.INITALIZE_FORM,
    form => form
);

export const register = createAction(
    authActions.REGISTER, 
    ({ email, password }) => ({
        email,
        password
    })
);

export const login = createAction(
    authActions.LOGIN,
    ({ email, password }) => ({
        email,
        password
    })
);

const registerSaga = createRequestSaga(authActions.REGISTER, authAPI.register);
const loginSaga = createRequestSaga(authActions.LOGIN, authAPI.login);

export function* authSaga() {
    yield takeLatest(authActions.REGISTER, registerSaga);
    yield takeLatest(authActions.LOGIN, loginSaga);
}
/////////////////////////////////

// reducer
const defaultState = {
    register: {
        email: '',
        password: '',
        passwordConfirm: ''
    },
    login: {
        email: '',
        password: ''
    },
    auth: null,
    authError: null
};

const authReducer = handleActions(
    {
        [authActions.CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
        produce(state, draft => {
            draft[form][key] = value;
        }),
        [authActions.INITALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: defaultState[form],
            authError: null
        }),
        [authActions.REGISTER_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authErorr: null,
            auth
        }),
        [authActions.REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error
        }),
        [authActions.LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth
        }),
        [authActions.LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error
        }),
    },
    defaultState
);

export default authReducer;