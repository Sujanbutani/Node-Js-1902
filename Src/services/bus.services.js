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
  return Bus.find()
};

const deletebus = async(BusId) => {
  return Bus.findByIdAndDelete(BusId);
};

module.exports = {
  createBus,
  getBusList,
  deletebus
};