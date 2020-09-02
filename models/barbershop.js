"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class barbershop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      barbershop.belongsTo(models.user);

      barbershop.hasMany(models.location);
    }
  }
  barbershop.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
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
      haircutPrice: {
        type: DataTypes.INTEGER,
      },
      beardcutPrice: {
        type: DataTypes.INTEGER,
      },
      comboPrice: {
        type: DataTypes.INTEGER,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      phoneNum: {
        type: DataTypes.STRING,
      },
      openingHours: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      rate: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "barbershop",
    }
  );
  return barbershop;
};
