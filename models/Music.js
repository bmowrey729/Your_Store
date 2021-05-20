const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Music extends Model {}

Music.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    song_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    album_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    band_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
       
    length: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    modelName: 'Music',
  }
);

module.exports = Music;
