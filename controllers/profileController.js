const models = require('../models');
var session = require('express-session');
const express = require('express');
const app = express();

// Next function to check sign in for each route
const checkSignIn = (req, res, next) => {
  // If user is authenticated, then move on
  if (req.session.user) {
    return next();
  }
  // Else, redirect them to the signup page
  return res.redirect('/signup');
};

// Controller to render the signup page
const getSignupPage = (req, res) => {  
  return res.render('layouts/index', {title:"Knowledge Base Signup", heading:"Signup", indexCSS:true});
};

// Controller to signup a user
const signupUser = (req, res) => {
  // Check if the specified username already exists
  models.User.findAll({
    where: {
      email: req.body.email
    }
  })
  .then(existingUser => {
    // If username exists, redirect back to signup
    if(existingUser.length > 0){
      return res.render('layouts/index', {signupErr: "Username is already registered", title:"Knowledge Base Signup", heading:"Signup", indexCSS:true});
    }

    // If username is unique, create the user
    models.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password[0]
    })
    .then(user => {
      // Create session for the user and redirect to next step
      let userObj = {
        email: user.email,
        id: user.id
      };
      req.session.user = userObj;
      return res.redirect('/complete-profile');
    })
    .catch((err) => {
      console.log(err);
      return res.render('layouts/index', {signupErr: "There was an error with signup", title:"Knowledge Base Signup", heading:"Signup", indexCSS:true});
    })
  });
};

// Controller for the second step of the signup process
const completeProfile = (req, res) => {
  console.log("User session: ", req.session.user);
  return res.render('complete-profile', {title: 'Knowledge Base Profile', heading: 'Profile', signupCSS: true});
};


// Controller for adding the details to user profile during intial signup
const addProfileDetails = (req, res) => {
  const details = {
    about: req.body.about,
    imageUrl: req.body.url,
    dob: req.body.dob,
    country: req.body.country,
  };

  if (req.session.user){
    console.log("updating the user...");
    models.User.update(details, {returning: true, where: {email: req.session.user.email}})
    .then((result) => {
      console.log("Data successfully updated.");
      return res.redirect('/home');
    })
    .catch((err) => {
      console.log("Error: ", err);
    })
  }
};

// Controller of home page of authenticated users
const home = (req, res) => {
 
  let   allquest;
  let   allusers;
  models.Question.findAll(
    {order: [['createdAt', 'DESC']]},{ raw: true })
    .then(questions => 
      {
       
        allquest = questions;
        // models.User.findAll({
        //   order: [['createdAt', 'DESC']]
        // })
        // .then(existingUser => {
        // exitstingUser.
   
    
      })
    .catch(error => {console.log("No question")})
    models.User.findAll({})
    .then(existingUser => {
      allusers=existingUser;
 

    })
  models.User.findAll({
    where: {
      email: req.session.user.email
    }
  })
  .then(existingUser => {
    const context = {
      firstName: existingUser[0].firstName,
      lastName: existingUser[0].lastName,
      about: existingUser[0].about,
      imageUrl: existingUser[0].imageUrl,
      postNum: existingUser[0].postNumber,
      msgNum: existingUser[0].messageNumber,
      likeNum: existingUser[0].likesNumber,
      questions: allquest,
      allusers: allusers
    }
    return res.render('home', {
      context: context, 
      title:'Knowledge Base Home', 
      heading:'Home', 
      homeCSS: true,  
      nextButton: true,
    
  
    });
  })
  .catch((err) => {
    console.log("Not able to find user when rendering home page...");
    return res.redirect('/signup');
  })
};


// app.get('/search', (req,res)=>{
//   console.log("insearch");
//   res.send("hi");
// })
// models.Question.findAll({
//   where: {
//     subject: 
//   }
// })

// const test1 = (req,res)=>{
//   let x3 = "hi";
//   //res.send('/search', {data: x3});
// }

exports.test1 = (req,res,next)=>{
  console.log("in test 1 function backend");
}

// Controller for logging in
const login = (req, res) => {
  // Query db for user
  console.log(req.body);
  models.User.findAll({
    where: {
      email: req.body.email
    }
  })
  .then(existingUser => {
    // If there is no existing user, go back to login
    if(existingUser.length != 1){
      return res.render('layouts/index', {loginErr: "User with this email does not exist.", title:"Knowledge Base Signup", heading:"Signup", indexCSS:true});
    }
    // Check if password is correct
    if(existingUser[0].password == req.body.password){
      let userObj = {
        email: req.body.email,
        id: existingUser[0].id
      };
      req.session.user = userObj;
      return res.redirect('/home');
    }
    else {
      return res.render('layouts/index', {loginErr: "Email or password is incorrect.", title:"Knowledge Base Signup", heading:"Signup", indexCSS:true});
    }
  })
};

// Controller for logging out
const logout = (req, res) => {
  console.log('logout');
  req.session.destroy(function(){
    console.log("user logged out.");
 });
 return res.redirect('/signup');
};

// Controller for updating profile
const editProfile = (req, res) => {
  const details = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    about: req.body.about,
    imageUrl: req.body.url,
    dob: req.body.dob,
    country: req.body.country,
  };

  models.User.update(details, {returning: true, where: {email: req.session.user.email}})
  .then((result) => {
    console.log("Data successfully updated.");
    return res.redirect('/home');
  })
  .catch((err) => {
    console.log("Error: ", err);
  })
};
const next5 = (req,res) =>{
  return res.redirect('/home');
}
module.exports = {
  checkSignIn:checkSignIn,
  getSignupPage:getSignupPage,
  signupUser:signupUser,
  completeProfile:completeProfile,
  addProfileDetails:addProfileDetails,
  login:login,
  logout:logout,
  editProfile:editProfile,
<<<<<<< HEAD
  home:home,
  next5:next5
=======
  home:home
  
>>>>>>> cb741a26534d12037e8bff8790fba74c2ab93675
};