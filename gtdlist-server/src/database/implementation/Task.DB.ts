import { InitOptions, Model, ModelAttributes, Optional, Sequelize } from 'sequelize';
import taskBuildConfig from './seqbuild/Task.buildconfig.ts';
import Sequelizable from '../interface/Sequelizable.ts';
import { TaskData, TaskDataInput } from '../dataset/Task.dataset.ts';
import Singleton from '../../util/decorator/Singleton.ts';
import TaskDifficulty from '../../application/enum/TaskDifficulty.ts';

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

    linkSequelize(sequelize: Sequelize) {
        let indexes = taskBuildConfig[2];
        indexes = { 
            ...indexes,
            sequelize: sequelize
        };
        TaskDB.init(
            taskBuildConfig[1] as ModelAttributes<TaskDB, Optional<TaskData, never>>, 
            indexes as InitOptions<TaskDB>
        );
    }

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