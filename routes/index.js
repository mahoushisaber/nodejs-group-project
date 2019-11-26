const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const commmessageController = require('../controllers/messagecommentController');
const profilecontroller = require('../controllers/profileController');
const commentcontroller = require('../controllers/commentController');
const questioncontroller = require("../controllers/questionController")
router
    /* Routes for home page */
    //.get('/', function(req, res) { res.render('index');})

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
       /*Should be post"*/
    .get("/Questions/deletequestions", questioncontroller.deletequestion)


    /* Routes for user/profile */
     /*Should be post"*/
    .get('/Profile/profilecreationstep1',profilecontroller.usercreate1)
     /*Should be post"*/
    .get('/Profile/profilecreationstep2',profilecontroller.usercreate2)
     /*Should be post"*/
    .get('/Profile/profilecreationcancel', profilecontroller.profileCreaterCancel)
    .get('/Profile/profilefind', profilecontroller.userfindUser)



    /*Routes for finding and creating pair on instant messaging*/
    .get('/InstantMessaging/findPair', messageController.findPairUser)
       /*Should be post"*/
    .get('/InstantMessaging/createPair', messageController.createPairUser)
    /*Routes for finding and creating pair on instant messaging*/
    .get('/InstantMessaging/Response/AllInstantMessage', commmessageController.findAllMessageBetweenUser)
       /*Should be post"*/
    .get('/InstantMessaging/Response/createInstantMessage', commmessageController.CreateInstantMessage)
    /* Website pages */
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


module.exports = router;