const express = require("express");
const { userController } = require("../../controllers");

const router = express.Router();

/** create user */
router.post(
  "/create-user",
  userController.createUser
);

/** Get user list */
router.get(
  "/list",
  userController.getUserList
);

/** Get user details by id */
router.get(
  "/get-details/:userId",
  userController.getUserDetails
);

/** upadate user */
router.put(
  "/update-details/:userId",
  userController.updateDetails
);

/**  Delete user */
router.delete(
  "/delete-user/:userId",
  userController.deleteuser
);

module.exports = router;