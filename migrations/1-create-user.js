'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      about: {
        allowNull: true,
        type: Sequelize.STRING
      },
      imageUrl: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dob: {
        allowNull: true,
        type: Sequelize.DATE
      },
      country: {
        allowNull: true,
        type: Sequelize.STRING
      },
      postNumber: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      messageNumber: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      likesNumber: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};