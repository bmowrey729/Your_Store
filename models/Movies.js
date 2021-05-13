const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movies extends Model {}

Movies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    staring: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    co_staring: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rateing: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    synopsis: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        isDecimal: true
      },
    },   
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Movies',
  }
);

module.exports = Movies;
