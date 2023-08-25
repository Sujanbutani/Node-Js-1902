const express = require("express");
// const { userValidation } = require("../../validations");
const { hotelController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create hotel */
router.post(
  "/create-hotel",
  // validate(hotelValidation.createHotel),
  hotelController.createHotel
);

/** Get hotel list */
router.get(
  "/list",
  // validate(hotelValidation.gethotelList),
  hotelController.getHotelList
);

/**  Delete hotel */
router.delete(
  "/delete-hotel/:hotelId",
  // validate(hotelValidation.gethotelList),
  hotelController.deletehotel
);

module.exports = router;