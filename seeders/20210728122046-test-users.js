'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'test1',
        email: 'test1@example.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        createdAt: now, updatedAt: now
      },
      {
        id: 2,
        name: 'test2',
        email: 'test2@example.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        createdAt: now, updatedAt: now
      },
      {
        id: 3,
        name: 'test3',
        email: 'test3@example.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
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
