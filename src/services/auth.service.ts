import bcrypt from 'bcrypt'
import { ModelStatic } from 'sequelize';
import { IUser, RegisterDTO } from '../interfaces';
import { env } from '../config/env';
module.exports = (UsersModel: ModelStatic<IUser>) => {

    const findUserByEmail = async (email:string)=>{
        const user = await UsersModel.findOne({where: {email}});
        return user;
    }

    const createUser = async (user:RegisterDTO)=>{
        const hashedPassword = await bcrypt.hash(user.password, env.bcrypt.saltRounds );
        const newUser = await UsersModel.create({...user, password: hashedPassword});
        return newUser;
    }

    const findUserById = async (id:number)=>{
        const user = await UsersModel.findByPk(id);
        return user;
    }


    return {
        findUserByEmail,
        createUser,
        findUserById
    }
}