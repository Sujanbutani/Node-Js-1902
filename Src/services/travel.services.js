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
  return travel.find()
};

const deletetravel = async(TravelId) => {
  return travel.findByIdAndDelete(TravelId);
};

module.exports = {
  createTravel,
  getTravelList,
  deletetravel
};