const express = require("express");
const { userValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const  router = express.Router();

/** create user */
router.post(
  "/create-category",
  // validate(userValidation.createUser),
  categoryController.createcategory
);


/** Get user list */
// router.get(
//   "/list",
//   // validate(userValidation.getUserList),
//   userController.getUserList
// );

module.exports = router;