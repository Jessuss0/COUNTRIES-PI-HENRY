const { Router } = require("express");
const { getAllActivities, createActivities, getActivityById } = require("../handlers/activitiesHandler");

const activityRouter = Router();

activityRouter.post("", createActivities);

activityRouter.get("", getAllActivities);

activityRouter.get("/:id", getActivityById);

module.exports = activityRouter;