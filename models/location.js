"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      location.belongsTo(models.barbershop);
      location.hasMany(models.review);
      location.hasMany(models.reservation);
    }
  }
  location.init(
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      latitude: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "location",
    }
  );
  return location;
};
