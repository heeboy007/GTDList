import { Request, Response } from "express";

// interface which is fully router-able.
abstract class Authentication {

    abstract login(req: Request, res: Response): Promise<Response>;
    abstract logout(req: Request, res: Response): Promise<Response>;
    abstract check(req: Request, res: Response): Promise<Response>;
    abstract register(req: Request, res: Response): Promise<Response>;

}

export default Authentication;