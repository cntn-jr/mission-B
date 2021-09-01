'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('IsAnswers', [
      {
        id: 1,
        form_id: 2,
        answer_user: 2,
        createdAt: now, updatedAt: now
      },
      {
        id: 2,
        form_id: 2,
        answer_user: 3,
        createdAt: now, updatedAt: now
      },
      {
        id: 3,
        form_id: 2,
        answer_user: 4,
        createdAt: now, updatedAt: now
      },
      {
        id: 4,
        form_id: 2,
        answer_user: 5,
        createdAt: now, updatedAt: now
      },
      {
        id: 5,
        form_id: 2,
        answer_user: 6,
        createdAt: now, updatedAt: now
      },
      {
        id: 6,
        form_id: 2,
        answer_user: 7,
        createdAt: now, updatedAt: now
      },
      {
        id: 7,
        form_id: 2,
        answer_user: 8,
        createdAt: now, updatedAt: now
      },
      {
        id: 8,
        form_id: 2,
        answer_user: 9,
        createdAt: now, updatedAt: now
      },
      {
        id: 9,
        form_id: 2,
        answer_user: 10,
        createdAt: now, updatedAt: now
      },
      {
        id: 10,
        form_id: 2,
        answer_user: 11,
        createdAt: now, updatedAt: now
      },
      {
        id: 11,
        form_id: 2,
        answer_user: 12,
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
