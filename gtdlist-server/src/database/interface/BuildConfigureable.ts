import { DataType, Sequelize } from "sequelize"

/* 
    This entire folder is only for sequelize configstorage.
    Do not use for any other purposes, for instance, other sort of api implemetation.
*/

export type BuildColumns = {
    [columns: string]: {
        type: DataType,
        autoIncrement?: boolean,
        allowNull?: boolean,
        primaryKey?: boolean,
        values?: string[],
        defaultValue?: string | boolean | number,
    }
}

export type BuildIndexes = {
    //this must be added in build time.
    sequelize?: Sequelize,
    tableName: string,
    indexes: {
        name: string,
        unique: boolean,
        fields: { name: string }[]
    }[],
    timestamps: boolean,
    paranoid: true,
}

type BuildConfigurable = [
    string,
    BuildColumns,
    BuildIndexes
]

export default BuildConfigurable;