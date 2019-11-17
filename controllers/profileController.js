const db = require('../model/database');

const profileCreator1 = (req, res, next) => {
    db.creatingProfileStepOne(req,res);

  };

const profileCreator2 = (req, res, next) => {
    db.creatingProfileStepTwo(req,res);

  };
  module.exports = {
    profileCreator1:profileCreator1,
    profileCreator2:profileCreator2
  };