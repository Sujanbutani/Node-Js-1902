const { travel } = require("../models");

/**
 * Create travel
 * @param {object} reqBody
 * @returns {Promise<travel>}
 */
const createTravel = async (reqBody) => {
  return travel.create(reqBody);
};

const getTravelList = async(req, res)=>{
  return travel.find({$or : [{is_active : false}]})
};

const deletetravel = async(TravelId) => {
  return travel.findByIdAndDelete(TravelId);
};

module.exports = {
  createTravel,
  getTravelList,
  deletetravel
};