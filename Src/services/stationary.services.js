const { stationary } = require("../models");

/**
 * Create stationary
 * @param {object} reqBody
 * @returns {Promise<stationary>}
 */
const createStationary = async (reqBody) => {
  return stationary.create(reqBody);
};

const getStationaryList = async(req, res)=>{
  return stationary.find({$or :[{is_active : false}]})
};

const getStationaryById = async (stationaryId) => {
  return stationary.findById(stationaryId);
};

const updateDetails = async (stationaryId, updateBody) => {
  return stationary.findByIdAndUpdate(stationaryId, { $set: updateBody });
};

const deletestationary = async(StationaryId) => {
  return stationary.findByIdAndDelete(StationaryId);
};

module.exports = {
  createStationary,
  getStationaryList,
  getStationaryById,
  updateDetails,
  deletestationary
};