const express = require("express");
// const { userValidation } = require("../../validations");
const { groceryController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create grocery */
router.post(
  "/create-grocery",
  // validate(groceryValidation.creategrocery),
  groceryController.createGrocery
);

/** Get grocery list */
router.get(
  "/list",
  // validate(groceryValidation.getgroceryList),
  groceryController.getGroceryList
);

/**  Delete grocery */
router.delete(
  "/delete-grocery/:groceryId",
  // validate(groceryValidation.getgroceryList),
  groceryController.deletegrocery
);

module.exports = router;