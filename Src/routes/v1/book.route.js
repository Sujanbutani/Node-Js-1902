const express = require("express");
// const { userValidation } = require("../../validations");
const { bookController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const  router = express.Router();

/** create book */
router.post(
  "/create-book",
  // validate(userValidation.createBook),
  bookController.createBook
);

/** Get Book list */
// router.get(
//   "/list",
//   // validate(bookValidation.getBookList),
//   bookController.getBookList
// );

module.exports = router;