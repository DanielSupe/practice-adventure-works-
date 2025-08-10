import { services } from "../services";

export const controllers = {
  auth: require('./auth.controller')(services.auth),
  products: require('./products.controller')(services.products),
  comment: require('./comment.controller')(services.comment,services.auth)
};