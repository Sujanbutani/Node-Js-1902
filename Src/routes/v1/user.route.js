const express = require("express");

const router = express.Router();

/** create user */
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);

/** Get user list */
router.get(
    "/list",
    validate(userValidation.getUserList),
    userController.getUserList
);

module.exports = router;