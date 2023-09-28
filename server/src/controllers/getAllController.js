const {Country} = require("../db");

const allCountries = ()=>{
    let all = Country.findAll();
    
    return all;
}

module.exports = allCountries;