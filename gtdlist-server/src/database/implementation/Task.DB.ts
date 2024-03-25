import { Sequelize } from 'sequelize';
import taskBuildConfig from './seqbuild/Task.buildconfig';
import Buildable from './buildable';
import BuiltModel from './BuiltModel';

class TaskDB implements Buildable {
    //TODO maybe have to set this not just "any" here...
    private builtModel?: BuiltModel;

    build(sequelize: Sequelize): BuiltModel {
        let [ tableName, columns, indexes ]: [string, any, any] = taskBuildConfig;
        indexes = { 
            ...indexes,
            sequelize: sequelize
        };
        return sequelize.define(tableName, columns, indexes);
    };

    getBuiltModel(): BuiltModel | void {
        if(this.builtModel)
            return this.builtModel;
        else
            return;
    }

    debugIfItsAlreadyBuilt(): boolean {
        return !!this.builtModel;
    }
}

export default TaskDB;