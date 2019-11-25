const commentmessagedb = require('../models').commentmessages;




function findAllMessageBetweenUser(req, res) {
    commentmessagedb.findAll(
        {where: {messageid: req.body.messageid },order:[['createdAt', 'ASC']]}) //
        .then(usermessages => {console.log(usermessages),res.status(201).send(usermessages)})
        .catch(error => res.status(400).send(error))
  }
  function CreateInstantMessage(req, res){
    commentmessagedb.create(
        {
                  messageid: req.body.messageId,
                  userid: req.body.userid,
                  convotext: req.body.convotext,
        }
      ).then( createmessage=>{
        res.status(200).send(createmessage);
      }).catch(error =>    
      {console.log('Cant create message'); res.status(400).send(error)}
      );
  }
  module.exports = {
    findAllMessageBetweenUser:findAllMessageBetweenUser,
    CreateInstantMessage:CreateInstantMessage
  };
  