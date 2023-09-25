const { Router } = require("express");
const countryRouter = require("./Countries");
const activityRouter = require("./Activities");

const router = Router();

router.use("/countries", countryRouter);
router.use("/activities", activityRouter);

module.exports = router;
