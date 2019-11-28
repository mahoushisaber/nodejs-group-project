



// User should be able to post/delete questions
const db = require('../config/config')
const models = require('../models');
const questdb = require('../models').Question;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// function to create a question
const createQuestion = (req, res) => {
    //Needs to be in  Replies
    models.User.findAll({
        where: {
            email: req.session.user.email
        }
    }).then(existingUser => {
      const context = {
          postNumber: existingUser[0].postNumber+1
      }
      models.User.update(context, {returning: true, where: {email: req.session.user.email}})
      console.log(context);
    })
    questdb.create({
        subject: req.body.subject,
        details: req.body.detail,
        topic: req.body.topiclist,
        userId: req.session.user.id
    })
    .then(
        question =>
        { 
            res.redirect('/home');
        
        
        })
    .catch(error => res.status(400).send(error));
};

// function to get all questions in specific category
const viewAllTopicsResponses = (req, res) => {
    questdb.findAll({where:{topic:"PHP"/*req.body.topic*/},order: [['createdAt', 'DESC']]})
        .then(question => {console.log(question),res.status(201).send(question)})
        .catch(error => res.status(400).send(error))
};

// search question that have word in 

const allsearchquestion = (req, res) => {
   
    questdb.findAll(
        {where: {subject: {[Op.like] : '%' + req.body.subject + '%'}}})
        .then(question => {console.log(question),res.status(201).send(question)})
        .catch(error => res.status(400).send(error))
};
// search for single question 

const singlesearchquestion = (req, res) => {
   
    questdb.findOne(
        {where: { subject: req.body.subject } })
        .then(question => {console.log(question),res.status(201).send(question)})
        .catch(error => res.status(400).send(error))
};
const viewAllYourQuestions= (req, res) => {
    questdb.findAll(
        {where: {userId: req.body.UserId},order: [['createdAt', 'ASC']]})
        .then(question => {console.log(question),res.status(201).send(question)})
        .catch(error => res.status(400).send(error))
  };
//function to delete a question
const deletequestion = (req, res, next) => {
    questdb.destroy({where: { subject: req.body.subject } })
    .then(delquestion => {
      res.status(201).send(delquestion)
    }).catch(error => res.status(400).send(error));
    }
module.exports = {
    createQuestion:createQuestion,
    viewAllTopicsResponses:viewAllTopicsResponses,
    allsearchquestion:allsearchquestion,
    singlesearchquestion:singlesearchquestion,
    viewAllYourQuestions:viewAllYourQuestions,
    deletequestion:deletequestion
  };