'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('IsAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      form_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'QuestionForms',
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
    await queryInterface.dropTable('IsAnswers');
  }
};