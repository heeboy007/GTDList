import { Sequelize } from "sequelize";
import BuiltModel from "./BuiltModel";

// Interface for sequelize buildables.
// every implementation needs to have a seqBuild()
interface Buildable {

    build(seq: Sequelize): BuiltModel;

    getBuiltModel(): BuiltModel | void;

    debugIfItsAlreadyBuilt(): boolean;

}

export default Buildable;