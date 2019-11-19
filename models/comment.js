'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    details: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Comment.associate = function(models) {
    // All comments belong to a question & user
    // Creat FK for questionID, if associated question is deleted
    // Then the corresponding comments will be deleted too
    Comment.belongsTo(models.Question,{
      foreignKey: 'questionId',
      onDelete: 'CASCADE',
    });

    // Associate the comment with a user
    Comment.belongsTo(User);
    
  };
  return Comment;
};