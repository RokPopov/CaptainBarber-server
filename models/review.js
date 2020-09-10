"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    static associate(models) {
      review.belongsTo(models.user);
      review.belongsTo(models.location);
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
