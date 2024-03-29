import { Model, Sequelize } from 'sequelize';
import emailBuildConfig from './seqbuild/Email.buildconfig';
import Sequelizable from '../interface/Sequelizable';
import { EmailData, EmailDataInput } from '../dataset/Email.dataset';
import Singleton from '../../util/decorator/Singleton';

@Singleton
class EmailDB extends Model<EmailData, EmailDataInput> implements EmailData, Sequelizable {
    //TODO maybe have to set this not just "any" here...
    
    token!: string;
    user_id!: number;
    expiration_date!: Date;
    email!: string;
    verified!: boolean;

    //TODO maybe have to set this not just "any" here...
    linkSequelize(sequelize: Sequelize) {
        let [ _, columns, indexes ]: [string, any, any] = emailBuildConfig;
        indexes = { 
            ...indexes,
            sequelize: sequelize
        };
        EmailDB.init(columns, indexes);
    };

    async syncSequlize() {
        await EmailDB.sync({force : true})
        .then(() => {
            console.log("✅Success Create User Table");
        })
        .catch((err) => {
            console.log("❗️Error in Create User Table : ", err);
        })
    }
}

export default EmailDB;