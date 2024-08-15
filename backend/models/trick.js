"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Trick extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Trick.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactPoints: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Trick",
      tableName: "Tricks",
      timestamps: false,
    }
  );
  return Trick;
};
