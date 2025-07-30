import { Router } from 'express';
import { controllers } from '../controllers';
import { loginValidator, registerValidator } from '../validations/auth.validations';
const router = Router();
const {auth} = controllers;

router.post("/register",registerValidator, auth.register);
router.post("/login", loginValidator, auth.login);

export default router;