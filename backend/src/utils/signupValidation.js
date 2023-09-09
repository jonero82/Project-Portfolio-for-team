const { body } = require('express-validator');

module.exports = {
    signUpValidation: [
      body('email')
        .trim()
        .notEmpty()
        .isEmail()
        .withMessage('Invalid email address')
        .normalizeEmail(),
          
      body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .matches(/\d/)
        .withMessage('Password must contain at least one digit')
        .matches(/[!@#$%^&*]/)
        .withMessage('Password must contain at least one special character'),
    ],
  };