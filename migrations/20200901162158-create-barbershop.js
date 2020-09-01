"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("barbershops", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      haircut: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      beardcut: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      combo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      haircutPrice: {
        type: Sequelize.INTEGER,
      },
      beardcutPrice: {
        type: Sequelize.INTEGER,
      },
      comboPrice: {
        type: Sequelize.INTEGER,
      },
      website: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
      },
      phoneNum: {
        type: Sequelize.INTEGER,
      },
      openingHours: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.TEXT,
      },
      rate: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("barbershops");
  },
};
