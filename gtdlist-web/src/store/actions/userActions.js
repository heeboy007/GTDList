import { createRequestActionTypes } from "../util/createRequestSaga";

const LOGOUT = 'user/LOGOUT';

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('user/CHECK');

export {
    LOGOUT,
    CHECK,
    CHECK_SUCCESS,
    CHECK_FAILURE
};