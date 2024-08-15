"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Defines data to insert into Tricks table
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tricks", [
      {
        name: "Outside Leg Hang",
        contactPoints: 4,
      },
      {
        name: "Stargazer",
        contactPoints: 3,
      },
      {
        name: "Superperson",
        contactPoints: 3,
      },
    ]);
  },
  // Defines how to revert seeding, involving deleting inserted data
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tricks", null, {});
  },
};

// populate database commands
// npx sequelize-cli db:seed:all

// reverting seeder
// npx sequelize-cli db:seed:undo
// undo all seeders
// npx sequelize-cli db:seed:undo:all
