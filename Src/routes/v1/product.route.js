const express = require("express");
// const { userValidation } = require("../../validations");
const { productController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create product */
router.post(
  "/create-product",
  // validate(productValidation.createproduct),
  productController.createProduct
);

/** Get product list */
router.get(
  "/list",
  // validate(productValidation.getproductList),
  productController.getProductList
);

/**  Delete product */
router.delete(
  "/delete-product/:productId",
  // validate(productValidation.getproductList),
  productController.deleteproduct
);

module.exports = router;