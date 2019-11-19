'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    about: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    dob: DataTypes.DATE,
    country: DataTypes.STRING,
    postNumber: DataTypes.INTEGER,
    messageNumber: DataTypes.INTEGER,
    likesNumber: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // User has 0,1 or many questions
    User.hasMany(models.Question,{
      foreignKey: 'userId',
      as: 'questions',
    });

    //User has 0,1 or many comments
    User.hasMany(models.Comment, {
      foreignKey: 'userId',
      as: 'comments',
    });

  };
  return User;
};