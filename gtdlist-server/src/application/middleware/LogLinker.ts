import { Request, Response, NextFunction } from 'express';

const LogLinker = function(req: Request, _:Response, next: NextFunction) {
    Log.L("Got Request : ", req);
    next();
}

export default LogLinker;