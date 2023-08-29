const { pharmacy } = require("../models");

/**
 * Create pharmacy
 * @param {object} reqBody
 * @returns {Promise<pharmacy>}
 */
const createPharmacy = async (reqBody) => {
  return pharmacy.create(reqBody);
};

const getPharmacyList = async(req, res)=>{
  return pharmacy.find({$or : [{is_active : false}]})
};

const getPharmacyById = async (pharmacyId) => {
  return pharmacy.findById(pharmacyId);
};

const updateDetails = async (pharmacyId, updateBody) => {
  return pharmacy.findByIdAndUpdate(pharmacyId, { $set: updateBody });
};

const deletepharmacy = async(PharmacyId) => {
  return pharmacy.findByIdAndDelete(PharmacyId);
};

module.exports = {
  createPharmacy,
  getPharmacyList,
  getPharmacyById,
  updateDetails,
  deletepharmacy
};