const express = require("express");
// const { bookValidation } = require("../../validations");
const { bookController } = require("../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create book */
router.post(
  "/create-book",
  // validate(bookValidation.createbook),
  bookController.createbook
);


/** Get book list */
// router.get(
//   "/list",
//   // validate(bookValidation.getbookList),
//   bookController.getbookList
// );

module.exports = router;