const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'GlobalValue',
        {
            total_views: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
        },
    );
}