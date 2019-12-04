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

const userPost = (req, res) => {
  let arr2 = []
  arr2.splice(length);
  questdb.findAll({
    where: {userId: 5}, //req.body.userId
    include:[{
      model: models.User,
      attributes: ['imageUrl', 'id', 'firstName', 'lastName']
    }]
  })
  .then(question => {
    length = question.length;
    question = question
    // console.log(question)
    // for (let i = 0; i < question.length; i++){
    //   arr2[i] = question[i].dataValues;
    // }
    // console.log(arr2)
    res.render('userPost', {nextButton: true,
      userPostCSS: true, question:question })
  })
  .catch(error => res.status(400).send(error))
}


const reply = (req, res) => {
  let arr2 = []
  arr2.splice(length);
  questdb.findAll({
    where: {userId: 5}, //req.body.userId
    include:[{
      model: models.User,
      attributes: ['imageUrl', 'id', 'firstName', 'lastName']
    }]
  })
  .then(question => {
    length = question.length;
    question = question
    // console.log(question)
    // for (let i = 0; i < question.length; i++){
    //   arr2[i] = question[i].dataValues;
    // }
    // console.log(arr2)
    res.render('reply', {nextButton: true,
      replyCSS: true, question:question })
  })
  .catch(error => res.status(400).send(error))
}

// const gettingImage = (req, res) => {
//   models.User.findAll({
//       where: {
//         email: req.session.user.email
//       }
//     })
//     .then(existingUser => {
//       let firstName = req.body.firstName == "" ? existingUser[0].firstName : req.body.firstName;
//       let lastName = req.body.lastName == "" ? existingUser[0].lastName : req.body.lastName;
//       let imageUrl = req.body.url == "" ? existingUser[0].imageUrl : req.body.url;
//       let dob = req.body.dob == "" ? existingUser[0].dob : req.body.dob;
//       let country = req.body.country == "" ? existingUser[0].country : req.body.country;

//       const details = {
//         firstName: firstName,
//         lastName: lastName,
//         imageUrl: imageUrl,
//         dob: dob,
//         country: country
//       };

//       models.User.update(details, {
//           returning: true,
//           where: {
//             email: req.session.user.email
//           }
//         })
//         .then((result) => {
//           console.log("Data successfully updated.");
//           return res.redirect('/home');
//         })
//     })
//     .catch((err) => {
//       console.log(err);
//       res.render('edit', {
//         error: "Something went wrong with updating profile.",
//         editCSS: true
//       });
//     })
// };

module.exports = {
  //topicSearch: topicSearch,
  test1: test1,
  userPost:userPost,
  reply: reply
};