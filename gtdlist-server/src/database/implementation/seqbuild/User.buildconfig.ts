import { DataTypes } from 'sequelize';
import BuildConfigurable from '../../interface/BuildConfigureable';

const userModelConfig: BuildConfigurable = [
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profile_image_url: {
            type: DataTypes.STRING,
        },
        recent_login: {
            type: DataTypes.DATE,
        },
        account_login_method: {
            type: DataTypes.ENUM,
            values: ['normal', 'google', 'kakao'],
            allowNull: false
        },
        account_state: {
            type: DataTypes.ENUM,
            values: ['active', 'closed', 'email_verfiy_needed', 'suspended'],
            defaultValue: 'email_verfiy_needed',
            allowNull: false
        },
        password_invalidate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        perferences: {
            type: DataTypes.JSON,
        },
        biography: {
            type: DataTypes.STRING,
        },
        terms_of_service_agreement: {
            type: DataTypes.JSON,
        },
        subscription_level: {
            type: DataTypes.STRING,
        },
        subscription_period: {
            type: DataTypes.DATE,
        },
        social_links: {
            type: DataTypes.JSON,
        },
        google_id: {
            type: DataTypes.STRING,
        },
        google_access_token: {
            type: DataTypes.STRING,
        },
        kakao_id: {
            type: DataTypes.STRING,
        },
        kakao_access_token: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: 'User',
        indexes: [
            {
                name: 'PRIMARY',
                unique: true,
                fields: [{ name: 'id' }]
            },
            {
                name: 'emailwithPassword',
                unique: true,
                fields: [{ name: 'email' }, { name: 'password' }]
            },
        ],
        timestamps: true,
        paranoid: true
    }
];

export default userModelConfig;