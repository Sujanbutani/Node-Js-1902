const { jewellery } = require("../models");

/**
 * Create jewellery
 * @param {object} reqBody
 * @returns {Promise<jewellery>}
 */
const createJewellery = async (reqBody) => {
  return jewellery.create(reqBody);
};

const getJewelleryList = async(req, res)=>{
  return jewellery.find({$or : [{is_active : false}]})
};

const getJewelleryById = async (jewelleryId) => {
  return jewellery.findById(jewelleryId);
};

const updateDetails = async (jewelleryId, updateBody) => {
  return jewellery.findByIdAndUpdate(jewelleryId, { $set: updateBody });
};

const deletejewellery = async(JewelleryId) => {
  return jewellery.findByIdAndDelete(JewelleryId);
};

module.exports = {
  createJewellery,
  getJewelleryList,
  getJewelleryById,
  updateDetails,
  deletejewellery
};