"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tricks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      contactPoints: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tricks");
  },
};
