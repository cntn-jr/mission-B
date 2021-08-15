'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AnswerTexts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content_answer: {
        type: Sequelize.STRING
      },
      question_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'QuestionParts',
            key: 'id',
          }
        }
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
    await queryInterface.dropTable('AnswerTexts');
  }
};