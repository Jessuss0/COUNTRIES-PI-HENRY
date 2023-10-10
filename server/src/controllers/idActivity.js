const {Country, Activity} = require("../db");

const idActivity = (id)=>{
    let activity = Activity.findOne({where: {id}, include: {model: Country, 
        attributes: {
          exclude: ['Country_Activities']
        },
        through: { attributes: [] }}});
    if(!activity) throw Error("Activity not Found");
    return activity;
}

module.exports = idActivity;