const { body } = require('express-validator');

const signUpValidation = [
      body('email')
        .trim()
        .notEmpty()
        .isEmail()
        .withMessage('Invalid email address')
        .normalizeEmail(),
          
      body('password')
        .notEmpty()
        .withMessage('Please enter a valid password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .matches(/\d/)
        .withMessage('Password must contain at least one digit')
        .matches(/[!@#$%^&*]/)
        .withMessage('Password must contain at least one special character')
        .custom((value, { req }) => {
            if (value !== req.body.passwordAgain) {
              throw new Error("Password does not match!");
            }
            return true;
          }),
];


module.exports = signUpValidation;