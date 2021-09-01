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
      {
        id: 4,
        name: 'test4',
        email: 'test4@example.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        createdAt: now, updatedAt: now
      },
      {
        id: 5,
        name: 'test5',
        email: 'test5@example.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        createdAt: now, updatedAt: now
      },
      {
        id: 6,
        name: 'test6',
        email: 'test6@example.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        createdAt: now, updatedAt: now
      },
      {
        id: 7,
        name: 'test7',
        email: 'test7@example.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        createdAt: now, updatedAt: now
      },
      {
        id: 8,
        name: 'test8',
        email: 'test8@example.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        createdAt: now, updatedAt: now
      },
      {
        id: 9,
        name: 'test9',
        email: 'test9@example.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        createdAt: now, updatedAt: now
      },
      {
        id: 10,
        name: 'test10',
        email: 'test10@example.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        createdAt: now, updatedAt: now
      },
      {
        id: 11,
        name: 'test11',
        email: 'test11@example.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        createdAt: now, updatedAt: now
      },
      {
        id: 12,
        name: 'test12',
        email: 'test12@example.com',
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
