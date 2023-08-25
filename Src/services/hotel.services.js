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

const deletehotel = async(HotelId) => {
  return hotel.findByIdAndDelete(HotelId);
};

module.exports = {
  createHotel,
  getHotelList,
  deletehotel
};