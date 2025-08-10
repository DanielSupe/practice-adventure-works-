import { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/response";
import { StatusCodes } from "http-status-codes";
import { AuthServices, commentServices, createComment } from "../interfaces";

module.exports = (commentServices: commentServices, authServices: AuthServices)=>{

    const createComment = async (req: Request, res: Response) => {
        try {
            const commentData:createComment = req.body;

            const user = await authServices.findUserById(commentData.userId);
            if (!user) {
                return sendError(res, "User not found", StatusCodes.NOT_FOUND);
            }
            const newComment = await commentServices.createComment(commentData);
            return sendSuccess(res, newComment, StatusCodes.CREATED);
        } catch (error) {
            return sendError(res, "Error creating comment", StatusCodes.INTERNAL_SERVER_ERROR, error);
        }
    }

    const getAllComments = async (req: Request, res: Response) => {
        // Implementation for fetching all comments can be added here
    }



//----------------------Return------------------------------------------------------
    return{
        createComment
    }

}