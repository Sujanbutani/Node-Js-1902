const { hotelService} = require("../services");

/** create hotel */
const createHotel = async (req, res) => {
  try {
    const reqBody = req.body;
    // const hotelExists = await hotelService.gethotelByEmail(reqBody.email);
    // if (hotelExists) {
    //   throw new Error("hotel already created by this email!");
    // }

    const hotel = await hotelService.createHotel(reqBody);
    if (!hotel) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'hotel Create Successfully',
      data: { hotel },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get hotel list */
const getHotelList = async (req, res) => {
  try {
    const getList = await hotelService.getHotelList(req, res);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete hotel */
const deletehotel = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    // const userExists = await userService.getUserById(userId);
    if (!hotelId) {
      throw new Error("Hotel not found!");
    }

    await hotelService.deletehotel(hotelId);

    res.status(200).json({
      success: true,
      message: "Hotel delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createHotel,
  getHotelList,
  deletehotel
};