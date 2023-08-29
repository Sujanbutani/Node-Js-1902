const express = require("express");
const { productController } = require("../../controllers");

const router = express.Router();

/** create product */
router.post(
  "/create-product",
  productController.createProduct
);

/** Get product list */
router.get(
  "/list",
  productController.getProductList
);

/** Get product details by id */
router.get(
  "/get-details/:productId",
  productController.getProductDetails
);

/** upadate product */
router.put(
  "/update-details/:productId",
  productController.updateDetails
);

/**  Delete product */
router.delete(
  "/delete-product/:productId",
  productController.deleteproduct
);

module.exports = router;