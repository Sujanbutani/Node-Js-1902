const express = require("express");
const { busController } = require("../../controllers");

const router = express.Router();

/** create bus */
router.post(
  "/create-bus",
  busController.createBus
);

/** Get Bus list */
router.get(
  "/list",
  busController.getBusList
);

/** Get user details by id */
router.get(
  "/get-details/:busId",
  busController.getBusDetails
);

/** upadate bus */
router.put(
  "/update-details/:busId",
  busController.updateDetails
);

/**  Delete bus */
router.delete(
  "/delete-bus/:busId",
  busController.deletebus
);

module.exports = router;