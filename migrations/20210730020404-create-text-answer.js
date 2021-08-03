'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('textAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      textQuestion_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'textQuestions',
            key: 'id',
          }
        }
      },
      content: {
        type: Sequelize.STRING
      },
      answer_user: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'Users',
            key: 'id',
          }
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('textAnswers');
  }
};