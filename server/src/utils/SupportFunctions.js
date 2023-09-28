const axios = require("axios");
const {Country} = require("../db");

const pedidoApi = async ()=> {
const api = await axios("http://localhost:5000/countries");
const countries = api.data.map((e)=>{
  return{
    id: e.cca3,
    name: e.name.common,
    image: e.flags.png,
    continent: e.continents[0],
    capital: e.capital ? e.capital[0] : "Not found",
    subregion: e.subregion,
    area: e.area,
    population: e.population,
  }
})
 await Country.bulkCreate(countries);
console.log("DB Ok");
}

    
    // User.findAll({
    //     include: [{
    //       model: Post,
    //       through: UserPost, // Especifica la tabla intermedia
    //       required: true, // Esto indica que es un "inner join"
    //     }]


module.exports={
        pedidoApi
    }