const express = require("express");
const { hotelController } = require("../../controllers");

const router = express.Router();

/** create hotel */
router.post(
  "/create-hotel",
  hotelController.createHotel
);

/** Get hotel list */
router.get(
  "/list",
  hotelController.getHotelList
);

/** Get hotel details by id */
router.get(
  "/get-details/:hotelId",
  hotelController.getHotelDetails
);

/** upadate hotel */
router.put(
  "/update-details/:hotelId",
  hotelController.updateDetails
);

/**  Delete hotel */
router.delete(
  "/delete-hotel/:hotelId",
  hotelController.deletehotel
);

module.exports = router;