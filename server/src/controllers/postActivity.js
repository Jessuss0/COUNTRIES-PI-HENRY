const { Activity } = require("../db");

const activityPost = async({name, difficulty, duration, season, idCountry})=>{
    let act = await Activity.create({name, difficulty, duration, season});
    if(idCountry.length === 1){
    await act.addCountry(idCountry)
}
    else {
          await act.setCountries(idCountry);
        }
    return act
}

module.exports = activityPost;