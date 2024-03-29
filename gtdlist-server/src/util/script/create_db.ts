import sequelize from "../../database/common/Sequelize";
import EmailDB from "../../database/implementation/Email.DB";
import TaskDB from "../../database/implementation/Task.DB";
import UserDB from "../../database/implementation/User.DB";
import Sequelizable from "../../database/interface/Sequelizable";

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