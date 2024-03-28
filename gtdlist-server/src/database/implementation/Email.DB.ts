import { Sequelize } from 'sequelize';
import BuiltModel from './BuiltModel';
import emailBuildConfig from './seqbuild/Email.buildconfig';

class EmailDB implements {
    //TODO maybe have to set this not just "any" here...
    private builtModel?: BuiltModel;

    build(sequelize: Sequelize): BuiltModel {
        let [ tableName, columns, indexes ]: [string, any, any] = emailBuildConfig;
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

export default EmailDB;