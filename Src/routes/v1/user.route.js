const express = require("express");
// const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create user */
router.post(
  "/create-user",
  // validate(userValidation.createuser),
  userController.createUser
);

/** Get user list */
router.get(
  "/list",
  // validate(userValidation.getuserList),
  userController.getUserList
);

/**  Delete user */
router.delete(
  "/delete-user/:userId",
  // validate(userValidation.getuserList),
  userController.deleteuser
);

module.exports = router;