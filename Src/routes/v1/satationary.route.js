const express = require("express");
// const { userValidation } = require("../../validations");
const { stationaryController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create stationary */
router.post(
  "/create-stationary",
  // validate(stationaryValidation.createstationary),
  stationaryController.createStationary
);

/** Get stationary list */
router.get(
  "/list",
  // validate(stationaryValidation.getstationaryList),
  stationaryController.getStationaryList
);

/**  Delete stationary */
router.delete(
  "/delete-stationary/:stationaryId",
  // validate(stationaryValidation.getstationaryList),
  stationaryController.deletestationary
);

module.exports = router;