const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define("Activity",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name:{
        type: DataTypes.STRING(50),
        allowNull: false
      },
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
          }
    },
    duration: {
        type: DataTypes.FLOAT, 
        allowNull: true
      },
      season: {
        type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
        allowNull: false
      }
  },
  { timestamps: false });
};