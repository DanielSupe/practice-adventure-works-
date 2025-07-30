const {validationResult} = require('express-validator');
import { NextFunction,Response,Request } from "express";
import { sendError } from "./response";
import { StatusCodes } from "http-status-codes";

const ValidateResult = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const messages = errors.array().map((err:any) => err.msg).join(', ');
        return sendError(res, messages, StatusCodes.BAD_REQUEST);
    }
    return next();
};

module.exports = ValidateResult;