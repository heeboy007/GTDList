import { Model, ModelCtor } from "sequelize";

//TODO : set this thing not to just Any...
type BuiltModel = ModelCtor<Model<any, any>>;

export default BuiltModel;