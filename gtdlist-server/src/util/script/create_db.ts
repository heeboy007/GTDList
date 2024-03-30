import sequelize from "../../database/common/Sequelize.ts";
import EmailDB from "../../database/implementation/Email.DB.ts";
import TaskDB from "../../database/implementation/Task.DB.ts";
import UserDB from "../../database/implementation/User.DB.ts";
import Sequelizable from "../../database/interface/Sequelizable.ts";

//this is not called by any application, it's for maintainence purposes.
function create_db() {
    const databases: Sequelizable[] = [
        new TaskDB(),
        new EmailDB(),
        new UserDB()
    ];
    for(const database of databases) {
        database.linkSequelize(sequelize);
    }
}

create_db();