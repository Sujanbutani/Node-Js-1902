const express = require("express");
// const { userValidation } = require("../../validations");
const { schoolController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create school */
router.post(
  "/create-school",
  // validate(schoolValidation.createSchool),
  schoolController.createSchool
);

/** Get school list */
router.get(
  "/list",
  // validate(schoolValidation.getschoolList),
  schoolController.getSchoolList
);

/**  Delete bus */
router.delete(
  "/delete-school/:schoolId",
  // validate(schoolValidation.getschoolList),
  schoolController.deleteschool
);

module.exports = router;