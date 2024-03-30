import EmailDB from "../../database/implementation/Email.DB.ts";
import TaskDB from "../../database/implementation/Task.DB.ts";
import UserDB from "../../database/implementation/User.DB.ts";
import Sequelizable from "../../database/interface/Sequelizable.ts";


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