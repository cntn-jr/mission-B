'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('QuestionForms', [
      {
        id: 1,
        title_form: '好きなプログラミング言語',
        create_user: 2,
        createdAt: now, updatedAt: now
      },
      {
        id: 2,
        title_form: 'あなたについて',
        create_user: 1,
        createdAt: now, updatedAt: now
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
