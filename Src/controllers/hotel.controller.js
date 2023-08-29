const { hotelService} = require("../services");

/** create hotel */
const createHotel = async (req, res) => {
  try {
    const reqBody = req.body;

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
      message: "Get hotel list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
// Get hotel details by id

const getHotelDetails = async (req, res) => {
  try {
    const getDetails = await hotelService.getHotelById(req.params.hotelId);
    if (!getDetails) {
      throw new Error("Hotel not found!");
    }

    res.status(200).json({
      success: true,
      message: "Hotel details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** hotel details update by id */
const updateDetails = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const hotelExists = await hotelService.getHotelById(hotelId);
    if (!hotelExists) {
      throw new Error("Hotel not found!");
    }

    await hotelService.updateDetails(hotelId, req.body);
    res
      .status(200)
      .json({ success: true, message: "Hotel details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete hotel */
const deletehotel = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
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
  updateDetails,
  getHotelDetails,
  deletehotel
};