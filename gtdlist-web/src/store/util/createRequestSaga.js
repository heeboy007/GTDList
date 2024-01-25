import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';

//단순한 string build를 도와주는 역할이 전부임.
export const createRequestActionTypes = (type) => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [type, SUCCESS, FAILURE];
}

//generator 함수를 리턴
export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action) {
        yield put(startLoading(type));
        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data,
                meta: response
            });
        } catch(e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            });
        }
        yield put(finishLoading(type));
    }
}