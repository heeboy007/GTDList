import { Optional } from "sequelize"

export interface EmailData {

    token: string;
    user_id: number;
    expiration_date: Date;
    email: string;
    verified: boolean;

}

export interface EmailDataInput extends Optional<EmailData, 'token' | 'email' | 'user_id'> {}
export interface EmailDataOutput extends Required<EmailData> {}