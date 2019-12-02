'use strict';
module.exports = (sequelize, DataTypes) => {
  const commentmessages = sequelize.define('commentmessages', {
    messageid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    convotext: DataTypes.STRING
  }, {});
  commentmessages.associate = function(models) {
    commentmessages.belongsTo(models.Messages,{
      foreignKey: 'messageId',
      onDelete: 'CASCADE',
    });
    commentmessages.belongsTo(models.User);
  };
  return commentmessages;
};