const express = require("express");
const { mobileController } = require("../../controllers");

const router = express.Router();

/** create mobile */
router.post(
  "/create-mobile",
  mobileController.createMobile
);

/** Get mobile list */
router.get(
  "/list",
  mobileController.getMobileList
);

/** Get mobile details by id */
router.get(
  "/get-details/:mobileId",
  mobileController.getMobileDetails
);

/** upadate mobile */
router.put(
  "/update-details/:mobileId",
  mobileController.updateDetails
);

/**  Delete mobile */
router.delete(
  "/delete-mobile/:mobileId",
  mobileController.deletemobile
);

module.exports = router;