const messagedb = require('../models').Messages;

const Sequelize = require('sequelize');
const Op = Sequelize.Op;


function  findPairUser(req, res) {
  messagedb.findOne({
        //where:{ [Op.or]: [{ userId1: req.body.userId1, userId2: req.body.userId2} , { userId1:req.body.userId2, userId2:req.body.userId1 }]}
        where:{ [Op.or]: [{ userId1: 3, userId2: 4} , { userId1:4, userId2:3 }]}
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



function  createPairUser(req, res) {
  messagedb.create(
    {
              userId1: 1,
              userId2: 4,
    }
  ).then( createmessage=>{
    res.status(200).send(createmessage);
  }).catch(error =>    
  {console.log('Cant create message'); res.status(400).send(error)}
  );

}






module.exports = {
  findPairUser:findPairUser,
  createPairUser:createPairUser
};