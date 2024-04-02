import { Request, Response, NextFunction } from 'express';
import Log from '../Log.ts';

const MiddlewareDebugLogger = function(req: Request, _:Response, next: NextFunction) {
    Log.L(
        "Request Log: ", 
        "Date : " + new Date(), 
        "Original URL : " + req.originalUrl,
        "Common URL : " + req.baseUrl + req.path,
        "From IP: " + req.clientIp || "unknown");
    next();
}

export default MiddlewareDebugLogger;