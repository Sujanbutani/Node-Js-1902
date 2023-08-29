const express = require("express");
const { stationaryController } = require("../../controllers");

const router = express.Router();

/** create stationary */
router.post(
  "/create-stationary",
  stationaryController.createStationary
);

/** Get stationary list */
router.get(
  "/list",
  stationaryController.getStationaryList
);

/** Get stationary details by id */
router.get(
  "/get-details/:stationaryId",
  stationaryController.getStationaryDetails
);

/** upadate stationary */
router.put(
  "/update-details/:stationaryId",
  stationaryController.updateDetails
);

/**  Delete stationary */
router.delete(
  "/delete-stationary/:stationaryId",
  stationaryController.deletestationary
);

module.exports = router;