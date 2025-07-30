import { AuthServices, LoginDTO, RegisterDTO } from "../interfaces";
import { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/response";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

module.exports = (authServices: AuthServices)=>{

//------------------------Register---------------------------------------------------------

    const register = async (req:Request, res:Response) => {
        const { name, email, password }:RegisterDTO = req.body;
        try{
            const existingUser = await authServices.findUserByEmail(email);
            if(existingUser){
                return sendError(res, 'User already exists', StatusCodes.CONFLICT);
            }

            const newUser = await authServices.createUser({ name, email, password });
            return sendSuccess(
                res,
                { id: newUser.id, name: newUser.name, email: newUser.email },
                StatusCodes.CREATED
            )

        }catch(err){
            return sendError(res, 'Error registering user', StatusCodes.INTERNAL_SERVER_ERROR, err);
        }
    }
//------------------------Login----------------------------------------------------------

    const login = async (req:Request, res:Response) => {
        try{
            const { email, password }:LoginDTO = req.body;

            const user = await authServices.findUserByEmail(email);
            if(!user){
                return sendError(res, 'User not found', StatusCodes.NOT_FOUND);
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if(!isPasswordValid){
                return sendError(res, 'Invalid credentials', StatusCodes.UNAUTHORIZED);
            }

            const payload = { id: user.id, name: user.name, email: user.email }



            const token = jwt.sign(payload, env.jwt.secret,{expiresIn: "1h"});

            return sendSuccess(
                res,
                { token, user: payload },
                StatusCodes.OK
            );
        }catch(err){
            return sendError(res, 'Error logging in', StatusCodes.INTERNAL_SERVER_ERROR, err);
        }
    }



//----------------------Return------------------------------------------------------
    return{
        register,
        login
    }

}