const express = require("express");
const { orderController } = require("../../controllers");

const router = express.Router();

/** create order */
router.post(
  "/create-order",
  orderController.createOrder
);

/** Get order list */
router.get(
  "/list",
  orderController.getOrderList
);

/** Get order details by id */
router.get(
  "/get-details/:orderId",
  orderController.getOrderDetails
);

/** upadate order */
router.put(
  "/update-details/:orderId",
  orderController.updateDetails
);

/**  Delete order */
router.delete(
  "/delete-order/:orderId",
  orderController.deleteorder
);

module.exports = router;