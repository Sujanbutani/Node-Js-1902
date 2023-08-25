const { school } = require("../models");

/**
 * Create school
 * @param {object} reqBody
 * @returns {Promise<school>}
 */
const createSchool = async (reqBody) => {
  return school.create(reqBody);
};

const getSchoolList = async(req, res)=>{
  return school.find({$or : [{is_active : false}]})
};

const deleteschool = async(SchoolId) => {
  return school.findByIdAndDelete(SchoolId);
};

module.exports = {
  createSchool,
  getSchoolList,
  deleteschool
};