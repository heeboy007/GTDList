import { Optional } from "sequelize";
import LoginMethods from "../../application/enum/LoginMethods.ts";
import AccountState from "../../application/enum/AccountState.ts";
import Subscriptions from "../../application/enum/Subscriptions.ts";
import OtherCredentials from "../../application/types/OtherCredentials.ts";

export interface UserData {

    id: number;
    email: string;
    password: string;
    profile_image_url?: string;
    recent_login?: Date;
    account_login_method: LoginMethods;
    account_state: AccountState;
    password_invalidation_date: Date;
    preferences?: object;
    biography?: string;
    terms_of_service_agreement?: object;
    subscription_level?: Subscriptions;
    subscription_period?: Date;
    social_links?: object;
    other_credentials?: OtherCredentials[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;

}

export interface UserDataInput extends Optional<UserData, 'id' | 'email'> {}
export interface UserDataOutput extends Required<UserData> {}