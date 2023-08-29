const express = require("express");
const { jewelleryController } = require("../../controllers");

const router = express.Router();

/** create jewellery */
router.post(
  "/create-jewellery",
  jewelleryController.createJewellery
);

/** Get jewellery list */
router.get(
  "/list",
  jewelleryController.getJewelleryList
);

/** Get jewellery details by id */
router.get(
  "/get-details/:jewelleryId",
  jewelleryController.getJewelleryDetails
);

/** upadate jewellery */
router.put(
  "/update-details/:jewelleryId",
  jewelleryController.updateDetails
);

/**  Delete jewellery */
router.delete(
  "/delete-jewellery/:jewelleryId",
  jewelleryController.deletejewellery
);

module.exports = router;