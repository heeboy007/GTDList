import { DataTypes } from 'sequelize';

export default (sequelize) => {
    return sequelize.define(
        'GlobalValue',
        {
            total_views: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
        },
    );
};