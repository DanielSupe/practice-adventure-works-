import { Router } from 'express';
import { controllers } from '../controllers';
import { loginValidator, registerValidator } from '../validations/auth.validations';
const router = Router();
const {comment} = controllers;

router.post("/createComment", comment.createComment);


export default router;