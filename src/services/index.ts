import {db} from "../models";
const createdAuthServices = require('./auth.services');

export const services = {
  auth: createdAuthServices(db.Users),
};