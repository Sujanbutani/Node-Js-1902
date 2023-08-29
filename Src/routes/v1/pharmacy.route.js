const express = require("express");
const { pharmacyController } = require("../../controllers");

const router = express.Router();

/** create pharmacy */
router.post(
  "/create-pharmacy",
  pharmacyController.createPharmacy
);

/** Get pharmacy list */
router.get(
  "/list",
  pharmacyController.getPharmacyList
);

/** Get pharmacy details by id */
router.get(
  "/get-details/:pharmacyId",
  pharmacyController.getPharmacyDetails
);

/** upadate pharmacy */
router.put(
  "/update-details/:pharmacyId",
  pharmacyController.updateDetails
);

/**  Delete pharmacy */
router.delete(
  "/delete-pharmacy/:pharmacyId",
  pharmacyController.deletepharmacy
);

module.exports = router;