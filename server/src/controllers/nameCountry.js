const {Country} = require("../db");
const { Sequelize } = require('sequelize');

const countryByName = (name)=>{
    let country = Country.findAll({
        where: {
          name: {
            [Sequelize.Op.iLike]: `%${name}%`,
          },
        },
      });
    
    return country;
}

module.exports = countryByName;