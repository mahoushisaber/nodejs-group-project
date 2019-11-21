const express = require('express');
const router = express.Router();
const logincontroller = require('../controllers/loginController');
const profilecontroller = require('../controllers/profileController');

router
    /* Routes for home page */
    .get('/', function(req, res) { res.render('index');})

    /* Routes for user/profile */
    .get('/profilecreationstep1',profilecontroller.usercreate1)
    .get('/profilecreationstep2',profilecontroller.usercreate2)
    .get('/profilecreationcancel', profilecontroller.profileCreaterCancel)
    .get('/profilefind', profilecontroller.userfindUser)
    .get('/userlogin', profilecontroller.userLogin)


module.exports = router;