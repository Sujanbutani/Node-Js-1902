const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const bookRoute = require("./book.route");
const busRoute = require("./bus.route");
const schoolRoute = require("./school.route");
const hotelRoute = require("./hotel.route");
const travelRoute = require("./travel.route");
const movieRoute = require("./movie.route");
const musicRoute = require("./music.route");
const pharmacyRoute = require("./pharmacy.route");
const jewelleryRoute = require("./jewellery.route")
const stationaryRoute = require("./satationary.route")
const groceryRoute = require("./grocery.route")


const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/book", bookRoute);
router.use("/bus", busRoute);
router.use("/school", schoolRoute);
router.use("/hotel", hotelRoute);
router.use("/travel", travelRoute);
router.use("/movie", movieRoute);
router.use("/music", musicRoute);
router.use("/pharmacy", pharmacyRoute);
router.use("/jewellery", jewelleryRoute);
router.use("/grocery", groceryRoute);

module.exports = router;