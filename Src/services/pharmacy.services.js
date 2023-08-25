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
  return pharmacy.find()
};

const deletepharmacy = async(PharmacyId) => {
  return pharmacy.findByIdAndDelete(PharmacyId);
};

module.exports = {
  createPharmacy,
  getPharmacyList,
  deletepharmacy
};