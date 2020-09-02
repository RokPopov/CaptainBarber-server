"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("reservations", "barbershopId", {
      type: Sequelize.INTEGER,
      references: {
        model: "barbershops",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("reservations", "barbershopId");
  },
};
