'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('AnswerRadios', [
      {
        id: 1,
        select_answer: 6,
        question_id: 4,
        answer_user: 2,
        createdAt: now, updatedAt: now
      },
      {
        id: 2,
        select_answer: 8,
        question_id: 4,
        answer_user: 3,
        createdAt: now, updatedAt: now
      },
      {
        id: 3,
        select_answer: 7,
        question_id: 4,
        answer_user: 4,
        createdAt: now, updatedAt: now
      },
      {
        id: 4,
        select_answer: 6,
        question_id: 4,
        answer_user: 5,
        createdAt: now, updatedAt: now
      },
      {
        id: 5,
        select_answer: 9,
        question_id: 4,
        answer_user: 6,
        createdAt: now, updatedAt: now
      },
      {
        id: 6,
        select_answer: 6,
        question_id: 4,
        answer_user: 7,
        createdAt: now, updatedAt: now
      },
      {
        id: 7,
        select_answer: 8,
        question_id: 4,
        answer_user: 8,
        createdAt: now, updatedAt: now
      },
      {
        id: 8,
        select_answer: 7,
        question_id: 4,
        answer_user: 9,
        createdAt: now, updatedAt: now
      },
      {
        id: 9,
        select_answer: 7,
        question_id: 4,
        answer_user: 10,
        createdAt: now, updatedAt: now
      },
      {
        id: 10,
        select_answer: 6,
        question_id: 4,
        answer_user: 11,
        createdAt: now, updatedAt: now
      },
      {
        id: 11,
        select_answer: 6,
        question_id: 4,
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
