const express = require("express");
const { groceryController } = require("../../controllers");

const router = express.Router();

/** create grocery */
router.post(
  "/create-grocery",
  groceryController.createGrocery
);

/** Get grocery list */
router.get(
  "/list",
  groceryController.getGroceryList
);

/** Get grocery details by id */
router.get(
  "/get-details/:groceryId",
  groceryController.getGroceryDetails
);

/** upadate grocery */
router.put(
  "/update-details/:groceryId",
  groceryController.updateDetails
);

/**  Delete grocery */
router.delete(
  "/delete-grocery/:groceryId",
  groceryController.deletegrocery
);

module.exports = router;