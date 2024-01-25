import { createRequestActionTypes } from "../util/createRequestSaga";

//복수형으로 LIST를 다루는 것은 여기서 표현합니다.
const [LIST_TASK, LIST_TASK_SUCCESS, LIST_TASK_FAILURE] = createRequestActionTypes(
    'tasks/LIST_TASK'
);

export {
    LIST_TASK,
    LIST_TASK_SUCCESS,
    LIST_TASK_FAILURE
};