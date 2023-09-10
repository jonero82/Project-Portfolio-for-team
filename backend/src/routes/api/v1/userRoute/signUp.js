const signUp  = require('../../../../controllers/userController/signUp');
const signUpValidation  = require('../../../../middlewares/signupValidation');

const router = require('express').Router();

router.post('/register', signUpValidation, signUp);


module.exports = router;