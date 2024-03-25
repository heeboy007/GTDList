import BuildConfigurable from "./buildConfigureable";
import { DataTypes } from "sequelize";

const taskBuildConfig: BuildConfigurable = [
    'Task',
    {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        order: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        check: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        tableName: 'Task',
        indexes: [
            {
                name: 'PRIMARY',
                unique: true,
                fields: [{ name: 'id' }]
            },
            {
                name: 'userId',
                unique: true,
                fields: [{ name: 'user_id' }]
            },
        ],
        timestamps: true
    }
];

export default taskBuildConfig;