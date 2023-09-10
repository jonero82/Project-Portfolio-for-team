const signUp  = require('../../../../controllers/userController/signUp');
const signUpValidation  = require('../../../../utils/signupValidation');

const router = require('express').Router();

router.post('/register', signUpValidation, signUp);


module.exports = router;