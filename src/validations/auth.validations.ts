import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';
const ValidateResult = require('../utils/validateHelper');

// Validación para registro
export const registerValidator = [
    check('email')
        .isEmail()
        .withMessage('The email must be valid'),
    check('password')
        .isLength({ min: 8, max: 32 })
        .withMessage('The password must be between 8 and 32 characters long'),
    check('name')
        .notEmpty()
        .withMessage('The name is required')
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/i)
        .withMessage('The name can only contain letters and spaces'),
    (req: Request, res: Response, next: NextFunction) => {
        ValidateResult(req, res, next);
    }
];

// Validación para login
export const loginValidator = [
    check('email')
        .isEmail()
        .withMessage('A valid email is required'),
    check('password')
        .notEmpty()
        .withMessage('Password is required'),
    (req: Request, res: Response, next: NextFunction) => {
        ValidateResult(req, res, next);
    }
];