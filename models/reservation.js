"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reservation.belongsTo(models.user);
      reservation.belongsTo(models.barbershop);
      reservation.hasOne(models.location);
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
