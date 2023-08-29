const { hotel } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<hotel>}
 */
const createHotel = async (reqBody) => {
  return hotel.create(reqBody);
};

const getHotelList = async(req, res)=>{
  return hotel.find({$or :[{is_active : false}]})
};

const getHotelById = async (hotelId) => {
  return hotel.findById(hotelId);
};

const updateDetails = async (hotelId, updateBody) => {
  return hotel.findByIdAndUpdate(hotelId, { $set: updateBody });
};


const deletehotel = async(HotelId) => {
  return hotel.findByIdAndDelete(HotelId);
};

module.exports = {
  createHotel,
  getHotelList,
  getHotelById,
  updateDetails,
  deletehotel
};