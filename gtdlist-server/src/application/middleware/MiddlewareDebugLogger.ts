import { Request, Response, NextFunction } from 'express';
import Log from '../../logger/Log';

const MiddlewareDebugLogger = function(req: Request, _:Response, next: NextFunction) {
    Log.L("Got Request : ", req);
    next();
}

export default MiddlewareDebugLogger;