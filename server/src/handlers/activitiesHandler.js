const activityPost = require("../controllers/postActivity");
const allActivities = require("../controllers/getAllActivities");

const getAllActivities = async(req, res)=>{
    try {
        let all = await allActivities();
        if(!all){return res.status(400).json({message: "error to connect to DB"})};

        return res.json(all);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const createActivities = async(req, res)=>{
    const { name, difficulty, duration, season, idCountry} = req.body;
    try {
        if(!name || !difficulty || !duration || !season || !idCountry){return res.status(400).json("Faltan datos")};

        let activity = await activityPost({name, difficulty, duration, season, idCountry});
        return res.json(activity);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getAllActivities,
    createActivities,
}