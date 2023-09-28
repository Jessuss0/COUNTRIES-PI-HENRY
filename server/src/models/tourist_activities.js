const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Country_Activities',{
        CountryId:{
            type: DataTypes.INTEGER,
        },
        ActivityId: {
            type: DataTypes.INTEGER,
        }
    }, { timestamps: false });
}