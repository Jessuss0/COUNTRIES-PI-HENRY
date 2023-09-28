const {Activity} = require("../db");

const allActivities = ()=>{
    let all = Activity.findAll();
    
    return all;
}

module.exports = allActivities;