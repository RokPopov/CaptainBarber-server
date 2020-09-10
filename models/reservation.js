"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    static associate(models) {
      reservation.belongsTo(models.user);
      reservation.belongsTo(models.location);
    }
  }
  reservation.init(
    {
      time: {
        type: DataTypes.DATE,
      },
      haircut: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      beardcut: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      combo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "reservation",
    }
  );
  return reservation;
};
