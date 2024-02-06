import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../util/createRequestSaga';

import * as authAPI from '../api/auth';
import * as userActions from '../actions/userActions';

