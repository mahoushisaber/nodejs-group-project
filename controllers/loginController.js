const db = require('../models/user');

const login = (req, res, next) => {
    res.render('index', {});
  };

 const checklogin = (req, res, next) => {
  db.checkLogin(req,res);
};
  module.exports = {
    login:login,
    checklogin:checklogin
  };