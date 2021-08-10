'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('RadioSelectors', [
      {
        id: 1,
        question_content: 'java',
        question_id: 2,
        createdAt: now, updatedAt: now
      },
      {
        id: 2,
        question_content: 'PHP',
        question_id: 2,
        createdAt: now, updatedAt: now
      },
      {
        id: 3,
        question_content: 'Python',
        question_id: 2,
        createdAt: now, updatedAt: now
      },
      {
        id: 4,
        question_content: 'JavaScript',
        question_id: 2,
        createdAt: now, updatedAt: now
      },
      {
        id: 5,
        question_content: 'その他',
        question_id: 2,
        createdAt: now, updatedAt: now
      },
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
