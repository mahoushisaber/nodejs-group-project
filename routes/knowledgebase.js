const express = require('express');

const router = express.Router();

const logincontroller = require('../controllers/loginController');
const messagecontroller = require('../controllers/messageController');
const postcontroller = require('../controllers/postController');
const profilecontroller = require('../controllers/profileController');

router
    .get('/', logincontroller.login)

module.exports = router;