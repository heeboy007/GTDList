import { createRequestActionTypes } from "../util/createRequestSaga";

//여기에 있는 이벤트들을 container혹은 modules에서 이용하시기 바랍니다.

//비주얼 / UI과 관련된 이벤트들
const TOGGLE_HIDDEN_TABLE = 'task/TOGGLE_HIDDEN_TABLE';
const UPDATE_EDIT_CELL = 'task/UPDATE_EDIT_CELL';

//task에 대한 restful한 모든 액션을 여기서 지정.
const [READ_TASK, READ_TASK_SUCCESS, READ_TASK_FAILURE] = createRequestActionTypes(
    'task/READ_TASK'
);

const [CREATE_TASK, CREATE_TASK_SUCCESS, CREATE_TASK_FAILURE] = createRequestActionTypes(
    'task/CREATE_TASK'
);

const [UPDATE_TASK, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAILURE] = createRequestActionTypes(
    'task/UPDATE_TASK'
);

const [DELETE_TASK, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE] = createRequestActionTypes(
    'task/DELETE_TASK'
);

//기존에 존재하는 state를 비우기 위해서 사용.
const UNLOAD_TASK = 'task/UNLOAD_TASK';

export {
    READ_TASK,
    READ_TASK_SUCCESS,
    READ_TASK_FAILURE,
    CREATE_TASK,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAILURE,
    UPDATE_TASK,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FAILURE,
    DELETE_TASK,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILURE,
    TOGGLE_HIDDEN_TABLE,
    UPDATE_EDIT_CELL,
    UNLOAD_TASK
};