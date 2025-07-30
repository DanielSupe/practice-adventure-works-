import { StatusCodes } from "http-status-codes";
import { Response } from 'express'


export const sendSuccess = (
    res: Response,
    data:any,
    status = StatusCodes.OK
) =>{
    return res.status(status).json({success: true,data });
};

export const sendError = (
    res: Response,
    message: string,
    status = StatusCodes.INTERNAL_SERVER_ERROR, 
    error?: any
) => {
    console.log('\x1b[31m%s\x1b[0m', error ? error : message);
    return res.status(status).json({ success: false, message });
};