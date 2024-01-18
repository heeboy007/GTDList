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
        const newCategoryTasks = state.tasks[action.category].filter(tasks => tasks["id"] !== action.rowID);
        const newTasks = { ...state.tasks, [action.category]: newCategoryTasks };
        return { ...state, tasks: newTasks };
    }
    return state;
};

export default tasksReducer;