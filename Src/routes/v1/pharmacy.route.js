const express = require("express");
// const { userValidation } = require("../../validations");
const { pharmacyController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create pharmacy */
router.post(
  "/create-pharmacy",
  // validate(pharmacyValidation.createpharmacy),
  pharmacyController.createPharmacy
);

/** Get pharmacy list */
router.get(
  "/list",
  // validate(pharmacyValidation.getpharmacyList),
  pharmacyController.getPharmacyList
);

/**  Delete pharmacy */
router.delete(
  "/delete-pharmacy/:pharmacyId",
  // validate(pharmacyValidation.getpharmacyList),
  pharmacyController.deletepharmacy
);

module.exports = router;