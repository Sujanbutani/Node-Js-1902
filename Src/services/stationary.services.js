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
  return stationary.find()
};

const deletestationary = async(StationaryId) => {
  return stationary.findByIdAndDelete(StationaryId);
};

module.exports = {
  createStationary,
  getStationaryList,
  deletestationary
};