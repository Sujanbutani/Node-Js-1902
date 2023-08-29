const express = require("express");
const { categoryController } = require("../../controllers");

const  router = express.Router();

/** create category */
router.post(
  "/create-category",
  categoryController.createcategory
);
/** Get grocery list */
router.get(
  "/list",
  categoryController.getCategoryList
);

/** Get category details by id */
router.get(
  "/get-details/:categoryId",
  categoryController.getCategoryDetails
);

/** upadate category */
router.put(
  "/update-details/:categoryId",
  categoryController.updateDetails
);

/**  Delete grocery */
router.delete(
  "/delete-category/:categoryId",
  categoryController.deletecategory
);

module.exports = router;