import BuildConfigurable from "../../interface/BuildConfigureable.ts";
import { DataTypes } from "sequelize";

const emailBuildConfig: BuildConfigurable = [
    'EmailVerificationToken',
    {
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        expiration_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        tableName: 'EmailVerificationToken',
        indexes: [
            {
                name: 'token',
                unique: true,
                fields: [{ name: 'token' }]
            },
        ],
        timestamps: false,
        paranoid: true,
    }
];

export default emailBuildConfig;