const express = require('express');
const router = express.Router();
const profilecontroller = require('../controllers/profileController');
const checkSignIn = profilecontroller.checkSignIn;
const messageController = require('../controllers/messageController');
const commmessageController = require('../controllers/messagecommentController');
const commentcontroller = require('../controllers/commentController');
const questioncontroller = require("../controllers/questionController")
const searchTopicController = require("../controllers/topicController")

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
   .post('/home/next5discuession', profilecontroller.next5discussion)
    /* Routes for editing profile */
    .get('/edit', function(req, res){res.render('edit', {editCSS: true});})
    .post('/editProfile', profilecontroller.editProfile)

    /*Routes for Comments*/
    /*Should be post"*/
    .get('/Questions/FeedComment/createComment',commentcontroller.createComment)
    .get("/Questions/FeedComment/viewComment", commentcontroller.viewComments)
 
     /*Should be post"*/
    .get('/Questions/FeedComment/delComment',commentcontroller.createComment)


    /* Routes for question */
       /*Should be post"*/
    .post("/Questions/createQuestion", questioncontroller.createQuestion)
    .get("/Questions/ViewTopics", questioncontroller.viewAllTopicsResponses)
    .get("/Questions/allsearchquestion", questioncontroller.allsearchquestion)
    .get("/Questions/singlesearchquestion",questioncontroller.singlesearchquestion)
    .get("/Questions/allyourQuestion", questioncontroller.viewAllYourQuestions)
    .get("/Questions/viewAllTopicsResponses", questioncontroller.viewAllTopicsResponses)
    
    /*Should be post"*/
    .get("/Questions/deletequestions", questioncontroller.deletequestion)

    /*Routes for finding and creating pair on instant messaging*/
    .get('/InstantMessaging/findPair', messageController.findPairUser)
       /*Should be post"*/
    .post('/InstantMessaging/createMessage', messageController.createMessage)
    /*Routes for finding and creating pair on instant messaging*/
    .get('/InstantMessaging/Response/AllInstantMessage', commmessageController.findAllMessageBetweenUser)
       /*Should be post"*/

      

    //.post('/InstantMessaging/Response/createMessage', messageController.createMessage)
  //  .post('/InstantMessaging/Response/createInstantMessage', commmessageController.CreateInstantMessage)
    .get('/InstantMessaging/Response/createInstantMessage', commmessageController.CreateInstantMessage)

    .post('/searchByTopic', searchTopicController.test1)
    /* Website pages */
    .get('/message', function(req, res) { res.render('message');})
    .get('/messageInbox', function(req, res) { res.render('messageInbox', {messageInboxCSS: true});})

    .get('/profile', function(req, res) { res.render('profile', {profileCSS: true});})

    /* Profile of another user */
    .get('/:username/:userId', profilecontroller.userProfile)


    
    
    

module.exports = router;