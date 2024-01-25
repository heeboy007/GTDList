import { generateNewTimeStamp } from '../util/time';
import { createAction, handleActions } from 'redux-actions';

import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../util/createRequestSaga';

import * as taskAPI from '../api/task';
import * as taskActions from '../actions/taskActions'; 

export const createTask = createAction(
    taskActions.CREATE_TASK,
    ({ id, category }) => ({ id, category })
);

export const updateTask = createAction(
    taskActions.UPDATE_TASK,
    ({ taskID, updatedTask }) => ({ taskID, updatedTask })
);

export const deleteTask = createAction(
    taskActions.DELETE_TASK,
    ({ taskID }) => ({ taskID })
);

const createTaskSaga = createRequestSaga(taskActions.CREATE_TASK, taskAPI.createTask);
const updateTaskSaga = createRequestSaga(taskActions.UPDATE_TASK, taskAPI.updateTask);
const deleteTaskSaga = createRequestSaga(taskActions.DELETE_TASK, taskAPI.deleteTask);

export function* taskSaga() {
    yield takeLatest(taskActions.CREATE_TASK, createTaskSaga);
    yield takeLatest(taskActions.UPDATE_TASK, updateTaskSaga);
    yield takeLatest(taskActions.DELETE_TASK, deleteTaskSaga);
}

const defaultColumnSettings = {
    name: {
        displayed: true,
        type: "text",
        inputAlwaysRendered: false
    },
    time: {
        displayed: true,
        type: "datetime",
        inputAlwaysRendered: true
    },
    id: {
        displayed: false, 
        type: "integer",
        inputAlwaysRendered: false
    },
    order: {
        displayed: false,
        type: "integer",
        inputAlwaysRendered: false
    },
    memo: {
        displayed: true,
        type: "text",
        inputAlwaysRendered: false
    },
    difficulty: {
        displayed: true,
        type: "difficulty",
        inputAlwaysRendered: false
    },
    check: {
        displayed: true,
        type: "check",
        inputAlwaysRendered: true
    }
};

const defaultTask = {
    action:[
        { name: 'Sample Task 1', time:"2023-12-28 08:10", memo:"Sample 1", difficulty:"normal", check:true, id:0, order:1 },
        { name: 'Sample Task 2', time:"2023-12-28 08:10", memo:"Sample 2", difficulty:"hard", check:true, id:1, order:1 }
    ],
    defered:[
        { name: 'Sample Task 3', time:"2023-12-28 08:10", memo:"Sample 3", difficulty:"normal", check:true, id:2, order:1 },
        { name: 'Sample Task 4', time:"2023-12-28 08:10", memo:"Sample 4", difficulty:"easy", check:false, id:3, order:1 }
    ],
    newTaskID: 5
};

const defaultHiddenTables = {
    action: false,
    defered: false
};

const defaultEditingCell = {
    rowID: null,
    colID: null
};

const defaultState = {
    tasks: defaultTask,
    columnSettings: defaultColumnSettings,
    hiddenTables: defaultHiddenTables,
    editingCell: defaultEditingCell
};

//기존의 action.category ->
//{ category: category } 로 해서 쓰거나
//아님 애초에 (state, action) => 이딴식으로 넣어도 됨.
const taskReducer = handleActions(
    {
        [taskActions.CREATE_TASK]: (state, { category }) => ({
            ...state, 
            tasks: { 
                ...state.tasks, 
                [category]: state.tasks[category].concat({
                    name: '', time:generateNewTimeStamp(), memo:'', difficulty:"normal", check:false, id: state.tasks.newTaskID, order: state.tasks.newTaskID
                }), 
                newTaskID: state.tasks.newTaskID + 1 
            } 
        }),
        [taskActions.UPDATE_TASK]: (state, { category, rowID, colID, changedValue }) => ({
            ...state, 
            tasks: { 
                ...state.tasks,
                [category]: state.tasks[category].map((row) => {
                    return ((row.id === rowID) ? { ...row, [colID]: changedValue } : row);
                })
            }
        }),
        [taskActions.DELETE_TASK]: (state, { category, rowID }) => ({
            ...state, 
            tasks: { 
                ...state.tasks,
                [category]: state.tasks[category].filter(tasks => tasks["id"] !== rowID)
            } 
        }),
        [taskActions.TOGGLE_HIDDEN_TABLE]: (state, { category }) => ({
            ...state,
            hiddenTables: { ...state.hiddenTables, [category]: !state.hiddenTables[category] }
        }),
        [taskActions.UPDATE_EDIT_CELL]: (state, { rowID, colID }) => ({
            ...state,
            editingCell: { rowID: rowID, colID: colID }
        })
    },
    defaultState
);

export default taskReducer;