import { Sequelize } from "sequelize";

interface Sequelizable {

    linkSequelize(sequelize: Sequelize): void;

    syncSequlize(): Promise<void>;

}

export default Sequelizable;