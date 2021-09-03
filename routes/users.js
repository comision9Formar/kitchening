const express = require('express');
const router = express.Router();

const {register, processRegister,login,processLogin,profile, logout} = require('../controllers/usersController')
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

/* /users */
router.get('/register',register);
router.post('/register',registerValidator, processRegister);
router.get('/login',login);
router.post('/login',loginValidator, processLogin);

router.get('/profile',profile);
router.get('/logout',logout);


module.exports = router;