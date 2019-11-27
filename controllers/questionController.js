



// User should be able to post/delete questions
const db = require('../config/config')
const questdb = require('../models').Question;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// function to create a question
const createQuestion = (req, res) => {
    questdb.create({
        topic: req.body.topic,
        subject: req.body.subject,
        details: req.body.details,
        replies: req.body.replies,
        userId: req.body.userid
    })
    .then(question => res.status(201).send(question))
    .catch(error => res.status(400).send(error));
};

// function to get all questions in specific category
const viewTop5Question = (req, res) => {
    questdb.findAll(
        {limit:5,order: [['createdAt', 'DESC']]})
        .then(question => {console.log(question),res.status(201).send(question)})
        .catch(error => res.status(400).send(error))
};

// search question that have word in 

const allsearchquestion = (req, res) => {
   
    questdb.findAll(
        {where: {subject: {[Op.like] : '%' + req.body.topic + '%'}}})
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
    viewTop5Question:viewTop5Question,
    allsearchquestion:allsearchquestion,
    singlesearchquestion:singlesearchquestion,
    viewAllYourQuestions:viewAllYourQuestions,
    deletequestion:deletequestion
  };