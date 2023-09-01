// const express = require("express");
// const {tokenValidation} = require("../../validations");
// const {tokenController} = require("../../controllers");
// const auth = require("../../middlewares/auth");

// const route = express.Router();

// // create jwt
// route.post(
//     "/create-token",
//     auth(),
//     tokenController.createToken
// );

// // verify token
// route.get("/verify-token", auth(), tokenController.verifyToken);

// module.exports = router;