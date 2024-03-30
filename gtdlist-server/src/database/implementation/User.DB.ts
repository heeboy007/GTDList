import { InitOptions, Model, ModelAttributes, Optional, Sequelize } from 'sequelize';
import userBuildConfig from './seqbuild/User.buildconfig.ts';
import { UserData, UserDataInput } from '../dataset/User.dataset.ts';
import Sequelizable from '../interface/Sequelizable.ts';
import Singleton from '../../util/decorator/Singleton.ts';
import LoginMethods from '../../application/enum/LoginMethods.ts';
import AccountState from '../../application/enum/AccountState.ts';
import Log from '../../logger/Log.ts';

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

    linkSequelize(sequelize: Sequelize) {
        let indexes = userBuildConfig[2];
        indexes = { 
            ...indexes,
            sequelize: sequelize
        };
        UserDB.init(
            userBuildConfig[1] as ModelAttributes<UserDB, Optional<UserData, never>>, 
            indexes as InitOptions<UserDB>
        );
    }

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