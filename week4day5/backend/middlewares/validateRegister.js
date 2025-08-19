import {body, validationResult} from 'express-validator'

export const validateRegister = [
    body('name')
    .notEmpty().withMessage('Name is required')
    .isLength({ min:3 }).withMessage('Name must be at least 3 characters long'),

    body('email')
    .isEmail().withMessage('Enter valid email address'),

    body('password')
    .isLength({ min:8 }).withMessage('Password must be at least 8 characters long'),

    
    (request, response, next) => {
        const errors = validationResult(request);
        if(!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        next();
    }
];