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

const getTravelById = async (travelId) => {
  return travel.findById(travelId);
};

const updateDetails = async (travelId, updateBody) => {
  return travel.findByIdAndUpdate(travelId, { $set: updateBody });
};

const deletetravel = async(TravelId) => {
  return travel.findByIdAndDelete(TravelId);
};

module.exports = {
  createTravel,
  getTravelList,
  getTravelById,
  updateDetails,
  deletetravel
};