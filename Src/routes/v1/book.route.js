const express = require("express");
const { bookController } = require("../../controllers");

const  router = express.Router();

/** create book */
router.post(
  "/create-book",
  bookController.createBook
);

/** Get Book list */
router.get(
  "/list",
  bookController.getBookList
);

/** Get user details by id */
router.get(
  "/get-details/:bookId",
  bookController.getBookDetails
);

/** upadate book */
router.put(
  "/update-details/:bookId",
  bookController.updateDetails
);

/**  Delete book */
router.delete(
  "/delete-book/:bookId",
  bookController.deletebook
);

module.exports = router;