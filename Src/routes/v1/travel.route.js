const express = require("express");
// const { userValidation } = require("../../validations");
const { travelController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create travel */
router.post(
  "/create-travel",
  // validate(travelValidation.createtravel),
  travelController.createTravel
);

/** Get travel list */
router.get(
  "/list",
  // validate(travelValidation.gettravelList),
  travelController.getTravelList
);

/**  Delete travel */
router.delete(
  "/delete-travel/:travelId",
  // validate(travelValidation.gettravelList),
  travelController.deletetravel
);

module.exports = router;