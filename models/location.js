"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
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
        type: DataTypes.FLOAT,
      },
      latitude: {
        type: DataTypes.FLOAT,
      },
    },
    {
      sequelize,
      modelName: "location",
    }
  );
  return location;
};
