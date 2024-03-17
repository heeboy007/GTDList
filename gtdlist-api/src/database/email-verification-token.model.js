import { DataTypes } from 'sequelize';

export default (sequelize) => {
    return sequelize.define(
        'EmailVerificationToken',
        {
            token: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_id_number: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            expiration_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            used: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: 'EmailVerificationToken',
            indexes: [
                {
                    name: 'token',
                    unique: true,
                    fields: [{ name: 'token' }]
                },
            ],
            timestamps: false
        }
    );
};