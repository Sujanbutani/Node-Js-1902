const express = require("express");
// const { userValidation } = require("../../validations");
const { busController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create bus */
router.post(
  "/create-bus",
  // validate(userValidation.createBus),
  busController.createBus
);

/** Get Bus list */
router.get(
  "/list",
  // validate(busValidation.getbusList),
  busController.getBusList
);

/**  Delete bus */
router.delete(
  "/delete-bus/:busId",
  // validate(busValidation.getbusList),
  busController.deletebus
);

module.exports = router;