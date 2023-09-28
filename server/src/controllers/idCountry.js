const {Country, Activity} = require("../db");

const idCountry = (id)=>{
    let country = Country.findOne({where: {id}, include: {model: Activity, 
        attributes: {
          exclude: ['Country_Activities']
        },
        through: { attributes: [] }}});
    if(!country) throw Error("Country not Found");
    return country;
}

module.exports = idCountry;