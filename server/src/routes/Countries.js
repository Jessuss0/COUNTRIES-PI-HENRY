const { Router } = require("express");

const countryRouter = Router();

countryRouter.get("", (req, res)=>{
    res.send("Esta ruta devuelve todos los paises")
});


countryRouter.get("/name", (req, res)=>{
    res.send("Esta ruta devuelve los paises buscado por NAME");
})

countryRouter.get("/:id", (req,res)=>{
    res.send("Esta ruta devuelve los paises por ID")
});

module.exports = countryRouter;

