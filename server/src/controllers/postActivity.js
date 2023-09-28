const { Activity, Country } = require("../db");

const activityPost = async({name, difficulty, duration, season, idCountry})=>{
    let act = await Activity.create({name, difficulty, duration, season});
    if(idCountry.length === 1){
    let  country = await Country.findOne({where: {id: idCountry}});
    await act.addCountry(country)
}
    else {
        // Utilizamos Promise.all para esperar a que se completen todas las inserciones
        await Promise.all(idCountry.map(async (country) => {
          let pais = await Country.findOne({ where: { id: country } });
          await act.addCountry(pais);
        }));
      }

    return act
}

module.exports = activityPost;