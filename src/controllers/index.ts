import { services } from "../services";

export const controllers = {
  auth: require('./auth.controller')(services.auth),
};