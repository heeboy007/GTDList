import { Request, Response, Router } from "express";
import bcrypt from 'bcrypt';
import { add } from "date-fns";
import express from "express";

import Authentication from "../interface/Auth.interface.ts";
import Log from "../../logger/Log.ts";
import DataBaseSecurity from "../../util/constants/application/DatabaseSecurity.ts";
import UserDB from "../../database/implementation/User.DB.ts";
import LoginMethods from "../enum/LoginMethods.ts";
import AccountState from "../enum/AccountState.ts";
import is from "../../util/validator/is.ts";

class DataBaseAuthentication extends Authentication {

    async login(req: Request, res: Response): Promise<Response> {
        Log.L(req.accepted);
        return res.status(200);
    }

    async logout(req: Request, res: Response): Promise<Response> {
        Log.L(req.accepted);
        return res.status(200);
    }

    async check(req: Request, res: Response): Promise<Response> {
        Log.L(req.accepted);
        return res.status(200);
    }

    async register(req: Request, res: Response): Promise<Response> {
        //입력값을 검증함
        const { email, password } = req.body;
        if(!is.email(email)) {
            return res.status(400).json({ authError: 'Invaild Email' }); 
        }
        if(!is.password(password)) {
            return res.status(400).json({ authError: 'Invaild Password' });
        }

        const hashedPassword = await bcrypt.hash(password, DataBaseSecurity.saltRounds);
        const passwordExpirationDate = add(new Date(),  { days: DataBaseSecurity.expirationForPasswordDurationDays });
    
        //simply create a user, and see if fails.
        try {
            await UserDB.create({
                email,
                password: hashedPassword,
                account_state: AccountState.email_verify_needed,
                account_login_method: LoginMethods.normal,
                password_invalidation_date: passwordExpirationDate
            });
        } catch(e) {
            Log.E('API : Authentication : register : Could not make user.');
            Log.E(e);
            return res.status(500).json({ authError: 'Could not make user.' });
        }
    
        return res.status(201).json({ auth: 'user creation success' });
    }

    getRouter() : Router {
        const authRouter: Router = express.Router();

        authRouter.post('/register', this.register);
        authRouter.post('/login', this.login);
        authRouter.get('/check', this.check);
        authRouter.post('/logout', this.logout);

        return authRouter;
    }

}

export default DataBaseAuthentication;