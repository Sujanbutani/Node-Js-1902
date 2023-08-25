const express = require("express");
const router = express.Router();
const  userValidation  = require("../../validations/user.validation");
const  userController  = require("../../controllers/user.controllers");

/** create user */
router.post(
    "/create-user",
        // validate(userValidation.createUser),
        userController.createUser
);

// /** Get user list */
// router.get(
//     "/list",
//     //     validate(userValidation.getUserList),
//      userController.getUserList
// );

module.exports = router;
