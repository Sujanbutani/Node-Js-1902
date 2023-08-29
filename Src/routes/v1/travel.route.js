const express = require("express");
const { travelController } = require("../../controllers");

const router = express.Router();

/** create travel */
router.post(
  "/create-travel",
  travelController.createTravel
);

/** Get travel list */
router.get(
  "/list",
  travelController.getTravelList
);

/** Get travel details by id */
router.get(
  "/get-details/:travelId",
  travelController.getTravelDetails
);

/** upadate travel */
router.put(
  "/update-details/:travelId",
  travelController.updateDetails
);

/**  Delete travel */
router.delete(
  "/delete-travel/:travelId",
  travelController.deletetravel
);

module.exports = router;