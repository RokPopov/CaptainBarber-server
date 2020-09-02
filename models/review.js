"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      review.belongsTo(models.barbershop);
      review.belongsTo(models.user);
      review.hasOne(models.location);
    }
  }
  review.init(
    {
      time: {
        type: DataTypes.DATE,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "review",
    }
  );
  return review;
};
