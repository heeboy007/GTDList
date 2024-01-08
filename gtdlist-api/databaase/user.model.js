const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'User',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            profile_image_url: {
                type: DataTypes.STRING,
                allowNull: true
            },
            creation_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            recent_login: {
                type: DataTypes.DATE,
                allowNull: true
            },
            account_login_method: {
                type: DataTypes.STRING,
                allowNull: false
            },
            account_state: {
                type: DataTypes.ENUM,
                values: ['active', 'closed', 'email_verfiy_needed', 'suspended'],
                defaultValue: 'email_verfiy_needed',
                allowNull: false
            },
            email_verfiy_token: {
                type: DataTypes.STRING,
                allowNull: true
            },
            password_invalidate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            perferences: {
                type: DataTypes.JSON,
                allowNull: true
            },
            biography: {
                type: DataTypes.STRING,
                allowNull: true
            },
            terms_of_service_agreement: {
                type: DataTypes.JSON,
                allowNull: true
            },
            subscription_level: {
                type: DataTypes.STRING,
                allowNull: true
            },
            subscription_period: {
                type: DataTypes.DATE,
                allowNull: true
            },
            social_links: {
                type: DataTypes.JSON,
                allowNull: true
            },
            google_id: {
                type: DataTypes.STRING,
                allowNull: true
            },
            google_access_token: {
                type: DataTypes.STRING,
                allowNull: true
            },
            kakao_id: {
                type: DataTypes.STRING,
                allowNull: true
            },
            kakao_access_token: {
                type: DataTypes.STRING,
                allowNull: true
            },
        },
        {
            sequelize,
            tableName: 'User',
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    fields: [{ name: 'id' }]
                },
                {
                    name: 'email',
                    unique: true,
                    fields: [{ name: 'email' }]
                },
            ],
            timestamps: false
        }
    );
}