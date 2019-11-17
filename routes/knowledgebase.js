const express = require('express');

const router = express.Router();

const logincontroller = require('../controllers/loginController');
const messagecontroller = require('../controllers/messageController');
const postcontroller = require('../controllers/postController');
const profilecontroller = require('../controllers/profileController');

router
    .get('/', logincontroller.login)
    .get('/profilecreationstep1',profilecontroller.profileCreator1)
    .get('/profilecreationstep2',profilecontroller.profileCreator2)
    .get('/profilecreationcancel', profilecontroller.profileCreaterCancel)
    .get('/profilelogin', logincontroller.checklogin)

module.exports = router;