//{ name: 'Sample Task 1', time:"2023-12-28 08:10", memo:"Sample 1", difficulty:"normal", check:true, id:0, order:1 },

import TaskDifficulty from "../enum/TaskDifficulty";

type TaskRec = {
    id: number;
    order: number;

    name: string;
    time: Date;
    memo: string;
    difficulty: TaskDifficulty;
    check: boolean;
};

type TaskRecAll = { 
    [key: string]: TaskRec[] 
};

export {
    TaskRecAll
};

export default TaskRec;