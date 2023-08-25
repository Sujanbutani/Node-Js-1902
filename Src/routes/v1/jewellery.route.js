const express = require("express");
// const { userValidation } = require("../../validations");
const { jewelleryController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create jewellery */
router.post(
  "/create-jewellery",
  // validate(jewelleryValidation.createjewellery),
  jewelleryController.createJewellery
);

/** Get jewellery list */
router.get(
  "/list",
  // validate(jewelleryValidation.getjewelleryList),
  jewelleryController.getJewelleryList
);

/**  Delete jewellery */
router.delete(
  "/delete-jewellery/:jewelleryId",
  // validate(jewelleryValidation.getjewelleryList),
  jewelleryController.deletejewellery
);

module.exports = router;