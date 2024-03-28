import { Model, ModelStatic } from "sequelize";

//TODO : set this thing not to just Any...
type BuiltModel = ModelStatic<Model<any, any>>;

export default BuiltModel;