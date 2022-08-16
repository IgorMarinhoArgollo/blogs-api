const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
};

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, _DataTypes) => {
  const Categories = sequelize.define(
    'Category',
    attributes,
    {
      timestamps: false,
      tableName: 'Categories',
    },
  );
  return Categories;
};
