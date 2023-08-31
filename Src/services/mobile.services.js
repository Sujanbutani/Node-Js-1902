const { mobile } = require("../models");

/**
 * Create mobile
 * @param {object} reqBody
 * @returns {Promise<mobile>}
 */
const createMobile = async (reqBody) => {
  return mobile.create(reqBody);
};

const getMobileList = async(req, res)=>{
  return mobile.find({$or : [{is_active : true}]})
};

const getMobileById = async (mobileId) => {
  return mobile.findById(mobileId);
};

const updateDetails = async (mobileId, updateBody) => {
  return mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
};

const deletemobile = async(MobileId) => {
  return mobile.findByIdAndDelete(MobileId);
};

module.exports = {
  createMobile,
  getMobileList,
  getMobileById,
  updateDetails,
  deletemobile
};