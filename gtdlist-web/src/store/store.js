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
    ]
};

const tasksReducer = ( state = { tasks: defaultTask }, action ) => {
    if(action.type === 'CREATE') {
        const newTime = format(new Date(), 'yyyy-MM-dd HH:mm')
        const newTasksCategory = state.tasks[action.category].concat({
            name: '', time:newTime, memo:'', difficulty:"normal", check:false, id: state.newTaskID, order: state.newTaskID
        });
        const newTasks = { ...state.tasks, [action.category]: newTasksCategory};
        return { ...state, tasks: newTasks };
    } else if (action.type === 'UPDATE') {
        const newTasksCategory = state.tasks[action.category].map((row) => {
            if(row.id === action.rowID) {
                return { ...row, [action.colID]: action.changedValue };
            }
            return row;
        });
        const newTasks = { ...state.tasks, [action.category]: newTasksCategory};
        return { ...state, tasks: newTasks };
    } else if (action.type === 'DELETE') {
        const newTasks = Object.entries(state.tasks).reduce((acc, [category, rows]) => {
            acc[category] = rows.filter(tasks => tasks["id"] !== action.rowID);
            return acc;
        }, {});
        return { ...state, tasks: newTasks };
    }
    return state;
};

const defaultNewTaskID = 5;

const newTaskIDReducer = ( state = { newTaskID: defaultNewTaskID }, action ) => {
    if(action.type === 'INCREMENT') {
        return { ...state, newTaskID: state.newTaskID + 1 };
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

const store = configureStore({
    reducer: {
        tasksReducer,
        newTaskIDReducer,
        columnSettingsReducer
    }
});

export default store;
