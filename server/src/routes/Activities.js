const { Router } = require("express");
const { getAllActivities, createActivities } = require("../handlers/activitiesHandler");

const activityRouter = Router();

activityRouter.post("", createActivities);

activityRouter.get("", getAllActivities);

module.exports = activityRouter;