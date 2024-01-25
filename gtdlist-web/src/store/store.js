import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import taskReducer, { taskSaga } from './modules/task';
import authReducer, { authSaga } from './modules/auth';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    authReducer,
    taskReducer,
});

function* rootSaga() {
    yield all([taskSaga(), authSaga()]);
}

export function runSaga() {
    sagaMiddleware.run(rootSaga);
}

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    },
});

export default store;
