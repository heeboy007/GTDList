import { Sequelize } from 'sequelize';
import userBuildConfig from './seqbuild/User.buildconfig';
import Buildable from './buildable';
import BuiltModel from './BuiltModel';

class UserDB implements Buildable {
    //TODO maybe have to set this not just "any" here...
    private builtModel?: BuiltModel;

    build(sequelize: Sequelize): BuiltModel {
        let [ tableName, columns, indexes ]: [string, any, any] = userBuildConfig;
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

export default UserDB;