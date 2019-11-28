const messagedb = require('../models').Messages;
const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


function  findPairUser(req, res) {
  messagedb.findOne({
        where:{ [Op.or]: [{ userId1: req.body.userId1, userId2: req.body.userId2} , { userId1:req.body.userId2, userId2:req.body.userId1 }]}
      
      }).then( messagedb=>{
        if(messagedb.body != ""){
          console.log(`Found user `+messagedb.id);
      
        } else {
          console.log(`Not Found user`);
        }
        res.status(200).send(messagedb);
 
      }).catch(error =>    
      {console.log(`Not Found user`); res.status(400).send(error)}
      );
}



function  createMessage(req, res) {
  // console.log(req.body.subject);
  const messageobj = {
    userId1: 1,
    userId2: 2,
    messageSubject: req.body.subject,
    messageDetails: req.body.message
  }
  // models.Messages.create({
  //     include: [
  //       {
  //         model: models.commentmessages,
          
          
  //       }
  //     ]  }).then(message => {
  //       const resObj = message.map(message => {
  //         return Object.assign(
  //           {},
  //           {
  //                  userId1: message.userId1,
  //                  userId2: message.userId2,
  //                  messageSubject: message.messageSubject,
  //                 // Comment: message.Comment.map(comment => {
  
  //               // //tidy up the post data
  //               // return Object.assign(
  //               //   {},
  //               //   {
  //               //     messageid: 41,
  //               //     userid: 1,
  //               //     convotext: "comment.content",
  //               //   }
  //               // )
  //        //     })
  //           }
  //         )
  //         });
  //         res.json(resObj);
  //       });
            
          

//Creates Message in message table between two users
  messagedb.create(
    {
    userId1: messageobj.userId1,
    userId2: messageobj.userId2,
    messageSubject: messageobj.messageSubject
    
    }
  ).then(messagedb =>{

      console.log(messagedb.body);
      models.commentmessages.create(
       {
        messageid: messagedb.id,
        userid: req.session.user.id,
        convotext: messageobj.messageDetails
        })
      console.log(`add`);
      res.redirect('/home')


  })
  //adds comment to the comment message table
  // messagedb.findOne({
  //   where:[{
  //     messageSubject: messageobj.messageSubject
  // }]}).then( messagedb=>{
  //   console.log(messagedb.body);
  //   models.commentmessages.create(
  //    {
  //     messageid: messagedb.id,
  //     userid: req.session.user.id,
  //     convotext: messageobj.messageDetails
  //     })
  //   console.log(`add`);
  //   res.redirect('/home');
  // }).catch(error =>    
  // {console.log(`Can't Add Comment`); res.status(400).send(error)}
  // );
//Increments 1 to the Message Num in message table between two users
  models.User.findAll({
    where: {
        email: req.session.user.email
    }
}).then(existingUser => {
  const context = {
    messageNumber: existingUser[0].messageNumber+1
  }
  models.User.update(context, {returning: true, where: {email: req.session.user.email}})
  console.log(context);
})
}






module.exports = {
  findPairUser:findPairUser,
  createMessage:createMessage
};