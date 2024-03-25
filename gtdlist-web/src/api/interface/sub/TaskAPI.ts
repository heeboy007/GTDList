import TaskCategory from "../../enum/TaskCategory";
import TaskRec, { TaskRecAll } from "../../recordTypes/TaskRec";

interface TaskAPI {

    getEntireTask(): Promise<TaskRecAll>; 

    getTasksByCategory(category: TaskCategory): Promise<TaskRec[]>;

    createTask(): Promise<Response>;

    updateTask(id: number): Promise<Response>;

    deleteTask(id: number): Promise<Response>;

}

export default TaskAPI;