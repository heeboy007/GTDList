import { Optional } from "sequelize";
import TaskDifficulty from "../../application/enum/TaskDifficulty";

export interface TaskData {

    id: number;
    user_id: string;
    name: string;
    due_date?: Date;
    order: string;
    difficulty: TaskDifficulty;
    check: boolean;

}

export interface TaskDataInput extends Optional<TaskData, 'id'> {}