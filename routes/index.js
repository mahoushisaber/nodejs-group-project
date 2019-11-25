const express = require('express');
const router = express.Router();
const logincontroller = require('../controllers/loginController');
const checkSignIn = logincontroller.checkSignIn;
const profilecontroller = require('../controllers/profileController');

router
    /* If user hits index, redirect to home page */
    .get('/', function(req, res) {return res.redirect('/home');})

    /* Routes for signup and login */
    .get('/signup', logincontroller.getSignupPage)
    .post('/signup', logincontroller.signupUser)
    .get('/complete-profile', checkSignIn, logincontroller.completeProfile)
    .post('/complete-profile', logincontroller.addProfileDetails)
    .post('/login', logincontroller.login)
    .post('/logout', logincontroller.logout)

    /* Routes for user/profile */
    .get('/profilecreationstep1', checkSignIn, profilecontroller.usercreate1)
    .get('/profilecreationstep2', checkSignIn, profilecontroller.usercreate2)
    .get('/profilecreationcancel', checkSignIn, profilecontroller.profileCreaterCancel)
    .get('/profilefind', checkSignIn, profilecontroller.userfindUser)
    .get('/userlogin',profilecontroller.userLogin)
    
    /* Route for home page*/
    .get('/home', checkSignIn, logincontroller.home)


module.exports = router;