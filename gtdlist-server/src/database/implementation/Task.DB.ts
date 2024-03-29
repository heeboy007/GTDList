import { Model, Sequelize } from 'sequelize';
import taskBuildConfig from './seqbuild/Task.buildconfig';
import Sequelizable from '../interface/Sequelizable';
import { TaskData, TaskDataInput } from '../dataset/Task.dataset';
import Singleton from '../../util/decorator/Singleton';
import TaskDifficulty from '../../application/enum/TaskDifficulty';
import Log from '../../logger/Log';

@Singleton
class TaskDB extends Model<TaskData, TaskDataInput> implements TaskData, Sequelizable {
    //TODO maybe have to set this not just "any" here...

    public readonly id!: number;
    public user_id!: string;
    public name!: string;
    public due_date?: Date;
    public order!: string;
    public difficulty!: TaskDifficulty;
    public check!: boolean;

    //TODO maybe have to set this not just "any" here...
    linkSequelize(sequelize: Sequelize) {
        let [ _, columns, indexes ]: [string, any, any] = taskBuildConfig;
        indexes = { 
            ...indexes,
            sequelize: sequelize
        };
        TaskDB.init(columns, indexes);
    };

    async syncSequlize() {
        await TaskDB.sync({force : true})
        .then(() => {
            console.log("✅Success Create User Table");
        })
        .catch((err) => {
            console.log("❗️Error in Create User Table : ", err);
        })
    }
}

export default TaskDB;