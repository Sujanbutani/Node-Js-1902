const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");
const bookRoute = require("./book.route");
const busRoute = require("./bus.route");
const schoolRoute = require("./school.route");
const hotelRoute = require("./hotel.route");
const travelRoute = require("./travel.route");
const movieRoute = require("./movie.route");
const musicRoute = require("./music.route");
const pharmacyRoute = require("./pharmacy.route");
const jewelleryRoute = require("./jewellery.route")
const groceryRoute = require("./grocery.route")
const satationaryRoute = require("./satationary.route")
const e_commerceRoute=require("./e-commerce.route");
const mobileRoute=require("./mobile.route");



const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product", productRoute);
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
router.use("/satationary", satationaryRoute);
router.use("/e-commerce",e_commerceRoute);
router.use("/mobile",mobileRoute);



module.exports = router;