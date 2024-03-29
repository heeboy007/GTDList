import { Model, Sequelize } from 'sequelize';
import userBuildConfig from './seqbuild/User.buildconfig';
import { UserData, UserDataInput } from '../dataset/User.dataset';
import Sequelizable from '../interface/Sequelizable';
import Singleton from '../../util/decorator/Singleton';
import LoginMethods from '../../application/enum/LoginMethods';
import AccountState from '../../application/enum/AccountState';
import Log from '../../logger/Log';

@Singleton
class UserDB extends Model<UserData, UserDataInput> implements UserData, Sequelizable {

    public id!: number;
    public email!: string;
    public password!: string;
    public account_login_method!: LoginMethods;
    public account_state!: AccountState;
    public password_invalidation_date!: Date;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;

    private isSeqLinked: boolean = false;

    //TODO maybe have to set this not just "any" here...
    linkSequelize(sequelize: Sequelize) {
        let [ _, columns, indexes ]: [string, any, any] = userBuildConfig;
        indexes = { 
            ...indexes,
            sequelize: sequelize
        };
        UserDB.init(columns, indexes);
    };

    async syncSequlize() {
        await UserDB.sync({force : true})
        .then(() => {
            console.log("✅Success Create User Table");
        })
        .catch((err) => {
            console.log("❗️Error in Create User Table : ", err);
        })
    }

    async fetchLoginAttemptUser(email: string): Promise<UserData | null> {
        if(!this.isSeqLinked)  {
            Log.E('The model is not linked yet...');
            return null;
        }

        //TODO : have no idea what this type is
        const user: UserData | null = await UserDB.findOne({
            where: { email }
        });

        if(!user) {
            Log.E('User Model was not fetchable.');
            return null;
        }

        return user;
    }
}

export default UserDB;