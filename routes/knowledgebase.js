const express = require('express');

const router = express.Router();

const logincontroller = require('../controllers/loginController');
//const messagecontroller = require('../controllers/messageController');
//const postcontroller = require('../controllers/postController');
const profilecontroller = require('../controllers/profileController');

router
    .get('/profilecreationstep1',profilecontroller.usercreate1)
    .get('/profilecreationstep2',profilecontroller.usercreate2)
    .get('/profilecreationcancel', profilecontroller.profileCreaterCancel)
    .get('/profilefind', profilecontroller.userfindUser)
    .get('/userlogin', profilecontroller.userLogin)
    //.get('/', logincontroller.login)

    // .get('/profilelogin', logincontroller.checklogin)

module.exports = router;