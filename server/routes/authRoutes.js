const Router = require('express').Router();

// call controller here
const {userSignup} = require('../controllers/authController')

Router.post('/signup',userSignup)

module.exports = router;