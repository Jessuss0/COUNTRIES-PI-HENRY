const allCountries = require("../controllers/getAllController");
const idCountry = require("../controllers/idCountry");
const countryByName = require("../controllers/nameCountry");

const getAllCountries = async (req, res)=>{
    try {
        let all = await allCountries();
        if(!all){res.status(400).json({message:"Error to connect to db"})}
        return res.json(all)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getNameCountry = async(req, res)=>{
    try {
        const {name} = req.query;
        if(!name){
            let all = await allCountries();
            return res.json(all);
        }

        let country = await countryByName(name);
        if(!country.length){return res.status(404).json({
            message: "There were no countries found that match the provided name"})}
        
        return res.json(country);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const getCountryById = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){return res.status(400).json({message: "An id is missing"})}

        let country = await idCountry(id);
        if(!country){return res.status(404).json({message: "No countries exist with the provided ID"})}
        return res.json(country);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};



module.exports = {
    getAllCountries,
    getNameCountry,
    getCountryById,
}