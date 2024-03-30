import { InitOptions, Model, ModelAttributes, Optional, Sequelize } from 'sequelize';
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

    linkSequelize(sequelize: Sequelize) {
        let indexes = emailBuildConfig[2];
        indexes = { 
            ...indexes,
            sequelize: sequelize
        };
        EmailDB.init(
            emailBuildConfig[1] as ModelAttributes<EmailDB, Optional<EmailData, never>>, 
            indexes as InitOptions<EmailDB>
        );
    }

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