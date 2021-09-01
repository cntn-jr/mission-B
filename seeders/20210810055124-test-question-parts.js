'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('QuestionParts', [
      {
        id: 1,
        title_parts: 'あなたの名前を教えて下さい',
        form_id: 1,
        is_radio: false,
        createdAt: now, updatedAt: now
      },
      {
        id: 2,
        title_parts: 'あなたの好きなプログラミング言語を１つ教えて下さい',
        form_id: 1,
        is_radio: true,
        createdAt: now, updatedAt: now
      },
      {
        id: 3,
        title_parts: '名前を入力して下さい',
        form_id: 2,
        is_radio: false,
        createdAt: now, updatedAt: now
      },
      {
        id: 4,
        title_parts: '住んでいる地域を教えて下さい',
        form_id: 2,
        is_radio: true,
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
