import { configureStore } from '@reduxjs/toolkit';
import { format } from "date-fns";

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

const tasksReducer = ( state = { tasks: defaultTask }, action ) => {
    if(action.type === 'CREATE_TASK') {
        const newTime = format(new Date(), 'yyyy-MM-dd HH:mm')
        const newTasksCategory = state.tasks[action.category].concat({
            name: '', time:newTime, memo:'', difficulty:"normal", check:false, id: state.tasks.newTaskID, order: state.tasks.newTaskID
        });
        const newTasks = { ...state.tasks, [action.category]: newTasksCategory, newTaskID: state.tasks.newTaskID + 1 };
        return { ...state, tasks: newTasks };
    } else if (action.type === 'UPDATE_TASK') {
        const newTasksCategory = state.tasks[action.category].map((row) => {
            if(row.id === action.rowID) {
                return { ...row, [action.colID]: action.changedValue };
            }
            return row;
        });
        const newTasks = { ...state.tasks, [action.category]: newTasksCategory};
        return { ...state, tasks: newTasks };
    } else if (action.type === 'DELETE_TASK') {
        const newTasks = Object.entries(state.tasks).reduce((acc, [category, rows]) => {
            acc[category] = rows.filter(tasks => tasks["id"] !== action.rowID);
            return acc;
        }, {});
        return { ...state, tasks: newTasks };
    }
    return state;
};

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

const columnSettingsReducer = ( state = { columnSettings: defaultColumnSettings }, action ) => {
    return state;
};

const defaultHiddenTables = {
    action: false,
    defered: false
};

const hiddenTablesReducer = ( state = { hiddenTables : defaultHiddenTables }, action ) => {
    if(action.type === 'TOGGLE_HIDDEN_TABLE'){
        const newHiddenTable = { ...state.hiddenTables, [action.category]: !state.hiddenTables[action.category] };
        return { hiddenTables: newHiddenTable };
    }
    return state;
}

const defaultEditingCell = {
    rowID: null,
    colID: null
};

const editingCellReducer = ( state = { editingCell: defaultEditingCell }, action ) => {
    if(action.type === 'UPDATE_EDIT_CELL'){
        return {
            ...state,
            editCell: {
                rowID: action.rowID,
                colID: action.colID
            }
        };
    }
    return state;
}

const store = configureStore({
    reducer: {
        tasksReducer,
        columnSettingsReducer,
        hiddenTablesReducer,
        editingCellReducer
    }
});

export default store;
