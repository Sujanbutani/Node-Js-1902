const express = require("express");
// const { userValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const  router = express.Router();

/** create user */
router.post(
  "/create-category",
  // validate(userValidation.createUser),
  categoryController.createcategory
);
/** Get grocery list */
router.get(
  "/list",
  // validate(groceryValidation.getgroceryList),
  categoryController.getCategoryList
);

/**  Delete grocery */
router.delete(
  "/delete-category/:categoryId",
  // validate(categoryValidation.getcategoryList),
  categoryController.deletecategory
);

module.exports = router;