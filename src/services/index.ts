import {db} from "../models";
const createdAuthServices = require('./auth.service');
const createdProductServices = require('./products.service');
const createdCommentServices = require('./comments.service');

export const services = {
  auth: createdAuthServices(db.Users),
  products: createdProductServices(db.Products),
  comment: createdCommentServices(db.Comments)
};