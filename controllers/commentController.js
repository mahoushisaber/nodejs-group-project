// User should be able to post/delete comments
/* Create comment 
Got it working but need to figure out how we relate it to the Question


*/
const commdb = require('../models').Comment;
const createComment = (req,res) => {
    commdb.create({
        details:  req.body.details,
        questionId: req.body.questionId,
        userId: req.body.userId
    })
    .then(comment => res.status(201).send(comment))
    .catch(error => res.status(400).send(error));
};
/* View comment 
Got it working but need to figure out how we relate it to the Question
*/
const viewComments = (req, res) => {
    commdb.findAll(
        {where: {questionId: req.body.questionId},order: [['createdAt', 'ASC']]})
        .then(question => {console.log(question),res.status(201).send(question)})
        .catch(error => res.status(400).send(error))
};

module.exports={
    createComment:createComment,
    viewComments:viewComments
};