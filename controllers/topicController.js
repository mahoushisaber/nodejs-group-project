const db = require('../config/config')
const models = require('../models');
const questdb = require('../models').Question;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


// search function for topic 
let arr = [];
var length;

const test1 = (req, res) => {
  arr.splice(length);
  questdb.findAll({
    where: {subject: {[Op.like] : '%' + req.body.data + '%'}},
    include:[{
      model: models.User,
      attributes: ['imageUrl', 'id', 'firstName', 'lastName']
    }]
  })
  .then(question => {
    length = question.length;
    for (let i = 0; i < question.length; i++){
      arr[i] = question[i].dataValues;
    }
    res.render('searchByTopic', {nextButton: true,
      searchTopicCSS: true, question:arr})
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
          discussion1: [topicTitle = "php problems", subjectTitle = "node", problemTitle = "something not working"],
          discussion2: [topicTitle = "react problems", subjectTitle = "php", problemTitle = "something not working"],
          discussion3: [topicTitle = "node problems", subjectTitle = "react", problemTitle = "something not working"],
          discussion4: [topicTitle = "zen problems", subjectTitle = "react", problemTitle = "something not working"],
          discussion5: [topicTitle = "sql problems", subjectTitle = "zen", problemTitle = "something not working"],
        }
      });
    })
    .catch((err) => {
      console.log("Sorry. Not able to find what you are looking for...");
      return res.redirect('/home');
    })
};

const gettingImage = (req, res) => {
  models.User.findAll({
      where: {
        email: req.session.user.email
      }
    })
    .then(existingUser => {
      let firstName = req.body.firstName == "" ? existingUser[0].firstName : req.body.firstName;
      let lastName = req.body.lastName == "" ? existingUser[0].lastName : req.body.lastName;
      let imageUrl = req.body.url == "" ? existingUser[0].imageUrl : req.body.url;
      let dob = req.body.dob == "" ? existingUser[0].dob : req.body.dob;
      let country = req.body.country == "" ? existingUser[0].country : req.body.country;

      const details = {
        firstName: firstName,
        lastName: lastName,
        imageUrl: imageUrl,
        dob: dob,
        country: country
      };

      models.User.update(details, {
          returning: true,
          where: {
            email: req.session.user.email
          }
        })
        .then((result) => {
          console.log("Data successfully updated.");
          return res.redirect('/home');
        })
    })
    .catch((err) => {
      console.log(err);
      res.render('edit', {
        error: "Something went wrong with updating profile.",
        editCSS: true
      });
    })
};

module.exports = {
  //topicSearch: topicSearch,
  test1: test1
};