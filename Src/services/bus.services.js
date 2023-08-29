const { Bus } = require("../models");

/**
 * Create bus
 * @param {object} reqBody
 * @returns {Promise<bus>}
 */
const createBus = async (reqBody) => {
  return Bus.create(reqBody);
};

const getBusList = async(req, res)=>{
  return Bus.find({$or : [{is_active : false}]});
};

const getBusById = async (busId) => {
  return Bus.findById(busId);
};

const updateDetails = async (busId, updateBody) => {
  return Bus.findByIdAndUpdate(busId, { $set: updateBody });
};

const deletebus = async(BusId) => {
  return Bus.findByIdAndDelete(BusId);
};

module.exports = {
  createBus,
  getBusList,
  updateDetails,
  getBusById,
  deletebus
};