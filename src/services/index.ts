import {db} from "../models";
const createdAuthServices = require('./auth.services');
const createdProductServices = require('./products.services');


export const services = {
  auth: createdAuthServices(db.Users),
  products: createdProductServices(db.Products),
};