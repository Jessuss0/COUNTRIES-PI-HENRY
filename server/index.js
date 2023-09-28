const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const { pedidoApi } = require("./src/utils/SupportFunctions");
const PORT = 3001;

conn.sync({ force: false }).then(() => {
server.listen(PORT, async() => {

  const allCountries = await Country.findAll();
  if(!allCountries.length){
    pedidoApi();
  }
  
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
