// User should be able to post/delete questions
const Question = require('../models/question');

// function to create a question
const create = (req, res) => {
    Question.create({
        topic: req.body.topic,
        subject: req.body.subject,
        details: req.body.details,
        replies: req.body.replies,
        userId: req.body.userid
    })
    .then(question => res.status(201).send(Question))
    .catch(error => res.status(400).send(error));
};

// function to get all questions in specific category

// function to get a single question

//function to delete a question
