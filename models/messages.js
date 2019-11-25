'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    userId1: DataTypes.INTEGER,
    userId2: DataTypes.INTEGER
  }, {});
  Messages.associate = function(models) {
    // associations can be defined here
    Messages.belongsTo(models.User,{
      foreignKey: 'userId1',
      foreignKey: 'userId2',
      onDelete: 'CASCADE',
    });
  };
  return Messages;
};