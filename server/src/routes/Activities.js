const { Router } = require("express");

const activityRouter = Router();

activityRouter.post("", (req, res)=>{
    res.send("Esta ruta permite crear una ACTIVIDAD TURISTICA")
})

activityRouter.get("", (req, res)=>{
    res.send("Esta ruta devuelve TODAS LAS ACTIVIDADES");
})

module.exports = activityRouter;