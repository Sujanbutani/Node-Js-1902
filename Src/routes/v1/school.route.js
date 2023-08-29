const express = require("express");
const { schoolController } = require("../../controllers");

const router = express.Router();

/** create school */
router.post(
  "/create-school",
  schoolController.createSchool
);

/** Get school list */
router.get(
  "/list",
  schoolController.getSchoolList
);

/** Get school details by id */
router.get(
  "/get-details/:schoolId",
  schoolController.getSchoolDetails
);

/** upadate school */
router.put(
  "/update-details/:schoolId",
  schoolController.updateDetails
);

/**  Delete bus */
router.delete(
  "/delete-school/:schoolId",
  schoolController.deleteschool
);

module.exports = router;