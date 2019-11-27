const express = require('express');
const router = express.Router();
const profilecontroller = require('../controllers/profileController');
const checkSignIn = profilecontroller.checkSignIn;
const messageController = require('../controllers/messageController');
const commmessageController = require('../controllers/messagecommentController');
const commentcontroller = require('../controllers/commentController');
const questioncontroller = require("../controllers/questionController")

router
    /* If user hits index, redirect to home page */
    .get('/', function(req, res) {return res.redirect('/home');})

    /* Routes for signup and login */
    .get('/signup', profilecontroller.getSignupPage)
    .post('/signup', profilecontroller.signupUser)
    .get('/complete-profile', checkSignIn, profilecontroller.completeProfile)
    .post('/complete-profile', profilecontroller.addProfileDetails)
    .post('/login', profilecontroller.login)
    .post('/logout', profilecontroller.logout)
    
    /* Routes for home page*/
    .get('/home', checkSignIn, profilecontroller.home)

    /* Routes for editing profile */
    .post('/editProfile', profilecontroller.editProfile)
    /*Routes for Comments*/
    /*Should be post"*/
    .get('/Questions/FeedComment/createComment',commentcontroller.createComment)
    .get("/Questions/FeedComment/viewComment", commentcontroller.viewComments)
 
     /*Should be post"*/
    .get('/Questions/FeedComment/delComment',commentcontroller.createComment)


    /* Routes for question */
       /*Should be post"*/
    .get("/Questions/createQuestion", questioncontroller.createQuestion)
    .get("/Questions/questionsTop5Question", questioncontroller.viewTop5Question)
    .get("/Questions/allsearchquestion", questioncontroller.allsearchquestion)
    .get("/Questions/singlesearchquestion",questioncontroller.singlesearchquestion)
    .get("/Questions/allyourQuestion", questioncontroller.viewAllYourQuestions)
       /*Should be post"*/
    .get("/Questions/deletequestions", questioncontroller.deletequestion)

    /*Routes for finding and creating pair on instant messaging*/
    .get('/InstantMessaging/findPair', messageController.findPairUser)
       /*Should be post"*/
    .get('/InstantMessaging/createPair', messageController.createPairUser)
    /*Routes for finding and creating pair on instant messaging*/
    .get('/InstantMessaging/Response/AllInstantMessage', commmessageController.findAllMessageBetweenUser)
       /*Should be post"*/
<<<<<<< HEAD
  //  .post('/InstantMessaging/Response/createInstantMessage', commmessageController.CreateInstantMessage)
=======
    .get('/InstantMessaging/Response/createInstantMessage', commmessageController.CreateInstantMessage)

>>>>>>> 9a05d234a1974a0924d3a0e592660d3dc32a02e8
    /* Website pages */
<<<<<<< HEAD
    .get('/message', function(req, res) { res.render('message');})
    .get('/messageInbox', function(req, res) { res.render('messageInbox');})
=======
    .get('/', function(req, res) { 
        res.render('layouts/index', { title: 'Knowledge Base', heading: 'Signup', indexCSS: true})
    })

    .get('/messageInbox', function(req, res) { 
        res.render('messageInbox', { title: 'Knowledge Base Messaging', heading: 'Messaging', messageInboxCSS: true})
    })
    
    .get('/home', function(req, res) { 
        res.render('home', { title: 'Knowledge Base Home', heading: 'Home', homeCSS: true})
    })
    
    .get('/signup', function(req, res) { 
        res.render('signup', { title: 'Knowledge Base Signup', heading: 'Signup', signupCSS: true})
    })
    
    .get('/message', function(req, res) { 
        res.render('message', { title: 'Knowledge Base Message', heading: 'Message', messageCSS: true})
    })
    
    .get('/profile', function(req, res) { 
        res.render('profile', { title: 'Knowledge Base Profile', heading: 'Profile', profileCSS: true})
    })

>>>>>>> 7923182bcbf8dbb3b5a8b822d41291ba8e8361d6

module.exports = router;