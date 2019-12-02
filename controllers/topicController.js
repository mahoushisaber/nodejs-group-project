const models = require('../models');
var session = require('express-session');

// search function for topic 
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
    topicSearch: topicSearch
  };