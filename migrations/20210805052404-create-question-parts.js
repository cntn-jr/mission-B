'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('QuestionParts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title_parts: {
        type: Sequelize.STRING
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
      is_radio: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('QuestionParts');
  }
};