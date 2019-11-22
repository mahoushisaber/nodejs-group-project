const express = require('express');
const router = express.Router();
const logincontroller = require('../controllers/loginController');
const profilecontroller = require('../controllers/profileController');

router
    /* Routes for home page */
    .get('/', function(req, res) { res.render('index');})
    .get('/home', function(req, res) { res.render('home');})
    .get('/signup', function(req, res) { res.render('signup');})
    .get('/message', function(req, res) { res.render('message');})
    .get('/messageInbox', function(req, res) { res.render('messageInbox');})

    /* Routes for user/profile */
    .get('/profilecreationstep1',profilecontroller.usercreate1)
    .get('/profilecreationstep2',profilecontroller.usercreate2)
    .get('/profilecreationcancel', profilecontroller.profileCreaterCancel)
    .get('/profilefind', profilecontroller.userfindUser)
    .get('/userlogin', profilecontroller.userLogin)



module.exports = router;