const { Router } = require("express");
const {getAllCountries, getCountryById, getNameCountry} = require("../handlers/countriesHandler");

const countryRouter = Router();

countryRouter.get("", getAllCountries);

countryRouter.get("/name", getNameCountry)

countryRouter.get("/:id", getCountryById);

module.exports = countryRouter;

