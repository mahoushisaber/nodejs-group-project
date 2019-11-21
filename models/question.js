'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    topic: DataTypes.STRING,
    subject: DataTypes.STRING,
    details: DataTypes.STRING,
    replies: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    // Each question belongs to a user
    Question.belongsTo(models.User,{
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    // A question can have multiple comments
    Question.hasMany(models.Comment,{
      foreignKey: 'questionId',
      as: 'comments',
    });

  };
  return Question;
};