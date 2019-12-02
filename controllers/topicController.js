const db = require('../config/config')
const models = require('../models');
const questdb = require('../models').Question;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


// search function for topic 
var arr = [];
const test1 = (req, res) => {
  
  questdb.findAll(
    {where: {subject: {[Op.like] : '%' + req.body.data + '%'}}})
    .then(question => {
      for (let i = 0; i < question.length; i++){
        arr[i] = question[i].dataValues;
      }
      return res.render('searchByTopic', {nextButton: true,
        searchTopicCSS: true,question:arr  })
    })
    .catch(error => res.status(400).send(error))
}


const topicSearch = (req, res, next) => {
    models.User.findAll({
      where: {
        // email: req.session.user.email,
      }
    })
    .then(existingUser => { 
    
      return res.render('searchByTopic', {
        
        nextButton: true,
        searchTopicCSS: true,
        discussionDetail: {
          discussion1: [ topicTitle="php problems", subjectTitle="node", problemTitle= "something not working" ],
          discussion2: [ topicTitle="react problems", subjectTitle="php", problemTitle= "something not working"  ],
          discussion3: [ topicTitle="node problems", subjectTitle="react", problemTitle= "something not working"  ],
          discussion4: [ topicTitle="zen problems", subjectTitle="react", problemTitle= "something not working"  ],
          discussion5: [ topicTitle="sql problems", subjectTitle="zen", problemTitle= "something not working"  ],
        }
      });
    })
    .catch((err) => {
      console.log("Sorry. Not able to find what you are looking for...");
      return res.redirect('/home');
    })
  };


  module.exports = {
    // topicSearch: topicSearch,
    test1:test1
  };