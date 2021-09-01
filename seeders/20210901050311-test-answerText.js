'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('AnswerTexts', [
      {
        id: 1,
        content_answer: 'テスト　太郎2',
        question_id: 3,
        answer_user: 2,
        createdAt: now, updatedAt: now
      },
      {
        id: 2,
        content_answer: 'テスト　太郎3',
        question_id: 3,
        answer_user: 3,
        createdAt: now, updatedAt: now
      },
      {
        id: 3,
        content_answer: 'テスト　太郎4',
        question_id: 3,
        answer_user: 4,
        createdAt: now, updatedAt: now
      },
      {
        id: 4,
        content_answer: 'テスト　太郎5',
        question_id: 3,
        answer_user: 5,
        createdAt: now, updatedAt: now
      },
      {
        id: 5,
        content_answer: 'テスト　太郎6',
        question_id: 3,
        answer_user: 6,
        createdAt: now, updatedAt: now
      },
      {
        id: 6,
        content_answer: 'テスト　太郎7',
        question_id: 3,
        answer_user: 7,
        createdAt: now, updatedAt: now
      },
      {
        id: 7,
        content_answer: 'テスト　太郎8',
        question_id: 3,
        answer_user: 8,
        createdAt: now, updatedAt: now
      },
      {
        id: 8,
        content_answer: 'テスト　太郎9',
        question_id: 3,
        answer_user: 9,
        createdAt: now, updatedAt: now
      },
      {
        id: 9,
        content_answer: 'テスト　太郎10',
        question_id: 3,
        answer_user: 10,
        createdAt: now, updatedAt: now
      },
      {
        id: 10,
        content_answer: 'テスト　太郎11',
        question_id: 3,
        answer_user: 11,
        createdAt: now, updatedAt: now
      },
      {
        id: 11,
        content_answer: 'テスト　太郎12',
        question_id: 3,
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
