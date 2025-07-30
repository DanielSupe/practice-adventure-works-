require('dotenv').config();
import { Dialect } from 'sequelize' 

const dialect = process.env.DIALECT as Dialect || 'mysql';

export const env = {
  server: {
    port: Number(process.env.PORT) || 3000,
  },
  db: {
    host: process.env.HOST || "localhost",
    port: Number(process.env.PORTDB) || 3306,
    name: process.env.DB_NAME || "baseLine",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    dialect: dialect,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "default_secret",
    expiresIn: process.env.EXPIRE_TIME || "1d",
  },
  bcrypt: {
    saltRounds: Number(process.env.saltRounds) || 10,
  },
};
