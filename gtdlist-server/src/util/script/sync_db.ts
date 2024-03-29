import EmailDB from "../../database/implementation/Email.DB";
import TaskDB from "../../database/implementation/Task.DB";
import UserDB from "../../database/implementation/User.DB";
import Sequelizable from "../../database/interface/Sequelizable";


function sync_db() {
    const databases: Sequelizable[] = [
        new TaskDB(),
        new EmailDB(),
        new UserDB()
    ];
    for(const database of databases) {
        database.syncSequlize();
    }
}

sync_db();